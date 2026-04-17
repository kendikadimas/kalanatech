"use client";

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';

const Navbar = () => {
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navItems = [
        { name: 'Layanan', href: '/#services' },
        { name: 'Portofolio', href: '/#portfolio' },
        { name: 'Harga', href: '/#pricing' },
        { name: 'Tentang', href: '/#about' },
        { name: 'FAQ', href: '/#faq' },
        { name: 'Artikel', href: '/#articles' },
    ];


    return (
        <nav className={`fixed top-0 left-0 w-full h-[76px] z-[1000] flex items-center transition-all duration-400 ease-[var(--ease)] ${scrolled ? 'bg-white/92 backdrop-blur-xl shadow-[0_1px_0_var(--color-gray-200)]' : 'bg-transparent'}`}>
            <div className="max-w-[1200px] mx-auto px-6 w-full flex items-center justify-between">
                <Link href="/" className={`flex items-center gap-2.5 font-display text-[1.4rem] font-extrabold transition-colors duration-400 ease-[var(--ease)] ${scrolled ? 'text-blue-600' : 'text-white'}`}>
                    <div className="relative h-8 w-8">
                        <Image 
                            src="/logo.png" 
                            alt="KalanaLabs" 
                            fill
                            className={`object-contain transition-all duration-400 ${scrolled ? 'brightness-100' : 'brightness-0 invert'}`}
                        />
                    </div>
                    KalanaLabs
                </Link>
                
                <ul className="hidden md:flex gap-8">
                    {navItems.map((item) => (
                        <li key={item.name}>
                            <Link 
                                href={item.href} 
                                className={`text-[0.9rem] font-medium py-1.5 relative transition-colors duration-400 group ${scrolled ? 'text-gray-600 hover:text-blue-700' : 'text-white/75 hover:text-white'}`}
                            >
                                {item.name}
                                <span className={`absolute bottom-0 left-0 h-0.5 bg-current transition-all duration-300 w-0 group-hover:w-full ${scrolled ? 'bg-blue-600' : 'bg-white'}`}></span>
                            </Link>
                        </li>
                    ))}
                </ul>

                <a 
                    href="https://wa.me/6285707736885" 
                    className={`hidden sm:inline-flex font-sans text-[0.88rem] font-semibold px-6 py-2.5 rounded-full transition-all duration-300 shadow-md transform hover:-translate-y-px ${scrolled ? 'bg-blue-600 text-white shadow-blue hover:bg-blue-700' : 'bg-white text-blue-700 hover:bg-blue-50'}`}
                >
                    Konsultasi Gratis
                </a>
                
                <button className="md:hidden flex flex-col gap-1.5 p-1.5 bg-transparent border-none cursor-pointer" aria-label="Toggle menu">
                    <span className={`block w-6 h-0.5 rounded-sm transition-all duration-300 ${scrolled ? 'bg-gray-900' : 'bg-white'}`}></span>
                    <span className={`block w-6 h-0.5 rounded-sm transition-all duration-300 ${scrolled ? 'bg-gray-900' : 'bg-white'}`}></span>
                    <span className={`block w-6 h-0.5 rounded-sm transition-all duration-300 ${scrolled ? 'bg-gray-900' : 'bg-white'}`}></span>
                </button>
            </div>
        </nav>
    );
};

export default Navbar;
