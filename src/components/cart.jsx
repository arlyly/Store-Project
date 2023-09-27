import classes from './cart.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';

export default function Cart() {
  return (
    <div className={classes.cartIcon}>
      <FontAwesomeIcon icon={faShoppingCart} />
    </div>
  );
}

