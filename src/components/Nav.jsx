import React from 'react';
import { Link } from 'react-router-dom';

function Nav() {

  return (
    <>
      <nav className='nav-links'>
        <Link to="/" className='nav-item'>HOME</Link>
        <Link to="/about" className='nav-item'>ABOUT</Link>
        <Link to="/menu" className='nav-item'>MENU</Link>
        <Link to="/reservations" className='nav-item'>RESERVATIONS</Link>
        <Link to="/order-online" className='nav-item'><button>ORDER ONLINE</button></Link>
        <Link to="/login" className='nav-item'>LOGIN</Link>
      </nav>
    </>
  )
}

export default Nav;