import React from 'react'
import '../styles/Banner.css'
function Banner({compteur,setCompteur}) {

  return (
    <nav>
      <div className='left'>
        <h2>Flemme - For Lyne</h2>
        <ul>
          <li>Home</li>
          <li>About</li>
          <li>Shop</li>
        </ul>
      </div>
      <button className='button-haut'>Cart <span className='compteur'>{compteur}</span></button>
    </nav>


  )
}

export default Banner