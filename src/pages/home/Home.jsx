import React from "react";
import "./home.scss";
import Navbar from "../../components/navbar/Navbar";
import Footer from "../../components/footer/Footer";
import Content from "../../components/Content/Content";
import Hero from "../../components/hero/Hero";
import Accordion from "../../components/Accordion/SimpleAccordion";
import ReasonInformation from "../../components/reasonInformation/reasonInformation";
import RecycleSectionHome from "../../components/recycleSectionHome/recycleSectionHome";
import ConclusionSection from "../../components/conclusionSection/conclusionSection";

const Home = () => {
  return (
    <div className="container">
      <Navbar />
      <Hero />
      <Content />
      <ReasonInformation />
      <RecycleSectionHome />
      <Accordion />
      <ConclusionSection />
      <Footer />
    </div>
  );
};

export default Home;
