import React from "react";
import Header from "../components/Header";
import SlideShow from "../components/SlideShow";
import Shop from "./Shop";
import Footer from "../components/Footer";

const Home = () => {
  return (
    <div>
      <Header></Header>
      <div className="div m-3">
        <SlideShow></SlideShow>
      </div>
      <Shop></Shop>
      <Footer></Footer>
    </div>
  );
};

export default Home;
