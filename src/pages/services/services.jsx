import React from "react";
import Article from "../../components/article/Article";
import Footer from "../../components/footer/footer";
import HalfImg from "../../components/halfImg/HalfImg";
import Hero from "../../components/hero/heroHome";
import Navbar from "../../components/navbar/navbar";
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
