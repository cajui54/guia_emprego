import React from 'react';
import Headers from './headerStyled';

const Header = () => {
    let menuOpen = false;

    const handleBtnMenu = () => {
        let menu = document.querySelector('.header__btnMenu')
        if(!menuOpen) {
            menu.classList.add('open');
            menuOpen = true;
        }
        else {
            menu.classList.remove('open');
            menuOpen = false;
        }
    }

  return (
    <Headers>
      <div className='header__logoContainer'>
        <p>Guia de</p>
        <p>Emprego</p>
      </div>

      <div className="header__btnMenu" onClick={handleBtnMenu}>
        <div className="menuBtn__burger"></div>
      </div>
    </Headers>
  )
}

export default Header
