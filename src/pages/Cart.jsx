import React from "react";
import Header from "../components/Header";

const product = [
  {
    name: "nike",
    price: 1333,
    url: "https://s.alicdn.com/@sc04/kf/Hedd90641e94a4ca4b5cf38f73886866eo.jpg_720x720q50.jpg",
  },
  {
    name: "adudas",
    price: 1333,
    url: "https://s.alicdn.com/@sc04/kf/Hba8a779d2aee49cd86160d87f43a5ad0Y.jpg_720x720q50.jpg",
  },

  {
    name: "bitis",
    price: 1333,
    url: "https://s.alicdn.com/@sc04/kf/H271ee78b2efc40768bf226256c958982k.jpg_720x720q50.jpg",
  },
  {
    name: "convvert",
    price: 1333,
    url: "https://s.alicdn.com/@sc04/kf/Hb01ac410c1fb4a6aaf9bc6bc1f7e8dbdi.png_720x720q50.jpg",
  },
  {
    name: "convvert",
    price: 1333,
    url: "https://s.alicdn.com/@sc04/kf/Hb01ac410c1fb4a6aaf9bc6bc1f7e8dbdi.png_720x720q50.jpg",
  },
  {
    name: "convvert",
    price: 1333,
    url: "https://s.alicdn.com/@sc04/kf/Hb01ac410c1fb4a6aaf9bc6bc1f7e8dbdi.png_720x720q50.jpg",
  },
];
const Cart = () => {
  return (
    <div>
      <Header></Header>
      <div className="container mt-5">
        <div className="row mt-3">
          <div className="filter col-3 bg-dark">gdgdg</div>
          <div className="product row col-8 bg-light ms-5">
            {product.map((item) => (
              <div className="col-3 ">
                <div className="image mt-3">
                  <img
                    src={item.url}
                    alt=""
                    style={{
                      width: "200px",
                      height: "214px",
                      objectfit: "cover",
                      boxsizing: "border-box",
                      border: "10px solid white ",
                    }}
                  />
                </div>
                <div className="title pt-4">
                  {item.name} {item.price}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
