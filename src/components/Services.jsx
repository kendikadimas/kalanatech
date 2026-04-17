'use client';

import { motion } from 'framer-motion';
import { Layout, Globe, Search, Database, Check } from 'lucide-react';

const Services = () => {
    const services = [
        {
            id: "svc-web",
            icon: "globe-outline",
            title: "Landing Page & Company Profile",
            points: [
                "Desain modern & premium",
                "Mobile-first responsive",
                "Optimasi SEO lokal Purwokerto",
                "Integrasi tombol WhatsApp"
            ]
        },
        {
            id: "svc-app",
            icon: "layout-outline",
            title: "Sistem Custom & Web App",
            points: [
                "Dashboard admin user-friendly",
                "Manajemen data & inventori",
                "Sistem CRM / Kasir Online",
                "Keamanan data terjamin"
            ]
        },
        {
            id: "svc-design",
            icon: "search-outline",
            title: "UI/UX Design & Branding",
            points: [
                "User journey yang intuitif",
                "Mockup desain hi-fidelity",
                "Identitas visual & logo",
                "Prototype interaktif"
            ]
        }
    ];

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1
            }
        }
    };

    const cardVariants = {
        hidden: { opacity: 0, y: 30 },
        visible: { 
            opacity: 1, 
            y: 0,
            transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] }
        }
    };

    return (
        <section className="min-h-screen flex items-center py-24 bg-white" id="services">
            <div className="max-w-[1200px] mx-auto px-6 w-full">
                <motion.div 
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="text-center max-w-[660px] mx-auto mb-16"
                >
                    <span className="inline-block text-[0.82rem] font-bold uppercase tracking-[1.5px] px-4 py-1.5 rounded-full mb-4 bg-blue-50 text-blue-600">
                        Layanan Kami
                    </span>
                    <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">
                        Jasa Buat Website Purwokerto <br />& Solusi Digital UMKM
                    </h2>
                    <p className="text-lg text-gray-500 leading-relaxed">
                        Fokus pada pertumbuhan bisnis Anda melalui solusi teknologi yang tepat guna.
                    </p>
                </motion.div>
                
                <motion.div 
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-100px" }}
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
                >
                    {services.map(service => (
                        <motion.div 
                            variants={cardVariants}
                            whileHover={{ y: -10, boxShadow: "0 20px 40px rgba(0,0,0,0.08)" }}
                            className="bg-white border border-gray-200 rounded-xl p-6 transition-all duration-400 hover:border-blue-200 group" 
                            id={service.id} 
                            key={service.id}
                        >
                            <div className="w-14 h-14 bg-white rounded-2xl shadow-sm text-blue-600 flex items-center justify-center text-2xl group-hover:bg-blue-600 group-hover:text-white transition-all duration-300 mb-4">
                                {service.icon === 'layout-outline' ? <Layout size={28} /> : 
                                 service.icon === 'globe-outline' ? <Globe size={28} /> :
                                 service.icon === 'search-outline' ? <Search size={28} /> : <Database size={28} />}
                            </div>
                            <div className="text-[1.15rem] font-bold text-gray-900 mb-3">{service.title}</div>
                            <ul className="flex flex-col gap-3">
                                {service.points.map((point, i) => (
                                    <li key={i} className="text-[0.88rem] text-gray-600 flex items-start gap-2.5 leading-relaxed">
                                        <Check size={16} className="text-blue-500 shrink-0 mt-0.5" strokeWidth={3} />
                                        <span>{point}</span>
                                    </li>
                                ))}
                            </ul>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
};

export default Services;
