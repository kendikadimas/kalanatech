"use client";

import React from 'react';
import { Quote, Star } from 'lucide-react';
import Image from 'next/image';

const TestimonialCard = ({ name, role, company, website, image, testimonial }) => {
    return (
        <div className="bg-white p-8 rounded-3xl border border-blue-100 hover:border-blue-300 transition-all duration-300 hover:shadow-blue group relative flex flex-col h-full">
            <div className="absolute top-6 right-8 text-blue-100 group-hover:text-blue-200 transition-colors">
                <Quote size={48} fill="currentColor" />
            </div>
            
            <div className="flex gap-1 mb-6">
                {[...Array(5)].map((_, i) => (
                    <Star key={i} size={16} className="fill-blue-500 text-blue-500" />
                ))}
            </div>

            <p className="text-gray-600 leading-relaxed mb-8 text-[1.05rem] flex-grow relative z-10">
                "{testimonial}"
            </p>

            <div className="flex items-center gap-4">
                <div className="relative w-14 h-14 rounded-full overflow-hidden border-2 border-blue-50">
                    <Image 
                        src={image} 
                        alt={name} 
                        fill 
                        className="object-cover"
                    />
                </div>
                <div>
                    <h4 className="font-bold text-gray-900 leading-tight">{name}</h4>
                    <p className="text-sm text-blue-600 font-medium">{role} @ {company}</p>
                    <a 
                        href={`https://${website}`} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="text-[0.75rem] text-gray-400 hover:text-blue-500 transition-colors"
                    >
                        {website}
                    </a>
                </div>
            </div>
        </div>
    );
};

const Testimonials = () => {
    const testimonials = [
        {
            name: "Akmal Adhi Nugroho",
            role: "Founder",
            company: "AngganaProject",
            website: "angganaproject.com",
            image: "/akmall.png",
            testimonial: "Mantap, Hasilnya memuaskan. Akhirnya punya website buat branding kami!"
        },
        {
            name: "Moreno Hilbran",
            role: "CEO",
            company: "larasena",
            website: "larasena.id",
            image: "/morenoo.png",
            testimonial: "Website sesuai ekspetasi. Pesan dan tema yang disampaikan juga sudah sesuai"
        },
        {
            name: "Yunan Faila",
            role: "CEO",
            company: "SEEO",
            website: "seeoftunsoed.com",
            image: "/yunann.png",
            testimonial: "Keren kak, sekarang organisasi kami jadi punya company profile. Rekomen!"
        }
    ];

    return (
        <section className="py-24 bg-[#fcfdff]" id="testimonials">
            <div className="max-w-[1200px] mx-auto px-6">
                <div className="text-center max-w-[660px] mx-auto mb-16">
                    <span className="inline-block text-[0.82rem] font-bold uppercase tracking-[1.5px] px-4 py-1.5 rounded-full mb-4 bg-blue-50 text-blue-600">
                        Testimonials
                    </span>
                    <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4 text-gray-900 leading-[1.15]">
                        Apa Kata Mereka Tentang <br />Layanan Kami
                    </h2>
                    <p className="text-lg text-gray-500 leading-relaxed">
                        Kepercayaan klien adalah prioritas utama kami dalam menghadirkan solusi digital terbaik.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {testimonials.map((item, index) => (
                        <TestimonialCard key={index} {...item} />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Testimonials;
