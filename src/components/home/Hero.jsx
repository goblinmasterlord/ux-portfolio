import React, { useRef } from 'react';
import { motion, useScroll, useTransform, useMotionValue, useSpring } from 'framer-motion';
import { ArrowDown } from 'lucide-react';

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

    return (
        <section
            ref={containerRef}
            onMouseMove={handleMouseMove}
            className="relative min-h-screen flex flex-col justify-center items-center overflow-hidden bg-background px-4 sm:px-6"
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
            <div className="relative z-10 w-full max-w-[1600px] mx-auto">
                <div className="flex flex-col items-center md:items-start">

                    {/* Line 1: Designing */}
                    <div className="overflow-hidden mb-2 md:mb-4 self-start md:ml-[5%]">
                        <motion.h1
                            initial={{ y: "100%" }}
                            animate={{ y: 0 }}
                            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
                            className="text-[12vw] md:text-[9rem] leading-[0.85] font-display font-bold text-primary tracking-tighter"
                        >
                            Designing
                        </motion.h1>
                    </div>

                    {/* Line 2: Digital (Outlined/Hollow) */}
                    <div className="overflow-hidden mb-2 md:mb-4 self-center">
                        <motion.h1
                            initial={{ y: "100%" }}
                            animate={{ y: 0 }}
                            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1], delay: 0.3 }}
                            className="text-[12vw] md:text-[9rem] leading-[0.85] font-display font-bold text-transparent tracking-tighter"
                            style={{ WebkitTextStroke: "1px rgba(255, 255, 255, 0.3)" }}
                        >
                            Digital
                        </motion.h1>
                    </div>

                    {/* Line 3: Experiences (Italic) */}
                    <div className="overflow-hidden self-end md:mr-[5%] relative">
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
                            className="text-[12vw] md:text-[9rem] leading-[0.85] font-serif italic text-white mix-blend-overlay tracking-tighter pr-4"
                        >
                            Reality
                        </motion.h1>
                    </div>
                </div>

                {/* Subtext & CTA */}
                <div className="mt-12 md:mt-24 flex flex-col md:flex-row justify-between items-end w-full px-4 md:px-12">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.8, duration: 0.8 }}
                        className="max-w-md mb-8 md:mb-0"
                    >
                        <p className="text-secondary text-lg md:text-xl leading-relaxed font-light">
                            I architect digital ecosystems where <span className="text-white font-medium">strategy</span> meets <span className="text-white font-medium">artistry</span>.
                            Building the future of interaction, one pixel at a time.
                        </p>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 1, duration: 0.8 }}
                        className="flex flex-col items-center gap-4"
                    >
                        <span className="text-xs font-mono text-accent uppercase tracking-widest">Scroll to Explore</span>
                        <motion.div
                            animate={{ y: [0, 10, 0] }}
                            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                            className="w-px h-16 bg-gradient-to-b from-accent to-transparent"
                        />
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
