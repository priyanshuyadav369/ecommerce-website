export function Hero() {
  return (
    <div style={{
      backgroundColor:"rgb(0, 47, 44)",
      color: "rgb(255,240,179)",
      textAlign: "center",
      padding: "80px 20px"
    }}>
      <h1 style={{fontSize: "3rem", marginBottom: "15px" , color: "rgb(255,240,179)"}}>Welcome to MyShop 🛍️</h1>
      <p style={{fontSize: "1.3rem", marginBottom: "30px"}}>Discover the best deals on top products</p>
      <button style={{
        padding: "12px 35px",
        backgroundColor: "rgb(255,240,179)",
        color: "rgb(0, 47, 44)",
        border: "none",
        borderRadius: "25px",
        fontSize: "1rem",
        cursor: "pointer",
        fontWeight: "bold"
      }}>
        Shop Now
      </button>
    </div>
  )
}