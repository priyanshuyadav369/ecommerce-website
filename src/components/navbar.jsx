export function Navbar() {
  return (
    <nav style={{display:"flex", justifyContent:"space-between", alignItems:"center", padding:"10px 20px", backgroundColor:"rgb(255,240,179)"}}>
      <h2 style={{color:"rgb(0, 47, 44)", margin:0}}>MyShop</h2>
      <ul style={{display:"flex", listStyle:"none", gap:"20px", margin:0, padding:0}}>
        <li><a href="#homepage" style={{color:"rgb(0, 47, 44)", textDecoration:"none"}}>Home</a></li>
        <li><a href="#productlist" style={{color:"rgb(0, 47, 44)", textDecoration:"none"}}>Products</a></li>
        <li><a href="#contactdetails" style={{color:"rgb(0, 47, 44)", textDecoration:"none"}}>Contact</a></li>
      </ul>
    </nav>
  )
}