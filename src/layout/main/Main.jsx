import React from 'react'
import './style.css'
import { Link } from 'react-router-dom'
function Main() {
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
          <Link to={'/nosotros'} className="section_title">
            NOSOTROS
          </Link>
        </div>
      </section>
      <section className="main_section pro_section">
        <div className="filtro">
          <Link to={'/nosotros'} className="section_title">
            PRODUCTOS
          </Link>
        </div>
      </section>
      <section className="main_section rec_section">
        <div className="filtro">
          <Link to={'/nosotros'} className="section_title">
            RECETAS
          </Link>
        </div>
      </section>
    </div>
  )
}

export default Main
