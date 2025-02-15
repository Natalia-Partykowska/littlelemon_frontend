import React from 'react';

function BookingForm() {

  return (
    <section>
      <div className='day-container'>
        <div className='day-items-container'>
          <div className='date-month'>
            <h3 className='h3-header'>Date</h3>
            <h3 className='h3-header month'>January</h3>
          </div>
          <div className='days'>
            <div className='day'>
              <p>MO</p>
              <h4>15</h4>
            </div>
            <div className='day'>
              <p>TU</p>
              <h4>16</h4>
            </div>
            <div className='day'>
              <p>WE</p>
              <h4>17</h4>
            </div>
            <div className='day'>
              <p>TH</p>
              <h4>18</h4>
            </div>
            <div className='day'>
              <p>FR</p>
              <h4>19</h4>
            </div>
            <div className='day'>
              <p>SA</p>
              <h4>20</h4>
            </div>
            <div className='day'>
              <p>SU</p>
              <h4>21</h4>
            </div>
            <div className='day'>
              <p>MO</p>
              <h4>22</h4>
            </div>
            <div className='day'>
              <p>TU</p>
              <h4>23</h4>
            </div>
            <div className='day'>
              <p>WE</p>
              <h4>24</h4>
            </div>
            <div className='day'>
              <p>TH</p>
              <h4>25</h4>
            </div>
            <div className='day'>
              <p>FR</p>
              <h4>26</h4>
            </div>
            <div className='day'>
              <p>SA</p>
              <h4>27</h4>
            </div>
          </div>
        </div>
      </div>
      <div className='time-container'>
        <h3 className='h3-header available-slots'>Available slots</h3>
        <div className='time-slots'>
          <div className='time-slot'>
            <h4>12:00</h4>
          </div>
          <div className='time-slot'>
            <h4>12:00</h4>
          </div>
          <div className='time-slot'>
            <h4>12:00</h4>
          </div>
          <div className='time-slot'>
            <h4>12:00</h4>
          </div>
          <div className='time-slot'>
            <h4>12:00</h4>
          </div>
        </div>
      </div>
      <div className='guests'>
        <h3>How many people?</h3>
        <button>-</button>
        <h4>2</h4>
        <button>+</button>
      </div>
      <div className='preferences'>
        <h3>Preferences</h3>
        <h4>indoor</h4>
        <h4>outdoor</h4>
      </div>
      <div className='occasion'>
        <h3>Occasion</h3>
      </div>
    </section>
  )
}

export default BookingForm;