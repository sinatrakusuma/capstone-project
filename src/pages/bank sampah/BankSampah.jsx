// import Splash from '../../components/splash/Splash'
import React from 'react'
import Footer from '../../components/footer/Footer';
import Hero from '../../components/hero/Hero';
import Navbar from '../../components/navbar/Navbar';
import Content from '../../components/Content/Content';
// import HalfImage from '../../components/halfImg/HalfImg';
// import Marticle from '../../components/article/Marticle';
// import Desc from '../../components/halfImg/Desc';
import "./banksampah.scss"

const BankSampah = () => {
  return (
    <div className="container">
        <Navbar/>
        <div className="footer">
        <Hero/>
        <Content/>
        <Footer/>
        </div>
    </div>
  )
}

export default BankSampah;
