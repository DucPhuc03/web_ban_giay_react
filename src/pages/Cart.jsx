import React, { useState } from "react";
import Header from "../components/Header";
import Cookies from "js-cookie";
const Cart = () => {
  const accessToken = Cookies.get("access_token");
  console.log(accessToken);
  const [quantity, setQuantity] = useState(1);
  const up = () => {
    setQuantity(quantity + 1);
  };
  const down = () => {
    setQuantity(quantity - 1);
  };
  return (
    <div>
      <Header></Header>

      <div className="container mt-3">
        <div
          className="row ms-5 d-flex justify-content-center  align-items-center bg-light"
          style={{ width: "100%", height: "50px" }}
        >
          <div className="div col-5">Sản phẩm</div>
          <div className="div col-2">Giá</div>
          <div className="div col-2">Số lượng</div>
          <div className="div col-1">Tổng</div>
          <div className="div col-1">Thao tác</div>
        </div>
        <div className="row ms-5 d-flex justify-content-center  align-items-center bg-light mt-4">
          <div className="row col-5 align-items-center">
            <div className="div col-8 d-flex   align-items-center">
              <div className="div">
                <input className="form-check-input" type="checkbox" />
                {/* <label className="label ps-5"></label> */}
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
                  <p>ố 18, Ngõ 99 Đường Trung Kính</p>
                </div>
              </div>
            </div>
            <div className="div col-2">Size: 27</div>
          </div>
          <div className="div col-2">1100000</div>
          <div className="div col-2">
            <div className="div ms-2 d-flex">
              <button
                className="btn btn-light"
                style={{
                  width: "40px",
                  height: "40px",
                }}
                onClick={() => down()}
              >
                <i class="fa-solid fa-minus"></i>
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
                <span>{quantity}</span>
              </div>

              <button
                className="btn btn-light"
                style={{
                  width: "40px",
                  height: "40px",
                }}
                onClick={() => up()}
              >
                <i class="fa-solid fa-plus"></i>
              </button>
            </div>
          </div>
          <div className="div col-1">Tổng</div>
          <div className="div col-1">
            <button>
              <i class="fa-solid fa-trash-can"></i>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
