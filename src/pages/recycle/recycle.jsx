// import Splash from '../../components/splash/Splash'
import React from "react";
import Footer from "../../components/footer/footer";
import Hero from "../../components/hero/heroHome";
import Navbar from "../../components/navbar/navbar";
import HalfImage from "../../components/halfImg/HalfImg";
import Marticle from "../../components/article/Marticle1";
import Plastik from "../../components/halfImg/Plastik";
import Kertas from "../../components/halfImg/Kertas";
import Botol from "../../components/halfImg/Botol";
import CardBackground from "../../components/cardimg/CardBackground";
import { Container } from "@mui/system";

const DaurUlang = () => {
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
        <Marticle />
        <HalfImage />
        <Plastik />
        <Kertas />
        <Botol />
        <CardBackground />
        {/* <Splash/> */}
      </Container>
      <Footer />
    </div>
  );
};

export default DaurUlang;
