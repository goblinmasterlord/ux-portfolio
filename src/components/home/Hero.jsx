import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ArrowDown } from 'lucide-react';

const Hero = () => {
    const containerRef = useRef(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start start", "end start"]
    });

    const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
    const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

    return (
        <section ref={containerRef} className="relative h-screen w-full overflow-hidden bg-background flex flex-col justify-center items-center px-4 sm:px-6 lg:px-12">
            {/* Background Noise & Gradient */}
            <div className="absolute inset-0 bg-noise opacity-20 pointer-events-none z-0"></div>
            <div className="absolute top-[-20%] left-[-10%] w-[50%] h-[50%] bg-accent/10 rounded-full blur-[120px] animate-pulse-slow pointer-events-none"></div>
            <div className="absolute bottom-[-20%] right-[-10%] w-[50%] h-[50%] bg-accent-purple/10 rounded-full blur-[120px] animate-pulse-slow pointer-events-none" style={{ animationDelay: '2s' }}></div>

            <motion.div
                style={{ y, opacity }}
                className="relative z-10 max-w-[1800px] w-full mx-auto text-center flex flex-col items-center"
            >
                <motion.div
                    initial={{ opacity: 0, y: 100 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
                    className="mb-6 md:mb-10"
                >
                    <span className="inline-block py-1 px-3 rounded-full border border-white/10 bg-white/5 backdrop-blur-sm text-sm md:text-base text-accent font-mono mb-6">
                        Available for new projects
                    </span>
                    <h1 className="text-display font-bold text-primary leading-[0.9] tracking-tighter">
                        <span className="block overflow-hidden">
                            <motion.span
                                initial={{ y: "100%" }}
                                animate={{ y: 0 }}
                                transition={{ duration: 1, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
                                className="block"
                            >
                                Designing
                            </motion.span>
                        </span>
                        <span className="block overflow-hidden text-transparent bg-clip-text bg-gradient-to-r from-primary via-primary to-secondary">
                            <motion.span
                                initial={{ y: "100%" }}
                                animate={{ y: 0 }}
                                transition={{ duration: 1, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
                                className="block"
                            >
                                Digital
                            </motion.span>
                        </span>
                        <span className="block overflow-hidden">
                            <motion.span
                                initial={{ y: "100%" }}
                                animate={{ y: 0 }}
                                transition={{ duration: 1, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
                                className="block italic font-serif text-accent"
                            >
                                Masterpieces
                            </motion.span>
                        </span>
                    </h1>
                </motion.div>

                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, delay: 0.6, ease: [0.16, 1, 0.3, 1] }}
                    className="max-w-2xl text-lg md:text-xl text-secondary leading-relaxed mb-12 font-sans"
                >
                    I craft high-end digital experiences that blend aesthetic excellence with technical precision.
                    Specializing in fintech, AI interfaces, and immersive web applications.
                </motion.p>

                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 1, delay: 0.8, ease: [0.16, 1, 0.3, 1] }}
                    className="flex flex-col sm:flex-row gap-6 items-center"
                >
                    <a href="#work" className="group relative px-8 py-4 bg-primary text-background rounded-full font-bold text-lg overflow-hidden transition-transform hover:scale-105 active:scale-95">
                        <span className="relative z-10 group-hover:text-background transition-colors">View Work</span>
                        <div className="absolute inset-0 bg-accent transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300 ease-out"></div>
                    </a>
                    <a href="#contact" className="text-primary font-medium hover:text-accent transition-colors flex items-center gap-2 group">
                        Contact Me
                        <ArrowDown className="w-4 h-4 transform -rotate-90 group-hover:translate-x-1 transition-transform" />
                    </a>
                </motion.div>
            </motion.div>

            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.5, duration: 1 }}
                className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-secondary/50"
            >
                <span className="text-xs uppercase tracking-widest">Scroll</span>
                <div className="w-[1px] h-12 bg-gradient-to-b from-secondary/50 to-transparent"></div>
            </motion.div>
        </section>
    );
};

export default Hero;
