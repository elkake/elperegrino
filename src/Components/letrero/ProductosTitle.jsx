import React from 'react'
import "./ProductosTitle.css"
function ProductosTitle({ tittle = 'PRODUCTOS' } = {}) {
  return (
    <div className='pr_title-float-container'>
      <h2>{tittle}</h2>
    </div>
  )
}

export default ProductosTitle
