import React from 'react';
import { Link } from 'react-router-dom';

export default function ManfaatWebsiteUmkmPurwokerto() {
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
                    <span>12 Maret 2026</span>
                    <span>4 Menit Baca</span>
                </div>
                <h1>Manfaat Besar Website UMKM Purwokerto: Saatnya Bisnis Lokal Go Digital</h1>
            </header>
            <div className="article-body">
                <p>Purwokerto sebagai pusat ekonomi di wilayah Jawa Tengah bagian barat kini dipenuhi dengan inovasi
                    UMKM. Mulai dari industri kuliner hingga kerajinan tangan. Pertanyaannya, apakah cukup dengan
                    berjualan di media sosial saja?</p>

                <h2>Melampaui Batas Geografis</h2>
                <p>Website memungkinkan produk UMKM Purwokerto dipesan oleh pelanggan dari Jakarta, Surabaya, bahkan
                    luar negeri dengan tingkat kepercayaan yang lebih tinggi. Website adalah "kantor pusat" digital Anda
                    yang resmi.</p>

                <h2>Keunggulan Branding Lokal</h2>
                <p>Dengan website profesional dari <strong>KalanaLabs Purwokerto</strong>, brand lokal Anda akan
                    terlihat setara dengan brand besar tingkat nasional. Desain yang premium membantu meningkatkan kelas
                    (perceived value) dari produk yang Anda tawarkan.</p>

                <h2>Efisiensi Operasional</h2>
                <p>Alih-alih membalas chat satu per satu hanya untuk menjelaskan harga, website Anda bisa menampilkan
                    katalog lengkap yang bisa diakses siapa saja kapan saja. Ini sangat menghemat waktu Anda sebagai
                    pemilik bisnis.</p>

                <div className="cta-box">
                    <h3>Dukung Bisnis Lokal Anda Berjaya</h3>
                    <p>KalanaLabs berkomitmen membantu memajukan UMKM di Purwokerto melalui kehadiran digital yang
                        berkualitas. Mari kita diskusikan cara terbaik menonjolkan bisnis Anda.</p>
                    <a href="https://wa.me/6285707736885?text=Halo%20Kalana%20Labs%2C%20saya%20pelaku%20UMKM%20di%20Purwokerto%2C%20ingin%20konsultasi%20pembuatan%20website."
                        target="_blank" className="btn-primary">
                        <ion-icon name="logo-whatsapp"></ion-icon>
                        Konsultasi UMKM
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
