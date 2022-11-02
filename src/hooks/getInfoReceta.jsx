import React, { useEffect, useState } from 'react'
import getPrescription from '../data/getPrescription'

function getInfoReceta({ param }) {
  const [data, setData] = useState([])

  const [loading, setLoading] = useState(true)

  useEffect(() => {
    setLoading(true)
    setData(getPrescription.filter(e => e.alt === param)[0])
    setLoading(false)
  }, [param])

  return { data, loading }
}

export default getInfoReceta
