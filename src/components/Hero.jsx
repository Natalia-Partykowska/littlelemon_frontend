import React from 'react';
import image1 from "../png/image1.jpg";


function Hero() {

  return (
    <>
      <section className='hero-container'>
        <div className='hero-items-container'>
          <div className='hero-text-container'>
            <h1>Little Lemon</h1>
            <h2>Chicago</h2>
            <p>We are a family owned Mediterranean restaurant, focused on traditional recipes served with a modern twist.</p>
            <div className='button-container'>
              <button className='button'>Reserve a table</button>
              <button className='button'>View reservations</button>
            </div>
          </div>
          <div>
            <img src={image1} alt="" />
          </div>
        </div>
      </section>
    </>
  )
}

export default Hero;