import React from 'react'
import background from '../assets/bg.png'
import Event from '../assets/event1.avif'
import Mumbai from '../assets/mumbai.avif'
import Delhi from '../assets/delhi.avif'
import Kolkata from '../assets/kolkata.jpg'
import Chennai from '../assets/Chennai.png'
import './Header.css'


  


const Header = ()=> {
  return (
    <>
      <div className='Header'>
        <div className="image">
          <img src={background} alt="bg" style={{ width: "100%", height: "auto", maxHeight: "50%" }} />
          
        </div>
        
        <div className="featuredevents">
       
               <p>Featured Events</p>
               <a href="#" >See All</a>
         
      
      
          <div className="card">
            <img src={Event} alt="Event" />
            <p>Event 1</p>
            <p>Genre</p>
            <p>11:00 AM to 6:00PM</p>

          </div>
          <div className="card">
            <img src={Event} alt="Event" />
            <p>Event 2</p>
            <p>Genre</p>
            <p>11:00 AM to 6:00PM</p>
          </div>
          <div className="card">
            <img src={Event} alt="Event" />
            <p>Event 3</p>
            <p>Genre</p>
            <p>11:00 AM to 6:00PM</p>
          </div>
        </div>
        
        <div className="city">
          <p>Popular Cities</p>
          <div className="card">
            <img src={Mumbai} alt="Mumbai" />
            <p>Mumbai</p>
          </div>
          <div className="card">
            <img src={Delhi} alt="Delhi" />
            <p>Delhi</p>
          </div>
          <div className="card">
            <img src={Kolkata} alt="Kolkata" />
            <p>Kolkata</p>
          </div>
          <div className="card">
            <img src={Chennai} alt="Chennai" />
            <p>Chennai</p>
          </div>
        </div>
      </div>
    </>
  );
}


export default Header;
