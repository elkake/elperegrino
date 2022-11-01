import React from 'react'
import './ProductosTitle.css'
import img1 from '../../imgs/productos/pollo/muslo.png'

function ProductosTitle({
  img = img1,
  tittle = 'Muslo de Pollo',
  alt = 'Muslo de Pollo'
} = {}) {
  return (
    <div className="prcard_container">
      <span className='prcard_holes'></span>
      <div className="prcard_item">
        <img src={img} alt={alt} />
      </div>
      <h2 className="prcard_tittle">{tittle}</h2>
    </div>
  )
}

export default ProductosTitle
