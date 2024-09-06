import React, { useState, useEffect } from 'react';
import '../admin/css/ViewQuery.css'; // Optional: for styling the table

const ViewQuery = () => {
  const [queries, setQueries] = useState([]);

  useEffect(() => {
    const fetchQueries = async () => {
      try {
        const response = await fetch('https://localhost:7250/api/Query/Adminview', {
          method: 'GET',
          headers: {
            'Accept': 'application/json'
          }
        });
        const data = await response.json();
        setQueries(data);
      } catch (error) {
        console.error('Error fetching queries:', error);
      }
    };

    fetchQueries();
  }, []);

  const handleDelete = async (id) => {
    try {
      const response = await fetch(`https://localhost:7250/api/Query/Admindelete/${id}`, {
        method: 'DELETE',
        headers: {
          'Accept': 'text/plain'
        }
      });
      if (response.ok) {
        setQueries(queries.filter(query => query.id !== id));
      } else {
        console.error('Failed to delete the query');
      }
    } catch (error) {
      console.error('Error deleting query:', error);
    }
  };

  return (
    <div className="view-query">
      <h1>Query List</h1>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Subject</th>
            <th>Message</th>
            <th>Date</th>
            <th>Status</th>
            <th>Customer ID</th>
            <th>Customer Email</th>
            <th>Customer Name</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {queries.map(query => (
            <tr key={query.id}>
              <td>{query.id}</td>
              <td>{query.subject}</td>
              <td>{query.message}</td>
              <td>{new Date(query.date).toLocaleString()}</td>
              <td>{query.status}</td>
              <td>{query.customerId}</td>
              <td>{query.customer.email}</td>
              <td>{query.customer.firstName} {query.customer.lastName}</td>
              <td>
                <button onClick={() => handleDelete(query.id)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ViewQuery;
