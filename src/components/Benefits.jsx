'use client';

import { motion } from 'framer-motion';
import { ShieldCheck, Globe2, BarChart3, Clock, Users } from 'lucide-react';

const reasons = [
    {
        icon: <ShieldCheck size={24} />,
        title: "Kredibilitas",
        desc: "Dianggap lebih terpercaya oleh 84% calon konsumen digital."
    },
    {
        icon: <Globe2 size={24} />,
        title: "Market Reach",
        desc: "Tembus batasan geografis di seluruh Indonesia."
    },
    {
        icon: <Clock size={24} />,
        title: "Buka 24/7",
        desc: "Tetap dapat diakses pelanggan kapan saja tanpa henti."
    },
    {
        icon: <BarChart3 size={24} />,
        title: "Investasi",
        desc: "Aset digital yang jauh lebih hemat dibanding iklan tradisional."
    }
];

const Benefits = () => {
    return (
        <section className="min-h-screen flex items-center py-20 bg-gray-50 overflow-hidden" id="benefits">
            <div className="max-w-[1200px] mx-auto px-6 w-full">
                <div className="flex flex-col lg:flex-row gap-12 lg:gap-20 items-center">
                    <motion.div 
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="lg:w-1/2"
                    >
                        <span className="inline-block text-[0.8rem] font-bold uppercase tracking-[1.5px] px-4 py-1.5 rounded-full mb-6 bg-blue-100 text-blue-700">
                            Problem & Solution
                        </span>
                        <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-8 text-gray-900 leading-[1.1]">
                            Mengapa Website adalah <span className="text-blue-600">Wajib</span> untuk Bisnis Anda?
                        </h2>
                        <p className="text-lg text-gray-500 leading-relaxed mb-8 max-w-[540px]">
                            Di era digital, tidak memiliki website berarti membiarkan potensi pelanggan Anda pergi ke kompetitor. Website bukan sekadar gaya hidup, tapi infrastruktur fundamental bisnis modern.
                        </p>
                        
                        <div className="bg-white p-6 rounded-2xl shadow-sm border-l-4 border-l-blue-600 max-w-[500px]">
                            <p className="italic text-gray-700 font-medium">"Website adalah kantor pusat digital Anda. Tanpa itu, bisnis Anda tidak terlihat di peta pencarian pelanggan."</p>
                        </div>
                    </motion.div>

                    <div className="lg:w-1/2 w-full">
                        <div className="grid grid-cols-2 gap-4 md:gap-6">
                            {reasons.map((reason, index) => (
                                <motion.div 
                                    key={index}
                                    initial={{ opacity: 0, scale: 0.95 }}
                                    whileInView={{ opacity: 1, scale: 1 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.5, delay: index * 0.1 }}
                                    className="p-5 md:p-6 rounded-3xl bg-white border border-gray-100 shadow-sm hover:shadow-xl hover:border-blue-100 transition-all duration-300"
                                >
                                    <div className="w-10 h-10 bg-blue-50 text-blue-600 rounded-xl flex items-center justify-center mb-4">
                                        {reason.icon}
                                    </div>
                                    <div className="text-[1.05rem] font-bold text-gray-900 mb-2">{reason.title}</div>
                                    <p className="text-[0.85rem] text-gray-500 leading-relaxed">
                                        {reason.desc}
                                    </p>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};


export default Benefits;
