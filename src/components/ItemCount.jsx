import { useState } from "react";

function ItemCount() {
  const [count, setCount] = useState(1);

  const incrementar = () => setCount(count + 1);
  const decrementar = () => {
    if (count > 1) setCount(count - 1);
  };

  return (
    <div style={{ marginTop: "10px" }}>
      <button onClick={decrementar} style={{ padding: "5px 10px", marginRight: "10px" }}>-</button>
      <span>{count}</span>
      <button onClick={incrementar} style={{ padding: "5px 10px", marginLeft: "10px" }}>+</button>
    </div>
  );
}

export default ItemCount;
