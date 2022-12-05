import React from "react";
import Footer from "../../components/footer/footer";
import Navbar from "../../components/navbar/navbar";
import Checkout from "../../components/form/Checkout";
import HeroWasteBank from "../../components/hero/heroWasteBank";
import SectionWasteInfo from "../../components/sectionWasteInfo/sectionWasteInfo";
import dataWasteCategory from "../../data/dataWasteCategory";
import dataStepSwapWaste from "../../data/dataStepSwapTrash";
import { Container } from "@mui/system";

export default function WasteBank() {
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
        <HeroWasteBank />
        <SectionWasteInfo
          dataInfo={dataWasteCategory}
          direction="row"
          headingText="Kategori Sampah"
          helperText="Berikut adalah sampah-sampah yang dapat kamu tukarkan di Dausagi"
          background="#F5F5F5"
        />
        <SectionWasteInfo
          dataInfo={dataStepSwapWaste}
          direction="column"
          headingText="Cara Tukar Sampah"
          helperText="Ada beberapa tahapan yang harus kamu lakukan sebelum  menukar sampah di Dausagi, antara lain"
          background="transparent"
        />
        <Checkout />
      </Container>
      <Footer />
    </div>
  );
}
