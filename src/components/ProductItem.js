import React from 'react'
import '../styles/ProductItem.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';

function ProductItem({ id,sale,name,price,reduction,star,cover,compteur,setCompteur}) {
  function increment() {
    setCompteur(compteur+1)
  }
  let range=[1,2,3,4,5]
  return (
    <li key={id} className='product-item'>
      {
        sale===true && <div className='sale'>Sale</div>
      }
      <img src={cover} alt={`${name} cover`} className='item-cover'/>
      <span className='titre'>{name}</span>
      <div className='star'>
      {
        (star!==0)? range.map(elem => star >= elem && <FontAwesomeIcon className='str' icon={faStar} />):null
      }
      </div>
      <div className='Price'>
          { 
            (reduction===0)? <span>  ${price}.00</span>: <span><span className='barre'> ${price}.00 </span> - ${reduction}.00 </span>
          }
      </div>
      <button onClick={increment} className='button-bas'>Add to cart</button>
      
    </li>
  )
}

export default ProductItem