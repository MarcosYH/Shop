import React from 'react'
import ProductItem from './ProductItem'
import '../styles/ShopingList.css'
import { ListeProduitsHome } from '../datas/ListeProduisHome'
function ShopingListHome({compteur,setCompteur}) {
    return (
        <div className='shoping-list'>
            <ul className='produit-list'>
                {
                    ListeProduitsHome.map(({ id, sale, name, price, reduction, star, cover }) => (
                        <div>
                            <ProductItem
                                id={id}
                                sale={sale}
                                name={name}
                                price={price}
                                reduction={reduction}
                                star={star}
                                cover={cover}
                                compteur={compteur}
                                setCompteur={setCompteur}
                            />
                        </div>
                    ))
                }
            </ul>
        </div>
    )
}

export default ShopingListHome