import { Link } from 'react-router-dom';
import classes from './products.module.css'
import { useState, useEffect } from "react"
export default function Products() {
const [Products, setProducts] = useState([]);
useEffect(() => {
    async function fetchData() {
        try {
            const response = await fetch("https://fakestoreapi.com/products");
            const data = await response.json();
            console.log(data);
            setProducts(data);
        } catch (err) {
            console.error(err);
        }
    }
    fetchData();
}, [])

    return (

        <>
        <main className={classes.main}>
        <h1>Product List</h1>
        <ul>
            {
                Products.map(({id,title,category,price,image}) => (
                  <li className= {classes.itemlist} key = {id}>
                    <h3>Title: {title}</h3>
                    <p>Category: {category}</p>
                    <p>Price: ${price}</p>
                    <img src={image} alt={title}/>
                    <button>Buy Now</button>
                        <Link to={`/products/${id} `} className={classes.link}>Product Details</Link>
                  </li>  
                ))}
        </ul>
        </main>
        </>
    )
}