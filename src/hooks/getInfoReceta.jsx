import React, { useEffect, useState } from 'react'
import getPrescription from '../data/getPrescription'

function getInfoReceta({ param = 'pizza' } = {}) {
  const [data, setData] = useState(getPrescription[0])
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    setLoading(true)
    setData(getPrescription.filter(e => e.alt === param)[0])
    setLoading(false)
  }, [param])

  return { data, loading }
}

export default getInfoReceta
