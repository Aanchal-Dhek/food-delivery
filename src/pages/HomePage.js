import React from 'react';
import '../App.css';

const HomePage = () => {
  return (
    <div className="homepage">
      <section className="hero-section">
        <h1>Welcome to Foodie's Hub</h1>
        <p>Delicious food delivered to your doorstep. Order now and enjoy fresh meals anytime!</p>
        <button className="order-now-btn">Order Now</button>
      </section>

      <section className="features-section">
        <div className="feature">
          <h2>🍔 Fresh Food</h2>
          <p>Only the freshest ingredients make it to your plate.</p>
        </div>
        <div className="feature">
          <h2>🚚 Fast Delivery</h2>
          <p>Your order delivered hot & fast at your doorstep.</p>
        </div>
        <div className="feature">
          <h2>💳 Easy Payment</h2>
          <p>Multiple payment options for your convenience.</p>
        </div>
      </section>
    </div>
  );
};

export default HomePage;