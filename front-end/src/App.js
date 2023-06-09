import "./App.css";
import Nav from "./components/Nav";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Footer from "./components/Footer";
import SignUp from "./components/SignUp";
import PrivateComponent from "./components/PrivateComponent";
import Login from "./components/Login"
import AddProduct from "./components/AddProduct";
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Nav />
        <Routes>
        <Route element={<PrivateComponent />}>
          <Route path="/" element={<h1>Product Component</h1>} />
          <Route path="/add" element={<AddProduct></AddProduct>} />
          <Route path="/update" element={<h1>update Component</h1>} />
          <Route path="/profile" element={<h1>Profile Component</h1>} />
          <Route path="/logout" element={<h1>Logout Component</h1>} />
          </Route>
          <Route path="/signup" element={<SignUp></SignUp>} />
          <Route path="/login" element={<Login></Login>} />
          
        </Routes>
      </BrowserRouter>
      <Footer></Footer>
    </div>
  );
}

export default App;
