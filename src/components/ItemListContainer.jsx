import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ItemList from "./ItemList";

function ItemListContainer({ greeting }) {
  const [items, setItems] = useState([]);
  const { categoryId } = useParams();

  useEffect(() => {
    let url = "https://dummyjson.com/products";
    if (categoryId) url += `/category/${categoryId}`;

    fetch(url)
      .then((res) => res.json())
      .then((data) => setItems(data.products || []))
      .catch((err) => console.error(err));
  }, [categoryId]);

  return (
    <div style={{ textAlign: "center", marginTop: "20px" }}>
      <h2>{greeting}</h2>
      <ItemList items={items} />
    </div>
  );
}

export default ItemListContainer;
