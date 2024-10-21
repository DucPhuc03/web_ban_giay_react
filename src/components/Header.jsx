import React, { useState, useEffect, useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import Cookies from "js-cookie";
import logo from "../assets/logo.png";
import { UserContext } from "../utils/ContextUser";
function Header() {
  const [isLogin, setIsLogin] = useState(false);

  const { user, number } = useContext(UserContext);
  const navigate = useNavigate();

  useEffect(() => {
    const token = Cookies.get("access_token");
    setIsLogin(!!token);
  }, []);
  const handleLogout = () => {
    Cookies.remove("access_token");
    setIsLogin(false);
    navigate("/dang-nhap");
  };

  return (
    <div>
      <div>
        <ul className="nav nav-pills  justify-content-center align-items-center mt-3">
          <li className="nav-item ">
            <Link className="nav-link " to="/">
              Trang chủ
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link " to="/cua-hang">
              Cửa hàng
            </Link>
          </li>

          <li className="nav-item">
            <Link className="nav-link" to="lien-he">
              Liên hệ
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/">
              <img
                src={logo}
                alt=""
                style={{ width: "100px", height: "50px" }}
              />
            </Link>
          </li>
          <li className="nav-item  justify-content-center align-items-center col-2 ms-4 m-3">
            <form className="form-inline my-2 my-lg-0 d-flex">
              <input
                type="text"
                class="form-control"
                placeholder="Search"
                aria-label="Username"
              ></input>
              <button className="rounded">
                <i class="fa-solid fa-magnifying-glass"></i>
              </button>
            </form>
          </li>
          <li>
            <Link className="" to={"/gio-hang"}>
              <button className="rounded" style={{ position: "relative" }}>
                <i class="fa-solid fa-cart-shopping"></i>
                <span
                  style={{
                    position: "absolute",
                    top: "-15px",
                    right: "-10px",
                    backgroundColor: "blue",
                    color: "white",
                    borderRadius: "60%",
                    padding: "-1px 6px",
                    fontSize: "14px",
                    width: "20px",
                    height: "20px",
                  }}
                >
                  {number}
                </span>
              </button>
            </Link>
          </li>
          <li className="nav-item ms-5" style={{ fontSize: "20px" }}>
            <span>{user.username} </span>
          </li>
          <li className="nav-item dropdown ms-4">
            <button
              className="rounded"
              id="navbarDropdownMenuLink"
              role="button"
              data-bs-toggle="dropdown"
              aria-expanded="false"
              style={{ border: "none", background: "none" }}
            >
              <i className="fa-solid fa-user"></i>
            </button>
            <ul
              className="dropdown-menu"
              aria-labelledby="navbarDropdownMenuLink"
            >
              <li>
                <Link className="dropdown-item" to="/tai-khoan">
                  Tài khoản
                </Link>
              </li>
              <li>
                <Link className="dropdown-item" to="/lich-su">
                  Lịch sử mua hàng
                </Link>
              </li>
              {isLogin ? (
                <li>
                  <button
                    className="dropdown-item"
                    onClick={() => handleLogout()}
                  >
                    Đăng xuất
                  </button>
                </li>
              ) : (
                <li>
                  <Link className="dropdown-item" to="/dang-nhap">
                    Đăng nhập
                  </Link>
                </li>
              )}
            </ul>
          </li>
        </ul>
      </div>
    </div>
  );
}
export default Header;
