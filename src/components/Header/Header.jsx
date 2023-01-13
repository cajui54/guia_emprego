import { Link } from "react-router-dom";
import BtnBugerMenu from "./BtnBugerMenu";
import HeaderStyled from "./HeaderStyled";

const Header = () => {
  return (
    <HeaderStyled>
      <Link to={'/'} className="containerLogo">
        <h1>Guia<span>Online</span></h1>
        <h2>De <span>Empregos</span></h2>
      </Link>

      <BtnBugerMenu/>
    </HeaderStyled>
  )
}

export default Header
