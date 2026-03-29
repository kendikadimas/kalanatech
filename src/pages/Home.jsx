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

    {/*  ════════════════════════════════
         HERO SECTION
         ════════════════════════════════  */}
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
            <div className="hero-visual">
                <div className="hero-carousel-wrapper">
                    <div className="hero-carousel" id="heroCarousel">
                        {/*  Project 1  */}
                        <div className="carousel-item active">
                            <img src="dapoerniknik.png" alt="Dapoer Niknik Project" className="carousel-project-img" />
                            <div className="carousel-badge"><ion-icon name="restaurant-outline"></ion-icon> F&B Website</div>
                        </div>
                        {/*  Project 2  */}
                        <div className="carousel-item">
                            <img src="rentcar.png" alt="Rent Car Website" className="carousel-project-img" />
                            <div className="carousel-badge"><ion-icon name="car-outline"></ion-icon> Rental Platform</div>
                        </div>
                        {/*  Project 3  */}
                        <div className="carousel-item">
                            <img src="Anggana.png" alt="Anggana Project" className="carousel-project-img" />
                            <div className="carousel-badge"><ion-icon name="color-palette-outline"></ion-icon> Creative Agency</div>
                        </div>
                    </div>
                    
                    <button className="carousel-nav-btn prev" id="heroCarouselPrev" type="button"><ion-icon name="chevron-back-outline"></ion-icon></button>
                    <button className="carousel-nav-btn next" id="heroCarouselNext" type="button"><ion-icon name="chevron-forward-outline"></ion-icon></button>

                    {/*  Floating stats  */}
                    <div className="hero-float-card float-card-1">
                        <div className="float-icon">
                            <ion-icon name="diamond-outline"></ion-icon>
                        </div>
                        <div className="float-info">
                            <strong>Desain Premium</strong>
                            <span>Kredibilitas Bisnis Naik</span>
                        </div>
                    </div>
                    <div className="hero-float-card float-card-2">
                        <div className="float-icon green">
                            <ion-icon name="phone-portrait-outline"></ion-icon>
                        </div>
                        <div className="float-info">
                            <strong>Mobile Friendly</strong>
                            <span>Nyaman di Semua HP</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>

    {/*  ════════════════════════════════
         SERVICES SECTION (Blue BG)
         ════════════════════════════════  */}
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
                    <ul className="service-points">
                        <li>Landing Page</li>
                        <li>Company Profile</li>
                        <li>Website Bisnis</li>
                    </ul>
                </div>
                <div className="service-card" id="svc-app">
                    <div className="service-icon">
                        <ion-icon name="layers-outline"></ion-icon>
                    </div>
                    <h3>Jasa Pembuatan Website UMKM</h3>
                    <p>Sistem custom yang mengautomasi proses bisnis Anda. Dashboard, CRM, inventory management, dan solusi digital lainnya.</p>
                    <ul className="service-points">
                        <li>Dashboard Admin</li>
                        <li>Sistem Manajemen</li>
                        <li>E-Commerce</li>
                    </ul>
                </div>
                <div className="service-card" id="svc-mobile">
                    <div className="service-icon">
                        <ion-icon name="phone-portrait-outline"></ion-icon>
                    </div>
                    <h3>Aplikasi Mobile</h3>
                    <p>Aplikasi mobile untuk Android & iOS yang membantu bisnis Anda hadir langsung di tangan pelanggan.</p>
                    <ul className="service-points">
                        <li>Android & iOS</li>
                        <li>UI/UX Design</li>
                        <li>Push Notification</li>
                    </ul>
                </div>
                <div className="service-card" id="svc-maintain">
                    <div className="service-icon">
                        <ion-icon name="construct-outline"></ion-icon>
                    </div>
                    <h3>Maintenance & Support</h3>
                    <p>Layanan maintenance rutin agar website dan sistem Anda selalu berjalan optimal, aman, dan up-to-date.</p>
                    <ul className="service-points">
                        <li>Bug Fixing</li>
                        <li>Update Berkala</li>
                        <li>Monitoring</li>
                    </ul>
                </div>
            </div>
        </div>
    </section>

    {/*  ════════════════════════════════
         PORTFOLIO SECTION (Blue BG)
         ════════════════════════════════  */}
    <section className="section portfolio" id="portfolio">
        <div className="container">
            <div className="section-header center">
                <span className="section-tag">Portofolio</span>
                <h2 className="section-title white">Project yang Telah Kami Kerjakan</h2>
                <p className="section-subtitle white">Beberapa hasil karya terbaik kami untuk berbagai jenis bisnis.</p>
            </div>
            <div className="portfolio-grid">
                {/*  Dapoer Niknik Project  */}
                <div className="portfolio-card large" id="port-dapoerniknik">
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
                <div className="portfolio-card wide" id="port-rentcar">
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
                    <div className="portfolio-img-container">
                        <img src="rentcar.png" alt="Rent Car Landing Page" className="portfolio-real-img" />
                    </div>
                </div>

                {/*  Anggana Project  */}
                <div className="portfolio-card large" id="port-anggana">
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

    {/*  ════════════════════════════════
         PRICING SECTION (Tabbed)
         ════════════════════════════════  */}
    <section className="section pricing" id="pricing">
        <div className="container">
            <div className="section-header center">
                <span className="section-tag blue">Harga</span>
                <h2 className="section-title">Investasi Terbaik untuk <br />Pertumbuhan Bisnis Anda</h2>
                <p className="section-subtitle">Pilih layanan sesuai kebutuhan bisnis Anda </p>
            </div>

            {/*  Tabs Navigation  */}
            <div className="pricing-tabs" id="pricingTabs">
                <button className="tab-btn active" data-tab="tab-landing">
                    <ion-icon name="document-outline"></ion-icon>
                    Landing Page
                </button>
                <button className="tab-btn" data-tab="tab-company">
                    <ion-icon name="business-outline"></ion-icon>
                    Company Profile
                </button>
                <button className="tab-btn" data-tab="tab-webapp">
                    <ion-icon name="layers-outline"></ion-icon>
                    Web Application
                </button>
                <button className="tab-btn" data-tab="tab-ecommerce">
                    <ion-icon name="cart-outline"></ion-icon>
                    E-Commerce
                </button>
                <button className="tab-btn" data-tab="tab-mobile">
                    <ion-icon name="phone-portrait-outline"></ion-icon>
                    Mobile App
                </button>
                <button className="tab-btn" data-tab="tab-maintenance">
                    <ion-icon name="construct-outline"></ion-icon>
                    Maintenance
                </button>
            </div>

            {/*  Tab Contents  */}
            <div className="pricing-tab-content">
                {/*  ─── Landing Page ───  */}
                <div className="tab-panel active" id="tab-landing">
                    <div className="pricing-grid cols-3">
                        <div className="price-card">
                            <div className="price-header">
                                <span className="price-tier">Basic</span>
                                <div className="price-amount"><span className="currency">Rp</span><span className="amount">650K</span></div>
                                <p>Landing page sederhana untuk promosi produk atau event.</p>
                            </div>
                            <ul className="price-features">
                                <li className="included"><ion-icon name="checkmark-circle"></ion-icon> Single Page Design</li>
                                <li className="included"><ion-icon name="checkmark-circle"></ion-icon> Mobile Responsive</li>
                                <li className="included"><ion-icon name="checkmark-circle"></ion-icon> WhatsApp Button</li>
                                <li className="included"><ion-icon name="checkmark-circle"></ion-icon> Hosting 1 Tahun</li>
                                <li className="included"><ion-icon name="checkmark-circle"></ion-icon> Revisi 2x</li>
                                <li className="excluded"><ion-icon name="close-circle"></ion-icon> Custom Domain .com</li>
                                <li className="excluded"><ion-icon name="close-circle"></ion-icon> SEO Setup</li>
                            </ul>
                            <a href="https://wa.me/6285707736885?text=Halo%20Kalana%20Labs%2C%20saya%20minat%20paket%20Landing%20Page%20Basic%2C%20ingin%20konsultasi%20terlebih%20dahulu." target="_blank" className="btn-outline price-btn">Pilih Paket</a>
                        </div>
                        <div className="price-card featured">
                            <div className="badge-popular">Best Seller</div>
                            <div className="price-header">
                                <span className="price-tier">Business</span>
                                <div className="price-amount"><span className="currency">Rp</span><span className="amount">1.3JT</span></div>
                                <p>Pilihan tepat untuk UMKM yang ingin tampil profesional.</p>
                            </div>
                            <ul className="price-features">
                                <li className="included"><ion-icon name="checkmark-circle"></ion-icon> Modern Landing Page</li>
                                <li className="included"><ion-icon name="checkmark-circle"></ion-icon> Full Responsive</li>
                                <li className="included"><ion-icon name="checkmark-circle"></ion-icon> Domain .com + Hosting</li>
                                <li className="included"><ion-icon name="checkmark-circle"></ion-icon> SEO Basic Setup</li>
                                <li className="included"><ion-icon name="checkmark-circle"></ion-icon> Social Media Integration</li>
                                <li className="included"><ion-icon name="checkmark-circle"></ion-icon> Google Analytics</li>
                                <li className="included"><ion-icon name="checkmark-circle"></ion-icon> Revisi 3x</li>
                            </ul>
                            <a href="https://wa.me/6285707736885?text=Halo%20Kalana%20Labs%2C%20saya%20minat%20paket%20Landing%20Page%20Business%2C%20ingin%20konsultasi%20terlebih%20dahulu." target="_blank" className="btn-primary price-btn">Pilih Paket</a>
                        </div>
                        <div className="price-card">
                            <div className="price-header">
                                <span className="price-tier">Premium</span>
                                <div className="price-amount"><span className="currency">Rp</span><span className="amount">2.5JT</span></div>
                                <p>Untuk bisnis yang mengutamakan branding premium & performa.</p>
                            </div>
                            <ul className="price-features">
                                <li className="included"><ion-icon name="checkmark-circle"></ion-icon> Premium Custom Design</li>
                                <li className="included"><ion-icon name="checkmark-circle"></ion-icon> Animasi & Interaktif</li>
                                <li className="included"><ion-icon name="checkmark-circle"></ion-icon> Domain + Hosting Premium</li>
                                <li className="included"><ion-icon name="checkmark-circle"></ion-icon> SEO Advanced</li>
                                <li className="included"><ion-icon name="checkmark-circle"></ion-icon> Copywriting Assistance</li>
                                <li className="included"><ion-icon name="checkmark-circle"></ion-icon> Priority Support</li>
                                <li className="included"><ion-icon name="checkmark-circle"></ion-icon> Revisi 6x</li>
                            </ul>
                            <a href="https://wa.me/6285707736885?text=Halo%20Kalana%20Labs%2C%20saya%20minat%20paket%20Landing%20Page%20Premium%2C%20ingin%20konsultasi%20terlebih%20dahulu." target="_blank" className="btn-outline price-btn">Pilih Paket</a>
                        </div>
                    </div>
                </div>

                {/*  ─── Company Profile ───  */}
                <div className="tab-panel" id="tab-company">
                    <div className="pricing-grid cols-3">
                        <div className="price-card">
                            <div className="price-header">
                                <span className="price-tier">Starter</span>
                                <div className="price-amount"><span className="currency">Rp</span><span className="amount">2.5JT</span></div>
                                <p>Company profile 3–5 halaman untuk bisnis yang baru go digital.</p>
                            </div>
                            <ul className="price-features">
                                <li className="included"><ion-icon name="checkmark-circle"></ion-icon> 3-5 Halaman</li>
                                <li className="included"><ion-icon name="checkmark-circle"></ion-icon> Desain Modern</li>
                                <li className="included"><ion-icon name="checkmark-circle"></ion-icon> Mobile Responsive</li>
                                <li className="included"><ion-icon name="checkmark-circle"></ion-icon> Domain + Hosting 1 Thn</li>
                                <li className="included"><ion-icon name="checkmark-circle"></ion-icon> Email Bisnis 1 Akun</li>
                                <li className="included"><ion-icon name="checkmark-circle"></ion-icon> SEO Basic</li>
                                <li className="included"><ion-icon name="checkmark-circle"></ion-icon> Revisi 3x</li>
                            </ul>
                            <a href="https://wa.me/6285707736885?text=Halo%20Kalana%20Labs%2C%20saya%20minat%20paket%20Company%20Profile%20Starter%2C%20ingin%20konsultasi%20terlebih%20dahulu." target="_blank" className="btn-outline price-btn">Pilih Paket</a>
                        </div>
                        <div className="price-card featured">
                            <div className="badge-popular">Rekomendasi</div>
                            <div className="price-header">
                                <span className="price-tier">Professional</span>
                                <div className="price-amount"><span className="currency">Rp</span><span className="amount">4JT</span></div>
                                <p>Website perusahaan lengkap dengan CMS dan fitur dinamis.</p>
                            </div>
                            <ul className="price-features">
                                <li className="included"><ion-icon name="checkmark-circle"></ion-icon> 7-10 Halaman</li>
                                <li className="included"><ion-icon name="checkmark-circle"></ion-icon> CMS (Content Management)</li>
                                <li className="included"><ion-icon name="checkmark-circle"></ion-icon> Blog / Berita</li>
                                <li className="included"><ion-icon name="checkmark-circle"></ion-icon> Email Bisnis 5 Akun</li>
                                <li className="included"><ion-icon name="checkmark-circle"></ion-icon> SEO Optimization</li>
                                <li className="included"><ion-icon name="checkmark-circle"></ion-icon> Google Analytics</li>
                                <li className="included"><ion-icon name="checkmark-circle"></ion-icon> Revisi 5x</li>
                            </ul>
                            <a href="https://wa.me/6285707736885?text=Halo%20Kalana%20Labs%2C%20saya%20minat%20paket%20Company%20Profile%20Professional%2C%20ingin%20konsultasi%20terlebih%20dahulu." target="_blank" className="btn-primary price-btn">Pilih Paket</a>
                        </div>
                        <div className="price-card">
                            <div className="price-header">
                                <span className="price-tier">Enterprise</span>
                                <div className="price-amount"><span className="currency">Rp</span><span className="amount">7JT+</span></div>
                                <p>Solusi premium untuk perusahaan besar dengan kebutuhan khusus.</p>
                            </div>
                            <ul className="price-features">
                                <li className="included"><ion-icon name="checkmark-circle"></ion-icon> Up to 20 Halaman</li>
                                <li className="included"><ion-icon name="checkmark-circle"></ion-icon> Custom CMS & Admin</li>
                                <li className="included"><ion-icon name="checkmark-circle"></ion-icon> Multi-Language</li>
                                <li className="included"><ion-icon name="checkmark-circle"></ion-icon> Career Portal</li>
                                <li className="included"><ion-icon name="checkmark-circle"></ion-icon> Advanced Security</li>
                                <li className="included"><ion-icon name="checkmark-circle"></ion-icon> Priority Support 6 Bln</li>
                                <li className="included"><ion-icon name="checkmark-circle"></ion-icon> Revisi 6x</li>
                            </ul>
                            <a href="https://wa.me/6285707736885?text=Halo%20Kalana%20Labs%2C%20saya%20minat%20paket%20Company%20Profile%20Enterprise%2C%20ingin%20konsultasi%20terlebih%20dahulu." target="_blank" className="btn-outline price-btn">Konsultasi Dulu</a>
                        </div>
                    </div>
                </div>

                {/*  ─── Web Application ───  */}
                <div className="tab-panel" id="tab-webapp">
                    <div className="pricing-grid cols-2">
                        <div className="price-card">
                            <div className="price-header">
                                <span className="price-tier">Standard System</span>
                                <div className="price-amount"><span className="currency">Rp</span><span className="amount">5JT+</span></div>
                                <p>Sistem web sederhana dengan fitur CRUD, dashboard, dan laporan.</p>
                            </div>
                            <ul className="price-features">
                                <li className="included"><ion-icon name="checkmark-circle"></ion-icon> Dashboard Admin</li>
                                <li className="included"><ion-icon name="checkmark-circle"></ion-icon> CRUD Management</li>
                                <li className="included"><ion-icon name="checkmark-circle"></ion-icon> User Authentication</li>
                                <li className="included"><ion-icon name="checkmark-circle"></ion-icon> Laporan & Export</li>
                                <li className="included"><ion-icon name="checkmark-circle"></ion-icon> Responsive Design</li>
                                <li className="included"><ion-icon name="checkmark-circle"></ion-icon> Hosting & Domain</li>
                                <li className="included"><ion-icon name="checkmark-circle"></ion-icon> Support 3 Bulan</li>
                            </ul>
                            <a href="https://wa.me/6285707736885?text=Halo%20Kalana%20Labs%2C%20saya%20minat%20paket%20Standard%20Web%20System%2C%20ingin%20konsultasi%20terlebih%20dahulu." target="_blank" className="btn-outline price-btn">Konsultasi Dulu</a>
                        </div>
                        <div className="price-card featured">
                            <div className="badge-popular">Custom</div>
                            <div className="price-header">
                                <span className="price-tier">Advanced System</span>
                                <div className="price-amount"><span className="currency">Rp</span><span className="amount">10JT+</span></div>
                                <p>Sistem kompleks dengan integrasi API, role management, dan fitur advanced.</p>
                            </div>
                            <ul className="price-features">
                                <li className="included"><ion-icon name="checkmark-circle"></ion-icon> Semua Fitur Standard</li>
                                <li className="included"><ion-icon name="checkmark-circle"></ion-icon> Multi-Role & Permission (Admin, Manajer, Staf)</li>
                                <li className="included"><ion-icon name="checkmark-circle"></ion-icon> REST API Integration</li>
                                <li className="included"><ion-icon name="checkmark-circle"></ion-icon> Notification System</li>
                                <li className="included"><ion-icon name="checkmark-circle"></ion-icon> Advanced Reporting</li>
                                <li className="included"><ion-icon name="checkmark-circle"></ion-icon> Source Code Ownership</li>
                                <li className="included"><ion-icon name="checkmark-circle"></ion-icon> Support 6 Bulan</li>
                            </ul>
                            <a href="https://wa.me/6285707736885?text=Halo%20Kalana%20Labs%2C%20saya%20minat%20paket%20Advanced%20Web%20System%2C%20ingin%20konsultasi%20terlebih%20dahulu." target="_blank" className="btn-primary price-btn">Konsultasi Dulu</a>
                        </div>
                    </div>
                </div>

                {/*  ─── E-Commerce ───  */}
                <div className="tab-panel" id="tab-ecommerce">
                    <div className="pricing-grid cols-2">
                        <div className="price-card">
                            <div className="price-header">
                                <span className="price-tier">Starter Store</span>
                                <div className="price-amount"><span className="currency">Rp</span><span className="amount">3.5JT</span></div>
                                <p>Toko online sederhana untuk mulai berjualan di internet.</p>
                            </div>
                            <ul className="price-features">
                                <li className="included"><ion-icon name="checkmark-circle"></ion-icon> Katalog Produk</li>
                                <li className="included"><ion-icon name="checkmark-circle"></ion-icon> Keranjang Belanja</li>
                                <li className="included"><ion-icon name="checkmark-circle"></ion-icon> WhatsApp Order</li>
                                <li className="included"><ion-icon name="checkmark-circle"></ion-icon> Admin Panel</li>
                                <li className="included"><ion-icon name="checkmark-circle"></ion-icon> Mobile Responsive</li>
                                <li className="included"><ion-icon name="checkmark-circle"></ion-icon> Domain + Hosting</li>
                                <li className="excluded"><ion-icon name="close-circle"></ion-icon> Payment Gateway</li>
                            </ul>
                            <a href="https://wa.me/6285707736885?text=Halo%20Kalana%20Labs%2C%20saya%20minat%20paket%20E-Commerce%20Starter%2C%20ingin%20konsultasi%20terlebih%20dahulu." target="_blank" className="btn-outline price-btn">Pilih Paket</a>
                        </div>
                        <div className="price-card featured">
                            <div className="badge-popular">Rekomendasi</div>
                            <div className="price-header">
                                <span className="price-tier">Full Commerce</span>
                                <div className="price-amount"><span className="currency">Rp</span><span className="amount">8.5JT+</span></div>
                                <p>Platform e-commerce lengkap dengan pembayaran otomatis dan tracking.</p>
                            </div>
                            <ul className="price-features">
                                <li className="included"><ion-icon name="checkmark-circle"></ion-icon> Semua Fitur Starter</li>
                                <li className="included"><ion-icon name="checkmark-circle"></ion-icon> Payment Gateway (Midtrans)</li>
                                <li className="included"><ion-icon name="checkmark-circle"></ion-icon> Tracking Pengiriman</li>
                                <li className="included"><ion-icon name="checkmark-circle"></ion-icon> Kupon & Diskon</li>
                                <li className="included"><ion-icon name="checkmark-circle"></ion-icon> Dashboard Penjualan</li>
                                <li className="included"><ion-icon name="checkmark-circle"></ion-icon> Multi-Kurir (JNE, etc)</li>
                                <li className="included"><ion-icon name="checkmark-circle"></ion-icon> Support 6 Bulan</li>
                            </ul>
                            <a href="https://wa.me/6285707736885?text=Halo%20Kalana%20Labs%2C%20saya%20minat%20paket%20Full%20E-Commerce%2C%20ingin%20konsultasi%20terlebih%20dahulu." target="_blank" className="btn-primary price-btn">Konsultasi Dulu</a>
                        </div>
                    </div>
                </div>

                {/*  ─── Mobile App ───  */}
                <div className="tab-panel" id="tab-mobile">
                    <div className="pricing-grid cols-2">
                        <div className="price-card">
                            <div className="price-header">
                                <span className="price-tier">Basic App</span>
                                <div className="price-amount"><span className="currency">Rp</span><span className="amount">8JT+</span></div>
                                <p>Aplikasi mobile sederhana dengan fitur dasar dan desain clean.</p>
                            </div>
                            <ul className="price-features">
                                <li className="included"><ion-icon name="checkmark-circle"></ion-icon> Android & iOS</li>
                                <li className="included"><ion-icon name="checkmark-circle"></ion-icon> UI/UX Design</li>
                                <li className="included"><ion-icon name="checkmark-circle"></ion-icon> 5-8 Screen</li>
                                <li className="included"><ion-icon name="checkmark-circle"></ion-icon> API Integration</li>
                                <li className="included"><ion-icon name="checkmark-circle"></ion-icon> Push Notification</li>
                                <li className="included"><ion-icon name="checkmark-circle"></ion-icon> Play Store Deploy</li>
                                <li className="included"><ion-icon name="checkmark-circle"></ion-icon> Support 3 Bulan</li>
                            </ul>
                            <a href="https://wa.me/6285707736885?text=Halo%20Kalana%20Labs%2C%20saya%20minat%20paket%20Mobile%20App%20Basic%2C%20ingin%20konsultasi%20terlebih%20dahulu." target="_blank" className="btn-outline price-btn">Konsultasi Dulu</a>
                        </div>
                        <div className="price-card featured">
                            <div className="badge-popular">Custom</div>
                            <div className="price-header">
                                <span className="price-tier">Advanced App</span>
                                <div className="price-amount"><span className="currency">Rp</span><span className="amount">15JT+</span></div>
                                <p>Aplikasi mobile kompleks dengan fitur lengkap dan backend custom.</p>
                            </div>
                            <ul className="price-features">
                                <li className="included"><ion-icon name="checkmark-circle"></ion-icon> Semua Fitur Basic</li>
                                <li className="included"><ion-icon name="checkmark-circle"></ion-icon> Custom Backend</li>
                                <li className="included"><ion-icon name="checkmark-circle"></ion-icon> Unlimited Screen</li>
                                <li className="included"><ion-icon name="checkmark-circle"></ion-icon> Real-time Features</li>
                                <li className="included"><ion-icon name="checkmark-circle"></ion-icon> Analytics Dashboard</li>
                                <li className="included"><ion-icon name="checkmark-circle"></ion-icon> Source Code Ownership</li>
                                <li className="included"><ion-icon name="checkmark-circle"></ion-icon> Support 6 Bulan</li>
                            </ul>
                            <a href="https://wa.me/6285707736885?text=Halo%20Kalana%20Labs%2C%20saya%20minat%20paket%20Mobile%20App%20Advanced%2C%20ingin%20konsultasi%20terlebih%20dahulu." target="_blank" className="btn-primary price-btn">Konsultasi Dulu</a>
                        </div>
                    </div>
                </div>

                {/*  ─── Maintenance ───  */}
                <div className="tab-panel" id="tab-maintenance">
                    <div className="pricing-grid cols-3">
                        <div className="price-card">
                            <div className="price-header">
                                <span className="price-tier">Basic Care</span>
                                <div className="price-amount"><span className="currency">Rp</span><span className="amount">200K</span><span className="price-period">/bulan</span></div>
                                <p>Maintenance ringan untuk website statis dan landing page.</p>
                            </div>
                            <ul className="price-features">
                                <li className="included"><ion-icon name="checkmark-circle"></ion-icon> Backup Mingguan</li>
                                <li className="included"><ion-icon name="checkmark-circle"></ion-icon> Security Update</li>
                                <li className="included"><ion-icon name="checkmark-circle"></ion-icon> Minor Bug Fix</li>
                                <li className="included"><ion-icon name="checkmark-circle"></ion-icon> Uptime Monitoring</li>
                                <li className="included"><ion-icon name="checkmark-circle"></ion-icon> Email Support</li>
                                <li className="excluded"><ion-icon name="close-circle"></ion-icon> Content Update</li>
                                <li className="excluded"><ion-icon name="close-circle"></ion-icon> Feature Addition</li>
                            </ul>
                            <a href="https://wa.me/6285707736885?text=Halo%20Kalana%20Labs%2C%20saya%20minat%20paket%20Maintenance%20Basic%2C%20ingin%20konsultasi%20terlebih%20dahulu." target="_blank" className="btn-outline price-btn">Pilih Paket</a>
                        </div>
                        <div className="price-card featured">
                            <div className="badge-popular">Populer</div>
                            <div className="price-header">
                                <span className="price-tier">Pro Care</span>
                                <div className="price-amount"><span className="currency">Rp</span><span className="amount">500K</span><span className="price-period">/bulan</span></div>
                                <p>Maintenance lengkap termasuk update konten dan minor feature.</p>
                            </div>
                            <ul className="price-features">
                                <li className="included"><ion-icon name="checkmark-circle"></ion-icon> Semua Fitur Basic</li>
                                <li className="included"><ion-icon name="checkmark-circle"></ion-icon> Backup Harian</li>
                                <li className="included"><ion-icon name="checkmark-circle"></ion-icon> Content Update (4x/bln)</li>
                                <li className="included"><ion-icon name="checkmark-circle"></ion-icon> Speed Optimization</li>
                                <li className="included"><ion-icon name="checkmark-circle"></ion-icon> SEO Monitoring</li>
                                <li className="included"><ion-icon name="checkmark-circle"></ion-icon> WhatsApp Support</li>
                                <li className="included"><ion-icon name="checkmark-circle"></ion-icon> Monthly Report</li>
                            </ul>
                            <a href="https://wa.me/6285707736885?text=Halo%20Kalana%20Labs%2C%20saya%20minat%20paket%20Maintenance%20Pro%2C%20ingin%20konsultasi%20terlebih%20dahulu." target="_blank" className="btn-primary price-btn">Pilih Paket</a>
                        </div>
                        <div className="price-card">
                            <div className="price-header">
                                <span className="price-tier">Enterprise Care</span>
                                <div className="price-amount"><span className="currency">Rp</span><span className="amount">1JT+</span><span className="price-period">/bulan</span></div>
                                <p>Dedicated support untuk sistem yang membutuhkan perhatian ekstra.</p>
                            </div>
                            <ul className="price-features">
                                <li className="included"><ion-icon name="checkmark-circle"></ion-icon> Semua Fitur Pro</li>
                                <li className="included"><ion-icon name="checkmark-circle"></ion-icon> Feature Development</li>
                                <li className="included"><ion-icon name="checkmark-circle"></ion-icon> Priority Bug Fix</li>
                                <li className="included"><ion-icon name="checkmark-circle"></ion-icon> Performance Audit</li>
                                <li className="included"><ion-icon name="checkmark-circle"></ion-icon> Dedicated Support</li>
                                <li className="included"><ion-icon name="checkmark-circle"></ion-icon> Server Management</li>
                                <li className="included"><ion-icon name="checkmark-circle"></ion-icon> SLA Guarantee</li>
                            </ul>
                            <a href="https://wa.me/6285707736885?text=Halo%20Kalana%20Labs%2C%20saya%20minat%20paket%20Maintenance%20Enterprise%2C%20ingin%20konsultasi%20terlebih%20dahulu." target="_blank" className="btn-outline price-btn">Konsultasi Dulu</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>

    {/*  ════════════════════════════════
         ABOUT SECTION (Tentang Kami)
         ════════════════════════════════  */}
    <section className="section about" id="about">
        <div className="container">
            <div className="about-grid">
                {/* Visual Area */}
                <div className="about-visual">
                    <div className="about-image-wrapper">
                        <img 
                            src="logo.png" 
                            alt="KalanaLabs Team Collaboration" 
                            className="about-main-img" 
                        />
                        {/* <div className="about-deco-square"></div>
                        
                        {/* Experience Badge 
                        <div className="about-experience-badge">
                            <strong>Trusted</strong>
                        </div> */}

                        {/* Floating Success Card */}
                        {/* <div className="about-floating-card">
                            <div className="about-float-num">150+</div>
                            <div className="about-float-text">Project<br/>Selesai</div>
                        </div> */}
                    </div>
                </div>

                {/* Content Area */}
                <div className="about-content">
                    <span className="section-tag blue">Tentang KalanaLabs</span>
                    <h2 className="section-title">Dedikasi untuk Kemajuan <br/>Digital Lokal</h2>
                    <p className="section-desc">
                        KalanaLabs lahir dari visi untuk memberikan akses teknologi tingkat tinggi bagi pelaku usaha di Indonesia. Kami percaya bahwa setiap bisnis, berhak memiliki kehadiran digital yang profesional.
                    </p>

                    <div className="about-features">
                        <div className="about-feature">
                            <div className="about-icon">
                                <ion-icon name="rocket-outline"></ion-icon>
                            </div>
                            <div>
                                <h4>Misi Terfokus</h4>
                                <p>Memberdayakan UMKM melalui solusi teknologi yang tepat guna, modern, dan tentu saja terjangkau.</p>
                            </div>
                        </div>
                        {/* <div className="about-feature">
                            <div className="about-icon">
                                <ion-icon name="eye-outline"></ion-icon>
                            </div>
                            {/* <div>
                                <h4>Visi Inovatif</h4>
                                <p>Menjadi partner digital yang membantu bisnis bertransformasi secara digital.</p>
                            </div>
                        </div> */}
                        <div className="about-feature">
                            <div className="about-icon">
                                <ion-icon name="heart-outline"></ion-icon>
                            </div>
                            <div>
                                <h4>Proses Kolaboratif</h4>
                                <p>Kami bekerja bersama Anda sebagai tim, mendengarkan kebutuhan unik bisnis Anda untuk hasil yang maksimal.</p>
                            </div>
                        </div>
                    </div>

                    <div style={{ marginTop: '40px' }}>
                        <a href="#contact" className="btn-primary">
                            Pelajari Lebih Lanjut
                            <ion-icon name="arrow-forward-outline"></ion-icon>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    </section>

    {/*  ════════════════════════════════
         ARTICLES SECTION
         ════════════════════════════════  */}
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
                        <div className="article-meta"><span>10 Mar 2026</span><span>5 min</span></div>
                        <h3>Kenapa Bisnis Anda Wajib Punya Website di 2026</h3>
                        <p>Di era digital, website bukan lagi pilihan tapi kebutuhan. Pelajari alasan pentingnya website untuk bisnis modern.</p>
                        <Link to="/artikel/kenapa-bisnis-wajib-punya-website" className="article-link">Baca Selengkapnya →</Link>
                    </div>
                </article>
                <article className="article-card" id="article-2">
                    <div className="article-thumb">
                        <div className="article-thumb-visual t2"><ion-icon name="search-outline"></ion-icon></div>
                        <span className="article-category">SEO</span>
                    </div>
                    <div className="article-body">
                        <div className="article-meta"><span>05 Mar 2026</span><span>7 min</span></div>
                        <h3>Tips Optimasi SEO Website Bisnis Lokal</h3>
                        <p>Bagi UMKM di Purwokerto, SEO lokal adalah kunci agar ditemukan pelanggan sekitar. Simpan tips ampuhnya di sini.</p>
                        <Link to="/artikel/tips-seo-website-bisnis" className="article-link">Baca Selengkapnya →</Link>
                    </div>
                </article>
                <article className="article-card" id="article-3">
                    <div className="article-thumb">
                        <div className="article-thumb-visual t3"><ion-icon name="shield-checkmark-outline"></ion-icon></div>
                        <span className="article-category">Web Tech</span>
                    </div>
                    <div className="article-body">
                        <div className="article-meta"><span>01 Mar 2026</span><span>4 min</span></div>
                        <h3>Website Profesional: Kunci Kepercayaan Pelanggan</h3>
                        <p>Bagaimana desain yang rapi dan performa cepat bisa meningkatkan tingkat konversi jualan Anda secara signifikan.</p>
                        <Link to="/artikel/website-profesional-kepercayaan-pelanggan" className="article-link">Baca Selengkapnya →</Link>
                    </div>
                </article>
            </div>
        </div>
    </section>

    {/*  ════════════════════════════════
         FAQ SECTION
         ════════════════════════════════  */}
    <section className="section faq" id="faq">
        <div className="container">
            <div className="section-header center">
                <span className="section-tag blue">FAQ</span>
                <h2 className="section-title">Pertanyaan yang Sering Diajukan</h2>
                <p className="section-subtitle">Punya pertanyaan? Mungkin jawaban yang Anda cari ada di sini.</p>
            </div>
            <div className="faq-grid">
                <div className="faq-item">
                    <div className="faq-question">
                        <h3>Berapa lama proses pembuatan website di KalanaLabs?</h3>
                        <ion-icon name="add-outline"></ion-icon>
                    </div>
                    <div className="faq-answer">
                        <p>Untuk Landing Page sederhana, waktu pengerjaan adalah 3-5 hari kerja. Untuk Company Profile atau E-commerce, biasanya membutuhkan waktu 1-3 minggu tergantung kompleksitas fitur yang diminta.</p>
                    </div>
                </div>
                {/* <div className="faq-item">
                    {/* <div className="faq-question">
                        <h3>Apakah saya bisa berkonsultasi langsung di Purwokerto?</h3>
                        <ion-icon name="add-outline"></ion-icon>
                    </div>
                    <div className="faq-answer">
                        <p>Tentu saja! Kami berbasis di Purwokerto. Kami bisa bertemu di coffee shop pilihan Anda atau kami yang berkunjung ke kantor/toko Anda di area Purwokerto dan Banyumas sekitarnya.</p>
                    </div>
                </div> */}
                <div className="faq-item">
                    <div className="faq-question">
                        <h3>Apakah website yang dibuat sudah termasuk SEO?</h3>
                        <ion-icon name="add-outline"></ion-icon>
                    </div>
                    <div className="faq-answer">
                        <p>Ya, semua paket yang kami tawarkan sudah termasuk SEO On-Page dasar agar website Anda lebih mudah muncul di hasil pencarian Google.</p>
                    </div>
                </div>
                <div className="faq-item">
                    <div className="faq-question">
                        <h3>Apakah ada biaya langganan setiap bulannya?</h3>
                        <ion-icon name="add-outline"></ion-icon>
                    </div>
                    <div className="faq-answer">
                        <p>Kami tidak mengenakan biaya bulanan wajib. Biaya tahunan hanya untuk perpanjangan Domain dan Hosting. Kami juga menyediakan paket Managed Service jika Anda butuh bantuan rutin.</p>
                    </div>
                </div>
                <div className="faq-item">
                    <div className="faq-question">
                        <h3>Bagaimana jika saya ingin menambah fitur di kemudian hari?</h3>
                        <ion-icon name="add-outline"></ion-icon>
                    </div>
                    <div className="faq-answer">
                        <p>Sangat bisa! Website kami dibangun dengan struktur modular, sehingga Anda bisa menambah fitur seperti blog, sistem pembayaran, atau dashboard kapan saja.</p>
                    </div>
                </div>
            </div>
        </div>
    </section>

    {/*  ════════════════════════════════
         CTA SECTION (Blue BG)
         ════════════════════════════════  */}
    <section className="section cta" id="contact">
        <div className="container">
            <div className="cta-content">
                <h2>Siap Membawa Bisnis Anda <br />ke Level Selanjutnya?</h2>
                <p>Konsultasikan kebutuhan digital Anda secara gratis. Kami akan bantu carikan solusi terbaik yang sesuai budget dan tujuan bisnis Anda.</p>
                <div className="cta-actions">
                    <a href="https://wa.me/6285707736885" className="btn-white btn-lg" id="ctaWhatsapp" target="_blank">
                        <ion-icon name="logo-whatsapp"></ion-icon>
                        Chat via WhatsApp
                    </a>
                    <a href="mailto:kalanalabs@gmail.com" className="btn-ghost btn-lg" id="ctaEmail">
                        <ion-icon name="mail-outline"></ion-icon>
                        kalanalabs@gmail.com
                    </a>
                </div>
                <div className="cta-assurance">
                    <div className="assurance-item"><ion-icon name="checkmark-circle"></ion-icon> Konsultasi Gratis</div>
                    <div className="assurance-item"><ion-icon name="checkmark-circle"></ion-icon> Desain Premium</div>
                    <div className="assurance-item"><ion-icon name="checkmark-circle"></ion-icon> Respon Cepat</div>
                </div>
            </div>
        </div>
    </section>

    {/*  ════════════════════════════════
         FOOTER
         ════════════════════════════════  */}
    <footer className="footer">
        <div className="container">
            <div className="footer-grid">
                <div className="footer-brand">
                    <Link to="/" className="nav-logo footer-logo">
                        <img src="logo.png" alt="KalanaLabs Logo" className="logo-img" />
                        KalanaLabs
                    </Link>
                    <p>Partner digital terpercaya untuk membantu bisnis Anda tumbuh dan berkembang di era digital.</p>
                    <div className="footer-social">
                        <a href="#" aria-label="Instagram"><ion-icon name="logo-instagram"></ion-icon></a>
                        <a href="#" aria-label="LinkedIn"><ion-icon name="logo-linkedin"></ion-icon></a>
                        <a href="#" aria-label="Facebook"><ion-icon name="logo-facebook"></ion-icon></a>
                        <a href="#" aria-label="GitHub"><ion-icon name="logo-github"></ion-icon></a>
                    </div>
                </div>
                <div className="footer-col">
                    <h4>Navigasi</h4>
                    <ul>
                        <li><a href="/#hero">Home</a></li>
                        <li><a href="/#services">Layanan</a></li>
                        <li><a href="/#portfolio">Portofolio</a></li>
                        <li><a href="/#pricing">Harga</a></li>
                        <li><a href="/#about">Tentang Kami</a></li>
                        <li><a href="/#articles">Artikel</a></li>
                        <li><a href="/#faq">FAQ</a></li>
                        <li><Link to="/terms">Syarat & Ketentuan</Link></li>
                    </ul>
                </div>
                <div className="footer-col">
                    <h4>Layanan</h4>
                    <ul>
                        <li><a href="/#services">Website & Landing Page</a></li>
                        <li><a href="/#services">Aplikasi Web</a></li>
                        <li><a href="/#services">E-Commerce</a></li>
                        <li><a href="/#services">Maintenance</a></li>
                    </ul>
                </div>
                <div className="footer-col">
                    <h4>Kontak</h4>
                    <ul>
                        <li><a href="mailto:kalanalabs@gmail.com">kalanalabs@gmail.com</a></li>
                        <li><a href="https://wa.me/6285707736885">+62 857-0773-6885</a></li>
                        <li><a href="https://maps.app.goo.gl/..." target="_blank">Purwokerto, Jawa Tengah</a></li>
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
