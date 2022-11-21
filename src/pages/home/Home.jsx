import React from "react";
import Content from "../../components/Content/Content";
import Footer from "../../components/footer/Footer";
import Hero from "../../components/hero/Hero";
import Navbar from "../../components/navbar/Navbar";
import "./home.scss";
import Card from "../../components/card/Card";
import Accordion from "../../components/Accordion/SimpleAccordion";
const Home = () => {
  return (
    <div className="container">
      <Navbar />
      <h1>Halo</h1>
      <Hero />
      <Content />
      <Card />
      <Accordion />
      <Footer />
    </div>
  );
};

export default Home;
