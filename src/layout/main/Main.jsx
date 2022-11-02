import React from 'react'
import './style.css'
import { Link as Ir, useNavigate } from 'react-router-dom'
import { Link } from 'react-scroll'
function Main() {
  const navegar = useNavigate()

  return (
    <div className="main_container">
      <section className="title_main-container">
        <div className="main_title">
          <h2>AVICOLA EL PEREGRINO</h2>
          <span>S.R.L</span>
        </div>
        <p className="main_content">
          Venta de pollos y huevos por mayor y menor
        </p>
      </section>

      <section className="main_section nos_section">
        <div className="filtro">
          <Link
            to="main"
            smooth={true}
            spy={true}
            duration={500}
            className="section_title"
            onClick={() => navegar('/nosotros')}
          >
            NOSOTROS
          </Link>
        </div>
      </section>
      <section className="main_section pro_section">
        <div className="filtro">
          <Link
            to="main"
            smooth={true}
            spy={true}
            duration={500}
            className="section_title"
            onClick={() => navegar('/productos')}
          >
            PRODUCTOS
          </Link>
        </div>
      </section>
      <section className="main_section rec_section">
        <div className="filtro">
          <Link
            to="main"
            smooth={true}
            spy={true}
            duration={500}
            className="section_title"
            onClick={() => navegar('/recetas')}
          >
            RECETAS
          </Link>
        </div>
      </section>
    </div>
  )
}

export default Main
