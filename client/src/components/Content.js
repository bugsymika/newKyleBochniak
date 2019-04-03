import React from 'react';
import './css/content.css';
import Nav from './Nav.js';

export default function Content() {
  return (
    <div className='content-content'>
      <div className='content-container'>
        <div className='content-div' id='landing' />
        <div className='content-div' id='about'>
          <div className='blackout' />
        </div>
        <div className='content-div' id='contact'>
          <div className='blackout'>
            <div className='contact-content'>
              <h2>Want to train with me?</h2>

              <p>
                I offer private or group sessions in Boxing, Kickboxing,
                Brazilian Jiu-Jitsu, MMA and Strength & Conditioning
                <br />
                <br />
                $100 per hour / $60 per half hour
              </p>

              <div className='scheduleBox'>
                <a
                  target='_blank'
                  rel='noopener noreferrer'
                  href='https://squareup.com/appointments/book/9B5ZRK5M4DPXK/bochniak-martial-arts-fitness'
                >
                  <h3>
                    <i className='icono-calendar' />
                    Click here to schedule!
                  </h3>
                </a>
              </div>

              <h2>Have a business inquiry?</h2>
              <p>Email me at KyleBochniak@gmail.com</p>

              <div className='nav-icons'>
                <div className='nav-tab'>
                  <a
                    target='_blank'
                    className='link'
                    rel='noopener noreferrer'
                    href='http://instagram.com/_u/kylebochniakufc'
                  >
                    <i className='icono-instagram' />
                  </a>
                </div>
                <div className='nav-tab'>
                  <a
                    target='_blank'
                    className='link'
                    rel='noopener noreferrer'
                    href='https://twitter.com/KyleBochniak?ref_src=twsrc%5Egoogle%7Ctwcamp%5Eserp%7Ctwgr%5Eauthor'
                  >
                    <i className='icono-twitter' />
                  </a>
                </div>
                <div className='nav-tab'>
                  <a
                    target='_blank'
                    className='link'
                    rel='noopener noreferrer'
                    href='https://www.facebook.com/kylekillerbeebochniak/'
                  >
                    <i className='icono-facebook' />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Nav />
    </div>
  );
}
