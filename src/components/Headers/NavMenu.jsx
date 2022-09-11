import React from 'react'
import Menu from './menuStyled'

const NavMenu = () => {
  return (
    <Menu>
      <ul> 
        <li><a href='#'>Início</a></li>
        <li><a href='#'>Empregos</a></li>
        <li><a href='#'>Informações</a></li>
        <li><a href='#'>Anúncios</a></li>
        <li><a href='#'>Contatos</a></li>
      </ul>
    </Menu>
  )
}

export default NavMenu
