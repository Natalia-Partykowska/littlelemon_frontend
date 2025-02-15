import React from 'react';
import { useState } from 'react';

function UserForm() {
  const [form, setForm] =  useState({
    name: "",
    surname: "",
    phone: "",
    email: "",
    notes: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    setForm({
      name: "",
      surname: "",
      phone: "",
      email: "",
      notes: "",
    });
  }

  const handleChange = (e) => {
    const {name, value} = e.target;
    setForm({
      ...form,
      [name]: value,
    });
  }

  return (
    <section className='user-form-container'>
      <form className='user-form' onSubmit={handleSubmit}>
        <label htmlFor="name" className='label'>First Name</label>
        <input type="text" id='name' name='name' required className='input' value={form.name} onChange={handleChange}/>
        <label htmlFor="surname" className='label'>Last Name</label>
        <input type="text" id='surname' name='surname' required className='input' value={form.surname} onChange={handleChange}/>
        <label htmlFor="phone" className='label'>Phone Number</label>
        <input type="text" id='phone' name='phone' className='input' value={form.phone} onChange={handleChange}/>
        <label htmlFor="email" className='label'>Email</label>
        <input type="email" id='email' name='email' required className='input' value={form.email} onChange={handleChange}/>
        <label htmlFor="notes" className='label'>Notes</label>
        <textarea type="textarea" id='notes' name='notes' className='input notes' value={form.notes} onChange={handleChange}/>
        <button disabled={!form.name || !form.surname || !form.email} type='submit' className='button'>Submit</button>
      </form>
    </section>
  )
}

export default UserForm;