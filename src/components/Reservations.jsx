import React from 'react';
import { Link } from 'react-router-dom';


function Reservations() {

  return (
    <section>
      <h1>Your reservations</h1>
      <Link to="/reserve-table"><button className='button'>Make new reservation</button></Link>
    </section>
  )
}

export default Reservations;