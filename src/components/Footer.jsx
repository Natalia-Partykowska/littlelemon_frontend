import React from 'react';
import image7 from "../png/image7.png";
import { Link } from 'react-router-dom';


function Footer() {

  return (
    <>
      <footer>
        <div className='footer-items-container'>
          <img src={image7} alt="footer logo" />
          <div className='footer-text-container'>
            <div className='footer-text'>
              <h3>Doormat Navigation</h3>
              <div className='footer-links'>
                <Link to="/">Home</Link>
                <Link to="/about">About</Link>
                <Link to="/menu">Menu</Link>
                <Link to="/reservations">Reservations</Link>
                <Link to="/order-online">Order Online</Link>
                <Link to="/login">Login</Link>
              </div>
            </div>
            <div className='footer-text'>
              <h3>Contacts</h3>
              <p>Address</p>
              <p>Phone Number</p>
              <p>Email</p>
            </div>
            <div className='footer-text'>
              <h3>Social media links</h3>
              <p>Address</p>
              <p>Phone Number</p>
              <p>Email</p>
            </div>
          </div>
        </div>
      </footer>
    </>
  )
}

export default Footer;