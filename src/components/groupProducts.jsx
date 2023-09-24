import { useState, useEffect } from "react"
import classes from './groupProduct.module.css'
export default function GroupProducts() {
        const [categories, setCategories] = useState([]);
        const [selectedCategory, setSelectedCategory] = useState('');
        const [sortMethod, setSortMethod] = useState('price');
        const [sortOrder, setSortOrder] = useState('asc');
        const [products, setProducts] = useState([]);
        useEffect(() => {
            // Fetch categories and set them in state
            fetch('https://fakestoreapi.com/products/categories')
              .then((response) => response.json())
              .then((data) => setCategories(data))
              .catch((error) => console.error('Error fetching categories:', error));
          }, []);
        
          useEffect(() => {
            if (selectedCategory) {
              // Fetch products based on the selected category and set them in state
              fetch(`https://fakestoreapi.com/products/category/${selectedCategory}`)
                .then((response) => response.json())
                .then((data) => setProducts(data))
                .catch((error) => console.error('Error fetching products:', error));
            }
          }, [selectedCategory]);
        
          const handleCategoryChange = (e) => {
            setSelectedCategory(e.target.value);
          };  
    return (
        <>
         <div className={classes.productListContainer}>
        <h1 className={classes.heading}>Listing Products by Category</h1>

        {/* Category Dropdown */}
        <label htmlFor="category" className={classes.label}>
          Select a Category:
        </label>
        <select
          id="category"
          className={classes.select}
          onChange={handleCategoryChange}
        >
          <option value="">-- Select Category --</option>
          {categories.map((category) => (
            <option key={category} value={category}>
              {category}
            </option>
          ))}
        </select>

        {/* Sorting Dropdown */}
        <label htmlFor="sortMethod" className={classes.label}>
          Sort by:
        </label>
        <select
          id="sortMethod"
          className={classes.select}
          onChange={(e) => setSortMethod(e.target.value)}
        >
          <option value="price">Price (Lowest to Highest)</option>
          <option value="name">Name (Alphabetical)</option>
        </select>

        {/* Button to Toggle Sorting Order */}
        <button
          className={classes.toggleButton}
          onClick={() => setSortOrder(sortOrder === "asc" ? "desc" : "asc")}
        >
          Toggle Sort Order
        </button>

        <div className={classes.productList}>
          {products
            .slice()
            .sort((a, b) => {
              if (sortMethod === "price") {
                return sortOrder === "asc" ? a.price - b.price : b.price - a.price;
              } else if (sortMethod === "name") {
                return sortOrder === "asc"
                  ? a.title.localeCompare(b.title)
                  : b.title.localeCompare(a.title);
              }
              return 0;
            })
            .map((product) => (
              <div key={product.id} className={classes.product}>
                <img
                  src={product.image}
                  alt={product.title}
                  className={classes.productImage}
                />
                <h3 className={classes.productTitle}>{product.title}</h3>
                <p className={classes.productDescription}>{product.description}</p>
                <p className={classes.productPrice}>Price: ${product.price}</p>
                <div className={classes.productButtons}>
                  <button className={classes.buyButton}>Buy Now</button>
                  <button className={classes.addToCartButton}>Add to Cart</button>
                </div>
              </div>
            ))}
        </div>
      </div>
  </>
);
 }