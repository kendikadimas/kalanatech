import React from 'react';
import { Link } from 'react-router-dom';

export default function JasaPembuatanWebsitePurwokerto() {
  return (
    <>
      


    {/*  Navigation  */}
    <nav className="navbar navbar-solid" id="navbar">
        <div className="nav-container">
            <Link to="/" className="nav-logo">
                <img src="../logo.png" alt="KalanaLabs Logo" className="logo-img" />
                KalanaLabs
            </Link>
            <ul className="nav-links" id="navLinks">
                <li><a href="/#hero" className="nav-link">Home</a></li>
                <li><a href="/#services" className="nav-link">Layanan</a></li>
                <li><a href="/#pricing" className="nav-link">Harga</a></li>
                <li><a href="/#faq" className="nav-link">FAQ</a></li>
                <li><a href="/#about" className="nav-link">Tentang</a></li>
                <li><a href="/#articles" className="nav-link active">Artikel</a></li>
            </ul>
            <a href="/#contact" className="nav-cta">Konsultasi Gratis</a>
            <button className="nav-toggle" id="navToggle" aria-label="Toggle menu">
                <span></span>
                <span></span>
                <span></span>
            </button>
        </div>
    </nav>

    <div className="container article-page">
        <a href="/" className="back-link">
            <ion-icon name="arrow-back-outline"></ion-icon>
            Kembali ke Beranda
        </a>
        <article className="article-content">
            <header className="article-header">
                <div className="article-meta">
                    <span>14 Maret 2026</span>
                    <span>5 Menit Baca</span>
                </div>
                <h1>Jasa Pembuatan Website Purwokerto: Solusi Digital Partner Bisnis Anda</h1>
            </header>
            <div className="article-body">
                <p>Pertumbuhan ekonomi di Purwokerto dan wilayah Banyumas secara umum meningkat pesat dalam beberapa
                    tahun terakhir. Banyak pelaku bisnis lokal yang kini mulai menyadari pentingnya memiliki "identitas
                    digital". Jika Anda sedang mencari <strong>jasa pembuatan website Purwokerto</strong>, Anda berada
                    di tempat yang tepat.</p>

                <h2>Kenapa Harus Local Partner?</h2>
                <p>Banyak klien kami di Purwokerto merasa lebih nyaman bekerja dengan partner lokal. Alasannya
                    sederhana: kemudahan komunikasi dan pemahaman tentang pasar lokal. KalanaLabs hadir sebagai solusi
                    digital yang memahami karakteristik bisnis di Purwokerto.</p>

                <h2>Kualitas Standar Global, Harga Lokal</h2>
                <p>Kami bangga menawarkan teknologi terbaru dalam pengembangan website. Mulai dari landing page yang
                    responsif hingga aplikasi sistem yang kompleks. Meskipun menggunakan standar kualitas tinggi, kami
                    tetap menawarkan paket harga yang kompetitif bagi UMKM lokal.</p>

                <h2>Proses Kerja Kami</h2>
                <p>Kami tidak langsung membuat kode. Kami mulai dengan mendengar. Apa tujuan bisnis Anda? Siapa target
                    pelanggan Anda di Purwokerto? Dari sana, kami merancang desain yang bukan hanya cantik, tapi juga
                    fungsional.</p>

                <div className="cta-box">
                    <h3>Mau Tanya-tanya Dulu?</h3>
                    <p>Mampir atau ngobrol online juga boleh. Kami siap membantu memperkuat kehadiran digital bisnis
                        Anda di Purwokerto.</p>
                    <a href="https://wa.me/6285707736885?text=Halo%20Kalana%20Labs%2C%20saya%20tertarik%20dengan%20jasa%20pembuatan%20website%20di%20Purwokerto."
                        target="_blank" className="btn-primary">
                        <ion-icon name="logo-whatsapp"></ion-icon>
                        WhatsApp Sekarang
                    </a>
                </div>
            </div>
        </article>
    </div>
    <footer className="footer">
        <div className="container" style={{}}>
            <p>&copy; 2026 KalanaLabs. All Rights Reserved.</p>
        </div>
    </footer>

    



    </>
  );
}
