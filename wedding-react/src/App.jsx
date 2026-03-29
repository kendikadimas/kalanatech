import React from 'react';

function Header() {
  return (
    <header className="absolute top-0 left-0 w-full pt-6 pb-4 z-50 bg-transparent">
      <nav className="max-w-[1200px] mx-auto px-8 flex justify-between items-center md:grid md:grid-cols-[1fr_auto_1fr]">
        <div className="hidden md:flex gap-8 text-[0.85rem] font-medium tracking-wide">
          <a href="#" className="hover:text-accent-color transition">HOME</a>
          <a href="#services" className="hover:text-accent-color transition">SERVICES</a>
          <a href="#stories" className="hover:text-accent-color transition">STORIES</a>
        </div>
        <div className="text-center mx-auto md:mx-0">
          <h1 className="font-heading text-3xl md:text-[2.2rem] tracking-[4px] leading-none mb-1">BLUME</h1>
          <span className="text-[0.7rem] tracking-[2px] text-gray-600 lowercase">photography & organizer</span>
        </div>
        <div className="hidden md:flex gap-8 text-[0.85rem] font-medium tracking-wide justify-end items-center">
          <a href="#about" className="hover:text-accent-color transition">ABOUT</a>
          <a href="#contact" className="hover:text-accent-color transition">CONTACT</a>
          <a href="#" className="bg-accent-color text-white px-5 py-2 rounded text-[0.8rem] tracking-wide hover:bg-text-color transition">BOOK NOW</a>
        </div>
      </nav>
    </header>
  );
}

function Hero() {
  return (
    <section className="pt-40 pb-20 max-w-[1200px] mx-auto px-8 grid grid-cols-1 lg:grid-cols-[1fr_1.2fr] items-center gap-16">
      <div>
        <span className="text-subtitle-color text-xs font-semibold tracking-widest uppercase block mb-4">AKU JULIA BLUME</span>
        <h2 className="font-heading text-5xl md:text-[4.5rem] leading-[1.1] font-normal mb-8">
          Aku di sini untuk abadikan <em className="italic font-normal">kenanganmu.</em>
        </h2>
        <p className="text-[1.1rem] max-w-[450px] text-gray-600 mb-10 leading-relaxed">
          Memberikan pengalaman fotografi yang unik dan menangkap setiap momen spesial Anda menjadi keindahan yang abadi.
        </p>
        <a href="#stories" className="inline-block border border-accent-color text-accent-color px-7 py-3 text-[0.8rem] font-medium tracking-wide hover:bg-accent-color hover:text-white transition">
          LIHAT CERITA
        </a>
      </div>
      <div className="relative grid grid-cols-1 sm:grid-cols-2 gap-8">
        <div className="mt-0 sm:mt-16">
          <img src="/assets/hero.png" alt="Wedding Couple Lake" className="w-full rounded shadow-[0_20px_40px_rgba(0,0,0,0.05)]" />
        </div>
        <div className="relative">
          <img src="/assets/services.png" alt="Couple Detail" className="w-full rounded shadow-[0_20px_40px_rgba(0,0,0,0.05)]" />
          <span className="font-script text-6xl text-text-color opacity-80 absolute -top-8 -right-8 z-10 hidden sm:block">hello</span>
        </div>
      </div>
    </section>
  );
}

function Services() {
  return (
    <section id="services" className="bg-white py-32">
      <div className="max-w-[1200px] mx-auto px-8 grid grid-cols-1 lg:grid-cols-[1fr_1.2fr] items-start gap-12 lg:gap-24">
        <div>
          <span className="text-subtitle-color text-xs font-semibold tracking-widest uppercase block mb-4">KEAHLIANKU</span>
          <h2 className="font-heading text-4xl lg:text-[2.8rem] leading-[1.2] font-normal mb-6">
            Layanan apa yang <em className="italic font-normal">aku sediakan?</em>
          </h2>
          <p className="text-[1.1rem] text-gray-600 mb-12 max-w-[500px] leading-relaxed">
            Aku sangat menyukai memotret pernikahan dan pasangan karena ada begitu banyak perasaan yang bisa ditangkap. Fotografi adalah gairahku dan aku senang mengubah ide menjadi foto yang indah.
          </p>
          <div className="relative mt-16">
            <img src="/assets/stories.png" alt="Wedding Detail" className="w-[80%] rounded shadow-sm" />
            <span className="font-script text-6xl text-text-color opacity-80 absolute top-1/2 right-0 -translate-y-1/2 z-10">cheese</span>
          </div>
        </div>
        <div className="relative">
          <img src="/assets/services.png" alt="Engagement Portrait" className="w-full rounded shadow-sm" />
          <div className="mt-8 pl-8 border-l border-accent-color">
            <p className="text-base text-gray-600 italic">
              Aku ingin memberikan Anda pengalaman fotografi yang unik, dibangun untuk melayani yang terbaik dan menangkap momen spesial untuk Anda & keluarga.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

function About() {
  return (
    <section id="about" className="py-32">
      <div className="max-w-[1200px] mx-auto px-8 grid grid-cols-1 lg:grid-cols-[1fr_1.2fr] items-center gap-12 lg:gap-24">
        <div>
          <img src="/assets/photographer.png" alt="Julia Blume Portrait" className="w-full rounded shadow-sm" />
        </div>
        <div>
          <span className="text-subtitle-color text-xs font-semibold tracking-widest uppercase block mb-4">KENALI JULIA BLUME</span>
          <h2 className="font-heading text-4xl lg:text-[2.8rem] leading-[1.2] font-normal mb-12">
            Fotografer <em className="italic font-normal">wedding & keluarga</em> profesional.
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-[1fr_2fr] gap-8 mt-12">
            <div className="hidden md:block">
              <img src="/assets/photographer.png" alt="Julia Blume Small" className="w-full rounded shadow-sm" />
            </div>
            <div>
              <h3 className="font-heading text-[1.8rem] mb-4">Seputar Aku</h3>
              <p className="text-gray-600 mb-8 leading-relaxed">
                Aku percaya setiap foto harus menceritakan sebuah cerita, bukan hanya sekedar momen tapi emosi dan kenangan di dalamnya. Pendekatanku alami dan abadi, menangkap detail kecil yang membuat cinta Anda benar-benar unik.
              </p>
              
              <ul className="text-[0.95rem] space-y-2 text-gray-800">
                <li><strong>Instagram:</strong> @juliablumephotography</li>
                <li><strong>E-mail:</strong> info@juliablume.com</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function FeaturedStories() {
  const stories = [
    { title: "JULES & ARNOLD", desc: "PORTLAND — COUPLES", img: "/assets/hero.png" },
    { title: "STACY & THOMAS", desc: "IRVINGTON — ENGAGEMENT", img: "/assets/services.png" },
    { title: "HAMDI & LEYLA", desc: "YOZGAT — ENGAGEMENT", img: "/assets/stories.png" },
  ];

  return (
    <section id="stories" className="bg-white py-32">
      <div className="max-w-[1200px] mx-auto px-8">
        <div className="text-center mb-20">
          <span className="text-subtitle-color text-xs font-semibold tracking-widest uppercase block mb-4">CERITA PILIHAN</span>
          <h2 className="font-heading text-4xl lg:text-[2.8rem] font-normal leading-[1.2]">
            Beberapa <em className="italic font-normal">cerita cinta</em> indah yang pernah aku abadikan.
          </h2>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {stories.map((story, i) => (
            <article key={i} className="group cursor-pointer">
              <div className="relative mb-6 transform transition duration-300 group-hover:-translate-y-2">
                <div className="absolute top-[15px] left-[15px] right-[-15px] bottom-[-15px] border border-accent-color opacity-30 -z-10"></div>
                <img src={story.img} alt={story.title} className="w-full aspect-[4/5] object-cover" />
              </div>
              <div className="text-center">
                <h3 className="font-heading text-[1.2rem] tracking-[2px] mb-2">{story.title}</h3>
                <p className="text-[0.75rem] text-subtitle-color tracking-[2px]">{story.desc}</p>
              </div>
            </article>
          ))}
        </div>
        <div className="flex justify-center mt-12">
          <a href="#" className="inline-block border border-accent-color text-accent-color px-7 py-3 text-[0.8rem] font-medium tracking-wide hover:bg-accent-color hover:text-white transition">
            LIHAT SEMUA CERITA
          </a>
        </div>
      </div>
    </section>
  );
}

function Pricing() {
  const checkIcon = <span className="text-accent-color text-[0.8rem]">✔</span>;
  
  return (
    <section id="pricing" className="bg-bg-color py-32">
      <div className="max-w-[1200px] mx-auto px-8">
        <div className="text-center mb-16">
          <span className="text-subtitle-color text-xs font-semibold tracking-widest uppercase block mb-4">MY PLANS</span>
          <h2 className="font-heading text-4xl lg:text-[2.8rem] font-normal">
            The prices I offer are <em className="italic font-normal">amazing.</em>
          </h2>
        </div>
        
        <div className="flex flex-col gap-12 mt-16 max-w-[900px] mx-auto">
          {/* Regular Plan */}
          <div className="bg-[#f1f6f5] border border-[#e0eae8] p-8 md:p-12 grid grid-cols-1 md:grid-cols-[1fr_1.5fr_1fr] items-center gap-8 rounded hover:shadow-[0_10px_30px_rgba(0,0,0,0.03)] hover:-translate-y-1 transition duration-300">
            <div>
              <h3 className="font-heading text-3xl md:text-[2.5rem] font-normal mb-1">$ 1500 USD</h3>
              <p className="text-[1.2rem] text-gray-600">Regular Plan</p>
            </div>
            <div>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <li className="flex items-center gap-2 text-[0.95rem] text-gray-600">{checkIcon} Up to 3 hours</li>
                <li className="flex items-center gap-2 text-[0.95rem] text-gray-600">{checkIcon} 25 edited photos</li>
                <li className="flex items-center gap-2 text-[0.95rem] text-gray-600">{checkIcon} 100 Prints</li>
                <li className="flex items-center gap-2 text-[0.95rem] text-gray-600">{checkIcon} Online Gallery</li>
              </ul>
            </div>
            <div className="md:text-right text-center">
              <button className="bg-accent-color text-white px-5 py-2 rounded text-[0.8rem] font-medium tracking-wide hover:bg-text-color transition w-full md:w-auto">
                BOOK THIS PLAN
              </button>
              <p className="text-[0.75rem] text-gray-400 mt-4 md:ml-auto max-w-[200px] mx-auto md:mr-0">Customizations request can be arranged after purchase.</p>
            </div>
          </div>

          {/* Deluxe Plan */}
          <div className="bg-[#f1f6f5] border border-[#e0eae8] p-8 md:p-12 grid grid-cols-1 md:grid-cols-[1fr_1.5fr_1fr] items-center gap-8 rounded hover:shadow-[0_10px_30px_rgba(0,0,0,0.03)] hover:-translate-y-1 transition duration-300">
            <div>
              <h3 className="font-heading text-3xl md:text-[2.5rem] font-normal mb-1">$ 2500 USD</h3>
              <p className="text-[1.2rem] text-gray-600">Deluxe Plan</p>
            </div>
            <div>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <li className="flex items-center gap-2 text-[0.95rem] text-gray-600">{checkIcon} Up to 6 hours</li>
                <li className="flex items-center gap-2 text-[0.95rem] text-gray-600">{checkIcon} 100 edited photos</li>
                <li className="flex items-center gap-2 text-[0.95rem] text-gray-600">{checkIcon} 250 Prints</li>
                <li className="flex items-center gap-2 text-[0.95rem] text-gray-600">{checkIcon} Online Gallery</li>
              </ul>
            </div>
            <div className="md:text-right text-center">
              <button className="bg-accent-color text-white px-5 py-2 rounded text-[0.8rem] font-medium tracking-wide hover:bg-text-color transition w-full md:w-auto">
                BOOK THIS PLAN
              </button>
              <p className="text-[0.75rem] text-gray-400 mt-4 md:ml-auto max-w-[200px] mx-auto md:mr-0">Customizations request can be arranged after purchase.</p>
            </div>
          </div>
        </div>

        {/* Price FAQ */}
        <div className="mt-32">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-16">
            <div className="flex gap-6 items-start">
              <div className="bg-accent-color text-white w-10 h-10 rounded-full flex items-center justify-center font-bold shrink-0">?</div>
              <div>
                <h4 className="font-heading text-[1.2rem] mb-2">Which payment methods do you accept?</h4>
                <p className="text-[0.9rem] text-gray-600 leading-relaxed">We accept all major credit cards and PayPal, making your payment process quick, simple and secure.</p>
              </div>
            </div>
            <div className="flex gap-6 items-start">
              <div className="bg-accent-color text-white w-10 h-10 rounded-full flex items-center justify-center font-bold shrink-0">?</div>
              <div>
                <h4 className="font-heading text-[1.2rem] mb-2">Can I cancel my subscription?</h4>
                <p className="text-[0.9rem] text-gray-600 leading-relaxed">Manage your profile and settings easily from your personal dashboard whenever you like or need.</p>
              </div>
            </div>
            <div className="flex gap-6 items-start">
              <div className="bg-accent-color text-white w-10 h-10 rounded-full flex items-center justify-center font-bold shrink-0">?</div>
              <div>
                <h4 className="font-heading text-[1.2rem] mb-2">How can I manage my account?</h4>
                <p className="text-[0.9rem] text-gray-600 leading-relaxed">Subscriptions can be updated or canceled easily with just a few quick clicks in your dashboard.</p>
              </div>
            </div>
            <div className="flex gap-6 items-start">
              <div className="bg-accent-color text-white w-10 h-10 rounded-full flex items-center justify-center font-bold shrink-0">?</div>
              <div>
                <h4 className="font-heading text-[1.2rem] mb-2">Is my credit card information secure?</h4>
                <p className="text-[0.9rem] text-gray-600 leading-relaxed">Your card information is protected with advanced bank level security for complete peace of mind.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Contact() {
  return (
    <section id="contact" className="p-0">
      <div 
        className="min-h-[800px] bg-cover bg-center bg-fixed flex items-center py-20 px-4 sm:px-8"
        style={{ backgroundImage: "url('/assets/contact_bg.png')" }}
      >
        <div className="max-w-[900px] w-full mx-auto bg-white/75 backdrop-blur-[15px] border border-white/30 p-8 sm:p-12 md:p-20 rounded shadow-[0_40px_100px_rgba(0,0,0,0.1)]">
          <div className="text-center mb-12">
            <span className="text-subtitle-color text-xs font-semibold tracking-widest uppercase block mb-4">GET IN TOUCH</span>
            <h2 className="font-heading text-4xl lg:text-[2.8rem] font-normal">
              Have any <em className="italic font-normal">questions?</em>
            </h2>
          </div>
          
          <form className="mt-12" onSubmit={(e) => e.preventDefault()}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
              <div className="flex flex-col gap-2">
                <label className="text-[0.75rem] font-semibold uppercase tracking-[1px] text-gray-500">Name</label>
                <input 
                  type="text" 
                  placeholder="Jane Smith" 
                  className="p-4 bg-[rgba(230,240,238,0.5)] border-b border-transparent font-inherit text-base transition duration-300 focus:outline-none focus:bg-white/80 focus:border-accent-color"
                />
              </div>
              <div className="flex flex-col gap-2">
                <label className="text-[0.75rem] font-semibold uppercase tracking-[1px] text-gray-500">Email</label>
                <input 
                  type="email" 
                  placeholder="jane@framer.com" 
                  className="p-4 bg-[rgba(230,240,238,0.5)] border-b border-transparent font-inherit text-base transition duration-300 focus:outline-none focus:bg-white/80 focus:border-accent-color"
                />
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
              <div className="flex flex-col gap-2">
                <label className="text-[0.75rem] font-semibold uppercase tracking-[1px] text-gray-500">Event Date</label>
                <input 
                  type="date" 
                  className="p-4 bg-[rgba(230,240,238,0.5)] border-b border-transparent font-inherit text-base transition duration-300 focus:outline-none focus:bg-white/80 focus:border-accent-color w-full"
                />
              </div>
              <div className="flex flex-col gap-2">
                <label className="text-[0.75rem] font-semibold uppercase tracking-[1px] text-gray-500">Location</label>
                <select className="p-4 bg-[rgba(230,240,238,0.5)] border-b border-transparent font-inherit text-base transition duration-300 focus:outline-none focus:bg-white/80 focus:border-accent-color text-gray-600 cursor-pointer">
                  <option value="">Select Location</option>
                  <option value="jakarta">Jakarta</option>
                  <option value="bali">Bali</option>
                  <option value="bandung">Bandung</option>
                </select>
              </div>
            </div>
            <div className="flex flex-col gap-2 mb-8">
              <label className="text-[0.75rem] font-semibold uppercase tracking-[1px] text-gray-500">Message</label>
              <textarea 
                placeholder="Write your message here" 
                className="p-4 bg-[rgba(230,240,238,0.5)] border-b border-transparent font-inherit text-base transition duration-300 focus:outline-none focus:bg-white/80 focus:border-accent-color h-[150px] resize-none"
              ></textarea>
            </div>
            <div className="flex justify-center mt-4">
              <button 
                type="submit" 
                className="inline-block bg-accent-color text-white px-10 py-4 text-[0.9rem] font-semibold tracking-[2px] transition duration-300 hover:bg-text-color hover:-translate-y-1 block sm:inline-block w-full sm:w-auto text-center cursor-pointer border-none"
              >
                SUBMIT MESSAGE
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="py-16 border-t border-gray-200 text-center">
      <div className="font-heading text-3xl tracking-[4px] mb-4">BLUME</div>
      <p className="text-[0.8rem] text-gray-400 tracking-[1px]">
        &copy; 2026 Blume Photography. All rights reserved.
      </p>
    </footer>
  );
}

function App() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Services />
        <About />
        <FeaturedStories />
        <Pricing />
        <Contact />
      </main>
      <Footer />
    </>
  );
}

export default App;
