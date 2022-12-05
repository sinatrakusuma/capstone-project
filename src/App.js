import Kontak from "./pages/about/about";
import Home from "./pages/home/Home";
import DaurUlang from "./pages/recycle/recycle";
import Layanan from "./pages/services/services";
import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import BankSampah from "./pages/bankSampah/bankSampah";
import Invoice from "./pages/invoice/Invoice";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" index element={<Home />} />
        <Route path="bank-sampah" element={<BankSampah />} />
        <Route path="daur-ulang" element={<DaurUlang />} />
        <Route path="layanan" element={<Layanan />} />
        <Route path="tentang-kami" element={<Kontak />} />
        <Route path="bank-sampah/invoice/:id" element={<Invoice />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
