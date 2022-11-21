import Kontak from "./pages/kontak/Kontak";
import Home from "./pages/home/Home";
import DaurUlang from "./pages/daur ulang/DaurUlang";
import Layanan from "./pages/layanan/Layanan";
import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import BankSampah from "./pages/bank sampah/BankSampah";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" index element={<Home />} />
        <Route path="bank-sampah" element={<BankSampah />} />
        <Route path="daur-ulang" element={<DaurUlang />} />
        <Route path="layanan" element={<Layanan />} />
        <Route path="tentang-kami" element={<Kontak />} />
      </Routes>
    </BrowserRouter>
    //   <>
    //   {/* <Home/> */}
    //   {/* <BankSampah/> */}
    //   {/* <DaurUlang/> */}
    //   <Layanan/>
    //   {/* <Kontak/> */}
    // </>
  );
}

export default App;
