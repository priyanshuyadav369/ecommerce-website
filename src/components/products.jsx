import { useState, useEffect } from "react";
import { supabase } from "../supabaseClient";

const hardcodedProducts = [
  { id:"h1", name:"Wireless Headphones", price:"₹1,999", description:"High quality sound with noise cancellation.", img:"https://plus.unsplash.com/premium_photo-1678099940967-73fe30680949?fm=jpg&q=60&w=3000&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8d2lyZWxlc3MlMjBoZWFkcGhvbmVzfGVufDB8fDB8fHww" },
  { id:"h2", name:"Smart Watch", price:"₹2,499", description:"Track your fitness and stay connected.", img:"https://gourban.in/cdn/shop/files/Pulse.jpg?v=1749553994&width=2048" },
  { id:"h3", name:"Running Shoes", price:"₹1,499", description:"Lightweight and comfortable for running.", img:"https://hips.hearstapps.com/hmg-prod/images/mhl-opener-run-shoes-311-67edd9f20e75a.jpg?crop=0.655xw:0.983xh;0.168xw,0&resize=1120:*" },
  { id:"h4", name:"Laptop Bag", price:"₹799", description:"Spacious bag with multiple compartments.", img:"https://tohl.in/cdn/shop/files/MAINEMEN_SWORKWEARLAPTOPBAG-BLACK1.jpg?v=1775737277&width=2048" },
  { id:"h5", name:"Sunglasses", price:"₹599", description:"UV protection stylish sunglasses for men.", img:"https://sunglassic.com/cdn/shop/files/BreezeFullBlackPolarizedRoundTR90Sunglasses_2__com.jpg?v=1707914772&width=2048" },
  { id:"h6", name:"Water Bottle", price:"₹399", description:"High-Quality BPA-Free Plastic bottle with straw.", img:"https://laserartindia.com/cdn/shop/files/Gradient-Blue-and-Green-Water-Bottle-with-Flip-Straw-Lid-and-Carry-Handle-The-Laser-Art-106112276.jpg?v=1728469975" },
];

export function Products() {
  const [products, setProducts] = useState([]);
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [description, setDescription] = useState("");
  const [img, setImg] = useState("");

  useEffect(() => {
    getProducts();
  }, []);

  const getProducts = async () => {
    const { data, error } = await supabase.from("products").select("*");
    if (error) {
      console.log("Error fetching products:", error);
      setProducts(hardcodedProducts);
    } else {
      setProducts([...hardcodedProducts, ...(data || [])]);
    }
  };

  const addProduct = async () => {
    if (!name || !price || !description || !img) {
      alert("Please fill all fields");
      return;
    }

    const { error } = await supabase.from("products").insert([
      {
        name,
        price: `₹${price}`,
        description,
        img,
      },
    ]);

    if (error) {
      console.log("Insert Error:", error);
    } else {
      getProducts();
    }

    setName("");
    setPrice("");
    setDescription("");
    setImg("");
  };

  return (
    <section
      style={{
        padding: "30px",
        backgroundColor: "rgb(255,240,179)",
      }}
    >
      <h2
        style={{
          fontSize: 40,
          textAlign: "center",
          marginBottom: "20px",
          color: "rgb(0, 47, 44)",
        }}
      >
        Our Products
      </h2>

      {/* ADD PRODUCT SECTION */}
      <div
        style={{
          marginBottom: "30px",
          padding: "20px",
          border: "2px solid #203324",
          borderRadius: "10px",
          backgroundColor: "#fff2d9",
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "center",
          gap: "10px",
        }}
      >
        <input
  placeholder="Product Name"
  value={name}
  onChange={(e) => setName(e.target.value)}
  style={{
    padding: "10px 15px",
    borderRadius: "8px",
    border: "2px solid #203324",
    backgroundColor: "#fff7e6",
    color: "rgb(0,47,44)",
    fontSize: "14px",
    outline: "none",
    width: "200px",
  }}
/>

<input
  placeholder="Price"
  value={price}
  onChange={(e) => setPrice(e.target.value)}
  style={{
    padding: "10px 15px",
    borderRadius: "8px",
    border: "2px solid #203324",
    backgroundColor: "#fff7e6",
    color: "rgb(0,47,44)",
    fontSize: "14px",
    outline: "none",
    width: "150px",
  }}
/>

<input
  placeholder="Description"
  value={description}
  onChange={(e) => setDescription(e.target.value)}
  style={{
    padding: "10px 15px",
    borderRadius: "8px",
    border: "2px solid #203324",
    backgroundColor: "#fff7e6",
    color: "rgb(0,47,44)",
    fontSize: "14px",
    outline: "none",
    width: "250px",
  }}
/>

<input
  placeholder="Image URL"
  value={img}
  onChange={(e) => setImg(e.target.value)}
  style={{
    padding: "10px 15px",
    borderRadius: "8px",
    border: "2px solid #203324",
    backgroundColor: "#fff7e6",
    color: "rgb(0,47,44)",
    fontSize: "14px",
    outline: "none",
    width: "250px",
  }}
/>

<button
  onClick={addProduct}
  style={{
    padding: "10px 25px",
    backgroundColor: "rgb(0, 47, 44)",
    color: "white",
    border: "none",
    borderRadius: "8px",
    fontSize: "14px",
    fontWeight: "bold",
    cursor: "pointer",
  }}
>
  + Add Product
</button>
      </div>

      {/* PRODUCT GRID */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(3, 1fr)",
          gap: "20px",
        }}
      >
        {products.map((product) => (
          <div
            key={product.id}
            style={{
              border: "2px solid #203324",
              borderRadius: "10px",
              padding: "15px",
              textAlign: "center",
              boxShadow: "0 6px 15px rgba(0,0,0,0.15)",
              backgroundColor: "#fff7e6",
            }}
          >
            <img
              src={product.img}
              alt={product.name}
              style={{
                width: "100%",
                height: "220px",
                objectFit: "cover",
                borderRadius: "8px",
              }}
            />
            <h3 style={{ color: "rgb(0,47,44)" }}>{product.name}</h3>
            <p style={{ color: "#555" }}>{product.description}</p>
            <p style={{ fontWeight: "bold", color: "#e44" }}>{product.price}</p>
            <button
              style={{
                padding: "8px 20px",
                backgroundColor: "rgb(0, 47, 44)",
                color: "white",
                border: "none",
                borderRadius: "5px",
                cursor: "pointer",
              }}
            >
              Add to Cart
            </button>
          </div>
        ))}
      </div>
    </section>
  );
}