import { useState } from "react"
import { Routes, Route } from "react-router-dom"
import NavBar from "./components/navBar"
import Home from "./components/home"
import Products from "./components/products"
import SingleProduct from "./components/singleProduct"
import SignUp from "./components/signUp"
import Login from "./components/login"
import Profile from "./components/profile"
import GroupProducts from "./components/groupProducts"
import ShoppingCart from "./components/shoppingCart"

function App() {
  const [cartItems, setCartItems] = useState([]);

  const addToCart = (product) => {
    setCartItems([...cartItems, product]);
  };

  const removeFromCart = (productId) => {
    const updatedCart = cartItems.filter((item) => item.id !== productId);
    setCartItems(updatedCart);
  };

  const clearCart = () => {
    setCartItems([]);
  };

  return (
    <>
    <NavBar cartItemCount={cartItems.length} /> {/* Pass the cart item count to NavBar */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Products addToCart={addToCart} />} />
        <Route path="/products/:id" element={<SingleProduct addToCart={addToCart} />} />
        <Route path="/signUp" element={<SignUp />} />
        <Route path="/login" element={<Login />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/groupProducts" element={<GroupProducts addToCart={addToCart} />} />
        <Route
          path="/shoppingCart"
          element={<ShoppingCart cartItems={cartItems} removeFromCart={removeFromCart} clearCart={clearCart} />}
        />
      </Routes>
    </>
  )
}

export default App
