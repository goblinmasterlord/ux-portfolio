import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { projects } from '../../data/projects';

const ProjectCard = ({ project, index }) => {
    return (
        <motion.div
            className="group relative w-[85vw] md:w-[60vw] lg:w-[45vw] flex-shrink-0 aspect-[4/3] md:aspect-[16/9] rounded-2xl overflow-hidden bg-surface border border-white/10"
        >
            <Link to={project.comingSoon ? '#' : project.path} className="block h-full w-full">
                <div className="absolute inset-0 overflow-hidden">
                    <motion.img
                        whileHover={{ scale: 1.05 }}
                        transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
                        src={project.image}
                        alt={project.title}
                        className={`w-full h-full object-cover opacity-60 group-hover:opacity-40 transition-opacity duration-500 ${project.comingSoon ? 'grayscale' : ''}`}
                    />
                </div>

                <div className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-transparent opacity-80" />

                <div className="absolute bottom-0 left-0 w-full p-6 md:p-10 flex flex-col justify-end h-full">
                    <div className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                        <div className="flex items-center gap-3 mb-3">
                            <span className="px-3 py-1 text-xs font-mono border border-white/20 rounded-full text-accent backdrop-blur-md bg-black/20">
                                {project.category}
                            </span>
                            <span className="text-secondary text-sm font-mono">{project.year}</span>
                        </div>

                        <h3 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold text-primary mb-4 leading-tight">
                            {project.title}
                        </h3>

                        <p className="text-secondary max-w-xl line-clamp-2 mb-6 opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100">
                            {project.description}
                        </p>

                        {!project.comingSoon && (
                            <div className="flex items-center gap-2 text-accent font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-200">
                                View Case Study <ArrowRight className="w-4 h-4" />
                            </div>
                        )}
                    </div>
                </div>
            </Link>
        </motion.div>
    );
};

const ProjectsShowcase = () => {
    const containerRef = useRef(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
    });

    const x = useTransform(scrollYProgress, [0, 1], ["0%", "-50%"]);

    return (
        <section ref={containerRef} id="work" className="relative bg-background py-20 md:py-32 overflow-hidden">
            <div className="px-4 sm:px-6 lg:px-12 mb-12 md:mb-20 flex flex-col md:flex-row justify-between items-end gap-6">
                <div>
                    <motion.span
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-accent font-mono text-sm tracking-widest uppercase mb-4 block"
                    >
                        Selected Work
                    </motion.span>
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="text-section-title text-primary max-w-2xl"
                    >
                        Crafting digital products that solve real problems.
                    </motion.h2>
                </div>

                <motion.div
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2 }}
                >
                    <span className="text-secondary hidden md:block">
                        Scroll to explore &rarr;
                    </span>
                </motion.div>
            </div>

            {/* Horizontal Scroll Container */}
            <div className="flex overflow-x-auto pb-12 px-4 sm:px-6 lg:px-12 gap-6 md:gap-10 snap-x snap-mandatory hide-scrollbar">
                {projects.map((project, index) => (
                    <div key={index} className="snap-center">
                        <ProjectCard project={project} index={index} />
                    </div>
                ))}
            </div>
        </section>
    );
};

export default ProjectsShowcase;
