"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from 'next/link';

export default function TourTravel() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navLinks = [
        { name: 'Tentang Kami', href: '#about' },
        { name: 'Destinasi', href: '#destinations' },
        { name: 'Paket Wisata', href: '#packages' },
        { name: 'Kontak', href: '#contact' },
    ];

    const destinations = [
        { title: "Pelukan Alam Tropis", desc: "Kembali menyatu dengan asrinya pedesaan dan lanskap hijau pegunungan.", img: "/tour_dest_nature_1775114387747.png", offset: "0" },
        { title: "Sisi Metropolitan", desc: "Nikmati gemerlap dan kenyamanan fasilitas bintang 5 dari pusat kota modern.", img: "/tour_about_img_1775114373261.png", offset: "translate-y-8" },
        { title: "Kekayaan Tradisi", desc: "Berinteraksi langsung dengan adat istiadat dan kearifan masyarakat lokal.", img: "/tour_package_bali_1775114405116.png", offset: "-translate-y-5" },
        { title: "Jejak Sejarah", desc: "Susuri situs purba, candi megah, dan sejarah yang menjadi pondasi peradaban.", img: "/tour_dest_nature_1775114387747.png", offset: "translate-y-3" },
    ];

    const packages = [
        { title: "Eksotisme Raja Ampat Menyeluruh", price: "6.800.000", duration: "5 Hari / 4 Malam", img: "/tour_blog_1_1775116463552.png" },
        { title: "Pesona Spiritual & Pantai Bali", price: "3.200.000", duration: "4 Hari / 3 Malam", img: "/tour_package_bali_1775114405116.png" },
        { title: "Petualangan Alam Liar Komodo", price: "5.500.000", duration: "4 Hari / 3 Malam", img: "/tour_dest_nature_1775114387747.png" },
        { title: "Menyapa Mentari di Puncak Bromo", price: "2.100.000", duration: "3 Hari / 2 Malam", img: "/tour_about_img_1775114373261.png" },
    ];

    return (
        <div className="bg-white text-slate-900 font-sans leading-relaxed selection:bg-indigo-100 selection:text-indigo-900 overflow-x-hidden antialiased">
            {/* Header */}
            <header className={`fixed top-0 left-0 right-0 z-[100] transition-all duration-500 ${isScrolled ? 'bg-white/80 backdrop-blur-xl shadow-sm py-4' : 'bg-transparent py-6'}`}>
                <div className="max-w-[1400px] mx-auto px-6 flex items-center justify-between">
                    <Link href="/" className={`text-2xl font-black tracking-tighter transition-colors ${isScrolled ? 'text-indigo-600' : 'text-white'}`}>
                        NusaTrek
                    </Link>
                    
                    <div className="hidden lg:flex items-center gap-10">
                        {navLinks.map(link => (
                            <a key={link.name} href={link.href} className={`text-[0.85rem] font-bold uppercase tracking-widest transition-colors ${isScrolled ? 'text-slate-600 hover:text-indigo-600' : 'text-white/80 hover:text-white'}`}>
                                {link.name}
                            </a>
                        ))}
                    </div>
                    
                    <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="lg:hidden flex flex-col gap-1.5 p-2 group">
                        <span className={`w-6 h-0.5 rounded-full transition-all ${isScrolled ? 'bg-slate-900' : 'bg-white'}`}></span>
                        <span className={`w-6 h-0.5 rounded-full transition-all ${isScrolled ? 'bg-slate-900' : 'bg-white'}`}></span>
                        <span className={`w-4 h-0.5 rounded-full self-end transition-all ${isScrolled ? 'bg-slate-900' : 'bg-white'}`}></span>
                    </button>
                </div>
            </header>

            {/* Mobile Drawer */}
            <div className={`fixed inset-0 z-[1000] lg:hidden transition-all duration-500 ${isMenuOpen ? 'visible' : 'invisible'}`}>
                <div className={`absolute inset-0 bg-slate-950/40 backdrop-blur-sm transition-opacity duration-500 ${isMenuOpen ? 'opacity-100' : 'opacity-0'}`} onClick={() => setIsMenuOpen(false)}></div>
                <div className={`absolute top-0 right-0 h-full w-[300px] bg-white p-10 flex flex-col gap-8 shadow-2xl transition-transform duration-500 ${isMenuOpen ? 'translate-x-0' : 'translate-x-full'}`}>
                    <button onClick={() => setIsMenuOpen(false)} className="self-end text-slate-400 hover:text-slate-900 transition-colors">
                        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" /></svg>
                    </button>
                    {navLinks.map(link => (
                        <a key={link.name} href={link.href} className="text-xl font-black text-slate-900 hover:text-indigo-600 transition-colors" onClick={() => setIsMenuOpen(false)}>
                            {link.name}
                        </a>
                    ))}
                </div>
            </div>

            {/* Hero Section */}
            <section className="relative h-screen min-h-[700px] flex items-center overflow-hidden">
                <div className="absolute inset-0">
                    <Image 
                        src="/tour_hero_bg_1775114357325.png" 
                        alt="NusaTrek Hero" 
                        fill 
                        className="object-cover scale-105 animate-pulse-slow" 
                        priority
                    />
                    <div className="absolute inset-0 bg-slate-950/40"></div>
                </div>
                
                <div className="max-w-[1400px] mx-auto px-6 relative z-10 w-full">
                    <div className="max-w-[800px] text-white">
                        <h2 className="text-[2.5rem] md:text-[5rem] font-black leading-[0.95] tracking-tighter mb-8">
                            Temukan Makna Baru<br/>Dalam Setiap Jejak
                        </h2>
                        <p className="text-xl text-white/80 max-w-xl mb-10 leading-relaxed">
                            Eksplorasi yang dirancang khusus untuk kenangan mendalam, bukan sekadar singgah.
                        </p>
                        <button className="inline-flex items-center gap-4 bg-indigo-600 hover:bg-indigo-700 text-white px-10 py-5 rounded-full font-black text-lg transition-all transform hover:-translate-y-1 shadow-indigo-lg">
                            Mulai Petualangan <span className="text-2xl leading-none">↗</span>
                        </button>
                        
                        <div className="mt-20 flex flex-wrap gap-8 items-center border-t border-white/10 pt-10">
                            {[
                                { icon: "star-outline", text: "Bintang 4.9 dari Ribuan Pelancong" },
                                { icon: "people-outline", text: "50rb+ Klien Puas" },
                                { icon: "logo-instagram", text: "Komunitas Travel Terbesar" }
                            ].map((stat, i) => (
                                <div key={i} className="flex items-center gap-3 text-white/70 text-sm font-bold uppercase tracking-widest">
                                    <div className="text-indigo-400 text-xl"><ion-icon name={stat.icon}></ion-icon></div>
                                    <span>{stat.text}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* About Section */}
            <section id="about" className="py-24 bg-white relative overflow-hidden">
                <div className="max-w-[1200px] mx-auto px-6">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
                        <div>
                            <div className="flex items-center gap-3 text-indigo-600 font-black text-[0.75rem] uppercase tracking-[2px] mb-6">
                                <ion-icon name="information-circle-outline" className="text-xl"></ion-icon>
                                Visi Kami
                            </div>
                            <h2 className="text-3xl md:text-5xl font-black tracking-tight text-slate-900 leading-[1.1] mb-8">Merajut Kenangan Indah, Disusun Secara Personal</h2>
                            <p className="text-lg text-slate-500 leading-relaxed mb-10">
                                Tim ahli kami berdedikasi menciptakan momen liburan di luar standar biasa. Kami menghadirkan harmoni yang pas 
                                antara kenyamanan premium, petualangan baru, dan interaksi yang membekas di hati pada setiap rute.
                            </p>
                            <button className="inline-flex items-center gap-3 bg-slate-900 hover:bg-slate-800 text-white px-8 py-4 rounded-full font-black text-[0.9rem] transition-all transform hover:-translate-y-1">
                                Pelajari Lebih Jauh ↗
                            </button>
                        </div>
                        <div className="relative h-[500px] sm:h-[600px] flex items-center justify-center">
                            <div className="relative w-[300px] h-[400px] sm:w-[400px] sm:h-[550px] rounded-[40px] overflow-hidden shadow-2xl z-10 translate-x-10 translate-y-[-20px]">
                                <Image 
                                    src="/tour_about_img_1775114373261.png" 
                                    alt="Traveler" 
                                    fill 
                                    className="object-cover"
                                />
                            </div>
                            <div className="absolute bottom-10 left-0 w-[200px] h-[260px] sm:w-[280px] sm:h-[350px] rounded-[30px] overflow-hidden shadow-2xl border-4 border-white z-20 translate-x-[-20px]">
                                <Image 
                                    src="/tour_dest_nature_1775114387747.png" 
                                    alt="Valley" 
                                    fill 
                                    className="object-cover"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Destinations */}
            <section id="destinations" className="py-24 bg-slate-50">
                <div className="max-w-[1280px] mx-auto px-6">
                    <div className="text-center max-w-[800px] mx-auto mb-20">
                        <div className="flex items-center justify-center gap-3 text-indigo-600 font-black text-[0.75rem] uppercase tracking-[2px] mb-6">
                            <ion-icon name="airplane-outline" className="text-xl"></ion-icon>
                            Pilihan Tematik
                        </div>
                        <h2 className="text-3xl md:text-5xl font-black tracking-tight text-slate-900 leading-tight">Keajaiban Alam & Pesona Budaya dalam Satu Genggaman</h2>
                    </div>
                    
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                        {destinations.map((dest, i) => (
                            <div key={i} className={`group bg-white rounded-[32px] p-6 transition-all duration-500 hover:bg-slate-900 hover:text-white hover:shadow-2xl ${dest.offset}`}>
                                <div className="relative h-64 rounded-2xl overflow-hidden mb-8">
                                    <Image 
                                        src={dest.img} 
                                        alt={dest.title} 
                                        fill 
                                        className="object-cover transition-transform duration-700 group-hover:scale-110 group-hover:rotate-3"
                                    />
                                </div>
                                <h3 className="text-xl font-black mb-4 transition-colors group-hover:text-white">{dest.title}</h3>
                                <p className="text-slate-500 group-hover:text-slate-400 text-[0.9rem] leading-relaxed">{dest.desc}</p>
                            </div>
                        ))}
                    </div>

                    <div className="mt-24 pt-10 border-t border-slate-200 flex flex-col md:flex-row items-center justify-between gap-8">
                        <span className="text-slate-400 font-bold uppercase tracking-widest text-sm">Masih banyak pilihan destinasi menarik menanti Anda</span>
                        <div className="hidden md:block flex-1 h-px bg-slate-200 mx-10"></div>
                        <button className="bg-slate-900 hover:bg-slate-800 text-white px-10 py-5 rounded-full font-black text-[0.95rem] transition-all transform hover:-translate-y-1 whitespace-nowrap">
                            Telusuri Promo ↗
                        </button>
                    </div>
                </div>
            </section>

            {/* Packages */}
            <section id="packages" className="py-24 bg-white">
                <div className="max-w-[1280px] mx-auto px-6">
                    <div className="text-center max-w-[800px] mx-auto mb-20">
                        <div className="flex items-center justify-center gap-3 text-indigo-600 font-black text-[0.75rem] uppercase tracking-[2px] mb-6">
                            <ion-icon name="briefcase-outline" className="text-xl"></ion-icon>
                            Penawaran Eksklusif
                        </div>
                        <h2 className="text-3xl md:text-5xl font-black tracking-tight text-slate-900 leading-tight">Paket Liburan Pilihan Sesuai Gaya Anda</h2>
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {packages.map((pkg, i) => (
                            <div key={i} className="group cursor-pointer">
                                <div className="relative h-[480px] rounded-[40px] overflow-hidden mb-6">
                                    <Image 
                                        src={pkg.img} 
                                        alt={pkg.title} 
                                        fill 
                                        className="object-cover transition-transform duration-700 group-hover:scale-110"
                                    />
                                    <div className="absolute inset-0 bg-linear-to-t from-slate-900/90 via-transparent to-transparent"></div>
                                    <div className="absolute top-6 left-6 bg-white/10 backdrop-blur-md border border-white/20 text-white text-[0.7rem] font-black uppercase tracking-widest px-4 py-2 rounded-full">
                                        {pkg.duration}
                                    </div>
                                    <div className="absolute bottom-8 left-8 right-8">
                                        <h3 className="text-xl font-black text-white mb-2 leading-tight group-hover:text-indigo-300 transition-colors">{pkg.title}</h3>
                                        <p className="text-white/60 text-sm font-bold">Mulai <span className="text-indigo-400 text-lg">Rp {pkg.price}</span> / Orang</p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                    
                    <div className="mt-20 flex flex-col items-center">
                        <p className="text-slate-400 font-bold mb-8 uppercase tracking-widest text-sm text-center">Konsultasikan bujet untuk paket kustom</p>
                        <button className="bg-slate-900 hover:bg-slate-800 text-white px-12 py-5 rounded-full font-black text-[1rem] transition-all transform hover:-translate-y-1 shadow-2xl">
                            Cek Promo Lengkap ↗
                        </button>
                    </div>
                </div>
            </section>

            {/* CTA & Footer */}
            <section className="relative py-32 overflow-hidden bg-slate-950">
                <div className="absolute inset-0 z-0">
                    <Image 
                        src="/tour_cta_bg_1775116497643.png" 
                        alt="CTA Background" 
                        fill 
                        className="object-cover opacity-30 scale-105"
                    />
                    <div className="absolute inset-0 bg-slate-950/60"></div>
                </div>
                
                <div className="max-w-[1400px] mx-auto px-6 relative z-10 text-center">
                    <div className="max-w-[900px] mx-auto text-white">
                        <h2 className="text-[2.2rem] md:text-[4.5rem] font-black leading-[1.1] tracking-tighter mb-10">Momen Istimewa Harus Terencana Secara Premium</h2>
                        <p className="text-xl text-white/60 mb-14 max-w-2xl mx-auto leading-relaxed">
                            Serahkan seluruh proses perizinan, reservasi, hingga keamanan pada kami. Anda berhak tenang.
                        </p>
                        <button className="bg-indigo-600 hover:bg-indigo-700 text-white px-12 py-6 rounded-full font-black text-xl transition-all transform hover:-translate-y-1 shadow-indigo-lg">
                            Atur Jadwal Konsultasi ↗
                        </button>
                    </div>
                    
                    <div className="mt-32 overflow-hidden py-10 border-y border-white/10">
                        <div className="text-white/30 text-2xl font-black italic uppercase tracking-[0.2em] whitespace-nowrap animate-marquee flex gap-20 items-center">
                            <span>✈️ Jadwal Fleksibel</span> <span>🌏 Kru Fotografer</span> <span>🏝 Rute Privat</span> <span>📄 Pengurusan Visa</span> <span>🏨 Akses Resort Rahasia</span> <span>🚗 Transportasi Helikopter/Yacht</span>
                            <span>✈️ Jadwal Fleksibel</span> <span>🌏 Kru Fotografer</span> <span>🏝 Rute Privat</span> <span>📄 Pengurusan Visa</span> <span>🏨 Akses Resort Rahasia</span> <span>🚗 Transportasi Helikopter/Yacht</span>
                        </div>
                    </div>
                </div>
            </section>
            
            <footer className="bg-slate-950 border-t border-white/5 py-20">
                <div className="max-w-[1400px] mx-auto px-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16">
                    <div>
                        <Link href="/" className="text-2xl font-black text-white tracking-tighter mb-8 block">NusaTrek</Link>
                        <p className="text-white/40 leading-relaxed max-w-[280px]">Membangun perjalanan yang bermakna di setiap jejak langkah Anda di Nusantara.</p>
                    </div>
                    {[
                        { title: "Navigasi", links: ["Beranda", "Tentang Kami", "Paket Tur", "Pesan Perjalanan"] },
                        { title: "Informasi", links: ["Blog", "Kebijakan Privasi", "Syarat & Ketentuan"] },
                        { title: "Lainnya", links: ["FAQ", "Karir"] }
                    ].map(col => (
                        <div key={col.title}>
                            <h4 className="text-[0.7rem] font-black uppercase tracking-widest text-indigo-500 mb-8">{col.title}</h4>
                            <div className="flex flex-col gap-4">
                                {col.links.map(link => (
                                    <a key={link} href="#" className="text-white/50 hover:text-white transition-colors text-[0.95rem] font-bold">{link}</a>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </footer>
        </div>
    );
}
