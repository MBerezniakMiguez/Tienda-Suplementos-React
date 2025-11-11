function CartWidget() {
  return (
    <div style={{ position: "relative" }}>
      🛒
      <span
        style={{
          position: "absolute",
          top: "-8px",
          right: "-8px",
          backgroundColor: "red",
          color: "white",
          borderRadius: "50%",
          width: "18px",
          height: "18px",
          fontSize: "12px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        3
      </span>
    </div>
  );
}

export default CartWidget;
