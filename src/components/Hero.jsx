'use client';

import { motion } from 'framer-motion';

const Hero = () => {
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.15,
                delayChildren: 0.2
            }
        }
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 30 },
        visible: { 
            opacity: 1, 
            y: 0,
            transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] }
        }
    };

    return (
        <section className="min-h-screen flex items-center justify-center bg-linear-to-br from-blue-600 via-blue-800 to-blue-950 text-white relative overflow-hidden" id="home">
            {/* Background Shapes */}
            <motion.div 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1.5 }}
                className="absolute inset-0 pointer-events-none overflow-hidden"
            >
                <div className="absolute rounded-full bg-white/4 w-[600px] h-[600px] -top-[200px] -right-[100px]"></div>
                <div className="absolute rounded-full bg-white/4 w-[400px] h-[400px] -bottom-[100px] -left-[80px]"></div>
                <div className="absolute rounded-full bg-white/2 w-[250px] h-[250px] top-[40%] left-[30%]"></div>
            </motion.div>

            <motion.div 
                variants={containerVariants}
                initial="hidden"
                animate="visible"
                className="max-w-[1200px] mx-auto px-6 py-24 flex flex-col items-center text-center w-full relative z-10"
            >
                <motion.div variants={itemVariants} className="flex flex-col items-center w-full">
                    <span className="inline-block text-[0.82rem] font-bold uppercase tracking-[1.5px] px-4 py-1.5 rounded-full mb-4 bg-white/15 text-white/90">
                        High-Performance Digital Agency
                    </span>
                    <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight leading-[1.15] mb-6 text-white max-w-[950px]">
                        Bangun Website <span className="text-blue-200">Eksklusif</span> <br />
                        untuk Ekspansi Bisnis Masa Depan
                    </h1>

                    <p className="text-lg md:text-xl leading-relaxed text-white/85 max-w-[680px] mb-10">
                        KalanaLabs menghadirkan standar kualitas global untuk pelaku bisnis <br />
                        di Purwokerto & sekitarnya, membangun identitas digital yang modern dan berdaya saing.
                    </p>
                    <div className="flex gap-4 justify-center">
                        <a href="#services" className="inline-flex items-center gap-2 px-8 py-3.5 bg-blue-600 text-white rounded-full font-sans font-semibold text-[0.95rem] shadow-[0_8px_30px_rgba(37,99,235,0.25)] hover:bg-blue-700 hover:-translate-y-0.5 transition-all duration-300">
                            Lihat Layanan
                        </a>
                        <a href="https://wa.me/6285707736885" className="inline-flex items-center gap-2 px-8 py-3.5 bg-transparent text-white border-2 border-white/30 rounded-full font-sans font-semibold text-[0.95rem] hover:bg-white/10 hover:border-white hover:-translate-y-0.5 transition-all duration-300">
                            Konsultasi Gratis
                        </a>
                    </div>
                </motion.div>

                {/* Hero Visual Mockup */}
                {/* <div className="w-full max-w-[1000px] mt-20 relative">
                    <div className="relative pb-5">
                        <div className="bg-white rounded-[20px] overflow-hidden shadow-2xl w-full">
                            <div className="flex items-center gap-3 px-4 py-2.5 bg-gray-100 border-b border-gray-200">
                                <div className="flex gap-1.5">
                                    <span className="w-2 h-2 rounded-full bg-[#FF5F57]"></span>
                                    <span className="w-2 h-2 rounded-full bg-[#FFBD2E]"></span>
                                    <span className="w-2 h-2 rounded-full bg-[#28CA41]"></span>
                                </div>
                                <div className="flex-1 h-[22px] bg-white rounded border border-gray-200 flex items-center px-2.5 text-[0.65rem] text-gray-400">
                                    kalanalabs.com/project-preview
                                </div>
                            </div>
                            <div className="p-3.5 bg-[#0F172A] relative min-h-[400px]">
                                <Image 
                                    src="/dashboard_mockup.png" 
                                    alt="KalanaLabs Project Preview" 
                                    fill
                                    className="object-contain p-2" 
                                    priority
                                />
                            </div>
                        </div>

                        {/* Floating elements 
                        <div className="absolute z-10 top-[20%] -right-4 md:-right-10 bg-white p-3 md:p-4 rounded-xl shadow-lg flex items-center gap-3 text-gray-900 border border-gray-100 animate-bounce [animation-duration:3s]">
                            <div className="w-8 h-8 md:w-10 md:h-10 bg-blue-50 text-blue-600 rounded-lg flex items-center justify-center text-lg">
                                <TrendingUp size={20} />
                            </div>
                            <div className="text-left">
                                <span className="block text-[0.65rem] md:text-[0.75rem] text-gray-500 whitespace-nowrap">SEO Optimized</span>
                                <strong className="text-[0.8rem] md:text-[0.9rem]">Rank #1</strong>
                            </div>
                        </div>
                        <div className="absolute z-10 bottom-[20%] -left-4 md:-left-10 bg-white p-3 md:p-4 rounded-xl shadow-lg flex items-center gap-3 text-gray-900 border border-gray-100 animate-bounce [animation-duration:3s] [animation-delay:1.5s]">
                            <div className="w-8 h-8 md:w-10 md:h-10 bg-green-50 text-green-600 rounded-lg flex items-center justify-center text-lg">
                                <Zap size={20} />
                            </div>
                            <div className="text-left">
                                <span className="block text-[0.65rem] md:text-[0.75rem] text-gray-500 whitespace-nowrap">High Performance</span>
                                <strong className="text-[0.8rem] md:text-[0.9rem]">Speed 99+</strong>
                            </div>
                        </div>
                    </div>
                </div> */}
            </motion.div>
        </section>
    );
};

export default Hero;
