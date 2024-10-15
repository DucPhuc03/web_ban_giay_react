import { Routes, Route } from "react-router-dom";
import Order from "./pages/Order";
import Home from "./pages/Home";
import Shop from "./pages/Shop";
import Cart from "./pages/Cart";
import Product from "./pages/Product";
import Login from "./pages/Login";
function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home></Home>} />
        <Route path="/dang-nhap" element={<Login></Login>} />
        <Route path="/cua-hang" element={<Shop></Shop>} />
        <Route path="/lien-he"></Route>
        <Route path="/dat-hang" element={<Order></Order>}></Route>
        <Route path="/gio-hang" element={<Cart></Cart>}></Route>
        <Route path="/product/:id" element={<Product></Product>}></Route>
      </Routes>
    </div>
  );
}

export default App;
