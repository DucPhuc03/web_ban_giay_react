import React from "react";
import { useLocation } from "react-router-dom";
import Header from "../components/Header";

const Order = () => {
  const location = useLocation();
  const selectedProducts = location.state?.selectedProducts || [];
  const productOrder = location.state?.productOrder || [];
  return (
    <div>
      <Header></Header>
      <div className="container mt-3 me-5">
        <div className="div bg-light">
          <div className="div justify-content-center align-items-center d-flex">
            <span style={{ fontSize: "30px" }}>Thanh toán</span>
          </div>
          <div className="div">
            <div
              className="div d-flex align-items-center "
              style={{ gap: "8px", fontSize: "20px" }}
            >
              <i class="fa-solid fa-location-dot"></i>
              <span>Địa chỉ nhận hàng</span>
            </div>
            <div className="div mt-3">
              <p style={{ fontSize: "18px" }}>
                Nguyễn Đức Phức (+84) 977684493 Số 18, Ngõ 99 Đường Trung Kính,
                Phường Trung Hòa, Quận Cầu Giấy, Hà Nội
              </p>
            </div>
          </div>
        </div>
        <div className="row bg-light mt-4 d-flex align-items-center pt-3">
          <div className="div col-6">Sản phẩm</div>
          <div className="div col-2">Đơn giá</div>
          <div className="div col-1">Số lượng</div>
          <div className="div col-2 ms-5">Thành tiền</div>
        </div>
        {selectedProducts && selectedProducts.length > 0 ? (
          selectedProducts.map((item) => (
            <div className="row d-flex align-items-center bg-light ">
              <div className="div col-6 d-flex align-items-center ">
                <div className="div mt-4">
                  <img
                    src="https://s.alicdn.com/@sc04/kf/Hedd90641e94a4ca4b5cf38f73886866eo.jpg_720x720q50.jpg"
                    alt=""
                    style={{ width: "80px", height: "80px" }}
                  />
                </div>
                <div className="div ms-3" style={{ paddingLeft: "50px" }}>
                  <p>{item.product.name}</p>
                </div>
                <div className="div ms-5" style={{ paddingLeft: "50px" }}>
                  <span> Size: {item.size}</span>
                </div>
              </div>
              <div className="div col-2">{item.product.price}</div>
              <div className="div col-1">{item.quantity}</div>
              <div className="div col-2 ms-5">
                {item.quantity * item.product.price}
              </div>
            </div>
          ))
        ) : (
          <div className="row d-flex align-items-center bg-light ">
            <div className="div col-6 d-flex align-items-center ">
              <div className="div mt-4">
                <img
                  src="https://s.alicdn.com/@sc04/kf/Hedd90641e94a4ca4b5cf38f73886866eo.jpg_720x720q50.jpg"
                  alt=""
                  style={{ width: "80px", height: "80px" }}
                />
              </div>
              <div className="div ms-3" style={{ paddingLeft: "50px" }}>
                <p>{productOrder.product.name}</p>
              </div>
              <div className="div ms-5" style={{ paddingLeft: "50px" }}>
                <span> Size: {productOrder.size}</span>
              </div>
            </div>
            <div className="div col-2">{productOrder.product.price}</div>
            <div className="div col-1">{productOrder.quantity}</div>
            <div className="div col-2 ms-5">
              {productOrder.quantity * productOrder.product.price}
            </div>
          </div>
        )}
        <div className="div ms-3">thanh toan</div>
      </div>
    </div>
  );
};

export default Order;
