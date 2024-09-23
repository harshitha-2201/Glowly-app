import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import './accountstyles.css';
import Nav from '../Navbar/Nav';
import Testimonials from '../Home/Testimonials';

const SignUp = () => {
  const [user, setUser] = useState({ firstname: '', username: '', password: '' });
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    // Store user details in localStorage
    localStorage.setItem(user.username, JSON.stringify(user));
    navigate('/login'); // Redirect to login page
  };

  return (
    <>
      <Nav />
      <div className="signup-container">
        <h2 className="signup">REGISTER</h2>
        <form onSubmit={handleSubmit} className="signup-form">
          <input
            type="text"
            placeholder="Firstname"
            value={user.firstname}
            onChange={(e) => setUser({ ...user, firstname: e.target.value })}
            className="inputs"
          />
          <br />
          <input
            type="text"
            placeholder="Username"
            value={user.username}
            onChange={(e) => setUser({ ...user, username: e.target.value })}
            className="inputs"
          />
          <br />
          <input
            type="password"
            placeholder="Password"
            value={user.password}
            onChange={(e) => setUser({ ...user, password: e.target.value })}
            className="inputs"
          />
          <br />
          <p style={{ fontSize: '10px', paddingLeft: '60px' }}>
            Registered?
            <Link to="/login">
              <span style={{ color: 'blue' }}>Login</span>
            </Link>
          </p>
          <br />
          <button type="submit" className="signup-btn">Register</button>
        </form>
      </div>
      <Testimonials />
    </>
  );
};

export default SignUp;
