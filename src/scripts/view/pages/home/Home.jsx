import React from "react";
import Navbar from "../../../components/navbar/navbar";
import Footer from "../../../components/footer/footer";
import Content from "../../../components/content/Content";
import HeroHome from "../../../components/hero/heroHome";
import Accordion from "../../../components/accordion/simpleAccordion";
import ReasonInformation from "../../../components/reasonInformation/reasonInformation";
import RecycleSectionHome from "../../../components/recycleSectionHome/recycleSectionHome";
import ConclusionSection from "../../../components/conclusionSection/conclusionSection";
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
        <HeroHome />
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
