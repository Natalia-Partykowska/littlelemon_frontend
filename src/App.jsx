import './styles/App.css';
import React from 'react';
import Header from  "./components/Header";
import Footer from "./components/Footer";
import Home from "./components/Home";
import About from "./components/About";
import Menu from "./components/Menu";
import Reservations from "./components/Reservations";
import OrderOnline from "./components/OrderOnline";
import Login from "./components/Login";
import ReserveTable from "./components/ReserveTable";
import { Routes, Route } from 'react-router-dom';

function App() {

  return (
    <div className='app-container'>
      <Header />
      <Routes >
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/menu' element={<Menu />} />
        <Route path='/reservations' element={<Reservations />} />
        <Route path='/order-online' element={<OrderOnline />} />
        <Route path='/login' element={<Login />} />
        <Route path='/reserve-table' element={<ReserveTable />} />
      </Routes>
      <Footer />
    </div>
  )
}

export default App;
