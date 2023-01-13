import {useState, useRef} from 'react';
import BtnBugerMenuStyled from './BtnBugerMenuStyled';

const BtnBugerMenu = () => {
    const[menuOpen, setMenuOpen] = useState(false);
    const [classOpen, setClassOpen] = useState('');
    const refBtnMenu = useRef();

    const handleClick = () => {
        if(!menuOpen){
            refBtnMenu.current.classList.add('open');
            setMenuOpen(true);
        } else {
            refBtnMenu.current.classList.remove('open');
            setMenuOpen(false);
        }
        
    }
  return (
    <BtnBugerMenuStyled>
        <div className='menu-btn' ref={refBtnMenu} onClick={handleClick}>
            <div className={`menu-btn__buger`} ></div>
        </div>
    </BtnBugerMenuStyled>
  )
}

export default BtnBugerMenu
