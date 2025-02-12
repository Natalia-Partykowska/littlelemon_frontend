import React from 'react';
import avatar from "../png/avatar.jpg";

function Testimonials() {

  return (
    <>
      <section className='testimonials-container'>
        <div className='testimonials-items-container'>
          <h1>What our customers say!</h1>
          <div className='reviews-container'>
            <div className='review'>
              <div className='photo-name'>
                <img src={avatar} alt="user photo"/>
                <div className='name-username'>
                  <h3>Jane Austin</h3>
                  <h4>jane1290</h4>
                </div>
              </div>
              <p>My favourite restaurant !! Will come back soon!</p>
            </div>
            <div className='review'>
              <div className='photo-name'>
                <img src={avatar} alt="user photo"/>
                <div className='name-username'>
                  <h3>Will Johnson</h3>
                  <h4>johny45</h4>
                </div>
              </div>
              <p>Great food, but Mediterranean it’s not my favourite.</p>
            </div>
            <div className='review'>
              <div className='photo-name'>
                <img src={avatar} alt="user photo"/>
                <div className='name-username'>
                  <h3>Lucy Janes</h3>
                  <h4>luckylucy</h4>
                </div>
              </div>
              <p>Awesome!!!!!!!!!!</p>
            </div>
            <div className='review'>
              <div className='photo-name'>
                <img src={avatar} alt="user photo"/>
                <div className='name-username'>
                  <h3>James Great</h3>
                  <h4>james654</h4>
                </div>
              </div>
              <p>Best food in town! Highly recommend.</p>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Testimonials;