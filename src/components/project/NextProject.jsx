import React, { useRef } from 'react';
import { Link } from 'react-router-dom';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

const NextProject = ({ project }) => {
    const containerRef = useRef(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start end", "end start"]
    });

    const y = useTransform(scrollYProgress, [0, 1], ["-10%", "10%"]);

    if (!project) return null;

    return (
        <section ref={containerRef} className="py-32 bg-black relative overflow-hidden">
            <div className="container mx-auto px-6 relative z-10">
                <div className="flex flex-col items-center text-center">
                    <p className="text-sm font-mono text-accent uppercase tracking-widest mb-12">Next Case Study</p>

                    <Link to={project.path} className="group relative w-full max-w-5xl aspect-[16/9] md:aspect-[21/9] rounded-3xl overflow-hidden block bg-surface">
                        {/* Background Image with Parallax */}
                        <div className="absolute inset-0 overflow-hidden">
                            <motion.div
                                style={{ y }}
                                className="absolute inset-0 w-full h-[120%] -top-[10%]"
                            >
                                <img
                                    src={project.image}
                                    alt={project.title}
                                    className="w-full h-full object-cover opacity-50 group-hover:opacity-70 transition-opacity duration-700"
                                />
                            </motion.div>
                        </div>

                        {/* Overlay Gradient */}
                        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent opacity-90 group-hover:opacity-70 transition-opacity duration-500" />

                        {/* Content */}
                        <div className="absolute inset-0 flex flex-col items-center justify-center p-8">
                            <div className="relative z-20 flex flex-col items-center transform transition-transform duration-500 group-hover:-translate-y-2">
                                <span className="text-xl md:text-2xl text-white/60 font-light mb-4 group-hover:text-accent transition-colors duration-300">
                                    {project.category}
                                </span>
                                <h2 className="text-4xl md:text-6xl lg:text-8xl font-display font-bold text-white mb-8">
                                    {project.title}
                                </h2>

                                <div className="flex items-center gap-4 px-8 py-4 rounded-full bg-white/10 backdrop-blur-md border border-white/20 group-hover:bg-accent group-hover:border-accent transition-all duration-300">
                                    <span className="text-lg font-medium text-white group-hover:text-black">View Project</span>
                                    <ArrowRight className="w-5 h-5 text-white group-hover:text-black group-hover:translate-x-1 transition-transform" />
                                </div>
                            </div>
                        </div>
                    </Link>
                </div>
            </div>
        </section>
    );
};

export default NextProject;
