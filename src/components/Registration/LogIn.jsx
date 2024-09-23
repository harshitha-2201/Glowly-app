import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import './accountstyles.css';
import Nav from '../Navbar/Nav';
import Testimonials from '../Home/Testimonials';

const LogIn = () => {
  const [credentials, setCredentials] = useState({ username: '', password: '' });
  const [errorMessage, setErrorMessage] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    const storedUser = JSON.parse(localStorage.getItem(credentials.username));

    if (storedUser && storedUser.password === credentials.password) {
      localStorage.setItem('authToken', 'mock-token-12345'); // Simulated token
      localStorage.setItem('userId', credentials.username); // Save username as user ID

      console.log('Login Successful');
      navigate('/'); // Redirect to home page
    } else {
      setErrorMessage('Invalid username or password');
    }
  };

  return (
    <>
      <Nav />
      <div className="signup-container">
        <h2 className="signup">LOG IN</h2>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Username"
            value={credentials.username}
            onChange={(e) => setCredentials({ ...credentials, username: e.target.value })}
            className="inputs"
          />
          <br />
          <input
            type="password"
            placeholder="Password"
            value={credentials.password}
            onChange={(e) => setCredentials({ ...credentials, password: e.target.value })}
            className="inputs"
          />
          <br />
          {errorMessage && <p style={{ color: 'red' }}>{errorMessage}</p>}
          <p style={{ fontSize: '10px', paddingLeft: '60px' }}>
            Don't have an Account?
            <Link to="/signup">
              <span style={{ color: 'blue' }}>Register</span>
            </Link>
          </p>
          <br />
          <button type="submit" className="signup-btn">Log In</button>
        </form>
      </div>
      <Testimonials />
    </>
  );
};

export default LogIn;
