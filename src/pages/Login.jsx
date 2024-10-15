import React from "react";
import logo from "../assets/logo.png";
import { Link } from "react-router-dom";
const Login = () => {
  return (
    <div>
      <div className="container">
        <div className="row" style={{ marginTop: "200px" }}>
          <div className="bgrond col-5 ">
            <img src={logo} alt="" />
          </div>
          <div className="login col-4 bg-light ps-5 ">
            <div
              className="div justify-content-center  align-items-center d-flex"
              style={{ fontWeight: "bold", fontSize: "24px" }}
            >
              <span>Đăng nhập</span>
            </div>
            <div className="div mt-4">
              <form onSubmit="">
                <div className="div d-flex justify-content-center  align-items-center mb-3">
                  <label
                    htmlFor="username"
                    className="form-label"
                    style={{ width: "100px" }}
                  >
                    Tài khoản
                  </label>
                  <input className="form-control" type="text" />
                </div>
                <div className="div d-flex justify-content-center  align-items-center mb-3">
                  <label
                    htmlFor="password"
                    className="form-label"
                    style={{ width: "100px" }}
                  >
                    Mật khẩu
                  </label>
                  <input className="form-control" type="password" />
                </div>
                <div className="div">
                  <button className="btn btn-primary w-100 mb-3">
                    Đăng nhập
                  </button>
                </div>
                <div className="div d-flex">
                  <div className="div">
                    <span>Chưa có tài khoản</span>
                  </div>
                  <div className="div ps-5">
                    <Link to={"/dang-ki"}>Đăng kí</Link>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
