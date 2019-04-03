import React from 'react';
import './css/nav.css';
export default function Nav() {
  return (
    <div className='nav'>
      <a href='#about'>
        <div className='nav-div'>
          <p>About</p>
        </div>
      </a>

      <a href='#contact'>
        <div className='nav-div'>
          <p>Booking</p>
        </div>
      </a>

      <div className='nav-div'>
        <p>Gallery</p>
      </div>
    </div>
  );
}
