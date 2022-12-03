import React from "react";
import Navbar from "../../components/navbar/Navbar";
import Footer from "../../components/footer/Footer";
import Content from "../../components/Content/Content";
import Hero from "../../components/hero/Hero";
import Accordion from "../../components/Accordion/SimpleAccordion";
import ReasonInformation from "../../components/reasonInformation/reasonInformation";
import RecycleSectionHome from "../../components/recycleSectionHome/recycleSectionHome";
import ConclusionSection from "../../components/conclusionSection/conclusionSection";
import { Container } from "@mui/system";

const Home = () => {
  return (
    <div className="container">
      <Navbar />
      <Container
        component="main"
        sx={{
          "&.MuiContainer-root": {
            padding: "0",
          },
          maxWidth: {
            xs: "100%",
            lg: "100%",
            xl: "1200px",
          },
        }}
      >
        <Hero />
        <Content />
        <ReasonInformation />
        <RecycleSectionHome />
        <Accordion />
        <ConclusionSection />
      </Container>
      <Footer />
    </div>
  );
};

export default Home;
