import Article from "../../components/article/Article";
import React from "react";
import Footer from "../../components/footer/Footer";
import HalfImg from "../../components/halfImg/HalfImg";
import Hero from "../../components/hero/Hero";
import Navbar from "../../components/navbar/Navbar";
import CardBackground from "../../components/cardimg/CardBackground";
import "./layanan.scss";

const Layanan = () => {
  return (
    <div className="container">
      <Navbar />
      <div className="footer">
        <Hero />
        <HalfImg />
        {/* <Marticle/> */}
        <Article />
        <CardBackground />
        <Footer />
      </div>
    </div>
  );
};

export default Layanan;
