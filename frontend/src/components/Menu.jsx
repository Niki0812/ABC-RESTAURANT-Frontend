import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './css/Menu.css';
import { Link } from 'react-router-dom';

const Home = () => {
  const [menuItems, setMenuItems] = useState([]);
  const [cartItems, setCartItems] = useState([]);
  const [searchCategory, setSearchCategory] = useState('');

  useEffect(() => {
    axios.get('https://localhost:7250/api/Menu/CustomerGet')
      .then(response => {
        setMenuItems(response.data);
      })
      .catch(error => {
        console.error('There was an error fetching the menu items!', error);
      });
  }, []);

  const handleSearch = (event) => {
    setSearchCategory(event.target.value);
  };

  const handleAddToCart = (item) => {
    const existingItem = cartItems.find(cartItem => cartItem.id === item.id);
    if (existingItem) {
      setCartItems(cartItems.map(cartItem =>
        cartItem.id === item.id
          ? { ...cartItem, quantity: cartItem.quantity + 1 }
          : cartItem
      ));
    } else {
      setCartItems([...cartItems, { ...item, quantity: 1 }]);
    }
  };

  const handleQuantityChange = (item, quantity) => {
    setCartItems(cartItems.map(cartItem =>
      cartItem.id === item.id
        ? { ...cartItem, quantity: Math.max(1, quantity) }
        : cartItem
    ));
  };

  const handleRemoveFromCart = (itemId) => {
    setCartItems(cartItems.filter(cartItem => cartItem.id !== itemId));
  };

  const getTotalPrice = () => {
    return cartItems.reduce((total, item) => total + item.price * item.quantity, 0).toFixed(2);
  };

  const filteredMenuItems = menuItems.filter(item =>
    item.category.toLowerCase().includes(searchCategory.toLowerCase())
  );

  return (
    <div className="menu-container">
      <h1 className="menu-heading">ABC RESTAURANT FOOD MENU</h1>
      
      <input
        type="text"
        placeholder="Search by category"
        value={searchCategory}
        onChange={handleSearch}
        className="search-bar"
      />

      <div className="menu-items">
        {filteredMenuItems.map(item => (
          <div key={item.id} className="menu-item">
            <img src={item.url} alt={item.name} className="menu-image" />
            <h2>{item.name}</h2>
            <p>{item.description}</p>
            <p>Price: {item.price}</p>
            <p>Category: {item.category}</p>
            <p>Service Type: {item.serviceType}</p>
            <button className="add-to-cart-button" onClick={() => handleAddToCart(item)}>
              Add to Cart
            </button>
          </div>
        ))}
      </div>

      <div className="cart-summary">
        <h2>Cart Summary</h2>
        {cartItems.length === 0 ? (
          <p>Your cart is empty</p>
        ) : (
          <div>
            {cartItems.map(item => (
              <div key={item.id} className="cart-item">
                <p>{item.name} - RS {item.price}</p>
                <input
                  type="number"
                  value={item.quantity}
                  onChange={(e) => handleQuantityChange(item, parseInt(e.target.value))}
                  className="quantity-input"
                />
                <button onClick={() => handleRemoveFromCart(item.id)} className="remove-button">
                  Remove
                </button>
              </div>
            ))}
            <h3>Total Price: RS {getTotalPrice()}</h3>
            <Link
              to={{
                pathname: '/orderdetails',
                state: { cartItems, totalPrice: getTotalPrice() },
              }}
              className="order-now-button"
            >
              Order Now
            </Link>
          </div>
        )}
      </div>
    </div>
  );
};

export default Home;
