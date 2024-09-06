import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './css/Facility.css'; // Import the CSS file

const Facility = () => {
  const [facilities, setFacilities] = useState([]);
  const [filteredFacilities, setFilteredFacilities] = useState([]);
  const [searchType, setSearchType] = useState('');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchFacilities = async () => {
      try {
        const response = await axios.get('https://localhost:7250/api/Facility/CustomerGet');
        setFacilities(response.data);
        setFilteredFacilities(response.data);
      } catch (error) {
        console.error('Error fetching facilities:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchFacilities();
  }, []);

  useEffect(() => {
    const fetchFilteredFacilities = async () => {
      if (searchType) {
        try {
          const response = await axios.get(`https://localhost:7250/api/Facility/searchByType/${searchType}`);
          setFilteredFacilities(response.data);
        } catch (error) {
          console.error('Error fetching filtered facilities:', error);
        }
      } else {
        setFilteredFacilities(facilities);
      }
    };

    fetchFilteredFacilities();
  }, [searchType, facilities]);

  if (loading) return <p>Loading...</p>;

  return (
    <div className="facility-container">
      <h1 className="facility-heading">ABC RESTAURANT FACILITY</h1>
      <input
        type="text"
        placeholder="Search by type..."
        value={searchType}
        onChange={(e) => setSearchType(e.target.value)}
        className="search-input"
      />
      {filteredFacilities.map(facility => (
        <div key={facility.id} className="facility-item">
          <h2>{facility.name}</h2>
          <p>{facility.description}</p>
          <img src={facility.url} alt={facility.name} />
        </div>
      ))}
    </div>
  );
};

export default Facility;
