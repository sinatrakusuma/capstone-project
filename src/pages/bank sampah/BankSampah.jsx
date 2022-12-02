// import Splash from '../../components/splash/Splash'
import React from "react";
import Footer from "../../components/footer/Footer";
import Navbar from "../../components/navbar/Navbar";
import "./banksampah.scss";
import Checkout from "../../components/form/Checkout";
import HeroWasteBank from "../../components/heroWasteBank/heroWasteBank";
import SectionWasteInfo from "../../components/sectionWasteInfo/sectionWasteInfo";
import dataWasteCategory from "../../data/dataWasteCategory";
import dataStepSwapWaste from "../../data/dataStepSwapTrash";

const BankSampah = () => {
  return (
    <div className="container">
      <Navbar />
      <HeroWasteBank />
      <SectionWasteInfo
        dataInfo={dataWasteCategory}
        direction="row"
        heading="Kategori Sampah"
        helperText="Berikut adalah sampah-sampah yang dapat kamu tukarkan di Dausagi"
        background="#F5F5F5"
      />
      <SectionWasteInfo
        dataInfo={dataStepSwapWaste}
        direction="column"
        heading="Cara Tukar Sampah"
        helperText="Ada beberapa tahapan yang harus kamu lakukan sebelum  menukar sampah di Dausagi, antara lain"
        background="transparent"
      />
      <Checkout />
      <div className="footer">
        <Footer />
      </div>
    </div>
  );
};

export default BankSampah;
