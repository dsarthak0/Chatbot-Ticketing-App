import React from 'react';
import { Link } from 'react-router-dom';
import Card from './Card'; // Import the Card component

const EventsPage = ({ cards }) => (
  <div>
    {/* Content for Events Page */}
    <div className="events-page-content">
      <h1>Welcome to the Events Page</h1>
      <p>Here you can find detailed information about our events.</p>

      {/* Render 10 popular event cards */}
      <div className="carousel-container">
        <div className="carousel-content">
          {cards.slice(0, 10).map((card, index) => (
            <Card key={index} {...card} />
          ))}
        </div>
      </div>
    </div>
  </div>
);

export default EventsPage;
