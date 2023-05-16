import { Route, Routes } from "react-router";
import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import Login from "./pages/Auth/Login";
import Signup from "./pages/Auth/Signup";
import CartPrice from "./pages/Cart/components/CartPrice";
import CartProduct from "./pages/Cart/components/CartProduct";
import Home from "./pages/Home/Home";
import ProductDetails from "./pages/Product/ProductDetails";
import Filter from "./pages/Product/components/Filter";
import ProductCard from "./pages/Product/components/ProductCard";
import Cart from "./pages/Cart/Cart";
import Wishlist from "./pages/Wishlist/Wishlist";
import Product from "./pages/Product/Product";
import CheckoutCard from "./pages/Checkout/Checkout/CheckoutCard";
import Checkout from "./pages/Checkout/Checkout";

function App() {
  return (
    <div className="App">
      <Signup />
    </div>
  );
}

export default App;
