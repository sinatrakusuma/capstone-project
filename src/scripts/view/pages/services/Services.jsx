import React from "react";
import Footer from "../../components/footer/footer";
import HeroServices from "../../components/hero/heroServices";
import Navbar from "../../components/navbar/navbar";
import ServicesInfo from "../../components/services/servicesInfo";
import FiturInfo from "../../components/Info/fiturInfo";
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
        <HeroServices />
        <FiturInfo />
        <ServicesInfo />
      </Container>
      <Footer />
    </div>
  );
}
