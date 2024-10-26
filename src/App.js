import { Routes, Route } from "react-router-dom";
import Order from "./pages/Order";
import Home from "./pages/Home";
import Shop from "./pages/Shop";
import Cart from "./pages/Cart";
import Product from "./pages/Product";
import Login from "./pages/Login";
import Register from "./pages/Register";
import { UserProvider } from "./utils/ContextUser";
import History from "./pages/History";
import Account from "./pages/Account";
function App() {
  return (
    <div className="App">
      <UserProvider>
        <Routes>
          <Route path="/" element={<Home></Home>} />
          <Route path="/dang-nhap" element={<Login></Login>} />
          <Route path="/dang-ki" element={<Register></Register>} />
          <Route path="/cua-hang" element={<Shop></Shop>} />
          <Route path="/lien-he"></Route>
          <Route path="/dat-hang" element={<Order></Order>}></Route>
          <Route path="/gio-hang" element={<Cart></Cart>}></Route>
          <Route path="/product/:id" element={<Product></Product>}></Route>
          <Route path="/lich-su" element={<History></History>}></Route>
          <Route path="/tai-khoan" element={<Account></Account>}></Route>
        </Routes>
      </UserProvider>
    </div>
  );
}

export default App;
