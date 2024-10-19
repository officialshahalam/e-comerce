import { Route, Routes } from "react-router-dom"
import Navbar from "./components/Navbar"
import Cart from "./pages/Cart"
import Home from "./pages/Home"
import { useSelector } from "react-redux"


function App() {
  return (
    <div >
      <div className="fixed top-0">
        <Navbar/>
      </div>
      <Routes >
        <Route path="/" element={<Home/>}/>
        <Route path="/cart" element={<Cart/>}/>
      </Routes>
    </div>
  )
}
export default App
