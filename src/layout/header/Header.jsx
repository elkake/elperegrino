import React from 'react'
import img1 from '../../imgs/header/farm1.svg'
import img2 from '../../imgs/header/farm2.svg'
import img3 from '../../imgs/logo.svg'
import img4 from '../../imgs/header/farm4.svg'
import './style.css'
import { useParallax } from 'react-scroll-parallax'
import { TiThMenu } from 'react-icons/ti'
function Header() {
  const parallax = useParallax({
    startScroll: -250,
    endScroll: 250,
    speed: -5
  })

  const parallaxTwo = useParallax({
    startScroll: -270,
    endScroll: 250,
    speed: -10
  })

  return (
    <div id="header" className="header_container">
      <div className="header_image-section">
        <img src={img4} alt="cielo granja el peregrino" />
      </div>
      <div ref={parallax.ref} className="header_image-section">
        <img src={img3} alt="gallo el peregrino" />
      </div>
      <div ref={parallaxTwo.ref} className="header_image-section">
        <img src={img2} alt="montañas granja el peregrino" />
      </div>
      <div className="header_image-section">
        <img src={img1} alt="granja el peregrino" />
      </div>
      <div id="main"></div>
    </div>
  )
}

export default Header
