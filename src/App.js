import { Route, Routes } from "react-router";
import "./App.css";
import Home from "./pages/Home/Home";
import Navbar from "./components/Navbar/Navbar";
import ProductCard from "./pages/Product/components/ProductCard";
import Cart from "./pages/Cart/Cart";

function App() {
  return (
    <div className="App">
      <Cart />
    </div>
  );
}

export default App;
