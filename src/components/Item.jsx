import { Link } from "react-router-dom";

function Item({ producto }) {
  return (
    <div
      style={{
        border: "1px solid #ccc",
        borderRadius: "10px",
        padding: "15px",
        width: "220px",
        textAlign: "center",
        boxShadow: "0 4px 8px rgba(0,0,0,0.1)",
      }}
    >
      <h3>{producto.title}</h3>
      <p>Precio: ${producto.price}</p>
      <img
        src={producto.thumbnail}
        alt={producto.title}
        style={{ width: "100%", borderRadius: "5px" }}
      />
      <Link
        to={`/item/${producto.id}`}
        style={{
          textDecoration: "none",
          backgroundColor: "#007bff",
          color: "white",
          padding: "8px 12px",
          borderRadius: "5px",
          display: "inline-block",
          marginTop: "10px",
        }}
      >
        Ver Detalle
      </Link>
    </div>
  );
}

export default Item;
