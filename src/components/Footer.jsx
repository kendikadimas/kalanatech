import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

const Footer = () => {
    return (
        <footer className="bg-[#0b1120] text-white py-16">
            <div className="max-w-[1200px] mx-auto px-6">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
                    <div className="lg:col-span-2">
                        <Link href="/" className="flex items-center gap-2.5 font-display text-[1.4rem] font-extrabold mb-6">
                            <div className="relative h-8 w-8">
                                <Image 
                                    src="/logo.png" 
                                    alt="Logo" 
                                    fill
                                    className="object-contain"
                                />
                            </div>
                            KalanaLabs
                        </Link>
                        <p className="text-white/60 leading-relaxed max-w-[320px]">
                            Partner digital terpercaya untuk membantu bisnis Anda tumbuh dan berkembang di era digital.
                        </p>
                    </div>
                    <div>
                        <h4 className="text-lg font-bold mb-6">Navigasi</h4>
                        <ul className="flex flex-col gap-4">
                            {['Home', 'Layanan', 'Portofolio', 'Harga', 'FAQ'].map(item => (
                                <li key={item}>
                                    <Link href={`/#${item.toLowerCase()}`} className="text-white/60 hover:text-white transition-colors">
                                        {item}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>
                    <div>
                        <h4 className="text-lg font-bold mb-6">Kontak</h4>
                        <ul className="flex flex-col gap-4">
                            <li>
                                <a href="mailto:kalanalabs@gmail.com" className="text-white/60 hover:text-white transition-colors">
                                    kalanalabs@gmail.com
                                </a>
                            </li>
                            <li>
                                <a href="https://wa.me/6285707736885" className="text-white/60 hover:text-white transition-colors">
                                    +62 857-0773-6885
                                </a>
                            </li>
                            <li className="text-white/60">
                                Purwokerto, Jawa Tengah
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="pt-8 border-t border-white/10 text-center md:text-left flex flex-col md:flex-row justify-between items-center gap-4">
                    <p className="text-white/40 text-[0.85rem]">
                        &copy; 2026 KalanaLabs. All Rights Reserved.
                    </p>
                    <div className="flex gap-8 text-[0.85rem] text-white/40">
                         <Link href="/terms" className="hover:text-white transition-colors text-sm">Syarat & Ketentuan</Link>
                         <Link href="/#faq" className="hover:text-white transition-colors text-sm">Kebijakan Privasi</Link>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
