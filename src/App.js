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
      <Route path="/">
        <Route index element={<Home/>} />
      </Route>
         <Route path="banksampah" element={<BankSampah />} />
         <Route path="daurulang" element={<DaurUlang/>} />
         <Route path="layanan" element={<Layanan/>} />
         <Route path="tentangkami" element={<Kontak/>} />
        
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
