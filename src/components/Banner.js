import React from 'react'
//import {BrowserRouter as Router, } from 'react-router-dom';
import '../styles/Banner.css'
import {Link} from "react-router-dom";
function Banner({compteur,setCompteur}) {

  return (
    <nav>
      <div className='left'>
        <h2>Flemme - For Lyne</h2>
        <ul>
            <Link to="/" className="home">Home</Link>
            <Link to="/Shop" className="shop">Shop</Link>
            <Link to="/About" className="about" >About</Link>
        </ul>
      </div>
      <button className='button-haut'>Cart <span className='compteur'>{compteur}</span></button>
    </nav>


  );
}

export default Banner