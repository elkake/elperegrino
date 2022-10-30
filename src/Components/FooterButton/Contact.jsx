import React from 'react'
import './style.css'
function Contact({ href, content, ico }) {
  return (
    <div className="footer_location-item">
      <a href={href} className="footer_ico">
        {ico}
      </a>
      <div className="footer_titles">
        <a href={href}>{content}</a>
      </div>
    </div>
  )
}

export default Contact
