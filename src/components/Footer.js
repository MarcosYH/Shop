import React from 'react'
import '../styles/Footer.css'
import QR from '../assets/QR.png'

function Footer() {
  return (
    <div className='footer'> <span className="textFooter"> Copyright © Website 2023/ Scann to code QR for contact the dev the site.  </span>  <img src={QR} alt="QRcode" className="QR"/></div>


  )
}

export default Footer