import React from 'react';
import image7 from "../png/image7.png";


function Footer() {

  return (
    <>
      <footer>
        <div className='footer-items-container'>
          <img src={image7} alt="footer logo" />
          <div className='footer-text-container'>
            <div className='footer-text'>
              <h3>Doormat Navigation</h3>
              <ul className='footer-links'>
                <li><a href="/">Home</a></li>
                <li><a href="/about">About</a></li>
                <li><a href="/menu">Menu</a></li>
                <li><a href="/reservations">Reservations</a></li>
                <li><a href="/order-online">Order online</a></li>
                <li><a href="/login">Login</a></li>
              </ul>
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