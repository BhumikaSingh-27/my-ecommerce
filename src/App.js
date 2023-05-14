import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import Login from "./pages/Auth/Login";
import Signup from "./pages/Auth/Signup";
import CartPrice from "./pages/Cart/components/CartPrice";
import CartProduct from "./pages/Cart/components/CartProduct";
import Home from "./pages/Home/Home";
import Filter from "./pages/Product/components/Filter";
import ProductCard from "./pages/Product/components/ProductCard";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Home />
      {/* <Login /> */}
      {/* <div><Signup /></div> */}
      {/* <ProductCard /> */}
      <CartProduct />
      {/* <CartPrice /> */}
    </div>
  );
}

export default App;
