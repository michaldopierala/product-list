import { BrowserRouter as Router, Link, Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import Products from "./pages/products/Products";
import Login from "./pages/Login";
import Search from "./pages/products/Search";
import Add from "./pages/products/Add";
// import ProductDisplay from "./components/products/ProductDisplay";
import ProductDisplay from "./pages/products/ProductDisplay";
import List from "./pages/products/List";

function App() {
  return (
    <Router>
      <nav>
        <Link to="/"> Home </Link>
        <Link to="login"> Login </Link>
        <Link to="products"> Products </Link>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="login" element={<Login />} />
        <Route path="products" element={<Products />}>
          <Route path="search" element={<Search />} />
          <Route path="list" element={<List />} />
          <Route path="add" element={<Add/>} />
          <Route path=":id" element={<ProductDisplay />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;