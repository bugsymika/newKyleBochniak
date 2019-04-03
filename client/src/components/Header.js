import React from 'react';
import './css/header.css';
export default function Header() {
  return (
    <div className='header-parent'>
      <div className='header-tab'>
        <a
          target='_blank'
          className='link'
          rel='noopener noreferrer'
          href='http://instagram.com/_u/kylebochniakufc'
        >
          <i className='icono-instagram' />
        </a>
      </div>
      <div className='header-tab'>
        <a
          target='_blank'
          className='link'
          rel='noopener noreferrer'
          href='https://twitter.com/KyleBochniak?ref_src=twsrc%5Egoogle%7Ctwcamp%5Eserp%7Ctwgr%5Eauthor'
        >
          <i className='icono-twitter' />
        </a>
      </div>

      <div className='header-tab'>
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
  );
}
