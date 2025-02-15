import React from 'react';
import BookingForm from './BookingForm';
import UserForm from './UserForm';
import { Link } from 'react-router-dom';

function ReserveTable() {

  return (
    <div className='reserve-table-container'>
      <h1 className='reservation-header-container'>Reservation details</h1>
      <BookingForm />
      <UserForm />
      <Link><button className='button'>Reserve a table</button></Link>
    </div>
  )
}

export default ReserveTable;