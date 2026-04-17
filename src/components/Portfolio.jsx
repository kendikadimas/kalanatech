'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

const PortfolioCard = ({ id, img, type, title, desc, tags }) => (
    <motion.div 
        variants={{
            hidden: { opacity: 0, y: 30 },
            visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] } }
        }}
        whileHover={{ y: -10 }}
        className="bg-white/5 border border-white/10 rounded-2xl p-6 transition-all duration-400 group hover:bg-white/10 hover:border-white/20" id={id}
    >
        <div className="mb-6">
            <div className="bg-white rounded-xl overflow-hidden shadow-2xl transition-transform duration-500 group-hover:scale-[1.02]">
                <div className="flex items-center gap-1.5 px-3 py-2 bg-gray-100 border-b border-gray-200">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#FF5F57]"></span>
                    <span className="w-1.5 h-1.5 rounded-full bg-[#FFBD2E]"></span>
                    <span className="w-1.5 h-1.5 rounded-full bg-[#28CA41]"></span>
                </div>
                <div className="p-0 h-[220px] relative">
                    <Image 
                        src={`/${img}`} 
                        alt={title} 
                        fill
                        className="object-contain p-2"
                    />
                </div>
            </div>
        </div>
        <div className="text-left">
            <span className="text-[0.8rem] font-bold text-blue-400 uppercase tracking-wider mb-2 block">{type}</span>
            <p className="text-xl font-display font-bold text-white mb-3 group-hover:text-blue-300 transition-colors">{title}</p>
            <p className="text-white/60 text-[0.92rem] leading-relaxed mb-6">{desc}</p>
            <div className="flex flex-wrap gap-2">
                {tags.map(tag => (
                    <span key={tag} className="text-[0.75rem] font-medium px-3 py-1 rounded-full bg-white/5 text-white/70 border border-white/10">
                        {tag}
                    </span>
                ))}
            </div>
        </div>
    </motion.div>
);

const Portfolio = () => {
    const projects = [
        {
            id: "port-dapoerniknik",
            img: "dapoerniknik.png",
            type: "Landing Page — F&B",
            title: "Dapoer Niknik — Catering & Restaurant",
            desc: "Situs landing page kuliner.",
            tags: ["Landing Page", "F&B", "Responsive"]
        },
        {
            id: "port-rentcar",
            img: "rentcar.png",
            type: "Landing Page — Transportasi",
            title: "Rent Car — Transportasi",
            desc: "Platform sewa mobil modern.",
            tags: ["Rental Mobil", "Landing Page"]
        },
        {
            id: "port-anggana",
            img: "Anggana.png",
            type: "Company Profile",
            title: "Anggana Project — Agency",
            desc: "Profil perusahaan agensi kreatif.",
            tags: ["Agency", "Portfolio", "Minimalist"]
        }
    ];

    return (
        <section className="min-h-screen flex items-center py-24 bg-blue-950 relative overflow-hidden" id="portfolio">
             {/* decorative blob */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-blue-600/10 blur-[120px] pointer-events-none"></div>

            <div className="max-w-[1200px] mx-auto px-6 relative z-10 w-full">

                <motion.div 
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="text-center max-w-[660px] mx-auto mb-16"
                >
                    <span className="inline-block text-[0.82rem] font-bold uppercase tracking-[1.5px] px-4 py-1.5 rounded-full mb-4 bg-white/10 text-white/90">
                        Portofolio
                    </span>
                    <h2 className="text-3xl md:text-4xl font-display font-bold tracking-tight mb-4 text-white">Project Terbaik Kami</h2>
                    <p className="text-lg text-white/70 leading-relaxed">Karya digital yang fokus pada estetika dan performa tinggi.</p>
                </motion.div>

                <motion.div 
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ staggerChildren: 0.15 }}
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
                >
                    {projects.map(project => (
                        <PortfolioCard key={project.id} {...project} />
                    ))}
                </motion.div>
            </div>
        </section>
    );
};

export default Portfolio;
