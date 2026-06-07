const productList = [
  { id:1, name:"Wireless Headphones", price:"₹1,999", description:"High quality sound with noise cancellation.", img:"https://plus.unsplash.com/premium_photo-1678099940967-73fe30680949?fm=jpg&q=60&w=3000&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8d2lyZWxlc3MlMjBoZWFkcGhvbmVzfGVufDB8fDB8fHww/200" },
  { id:2, name:"Smart Watch",         price:"₹2,499", description:"Track your fitness and stay connected with this smart watch.",   img:"https://gourban.in/cdn/shop/files/Pulse.jpg?v=1749553994&width=2048/200" },
  { id:3, name:"Running Shoes",       price:"₹1,499", description:"Lightweight and comfortable for running.", img:"https://hips.hearstapps.com/hmg-prod/images/mhl-opener-run-shoes-311-67edd9f20e75a.jpg?crop=0.655xw:0.983xh;0.168xw,0&resize=1120:*200" },
  { id:4, name:"Laptop Bag",          price:"₹799",   description:"Spacious bag with multiple compartments.", img:"https://tohl.in/cdn/shop/files/MAINEMEN_SWORKWEARLAPTOPBAG-BLACK1.jpg?v=1775737277&width=2048/200" },
  { id:5, name:"Sunglasses",          price:"₹599",   description:"UV protection stylish sunglasses , for men.",        img:"https://sunglassic.com/cdn/shop/files/BreezeFullBlackPolarizedRoundTR90Sunglasses_2__com.jpg?v=1707914772&width=2048/200" },
  { id:6, name:"Water Bottle",        price:"₹399",   description:"High-Quality BPA-Free Plastic bottles with straw.",        img:"https://laserartindia.com/cdn/shop/files/Gradient-Blue-and-Green-Water-Bottle-with-Flip-Straw-Lid-and-Carry-Handle-The-Laser-Art-106112276.jpg?v=1728469975/200" },
]

export function Products() {
  return (
    <section style={{padding:"30px", backgroundColor:"rgb(255,240,179"}}>
      <h2 style={{fontSize:40,textAlign:"center", marginBottom:"20px", color:"rgb(0, 47, 44)"}}>Our Products</h2>
      <div style={{display:"grid", gridTemplateColumns:"repeat(3, 1fr)", gap:"20px"}}>
        {productList.map(product => (
          <div key={product.id} style={{border:"2px solid #203324", borderRadius:"10px", padding:"15px", textAlign:"center", boxShadow:"2px 2px 8px rgba(0, 0, 0, 0.1)"}}>
            <img src={product.img} alt={product.name} style={{width:"100%", borderRadius:"8px" , backgroundColor:"rgb(0, 47, 44)"}}/>
            <h3>{product.name}</h3>
            <p style={{color:"#555"}}>{product.description}</p>
            <p style={{fontWeight:"bold", color:"#e44"}}>{product.price}</p>
            <button style={{padding:"8px 20px", backgroundColor:"rgb(0, 47, 44)", color:"white", border:"none", borderRadius:"5px", cursor:"pointer"}}>
              Add to Cart
            </button>
          </div>
        ))}
      </div>
    </section>
  )
}