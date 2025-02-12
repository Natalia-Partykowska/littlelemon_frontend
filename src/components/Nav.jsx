import React from 'react';


function Nav() {

  return (
    <>
      <nav className='navbar'>
        <ul className='nav-links'>
          <li><a href="/">HOME</a></li>
          <li><a href="/about">ABOUT</a></li>
          <li><a href="/menu">MENU</a></li>
          <li><a href="/reservations">RESERVATIONS</a></li>
          <li><a href="/order-online"><button>ORDER ONLINE</button></a></li>
          <li><a href="/login">LOGIN</a></li>
        </ul>
      </nav>
    </>
  )
}

export default Nav;