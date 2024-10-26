import React, { useState } from "react";
import Header from "../components/Header";

const Account = () => {
  const [username, setUsername] = useState("");
  return (
    <div>
      <Header></Header>

      <div
        className="container mt-5 bg-light   "
        style={{ marginLeft: "500px", width: "400px" }}
      >
        <div className="div pt-3">
          <p>Hồ Sơ Của Tôi</p>
        </div>
        <div className="border-red mt-5 d-flex">
          <label
            htmlFor="username"
            className="form-label"
            style={{ width: "100px" }}
          >
            Tài khoản
          </label>
          <input
            className="form-control"
            type="text"
            onChange={(e) => setUsername(e.target.value)}
            style={{ width: "150px" }}
          />
        </div>
        <div className="border-red mt-5 d-flex">
          <label
            htmlFor="username"
            className="form-label"
            style={{ width: "100px" }}
          >
            Email
          </label>
          <span>nguyenpguc200</span>
        </div>
        <div className="border-red mt-5 d-flex">
          <label
            htmlFor="username"
            className="form-label"
            style={{ width: "120px" }}
          >
            Số điện thoại
          </label>
          <input
            className="form-control"
            type="text"
            onChange={(e) => setUsername(e.target.value)}
            style={{ width: "150px" }}
          />
        </div>
        <div className="border-red mt-5 d-flex">
          <label
            htmlFor="username"
            className="form-label"
            style={{ width: "120px" }}
          >
            Địa chỉ
          </label>
          <input
            className="form-control"
            type="text"
            onChange={(e) => setUsername(e.target.value)}
            style={{ width: "500px" }}
          />
        </div>
        <div className="mt-3">
          <button type="button" class="btn btn-danger">
            Lưu
          </button>
        </div>
      </div>
    </div>
  );
};

export default Account;
