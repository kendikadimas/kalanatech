'use client';

import { motion } from 'framer-motion';
import { MessageSquare, PenTool, Code2, Rocket } from 'lucide-react';

const steps = [
    {
        icon: <MessageSquare size={24} />,
        title: "Konsultasi & Strategi",
        desc: "Kami mendiskusikan visi, target audiens, dan fitur yang Anda butuhkan untuk mencapai tujuan bisnis.",
        color: "bg-blue-500"
    },
    {
        icon: <PenTool size={24} />,
        title: "Desain UI/UX",
        desc: "Pembuatan prototype desain yang modern, responsif, dan fokus pada pengalaman pengguna (User Experience).",
        color: "bg-indigo-500"
    },
    {
        icon: <Code2 size={24} />,
        title: "Development",
        desc: "Proses coding website menggunakan teknologi terbaru Next.js untuk hasil yang cepat dan SEO-friendly.",
        color: "bg-blue-600"
    },
    {
        icon: <Rocket size={24} />,
        title: "Launch & Support",
        desc: "Website diluncurkan ke publik dan kami memberikan dukungan teknis untuk memastikan performa tetap optimal.",
        color: "bg-blue-700"
    }
];

const Process = () => {
    return (
        <section className="min-h-screen flex items-center py-24 bg-white overflow-hidden" id="process">
            <div className="max-w-[1200px] mx-auto px-6 w-full">
                <motion.div 
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="text-center max-w-[660px] mx-auto mb-20"
                >
                    <span className="inline-block text-[0.82rem] font-bold uppercase tracking-[1.5px] px-4 py-1.5 rounded-full mb-4 bg-blue-50 text-blue-600">
                        Workflow & Proses
                    </span>
                    <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4 text-gray-900 leading-[1.15]">
                        Langkah Mudah Menuju <br />Website Profesional Anda
                    </h2>
                    <p className="text-lg text-gray-500 leading-relaxed">
                        Proses pengerjaan yang transparan dan terukur untuk hasil yang maksimal.
                    </p>
                </motion.div>

                <div className="relative">
                    {/* Connection Line (Desktop) */}
                    <div className="hidden lg:block absolute top-[44px] left-[10%] right-[10%] h-[2px] bg-gray-100 z-0">
                        <motion.div 
                            initial={{ width: 0 }}
                            whileInView={{ width: "100%" }}
                            viewport={{ once: true }}
                            transition={{ duration: 1.5, ease: "easeInOut" }}
                            className="h-full bg-linear-to-r from-blue-500 to-blue-700"
                        />
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 relative z-10">
                        {steps.map((step, index) => (
                            <motion.div 
                                key={index}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.6, delay: index * 0.2 }}
                                className="flex flex-col items-center text-center group"
                            >
                                <div className={`w-20 h-20 rounded-2xl ${step.color} text-white flex items-center justify-center mb-6 shadow-xl shadow-blue-500/10 group-hover:scale-110 transition-transform duration-500 border-4 border-white`}>
                                    {step.icon}
                                </div>
                                <p className="text-xl font-bold text-gray-900 mb-3">{step.title}</p>
                                <p className="text-gray-500 text-[0.92rem] leading-relaxed">
                                    {step.desc}
                                </p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Process;
