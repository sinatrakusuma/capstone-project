import React from "react";
import Footer from "../../components/footer/footer";
import Navbar from "../../components/navbar/navbar";
import Card from "../../components/card/Card";
import Article from "../../components/article/Article";
import HeadingSectionText from "../../components/headingSectionText/headingSectionText";
import HeroAboutUs from "../../components/hero/heroAboutUs";
import dataVisiMisi from "../../../data/dataVisiMisi";
import { Container, Box } from "@mui/system";
import { Typography } from "@mui/material";

const About = () => {
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
        <HeroAboutUs />
        <Article dataInfo={dataVisiMisi} textHeading="Visi & Misi" />
        <Container
          sx={{
            minHeight: "400px",
            margin: "5rem auto",
            padding: {
              xs: "40px 24px",
              md: "40px 80px",
            },
          }}
        >
          <HeadingSectionText headingText="Tentang Aplikasi" />
          <Box>
            <Typography
              sx={{
                fontFamily: "Manrope",
                fontSize: {
                  xs: "14px",
                  md: "16px",
                },
                fontWeight: "400",
                lineHeight: "24px",
                color: "#7D7D7D",
                textAlign: "center",
              }}
            >
              Aplikasi ini merupakan sebuah aplikasi berbasis web yang
              dikembangkan untuk memanagement sampah masyarakat dimana ketika
              melakukan penyetoran sampah akan memberikan feedback seperti saldo
              sehingga selain menjadikan masyarakat bisa memanagement sampah
              mereka juga akan mendapat penghasilan dan lingkungan pun terjaga
              dengan menggunakan aplikasi ini.
            </Typography>
          </Box>
        </Container>
        <Card />
      </Container>
      <Footer />
    </div>
  );
};

export default About;
