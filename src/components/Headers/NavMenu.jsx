import React from 'react'
import Menu from './menuStyled'

const NavMenu = () => {
  return (
    <Menu>
      <ul> 
        <li><a href='#'>Início</a></li>
        <li><a href='#'>Empregos</a></li>
        <li><a href='#'>Mais Informações</a></li>
        <li><a href='#'>Anúcios</a></li>
        <li><a href='#'>Contatos</a></li>
      </ul>
    </Menu>
  )
}

export default NavMenu
