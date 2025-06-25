import React from 'react';
import '../App.css';

const CartPage = ({ cartItems, removeFromCart }) => {
  const totalPrice = cartItems.reduce((total, item) => total + item.price, 0);

  return (
    <div className="cartpage">
      <h1>Your Cart</h1>
      {cartItems.length === 0 ? (
        <p className="empty-cart">Your cart is empty.</p>
      ) : (
        <div className="cart-items">
          {cartItems.map((item, index) => (
            <div key={index} className="cart-item">
              <div className="item-info">
                <span className="item-name">{item.image} {item.name}</span>
                <span className="item-price">₹{item.price}</span>
              </div>
              <button className="remove-btn" onClick={() => removeFromCart(index)}>Remove</button>
            </div>
          ))}
          <div className="total-price">
            <h2>Total: ₹{totalPrice}</h2>
          </div>
        </div>
      )}
    </div>
  );
};

export default CartPage;