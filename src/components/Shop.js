import React,{useState} from 'react'
import '../styles/Shop.css';
import ShopingList from './ShopingList';
import Footer from './Footer';
import Cart from './Cart';
import Banner from "./Banner";

function Shop() {
    const [compteur,setCompteur]=useState(0)
    const [cart,updateCart]=useState([])
    return (
        <div className="Shop">
            <Banner compteur={compteur} setCompteur={setCompteur} />
            <Cart cart={cart} updateCart={updateCart}/>
            <ShopingList compteur={compteur} setCompteur={setCompteur} cart={cart} updateCart={updateCart} />
            <Footer/>
        </div>
    );
}

export default Shop;
