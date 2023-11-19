import {useEffect, useState} from 'react';
import { Link } from 'react-scroll';
import * as Style from './Navbar.css';
const Navbar = ({setMenuOpen, setClassOpen, openMenuNav, setOpenMenu}) => {
    const [windowSizeHeight, setWindowSizeHeight] = useState(window.innerHeight);

    useEffect(() => {
      setWindowSizeHeight(window.innerHeight);
    }, [window.innerHeight])
    const options = [
      {title: 'Home', linkTo: 'home'},
      {title: 'Sites de Empregos', linkTo: 'siteJobs'},
      {title: 'Vagas por Categoria', linkTo: 'categoria'},
      {title: 'Mais Informações', linkTo: 'moreInfo'},
      {title: 'Contatos', linkTo: 'contactMe'},
    
    ];

    const handleCloseMenu = () => {
      setClassOpen('');
      setMenuOpen(false);
      
      //Move Nav
      setOpenMenu('');
    }
    
    const handleSetActive = (to) => to;
  
  return (
    <Style.NavBar className={openMenuNav} windowSizeHeight={windowSizeHeight}>
        {
          options &&  options.map((option, index) => ( 
            <Link key={index} to={option.linkTo}
            activeClass='active' 
            spy={true} 
            smooth={'easeInOutQuint'} 
            offset={-90} 
            duration={500}
            delay={10}
            onClick={handleCloseMenu}
            onSetActive={handleSetActive}
           >{option.title}</Link>
          ))
          
        }
    </Style.NavBar>
  )
}

export default Navbar
