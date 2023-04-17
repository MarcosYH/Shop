import React,{useState} from 'react'
import '../styles/About.css';
import Footer from './Footer';
import Banner from "./Banner";
import mannequin3 from '../assets/mannequin3.png'
import { useHistory } from 'react-router-dom';


function About() {
    const history = useHistory();
    const [compteur,setCompteur]=useState(0)
    function handleClick() {
        history.push("/Shop");
    }

    return (
        <div className="About">
            <Banner compteur={compteur} setCompteur={setCompteur} />
            <div>
                <img src={mannequin3} alt="mannequin3" className="mannequin3"/>
                <p className="paragraphe" >
                   "Our online jacket store is proud to offer you a unique selection of high-quality jackets for both men and women. We're passionate about fashion and strive to find the trendiest and most durable jackets to meet your needs. Each of our jackets is carefully selected to meet high standards of quality and comfort. We offer a variety of styles, ranging from classic leather jackets to trendy denim jackets to warm wool jackets for the winter. Whether you're looking for a jacket for a special occasion or everyday wear, we have what you need. We're confident that you'll find the perfect jacket to complete your wardrobe with us. Browse our collection now and enjoy free shipping for orders over 100 $."
                </p>
                <button className="button" onClick={handleClick}> shop now </button>

            </div>
             <div className="div"> </div>
            <Footer/>
        </div>
    );
}

export default About;
