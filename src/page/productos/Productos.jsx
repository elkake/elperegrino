import React, { Suspense, useEffect, useState } from 'react'
import BackButton from '../../Components/Buttons/BackButton'
// import Listado from './components/ListadoProductos'
const Listado = React.lazy(() => import('./components/ListadoProductos'))
function Productos() {
  return (
    <div className="pro_container">
      <BackButton />
      <Suspense fallback={<h1>CARGANDO</h1>}>
        <Listado />
      </Suspense>
    </div>
  )
}

export default Productos
