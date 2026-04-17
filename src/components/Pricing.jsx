'use client';

import { motion } from 'framer-motion';
import { CheckCircle2, MessageCircle, CheckCheck, Check, TrendingUp, Zap } from 'lucide-react';
import { FaWhatsapp } from 'react-icons/fa6';

const PriceCard = ({ id, tier, amount, desc, features, estimate, isFeatured, specialTag, ctaLink }) => (
    <motion.div 
        variants={{
            hidden: { opacity: 0, y: 30 },
            visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] } }
        }}
        whileHover={{ 
            y: -10, 
            backgroundColor: "rgba(255, 255, 255, 0.15)",
            boxShadow: isFeatured ? "0 25px 50px -12px rgba(255, 255, 255, 0.15)" : "0 20px 25px -5px rgba(0, 0, 0, 0.1)"
        }}
        className={`relative flex flex-col backdrop-blur-3xl border transition-all duration-500 rounded-3xl p-8 md:p-10 h-full ${
            isFeatured 
            ? 'bg-white/20 border-white/40 shadow-[0_0_40px_-10px_rgba(255,255,255,0.3)] z-10' 
            : 'bg-white/10 border-white/10 shadow-xl'
        }`} id={id}
    >
        {isFeatured && (
            <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-blue-500 text-white text-[0.75rem] font-black uppercase tracking-[2px] px-6 py-2 rounded-full shadow-lg border-2 border-white/20 whitespace-nowrap">
                Pilihan Terbaik
            </div>
        )}

        <div className="mb-8">
            <div className="flex justify-between items-start mb-6">
                <h3 className="text-xl md:text-2xl font-display font-bold text-white">{tier}</h3>
                {specialTag && (
                    <span className={`text-[0.65rem] font-black uppercase tracking-[1px] px-3 py-1.5 rounded-lg ${isFeatured ? 'bg-white/20 text-white' : 'bg-blue-500/30 text-blue-200'}`}>
                        {specialTag}
                    </span>
                )}
            </div>
            
            <div className="flex items-baseline gap-2 mb-4">
                <span className="text-[1.1rem] font-bold text-blue-300">Rp</span>
                <span className="text-5xl md:text-6xl font-display font-black text-white tracking-tight">{amount}</span>
            </div>
            <p className="text-[0.95rem] text-blue-100/80 leading-relaxed font-medium">{desc}</p>
        </div>
        
        <div className="space-y-4 flex-1 mb-10">
            {features.map((feature, index) => (
                <div key={index} className="flex items-start gap-3.5 group/item">
                    <div className="flex-shrink-0 w-6 h-6 rounded-full bg-blue-400/20 flex items-center justify-center mt-0.5 border border-white/10 group-hover/item:bg-blue-400/40 transition-colors">
                        <Check size={12} className="text-white" strokeWidth={4} />
                    </div>
                    <span className="text-[0.92rem] text-white/90 leading-relaxed">{feature}</span>
                </div>
            ))}
        </div>

        <div className="pt-8 border-t border-white/10 mt-auto flex flex-col gap-6">
            <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-lg bg-white/5 flex items-center justify-center">
                    <TrendingUp size={16} className="text-blue-300" />
                </div>
                <div className="text-left">
                    <span className="block text-[0.7rem] uppercase tracking-wider text-blue-200/60 font-bold">Waktu Pengerjaan</span>
                    <strong className="text-[0.9rem] text-white font-semibold">{estimate}</strong>
                </div>
            </div>

            <a 
                href={ctaLink} 
                target="_blank" 
                rel="noopener noreferrer" 
                className={`group relative flex items-center justify-center py-4 px-8 rounded-2xl font-black text-[1rem] transition-all duration-300 overflow-hidden ${
                    isFeatured 
                    ? 'bg-white text-blue-900 shadow-2xl hover:scale-[1.02] hover:shadow-white/20 active:scale-95' 
                    : 'bg-white/10 border-2 border-white/20 text-white hover:bg-white/20 hover:border-white/40 active:scale-95'
                }`}
            >
                <span className="relative z-10 flex items-center gap-2">
                    Mulai Konsultasi <Zap size={18} className={isFeatured ? "text-blue-600" : "text-white"} fill="currentColor" />
                </span>
            </a>
        </div>
    </motion.div>
);



const Pricing = () => {
    const plans = [
        {
            id: "price-landing",
            tier: "Landing Page",
            specialTag: "Paling Praktis",
            amount: "600rb",
            desc: "Solusi cepat untuk promosi produk atau jasa tunggal.",
            features: [
                "1 Halaman Desain Modern",
                "Mobile Responsive High-Speed",
                "Integrasi WhatsApp Chat",
                "Free Domain & Hosting (1st Year)",
                "Basic SEO Optimization",
                "3x Revisi Desain"
            ],
            estimate: "3–5 hari kerja",
            isFeatured: false,
            ctaLink: "https://wa.me/6285707736885"
        },
        {
            id: "price-company",
            tier: "Company Profile",
            specialTag: "Paling Populer",
            amount: "2.5jt",
            desc: "Branding profesional untuk perusahaan & instansi.",
            features: [
                "Max 7 Halaman Custom",
                "Desain Premium & Eksklusif",
                "Full Responsive across devices",
                "Domain + Hosting High Specs",
                "Google Analytics & SEO Setup",
                "5x Revisi Desain"
            ],
            estimate: "7–10 hari kerja",
            isFeatured: true,
            ctaLink: "https://wa.me/6285707736885"
        },
        {
            id: "price-shop",
            tier: "Sistem Toko Online",
            specialTag: "Paling Lengkap",
            amount: "4.5jt",
            desc: "Platform jualan online dengan manajemen mandiri.",
            features: [
                "Katalog Produk & Keranjang",
                "Order WA / Payment Gateway",
                "Dashboard Admin & Inventori",
                "Mobile Shop Responsive",
                "Free Pelatihan Admin",
                "Support Teknis 1 Bulan"
            ],
            estimate: "10–14 hari kerja",
            isFeatured: false,
            ctaLink: "https://wa.me/6285707736885"
        }
    ];

    return (
        <section className="min-h-screen flex items-center py-24 bg-linear-to-br from-blue-600 via-blue-800 to-blue-950 relative overflow-hidden" id="pricing">
            {/* Design patterns */}
            <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
                <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-400 rounded-full blur-[140px] -translate-y-1/2 translate-x-1/3"></div>
                <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-blue-500 rounded-full blur-[160px] translate-y-1/3 -translate-x-1/4"></div>
            </div>



            <div className="max-w-[1200px] mx-auto px-6 relative z-10 w-full">
                <motion.div 
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="text-center max-w-[660px] mx-auto mb-16"
                >
                    <span className="inline-block text-[0.82rem] font-bold uppercase tracking-[1.5px] px-4 py-1.5 rounded-full mb-4 bg-white/20 text-white">
                        Investasi Bisnis
                    </span>
                    <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4 text-white leading-[1.15]">
                        Investasi Website Terjangkau <br />untuk Pertumbuhan Bisnis Anda
                    </h2>
                    <p className="text-lg text-blue-100 leading-relaxed">
                        Kami menghadirkan kualitas premium dengan harga yang kompetitif bagi pelaku usaha di Purwokerto & sekitarnya.
                    </p>

                </motion.div>


                <motion.div 
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ staggerChildren: 0.1 }}
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16 items-stretch"
                >
                    {plans.map(plan => (
                        <PriceCard key={plan.id} {...plan} />
                    ))}
                </motion.div>

                {/* Combined Custom & Help Section */}
                <motion.div 
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="bg-blue-900/40 backdrop-blur-md border border-white/10 rounded-3xl p-8 md:p-12 text-white shadow-2xl overflow-hidden relative group"
                >
                    <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 group-hover:scale-150 transition-transform duration-700"></div>
                    
                    <div className="flex flex-col lg:flex-row gap-10 items-center relative z-10">
                        <div className="flex-1 text-left">
                            <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center text-2xl mb-6">
                                <MessageCircle size={28} />
                            </div>
                            <h3 className="text-2xl font-bold mb-4">Bingung Memilih atau Butuh Custom Website?</h3>
                            <p className="text-white/80 leading-relaxed text-[1.1rem]">Kami sangat terbuka untuk diskusi jika Anda membutuhkan desain berbeda, fitur tambahan, atau ingin menanyakan paket yang paling sesuai dengan budget bisnis Anda.</p>
                        </div>
                        <div className="flex flex-col gap-8 w-full lg:w-auto overflow-hidden">
                            <div className="flex flex-wrap gap-4 text-[0.85rem] font-semibold">
                                {["Custom Feature", "Nego Budget", "Konsultasi 100% Gratis"].map(tag => (
                                    <span key={tag} className="flex items-center gap-1.5 bg-white/10 px-4 py-2 rounded-full border border-white/20 whitespace-nowrap">
                                        <CheckCheck size={14} /> {tag}
                                    </span>
                                ))}
                            </div>
                            <a href="https://wa.me/6285707736885" className="bg-white text-blue-700 px-8 py-4 rounded-full font-bold text-[1.05rem] flex items-center justify-center gap-2 shadow-xl hover:-translate-y-1 hover:bg-blue-50 transition-all duration-300">
                                Konsultasi via WhatsApp <FaWhatsapp size={20} />
                            </a>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default Pricing;
