import classes from './shoppingCart.module.css'
export default function ShoppingCart({ cartItems, removeFromCart, clearCart }) {
  const cartTotal = cartItems.reduce((total, item) => total + item.price, 0);

  return (
    <div className={classes.shoppingCart}>
    <h2>Shopping Cart</h2>
    <ul className={classes.cartItemList}>
      {cartItems.map((item) => (
        <li key={item.id} className={classes.cartItem}>
          <img src={item.image} alt={item.title} className={classes.cartItemImage} />
          <div className={classes.cartItemDetails}>
            <h3 className={classes.cartItemTitle}>{item.title}</h3>
            <p className={classes.cartItemPrice}>${item.price}</p>
          </div>
          <button
            onClick={() => removeFromCart(item.id)}
            className={classes.removeButton}
          >
            Remove
          </button>
        </li>
      ))}
    </ul>
    <p className={classes.cartTotal}>Total: ${cartTotal.toFixed(2)}</p>
    <button onClick={clearCart} className={classes.clearCartButton}>
      Clear Cart
    </button>
  </div>
);
}