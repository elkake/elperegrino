import React, { useCallback, useMemo } from 'react'
import BackButton from '../../Components/Buttons/BackButton'
import ProductosTitle from '../../Components/letrero/ProductosTitle'
import './style.css'
import getProducts from '../../data/getProducts'
import getEggs from '../../data/getEggs'
import getSpecialities from '../../data/getSpecialities'
function Productos() {
  return (
    <div className="pro_container">
      <BackButton />
      <div className="pro_card-container">
        <h3 className="pro_card-group-tittle">POLLO</h3>
        <section className="pro_card-section">
          {getProducts.map(data => (
            <ProductosTitle
              key={data.id}
              img={data.img}
              tittle={data.tittle}
              alt={data.alt}
            />
          ))}
        </section>
      </div>

      <div className="pro_card-container">
        <h3 className="pro_card-group-tittle">HUEVOS</h3>
        <section className="pro_card-section">
          {getEggs.map(data => (
            <ProductosTitle
              key={data.id}
              img={data.img}
              tittle={data.tittle}
              alt={data.alt}
            />
          ))}
        </section>
      </div>

      <div className="pro_card-container">
        <h3 className="pro_card-group-tittle">ESPECIALIDADES</h3>
        <section className="pro_card-section">
          {getSpecialities.map(data => (
            <ProductosTitle
              key={data.id}
              img={data.img}
              tittle={data.tittle}
              alt={data.alt}
            />
          ))}
        </section>
      </div>
    </div>
  )
}

export default Productos
