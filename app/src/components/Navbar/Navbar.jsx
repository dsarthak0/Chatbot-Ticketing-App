import React from 'react'
import logo from '../../components/assets/logo.webp'
import './Navbar.css'

const Navbar = () => {
  return (
    <>
    <div className='navbar'>
       <section className='nav'>
           <div className="logo">
               <img src={logo} alt="logo" className='logo' height="60px" width="60px" ></img>
               <p>The Museum</p>
               
           </div>
           <div className="nav-content">
            <p>Virtual Assistant</p>
            <p>Book Now</p>
            <p>Explore</p>
            <p>Sign Up</p>
       
               
           </div>
        

       </section>
      

   
      
      </div>
    </>
    
  )
}

export default Navbar
