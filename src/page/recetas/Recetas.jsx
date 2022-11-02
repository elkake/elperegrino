import React, { Suspense } from 'react'
import RecetasItems from '../../Components/recetasBanner/RecetasItems'
import './Receta.css'
import dataRecetas from '../../data/getPrescription'
import BackButton from '../../Components/Buttons/BackButton'

const RecetasDetails = React.lazy(() =>
  import('../../Components/recetasBanner/RecetasDetails')
)
function Recetas() {
  return (
    <div className="rec_container">
      <BackButton />
      <h2 className="rec_principal-tittle">RECETAS</h2>
      <Suspense fallback={<h1>Cargando</h1>}>
        <div className="rec_reel-container">
          {dataRecetas.map(e => (
            <RecetasItems
              key={e.id}
              short_img={e.short_img}
              short_tittle={e.short_tittle}
              short_description={e.short_description}
              alt={e.alt}
            />
          ))}
        </div>
        <div className="rec_details-container">
          <RecetasDetails />
        </div>
      </Suspense>
    </div>
  )
}

export default Recetas
