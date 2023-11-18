import { Link } from "react-router-dom";
import { useState } from "react";
import BtnBugerMenu from "./BtnBugerMenu";
import HeaderStyled from "./HeaderStyled";
import Navbar from "./Navbar";

const Header = () => {
  const[menuOpen, setMenuOpen] = useState(false);
  const [classOpen, setClassOpen] = useState('');
  const [openMenuNav, setOpenMenu] = useState('');

  return (
    <HeaderStyled>
      <Link to={'/'} className="containerLogo">
        <h1>Guia<span>Online</span></h1>
        <h2>De <span>Empregos</span></h2>
      </Link>

      <BtnBugerMenu
        menuOpen = {menuOpen}
        setMenuOpen = {setMenuOpen}

        classOpen={classOpen}
        setClassOpen={setClassOpen}

       setOpenMenu={setOpenMenu}
       />
      
      <Navbar
        setMenuOpen = {setMenuOpen}
   
        setClassOpen={setClassOpen}

       openMenuNav={openMenuNav}
       setOpenMenu={setOpenMenu}
      />

    </HeaderStyled>
  )
}

export default Header
