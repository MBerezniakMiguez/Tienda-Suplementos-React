// src/components/NavBar.jsx
import { Link } from "react-router-dom";
import CartWidget from "./CartWidget";

function NavBar() {
  return (
    <nav style={{
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      padding: "10px 20px",
      backgroundColor: "#222",
      color: "whitesmoke",
      width: "100%",
      boxSizing: "border-box",
    }}>
      <Link to="/" style={{ textDecoration: "none", color: "whitesmoke" }}>
        <h1 style={{ margin: 0, fontSize: "1.2rem", cursor: "pointer" }}>
          Tienda de productos
        </h1>
      </Link>

      <ul style={{ display: "flex", listStyle: "none", gap: "20px", margin: 0, padding: 0 }}>
        <li>
          <Link to="/category/smartphones" style={{ color: "whitesmoke", textDecoration: "none" }}>
            Smartphones
          </Link>
        </li>
        <li>
          <Link to="/category/laptops" style={{ color: "whitesmoke", textDecoration: "none" }}>
            Laptops
          </Link>
        </li>
        <li>
          <Link to="/category/fragrances" style={{ color: "whitesmoke", textDecoration: "none" }}>
            Fragancias
          </Link>
        </li>
        <li>
          <Link to="/category/groceries" style={{ color: "whitesmoke", textDecoration: "none" }}>
            Alimentos
          </Link>
        </li>
      </ul>

      <CartWidget />
    </nav>
  );
}

export default NavBar;
