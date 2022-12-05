import About from "./pages/about/About";
import Home from "./pages/home/Home";
import DaurUlang from "./pages/recycle/Recycle";
import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import WasteBank from "./pages/wasteBank/WasteBank";
import Invoice from "./pages/invoice/Invoice";
import Services from "./pages/services/Services";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" index element={<Home />} />
        <Route path="bank-sampah" element={<WasteBank />} />
        <Route path="daur-ulang" element={<DaurUlang />} />
        <Route path="layanan" element={<Services />} />
        <Route path="tentang-kami" element={<About />} />
        <Route path="bank-sampah/invoice/:id" element={<Invoice />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
