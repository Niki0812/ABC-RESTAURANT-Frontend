import React, { useEffect, useState } from 'react';
import axios from 'axios';
import '../admin/css/ViewReview.css';


const ViewReview = () => {
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    // Fetch reviews from the API
    axios.get('https://localhost:7250/api/Review/CustomerView')
      .then(response => {
        setReviews(response.data);
      })
      .catch(error => {
        console.error('There was an error fetching the reviews!', error);
      });
  }, []);

  return (
    <div>
      <h2>Customer Reviews</h2>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Comment</th>
            <th>Rating</th>
            <th>Date</th>
            <th>Customer Name</th>
            <th>Customer Email</th>
            <th>Restaurant Name</th>
            <th>Restaurant Location</th>
          </tr>
        </thead>
        <tbody>
          {reviews.map(review => (
            <tr key={review.id}>
              <td>{review.id}</td>
              <td>{review.comment}</td>
              <td>{review.rating}</td>
              <td>{new Date(review.date).toLocaleDateString()}</td>
              <td>{`${review.customer.firstName} ${review.customer.lastName}`}</td>
              <td>{review.customer.email}</td>
              <td>{review.resturant.name}</td>
              <td>{review.resturant.location}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ViewReview;
