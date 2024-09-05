import React, { useEffect } from 'react';
import './Card.css';  // Optionally create a separate CSS file for card-specific styles

function Card({ image, title, description }) {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries, observer) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate');
            observer.unobserve(entry.target); // Stop observing once the animation is triggered
          }
        });
      },
      { threshold: 0.1 }
    );

    const cards = document.querySelectorAll('.card');
    cards.forEach((card) => {
      observer.observe(card);
    });

    return () => {
      observer.disconnect(); // Clean up the observer on unmount
    };
  }, []);

  return (
    <div className="card">
      <img src={image} alt={title} className="card-image" />
      <div className="card-content">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default Card;
