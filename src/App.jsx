import './styles/App.css';
import React from 'react';
import Header from  "./components/Header";
import Footer from "./components/Footer";
import Primary from "./components/Primary";

function App() {

  return (
    <div className='app-container'>
      <Header />
      <Primary />
      <Footer />
    </div>
  )
}

export default App;
