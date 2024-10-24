import React, { useEffect, useState } from "react";
import Header from "../components/Header";
import { Link } from "react-router-dom";
import axios from "axios";
import Footer from "../components/Footer";
const Shop = () => {
  const [totalPage, setTotalPage] = useState(0);
  const [page, setPage] = useState(1);
  const [products, setProducts] = useState([]);
  const [searchCategory, setSearchCategory] = useState([]);
  const [searchBranch, setSearchBranch] = useState([]);
  const [category, setCategory] = useState([]);
  const [branch, setBranch] = useState([]);
  useEffect(() => {
    axios
      .get(
        `http://localhost:8080/product/get?filter=name~'nike'&page=${page}&size=12`
      )
      .then((response) => {
        setTotalPage(response.data.data.meta.pages);
        setProducts(response.data.data.result);
      });
  }, [page]);

  useEffect(() => {
    axios.get("http://localhost:8080/category/get").then((response) => {
      setCategory(response.data.data);
    });
  }, []);
  useEffect(() => {
    axios.get("http://localhost:8080/branch/get").then((response) => {
      setBranch(response.data.data);
    });
  }, []);
  const onChangePage = (page) => {
    setPage(page);
  };

  const handleCheckboxChange = (item) => {
    const isSelected = searchCategory.some(
      (selectedItem) => selectedItem.id === item.id
    );

    if (isSelected) {
      setSearchCategory((prevSelected) =>
        prevSelected.filter((selectedItem) => selectedItem.id !== item.id)
      );
    } else {
      setSearchCategory((prevSelected) => [...prevSelected, item]);
    }
  };
  const handleBranchChange = (item) => {
    const isSelected = searchBranch.some(
      (selectedItem) => selectedItem.id === item.id
    );

    if (isSelected) {
      setSearchBranch((prevSelected) =>
        prevSelected.filter((selectedItem) => selectedItem.id !== item.id)
      );
    } else {
      setSearchBranch((prevSelected) => [...prevSelected, item]);
    }
  };
  return (
    <div>
      <Header></Header>
      <div className="container mt-5">
        <div className="row mt-3">
          <div className="filter col-2 bg-light">
            <div className="title mt-3">
              <i className="fa-solid fa-filter pe-2"></i>
              <span style={{ fontWeight: "bold" }}>BỘ LỌC TÌM KIẾM</span>
            </div>
            <div className="filter">
              <div className="category">
                <div className="header mt-4">
                  <span>Theo danh mục</span>
                </div>
                {category.map((item) => (
                  <div className="form-check mt-3">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      defaultValue=""
                      id={item.name}
                      onChange={() => handleCheckboxChange(item)}
                      checked={searchCategory.some(
                        (selectedItem) => selectedItem.id === item.id
                      )}
                    />
                    <label className="label ps-5" htmlFor={item.name}>
                      {item.name}
                    </label>
                  </div>
                ))}
              </div>
              <div className="branch pt-4">
                <div className="header mt-4">
                  <span>Theo thương hiệu</span>
                </div>
                {branch.map((item) => (
                  <div className="form-check mt-3">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      defaultValue=""
                      id={item.name}
                      onChange={() => handleBranchChange(item)}
                      checked={searchBranch.some(
                        (selectedItem) => selectedItem.id === item.id
                      )}
                    />
                    <label className="label ps-5" htmlFor={item.name}>
                      {item.name}
                    </label>
                  </div>
                ))}
              </div>
              <div className="price pt-4">
                <div className="header mt-4">
                  <span>Theo giá</span>
                </div>
                <div className="form-check mt-3">
                  <input
                    className="form-check-input"
                    type="radio"
                    defaultValue=""
                    id="1"
                    name="price"
                  />
                  <label className="label ps-5" htmlFor="1">
                    Dưới 1 triệu
                  </label>
                </div>
                <div className="form-check mt-3">
                  <input
                    className="form-check-input"
                    type="radio"
                    defaultValue=""
                    id="2"
                    name="price"
                  />
                  <label className="label ps-5" htmlFor="2">
                    Từ 1 triệu - 3 triệu
                  </label>
                </div>
                <div className="form-check mt-3">
                  <input
                    className="form-check-input"
                    type="radio"
                    defaultValue=""
                    id="3"
                    name="price"
                  />
                  <label className="label ps-5" htmlFor="3">
                    Trên 3 triệu
                  </label>
                </div>
              </div>
              <div className="div"></div>
            </div>
          </div>
          <div className="product row col-9 bg-light ms-5">
            <div className="div row">
              {products.map((item) => (
                <div key={item.id} className="col-3">
                  <Link
                    to={`/product/${item.id}`}
                    style={{ textDecoration: "none", color: "inherit" }}
                  >
                    <div className="image mt-3">
                      <img
                        src={item.image_url}
                        alt={item.name}
                        style={{
                          width: "250px",
                          height: "214px",
                          objectFit: "cover",
                          boxSizing: "border-box",
                          border: "10px solid white",
                        }}
                      />
                    </div>
                    <div className="title pt-4">
                      <div className="div">
                        <p style={{ fontWeight: "bold", fontSize: "18px" }}>
                          {item.name}
                        </p>
                      </div>
                      <div className="div mt-3">
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
            <div
              className="page bg-light mt-5 "
              style={{ width: "200px", height: "40px", marginLeft: "300px" }}
            >
              <ul className="nav justify-content-center align-items-center">
                <li>
                  <i class="fa-solid fa-chevron-left"></i>
                </li>
                <li>
                  {Array.from({ length: totalPage }, (_, i) => (
                    <button
                      key={i + 1}
                      className="page-button "
                      style={{
                        border: "none",
                        paddingRight: "5px",
                        paddingLeft: "30px",
                        background: "none",
                      }}
                      onClick={() => onChangePage(i + 1)}
                    >
                      {i + 1}
                    </button>
                  ))}
                </li>
                <li>
                  <i
                    class="fa-solid fa-chevron-right"
                    style={{ paddingLeft: "20px" }}
                  ></i>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default Shop;
