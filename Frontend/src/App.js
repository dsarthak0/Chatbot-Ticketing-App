// src/App.js
import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Navbar from './Navbar';
import HomePage from './HomePage';  // Update this import if you are using 'Home' instead
import Explore from './Explore';
import SignUp from './Signup';
import Login from './Login';
import ManualBooking from './ManualBooking';
import EventsPage from './EventsPage';
import CitiesPage from './CitiesPage';
import 'bootstrap/dist/css/bootstrap.min.css'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

const App = () => {
  return (
    <>
    <ToastContainer 
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/ManualBooking" element={<ManualBooking />} />
        <Route path="/explore" element={<Explore />} />
        <Route path="/register" element={<SignUp />} />
        <Route path="/EventsPage" element={<EventsPage />} />
        <Route path="/CitiesPage" element={<CitiesPage />} />
        <Route path="/login" element={<Login />} />

      </Routes>
    </BrowserRouter>
    </>
  );
};

export default App;
 