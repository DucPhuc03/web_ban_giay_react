import React from "react";
import Header from "../components/Header";
import Cookies from "js-cookie";
const Cart = () => {
  const accessToken = Cookies.get("access_token");
  console.log(accessToken);

  return (
    <div>
      <Header></Header>
    </div>
  );
};

export default Cart;
