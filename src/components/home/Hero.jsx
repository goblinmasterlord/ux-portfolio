import React, { useRef } from 'react';
import { motion, useScroll, useTransform, useMotionValue, useSpring } from 'framer-motion';
import { ArrowDown, ArrowRight, Code, Palette } from 'lucide-react';
import Button from '../ui/Button';

const Hero = () => {
    const containerRef = useRef(null);
    const { scrollY } = useScroll();

    // Mouse interaction
    const mouseX = useMotionValue(0);
    const mouseY = useMotionValue(0);

    // Smooth spring animation for mouse movement
    const springConfig = { damping: 25, stiffness: 150 };
    const x = useSpring(mouseX, springConfig);
    const y = useSpring(mouseY, springConfig);

    const handleMouseMove = (e) => {
        const { clientX, clientY } = e;
        const { innerWidth, innerHeight } = window;
        // Normalize coordinates -1 to 1
        const normalizedX = (clientX / innerWidth) * 2 - 1;
        const normalizedY = (clientY / innerHeight) * 2 - 1;

        mouseX.set(normalizedX * 50); // Move 50px max
        mouseY.set(normalizedY * 50);
    };

    // Parallax for background elements
    const y1 = useTransform(scrollY, [0, 500], [0, 200]);
    const y2 = useTransform(scrollY, [0, 500], [0, -150]);

    const handleScrollTo = (id) => {
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <section
            ref={containerRef}
            onMouseMove={handleMouseMove}
            className="relative min-h-screen flex flex-col justify-center items-center overflow-hidden bg-background px-4 sm:px-6 pt-20"
        >
            {/* Ambient Background */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <motion.div
                    style={{ x, y, translateY: y1 }}
                    className="absolute top-[-10%] left-[-10%] w-[60vw] h-[60vw] bg-accent-purple/10 rounded-full blur-[150px] mix-blend-screen"
                />
                <motion.div
                    style={{ x: useTransform(x, v => -v), y: useTransform(y, v => -v), translateY: y2 }}
                    className="absolute bottom-[-10%] right-[-10%] w-[60vw] h-[60vw] bg-accent-blue/10 rounded-full blur-[150px] mix-blend-screen"
                />
            </div>

            {/* Main Content */}
            <div className="relative z-10 w-full max-w-[1600px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">

                {/* Text Content */}
                <div className="lg:col-span-8 flex flex-col items-center lg:items-start">
                    {/* Line 1: Product */}
                    <div className="overflow-hidden mb-2 md:mb-4 self-start">
                        <motion.h1
                            initial={{ y: "100%" }}
                            animate={{ y: 0 }}
                            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
                            className="text-[10vw] md:text-[8rem] leading-[0.85] font-display font-bold text-primary tracking-tighter"
                        >
                            Product
                        </motion.h1>
                    </div>

                    {/* Line 2: Strategy (Outlined) */}
                    <div className="overflow-hidden mb-2 md:mb-4 self-center lg:self-start lg:ml-[10%]">
                        <motion.h1
                            initial={{ y: "100%" }}
                            animate={{ y: 0 }}
                            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1], delay: 0.3 }}
                            className="text-[10vw] md:text-[8rem] leading-[0.85] font-display font-bold text-transparent tracking-tighter"
                            style={{ WebkitTextStroke: "1px rgba(255, 255, 255, 0.3)" }}
                        >
                            Strategy
                        </motion.h1>
                    </div>

                    {/* Line 3: & AI Implementation (Italic) */}
                    <div className="overflow-hidden self-end lg:self-start lg:ml-[20%] relative">
                        <motion.div
                            initial={{ width: 0 }}
                            animate={{ width: "100%" }}
                            transition={{ duration: 1.2, ease: "easeInOut", delay: 0.6 }}
                            className="absolute bottom-2 md:bottom-6 left-0 h-[2px] bg-accent"
                        />
                        <motion.h1
                            initial={{ y: "100%" }}
                            animate={{ y: 0 }}
                            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1], delay: 0.4 }}
                            className="text-[10vw] md:text-[8rem] leading-[0.85] font-serif italic text-white mix-blend-overlay tracking-tighter pr-4"
                        >
                            & AI
                        </motion.h1>
                    </div>

                    <div className="mt-12 flex flex-col md:flex-row gap-8 items-start w-full max-w-2xl lg:ml-4">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.8, duration: 0.8 }}
                            className="flex-1"
                        >
                            <p className="text-secondary text-lg leading-relaxed font-light mb-8">
                                I’m a Product Manager figuring out how to make AI actually useful. I spend my time testing models, refining prompts, and building the workflows that turn raw intelligence into reliable products.
                            </p>
                            <div className="flex flex-wrap gap-4">
                                <Button
                                    onClick={() => handleScrollTo('work')}
                                    variant="primary"
                                    icon={Palette}
                                >
                                    View Work
                                </Button>
                                <Button
                                    onClick={() => handleScrollTo('hobby-projects')}
                                    variant="secondary"
                                    icon={Code}
                                >
                                    Hobby Lab
                                </Button>
                            </div>
                        </motion.div>
                    </div>
                </div>


                {/* Profile Image Section */}
                <div className="lg:col-span-4 flex justify-center lg:justify-end relative">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.8, rotate: -5 }}
                        animate={{ opacity: 1, scale: 1, rotate: 0 }}
                        transition={{ delay: 0.6, duration: 1, ease: [0.2, 0.8, 0.2, 1] }}
                        className="relative w-64 h-64 md:w-80 md:h-80"
                    >
                        {/* Decorative Elements */}
                        <div className="absolute inset-0 border border-white/10 rounded-full scale-110 animate-pulse" />
                        <div className="absolute inset-0 border border-accent/20 rounded-full scale-125 opacity-50" />

                        {/* Image Container */}
                        <div className="w-full h-full rounded-full overflow-hidden border-2 border-white/10 bg-surface relative z-10 group">
                            <div className="absolute inset-0 bg-accent/10 group-hover:bg-transparent transition-colors duration-500 z-20" />
                            {/* Placeholder for User Image */}
                            <img
                                src="/images/profile.jpg"
                                alt="Marci"
                                className="w-full h-full object-cover filter grayscale group-hover:grayscale-0 transition-all duration-500 scale-105 group-hover:scale-100"
                                onError={(e) => {
                                    e.target.src = "https://placehold.co/400x400/1a1a1a/ffffff?text=Marci";
                                }}
                            />
                        </div>
                    </motion.div>
                </div>
            </div>

            {/* Scroll Indicator */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.5, duration: 1 }}
                className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
            >
                <span className="text-[10px] font-mono text-white/30 uppercase tracking-widest">Scroll</span>
                <motion.div
                    animate={{ y: [0, 5, 0] }}
                    transition={{ duration: 2, repeat: Infinity }}
                    className="w-px h-8 bg-gradient-to-b from-white/30 to-transparent"
                />
            </motion.div>
        </section >
    );
};

export default Hero;
