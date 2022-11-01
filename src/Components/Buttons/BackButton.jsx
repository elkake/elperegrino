import React from 'react'
import './BackButton.css'
import { TiArrowBack } from 'react-icons/ti'
import { Link as Ir } from 'react-router-dom'
import { Link } from 'react-scroll'
function BackButton() {
  return (
    <Link to="main" duration={1000} smooth={true} spy={true}>
      <Ir to="/home" className="back_button">
        <TiArrowBack />
      </Ir>
    </Link>
  )
}

export default BackButton
