import { Link } from "react-router-dom"
import classes from './navBar.module.css'
export default function NavBar() {
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
            <Link to="/profile">Profile</Link>
            </li>
            <li className={classes.navItem}>
            <Link to="/login">Login</Link>
            </li>
            </ul> 
        </nav>
        </>
    )
}