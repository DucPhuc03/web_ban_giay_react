import React from "react";
import Header from "../components/Header";

const History = () => {
  return (
    <div>
      <Header></Header>

      <div className="container mt-3 ">
        <div
          className="div w-100 d-flex bg-light align-items-center"
          style={{ height: "52px", border: "2px " }}
        >
          <button type="button" class="btn  no-border no-background">
            Tất cả
          </button>
          <button type="button" class="btn ">
            Đã thanh toán
          </button>
          <button type="button" class="btn ">
            Chưa thanh toán
          </button>
        </div>
        <div className="search d-flex bg-light mt-3 align-items-center">
          <div className="div ms-3">
            <i class="fa-solid fa-magnifying-glass"></i>
          </div>
          <input type="text" placeholder="Tìm kiếm theo Id hoặc tên sản phẩm" />
        </div>
        <div className="order">
          <div className="div mt-4 d-flex align-items-center">
            <div className="image" style={{ width: "200px", height: "100px" }}>
              <img
                src="https://i.imgur.com/2CrH2oo.jpeg"
                alt=""
                style={{
                  width: "100%",
                  height: "auto",
                  objectfit: "cover",
                  boxsizing: "border-box",
                  border: "10px solid white ",
                }}
              />
            </div>
            <div className="info">
              <div className="div">
                <p>New Balance FuelCell RC Elite v2 SI Stone Island TDS</p>
              </div>
              <div className="div">
                <span>Size: 27</span>
              </div>
            </div>
            <div className="div ms-5">
              <span style={{ color: "#FF5722" }}>8800000 đ</span>
            </div>
          </div>
          <div className="div mt-4 d-flex align-items-center">
            <div className="image" style={{ width: "200px", height: "100px" }}>
              <img
                src="https://i.imgur.com/2CrH2oo.jpeg"
                alt=""
                style={{
                  width: "100%",
                  height: "auto",
                  objectfit: "cover",
                  boxsizing: "border-box",
                  border: "10px solid white ",
                }}
              />
            </div>
            <div className="info">
              <div className="div">
                <p>New Balance FuelCell RC Elite v2 SI Stone Island TDS</p>
              </div>
              <div className="div">
                <span>Size: 27</span>
              </div>
            </div>
            <div className="div ms-5">
              <span style={{ color: "#FF5722" }}>8800000 đ</span>
            </div>
          </div>
          <div className="div mt-5  " style={{ height: "100px" }}>
            <span>Thành tiền: 880000 đ</span>
            <div className="">
              <button type="button" class="btn btn-danger">
                Mua lại
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default History;
