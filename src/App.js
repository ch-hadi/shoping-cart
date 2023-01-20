import './App.css';
import Card from './components/Card';
import { Route, Routes } from "react-router-dom"
import Products from './ProductsPage/Products';
import Cart from './Cart/Cart';
function App() {
  return (
    <div>
     {/* <Products/> */}
     <Routes>
      <Route path="/" element={<Products />} />
      <Route path="/cart" element={<Cart/>}/>
    </Routes>
     
    </div>
  );
}

export default App;
