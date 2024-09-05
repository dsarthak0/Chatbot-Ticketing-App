import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css';
import Navbar from './Navbar';

const Card = ({ imgSrc, title, description }) => (
  <div className="card">
    <img src={imgSrc} alt={title} className="card-image" />
    <div className="card-content">
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  </div>
);

const City = ({ imgSrc, name, description }) => (
  <div className="city">
    <img src={imgSrc} alt={name} className="city-image" />
    <div className="city-content">
      <h3>{name}</h3>
      <p>{description}</p>
    </div>
  </div>
);

const CarouselSection = ({ title, items, ItemComponent, seeAllLink }) => (
  <div>
    <div className="events-header">
      <h2 className="events-title">{title}</h2>
      <Link to={seeAllLink}>
        <button className="see-all-button">See All &#x27A4;</button>
      </Link>
    </div>
    <div className="carousel-container">
      <div className="carousel-content">
        {items.map((item, index) => (
          <ItemComponent key={index} {...item} />
        ))}
      </div>
    </div>
  </div>
);

const HomePage = () => {
  const cards = [
    { imgSrc: "bhau_daji.jpg", title: "Bhau Daji Lad Museum, Mumbai", description: "Some brief description or content for this card." },
    { imgSrc: "calico.jpg", title: "Calico Museum of Textiles, Ahmedabad", description: "Some brief description or content for this card." },
    { imgSrc: "victoria.jpg", title: "Victoria Memorial, Kolkata", description: "Some brief description or content for this card." },
    { imgSrc: "albert_hall.jpg", title: "Albert Hall Museum, Jaipur", description: "Some brief description or content for this card." }
  ];

  const cities = [
    { imgSrc: "mumbai.jpg", name: "Mumbai", description: "Some brief description or content for this city." },
    { imgSrc: "delhi.jpg", name: "New Delhi", description: "Some brief description or content for this city." },
    { imgSrc: "kolkata.jpg", name: "Kolkata", description: "Some brief description or content for this city." },
    { imgSrc: "chennai.png", name: "Chennai", description: "Some brief description or content for this city." },
    { imgSrc: "hyderabad.png", name: "Hyderabad", description: "Some brief description or content for this city." },
    { imgSrc: "bengaluru.png", name: "Bengaluru", description: "Some brief description or content for this city." },
    { imgSrc: "jaipur.png", name: "Jaipur", description: "Some brief description or content for this city." },
    { imgSrc: "pune.png", name: "Pune", description: "Some brief description or content for this city." },
    { imgSrc: "ahmedabad.png", name: "Ahmedabad", description: "Some brief description or content for this city." },
    { imgSrc: "lucknow.png", name: "Lucknow", description: "Some brief description or content for this city." }
  ];

  return (
    <div className="home-page">
      <Navbar /> {/* Include the Navbar here */}
      <img src="img.jpg" alt="Background Image" className="background-image" />
      <div className="overlay"></div>
      <div className="content">
        <CarouselSection
          title="Popular Events"
          items={cards}
          ItemComponent={Card}
          seeAllLink="/EventsPage"
        />
        <CarouselSection
          title="Cities"
          items={cities}
          ItemComponent={City}
          seeAllLink="/CitiesPage"
        />
      </div>
    </div>
  );
};

export default HomePage;
