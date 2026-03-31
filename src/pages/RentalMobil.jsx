import React, { useState, useEffect } from "react";
import {
  Car,
  MapPin,
  ShieldCheck,
  Clock,
  UserCheck,
  Phone,
  ChevronDown,
  CheckCircle2,
  Users,
  Disc,
  MessageCircle,
  ArrowRight,
  TrendingUp,
  Star,
  Activity,
  Award,
  UsersRound,
  History,
  Search,
  User,
  Zap,
  Gem,
  CalendarDays,
  FileBadge,
  Map,
  BookOpen,
  ArrowUpRight
} from "lucide-react";
import { FaFacebook, FaInstagram, FaWhatsapp } from "react-icons/fa6";
import "../rental-mobil.css";

/**
 * PURWOKERTO TRANS - Rental Mobil Landing Page
 * LOCALIZED (Purwokerto & Indonesian Market)
 * HIGH-FIDELITY / PILL-NAV / RECENTLY UPDATED: 8 UNITS / GALLERY / CTA
 */

const WHATSAPP_NUMBER = "6285707736885";

const RentalMobil = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeTab, setActiveTab] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 30);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleBooking = (namaMobil) => {
    const text = encodeURIComponent(
      `Halo Purwokerto Trans, saya mau tanya ketersediaan unit *${namaMobil}* untuk perjalanan di Purwokerto...`
    );
    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${text}`, "_blank");
  };

  const navLinks = [
    { name: "Beranda", href: "#home" },
    { name: "Layanan", href: "#layanan" },
    { name: "Unit", href: "#unit" },
    // { name: "Wisata", href: "#wisata" },
    { name: "Artikel", href: "#artikel" },
    { name: "FAQ", href: "#faq" },
  ];

  const trendVehicles = [
    {
      name: "Toyota Avanza",
      price: "350rb",
      img: "/toyota_avanza_side_view_studio_1774914982070.png",
      active: true,
      type: "Keluarga & Harian",
      seats: "7 Kursi", gear: "Matik/Manual"
    },
    {
      name: "Innova Zenix",
      price: "650rb",
      img: "/toyota_innova_zenix_side_view_studio_1774915004230.png",
      active: false,
      type: "Premium Business",
      seats: "7 Kursi", gear: "Matik"
    },
    {
      name: "Toyota Fortuner",
      price: "1.2jt",
      img: "/fortuner_premium_rent_1774912230358.png",
      active: false,
      type: "Layanan SUV",
      seats: "7 Kursi", gear: "Matik"
    },
    {
      name: "Toyota Alphard",
      price: "2.5jt",
      img: "/purwokerto_trans_hero_car_1774912209115.png",
      active: false,
      type: "VIP Executive",
      seats: "6 Kursi", gear: "Matik"
    },
    {
      name: "Toyota Veloz",
      price: "450rb",
      img: "/toyota_veloz_side_view_studio_1774917660577.png",
      active: false,
      type: "Modern Family",
      seats: "7 Kursi", gear: "Matik"
    },
    {
      name: "Toyota Hiace",
      price: "1.1jt",
      img: "/toyota_hiace_side_view_studio_rent_1774917681452.png",
      active: false,
      type: "Group Shuttle",
      seats: "14 Kursi", gear: "Manual"
    },
    {
      name: "Toyota Calya",
      price: "250rb",
      img: "/toyota_calya_side_view_studio_rent_1774917703805.png",
      active: false,
      type: "Economic City",
      seats: "7 Kursi", gear: "Manual"
    },
    {
      name: "Isuzu ELF",
      price: "1.3jt",
      img: "/isuzu_elf_side_view_studio_rent_1774917724303.png",
      active: false,
      type: "Tourism Bus",
      seats: "19 Kursi", gear: "Manual"
    },
  ];

  const serviceTabs = [
    {
      id: 0,
      title: "Booking Online",
      desc: "Antiribet via Whatsapp",
      icon: <Zap size={20} />,
      contentTitle: "Sewa mobil <br /> lebih gampang!",
      contentDesc: "Unit dijamin <br /> kinclong & gres",
      percent: "PROMO",
      img: "/tesla_model_x_promo_1774914623521.png",
      // btnText: "Cek Tanggal",
    },
    {
      id: 1,
      title: "Layanan VIP",
      desc: "Driver profesional",
      icon: <Gem size={20} />,
      contentTitle: "Nyaman bagai <br /> Bos besar",
      contentDesc: "Driver hafal <br /> medan & rute",
      percent: "VIP",
      img: "/luxury_vip_service_rent_1774914651825.png",
      // btnText: "Pesan Driver",
    },
    {
      id: 2,
      title: "Antar Jemput",
      desc: "Stasiun & Alamat",
      icon: <CalendarDays size={20} />,
      contentTitle: "Tunggu unit <br /> di rumah saja",
      contentDesc: "Gratis biaya <br /> operasional kota",
      percent: "FREE",
      img: "/car_parked_office_rent_1774913624337.png",
      // btnText: "Req Alamat",
    },
    {
      id: 3,
      title: "Anti Tipu-Tipu",
      desc: "Harga Transparan",
      icon: <FileBadge size={20} />,
      contentTitle: "Nggak ada <br /> biaya siluman",
      contentDesc: "Harga fix <br /> di depan",
      percent: "100%",
      img: "/luxury_car_interior_rent_1774913603949.png",
      // btnText: "Cek Harga",
    },
  ];

  const galleryImages = [
    { img: "/purwokerto_trans_hero_car_1774912209115.png", title: "Luxury Alphard" },
    { img: "/fortuner_premium_rent_1774912230358.png", title: "Toyota Fortuner" },
    { img: "/toyota_innova_zenix_side_view_studio_1774915004230.png", title: "Innova Zenix" },
    { img: "/toyota_avanza_side_view_studio_1774914982070.png", title: "Toyota Avanza" },
    { img: "/toyota_veloz_side_view_studio_1774917660577.png", title: "Toyota Veloz" },
    { img: "/toyota_hiace_side_view_studio_rent_1774917681452.png", title: "Toyota Hiace" },
    { img: "/toyota_calya_side_view_studio_rent_1774917703805.png", title: "Toyota Calya" },
    { img: "/isuzu_elf_side_view_studio_rent_1774917724303.png", title: "Isuzu ELF Deluxe" },
  ];

  const articles = [
    {
      title: "Tips Aman Sewa Mobil Lepas Kunci untuk Pemula",
      category: "Edukasi",
      img: "https://images.unsplash.com/photo-1449965408869-eaa3f722e40d?auto=format&fit=crop&q=80&w=800",
    },
    {
      title: "Rute Wisata 1 Hari di Baturraden & Sekitarnya",
      category: "Perjalanan",
      img: "https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?auto=format&fit=crop&q=80&w=800",
    },
    {
      title: "Kuliner Malam Purwokerto yang Wajib Dicoba",
      category: "Kuliner",
      img: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&q=80&w=800",
    },
  ];

  return (
    <div className="rent-root">

      {/* SHARP PILL NAVBAR */}
      <nav id="navbar" className={`rent-navbar ${isScrolled ? "scrolled" : ""}`}>
        <div className="rent-nav-pill">
          <div className="rent-nav-logo">
            TRANS<span>WOKERTO</span>
          </div>

          <div className="rent-nav-links">
            {navLinks.map((link) => (
              <a key={link.name} href={link.href}>{link.name}</a>
            ))}
          </div>

          {/* <div className="rent-nav-right">
             <div className="rent-search-wrapper">
                <Search size={14} />
                <span>Cari Unit...</span>
             </div>
             <div className="rent-nav-user">
                <User size={18} />
             </div>
          </div> */}
        </div>
      </nav>

      {/* HERO SECTION */}
      <header id="home" className="rent-hero">
        <div className="rent-hero-overlay"></div>
        <div className="rent-container">
          <div className="rent-hero-wrap">
            <h1 dangerouslySetInnerHTML={{ __html: "Rental Mobil<br / > Terpercaya." }} />
            <div className="rent-hero-details">
              <p>
                Mau liburan di Baturraden atau ada urusan bisnis di Purwokerto? Serahkan urusan transportasinya ke kami. Unit dijamin gres, wangi, dan nggak pake ribet!
              </p>
              <div style={{ display: 'flex', gap: '15px' }}>
                <button onClick={() => window.location.href = '#unit'} className="rent-btn-view-all">Booking Sekarang</button>
                <button className="rent-btn-book" style={{ color: '#fff' }}>Hubungi Admin</button>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* STATS SECTION (NEW) */}
      <section className="rent-stats-section">
        <div className="rent-container">
          <div className="rent-stats-grid">
            <div className="rent-stat-card">
              <h3>10+</h3>
              <p>Yrs Experience</p>
            </div>
            <div className="rent-stat-card">
              <h3>50+</h3>
              <p>Active Fleet</p>
            </div>
            <div className="rent-stat-card">
              <h3>2.5k</h3>
              <p>Happy Clients</p>
            </div>
            <div className="rent-stat-card">
              <h3>4.9</h3>
              <p>Avg Rating</p>
            </div>
          </div>
        </div>
      </section>

      {/* SERVICE TABS SECTION */}
      <section id="layanan" className="rent-service-tabs">
        <div className="rent-tabs-nav">
          {serviceTabs.map((tab, i) => (
            <div
              key={i}
              className={`rent-tab-trigger ${activeTab === i ? 'active' : ''}`}
              onClick={() => setActiveTab(i)}
            >
              <div style={{ color: '#3b82f6' }}>{tab.icon}</div>
              <div>
                <h5>{tab.title}</h5>
                <p>{tab.desc}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="rent-tab-content">
          <div className="rent-container">
            <div className="rent-tab-grid">
              <div className="rent-tab-heading">
                <h2 dangerouslySetInnerHTML={{ __html: serviceTabs[activeTab].contentTitle }} />
                <div className="rent-tab-actions">
                  <button onClick={() => handleBooking(serviceTabs[activeTab].title)} className="rent-btn-view-all" style={{ padding: '16px 40px' }}>
                    {activeTab === 0 ? "Hubungi Admin " : "Pesan Unit "}
                    {serviceTabs[activeTab].btnText}
                  </button>
                  <div className="rent-discount-box">
                    <h3>{serviceTabs[activeTab].percent}</h3>
                    <p dangerouslySetInnerHTML={{ __html: serviceTabs[activeTab].contentDesc }} />
                  </div>
                </div>
              </div>
              <div style={{ textAlign: 'right' }}>
                <img src={serviceTabs[activeTab].img} alt="Unit" className="rent-tab-img" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* TREND VEHICLES (LOCAL UNITS) - 8 UNITS */}
      <section id="unit" className="rent-section rent-section-gray">
        <div className="rent-container">
          <div className="rent-grid-header">
            <h2>Pilihan Unit</h2>
            <button className="rent-btn-view-all" style={{ background: '#0f172a' }}>Lihat Semua &rarr;</button>
          </div>

          <div className="rent-card-grid">
            {trendVehicles.map((v, i) => (
              <div key={i} className={`rent-v-card ${v.active ? 'active' : ''}`}>
                <div>
                  <p className="rent-v-type">{v.type}</p>
                  <h3>{v.name}</h3>
                </div>
                <div className="rent-v-img-wrap">
                  <img src={v.img} alt={v.name} className="rent-v-img" />
                </div>
                <div className="rent-v-specs">
                  <div className="rent-v-spec-item"><Users size={14} /> {v.seats}</div>
                  <div className="rent-v-spec-item"><History size={14} /> {v.gear}</div>
                </div>
                <div className="rent-v-footer">
                  <div className="rent-v-price">Rp {v.price}<span>/hari</span></div>
                  <button onClick={() => handleBooking(v.name)} className="rent-btn-book">Rent Now</button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* GALLERY SECTION (NEW) */}
      <section id="gallery" className="rent-section" style={{ padding: '0' }}>
        <div className="rent-gallery-grid">
          {galleryImages.map((img, i) => (
            <div key={i} className="rent-gallery-item">
              <img src={img.img} alt={img.title} className="rent-gallery-img" />
              <div className="rent-gallery-overlay">
                <span>{img.title}</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA SECTION (NEW) */}
      <section className="rent-cta-section">
        <div className="rent-container">
          <div className="rent-cta-wrap">
            <h2>Butuh Perjalanan Aman <br /> & Terpercaya?</h2>
            <p>Konsultasikan kebutuhan transportasimu kepada tim profesional kami. Kami siap melayani 24/7 untuk memastikan kenyamananmu di Purwokerto.</p>
            <a href={`https://wa.me/${WHATSAPP_NUMBER}`} className="rent-btn-cta">
              <MessageCircle size={20} />
              Hubungi Admin via WhatsApp
            </a>
          </div>
        </div>
      </section>

      {/* ARTICLES / BLOG */}
      <section id="artikel" className="rent-section rent-section-gray">
        <div className="rent-container">
          <div className="rent-grid-header" style={{ marginBottom: '80px' }}>
            <h2>Artikel & Tips</h2>
            <button className="rent-btn-view-all" style={{ background: 'transparent', border: '1.5px solid #0f172a', color: '#0f172a' }}>
              Semua Postingan &rarr;
            </button>
          </div>

          <div className="rent-article-grid">
            {articles.map((art, i) => (
              <div key={i} className="rent-article-card cursor-pointer">
                <div className="rent-art-img-wrap">
                  <img src={art.img} alt={art.title} className="rent-art-img" />
                </div>
                <div className="rent-art-meta">{art.category}</div>
                <h4 className="rent-art-title">{art.title}</h4>
                <div style={{ marginTop: '20px', display: 'flex', alignItems: 'center', gap: '8px', color: '#3b82f6', fontWeight: 700, fontSize: '0.85rem' }}>
                  Baca Selengkapnya <ArrowUpRight size={16} />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ SECTION */}
      <section id="faq" className="rent-section" style={{ maxWidth: '1200px', margin: '0 auto' }}>
        <div className="rent-container">
          <div className="rent-grid-header" style={{ textAlign: 'center', justifyContent: 'center', flexDirection: 'column' }}>
            <h2 style={{ marginBottom: '24px' }}>Sering Ditanyakan</h2>
            <p style={{ fontSize: '0.9rem', color: '#64748b', maxWidth: '600px' }}>Masih punya pertanyaan seputar sewa mobil di Purwokerto Trans? Cek daftar tanya jawab di bawah ini.</p>
          </div>

          <div className="rent-faq-grid">
            <div className="rent-faq-item">
              <h5>Apa syarat sewa lepas kunci?</h5>
              <p>Persyaratannya cukup mudah, hanya memerlukan KTP/KK asli, SIM A aktif, dan bukti kepemilikan media sosial atau ID card tempat bekerja untuk proses verifikasi.</p>
            </div>
            <div className="rent-faq-item">
              <h5>Apakah harga sewa sudah termasuk BBM?</h5>
              <p>Harga yang tertera adalah unit standar. Anda bisa memilih paket "All-In" yang sudah mencakup Driver, BBM, dan Tol untuk kenyamanan maksimal perjalanan Anda.</p>
            </div>
            <div className="rent-faq-item">
              <h5>Bisakah antar-jemput ke Stasiun Purwokerto?</h5>
              <p>Tentu bisa. Kami melayani penjemputan gratis di area Stasiun Purwokerto dan alamat-alamat strategis lainnya di dalam kota selama 24 jam.</p>
            </div>
            <div className="rent-faq-item">
              <h5>Bagaimana cara pembayarannya?</h5>
              <p>Kami menerima pembayaran via Transfer Bank (BCA/Mandiri/BRI) dan pembayaran tunai saat serah terima unit di lokasi yang telah disepakati.</p>
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="rent-footer">
        <div className="rent-container">
          <div className="rent-footer-grid">
            <div className="rent-footer-brand">
              <div className="rent-nav-logo" style={{ color: '#fff' }}>
                TRANS<span>WOKERTO</span>
              </div>
              <p>Solusi transportasi terbaik di Purwokerto. Dari kebutuhan bisnis hingga liburan keluarga, kami siap memberikan layanan kelas wahid.</p>
              <div style={{ display: 'flex', gap: '16px', marginTop: '32px' }}>
                <a href="#" style={{ color: '#94a3b8' }}><FaInstagram size={20} /></a>
                <a href="#" style={{ color: '#94a3b8' }}><FaFacebook size={20} /></a>
                <a href="#" style={{ color: '#94a3b8' }}><FaWhatsapp size={20} /></a>
              </div>
            </div>

            <div className="rent-footer-col">
              <h5>Navigasi</h5>
              <a href="#unit">Koleksi Unit</a>
              <a href="#gallery">Galeri Armada</a>
              <a href="#layanan">Tentang Layanan</a>
            </div>

            <div className="rent-footer-col">
              <h5>Kontak & Info</h5>
              <p>Jl. HR Boenyamin Purwokerto</p>
              <a href="#">WA: +62 857 0773 6885</a>
              <a href="#">admin@purwokertotrans.com</a>
            </div>
          </div>

          <div style={{ marginTop: '80px', paddingTop: '40px', borderTop: '1px solid rgba(255,255,255,0.05)', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '20px' }}>
            <p style={{ fontSize: '0.75rem', color: '#64748b' }}>&copy; 2026 Purwokerto Trans. Semua hak cipta dilindungi.</p>
            <div style={{ display: 'flex', gap: '40px', fontSize: '0.7rem', color: '#64748b', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '1px' }}>
              <a href="#">Privasi</a>
              <a href="#">Ketentuan</a>
            </div>
          </div>
        </div>
      </footer>

    </div>
  );
};

export default RentalMobil;
