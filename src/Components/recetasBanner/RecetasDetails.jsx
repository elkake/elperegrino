import React, { useId } from 'react'
import getDataPres from '../../data/getPrescription'
import './RecetasDetails.css'
import { useParams } from 'react-router-dom'
import getInfoReceta from '../../hooks/getInfoReceta'

function RecetasDetails({} = {}) {
  const idForRecetas = useId()
  //platillo obtenido a traves de la url
  const { platillo } = useParams()

  const { data, loading } = getInfoReceta({ param: platillo })

  if (loading === true) return <h1>CARGANDO</h1>

  return (
    <div>
      <h2>HOLA PIZZAS</h2>
      <div className="rec_det-imgcontainer">
        <img src={data.img} alt={data.alt} />
      </div>
      <ul>
        {data.ingrediente.map(e => (
          <li key={`${idForRecetas + e}`}>{e}</li>
        ))}
      </ul>
      <ol>
        {data.preparacion.map(e => (
          <li key={`${idForRecetas + e + 'pr'}`}>{e}</li>
        ))}
      </ol>
    </div>
  )
}

export default RecetasDetails
