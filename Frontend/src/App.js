// src/App.js
import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Navbar from './Navbar';
import HomePage from './HomePage';  // Update this import if you are using 'Home' instead
import Explore from './Explore';
import SignUp from './SignUp';
import ManualBooking from './ManualBooking';
import EventsPage from './EventsPage';
import CitiesPage from './CitiesPage';

const App = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/ManualBooking" element={<ManualBooking />} />
        <Route path="/explore" element={<Explore />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/EventsPage" element={<EventsPage />} />
        <Route path="/CitiesPage" element={<CitiesPage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
 