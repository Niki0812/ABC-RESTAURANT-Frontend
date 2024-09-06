import React, { useState, useEffect } from 'react';
import axios from 'axios';
import '../admin/css/Facility.css';

const Facility = () => {
  const [facility, setFacility] = useState({
    id: 0,
    url: '',
    name: '',
    description: '',
    type: '',
    resturantId: 0,
    resturant: {
      id: 0,
      name: '',
      location: '',
      phone: '',
      email: '',
      overview: ''
    }
  });

  const [facilitiesList, setFacilitiesList] = useState([]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFacility(prevFacility => ({
      ...prevFacility,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    axios.post('https://localhost:7250/api/Facility/AdminPost', facility, {
      headers: {
        'Accept': 'text/plain',
        'Content-Type': 'application/json'
      }
    })
    .then(response => {
      console.log('Facility added successfully:', response.data);
      fetchFacilities();  // Refresh the facility list after adding a new one
    })
    .catch(error => {
      console.error('There was an error adding the facility:', error);
    });
  };

  const handleDelete = (id) => {
    axios.delete(`https://localhost:7250/api/Facility/AdminDelete/${id}`, {
      headers: {
        'Accept': 'text/plain'
      }
    })
    .then(response => {
      console.log('Facility deleted successfully:', response.data);
      fetchFacilities();  // Refresh the facility list after deletion
    })
    .catch(error => {
      console.error('There was an error deleting the facility:', error);
    });
  };

  // Fetch facilities from the API
  const fetchFacilities = () => {
    axios.get('https://localhost:7250/api/Facility/CustomerGet', {
      headers: {
        'Accept': 'text/plain'
      }
    })
    .then(response => {
      setFacilitiesList(response.data);
    })
    .catch(error => {
      console.error('There was an error fetching the facilities:', error);
    });
  };

  useEffect(() => {
    fetchFacilities();
  }, []);

  return (
    <div className="facility-container">
      {/* Facility Form - Left Side */}
      <div className="facility-form">
        <h2>Add New Facility</h2>
        <form onSubmit={handleSubmit}>
          <div>
            <label>
              URL:
              <input type="text" name="url" value={facility.url} onChange={handleChange} />
            </label>
          </div>
          <div>
            <label>
              Name:
              <input type="text" name="name" value={facility.name} onChange={handleChange} />
            </label>
          </div>
          <div>
            <label>
              Description:
              <input type="text" name="description" value={facility.description} onChange={handleChange} />
            </label>
          </div>
          <div>
            <label>
              Type:
              <input type="text" name="type" value={facility.type} onChange={handleChange} />
            </label>
          </div>
          <button type="submit">Add Facility</button>
        </form>
      </div>

      {/* Facility List Table - Right Side */}
      <div className="facility-table">
        <h2>Facility List</h2>
        <table>
          <thead>
            <tr>
              <th>ID</th>
              <th>Image</th>
              <th>Name</th>
              <th>Type</th>
              <th>Description</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {facilitiesList.map((facilityItem) => (
              <tr key={facilityItem.id}>
                <td>{facilityItem.id}</td>
                <td>
                  {facilityItem.url ? (
                    <img src={facilityItem.url} alt={facilityItem.name} className="facility-image" />
                  ) : (
                    'No image available'
                  )}
                </td>
                <td>{facilityItem.name}</td>
                <td>{facilityItem.type}</td>
                <td>{facilityItem.description}</td>
                <td>
                  <button onClick={() => handleDelete(facilityItem.id)}>Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Facility;
