import {useState, useRef} from 'react';
import BtnBugerMenuStyled from './BtnBugerMenuStyled';

const BtnBugerMenu = ({menuOpen, setMenuOpen, classOpen, setClassOpen, setOpenMenu}) => {
    
    const refBtnMenu = useRef();

    const handleClick = () => {
        if(!menuOpen){
            setClassOpen('open');
            setMenuOpen('openMenu');

            //Move Nav
            setOpenMenu('openOrCloseMenu');
        } else {
            setClassOpen('');
            setMenuOpen(false);
            
            //Move Nav
            setOpenMenu('');
        }
        
    }
  return (
    <BtnBugerMenuStyled>
        <div className={`menu-btn ${classOpen}`} ref={refBtnMenu} onClick={handleClick}>
            <div className={`menu-btn__buger`} ></div>
        </div>
    </BtnBugerMenuStyled>
  )
}

export default BtnBugerMenu
