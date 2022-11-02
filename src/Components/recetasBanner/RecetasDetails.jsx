import React, { useId } from 'react'
import './RecetasDetails.css'
import { useParams } from 'react-router-dom'
import getInfoReceta from '../../hooks/getInfoReceta'

function RecetasDetails() {
  const idForRecetas = useId()
  //platillo obtenido a traves de la url
  const { platillo } = useParams()

  const { data, loading } = getInfoReceta({ param: platillo })

  if (loading === true) return <h1>CARGANDO</h1>

  return (
    <div className="rec_detail-container">
      <div className='rec_bg'>
      <h2 className='rec_detail-tittle'>{data.tittle}</h2>
      <div className="rec_det-imgcontainer">
        <img src={data.img} alt={data.alt} />
      </div>
      <h3>INGREDIENTES</h3>
      <ul className='rec_unordenerlist'>
        {data.ingrediente.map(e => (
          <li key={`${idForRecetas + e}`}>{e}</li>
        ))}
      </ul>
      
          <h3>PREPACIÓN</h3>
          </div>
      <ol className='rec_ordenerlist'>
        {data.preparacion.map(e => (
          <li key={`${idForRecetas + e + 'pr'}`}>{e}</li>
        ))}
      </ol>
      
    </div>
  )
}

export default RecetasDetails
