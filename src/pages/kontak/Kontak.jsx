import React from 'react'
import Content from '../../components/Content/Content';
import Footer from '../../components/footer/Footer';
import Hero from '../../components/hero/Hero';
import Navbar from '../../components/navbar/Navbar';
import Card from '../../components/card/Card';
import "./kontak.scss";
import Info from '../../components/Info/Info';
const Kontak = () => {
  return (
    <div className="container">
        <Navbar/>
        <div className="footer">
        <Hero/>
        <Content/>
        <Info/>
        <Card/>
        <Footer/>
        </div>
    </div>
  )
}

export default Kontak;
