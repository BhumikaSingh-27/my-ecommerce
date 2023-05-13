import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import Login from "./pages/Auth/Login";
import Signup from "./pages/Auth/Signup";
import Home from "./pages/Home/Home";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Home />
      <Login />
  {/* <div><Signup /></div> */}
      
    </div>
  );
}

export default App;
