import React, { useState, useEffect } from 'react';
import axios from 'axios';
import '../admin/css/Menu.css';

const Menu = () => {
  const [menu, setMenu] = useState({
    id: 0,
    url: '',
    name: '',
    description: '',
    price: '',
    category: '',
    serviceType: '',
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

  const [menuList, setMenuList] = useState([]);

  // Handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setMenu(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  // Handle restaurant-specific input changes
  const handleRestaurantChange = (e) => {
    const { name, value } = e.target;
    setMenu(prevState => ({
      ...prevState,
      resturant: {
        ...prevState.resturant,
        [name]: value
      }
    }));
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post('https://localhost:7250/api/Menu/AdminPost', menu)
      .then(response => {
        // Handle success
        console.log('Menu item added:', response.data);
        fetchMenu(); // Refresh menu list after adding a new item
      })
      .catch(error => {
        // Handle error
        console.error('There was an error adding the menu item!', error);
      });
  };

  // Fetch menu items
  const fetchMenu = () => {
    axios.get('https://localhost:7250/api/Menu/CustomerGet')
      .then(response => {
        setMenuList(response.data);
      })
      .catch(error => {
        console.error('There was an error fetching the menu items!', error);
      });
  };

  // Handle delete
  const handleDelete = (id) => {
    axios.delete(`https://localhost:7250/api/Menu/AdminDelete/${id}`)
      .then(response => {
        console.log('Menu item deleted:', response.data);
        fetchMenu(); // Refresh menu list after deletion
      })
      .catch(error => {
        console.error('There was an error deleting the menu item!', error);
      });
  };

  useEffect(() => {
    fetchMenu(); // Fetch menu items on component mount
  }, []);

  return (
    <div className="menu-container">
      {/* Left Side: Form to add a menu item */}
      <div className="menu-form-container">
        <form onSubmit={handleSubmit} className="menu-form">
          <h2>ADD MENU ITEM</h2>

          <label>URL:</label>
          <input
            type="text"
            name="url"
            value={menu.url}
            onChange={handleChange}
          />

          <label>Name:</label>
          <input
            type="text"
            name="name"
            value={menu.name}
            onChange={handleChange}
          />

          <label>Description:</label>
          <textarea
            name="description"
            value={menu.description}
            onChange={handleChange}
          />

          <label>Price:</label>
          <input
            type="text"
            name="price"
            value={menu.price}
            onChange={handleChange}
          />

          <label>Category:</label>
          <input
            type="text"
            name="category"
            value={menu.category}
            onChange={handleChange}
          />

          <label>Service Type:</label>
          <input
            type="text"
            name="serviceType"
            value={menu.serviceType}
            onChange={handleChange}
          />

          <button type="submit">Add Menu Item</button>
        </form>
      </div>

      {/* Right Side: Table to display menu items */}
      <div className="menu-table-container">
        <h2>Menu Items</h2>
        <table className="menu-table">
          <thead>
            <tr>
              <th>ID</th>
              <th>Image</th>
              <th>Name</th>
              <th>Description</th>
              <th>Price</th>
              <th>Category</th>
              <th>Service Type</th>
              <th>Restaurant Name</th>
              <th>Actions</th> {/* Added Actions column */}
            </tr>
          </thead>
          <tbody>
            {menuList.map(item => (
              <tr key={item.id}>
                <td>{item.id}</td>
                <td>
                  {item.url ? (
                    <img src={item.url} alt={item.name} className="menu-image" />
                  ) : (
                    'No image available'
                  )}
                </td>
                <td>{item.name}</td>
                <td>{item.description}</td>
                <td>{item.price}</td>
                <td>{item.category}</td>
                <td>{item.serviceType}</td>
                <td>{item.resturant.name}</td>
                <td>
                  <button onClick={() => handleDelete(item.id)} className="delete-button">Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Menu;
