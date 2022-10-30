import React, { useState,createContext, useContext } from 'react'

const Context = createContext()

export function useGlobalContext() {
  const data = useContext(Context)
  return data
}

export function GlobalContext({children}) {

  const [navVisible, setNavVisible] = useState(false)
  const data = 5

  return <Context.Provider value={{ navVisible,setNavVisible }}>{children}</Context.Provider>
}
