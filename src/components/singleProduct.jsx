import classes from './singleProduct.module.css'
import { Link, useParams } from 'react-router-dom'
import { useState, useEffect } from 'react'

export default function SingleProduct() {
    const {id} = useParams();
    const [product, setProduct] = useState([])
   useEffect(()=> {
    async function fetchData() {
        try {
            const response = await fetch(`https://fakestoreapi.com/products/${id}`);
            const data = await response.json();
            console.log(data);
            setProduct(data);
        } catch (err) {
            console.error(err);
        }   
    }
    fetchData();
   }, [id]);
    const {image, title, description, category,price,} = product;
   
    return (
        <>
        <Link to='/products' className={classes.link}>Back to All Products</Link>
        <div className={classes.div}>
            <img src={image} className={classes.img} alt={title} />
            <h2>Tilte: {title}</h2>
            <p>Price: ${price}</p>
            <p>Description: {description}</p>
            <p>Category: {category}</p>
            <button>Add to Cart</button>
        </div>
        </>
    )
}