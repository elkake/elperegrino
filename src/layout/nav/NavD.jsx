import React, { useRef } from 'react'
import './style.css'
import ReactDOM from 'react-dom'
import { TiThMenu } from 'react-icons/ti'
import { RiCloseLine } from 'react-icons/ri'
import { useGlobalContext } from '../../Context/GlobalContext'
import gallo from '../../imgs/nav/elPeregrinoLogoVacio.png'
import { Link } from 'react-scroll'
import { GiRoastChicken as Productos } from 'react-icons/gi'
import {
  MdFamilyRestroom as Nosotros,
  MdContactPhone as Contacto
} from 'react-icons/md'
import {
  GiFarmer as Inicio,
  GiRiceCooker as Recetas,
  GiRotaryPhone as Telefono
} from 'react-icons/gi'

function NavD() {
  const { navVisible, setNavVisible } = useGlobalContext()

  const handleModal = () => {
    setNavVisible(!navVisible)
  }

  const closeMenu = () => {
    setNavVisible(false)
  }
  return (
    <div>
      <div className="banner_container">
        <h1 className="header_title">EL PEREGRINO</h1>
      </div>
      <div className="menu_button" onClick={handleModal}>
        {navVisible ? <RiCloseLine /> : <TiThMenu />}
      </div>
      {navVisible ? (
        <section className="nav_modal">
          <div className="nav_container">
            <div className="nav_section">
              <img src={gallo} alt="gallo elperegrino gallopelea ventapollo" />
            </div>
            <div className="nav_menu-section">
              <Link
                onClick={closeMenu}
                to="header"
                spy={true}
                smooth={true}
                duration={1000}
                className="nav_menu-item"
              >
                INICIO <Inicio className="nav_ico" />
              </Link>
              <a href="" onClick={closeMenu} className="nav_menu-item">
                NOSOTROS <Nosotros className="nav_ico" />
              </a>
              <a href="" onClick={closeMenu} className="nav_menu-item">
                PRODUCTOS <Productos className="nav_ico" />
              </a>
              <a href="" onClick={closeMenu} className="nav_menu-item">
                RECETAS <Recetas className="nav_ico" />
              </a>
              <Link
                onClick={closeMenu}
                to="footer"
                className="nav_menu-item"
                spy={true}
                smooth={true}
                duration={1000}
              >
                CONTACTO <Contacto className="nav_ico" />
              </Link>
            </div>
            <div className="nav_footer-section">
              <Telefono className="nav_ico" />
              <a href="tel:+540291155045508">0291 - 155045508</a>
            </div>
          </div>
        </section>
      ) : (
        ''
      )}
    </div>
  )
}

export default function ModalNavD({ children }) {
  return ReactDOM.createPortal(
    <NavD>{children}</NavD>,
    document.getElementById('rootNavModal')
  )
}
