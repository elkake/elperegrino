import React from 'react'
import { NavLink } from 'react-router-dom'
function NavLinkRecetas({ children, to }) {
  return (
    <NavLink
      to={to}
      className={({ isActive }) => {
        return isActive ? 'rec_item-container isActive' : 'rec_item-container'
      }}
    >
      {children}
    </NavLink>
  )
}

export default NavLinkRecetas
