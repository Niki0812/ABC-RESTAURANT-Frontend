import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './css/Query.css';

const Query = () => {
  const [formData, setFormData] = useState({
    id: 0,
    subject: '',
    message: '',
    date: new Date().toISOString(),
    status: '',
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
    }
  });

  const navigate = useNavigate(); // Initialize useNavigate for redirection

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name.includes('customer.')) {
      const customerField = name.split('.')[1];
      setFormData({
        ...formData,
        customer: {
          ...formData.customer,
          [customerField]: value
        }
      });
    } else {
      setFormData({
        ...formData,
        [name]: value
      });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('https://localhost:7250/api/Query/CustomerPost', formData, {
        headers: {
          'accept': 'text/plain',
          'Content-Type': 'application/json'
        }
      });
      toast.success('Successfully sent to Admin!', {
        position: "top-center",
        autoClose: 2000,
        onClose: () => navigate('/') // Redirect after toast closes
      });
      console.log('Response:', response.data);
    } catch (error) {
      console.error('Error:', error);
      toast.error('Failed to send the query.');
    }
  };

  return (
    <div className="query-form-container">
      <ToastContainer />
      <form className="query-form" onSubmit={handleSubmit}>
        <h2>Submit Your Query</h2>
        <div className="form-group">
          <label>Subject:</label>
          <input type="text" name="subject" value={formData.subject} onChange={handleChange} />
        </div>
        <div className="form-group">
          <label>Message:</label>
          <input type="text" name="message" value={formData.message} onChange={handleChange} />
        </div>
        <div className="form-group">
          <label>Customer Email:</label>
          <input type="email" name="customer.email" value={formData.customer.email} onChange={handleChange} />
        </div>
        <div className="form-group">
          <label>Customer First Name:</label>
          <input type="text" name="customer.firstName" value={formData.customer.firstName} onChange={handleChange} />
        </div>
        <div className="form-group">
          <label>Customer Last Name:</label>
          <input type="text" name="customer.lastName" value={formData.customer.lastName} onChange={handleChange} />
        </div>
        <div className="form-group">
          <label>Customer Phone Number:</label>
          <input type="text" name="customer.phoneNumber" value={formData.customer.phoneNumber} onChange={handleChange} />
        </div>
        <button type="submit" className="submit-btn">Submit Query</button>
      </form>
    </div>
  );
};

export default Query;
