import React, { useState } from "react";
import logo from "../assets/logo.png";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
const Register = () => {
  const [password, setPassword] = useState("");
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const navigate = useNavigate();

  const handleRegister = async (e) => {
    e.preventDefault();
    const user = {
      username: username,
      password: password,
      email: email,
    };
    try {
      const response = await axios.post(
        "http://localhost:8080/user/create",
        user
      );
      if (response.status === 200) {
        window.alert("thanh cong");
        navigate("/dang-nhap");
      } else {
        window.alert("that bai");
      }
    } catch (error) {
      window.alert("that bai");
    }
  };
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
              <span>Đăng kí</span>
            </div>
            <div className="div mt-4">
              <form onSubmit={handleRegister}>
                <div className="div d-flex justify-content-center  align-items-center mb-3">
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
                  />
                </div>
                <div className="div d-flex justify-content-center  align-items-center mb-3">
                  <label
                    htmlFor="password"
                    className="form-label"
                    style={{ width: "100px" }}
                  >
                    Mật khẩu
                  </label>
                  <input
                    className="form-control"
                    type="password"
                    onChange={(e) => setPassword(e.target.value)}
                  />
                </div>
                <div className="div d-flex justify-content-center  align-items-center mb-3">
                  <label
                    htmlFor="email"
                    className="form-label"
                    style={{ width: "100px" }}
                  >
                    Email
                  </label>
                  <input
                    className="form-control"
                    type="password"
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>
                <div className="div">
                  <button className="btn btn-primary w-100 mb-3">
                    Đăng kí
                  </button>
                </div>
                <div className="div d-flex">
                  <div className="div">
                    <span>Đã có tài khoản</span>
                  </div>
                  <div className="div ps-5">
                    <Link to={"/dang-nhap"}>Đăng nhập</Link>
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

export default Register;
