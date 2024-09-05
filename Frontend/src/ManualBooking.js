import React, { useState } from 'react';

const ManualBooking = () => {
  const [bookingDetails, setBookingDetails] = useState({
    name: '',
    date: '',
    event: '',
  });

  const [message, setMessage] = useState('');

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setBookingDetails(prevDetails => ({
      ...prevDetails,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Simulate a form submission
    setTimeout(() => {
      setMessage('Booking successfully submitted!');
      setBookingDetails({
        name: '',
        date: '',
        event: '',
      });
    }, 1000);
  };

  return (
    <div className="manual-booking">
      <h2>Manual Booking</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            id="name"
            name="name"
            value={bookingDetails.name}
            onChange={handleInputChange}
            required
          />
        </div>
        <div>
          <label htmlFor="date">Date:</label>
          <input
            type="date"
            id="date"
            name="date"
            value={bookingDetails.date}
            onChange={handleInputChange}
            required
          />
        </div>
        <div>
          <label htmlFor="event">Event:</label>
          <input
            type="text"
            id="event"
            name="event"
            value={bookingDetails.event}
            onChange={handleInputChange}
            required
          />
        </div>
        {/* Add more form fields as needed */}
        <button type="submit">Book Now</button>
      </form>
      {message && <p className="message">{message}</p>}
    </div>
  );
};

export default ManualBooking;
