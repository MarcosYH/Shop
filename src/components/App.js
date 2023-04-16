import React,{useState} from 'react'
import '../styles/App.css';
import Banner from './Banner';
import Caroussel from './Caroussel';
import ShopingList from './ShopingList';
import Footer from './Footer';
import Cart from './Cart';

function App() {
  const [compteur,setCompteur]=useState(0)
  const [cart,updateCart]=useState([])
  return (
    <div className="App">
      <Banner compteur={compteur} setCompteur={setCompteur} />
      <Caroussel/>
      <Cart cart={cart} updateCart={updateCart}/>
      <ShopingList compteur={compteur} setCompteur={setCompteur} cart={cart} updateCart={updateCart} />
      <Footer/> 
    </div>
  );
}

export default App;
