import React from 'react';
import Nav from "./Nav";
import logo from "../png/logo.png";


function Header() {

  return (
    <>
      <header>
        <img className='logo' src={logo} alt="Little Lemon Logo" />
        <Nav />
      </header>
    </>
  )
}

export default Header;