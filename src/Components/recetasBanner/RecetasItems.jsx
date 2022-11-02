import React from 'react'
import { Link } from 'react-router-dom'
import './RecetasItems.css'

const recurso =
  'https://media.istockphoto.com/vectors/pizza-icon-vector-id166757566?s=612x612'

function RecetasBanner({
  short_img = recurso,
  short_tittle = 'Pizza de Champiñones',
  short_description = 'Pizza de champiñones con queso y tomates sobre una masa blanda',
  alt = 'pizza'
} = {}) {
  
  return (
    <div className="rec_item-container">
      <section className="rec_item-img">
        <img src={short_img} alt={alt} />
      </section>
      <section className="rec_item-description">
        <Link to={`/recetas/${alt}`} className="rec_item-desciption-h3">
          {short_tittle}
        </Link>
        <p className="rec_item-desciption-p">{short_description}</p>
      </section>
      
    </div>
  )
}

export default RecetasBanner
