import React from "react";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import Header from "../components/Header";

const Product = () => {
  const params = useParams();

  const product = {
    id: 1,
    name: "nike",
    price: 139.0,
    url: "https://s.alicdn.com/@sc04/kf/Hedd90641e94a4ca4b5cf38f73886866eo.jpg_720x720q50.jpg",
  };
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
      <div className="container mt-5 ">
        <div className="row">
          <div className="image col-4">
            <div className="div">
              <img
                src={product.url}
                alt=""
                style={{
                  width: "500px",
                  height: "500px",
                  objectfit: "cover",
                  boxsizing: "border-box",
                  border: "10px solid white ",
                }}
              />
            </div>
          </div>
          <div className="info col-6 ms-5">
            <p style={{ fontWeight: "bold" }}>{product.name}</p>
            <div className="div d-flex">
              <div className="div  d-flex me-3">
                <div className="div">
                  <span style={{ fontWeight: "bold" }}>4.9</span>
                </div>
                <div className="div">
                  <i class="fa-solid fa-star " style={{ color: "red" }}></i>
                  <i class="fa-solid fa-star" style={{ color: "red" }}></i>
                  <i class="fa-solid fa-star" style={{ color: "red" }}></i>
                  <i class="fa-solid fa-star" style={{ color: "red" }}></i>
                  <i class="fa-solid fa-star" style={{ color: "red" }}></i>
                </div>
              </div>
              <div className="div me-3">
                <span style={{ fontWeight: "bold" }}>10 </span>
                <span>Đánh giá</span>
              </div>
              <div className="div">
                <span style={{ fontWeight: "bold" }}>1k </span>
                <span>Đã bán</span>
              </div>
            </div>
            <div className="price mt-3">
              <span
                style={{
                  fontWeight: "bold",
                  fontfamily: "Arial, sansserif",
                  fontSize: "25px",
                  fontStyle: "italic",
                  color: "#FF5722",
                }}
              >
                {product.price} đ
              </span>
            </div>
            <div className="deliver d-flex">
              <div className="div me-2">
                <i class="fa-solid fa-truck"></i>
              </div>
              <div
                className="div"
                style={{
                  width: "150px",
                  height: "40px",
                }}
              >
                <span>Vận chuyển đến</span>
              </div>
              <div className="div">
                <span>
                  Số 18, Ngõ 99 Đường Trung Kính Phường Trung Hòa, Quận Cầu
                  Giấy, Hà Nội
                </span>
              </div>
            </div>
            <div className="size d-flex mt-5">
              <div className="div">
                <span>Size</span>
              </div>
              <div className="div row ms-5">
                <button className="btn btn-secondary col-2 me-2">27</button>
                <button className="btn btn-secondary col-2 me-2">28</button>
                <button className="btn btn-secondary col-2 me-2">29</button>
                <button className="btn btn-secondary col-2 me-2">30</button>
                <button className="btn btn-secondary col-2 me-2">31</button>
              </div>
            </div>
            <div className="quantity d-flex mt-5">
              <div className="div">
                <span>Số lượng</span>
              </div>
              <div className="div ms-5 d-flex">
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
            <div className="buy d-flex mt-3">
              <div className="div ">
                <div className="div">
                  <button className="btn btn-danger ">
                    <i class="fa-solid fa-cart-arrow-down me-1"></i>
                    Thêm vào giỏ hàng
                  </button>
                </div>
              </div>
              <div className="div ms-3">
                <button className="btn btn-danger ">Mua ngay</button>
              </div>
            </div>
            <div className="prodcut mt-5 bg-light ">
              <div
                className="d-flex w-100  align-items-center"
                style={{ height: "50px" }}
              >
                <h4>Mô tả sản phẩm</h4>
              </div>
              <div className="div">
                <p>
                  Hàng bên mình là Backdoor mới 100%, hàng không có hidden tag,
                  box thay thế ✔Vì là hàng Backdoor không có phụ kiện đi kèm như
                  tag giấy box hãng shop thay thế bằng box thay thế nên chúng ta
                  sẽ có giá cực kì tốt mà không ảnh hưởng tới chất lượng đôi
                  giày. ✔ Với uy tín thương hiệu mà Hải Nam_Authentic liên tục
                  tích lũy và xây dựng qua 6 năm, SHOP cam kết, các sản phẩm của
                  shop đều là hàng chính hãng 100%
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Product;
