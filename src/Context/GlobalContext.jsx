import React, { useState, createContext, useContext } from 'react'

const Context = createContext()

export function useGlobalContext() {
  const data = useContext(Context)
  return data
}

export function GlobalContext({ children }) {
  const [receta, setReceta] = useState({ id: 50, clase: 'active_color' })

  return (
    <Context.Provider value={{ receta, setReceta }}>
      {children}
    </Context.Provider>
  )
}
