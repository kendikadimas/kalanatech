import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => { document.body.style.overflow = ''; };
  }, [isMenuOpen]);

  return (
    <header className="wed-header">
      <nav className="wed-container wed-nav">
        <div className="wed-nav-links hide-mobile">
          <a href="#services">SERVICES</a>
          <a href="#process">PROCESS</a>
          <a href="#stories">PORTFOLIO</a>
        </div>
        <div className="wed-logo-wrap text-center">
          <h1 className="wed-font-heading">VALENCIA</h1>
          <span>WEDDING ORGANIZER</span>
        </div>
        <div className="wed-nav-links hide-mobile justify-end">
          <a href="#pricing">PACKAGES</a>
          <a href="#contact">INQUIRY</a>
          <a href="https://wa.me/6285707736885" className="wed-btn-book">CONSULT NOW</a>
        </div>

        {/* Mobile Toggle */}
        <div className="wed-nav-toggle md-hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
          <span style={{ 
            transform: isMenuOpen ? 'rotate(45deg) translateY(11px)' : 'none',
            background: isMenuOpen ? '#fff' : 'inherit' 
          }}></span>
          <span style={{ 
            opacity: isMenuOpen ? 0 : 1,
            background: isMenuOpen ? '#fff' : 'inherit' 
          }}></span>
          <span style={{ 
            transform: isMenuOpen ? 'rotate(-45deg) translateY(-11px)' : 'none',
            background: isMenuOpen ? '#fff' : 'inherit' 
          }}></span>
        </div>

        {/* Mobile Overlay */}
        <div 
          className={`wed-mobile-overlay ${isMenuOpen ? 'active' : ''}`} 
          onClick={() => setIsMenuOpen(false)}
        ></div>

        {/* Mobile Drawer */}
        <div className={`wed-mobile-drawer ${isMenuOpen ? 'active' : ''}`}>
          <a href="#services" onClick={() => setIsMenuOpen(false)}>SERVICES</a>
          <a href="#process" onClick={() => setIsMenuOpen(false)}>PROCESS</a>
          <a href="#stories" onClick={() => setIsMenuOpen(false)}>PORTFOLIO</a>
          <a href="#pricing" onClick={() => setIsMenuOpen(false)}>PACKAGES</a>
          <a href="#contact" onClick={() => setIsMenuOpen(false)}>INQUIRY</a>
          <a href="https://wa.me/6285707736885" className="wed-btn-book" style={{textAlign: 'center'}}>CONSULT NOW</a>
        </div>
      </nav>
    </header>
  );
}

function Hero() {
  const heroBg = "/assets/wedding_hero_agency.png";
  
  return (
    <section className="wed-hero-bg wed-reveal" style={{ backgroundImage: `url('${heroBg}')` }}>
      <div className="wed-hero-overlay"></div>
      <div className="wed-container">
        <div className="wed-hero-content">
          <span className="wed-section-tag" style={{color: '#fff', letterSpacing: '4px'}}></span>
          <h2 className="wed-font-heading">
            Mewujudkan Pernikahan Impian Menjadi <em className="italic font-normal">Karya Abadi.</em>
          </h2>
          <p>
            Valencia Wedding Organizer berdedikasi untuk merancang perayaan yang mencerminkan kisah unik Anda dengan keanggunan dan detail yang sempurna.
          </p>
          <div style={{marginTop: '40px'}}>
             <a href="#contact" className="wed-btn-book hero-cta-btn">
              MULAI PERENCANAAN
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

function Services() {
  return (
    <section id="services" className="wed-section white">
      <div className="wed-container">
        <div className="wed-section-header wed-reveal">
          <span className="wed-section-tag">OUR SERVICES</span>
          <h2 className="wed-font-heading wed-section-title">
            Layanan Menyeluruh <em className="italic font-normal">Tanpa Terkecuali.</em>
          </h2>
        </div>

        <div className="wed-stagger-grid">
          <div className="wed-stagger-item wed-reveal">
            <div className="wed-item-img">
              <img src="/assets/services.png" alt="Planning" className="rounded shadow-sm w-full" />
            </div>
            <div className="wed-item-text">
              <h3 className="wed-font-heading text-3xl mb-6">Full-Service Planning</h3>
              <p className="text-gray-600 mb-8">
                Kami menangani setiap elemen mulai dari pemilihan lokasi, manajemen anggaran, hingga pemilihan vendor kelas atas untuk memastikan persiapan Anda berjalan tanpa beban.
              </p>
              <ul className="space-y-3 text-sm text-gray-500">
                <li>• Design & Concept Creation</li>
                <li>• Vendor Curation & Liason</li>
                <li>• Production Management</li>
              </ul>
            </div>
          </div>

          <div className="wed-stagger-item wed-reveal">
            <div className="wed-item-img">
              <img src="/assets/hero.png" alt="Coordination" className="rounded shadow-sm w-full" />
            </div>
            <div className="wed-item-text">
              <h3 className="wed-font-heading text-3xl mb-6">Wedding Day Coordination</h3>
              <p className="text-gray-600 mb-8">
                Fokuslah pada kebahagiaan Anda. Tim manajemen hari-H kami akan memastikan seluruh rangkaian acara berjalan presisi sesuai dengan rancangan yang telah disepakati.
              </p>
              <ul className="space-y-3 text-sm text-gray-500">
                <li>• Detailed Master Rundown</li>
                <li>• Guest & Vendor Coordination</li>
                <li>• Crisis Management Team</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function PlanningProcess() {
  const steps = [
    { title: "Dream & Concept", desc: "Sesi konsultasi mendalam untuk memahami visi dan konsep pernikahan impian Anda." },
    { title: "Curation & Design", desc: "Kami mengkurasi vendor terbaik dan merancang setiap detail estetika acara." },
    { title: "Execution & Magic", desc: "Kami mewujudkan rancangan tersebut menjadi kenyataan di hari istimewa Anda." },
  ];

  return (
    <section id="process" className="wed-section">
      <div className="wed-container">
        <div className="wed-section-header wed-reveal">
          <span className="wed-section-tag">THE PROCESS</span>
          <h2 className="wed-font-heading wed-section-title">Bagaimana Kami <em className="italic font-normal">Bekerja.</em></h2>
        </div>
        <div className="wed-timeline">
          {steps.map((step, i) => (
            <div key={i} className="wed-timeline-item wed-reveal">
              <div className="wed-timeline-circle"></div>
              <div className="wed-timeline-content">
                <h4 className="wed-font-heading">{step.title}</h4>
                <p>{step.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Testimonials() {
  const reviews = [
    { text: "Valencia Wedding benar-benar mewujudkan apa yang hanya ada di bayangan kami. Detailnya luar biasa!", author: "Siska & Andi" },
    { text: "Sangat profesional. Kami tidak perlu khawatir tentang apapun di hari-H. Terima kasih tim Valencia!", author: "Boby & Clara" },
    { text: "Visi kreatif mereka sangat segar. Pernikahan kami terasa sangat unik dan personal.", author: "Ferry & Leyla" },
  ];

  return (
    <section className="wed-section white">
      <div className="wed-container">
        <div className="wed-section-header wed-reveal">
          <span className="wed-section-tag">TESTIMONIALS</span>
          <h2 className="wed-font-heading wed-section-title">Apa Kata <em className="italic font-normal">Mereka.</em></h2>
        </div>
        <div className="wed-testimonial-grid">
          {reviews.map((rev, i) => (
            <div key={i} className="wed-testimonial-card wed-reveal">
              <p>"{rev.text}"</p>
              <div className="author">— {rev.author}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function FeaturedStories() {
  const stories = [
    { title: "THE ELEGANCE OF ETHER", desc: "BALI — PRIVATE VILLA", img: "/assets/hero.png" },
    { title: "RUSTIC ROMANCE", desc: "JAKARTA — INDOOR GARDEN", img: "/assets/services.png" },
    { title: "MODERN HERITAGE", desc: "SURABAYA — BALLROOM", img: "/assets/stories.png" },
  ];

  return (
    <section id="stories" className="wed-section">
      <div className="wed-container">
        <div className="wed-section-header wed-reveal">
          <span className="wed-section-tag">LATEST PORTFOLIO</span>
          <h2 className="wed-font-heading wed-section-title">
            Kilas Balik Momen <em className="italic font-normal">Penuh Cinta.</em>
          </h2>
        </div>
        <div className="wed-masonry-grid">
          {stories.map((story, i) => (
            <article key={i} className="wed-story-card wed-reveal">
              <div className="relative mb-6">
                <img src={story.img} alt={story.title} className="rounded" />
              </div>
              <div className="text-center">
                <h3 className="wed-font-heading text-lg tracking-[2px] mb-2">{story.title}</h3>
                <p className="text-xs text-gray-500 tracking-[2px]">{story.desc}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function FAQ() {
  const faqs = [
    { q: "Berapa lama persiapan yang ideal?", a: "Kami menyarankan mulai 6-12 bulan sebelum hari-H untuk hasil maksimal." },
    { q: "Apakah bisa menangani luar kota?", a: "Ya, kami berpengalaman menangani destination wedding di seluruh Indonesia." },
    { q: "Bisa pilih vendor sendiri?", a: "Tentu, kami akan memberikan rekomendasi namun keputusan akhir ada pada Anda." },
    { q: "Apa jaminan kelancarannya?", a: "Setiap event didukung tim manajemen krisis dan koordinasi vendor berlapis." },
  ];

  return (
    <section className="wed-section white">
      <div className="wed-container">
        <div className="wed-section-header wed-reveal">
          <span className="wed-section-tag">COMMON QUESTIONS</span>
          <h2 className="wed-font-heading wed-section-title">Mungkin Anda <em className="italic font-normal">Bertanya.</em></h2>
        </div>
        <div className="wed-faq-grid">
          {faqs.map((faq, i) => (
            <div key={i} className="wed-faq-item wed-reveal">
              <h4 className="wed-font-heading">{faq.q}</h4>
              <p className="text-gray-500 text-sm">{faq.a}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function PRICING() {
  return (
    <section id="pricing" className="wed-section">
      <div className="wed-container">
        <div className="wed-section-header wed-reveal">
          <span className="wed-section-tag">INVESTMENT PACKAGES</span>
          <h2 className="wed-font-heading wed-section-title">
            Pilih Paket Terbaik untuk <em className="italic font-normal">Perayaan Anda.</em>
          </h2>
        </div>
        
        <div className="wed-pricing-grid">
          <div className="wed-price-tier wed-reveal">
            <div>
              <span className="text-xs uppercase tracking-widest text-gray-400">ESSENTIAL</span>
              <h3 className="wed-font-heading mt-4">Bronze Pearl</h3>
              <p className="text-gray-500 italic">Intimate coordination</p>
            </div>
            <ul>
              <li>• Full Day Coordination</li>
              <li>• 3 Event Coordinators</li>
              <li>• Technical Meetings</li>
              <li>• Detailed Rundown</li>
            </ul>
            <button className="wed-btn-book">ASK FOR PRICING</button>
          </div>

          <div className="wed-price-tier wed-reveal" style={{borderColor: '#92ada6', borderWidth: '2px'}}>
            <div>
              <span className="text-xs uppercase tracking-widest text-[#92ada6] font-bold">MOST POPULAR</span>
              <h3 className="wed-font-heading mt-4">Silver Diamond</h3>
              <p className="text-gray-500 italic">Comprehensive planning</p>
            </div>
            <ul>
              <li>• End-to-End Planning</li>
              <li>• Vendor Curations</li>
              <li>• Design & Decor Consult</li>
              <li>• Priority Support</li>
            </ul>
            <button className="wed-btn-book" style={{background: '#333', color: '#fff'}}>ASK FOR PRICING</button>
          </div>

          <div className="wed-price-tier wed-reveal">
            <div>
              <span className="text-xs uppercase tracking-widest text-gray-400">ULTIMATE</span>
              <h3 className="wed-font-heading mt-4">Gold Signature</h3>
              <p className="text-gray-500 italic">Luxury execution</p>
            </div>
            <ul>
              <li>• White Glove Planning</li>
              <li>• Destination Expert</li>
              <li>• Custom Scenic Design</li>
              <li>• Concierge Service</li>
            </ul>
            <button className="wed-btn-book">ASK FOR PRICING</button>
          </div>
        </div>
      </div>
    </section>
  );
}

function Contact() {
  return (
    <section id="contact" style={{padding: 0}}>
      <div className="wed-contact-bg" style={{ backgroundImage: "url('/assets/contact_bg.png')" }}>
        <div className="wed-container">
          <div className="wed-contact-form-wrap rounded wed-reveal">
            <div className="text-center mb-10">
              <span className="wed-section-tag">RESERVE YOUR DATE</span>
              <h2 className="wed-font-heading wed-section-title" style={{fontSize: '2rem'}}>
                Mari Bicarakan <em className="italic font-normal">Pernikahan Impian Anda.</em>
              </h2>
            </div>
            
            <form onSubmit={(e) => e.preventDefault()}>
              <div className="wed-form-grid">
                <div className="wed-input-group">
                  <label>Nama Lengkap</label>
                  <input type="text" placeholder="Contoh: Dimas & Adinda" />
                </div>
                <div className="wed-input-group">
                  <label>Nomor WhatsApp</label>
                  <input type="text" placeholder="0812-xxxx-xxxx" />
                </div>
              </div>
              <div className="wed-input-group mb-6">
                <label>Ceritakan Sedikit Tentang Impian Anda</label>
                <textarea placeholder="Tema, jumlah tamu, atau detail khusus lainnya..." rows="3" style={{resize: 'none'}}></textarea>
              </div>
              <div className="text-center">
                <button type="submit" className="wed-btn-book" style={{padding: '16px 64px', fontSize: '1rem', fontWeight: 700, width: '100%'}}>
                  KIRIM PERMINTAAN KONSULTASI
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="wed-footer-alt">
      <div className="wed-container">
        <div className="wed-font-heading" style={{fontSize: '3rem', letterSpacing: '8px', marginBottom: '24px'}}>VALENCIA</div>
        <p className="mb-8">THE PREMIER WEDDING ORGANIZER & EVENT AGENCY</p>
        <div className="flex justify-center gap-8 mb-12 opacity-80 text-sm tracking-widest uppercase">
          <a href="#">Instagram</a>
          <a href="#">TikTok</a>
          <a href="#">WhatsApp</a>
        </div>
        <p className="text-xs opacity-30 tracking-[2px]">&copy; 2026 VALENCIA WEDDINGS. PART OF KALANALABS NETWORK.</p>
      </div>
    </footer>
  );
}

function ScrollToTop() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
       top: 0,
       behavior: 'smooth'
    });
  };

  return (
    <button className={`wed-scroll-top ${isVisible ? 'visible' : ''}`} onClick={scrollToTop}>
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M18 15l-6-6-6 6"/>
      </svg>
    </button>
  );
}

export default function Wedding() {
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('active');
        }
      });
    }, { threshold: 0.1 });

    document.querySelectorAll('.wed-reveal').forEach(el => observer.observe(el));

    // Stagger items logic
    document.querySelectorAll('.wed-stagger-grid, .wed-testimonial-grid, .wed-pricing-grid, .wed-masonry-grid, .wed-timeline').forEach(grid => {
        const items = grid.querySelectorAll('.wed-reveal');
        items.forEach((item, index) => {
            item.style.transitionDelay = `${index * 0.15}s`;
        });
    });

    return () => observer.disconnect();
  }, []);

  return (
    <div className="wedding-page-root">
      <Header />
      <main>
        <Hero />
        <Services />
        <PlanningProcess />
        <Testimonials />
        <FeaturedStories />
        <FAQ />
        <PRICING />
        <Contact />
      </main>
      <Footer />
      <ScrollToTop />
    </div>
  );
}
