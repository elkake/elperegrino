import React from 'react'
import './Style.css'
import pollo from '../../imgs/logo.svg'
import { BiBuildingHouse, BiPhoneCall, BiMailSend } from 'react-icons/bi'
import { MdOutlineSettingsCell } from 'react-icons/md'
import Contact from '../../Components/FooterButton/Contact'
function Footer() {
  return (
    <div id='footer' className="footer_container">
      <section className="footer_first-section">
        <a
          href="https://www.google.com/maps/place/INDUSTRIA+AVICOLA+EL+PEREGRINO+S.R.L./@-38.6987397,-62.288596,19z/data=!4m5!3m4!1s0x0:0x74623653604c5da5!8m2!3d-38.6985794!4d-62.2886808"
          target="_blank"
          className="footer_location"
        ></a>
        <div className="footer_direction">
          <p>
            MALLEA 106 - 8000 BAHIA BLANCA <br /> PROVINCIA BS AS
          </p>
        </div>

        <div className="footer_location-data">
          <h2>CONTACTANOS</h2>
          <Contact
            href={'tel:+5402914882296'}
            content={'TEL/FAX: 0291 - 4882296'}
            ico={<BiPhoneCall />}
          />
          <Contact
            href={'tel:+540291155045508'}
            content={'CELL: 0291 - 155045508'}
            ico={<MdOutlineSettingsCell />}
          />
          <Contact
            href={'mailto:elperegrino_srl@hotmail.com'}
            content={'elperegrino_srl@hotmail.com'}
            ico={<BiMailSend />}
          />
        </div>
      </section>
      <section className="footer_second-section">
        <h3>AVICOLA</h3>
        <div className="footer_logo">
          <img src={pollo} alt="gallo elPeregrino LogoPeregrino bahiablanca" />
        </div>
        <h3>EL PEREGRINO</h3>
      </section>
    </div>
  )
}

export default Footer
