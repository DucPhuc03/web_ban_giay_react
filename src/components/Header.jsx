import React from "react";
import { Link } from "react-router-dom";
function Header() {
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
            <a className="nav-link" href="#">
              logo
            </a>
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
            <button className="rounded">
              <i class="fa-solid fa-cart-shopping"></i>
            </button>
          </li>
          <li className="nav-item ms-5">
            <button className="rounded">
              <i className="fa-solid fa-user"></i>
            </button>
          </li>
        </ul>
      </div>
    </div>
  );
}
export default Header;
