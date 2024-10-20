// import React, { useState, useEffect } from "react";
// import Header from "../components/Header";
// import axios from "../config/config-axios";
// const Cart = () => {
//   const [product, setProduct] = useState([]);
//   useEffect(() => {
//     const fetchCart = async () => {
//       try {
//         const response = await axios.get("http://localhost:8080/cart/get/2");
//         setProduct(response.data.data);
//       } catch (error) {
//         console.error("Error fetching user:", error);
//       }
//     };
//     fetchCart();
//   }, []);
//   console.log(product);
//   //Hàm tăng số lượng
//   const up = (index) => {
//     const updatedProducts = [...product];
//     updatedProducts[index].quantity += 1;
//     setProduct(updatedProducts);
//   };

//   // Hàm giảm số lượng
//   const down = (index) => {
//     const updatedProducts = [...product];
//     if (updatedProducts[index].quantity > 1) {
//       updatedProducts[index].quantity -= 1;
//       setProduct(updatedProducts);
//     }
//   };
//   return (
//     <div>
//       <Header></Header>

//       <div className="container mt-3">
//         <div
//           className="row ms-5 d-flex justify-content-center  align-items-center bg-light"
//           style={{ width: "100%", height: "50px" }}
//         >
//           <div className="div col-5">Sản phẩm</div>
//           <div className="div col-2">Giá</div>
//           <div className="div col-2">Số lượng</div>
//           <div className="div col-1">Tổng</div>
//           <div className="div col-1">Thao tác</div>
//         </div>
//         {product.map((item, index) => (
//           <div className="row ms-5 d-flex justify-content-center  align-items-center bg-light mt-4">
//             <div className="row col-5 align-items-center">
//               <div className="div col-8 d-flex   align-items-center">
//                 <div className="div">
//                   <input className="form-check-input" type="checkbox" />
//                 </div>
//                 <div className="div ms-4 d-flex align-items-center">
//                   <div className="div mt-2 mb-2">
//                     <img
//                       src="https://s.alicdn.com/@sc04/kf/Hedd90641e94a4ca4b5cf38f73886866eo.jpg_720x720q50.jpg"
//                       alt=""
//                       style={{ width: "120px", height: "120px" }}
//                     />
//                   </div>
//                   <div className="div ms-3" style={{ width: "120px" }}>
//                     <p>{item.product.name}</p>
//                   </div>
//                 </div>
//               </div>
//               <div className="div col-2">Size: {item.size}</div>
//             </div>
//             <div className="div col-2">{item.product.price} đ</div>
//             <div className="div col-2">
//               <div className="div ms-2 d-flex">
//                 <button
//                   className="btn btn-light"
//                   style={{
//                     width: "40px",
//                     height: "40px",
//                   }}
//                   onClick={() => down(index)}
//                 >
//                   <i class="fa-solid fa-minus"></i>
//                 </button>
//                 <div
//                   className="div justify-content-center align-items-center p-2 ps-3"
//                   style={{
//                     width: "40px",
//                     height: "40px",
//                     background: "white",
//                     border: "1px",
//                   }}
//                 >
//                   <span>{item.quantity}</span>
//                 </div>

//                 <button
//                   className="btn btn-light"
//                   style={{
//                     width: "40px",
//                     height: "40px",
//                   }}
//                   onClick={() => up(index)}
//                 >
//                   <i class="fa-solid fa-plus"></i>
//                 </button>
//               </div>
//             </div>
//             <div className="div col-1">
//               {item.product.price * item.quantity} đ
//             </div>
//             <div className="div col-1">
//               <button>
//                 <i class="fa-solid fa-trash-can"></i>
//               </button>
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default Cart;
import React, { useState, useEffect, useContext } from "react";
import Header from "../components/Header";
import axios from "../config/config-axios";
import { useNavigate } from "react-router-dom";
import { UserContext } from "../utils/ContextUser";
const Cart = () => {
  const { user } = useContext(UserContext);
  console.log(user);
  const [product, setProduct] = useState([]);
  const [selectedProducts, setSelectedProducts] = useState([]); // Lưu các sản phẩm được chọn
  const navigate = useNavigate();
  useEffect(() => {
    const fetchCart = async () => {
      try {
        const response = await axios.get(
          `http://localhost:8080/cart/get/${user.id}`
        );
        setProduct(response.data.data || []);
      } catch (error) {
        console.error("Error fetching cart:", error);
      }
    };
    fetchCart();
  }, []);

  // Hàm xử lý khi thay đổi checkbox
  const handleCheckboxChange = (item) => {
    const isSelected = selectedProducts.some(
      (selectedItem) => selectedItem.id === item.id
    );

    if (isSelected) {
      setSelectedProducts((prevSelected) =>
        prevSelected.filter((selectedItem) => selectedItem.id !== item.id)
      );
    } else {
      setSelectedProducts((prevSelected) => [...prevSelected, item]);
    }
  };
  // Hàm tăng số lượng
  const up = (index) => {
    const updatedProducts = [...product];
    updatedProducts[index].quantity += 1;
    setProduct(updatedProducts);
  };
  // Hàm giảm số lượng
  const down = (index) => {
    const updatedProducts = [...product];
    if (updatedProducts[index].quantity > 1) {
      updatedProducts[index].quantity -= 1;
      setProduct(updatedProducts);
    }
  };
  // Chuyển đến trang thanh toán với các sản phẩm đã chọn
  const handleCheckout = () => {
    navigate("/dat-hang", { state: { selectedProducts } });
  };
  return (
    <div>
      <Header />
      <div className="container mt-3">
        <div
          className="row ms-5 d-flex justify-content-center align-items-center bg-light"
          style={{ width: "100%", height: "50px" }}
        >
          <div className="div col-5">Sản phẩm</div>
          <div className="div col-2">Giá</div>
          <div className="div col-2">Số lượng</div>
          <div className="div col-1">Tổng</div>
          <div className="div col-1">Thao tác</div>
        </div>

        {product.length > 0 ? (
          product.map((item, index) => (
            <div
              key={index}
              className="row ms-5 d-flex justify-content-center align-items-center bg-light mt-4"
            >
              <div className="row col-5 align-items-center">
                <div className="div col-8 d-flex align-items-center">
                  <div className="div">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      onChange={() => handleCheckboxChange(item)} // Cập nhật khi thay đổi checkbox
                      checked={selectedProducts.some(
                        (selectedItem) => selectedItem.id === item.id
                      )}
                    />
                  </div>
                  <div className="div ms-4 d-flex align-items-center">
                    <div className="div mt-2 mb-2">
                      <img
                        src="https://s.alicdn.com/@sc04/kf/Hedd90641e94a4ca4b5cf38f73886866eo.jpg_720x720q50.jpg"
                        alt=""
                        style={{ width: "120px", height: "120px" }}
                      />
                    </div>
                    <div className="div ms-3" style={{ width: "120px" }}>
                      <p>{item.product.name}</p>
                    </div>
                  </div>
                </div>
                <div className="div col-2">Size: {item.size}</div>
              </div>
              <div className="div col-2">{item.product.price} đ</div>
              <div className="div col-2">
                <div className="div ms-2 d-flex">
                  <button
                    className="btn btn-light"
                    style={{
                      width: "40px",
                      height: "40px",
                    }}
                    onClick={() => down(index)}
                  >
                    <i className="fa-solid fa-minus"></i>
                  </button>
                  <div
                    className="div justify-content-center align-items-center p-2 ps-3"
                    style={{
                      width: "40px",
                      height: "40px",
                      background: "white",
                      border: "1px",
                    }}
                  >
                    <span>{item.quantity}</span>
                  </div>

                  <button
                    className="btn btn-light"
                    style={{
                      width: "40px",
                      height: "40px",
                    }}
                    onClick={() => up(index)}
                  >
                    <i className="fa-solid fa-plus"></i>
                  </button>
                </div>
              </div>
              <div className="div col-1">
                {item.product.price * item.quantity} đ
              </div>
              <div className="div col-1">
                <button>
                  <i className="fa-solid fa-trash-can"></i>
                </button>
              </div>
            </div>
          ))
        ) : (
          <p>Giỏ hàng trống</p>
        )}

        {/* Nút chuyển đến trang thanh toán */}
        <button
          className="btn btn-primary mt-3"
          onClick={handleCheckout}
          disabled={selectedProducts.length === 0}
        >
          Thanh toán
        </button>
      </div>
    </div>
  );
};

export default Cart;
