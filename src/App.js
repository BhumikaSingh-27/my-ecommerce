import "./App.css";
import Navbar from "./components/Navbar/Navbar";

import Home from "./pages/Home/Home";
// import Cart from "./pages/Cart/Cart"

function App() {
  return (
    <div className="App">
      <Navbar />
      <Home/>
      {/* <Cart /> */}
    </div>
  );
}

export default App;
