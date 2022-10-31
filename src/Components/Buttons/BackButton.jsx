import React from 'react'
import './BackButton.css'
import { TiArrowBack } from 'react-icons/ti'
import { Link } from 'react-router-dom'
function BackButton() {
  return (
    <Link to="/home" className="back_button">
      <TiArrowBack />
    </Link>
  )
}

export default BackButton
