import Article from "../../components/article/Article";
import React from "react";
import Footer from "../../components/footer/Footer";
import HalfImg from "../../components/halfImg/HalfImg";
import Hero from "../../components/hero/Hero";
import Navbar from "../../components/navbar/Navbar";
import CardBackground from "../../components/cardimg/CardBackground";
import { Container } from "@mui/system";

const Layanan = () => {
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
        <HalfImg />
        {/* <Marticle/> */}
        <Article />
        <CardBackground />
      </Container>
      <Footer />
    </div>
  );
};

export default Layanan;
