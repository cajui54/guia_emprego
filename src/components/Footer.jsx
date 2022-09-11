import React from 'react'
import Footers from './footerStyled'

const Footer = () => {
  return (
    <Footers>
        <h2>Contatos</h2>
        <ul>
            <li>
                <a href="https://www.facebook.com/jackson.silva.75436/" target="_blank">
                    <i className="fa-brands fa-facebook"></i>
                </a>
            </li>

            <li>
                <a href="https://www.instagram.com/jacksontsc/" target="_blank">
                    <i className="fa-brands fa-instagram"></i>
                </a>
            </li>

            <li>
                <a href="https://www.linkedin.com/in/jackson-silva-50641b184/" target="_blank">
                    <i className="fa-brands fa-linkedin"></i>
                </a>
            </li>
        </ul>
    </Footers>
  )
}

export default Footer
