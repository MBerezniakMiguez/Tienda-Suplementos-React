import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ItemDetail from "./ItemDetail";

function ItemDetailContainer() {
  const [item, setItem] = useState(null);
  const { itemId } = useParams();

  useEffect(() => {
    fetch(`https://dummyjson.com/products/${itemId}`)
      .then((res) => res.json())
      .then((data) => setItem(data))
      .catch((err) => console.error(err));
  }, [itemId]);

  return (
    <div style={{ textAlign: "center", marginTop: "20px" }}>
      {item ? <ItemDetail item={item} /> : <p>Cargando producto...</p>}
    </div>
  );
}

export default ItemDetailContainer;
