import { Link } from "react-router-dom"
import classes from './navBar.module.css'
export default function NavBar({cartItemCount}) {
    return (

        <>
        <nav className={classes.navBar}>
            <div className={classes.leftName}>
                <h1>Get Anything Store</h1>
            </div>
            <ul className={classes.navList}>
            <li className={classes.navItem}>
            <Link to="/products">Products</Link>
            </li>
            <li className={classes.navItem}>
            <Link to="/groupProducts">Products by Category</Link>
            </li>
            <li className={classes.navItem}>
            <Link to="/login">Login</Link>
            </li>
            <li className={classes.navItem}>
                <Link to="/ShoppingCart">Cart({cartItemCount})</Link>
            </li>
            </ul> 
        </nav>
        </>
    )
}