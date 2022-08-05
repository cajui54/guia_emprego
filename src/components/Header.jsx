import React from 'react';
import Headers from './headerStyled';
import NavMenu from './Headers/NavMenu';

const Header = () => {
    let menuOpen = false;

    const handleBtnMenu = () => {
        let menu = document.querySelector('.header__btnMenu')
        let nav = document.querySelector('nav');
        if(!menuOpen) {
            menu.classList.add('open');
            menuOpen = true;
            nav.classList.add('openMenu');
        }
        else {
            menu.classList.remove('open');
            menuOpen = false;
            nav.classList.remove('openMenu');
        }
    }

  return (
    <Headers>
      <div className='header__logoContainer'>
        <p>Guia de</p>
        <p>Emprego</p>
      </div>
      <NavMenu/>
      <div className="header__btnMenu" onClick={handleBtnMenu}>
        <div className="menuBtn__burger"></div>
      </div>
    </Headers>
  )
}

export default Header
