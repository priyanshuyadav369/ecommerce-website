import { Navbar } from "./components/navbar"
import { Products } from "./components/products"
import { Footer } from "./components/footer";
import { Hero } from "./components/hero section";

function App() {
  return (
    <>
      <Navbar/>
      <div id="homepage"><Hero/></div>
      <div id="productlist"><Products/></div>
      <div id="contactdetails"><Footer/></div>
    </>
  )
}

export default App