import React from 'react'
import './RecetasItems.css'
import NavLinkRecetas from './NavLinkRecetas'
const recurso =
  'https://media.istockphoto.com/vectors/pizza-icon-vector-id166757566?s=612x612'

function RecetasBanner({
  short_img = recurso,
  short_tittle = 'Pizza de Champiñones',
  short_description = 'Pizza de champiñones con queso y tomates sobre una masa blanda',
  alt = 'pizza'
} = {}) {
  return (
    <NavLinkRecetas to={`/recetas/${alt}`} className="rec_item-container">
      <div className="rec_item-img">
        <img src={short_img} alt={alt} />
      </div>
      <section className="rec_item-description">
        <h3 className="rec_item-desciption-h3">{short_tittle}</h3>
        <p className="rec_item-desciption-p">{short_description}</p>
      </section>
    </NavLinkRecetas>
  )
}

export default RecetasBanner
