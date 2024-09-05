import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {

  return (
    <nav className="navbar">
      <ul className="navbar-list">
        <li className="navbar-item"><Link to="/">Home</Link></li>
        <li className="navbar-item"><Link to="/ManualBooking">Book Now</Link></li>
        <li className="navbar-item"><Link to="/explore">Virtual Assistant</Link></li>
        <li className="navbar-item"><Link to="/signup">Sign Up</Link></li>
      </ul>
    </nav>
  );
};

export default Navbar;