import React from 'react';
import Nav from "./Nav";
import logo from "../png/logo.png";


function Header() {

  return (
    <>
      <header>
        <div className='nav-container'>
          <img className='logo' src={logo} alt="Little Lemon Logo" />
          <Nav />
        </div>
      </header>
    </>
  )
}

export default Header;