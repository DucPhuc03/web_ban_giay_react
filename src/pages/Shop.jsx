import React from "react";
import Header from "../components/Header";
import { Link } from "react-router-dom";
const product = [
  {
    id: 1,
    name: "nike",
    price: 139.0,
    url: "https://s.alicdn.com/@sc04/kf/Hedd90641e94a4ca4b5cf38f73886866eo.jpg_720x720q50.jpg",
  },
  {
    id: 2,
    name: "adudas",
    price: 1333,
    url: "https://s.alicdn.com/@sc04/kf/Hba8a779d2aee49cd86160d87f43a5ad0Y.jpg_720x720q50.jpg",
  },

  {
    id: 3,
    name: "bitis",
    price: 1333,
    url: "https://s.alicdn.com/@sc04/kf/H271ee78b2efc40768bf226256c958982k.jpg_720x720q50.jpg",
  },
  {
    id: 4,
    name: "convvert",
    price: 1333,
    url: "https://s.alicdn.com/@sc04/kf/Hb01ac410c1fb4a6aaf9bc6bc1f7e8dbdi.png_720x720q50.jpg",
  },
  {
    id: 5,
    name: "convvert",
    price: 1333,
    url: "https://s.alicdn.com/@sc04/kf/Hb01ac410c1fb4a6aaf9bc6bc1f7e8dbdi.png_720x720q50.jpg",
  },
  {
    id: 6,
    name: "convvert",
    price: 1333,
    url: "https://s.alicdn.com/@sc04/kf/Hb01ac410c1fb4a6aaf9bc6bc1f7e8dbdi.png_720x720q50.jpg",
  },
];
const Shop = () => {
  return (
    <div>
      <Header></Header>
      <div className="container mt-5">
        <div className="row mt-3">
          <div className="filter col-3 bg-dark">gdgdg</div>
          <div className="product row col-8 bg-light ms-5">
            {product.map((item) => (
              <div key={item.id} className="col-3">
                <Link
                  to={`/product/${item.id}`}
                  style={{ textDecoration: "none", color: "inherit" }}
                >
                  <div className="image mt-3">
                    <img
                      src={item.url}
                      alt={item.name}
                      style={{
                        width: "200px",
                        height: "214px",
                        objectFit: "cover",
                        boxSizing: "border-box",
                        border: "10px solid white",
                      }}
                    />
                  </div>
                  <div className="title pt-4">
                    <p style={{ fontWeight: "bold", fontSize: "18px" }}>
                      {item.name}
                    </p>
                    <span
                      style={{
                        fontWeight: "bold",
                        fontFamily: "Arial, sans-serif",
                        fontSize: "25px",
                        fontStyle: "italic",
                        color: "#FF5722",
                      }}
                    >
                      {item.price} đ
                    </span>
                  </div>
                </Link>
                <div className="div">
                  <button type="button" className="btn btn-danger">
                    Mua ngay
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Shop;
