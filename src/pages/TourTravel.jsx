import React, { useEffect } from 'react';
import './tour-travel.css';

const TourTravel = () => {
    useEffect(() => {
        // Set document title
        document.title = "NusaTrek - Temukan Makna Baru Dalam Setiap Jejak";
        
        // Scroll reveal logic
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('tour-visible');
                }
            });
        }, { threshold: 0.1 });

        document.querySelectorAll('.tour-reveal').forEach(el => observer.observe(el));

        return () => observer.disconnect();
    }, []);

    const toggleMenu = () => {
        document.querySelector('.tour-mobile-drawer').classList.toggle('active');
        document.querySelector('.tour-mobile-overlay').classList.toggle('active');
    };

    return (
        <div className="tour-page-root">
            {/* Header */}
            <header className="tour-header">
                <div className="tour-container tour-nav">
                    <div className="tour-logo-wrap">
                        <h1>NusaTrek</h1>
                    </div>
                    
                    <div className="tour-nav-links hide-mobile">
                        <a href="#about">Tentang Kami</a>
                        <a href="#destinations">Destinasi</a>
                        <a href="#packages">Paket Wisata</a>
                        <a href="#contact">Kontak</a>
                    </div>
                    
                    <div className="tour-nav-toggle hide-desktop" onClick={toggleMenu}>
                        <span></span>
                        <span></span>
                        <span></span>
                    </div>
                </div>
            </header>

            <div className="tour-mobile-overlay" onClick={toggleMenu}></div>
            <div className="tour-mobile-drawer">
                <a href="#about" onClick={toggleMenu}>Tentang Kami</a>
                <a href="#destinations" onClick={toggleMenu}>Destinasi</a>
                <a href="#packages" onClick={toggleMenu}>Paket Wisata</a>
                <a href="#contact" onClick={toggleMenu}>Kontak</a>
            </div>

            {/* Hero Section */}
            <section className="tour-hero-bg" style={{ backgroundImage: `url('/tour_hero_bg_1775114357325.png')` }}>
                <div className="tour-hero-overlay"></div>
                <div className="tour-hero-content tour-reveal">
                    <h2>Temukan Makna Baru<br/>Dalam Setiap Jejak</h2>
                    <p>Eksplorasi yang dirancang khusus untuk kenangan mendalam, bukan sekadar singgah.</p>
                    <button className="tour-btn-primary">Mulai Petualangan <span className="arrow">↗</span></button>
                    
                    <div className="tour-stats">
                        <div className="tour-stat-item">
                            <ion-icon name="star-outline"></ion-icon>
                            <span>Bintang 4.9 dari Ribuan Pelancong</span>
                        </div>
                        <div className="tour-stat-item">
                            <ion-icon name="people-outline"></ion-icon>
                            <span>50rb+ Klien Puas</span>
                        </div>
                        <div className="tour-stat-item">
                            <ion-icon name="logo-instagram"></ion-icon>
                            <span>Komunitas Travel Terbesar</span>
                        </div>
                    </div>
                </div>
            </section>

            {/* About Section */}
            <section id="about" className="tour-section tour-white-bg">
                <div className="tour-container">
                    <div className="tour-about-grid">
                        <div className="tour-about-content tour-reveal">
                            <div className="tour-section-tag"><ion-icon name="information-circle-outline"></ion-icon> Visi Kami</div>
                            <h2 className="tour-section-title">Merajut Kenangan Indah, Disusun Secara Personal</h2>
                            <p className="tour-desc">
                                Tim ahli kami berdedikasi menciptakan momen liburan di luar standar biasa. Kami menghadirkan harmoni yang pas 
                                antara kenyamanan premium, petualangan baru, dan interaksi yang membekas di hati pada setiap rute.
                            </p>
                            <button className="tour-btn-dark">Pelajari Lebih Jauh <span className="arrow">↗</span></button>
                        </div>
                        <div className="tour-about-images tour-reveal">
                            <img src="/tour_about_img_1775114373261.png" alt="Traveler" className="tour-img-large" />
                            <img src="/tour_dest_nature_1775114387747.png" alt="Valley" className="tour-img-small" />
                        </div>
                    </div>
                </div>
            </section>

            {/* Destinations Section */}
            <section id="destinations" className="tour-section">
                <div className="tour-container">
                    <div className="tour-section-header center tour-reveal">
                        <div className="tour-section-tag"><ion-icon name="airplane-outline"></ion-icon> Pilihan Tematik</div>
                        <h2 className="tour-section-title">Keajaiban Alam & Pesona Budaya dalam Satu Genggaman</h2>
                    </div>
                    
                    <div className="tour-dest-grid">
                        <div className="tour-dest-card tour-reveal tour-reveal-delay-1">
                            <div className="tour-dest-img">
                                <img src="/tour_dest_nature_1775114387747.png" alt="Nature" />
                            </div>
                            <h3>Pelukan Alam Tropis</h3>
                            <p>Kembali menyatu dengan asrinya pedesaan dan lanskap hijau pegunungan.</p>
                        </div>
                        
                        <div className="tour-dest-card tour-reveal tour-reveal-delay-2" style={{transform: "translateY(30px)"}}>
                            <div className="tour-dest-img">
                                <img src="/tour_about_img_1775114373261.png" alt="Future" />
                            </div>
                            <h3>Sisi Metropolitan</h3>
                            <p>Nikmati gemerlap dan kenyamanan fasilitas bintang 5 dari pusat kota modern.</p>
                        </div>
                        
                        <div className="tour-dest-card tour-reveal tour-reveal-delay-3" style={{transform: "translateY(-20px)"}}>
                            <div className="tour-dest-img">
                                <img src="/tour_package_bali_1775114405116.png" alt="Culture" />
                            </div>
                            <h3>Kekayaan Tradisi</h3>
                            <p>Berinteraksi langsung dengan adat istiadat dan kearifan masyarakat lokal.</p>
                        </div>
                        
                        <div className="tour-dest-card tour-reveal tour-reveal-delay-4" style={{transform: "translateY(10px)"}}>
                            <div className="tour-dest-img">
                                <img src="/tour_dest_nature_1775114387747.png" alt="History" />
                            </div>
                            <h3>Jejak Sejarah</h3>
                            <p>Susuri situs purba, candi megah, dan sejarah yang menjadi pondasi peradaban.</p>
                        </div>
                    </div>
                    
                    <div className="tour-dest-footer tour-reveal">
                        <span>Masih banyak pilihan destinasi menarik menanti Anda</span>
                        <div className="tour-line"></div>
                        <button className="tour-btn-dark">Telusuri Promo <span className="arrow">↗</span></button>
                    </div>
                </div>
            </section>

            {/* Packages Section */}
            <section id="packages" className="tour-section tour-white-bg">
                <div className="tour-container">
                    <div className="tour-section-header center tour-reveal">
                        <div className="tour-section-tag"><ion-icon name="briefcase-outline"></ion-icon> Penawaran Eksklusif</div>
                        <h2 className="tour-section-title">Paket Liburan Pilihan Sesuai Gaya Anda</h2>
                    </div>
                    
                    <div className="tour-packages-grid">
                        <div className="tour-pkg-card tour-reveal">
                            <div className="tour-pkg-img">
                                <span className="tour-pkg-badge">5 Hari / 4 Malam</span>
                                <img src="/tour_blog_1_1775116463552.png" alt="Raja Ampat" />
                            </div>
                            <div className="tour-pkg-info">
                                <h3>Eksotisme Raja Ampat Menyeluruh</h3>
                                <p>Mulai <span className="tour-price">Rp 6.800.000</span> / Orang</p>
                            </div>
                        </div>
                        
                        <div className="tour-pkg-card tour-reveal tour-reveal-delay-1">
                            <div className="tour-pkg-img">
                                <span className="tour-pkg-badge">4 Hari / 3 Malam</span>
                                <img src="/tour_package_bali_1775114405116.png" alt="Bali Classic" />
                            </div>
                            <div className="tour-pkg-info">
                                <h3>Pesona Spiritual & Pantai Bali</h3>
                                <p>Mulai <span className="tour-price">Rp 3.200.000</span> / Orang</p>
                            </div>
                        </div>
                        
                        <div className="tour-pkg-card tour-reveal tour-reveal-delay-2">
                            <div className="tour-pkg-img">
                                <span className="tour-pkg-badge">4 Hari / 3 Malam</span>
                                <img src="/tour_dest_nature_1775114387747.png" alt="Komodo" />
                            </div>
                            <div className="tour-pkg-info">
                                <h3>Petualangan Alam Liar Komodo</h3>
                                <p>Mulai <span className="tour-price">Rp 5.500.000</span> / Orang</p>
                            </div>
                        </div>
                        
                        <div className="tour-pkg-card tour-reveal tour-reveal-delay-3">
                            <div className="tour-pkg-img">
                                <span className="tour-pkg-badge">3 Hari / 2 Malam</span>
                                <img src="/tour_about_img_1775114373261.png" alt="Bromo" />
                            </div>
                            <div className="tour-pkg-info">
                                <h3>Menyapa Mentari di Puncak Bromo</h3>
                                <p>Mulai <span className="tour-price">Rp 2.100.000</span> / Orang</p>
                            </div>
                        </div>
                    </div>
                    
                    <div className="tour-dest-footer tour-reveal">
                        <span>Konsultasikan bujet untuk paket kustom</span>
                        <div className="tour-line"></div>
                        <button className="tour-btn-dark">Cek Promo Lengkap <span className="arrow">↗</span></button>
                    </div>
                </div>
            </section>

            {/* Why Us Section */}
            <section className="tour-why-section">
                <div className="tour-container">
                    <div className="tour-section-header center tour-reveal">
                        <div className="tour-section-tag"><ion-icon name="shield-checkmark-outline"></ion-icon> Nilai Utama Kami</div>
                        <h2 className="tour-section-title white">Rencanakan Perjalanan Tanpa Beban & Rasa Khawatir</h2>
                    </div>
                    
                    <div className="tour-why-grid">
                        <div className="tour-why-img tour-reveal">
                            <img src="/tour_cta_bg_1775116497643.png" alt="Kenyamanan" />
                        </div>
                        <div className="tour-why-list tour-reveal tour-reveal-delay-1">
                            <div className="tour-why-item">
                                <ion-icon name="map-outline"></ion-icon>
                                <div className="tour-why-text">
                                    <h4>Rute Anti-Mainstream</h4>
                                    <p>Akses rute eksklusif yang menghindari keramaian wisata massal.</p>
                                </div>
                            </div>
                            <div className="tour-why-item">
                                <ion-icon name="fast-food-outline"></ion-icon>
                                <div className="tour-why-text">
                                    <h4>Sensasi Kuliner Persembahan Chef Lokal</h4>
                                    <p>Cicipi hidangan warisan dari restoran rahasia rekomendasi warga sekitar.</p>
                                </div>
                            </div>
                            <div className="tour-why-item">
                                <ion-icon name="business-outline"></ion-icon>
                                <div className="tour-why-text">
                                    <h4>Kenyamanan Hotel 100% Terverifikasi</h4>
                                    <p>Hanya berjejaring dengan penyedia akomodasi berstandar sanitasi tinggi.</p>
                                </div>
                            </div>
                            <div className="tour-why-item">
                                <ion-icon name="happy-outline"></ion-icon>
                                <div className="tour-why-text">
                                    <h4>Pemandu Wisata Penuh Dedikasi</h4>
                                    <p>Pemandu kami bekerja seperti teman sejati yang melindungi dan memandu Anda.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Testimonials */}
            <section className="tour-section tour-white-bg">
                <div className="tour-container">
                    <div className="tour-section-header center tour-reveal">
                        <div className="tour-section-tag"><ion-icon name="chatbubbles-outline"></ion-icon> Tingkat Kepuasan</div>
                        <h2 className="tour-section-title">Cerita Bahagia dari Pengguna Jasa Kami</h2>
                    </div>
                    
                    <div className="tour-testimonial-wrap tour-reveal">
                        <div className="tour-testimonial-card" style={{ backgroundImage: `url('/tour_testimonial_bg_1775116408957.png')` }}>
                            <div className="tour-test-overlay"></div>
                            <div className="tour-test-content">
                                <div className="tour-stars">
                                    <ion-icon name="star"></ion-icon><ion-icon name="star"></ion-icon><ion-icon name="star"></ion-icon><ion-icon name="star"></ion-icon><ion-icon name="star"></ion-icon>
                                </div>
                                <p className="tour-test-quote">"Sebagai traveler independen, awalnya saya enggan ikut agen. Namun NusaTrek berhasil mempertahankan aspek kebebasan sekaligus mengamankan semua hal logistik secara luar biasa."</p>
                                <p className="tour-test-author">— Rina Kartika, Content Creator</p>
                                
                                <div className="tour-test-avatars">
                                    <div className="tour-avatar active"><img src="https://i.pravatar.cc/100?img=1" alt="Avatar"/></div>
                                    <div className="tour-avatar"><img src="https://i.pravatar.cc/100?img=2" alt="Avatar"/></div>
                                    <div className="tour-avatar"><img src="https://i.pravatar.cc/100?img=3" alt="Avatar"/></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Blogs Section */}
            <section className="tour-section">
                <div className="tour-container">
                    <div className="tour-section-header center tour-reveal">
                        <div className="tour-section-tag"><ion-icon name="reader-outline"></ion-icon> Tips & Wawasan</div>
                        <h2 className="tour-section-title">Wawasan Seru Persiapan Liburan Anda</h2>
                    </div>
                    
                    <div className="tour-blog-grid">
                        <div className="tour-blog-card tour-reveal">
                            <div className="tour-blog-img">
                                <img src="/tour_blog_1_1775116463552.png" alt="Blog 1" />
                                <div className="tour-blog-arrow"><ion-icon name="arrow-forward-outline"></ion-icon></div>
                            </div>
                            <span className="tour-blog-date">Dipublikasikan 25 Feb 2026</span>
                            <h3 className="tour-blog-title">Garis Pantai Magis Raja Ampat yang Jarang Terjamah</h3>
                        </div>
                        
                        <div className="tour-blog-card tour-reveal tour-reveal-delay-1">
                            <div className="tour-blog-img">
                                <img src="/tour_blog_2_1775116480165.png" alt="Blog 2" />
                                <div className="tour-blog-arrow"><ion-icon name="arrow-forward-outline"></ion-icon></div>
                            </div>
                            <span className="tour-blog-date">Dipublikasikan 10 Mar 2026</span>
                            <h3 className="tour-blog-title">Mendalami Sisi Otentik Bali Lewat Subak Tegalalang</h3>
                        </div>
                    </div>
                    
                    <div className="tour-dest-footer tour-reveal" style={{marginTop: '40px'}}>
                        <span>Dapatkan inspirasi tak terhingga di arsip blog kami</span>
                        <div className="tour-line"></div>
                        <button className="tour-btn-dark">Baca Semuanya <span className="arrow">↗</span></button>
                    </div>
                </div>
            </section>

            {/* FAQ Section */}
            <section className="tour-section tour-white-bg">
                <div className="tour-container">
                    <div className="tour-section-header center tour-reveal">
                        <div className="tour-section-tag"><ion-icon name="help-circle-outline"></ion-icon> Bantuan Cepat</div>
                        <h2 className="tour-section-title">Jawaban atas Keraguan Terbesar Anda Sebelum Klik Pesan</h2>
                    </div>
                    
                    <div className="tour-faq-grid tour-reveal">
                        {[
                            "Apakah saya bisa memesan kustomisasi jadwal di luar paket?",
                            "Berapa minimal jumlah orang untuk mendaftar tur khusus?",
                            "Bisakah NusaTrek mengurus visa dan dokumen perjalanan?",
                            "Bagaimana dengan kebijakan asuransi saat kecelakaan kerja?",
                            "Mungkinkah mengubah tanggal keberangkatan H-7?",
                            "Adakah biaya siluman selama perjalanan di pelosok?",
                            "Apakah fasilitas ramah anak atau untuk kaum lansia?",
                            "Dapatkah menyewa fotografer drone lepas melalui agen?"
                        ].map((q, i) => (
                            <div className="tour-faq-item" key={i}>
                                <span>{q}</span>
                                <ion-icon name="add-outline"></ion-icon>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA & Footer */}
            <section className="tour-cta-section" style={{ backgroundImage: `url('/tour_cta_bg_1775116497643.png')` }}>
                <div className="tour-cta-overlay"></div>
                <div className="tour-container tour-cta-content tour-reveal">
                    <h2>Momen Istimewa Harus Terencana Secara Premium</h2>
                    <p>Serahkan seluruh proses perizinan, reservasi, hingga keamanan pada kami. Anda berhak tenang.</p>
                    <button className="tour-btn-primary">Atur Jadwal Konsultasi <span className="arrow">↗</span></button>
                </div>
                
                <div className="tour-marquee">
                    <div className="tour-marquee-content">
                        <span>✈️ Jadwal Fleksibel</span> • <span>🌏 Kru Fotografer</span> • <span>🏝 Rute Privat</span> • <span>📄 Pengurusan Visa</span> • <span>🏨 Akses Resort Rahasia</span> • <span>🚗 Transportasi Helikopter/Yacht</span> • 
                        <span>✈️ Jadwal Fleksibel</span> • <span>🌏 Kru Fotografer</span> • <span>🏝 Rute Privat</span> • <span>📄 Pengurusan Visa</span> • <span>🏨 Akses Resort Rahasia</span> • <span>🚗 Transportasi Helikopter/Yacht</span> • 
                    </div>
                </div>
            </section>
            
            <footer className="tour-footer">
                <div className="tour-container tour-footer-grid">
                    <div className="tour-footer-col">
                        <h4>Navigasi</h4>
                        <a href="#">Beranda</a>
                        <a href="#">Tentang Kami</a>
                        <a href="#">Paket Tur</a>
                        <a href="#">Pesan Perjalanan</a>
                    </div>
                    <div className="tour-footer-col">
                        <h4>Informasi</h4>
                        <a href="#">Blog</a>
                        <a href="#">Kebijakan Privasi</a>
                        <a href="#">Syarat & Ketentuan</a>
                    </div>
                    <div className="tour-footer-col">
                        <h4>Lainnya</h4>
                        <a href="#">FAQ</a>
                        <a href="#">Karir</a>
                    </div>
                    <div className="tour-footer-col">
                        <h4>Sosial Media</h4>
                        <div className="tour-social-links">
                            <a href="#"><ion-icon name="logo-facebook"></ion-icon></a>
                            <a href="#"><ion-icon name="logo-instagram"></ion-icon></a>
                            <a href="#"><ion-icon name="logo-linkedin"></ion-icon></a>
                        </div>
                    </div>
                </div>
            </footer>
        </div>
    );
};

export default TourTravel;
