// ViewMenu.jsx
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import '../admin/css/ViewMenu.css'; // Assuming you have some styles for your table

const ViewMenu = () => {
  const [menuItems, setMenuItems] = useState([]);

  useEffect(() => {
    // Fetch menu items from the API
    const fetchMenuItems = async () => {
      try {
        const response = await axios.get('https://localhost:7250/api/Menu/CustomerGet');
        setMenuItems(response.data);
      } catch (error) {
        console.error('Error fetching menu items:', error);
      }
    };

    fetchMenuItems();
  }, []);

  // Function to handle delete
  const handleDelete = async (id) => {
    try {
      await axios.delete(`https://localhost:7250/api/Menu/AdminDelete/${id}`);
      setMenuItems(menuItems.filter(item => item.id !== id));
    } catch (error) {
      console.error('Error deleting menu item:', error);
    }
  };

  return (
    <div className="view-menu">
      <h1>Menu</h1>
      <table>
        <thead>
          <tr>
            <th>Image</th>
            <th>Name</th>
            <th>Description</th>
            <th>Price</th>
            <th>Category</th>
            <th>Service Type</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {menuItems.map(item => (
            <tr key={item.id}>
              <td><img src={item.url} alt={item.name} className="menu-item-image" /></td>
              <td>{item.name}</td>
              <td>{item.description}</td>
              <td>{item.price}</td>
              <td>{item.category}</td>
              <td>{item.serviceType}</td>
              <td>
                <button className="button" onClick={() => handleDelete(item.id)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ViewMenu;
