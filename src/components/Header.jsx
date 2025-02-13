import React from 'react';
import Nav from "./Nav";
import logo from "../png/logo.png";
import { Link } from 'react-router-dom';

function Header() {

  return (
    <>
      <header>
        <div className='nav-container'>
          <Link to="/"><img className='logo' src={logo} alt="Little Lemon Logo" /></Link>
          <Nav />
        </div>
      </header>
    </>
  )
}

export default Header;