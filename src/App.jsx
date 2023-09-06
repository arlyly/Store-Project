import { Routes, Route } from "react-router-dom"
import NavBar from "./components/navBar"
import Home from "./components/home"
import Products from "./components/products"
import SingleProduct from "./components/singleProduct"
import SignUp from "./components/signUp"
import Login from "./components/login"
import Profile from "./components/profile"
import GroupProducts from "./components/groupProducts"

function App() {

  return (
    <>
    <NavBar />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/products" element={<Products />} />
      <Route path="/singleProduct" element={<SingleProduct />} />
      <Route path="/signUp" element={<SignUp />} />
      <Route path="/login" element={<Login />} />
      <Route path="/profile" element={<Profile />} />
      <Route path="/groupProducts" element={<GroupProducts />} />
      </Routes>
    </>
  )
}

export default App
