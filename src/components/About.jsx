import React from 'react';
import { Info, CheckCircle2, Rocket, Headset, ShieldCheck, Palette } from 'lucide-react';

const About = () => {
    return (
        <section className="min-h-screen flex items-center py-24 bg-white relative overflow-hidden" id="about">
            <div className="max-w-[1200px] mx-auto px-6 w-full">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
                    {/* Left Side: Text Story */}
                    <div className="flex flex-col items-start gap-6">
                        <span className="inline-block text-[0.82rem] font-bold uppercase tracking-[1.5px] px-4 py-1.5 rounded-full mb-2 bg-blue-50 text-blue-600">
                            <Info size={14} className="inline mr-1" /> Tentang KalanaLabs
                        </span>
                        <h2 className="text-[1.8rem] md:text-[2.2rem] font-display font-extrabold text-blue-900 mb-4 leading-tight">
                            Partner Digital untuk <br />Pertumbuhan Bisnis Anda
                        </h2>
                        <div className="flex flex-col gap-4">
                             <p className="text-lg text-gray-500 leading-relaxed">
                                KalanaLabs adalah studio kreatif digital yang berbasis di Purwokerto. Kami berfokus pada penyediaan solusi website yang profesional, modern, dan tentunya terjangkau bagi UMKM serta pelaku bisnis lokal.
                            </p>
                            <p className="text-lg text-gray-500 leading-relaxed">
                                Kami percaya setiap bisnis berhak memiliki kehadiran digital yang kuat. Kami menggabungkan desain estetis dengan performa tinggi untuk membantu brand Anda bersaing di era digital.
                            </p>
                        </div>
                        <div className="mt-4">
                            <a href="https://wa.me/6285707736885" className="inline-flex items-center gap-2 px-8 py-3.5 bg-blue-600 text-white rounded-full font-sans font-semibold text-[0.95rem] shadow-[0_8px_30px_rgba(37,99,235,0.25)] hover:bg-blue-700 hover:-translate-y-0.5 transition-all duration-300">
                                Konsultasi Sekarang
                            </a>
                        </div>
                    </div>

                    {/* Right Side: Highlight Features (Stats Grid) */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                        {[
                            { icon: <Rocket size={24} />, title: "Pengerjaan Cepat", desc: "Tepat Waktu & Efisien" },
                            { icon: <Headset size={24} />, title: "Support Responsif", desc: "Konsultasi 24/7" },
                            { icon: <ShieldCheck size={24} />, title: "Kualitas Terjamin", desc: "Standar Industri" },
                            { icon: <Palette size={24} />, title: "Desain Custom", desc: "Unik & Eksklusif" }
                        ].map((item, i) => (
                            <div key={i} className="bg-blue-50/50 border border-blue-100 rounded-2xl p-6 flex flex-col gap-4 transition-all duration-300 hover:bg-white hover:shadow-xl hover:-translate-y-1">
                                <div className="w-12 h-12 bg-white rounded-xl shadow-sm text-blue-600 flex items-center justify-center text-xl">
                                    {item.icon}
                                </div>
                                <div>
                                    <strong className="block text-[1.05rem] text-gray-900 font-bold mb-1">{item.title}</strong>
                                    <span className="block text-[0.85rem] text-gray-500 font-medium">{item.desc}</span>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;
