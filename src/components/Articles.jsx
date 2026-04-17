'use client';

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Calendar, ArrowRight } from 'lucide-react';

const ArticleCard = ({ id, category, date, title, desc, link }) => (
    <motion.article 
        variants={{
            hidden: { opacity: 0, y: 20 },
            visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
        }}
        whileHover={{ y: -5 }}
        className="bg-white border border-gray-100 rounded-2xl p-8 transition-all duration-400 hover:shadow-2xl hover:border-blue-100 group flex flex-col h-full" id={id}
    >
        <div className="flex items-center justify-between mb-6">
            <span className="text-[0.7rem] font-bold text-blue-600 uppercase tracking-wider bg-blue-50 px-3 py-1.5 rounded-full">
                {category}
            </span>
            <div className="flex items-center gap-2 text-[0.8rem] text-gray-400 font-medium">
                <Calendar size={14} />
                <span>{date}</span>
            </div>
        </div>

        <div className="flex flex-col flex-1">
            <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-4 group-hover:text-blue-600 transition-colors leading-snug">
                {title}
            </h3>
            
            <p className="text-gray-500 text-[0.95rem] leading-relaxed mb-8 flex-1">
                {desc}
            </p>
            
            <Link href={link} className="inline-flex items-center gap-2 text-blue-600 font-bold text-[0.95rem] group/link transition-all mt-auto pt-6 border-t border-gray-50">
                Baca Selengkapnya
                <ArrowRight size={18} className="transition-transform group-hover/link:translate-x-1" />
            </Link>
        </div>
    </motion.article>
);

const Articles = () => {
    const posts = [
        {
            id: "article-1",
            category: "Bisnis Digital",
            date: "10 Mar 2026",
            title: "Kenapa Bisnis Anda Wajib Punya Website di 2026",
            desc: "Di era digital, website bukan lagi pilihan tapi kebutuhan. Pelajari bagaimana website meningkatkan kredibilitas dan jangkauan pasar Anda secara global.",
            link: "/artikel/kenapa-bisnis-wajib-punya-website"
        },
        {
            id: "article-2",
            category: "SEO",
            date: "05 Mar 2026",
            title: "Tips Optimasi SEO Website Bisnis Lokal",
            desc: "Bagi UMKM di Purwokerto, SEO lokal adalah kunci agar ditemukan pelanggan sekitar. Simpan tips ampuh untuk mendominasi hasil pencarian lokal.",
            link: "/artikel/tips-seo-website-bisnis"
        },
        {
            id: "article-3",
            category: "Web Tech",
            date: "01 Mar 2026",
            title: "Website Profesional: Kunci Kepercayaan Pelanggan",
            desc: "Desain yang rapi dan performa cepat bukan sekadar estetika, tapi investasi untuk membangun kepercayaan konsumen pada brand Anda.",
            link: "/artikel/website-profesional-kepercayaan-pelanggan"
        }
    ];

    return (
        <section className="py-24 bg-gray-50" id="articles">
            <div className="max-w-[1200px] mx-auto px-6">
                <motion.div 
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="max-w-[660px] mb-16"
                >
                    <span className="inline-block text-[0.82rem] font-bold uppercase tracking-[1.5px] px-4 py-1.5 rounded-full mb-4 bg-blue-50 text-blue-600">
                        Artikel & Edukasi
                    </span>
                    <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4 text-gray-900 leading-[1.15]">
                        Wawasan Digital untuk <br />Pertumbuhan Bisnis Anda
                    </h2>
                </motion.div>
                
                <motion.div 
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ staggerChildren: 0.1 }}
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
                >
                    {posts.map(post => (
                        <ArticleCard key={post.id} {...post} />
                    ))}
                </motion.div>
            </div>
        </section>
    );
};

export default Articles;
