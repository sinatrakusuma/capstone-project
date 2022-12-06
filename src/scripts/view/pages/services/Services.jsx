import React from "react";
import Footer from "../../../components/footer/footer";
import HalfImg from "../../../components/halfImg/HalfImg";
import Hero from "../../../components/hero/heroHome";
import Navbar from "../../../components/navbar/navbar";
import CardBackground from "../../../components/cardimg/CardBackground";
import { Container } from "@mui/system";

export default function Services() {
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
        <CardBackground />
      </Container>
      <Footer />
    </div>
  );
}
