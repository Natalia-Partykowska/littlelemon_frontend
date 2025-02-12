import React from 'react';
import image5 from "../png/image5.jpg";
import image6 from "../png/image6.jpg";


function About() {

  return (
    <>
      <section className='about-container'>
        <div className='about-items-container'>
          <div className='about-description'>
            <h1>Little Lemon</h1>
            <h2>Chicago</h2>
            <p>Immerse yourself in the rich flavors and warm hospitality of the Mediterranean. Our restaurant brings you fresh, authentic dishes made with the finest ingredients—succulent grilled meats, freshly caught seafood, vibrant salads, and handcrafted desserts. Each meal is a celebration of tradition, infused with aromatic herbs, extra virgin olive oil, and bold, sun-kissed flavors. Whether you’re enjoying a casual lunch or a special dinner, our inviting atmosphere and delicious cuisine will transport you to the heart of the Mediterranean.</p>
          </div>
          <div className='about-photos'>
            <img className='image2' src={image5} alt="restaurnat photo" />
            <img src={image6} alt="restaurnat photo" />
          </div>
        </div>
      </section>
    </>
  )
}

export default About;