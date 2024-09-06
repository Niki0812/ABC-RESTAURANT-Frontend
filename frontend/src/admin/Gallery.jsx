import React, { useState, useEffect } from 'react';
import '../admin/css/Gallery.css'; 

const Gallery = () => {
  const [galleryData, setGalleryData] = useState({
    id: 0,
    url: '',
    description: '',
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

  const [galleryList, setGalleryList] = useState([]);

  // Handle form input change
  const handleChange = (e) => {
    const { name, value } = e.target;
    setGalleryData((prevData) => ({
      ...prevData,
      [name]: value
    }));
  };

  // Handle restaurant-specific input change
  const handleResturantChange = (e) => {
    const { name, value } = e.target;
    setGalleryData((prevData) => ({
      ...prevData,
      resturant: {
        ...prevData.resturant,
        [name]: value
      }
    }));
  };

  // Handle form submission to post gallery data
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch('https://localhost:7250/api/Gallery/AdminPost', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'accept': 'text/plain',
        },
        body: JSON.stringify(galleryData),
      });

      if (!response.ok) {
        throw new Error('Network response was not ok');
      }

      const result = await response.text();
      console.log('Success:', result);
      fetchGallery(); // Refresh gallery list after posting a new item
    } catch (error) {
      console.error('Error:', error);
    }
  };

  // Fetch gallery items
  const fetchGallery = async () => {
    try {
      const response = await fetch('https://localhost:7250/api/Gallery/CustomerGet', {
        headers: {
          'accept': 'text/plain',
        },
      });

      if (!response.ok) {
        throw new Error('Failed to fetch gallery items');
      }

      const data = await response.json();
      setGalleryList(data);
    } catch (error) {
      console.error('Error fetching gallery items:', error);
    }
  };

  // Handle delete gallery item
  const handleDelete = async (id) => {
    try {
      const response = await fetch(`https://localhost:7250/api/Gallery/AdminDelete/${id}`, {
        method: 'DELETE',
        headers: {
          'accept': 'text/plain',
        },
      });

      if (!response.ok) {
        throw new Error('Failed to delete gallery item');
      }

      console.log('Delete success');
      fetchGallery(); // Refresh the list after deletion
    } catch (error) {
      console.error('Error deleting gallery item:', error);
    }
  };

  useEffect(() => {
    fetchGallery(); // Fetch gallery items on component mount
  }, []);

  return (
    <div className="gallery-container">
      {/* Left Side: Form to add a gallery item */}
      <div className="gallery-form">
        <h2>Add Gallery Item</h2>
        <form onSubmit={handleSubmit}>
          <label>
            URL:
            <input
              type="text"
              name="url"
              value={galleryData.url}
              onChange={handleChange}
            />
          </label>
          <br />
          <label>
            Description:
            <input
              type="text"
              name="description"
              value={galleryData.description}
              onChange={handleChange}
            />
          </label>
          <br />
          <button type="submit">Submit</button>
        </form>
      </div>

      {/* Right Side: Table to display gallery items */}
      <div className="gallery-table">
        <h2>Gallery Items</h2>
        <table>
          <thead>
            <tr>
              <th>ID</th>
              <th>Image</th>
              <th>Description</th>
             
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {galleryList.map((item) => (
              <tr key={item.id}>
                <td>{item.id}</td>
                <td>
                  {item.url ? (
                    <img src={item.url} alt={item.description} className="gallery-image" />
                  ) : (
                    'No image available'
                  )}
                </td>
                <td>{item.description}</td>
                
                <td>
                  <button onClick={() => handleDelete(item.id)}>Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Gallery;
