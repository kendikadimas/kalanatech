import React from 'react';
import { Link } from 'react-router-dom';

export default function TipsSeoWebsiteBisnis() {
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
                    <span>5 Maret 2026</span>
                    <span>7 Menit Baca</span>
                </div>
                <h1>5 Tips SEO Sederhana Agar Website Muncul di Google</h1>
            </header>
            <div className="article-body">
                <p>Memiliki website yang bagus hanyalah langkah awal. Langkah selanjutnya adalah memastikan orang bisa
                    menemukannya. Di sinilah SEO (Search Engine Optimization) berperan. Berikut adalah 5 tips sederhana
                    yang bisa Anda terapkan.</p>

                <h2>1. Riset Kata Kunci (Keyword)</h2>
                <p>Pikirkan apa yang diketik oleh calon pelanggan Anda di Google. Gunakan alat seperti Google Keyword
                    Planner atau Ubersuggest untuk menemukan kata kunci yang relevan dengan bisnis Anda. Masukkan kata
                    kunci tersebut secara natural dalam judul dan isi konten website Anda.</p>

                <h2>2. Optimasi On-Page SEO</h2>
                <p>Pastikan setiap halaman memiliki Meta Title dan Meta Description yang menarik. Ini adalah teks yang
                    muncul di hasil pencarian Google. Gunakan tag heading (H1, H2, H3) untuk merapikan struktur
                    informasi di halaman Anda.</p>

                <h2>3. Kecepatan Website adalah Kunci</h2>
                <p>Google lebih menyukai website yang loading-nya cepat. Website yang lambat tidak hanya dibenci Google,
                    tapi juga membuat pengunjung segera pergi. Kompres gambar Anda sebelum diunggah dan gunakan hosting
                    yang berkualitas.</p>

                <h2>4. Mobile-Friendly itu Wajib</h2>
                <p>Sebagian besar pencarian dilakukan melalui smartphone. Pastikan website Anda tampil sempurna di layar
                    kecil. Google menggunakan "mobile-first indexing", yang berarti mereka memprioritaskan versi mobile
                    website Anda untuk perangkingan.</p>

                <h2>5. Buat Konten Berkala</h2>
                <p>Blog atau bagian artikel di website berfungsi sangat baik untuk SEO. Dengan menulis artikel yang
                    bermanfaat secara rutin, website Anda akan memiliki lebih banyak halaman yang terindex dan peluang
                    muncul di berbagai kata kunci akan semakin besar.</p>

                <div className="cta-box">
                    <h3>Ingin SEO Website Anda Diurus Profesional?</h3>
                    <p>Tim KalanaLabs melayani optimasi SEO menyeluruh mulai dari teknis hingga strategi konten. Mari
                        diskusikan bagaimana kami bisa membantu website Anda naik ke halaman pertama Google.</p>
                    <a href="https://wa.me/6285707736885?text=Halo%20Kalana%20Labs%2C%20saya%20sudah%20membaca%20artikel%20SEO%2C%20ingin%20konsultasi%20optimasi%20SEO%20untuk%20website%20saya."
                        target="_blank" className="btn-primary">
                        <ion-icon name="logo-whatsapp"></ion-icon>
                        Tanya via WhatsApp
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
