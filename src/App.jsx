import React from 'react';
import { BrowserRouter, Routes, Route, useLocation, Navigate } from 'react-router-dom';
import Home from './pages/Home';
import Terms from './pages/Terms';
import useSiteLogic from './hooks/useSiteLogic';
import JasaPembuatanWebsitePurwokerto from './pages/artikel/JasaPembuatanWebsitePurwokerto';
import KenapaBisnisWajibPunyaWebsite from './pages/artikel/KenapaBisnisWajibPunyaWebsite';
import ManfaatWebsiteUmkmPurwokerto from './pages/artikel/ManfaatWebsiteUmkmPurwokerto';
import TipsSeoWebsiteBisnis from './pages/artikel/TipsSeoWebsiteBisnis';
import WebsiteProfesionalKepercayaanPelanggan from './pages/artikel/WebsiteProfesionalKepercayaanPelanggan';
import Wedding from './Wedding';
import RentalMobil from './pages/RentalMobil';

// We create a wrapper to call the hook inside BrowserRouter context
function MainApp() {
  useSiteLogic(); // Setup the vanilla JS logic on every mount/route change

  return (
    <>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/index.html" element={<Navigate to="/" replace />} />
      <Route path="/tentang-kami.html" element={<Navigate to="/#about" replace />} />
      <Route path="/faq.html" element={<Navigate to="/#faq" replace />} />
      <Route path="/terms.html" element={<Terms />} />
      <Route path="/tentang-kami" element={<Navigate to="/#about" replace />} />
      <Route path="/faq" element={<Navigate to="/#faq" replace />} />
      <Route path="/terms" element={<Terms />} />
      <Route path="/artikel/jasa-pembuatan-website-purwokerto.html" element={<JasaPembuatanWebsitePurwokerto />} />
      <Route path="/artikel/jasa-pembuatan-website-purwokerto" element={<JasaPembuatanWebsitePurwokerto />} />
      <Route path="/artikel/kenapa-bisnis-wajib-punya-website.html" element={<KenapaBisnisWajibPunyaWebsite />} />
      <Route path="/artikel/kenapa-bisnis-wajib-punya-website" element={<KenapaBisnisWajibPunyaWebsite />} />
      <Route path="/artikel/manfaat-website-umkm-purwokerto.html" element={<ManfaatWebsiteUmkmPurwokerto />} />
      <Route path="/artikel/manfaat-website-umkm-purwokerto" element={<ManfaatWebsiteUmkmPurwokerto />} />
      <Route path="/artikel/tips-seo-website-bisnis.html" element={<TipsSeoWebsiteBisnis />} />
      <Route path="/artikel/tips-seo-website-bisnis" element={<TipsSeoWebsiteBisnis />} />
      <Route path="/artikel/website-profesional-kepercayaan-pelanggan.html" element={<WebsiteProfesionalKepercayaanPelanggan />} />
      <Route path="/artikel/website-profesional-kepercayaan-pelanggan" element={<WebsiteProfesionalKepercayaanPelanggan />} />
      <Route path="/wedding" element={<Wedding />} />
      <Route path="/rental-mobil" element={<RentalMobil />} />
    </Routes>

    {/* Floating WhatsApp Button */}
    <a 
      href="https://wa.me/6285707736885" 
      className="floating-wa" 
      target="_blank" 
      rel="noopener noreferrer"
      aria-label="Chat WhatsApp"
    >
      <ion-icon name="logo-whatsapp"></ion-icon>
      <div className="wa-tooltip">Butuh Bantuan? Chat Kami</div>
    </a>
    </>
  );
}

function App() {
  return (
    <BrowserRouter>
      <MainApp />
    </BrowserRouter>
  );
}

export default App;
