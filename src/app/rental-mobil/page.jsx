"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from 'next/link';
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
import { FaWhatsapp } from "react-icons/fa";


const WHATSAPP_NUMBER = "6285707736885";

const AnimatedCounter = ({ end, suffix = "", decimals = 0 }) => {
  const [count, setCount] = useState(0);
  const [hasAnimated, setHasAnimated] = useState(false);
  const countRef = React.useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated) {
          setHasAnimated(true);
          let start = 0;
          const duration = 2000;
          const totalFrames = duration / 16;
          const increment = end / totalFrames;
          
          const timer = setInterval(() => {
            start += increment;
            if (start >= end) {
              setCount(end);
              clearInterval(timer);
            } else {
              setCount(start);
            }
          }, 16);
        }
      },
      { threshold: 0.1 }
    );

    if (countRef.current) observer.observe(countRef.current);
    return () => observer.disconnect();
  }, [end, hasAnimated]);

  return (
    <span ref={countRef}>
      {count.toLocaleString(undefined, {
        minimumFractionDigits: decimals,
        maximumFractionDigits: decimals,
      })}
      {suffix}
    </span>
  );
};

export default function RentalMobil() {
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
      `Halo TransHub, saya mau tanya ketersediaan unit *${namaMobil}* untuk perjalanan saya...`
    );
    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${text}`, "_blank");
  };

  const trendVehicles = [
    { name: "Toyota Avanza", price: "350rb", img: "/toyota_avanza_side_view_studio_1774914982070.png", type: "Keluarga & Harian", seats: "7 Kursi", gear: "Matik/Manual" },
    { name: "Innova Zenix", price: "650rb", img: "/toyota_innova_zenix_side_view_studio_1774915004230.png", type: "Premium Business", seats: "7 Kursi", gear: "Matik" },
    { name: "Toyota Fortuner", price: "1.2jt", img: "/fortuner_premium_rent_1774912230358.png", type: "Layanan SUV", seats: "7 Kursi", gear: "Matik" },
    { name: "Toyota Alphard", price: "2.5jt", img: "/purwokerto_trans_hero_car_1774912209115.png", type: "VIP Executive", seats: "6 Kursi", gear: "Matik" },
    { name: "Toyota Veloz", price: "450rb", img: "/toyota_veloz_side_view_studio_1774917660577.png", type: "Modern Family", seats: "7 Kursi", gear: "Matik" },
    { name: "Toyota Hiace", price: "1.1jt", img: "/toyota_hiace_side_view_studio_rent_1774917681452.png", type: "Group Shuttle", seats: "14 Kursi", gear: "Manual" },
  ];

  return (
    <div className="bg-white text-slate-900 font-sans leading-relaxed overflow-x-hidden antialiased">
      {/* NAVBAR (Pill Design) */}
      <nav className={`fixed left-0 right-0 z-50 px-4 transition-all duration-400 ${isScrolled ? 'top-4' : 'top-5 md:top-10'}`}>
        <div className="max-w-[1200px] mx-auto bg-white/95 backdrop-blur-3xl rounded-full px-5 md:px-8 py-3 md:py-4 flex items-center justify-between shadow-lg border border-white/20">
            <Link href="/" className="text-[1.2rem] md:text-[1.4rem] font-extrabold text-slate-950 tracking-tighter">
                Trans<span className="text-blue-500">Hub</span>
            </Link>
            <div className="hidden lg:flex items-center gap-8">
                {['Armada', 'Layanan', 'Alur Sewa', 'Testimoni', 'FAQ'].map(item => (
                    <a key={item} href={`#${item.toLowerCase().replace(' ', '-')}`} className="text-[0.75rem] font-bold text-slate-500 uppercase tracking-wider hover:text-slate-950 transition-colors">
                        {item}
                    </a>
                ))}
            </div>
            <a href={`https://wa.me/${WHATSAPP_NUMBER}`} className="bg-blue-600 text-white px-5 md:px-7 py-2 md:py-2.5 rounded-full text-[0.75rem] font-bold hover:bg-blue-700 transition-all shadow-md">
                Chat Admin
            </a>
        </div>
      </nav>

      {/* HERO */}
      <section className="relative h-screen min-h-[600px] md:min-h-[800px] flex items-end pb-16 md:pb-32 overflow-hidden" id="home">
         {/* Background Image with Overlay */}
        <div className="absolute inset-0 z-0 scale-105 animate-pulse-slow">
            <Image 
                src="/purwokerto_trans_hero_car_1774912209115.png" 
                alt="Rental Mobil Purwokerto" 
                fill 
                className="object-cover brightness-[0.4]"
            />
            <div className="absolute inset-0 bg-linear-to-t from-slate-950/80 via-transparent to-transparent"></div>
        </div>

        <div className="max-w-[1200px] mx-auto px-5 w-full relative z-10 flex flex-col lg:flex-row justify-between items-end gap-10">
            <div className="max-w-[800px]">
                <h1 className="text-white text-[2.2rem] sm:text-[3.5rem] md:text-[5.5rem] font-black leading-[0.95] tracking-tight md:tracking-tighter mb-0">
                    RENTAL MOBIL <br /> PURWOKERTO.
                </h1>
            </div>
            <div className="max-w-[450px]">
                <p className="text-slate-300 text-[0.85rem] md:text-[0.95rem] leading-relaxed mb-6 md:mb-10">
                    Solusi transportasi terpercaya di Purwokerto & Banyumas. Unit bersih, wangi, dan driver profesional untuk kenyamanan perjalanan Anda.
                </p>
                <div className="flex flex-wrap gap-4">
                    <a href="#armada" className="bg-blue-600 text-white px-8 py-3.5 rounded-full text-[0.8rem] font-bold hover:bg-blue-700 transition-all shadow-xl flex items-center gap-2">
                        Pilih Armada <ArrowRight size={16} />
                    </a>
                    <a href="#layanan" className="bg-white/10 backdrop-blur-md border border-white/30 text-white px-8 py-3.5 rounded-full text-[0.8rem] font-bold hover:bg-white hover:text-slate-950 transition-all">
                        Layanan Kami
                    </a>
                </div>
            </div>
        </div>
      </section>

      {/* STATS */}
      <section className="relative z-20 mt-[-40px] md:mt-[-80px] px-5">
        <div className="max-w-[1200px] mx-auto overflow-hidden rounded-2xl md:rounded-[40px] shadow-2xl border border-white/10">
            <div className="grid grid-cols-2 lg:grid-cols-4 divide-x divide-slate-100 bg-white">
                {[
                    { label: "ARMADA TERSEDIA", val: 50, suffix: "+" },
                    { label: "CLIENT PUAS", val: 1000, suffix: "+" },
                    { label: "DRIVER PROFESIONAL", val: 20, suffix: "+" },
                    { label: "KOTA SERVICE", val: 15, suffix: "+" },
                ].map(item => (
                    <div key={item.label} className="py-8 md:py-12 flex flex-col items-center justify-center text-center">
                        <h3 className="text-[1.8rem] md:text-[3.5rem] font-black text-slate-950 mb-1 leading-none">
                            <AnimatedCounter end={item.val} suffix={item.suffix} />
                        </h3>
                        <p className="text-[0.6rem] md:text-[0.75rem] font-bold text-slate-400 tracking-[1px] md:tracking-[2px]">{item.label}</p>
                    </div>
                ))}
            </div>
        </div>
      </section>

      {/* ARMADA GRID */}
      <section className="py-20 md:py-32" id="armada">
        <div className="max-w-[1200px] mx-auto px-5">
            <div className="flex flex-col md:flex-row justify-between items-end gap-6 mb-12 md:mb-20">
                <div className="max-w-[600px]">
                    <span className="text-blue-600 font-black text-[0.75rem] uppercase tracking-[2px] mb-4 block">Our Fleet</span>
                    <h2 className="text-3xl md:text-[3.5rem] font-black leading-none tracking-tight text-slate-950">
                        UNIT TERPOPULER <br /> PILIHAN PELANGGAN.
                    </h2>
                </div>
                <a href="#all-fleet" className="flex items-center gap-2 text-[0.85rem] font-bold text-slate-950 hover:text-blue-600 transition-colors group">
                    Semua Armada <ArrowUpRight className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                </a>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 md:gap-8">
                {trendVehicles.map((v, i) => (
                    <div key={i} className="group bg-white border border-slate-100 rounded-3xl p-6 md:p-8 transition-all duration-400 hover:-translate-y-3 hover:shadow-2xl hover:border-blue-500 overflow-hidden flex flex-col">
                        <span className="text-[0.5rem] md:text-[0.6rem] font-black text-blue-600 uppercase tracking-widest mb-2 block">{v.type}</span>
                        <h3 className="text-[1.1rem] md:text-[1.3rem] font-black text-slate-950 mb-6 leading-tight">{v.name}</h3>
                        
                        <div className="relative h-40 md:h-48 mb-8">
                            <Image 
                                src={v.img} 
                                alt={v.name} 
                                fill 
                                className="object-contain transition-transform duration-500 group-hover:scale-110"
                            />
                        </div>

                        <div className="flex gap-4 border-t border-slate-50 pt-6 mb-8 mt-auto">
                            <div className="flex items-center gap-1.5 text-[0.65rem] md:text-[0.75rem] font-bold text-slate-400">
                                <Users size={14} className="text-blue-500" /> {v.seats}
                            </div>
                            <div className="flex items-center gap-1.5 text-[0.65rem] md:text-[0.75rem] font-bold text-slate-400">
                                <Disc size={14} className="text-blue-500" /> {v.gear}
                            </div>
                        </div>

                        <div className="flex justify-between items-center bg-slate-50 group-hover:bg-blue-50/50 rounded-2xl p-4 transition-colors">
                            <div className="text-[1rem] md:text-[1.2rem] font-black text-slate-950">
                                {v.price} <span className="text-[0.7rem] font-medium text-slate-400">/24 JAM</span>
                            </div>
                            <button 
                                onClick={() => handleBooking(v.name)}
                                className="w-10 h-10 bg-white shadow-md rounded-full flex items-center justify-center text-slate-400 group-hover:bg-blue-600 group-hover:text-white transition-all transform group-hover:rotate-45"
                            >
                                <ArrowUpRight size={20} />
                            </button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
      </section>

      {/* CTA SECTION */}
      <section className="py-24 bg-slate-950 text-white text-center rounded-[40px] md:rounded-[80px] mx-4 md:mx-10 mb-20 overflow-hidden relative">
        <div className="absolute inset-0 opacity-10 pointer-events-none">
            <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(#fff_1px,transparent_1px)] [background-size:30px_30px]"></div>
        </div>
        <div className="max-w-[800px] mx-auto px-5 relative z-10">
            <h2 className="text-[1.8rem] md:text-[4rem] font-black leading-tight tracking-tighter mb-6">
                Butuh Perjalanan <br /> Sekarang Juga?
            </h2>
            <p className="text-slate-400 text-lg mb-12 max-w-[600px] mx-auto">
                Admin kami standby 24/7 untuk memastikan kebutuhan armada Anda terpenuhi kapanpun dibutuhkan.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
                <a href={`https://wa.me/${WHATSAPP_NUMBER}`} className="bg-emerald-500 hover:bg-emerald-600 text-white px-10 py-5 rounded-full font-black text-lg flex items-center justify-center gap-3 transition-all transform hover:-translate-y-1 shadow-emerald">
                    <FaWhatsapp size={24} /> Chat WhatsApp
                </a>
                <a href="tel:+6285707736885" className="bg-white/10 backdrop-blur-md border border-white/20 hover:bg-white text-white hover:text-slate-950 px-10 py-5 rounded-full font-black text-lg flex items-center justify-center gap-3 transition-all transform hover:-translate-y-1">
                    <Phone size={24} /> Hubungi Sales
                </a>
            </div>
        </div>
      </section>

      {/* REUSABLE FOOTER */}
      <footer className="bg-white border-t border-slate-100 pt-20 pb-10">
        <div className="max-w-[1200px] mx-auto px-5">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-20">
                <div className="lg:col-span-2">
                    <Link href="/" className="text-2xl font-black text-slate-950 tracking-tighter mb-6 block">
                        Trans<span className="text-blue-500">Hub</span>
                    </Link>
                    <p className="text-slate-500 max-w-sm mb-8 leading-relaxed">
                        Penyedia jasa transportasi terkemuka di Purwokerto dengan komitmen memberikan pelayanan kelas satu untuk setiap pelanggan kami.
                    </p>
                    <div className="flex gap-4">
                        {[1, 2, 3].map(i => (
                            <div key={i} className="w-10 h-10 rounded-full bg-slate-50 flex items-center justify-center text-slate-400 hover:bg-blue-600 hover:text-white transition-all cursor-pointer">
                                <Search size={18} />
                            </div>
                        ))}
                    </div>
                </div>
                <div>
                    <h4 className="text-[0.8rem] font-black text-slate-950 uppercase tracking-widest mb-6">Link Cepat</h4>
                    <ul className="flex flex-col gap-4">
                        {['Tentang Kami', 'Armada Kami', 'Layanan Utama', 'Kontak Kami'].map(item => (
                            <li key={item}>
                                <a href="#" className="text-slate-500 hover:text-blue-600 transition-colors text-[0.9rem] font-medium">{item}</a>
                            </li>
                        ))}
                    </ul>
                </div>
                <div>
                    <h4 className="text-[0.8rem] font-black text-slate-950 uppercase tracking-widest mb-6">Kantor Pusat</h4>
                    <ul className="flex flex-col gap-4 text-[0.9rem] text-slate-500">
                        <li className="flex gap-2">
                            <MapPin className="text-blue-500 shrink-0" size={18} />
                            <span>Jl. Jenderal Sudirman No. 123, Purwokerto, Jawa Tengah</span>
                        </li>
                        <li className="flex gap-2">
                            <Phone className="text-blue-500 shrink-0" size={18} />
                            <span>+62 857-0773-6885</span>
                        </li>
                    </ul>
                </div>
            </div>
            <div className="pt-10 border-t border-slate-50 flex flex-col md:flex-row justify-between items-center gap-6">
                <p className="text-slate-400 text-sm">© 2026 TransHub Rental Mobil. All rights reserved.</p>
                <div className="flex gap-8 text-sm font-bold text-slate-400">
                    <a href="#" className="hover:text-blue-600">Privacy Policy</a>
                    <a href="#" className="hover:text-blue-600">Terms of Service</a>
                </div>
            </div>
        </div>
      </footer>
    </div>
  );
}
