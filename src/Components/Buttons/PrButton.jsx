import React from 'react'
import './PrButton.css'
import img from '../../imgs/productos/alas-enteras.png'
function PrButton() {
  return (
    <div className="prbutton_container">
      <div className="prbutton_img">
        <img src={img} alt="" />
      </div>
      <h3 className="prbutton_tittle">ALAS ENTERAS</h3>
    </div>
  )
}

export default PrButton
