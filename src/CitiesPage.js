// CitiesPage.js
import React from 'react';
import { Link } from 'react-router-dom';
import City from './City'; // Import the City component

const CitiesPage = ({ cities }) => (
  <div>
    {/* Navbar */}
    <nav className="navbar">
      <ul className="navbar-list">
        <li className="navbar-item"><Link to="/">Virtual Assistant</Link></li>
        <li className="navbar-item"><Link to="/">Book Now</Link></li>
        <li className="navbar-item"><Link to="/">Explore</Link></li>
        <li className="navbar-item"><Link to="/">Sign Up</Link></li>
      </ul>
    </nav>

    {/* City Cards */}
    <div className="cities-page-content">
      {cities.map((city, index) => (
        <City key={index} {...city} />
      ))}
    </div>
  </div>
);

export default CitiesPage;
