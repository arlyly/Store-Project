import { Link } from 'react-router-dom';
import classes from './products.module.css'
import { useState, useEffect } from "react"

export default function Products({ addToCart }) {
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
        <h1>All Products </h1>
        <main className={classes.main}>
        <ul>
            {
                Products.map(({id,title,category,price,image}) => (
                  <li className= {classes.itemlist} key = {id}>
                    <h3>Title: {title}</h3>
                    <p>Category: {category}</p>
                    <p>Price: ${price}</p>
                    <img src={image} alt={title}/>
                    <button onClick={() => addToCart({ id, title, price, image })}>Add to Cart</button>
                        <Link to={`/products/${id} `} className={classes.link}>Product Details</Link>
                  </li>  
                ))}
        </ul>
        </main>
        </>
    );
}