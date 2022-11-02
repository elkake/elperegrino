import React from 'react'
import ProductosTitle from '../../../Components/letrero/ProductosTitle'
import './ListadoProductos.css'
import getProducts from '../../../data/getProducts'
import getEggs from '../../../data/getEggs'
import getSpecialities from '../../../data/getSpecialities'

function ListadoProductos() {
  return (
    <div>
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

export default ListadoProductos
