import React from 'react'
import Footer from '../../components/footer/Footer';
import HalfImg from '../../components/halfImg/HalfImg';
import Hero from '../../components/hero/Hero';
import Navbar from '../../components/navbar/Navbar';
import Marticle from '../../components/article/Marticle';

const Layanan = () => {
  return (
    <div className="container">
        <Navbar/>
        <div className="footer">
        <Hero/>
        <HalfImg/>
        <Marticle/>
        <HalfImg/>
        <Footer/>
        </div>
    </div>
  )
}

export default Layanan;
