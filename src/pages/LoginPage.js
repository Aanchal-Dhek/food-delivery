import React, { useState, Logged, as, $ } from 'react';
import { Link } from 'react-router-dom';
import '../App.css';
import './LoginPage.css';

const LoginPage = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [errors, setErrors] = useState({});

  const validate = () => {
    const newErrors = {};

    if (!username) {
      newErrors.username = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(username)) {
      newErrors.username = 'Invalid email format';
    }

    if (!password) {
      newErrors.password = 'Password is required';
    } else if (password.length < 6) {
      newErrors.password = 'Password must be at least 6 characters';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const isValid = validate(); // ✅ NEW
    if (isValid) {
      alert(Logged in as, $,{username});
      setUsername('');
      setPassword('');
      setErrors({});
    }
  };

  return (
    <div className="loginpage">
      <h1>Login</h1>
      <form className="login-form" onSubmit={handleSubmit} noValidate>
        <input
          type="email"
          placeholder="Email"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        {errors.username && <p className="error">{errors.username}</p>}

        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        {errors.password && <p className="error">{errors.password}</p>}

        <button type="submit">Login</button>
      </form>

      <div className="login-links">
        <Link to="/forgot-password">Forgot Password?</Link>
        <Link to="/">Back to Home</Link>
      </div>
    </div>
  );
};

export default LoginPage;