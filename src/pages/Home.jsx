import React from 'react';
import { Link } from 'react-router-dom';

export default function Home() {
  return (
    <>
    {/*  Navigation  */}
    <nav className="navbar" id="navbar">
        <div className="nav-container">
            <Link to="/" className="nav-logo">
                <img src="logo.png" alt="KalanaLabs Logo" className="logo-img" />
                KalanaLabs
            </Link>
            <ul className="nav-links" id="navLinks">
                <li><a href="/#hero" className="nav-link active">Home</a></li>
                <li><a href="/#services" className="nav-link">Layanan</a></li>
                <li><a href="/#portfolio" className="nav-link">Portofolio</a></li>
                <li><a href="/#pricing" className="nav-link">Harga</a></li>
                <li><a href="/#about" className="nav-link">Tentang</a></li>
                <li><a href="/#articles" className="nav-link">Artikel</a></li>
                <li><a href="/#faq" className="nav-link">FAQ</a></li>
            </ul>
            <a href="https://wa.me/6285707736885" className="nav-cta">Konsultasi Gratis</a>
            <button className="nav-toggle" id="navToggle" aria-label="Toggle menu">
                <span></span>
                <span></span>
                <span></span>
            </button>
        </div>
    </nav>

    {/*  Hero Section  */}
    <section className="hero" id="hero">
        <div className="hero-bg-shapes">
            <div className="hero-shape s1"></div>
            <div className="hero-shape s2"></div>
            <div className="hero-shape s3"></div>
        </div>
        <div className="hero-container">
            <div className="hero-content">
                <div className="hero-badge">
                    <ion-icon name="shield-checkmark"></ion-icon>
                    Partner Digital Terpercaya
                </div>
                <h1 className="hero-title">
                    <span className="text-highlight">Jasa Pembuatan Website </span> & Solusi Digital UMKM
                </h1>
                <p className="hero-subtitle">
                    Kami bantu bisnis kamu yang pengen memulai go-online melalui website, aplikasi, serta sistem yang mengatasi permasalahan bisnismu.
                </p>
                <div className="hero-actions">
                    <a href="https://wa.me/6285707736885" className="btn-primary btn-lg" id="heroCta">
                        <ion-icon name="chatbubbles-outline"></ion-icon>
                        Konsultasi Gratis
                    </a>
                    <a href="#portfolio" className="btn-white btn-lg" id="heroPortfolio">
                        Lihat Portofolio
                        <ion-icon name="arrow-forward-outline"></ion-icon>
                    </a>
                </div>
            </div>
        </div>
    </section>

    {/*  Services Section  */}
    <section className="section services" id="services">
        <div className="container">
            <div className="section-header center">
                <span className="section-tag blue">Layanan Kami</span>
                <h2 className="section-title">Layanan Jasa Buat Website <br />& Solusi Digital UMKM</h2>
                <p className="section-subtitle">Dari website sederhana hingga sistem enterprise — kami siap membantu.</p>
            </div>
            <div className="services-grid">
                <div className="service-card" id="svc-web">
                    <div className="service-icon">
                        <ion-icon name="globe-outline"></ion-icon>
                    </div>
                    <h3>Jasa Buat Landing Page</h3>
                    <p>Website profesional yang meningkatkan kredibilitas dan menjangkau lebih banyak pelanggan. Desain modern, responsif, dan SEO-ready.</p>
                </div>
                <div className="service-card" id="svc-app">
                    <div className="service-icon">
                        <ion-icon name="layers-outline"></ion-icon>
                    </div>
                    <h3>Jasa Pembuatan Website UMKM</h3>
                    <p>Sistem custom yang mengautomasi proses bisnis Anda. Dashboard, CRM, inventory management, dan solusi digital lainnya.</p>
                </div>
                <div className="service-card" id="svc-mobile">
                    <div className="service-icon">
                        <ion-icon name="phone-portrait-outline"></ion-icon>
                    </div>
                    <h3>Aplikasi Mobile</h3>
                    <p>Aplikasi mobile untuk Android & iOS yang membantu bisnis Anda hadir langsung di tangan pelanggan.</p>
                </div>
                <div className="service-card" id="svc-maintain">
                    <div className="service-icon">
                        <ion-icon name="construct-outline"></ion-icon>
                    </div>
                    <h3>Maintenance & Support</h3>
                    <p>Layanan maintenance rutin agar website dan sistem Anda selalu berjalan optimal, aman, dan up-to-date.</p>
                </div>
            </div>
        </div>
    </section>

    {/*  Portfolio Section  */}
    <section className="section portfolio" id="portfolio">
        <div className="container">
            <div className="section-header center">
                <span className="section-tag">Portofolio</span>
                <h2 className="section-title white">Project yang Telah Kami Kerjakan</h2>
                <p className="section-subtitle white">Beberapa hasil karya terbaik kami untuk berbagai jenis bisnis.</p>
            </div>
            <div className="portfolio-grid">
                {/*  Dapoer Niknik Project  */}
                <div className="portfolio-card" id="port-dapoerniknik">
                    <div className="portfolio-img-container">
                        <img src="dapoerniknik.png" alt="Dapoer Niknik Landing Page" className="portfolio-real-img" />
                    </div>
                    <div className="portfolio-info">
                        <span className="portfolio-type">Landing Page — F&B</span>
                        <h3>Dapoer Niknik — Catering & Restaurant</h3>
                        <p>Website landing page modern untuk jasa catering dengan katalog menu interaktif dan integrasi pesanan WhatsApp.</p>
                        <div className="portfolio-tags">
                            <span>Landing Page</span>
                            <span>F&B</span>
                            <span>WhatsApp Order</span>
                        </div>
                    </div>
                </div>

                {/*  Rent Car Project  */}
                <div className="portfolio-card" id="port-rentcar">
                    <div className="portfolio-img-container">
                        <img src="rentcar.png" alt="Rent Car Landing Page" className="portfolio-real-img" />
                    </div>
                    <div className="portfolio-info">
                        <span className="portfolio-type">Landing Page — Transportasi</span>
                        <h3>Rent Car — Jasa Sewa Mobil</h3>
                        <p>Landing page profesional untuk jasa rental mobil dengan tampilan daftar armada yang elegan dan integrasi booking via WhatsApp.</p>
                        <div className="portfolio-tags">
                            <span>Landing Page</span>
                            <span>Rental Mobil</span>
                            <span>Booking Online</span>
                        </div>
                    </div>
                </div>

                {/*  Anggana Project  */}
                <div className="portfolio-card" id="port-anggana">
                    <div className="portfolio-img-container">
                        <img src="Anggana.png" alt="Anggana Project Company Profile" className="portfolio-real-img" />
                    </div>
                    <div className="portfolio-info">
                        <span className="portfolio-type">Company Profile</span>
                        <h3>Anggana Project — Creative Digital Agency</h3>
                        <p>Website company profile modern dan estetik untuk agensi digital kreatif di Purwokerto dengan tampilan portofolio interaktif.</p>
                        <div className="portfolio-tags">
                            <span>Creative Agency</span>
                            <span>Design List</span>
                            <span>UI/UX</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>

    {/*  About Section  */}
    <section className="section about" id="about">
        <div className="container">
            <div className="about-grid">
                <div className="about-visual">
                    <div className="about-stats-grid">
                        <div className="about-stat-item">
                            <span className="stat-number" data-count="50">0</span><span className="stat-plus">+</span>
                            <span className="stat-label">Project Selesai</span>
                        </div>
                        <div className="about-stat-item">
                            <span className="stat-number" data-count="30">0</span><span className="stat-plus">+</span>
                            <span className="stat-label">Klien Puas</span>
                        </div>
                        <div className="about-stat-item">
                            <span className="stat-number" data-count="5">0</span><span className="stat-plus">+</span>
                            <span className="stat-label">Tahun Pengalaman</span>
                        </div>
                        <div className="about-stat-item">
                            <span className="stat-number" data-count="24">0</span><span className="stat-plus">/7</span>
                            <span className="stat-label">Support</span>
                        </div>
                    </div>
                </div>

                <div className="about-content">
                    <span className="section-tag blue">Tentang KalanaLabs</span>
                    <h2 className="section-title">Dedikasi untuk Kemajuan <br/>Digital Bisnis Anda</h2>
                    <p className="section-desc">
                        KalanaLabs lahir dari visi untuk memberikan akses teknologi tingkat tinggi bagi pelaku usaha di Indonesia. Kami percaya bahwa setiap bisnis, berhak memiliki kehadiran digital yang profesional dan berdampak.
                    </p>

                    <div className="about-features">
                        <div className="about-feature">
                            <div className="about-icon"><ion-icon name="rocket-outline"></ion-icon></div>
                            <div>
                                <h4>Misi Terfokus</h4>
                                <p>Memberdayakan UMKM melalui solusi teknologi yang tepat guna, modern, dan tentu saja terjangkau.</p>
                            </div>
                        </div>
                        <div className="about-feature">
                            <div className="about-icon"><ion-icon name="heart-outline"></ion-icon></div>
                            <div>
                                <h4>Proses Kolaboratif</h4>
                                <p>Kami bekerja bersama Anda sebagai tim, mendengarkan kebutuhan unik bisnis Anda untuk hasil yang maksimal.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>

    {/*  Pricing Section  */}
    <section className="section pricing" id="pricing">
        <div className="container">
            <div className="section-header center">
                <span className="section-tag blue">Harga</span>
                <h2 className="section-title">Investasi Terbaik untuk <br />Pertumbuhan Bisnis Anda</h2>
                <p className="section-subtitle">Pilih layanan sesuai kebutuhan bisnis Anda </p>
            </div>

            <div className="pricing-carousel-container">
                <div className="pricing-grid cols-3" id="pricingCarousel">
                    {/*  LANDING PAGE  */}
                    <div className="price-card" id="price-landing">
                        <div className="price-header">
                            <span className="price-tier">LANDING PAGE</span>
                            <div className="price-amount"><span className="currency">Rp</span><span className="amount">600RB</span></div>
                            <p>Cocok untuk promosi produk, event, atau jasa tunggal.</p>
                        </div>
                        <ul className="price-features">
                            <li className="included"><ion-icon name="checkmark-sharp"></ion-icon> 1 halaman desain modern</li>
                            <li className="included"><ion-icon name="checkmark-sharp"></ion-icon> Mobile responsive</li>
                            <li className="included"><ion-icon name="checkmark-sharp"></ion-icon> Tombol WhatsApp</li>
                            <li className="included"><ion-icon name="checkmark-sharp"></ion-icon> Domain .com + Hosting 1 tahun</li>
                            <li className="included"><ion-icon name="checkmark-sharp"></ion-icon> SEO dasar</li>
                            <li className="included"><ion-icon name="checkmark-sharp"></ion-icon> Revisi 3x</li>
                        </ul>
                        <div className="price-footer">
                            <p>Estimasi: 3–5 hari kerja</p>
                        </div>
                        <a href="https://wa.me/6285707736885" target="_blank" className="btn-outline price-btn">Pilih Paket</a>
                    </div>

                    {/*  COMPANY PROFILE  */}
                    <div className="price-card featured" id="price-company">
                        <div className="badge-popular">Paling laris</div>
                        <div className="price-header">
                            <span className="price-tier">COMPANY PROFILE</span>
                            <div className="price-amount"><span className="currency">Rp</span><span className="amount">2,5JT</span></div>
                            <p>Untuk bisnis yang ingin tampil profesional dan dipercaya klien.</p>
                        </div>
                        <ul className="price-features">
                            <li className="included"><ion-icon name="checkmark-sharp"></ion-icon> 5–7 halaman</li>
                            <li className="included"><ion-icon name="checkmark-sharp"></ion-icon> Desain custom branding</li>
                            <li className="included"><ion-icon name="checkmark-sharp"></ion-icon> Mobile responsive</li>
                            <li className="included"><ion-icon name="checkmark-sharp"></ion-icon> Domain + Hosting</li>
                            <li className="included"><ion-icon name="checkmark-sharp"></ion-icon> SEO dasar + Analytics</li>
                            <li className="included"><ion-icon name="checkmark-sharp"></ion-icon> Revisi 5x</li>
                        </ul>
                        <div className="price-footer">
                            <p>Estimasi: 7–10 hari kerja</p>
                        </div>
                        <a href="https://wa.me/6285707736885" target="_blank" className="btn-primary price-btn">Pilih Paket</a>
                    </div>

                    {/*  TOKO ONLINE  */}
                    <div className="price-card" id="price-shop">
                        <div className="price-header">
                            <span className="price-tier">TOKO ONLINE</span>
                            <div className="price-amount"><span className="currency">Rp</span><span className="amount">4JT</span></div>
                            <p>Untuk bisnis yang ingin jualan online dengan sistem sendiri.</p>
                        </div>
                        <ul className="price-features">
                            <li className="included"><ion-icon name="checkmark-sharp"></ion-icon> Katalog + Keranjang</li>
                            <li className="included"><ion-icon name="checkmark-sharp"></ion-icon> Order WA / Payment</li>
                            <li className="included"><ion-icon name="checkmark-sharp"></ion-icon> Admin Dashboard</li>
                            <li className="included"><ion-icon name="checkmark-sharp"></ion-icon> Mobile responsive</li>
                            <li className="included"><ion-icon name="checkmark-sharp"></ion-icon> Domain + Hosting</li>
                            <li className="included"><ion-icon name="checkmark-sharp"></ion-icon> Support 1 bulan</li>
                        </ul>
                        <div className="price-footer">
                            <p>Estimasi: 10–14 hari kerja</p>
                        </div>
                        <a href="https://wa.me/6285707736885" target="_blank" className="btn-outline price-btn">Pilih Paket</a>
                    </div>
                </div>
                <div className="pricing-nav">
                    <button className="pricing-nav-btn prev" id="pricingPrev"><ion-icon name="chevron-back-outline"></ion-icon></button>
                    <button className="pricing-nav-btn next" id="pricingNext"><ion-icon name="chevron-forward-outline"></ion-icon></button>
                </div>
            </div>
        </div>
    </section>

    {/*  FAQ Section  */}
    <section className="section faq" id="faq">
        <div className="container">
            <div className="section-header center">
                <span className="section-tag blue">FAQ</span>
                <h2 className="section-title">Pertanyaan yang Sering <br />Diajukan</h2>
                <p className="section-subtitle">Semua yang perlu Anda ketahui tentang layanan kami.</p>
            </div>
            <div className="faq-grid">
                <div className="faq-item">
                    <div className="faq-question">
                        <h3>Berapa lama proses pembuatan website?</h3>
                        <ion-icon name="add-outline"></ion-icon>
                    </div>
                    <div className="faq-answer">
                        <p>Waktu pengerjaan bervariasi. Landing page biasanya 3-5 hari kerja, sedangkan Company Profile memerlukan waktu 7-10 hari kerja.</p>
                    </div>
                </div>
                <div className="faq-item">
                    <div className="faq-question">
                        <h3>Apakah website responsif saat dibuka di HP?</h3>
                        <ion-icon name="add-outline"></ion-icon>
                    </div>
                    <div className="faq-answer">
                        <p>Tentu saja. Semua website buatan KalanaLabs menggunakan prinsip Mobile-First Design untuk tampilan sempurna di semua perangkat.</p>
                    </div>
                </div>
                <div className="faq-item">
                    <div className="faq-question">
                        <h3>Apakah biaya sudah termasuk Domain & Hosting?</h3>
                        <ion-icon name="add-outline"></ion-icon>
                    </div>
                    <div className="faq-answer">
                        <p>Ya, semua paket harga kami sudah termasuk biaya Domain (.com) dan Hosting selama 1 tahun pertama.</p>
                    </div>
                </div>
                <div className="faq-item">
                    <div className="faq-question">
                        <h3>Apakah website yang dibuat sudah SEO-friendly?</h3>
                        <ion-icon name="add-outline"></ion-icon>
                    </div>
                    <div className="faq-answer">
                        <p>Ya, kami menerapkan teknik On-Page SEO dasar agar website Anda lebih mudah ditemukan di hasil pencarian Google.</p>
                    </div>
                </div>
            </div>
        </div>
    </section>

    {/*  Articles Section  */}
    <section className="section articles" id="articles">
        <div className="container">
            <div className="articles-top">
                <div>
                    <span className="section-tag blue">Artikel</span>
                    <h2 className="section-title">Insights & Tips <br />untuk Bisnis Digital</h2>
                </div>
            </div>
            <div className="articles-grid">
                <article className="article-card" id="article-1">
                    <div className="article-thumb">
                        <div className="article-thumb-visual t1"><ion-icon name="globe-outline"></ion-icon></div>
                        <span className="article-category">Bisnis Digital</span>
                    </div>
                    <div className="article-body">
                        <div className="article-meta"><span>10 Mar 2026</span></div>
                        <h3>Kenapa Bisnis Anda Wajib Punya Website di 2026</h3>
                        <p>Di era digital, website bukan lagi pilihan tapi kebutuhan. Pelajari alasannya di sini.</p>
                        <Link to="/artikel/kenapa-bisnis-wajib-punya-website" className="article-link">Baca Selengkapnya →</Link>
                    </div>
                </article>
                <article className="article-card" id="article-2">
                    <div className="article-thumb">
                        <div className="article-thumb-visual t2"><ion-icon name="search-outline"></ion-icon></div>
                        <span className="article-category">SEO</span>
                    </div>
                    <div className="article-body">
                        <div className="article-meta"><span>05 Mar 2026</span></div>
                        <h3>Tips Optimasi SEO Website Bisnis Lokal</h3>
                        <p>Bagi UMKM, SEO lokal adalah kunci agar ditemukan pelanggan sekitar. Simpan tips ampuhnya.</p>
                        <Link to="/artikel/tips-seo-website-bisnis" className="article-link">Baca Selengkapnya →</Link>
                    </div>
                </article>
                <article className="article-card" id="article-3">
                    <div className="article-thumb">
                        <div className="article-thumb-visual t3"><ion-icon name="shield-checkmark-outline"></ion-icon></div>
                        <span className="article-category">Web Tech</span>
                    </div>
                    <div className="article-body">
                        <div className="article-meta"><span>01 Mar 2026</span></div>
                        <h3>Website Profesional: Kunci Kepercayaan Pelanggan</h3>
                        <p>Bagaimana desain yang rapi dan performa cepat bisa meningkatkan konversi jualan Anda.</p>
                        <Link to="/artikel/website-profesional-kepercayaan-pelanggan" className="article-link">Baca Selengkapnya →</Link>
                    </div>
                </article>
            </div>
        </div>
    </section>

    {/*  CTA Section  */}
    <section className="section cta" id="contact">
        <div className="container">
            <div className="cta-content">
                <h2>Siap Membawa Bisnis Anda <br />ke Level Selanjutnya?</h2>
                <p>Konsultasikan kebutuhan digital Anda secara gratis. Kami carikan solusi terbaik sesuai budget Anda.</p>
                <div className="cta-actions">
                    <a href="https://wa.me/6285707736885" className="btn-white btn-lg" id="ctaWhatsapp" target="_blank">
                        <ion-icon name="logo-whatsapp"></ion-icon>
                        Chat via WhatsApp
                    </a>
                </div>
            </div>
        </div>
    </section>

    {/*  Footer  */}
    <footer className="footer">
        <div className="container">
            <div className="footer-grid">
                <div className="footer-brand">
                    <Link to="/" className="nav-logo footer-logo">
                        <img src="logo.png" alt="KalanaLabs Logo" className="logo-img" />
                        KalanaLabs
                    </Link>
                    <p>Partner digital terpercaya untuk membantu bisnis Anda tumbuh dan berkembang di era digital.</p>
                </div>
                <div className="footer-col">
                    <h4>Navigasi</h4>
                    <ul>
                        <li><a href="/#hero">Home</a></li>
                        <li><a href="/#services">Layanan</a></li>
                        <li><a href="/#portfolio">Portofolio</a></li>
                        <li><a href="/#pricing">Harga</a></li>
                        <li><a href="/#faq">FAQ</a></li>
                    </ul>
                </div>
                <div className="footer-col">
                    <h4>Kontak</h4>
                    <ul>
                        <li><a href="mailto:kalanalabs@gmail.com">kalanalabs@gmail.com</a></li>
                        <li><a href="https://wa.me/6285707736885">+62 857-0773-6885</a></li>
                    </ul>
                </div>
            </div>
            <div className="footer-bottom">
                <p>&copy; 2026 KalanaLabs. All Rights Reserved.</p>
            </div>
        </div>
    </footer>
    </>
  );
}
