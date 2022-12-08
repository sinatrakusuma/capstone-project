// import Splash from '../../components/splash/Splash'
import React from "react";
import Footer from "../../components/footer/footer";
import Navbar from "../../components/navbar/navbar";
import HeroRecycle from "../../components/hero/heroRecycle";
import CardBackground from "../../components/cardimg/CardBackground";
import Article from "../../components/article/Article";
import RecycleWasteInfo from "../../components/halfImg/recycleWaysInfo";
import dataWasteRecycle from "../../../data/dataWasteRecycle";
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
        <HeroRecycle />
        <Article
          dataInfo={dataWasteRecycle}
          textHeading="Jenis-Jenis Sampah"
          helperText="Berikut hal-hal yang perlu kamu ketahui sebelum mendaur ulang sampah"
        />
        <RecycleWasteInfo />
        <CardBackground />
        {/* <Splash/> */}
      </Container>
      <Footer />
    </div>
  );
};

export default DaurUlang;
