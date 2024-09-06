import React from 'react';
import { useLocation } from 'react-router-dom';
import './css/OrderDetails.css';

const OrderDetails = () => {
  const location = useLocation();
  const { cartItems, totalPrice } = location.state || { cartItems: [], totalPrice: 0 };

  return (
    <div className="order-details-container">
      <h1>Order Details</h1>
      {cartItems.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <div>
          <ul className="order-items-list">
            {cartItems.map(item => (
              <li key={item.id} className="order-item">
                <p>{item.name}</p>
                <p>Quantity: {item.quantity}</p>
                <p>Price: RS {item.price}</p>
                <p>Subtotal: RS {item.price * item.quantity}</p>
              </li>
            ))}
          </ul>
          <h2>Total Price: RS {totalPrice}</h2>
        </div>
      )}
    </div>
  );
};

export default OrderDetails;
