import React from 'react'
import './BackButton.css'
import { TiArrowBack } from 'react-icons/ti'
import { useNavigate } from 'react-router-dom'
import { Link } from 'react-scroll'
function BackButton() {
  const goTo = useNavigate()

  return (
    <Link
      to="main"
      duration={300}
      smooth={true}
      spy={true}
      onClick={() => goTo('/home')}
    >
      <div to="/home" className="back_button">
        <TiArrowBack />
      </div>
    </Link>
  )
}

export default BackButton
