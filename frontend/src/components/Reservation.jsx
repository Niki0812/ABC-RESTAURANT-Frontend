import React, { useState } from 'react';
import './css/Reservation.css';

const Reservation = () => {
  const [formData, setFormData] = useState({
    tablenumber: '10',
    date: '2024-08-30T08:35:15.673Z',
    numberofSeats: '',
    type: '',
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
      dob: '2024-08-30T08:35:15.673Z',
      nic: '',
    },
    resturantId: 0,
    resturant: {
      id: 0,
      name: '',
      location: '',
      phone: '',
      email: '',
      overview: '',
    },
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleNestedChange = (e, category) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [category]: {
        ...prevData[category],
        [name]: value,
      },
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('https://localhost:7250/api/Reservation/CustomerReservation', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'accept': 'text/plain',
        },
        body: JSON.stringify(formData),
      });
      if (response.ok) {
        const data = await response.json();
        console.log('Reservation successful:', data);
        // Handle success (e.g., clear form, display success message)
      } else {
        console.error('Error making reservation:', response.statusText);
        // Handle error (e.g., display error message)
      }
    } catch (error) {
      console.error('Request failed:', error);
      // Handle error (e.g., display error message)
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>ABC RESTAURANT TABLE RESERVATION</h2>
      <div>
        <label>Table Number:</label>
        <select name="tablenumber" value={formData.tablenumber} onChange={handleChange}>
          <option value="1">Table 1</option>
          <option value="2">Table 2</option>
          <option value="3">Table 3</option>
          <option value="4">Table 4</option>
          <option value="5">Table 5</option>
          <option value="6">Table 6</option>
          <option value="7">Table 7</option>
          <option value="8">Table 8</option>
          <option value="9">Table 9</option>
          <option value="10">Table 10</option>
        </select>
      </div>
      <div>
        <label>Date:</label>
        <input type="datetime-local" name="date" value={formData.date} onChange={handleChange} />
      </div>
      <div>
        <label>Number of Seats:</label>
        <input type="text" name="numberofSeats" value={formData.numberofSeats} onChange={handleChange} />
      </div>
      <div>
        <label>Type:</label>
        <input type="text" name="type" value={formData.type} onChange={handleChange} />
      </div>

      <button type="submit">Submit Reservation</button>
    </form>
  );
};

export default Reservation;
