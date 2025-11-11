import ItemCount from "./ItemCount";

function ItemDetail({ item }) {
  return (
    <div
      style={{
        border: "1px solid #ccc",
        borderRadius: "10px",
        padding: "20px",
        width: "300px",
        margin: "0 auto",
        textAlign: "center",
        boxShadow: "0 4px 8px rgba(0,0,0,0.1)",
      }}
    >
      <h2>{item.title}</h2>
      <p>{item.description}</p>
      <p>Precio: ${item.price}</p>
      <img src={item.thumbnail} alt={item.title} style={{ width: "100%", borderRadius: "5px" }} />
      <ItemCount />
    </div>
  );
}

export default ItemDetail;
