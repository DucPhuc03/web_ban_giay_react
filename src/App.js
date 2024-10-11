import Header from "./components/Header";
import { Routes, Route } from "react-router-dom";
import Cart from "./pages/Cart";
function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Header></Header>} />
        <Route path="/cua-hang" element={<Cart></Cart>} />
        <Route path="lien-he"></Route>
      </Routes>
    </div>
  );
}

export default App;
