import React from 'react';
import image2 from "../png/image2.jpg";
import image3 from "../png/image3.jpg";
import image4 from "../png/image4.jpg";


function Highlights() {

  return (
    <>
      <section className='highlights-container'>
        <div className='highlights-items-container'>
          <div className='specials-name'>
            <h1>Specials</h1>
            <button className='button'>Menu</button>
          </div>
          <div className='specials-container'>
            <div className='special'>
              <img src={image2} alt="Greek Salad" />
              <div className='special-text'>
                <h3>Greek Salad</h3>
                <p className='price'>12.99$</p>
                <p className='description'>The famous greek salad of crispy lettuce, peppers, olives and our Chicago style feta cheese, garnished with crunchy garlic and rosemary croutoons.</p>
                <p className='order'>Order a delivery</p>
              </div>
            </div>
            <div className='special'>
              <img src={image3} alt="Greek Salad" />
              <div className='special-text'>
                <h3>Bruchetta</h3>
                <p className='price'>5.99$</p>
                <p className='description'>Crispy, toasted artisan bread topped with ripe tomatoes, fresh basil, garlic, and a drizzle of extra virgin olive oil. A simple yet flavorful Italian classic, bursting with Mediterranean freshness.</p>
                <p className='order'>Order a delivery</p>
              </div>
            </div>
            <div className='special'>
              <img src={image4} alt="Greek Salad" />
              <div className='special-text'>
                <h3>Grilled Fish</h3>
                <p className='price'>25.00$</p>
                <p className='description'>Fresh, locally sourced fish, perfectly grilled and drizzled with extra virgin olive oil, lemon, and aromatic herbs. Served with a side of seasonal vegetables and our signature house-made sauce.</p>
                <p className='order'>Order a delivery</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Highlights;