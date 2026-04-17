"use client";

import React, { useState } from 'react';
import { HelpCircle, Plus, Minus, Info } from 'lucide-react';

const FAQItem = ({ question, answer }) => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className={`group border rounded-2xl transition-all duration-300 ${isOpen ? 'bg-blue-600 border-blue-600 shadow-blue' : 'bg-[#f0f7ff] border-blue-100 hover:border-blue-300'}`}>
            <button 
                onClick={() => setIsOpen(!isOpen)}
                className="w-full text-left px-6 py-5 flex items-center justify-between gap-4 cursor-pointer"
            >
                <p className={`text-[1.05rem] font-bold transition-colors ${isOpen ? 'text-white' : 'text-gray-900'}`}>{question}</p>
                <div className={`text-xl transition-transform duration-300 ${isOpen ? 'text-white rotate-45' : 'text-blue-600'}`}>
                    {isOpen ? <Minus size={20} /> : <Plus size={20} />}
                </div>
            </button>
            <div className={`overflow-hidden transition-all duration-300 ${isOpen ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-0'}`}>
                <div className="px-6 pb-6 pt-0">
                    <p className={`leading-relaxed text-[0.95rem] ${isOpen ? 'text-white/80' : 'text-gray-600'}`}>
                        {answer}
                    </p>
                </div>
            </div>
        </div>
    );
};

const FAQ = () => {
    const faqs = [
        {
            question: "Berapa lama proses pembuatan website?",
            answer: "Waktu pengerjaan bervariasi. Landing page biasanya 3-5 hari kerja, sedangkan Company Profile memerlukan waktu 7-10 hari kerja."
        },
        {
            question: "Apakah website responsif saat dibuka di HP?",
            answer: "Tentu saja. Semua website buatan KalanaLabs menggunakan prinsip Mobile-First Design untuk tampilan sempurna di semua perangkat."
        },
        {
            question: "Apakah biaya sudah termasuk Domain & Hosting?",
            answer: "Ya, semua paket harga kami sudah termasuk biaya Domain (.com) dan Hosting selama 1 tahun pertama."
        },
        {
            question: "Apakah website yang dibuat sudah SEO-friendly?",
            answer: "Ya, kami menerapkan teknik On-Page SEO dasar agar website Anda lebih mudah ditemukan di hasil pencarian Google."
        },
        {
            question: "Apakah saya bisa request fitur custom?",
            answer: "Bisa. Kami melayani pembuatan fitur custom sesuai kebutuhan bisnis Anda, mulai dari sistem booking, payment gateway, hingga integrasi API."
        },
        {
            question: "Bagaimana sistem pembayarannya?",
            answer: "Sistem pembayaran kami biasanya menggunakan DP 50% di awal dan pelunasan setelah website selesai dideploy atau siap rilis."
        },
        {
            question: "Apakah ada biaya maintenance tahunan?",
            answer: "Setelah tahun pertama, biaya tahunan hanya untuk perpanjangan Domain dan Hosting. Kami juga menawarkan paket maintenance opsional."
        },
        {
            question: "Apakah saya mendapatkan akses dashboard admin?",
            answer: "Ya, kami memberikan akses dashboard admin yang user-friendly agar Anda bisa mengelola konten website Anda sendiri dengan mudah."
        }
    ];

    return (
        <section className="py-24 bg-white" id="faq">
            <div className="max-w-[1200px] mx-auto px-6">
                <div className="text-center max-w-[660px] mx-auto mb-16">
                    <span className="inline-block text-[0.82rem] font-bold uppercase tracking-[1.5px] px-4 py-1.5 rounded-full mb-4 bg-blue-50 text-blue-600">
                        <Info size={14} className="inline mr-1" /> FAQ
                    </span>
                    <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4 text-gray-900 leading-[1.15]">Pertanyaan yang Sering <br />Diajukan</h2>
                    <p className="text-lg text-gray-500 leading-relaxed">Semua yang perlu Anda ketahui tentang layanan kami.</p>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-6xl mx-auto">
                    {faqs.map((faq, index) => (
                        <FAQItem key={index} {...faq} />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default FAQ;
