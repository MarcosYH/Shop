import Fancy from '../assets/Fancy.jpg'
import Fancy1 from '../assets/Fancy Product1.jpeg'
import Popular from '../assets/Popular Item.jpg'
import Popular1 from '../assets/Popular Item1.jpg'
import Sale from '../assets/Special Item.jpg'
import Sale1 from '../assets/Sale Item1.jpeg'
import Special from '../assets/Special Item.jpg'
import Special1 from '../assets/Special Item1.jpg'



export const ListeProduit=[

    {   id:1,
        sale:false,
        name: 'Fancy Product',
        price: 80.00,
        reduction: 0,
        star:0,
        cover: Fancy
    },
    {
        id:2,
        sale:true,
        name: 'Special Item',
        price: 20.00,
        reduction: 18,
        star:5,
        cover: Fancy1
    },
    {
        id:3,
        sale:true,
        name: 'Sale Item',
        price: 50.00,
        reduction: 25,
        star:0,
        cover: Popular
    },
    {
        id:4,
        sale:false,
        name: 'Popular Item',
        price: 40.00,
        reduction: 0,
        star:5,
        cover: Popular1
    },
    {
        id:5,
        sale: true,
        name: 'Sale Item',
        price: 50.00,
        reduction: 25.00,
        star:0,
        cover: Sale
    },
    {   id:6,
        sale:false,
        name: 'Fancy Product',
        price: 280.00,
        reduction: 0,
        star:0,
        cover: Sale1
    },
    {
        id:7,
        sale: true,
        name: 'Special Item',
        price: 20.00,
        reduction: 18.00,
        star:5,
        cover: Special
    },
    {
        id:8,
        sale: false,
        name: 'Popular Item',
        price: 40.00,
        reduction: 0,
        star:4,
        cover: Special1
    },
    

]