import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import Login from "./pages/Auth/Login";
import Signup from "./pages/Auth/Signup";
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
      <ProductCard />
    </div>
  );
}

export default App;
