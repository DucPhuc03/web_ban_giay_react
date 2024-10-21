import React, { useState } from "react";
import logo from "../assets/logo.png";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
const Login = () => {
  const [password, setPassword] = useState("");
  const [username, setUsername] = useState("");
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    const user = {
      username: username,
      password: password,
    };
    try {
      const response = await axios.post(
        "http://localhost:8080/auth/login",
        user,
        {
          withCredentials: true,
        }
      );

      if (response.status === 200) {
        navigate("/");
        localStorage.setItem("user", JSON.stringify(response.data.data));
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
              <span>Đăng nhập</span>
            </div>
            <div className="div mt-4">
              <form onSubmit={handleLogin}>
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
                <div className="div">
                  <button type="submit" className="btn btn-primary w-100 mb-3">
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
