import React, { useState, useEffect } from 'react';
import axios from 'axios';
import '../components/css/Review.css';

const Review = () => {
  const [review, setReview] = useState({
    id: 0,
    comment: '',
    rating: '',
    date: new Date().toISOString(),
    customerId: 0,
    customer: {
      id: 0,
      email: '',
      password: '',
      firstName: '',
      lastName: '',
      gender: '',
      phoneNumber: '',
      dob: new Date().toISOString(),
      nic: ''
    },
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

  const [reviews, setReviews] = useState([]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setReview((prevState) => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleCustomerChange = (e) => {
    const { name, value } = e.target;
    setReview((prevState) => ({
      ...prevState,
      customer: {
        ...prevState.customer,
        [name]: value
      }
    }));
  };

  const handleResturantChange = (e) => {
    const { name, value } = e.target;
    setReview((prevState) => ({
      ...prevState,
      resturant: {
        ...prevState.resturant,
        [name]: value
      }
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('https://localhost:7250/api/Review/CustomerPost', review, {
        headers: {
          'Content-Type': 'application/json',
          'accept': 'text/plain'
        }
      });
      console.log(response.data);
      // handle successful response
    } catch (error) {
      console.error('There was an error submitting the review!', error);
      // handle error
    }
  };

  const fetchReviews = async () => {
    try {
      const response = await axios.get('https://localhost:7250/api/Review/CustomerView', {
        headers: {
          'accept': 'text/plain'
        }
      });
      setReviews(response.data);
    } catch (error) {
      console.error('There was an error fetching the reviews!', error);
    }
  };

  useEffect(() => {
    fetchReviews();
  }, []);

  return (
    <>
      <form onSubmit={handleSubmit}>
        <div>
            <h1>Customer Add Review</h1>
          <label>Comment:</label>
          <input type="text" name="comment" value={review.comment} onChange={handleChange} />
        </div>
        <div>
          <label>Rating:</label>
          <input type="text" name="rating" value={review.rating} onChange={handleChange} />
        </div>
        {/* Add more fields for customer and restaurant details as needed */}
        <button type="submit">Submit Review</button>
      </form>

      <div className="reviews-list">
        <h2>Customer Reviews</h2>
        {reviews.map((review) => (
          <div key={review.id} className="review">
            <p><strong>Comment:</strong> {review.comment}</p>
            <p><strong>Rating:</strong> {review.rating}</p>
            <p><strong>Date:</strong> {new Date(review.date).toLocaleDateString()}</p>
          
          </div>
        ))}
      </div>
    </>
  );
};

export default Review;
