import React from 'react';
import { MessageCircle } from 'lucide-react';
import { FaWhatsapp } from 'react-icons/fa6';

const CTA = () => {
    return (
        <section className="py-24 bg-blue-600 relative overflow-hidden" id="contact">
            {/* Background pattern */}
            <div className="absolute inset-0 opacity-10 pointer-events-none">
                <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(#fff_1px,transparent_1px)] [background-size:20px_20px]"></div>
            </div>

            <div className="max-w-[1200px] mx-auto px-6 relative z-10 text-center">
                <div className="max-w-[800px] mx-auto">
                    <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight text-white leading-tight mb-6">
                        Siap Membawa Bisnis Anda <br />ke Level Selanjutnya?
                    </h2>
                    <p className="text-xl text-white/80 leading-relaxed mb-10">
                        Konsultasikan kebutuhan digital Anda secara gratis. Kami carikan solusi terbaik sesuai budget Anda.
                    </p>
                    <div className="flex justify-center">
                        <a 
                            href="https://wa.me/6285707736885" 
                            className="inline-flex items-center gap-2.5 px-10 py-4 bg-white text-blue-700 rounded-full font-bold text-[1.1rem] shadow-2xl hover:bg-blue-50 hover:-translate-y-1 transition-all duration-300"
                            id="ctaWhatsapp" 
                            target="_blank" 
                            rel="noopener noreferrer"
                        >
                            <FaWhatsapp size={24} />
                            Chat via WhatsApp
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default CTA;
