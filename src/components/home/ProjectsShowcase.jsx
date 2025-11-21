import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, ExternalLink } from 'lucide-react';
import { projects } from '../../data/projects';

const ProjectCard = ({ project, index }) => {
    const isExternal = project.isExternal;
    const LinkComponent = isExternal ? 'a' : Link;
    const linkProps = isExternal
        ? { href: project.path, target: "_blank", rel: "noopener noreferrer" }
        : { to: project.comingSoon ? '#' : project.path };

    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
            className={`group relative rounded-3xl overflow-hidden bg-surface border border-white/5 hover:border-white/10 transition-colors duration-500 ${project.span || 'md:col-span-1'}`}
        >
            <LinkComponent {...linkProps} className="block h-full w-full min-h-[400px] flex flex-col">
                {/* Image Background */}
                <div className="absolute inset-0 overflow-hidden">
                    <motion.img
                        whileHover={{ scale: 1.05 }}
                        transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
                        src={project.image}
                        alt={project.title}
                        className={`w-full h-full object-cover opacity-50 group-hover:opacity-30 transition-opacity duration-500 ${project.comingSoon ? 'grayscale' : ''}`}
                    />
                </div>

                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-background via-background/60 to-transparent opacity-90" />

                {/* Content */}
                <div className="relative z-10 p-6 md:p-8 flex flex-col h-full justify-end">
                    <div className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                        {/* Tags */}
                        <div className="flex flex-wrap items-center gap-2 mb-4">
                            <span className="px-3 py-1 text-xs font-mono border border-white/10 rounded-full text-accent backdrop-blur-md bg-black/40">
                                {project.category}
                            </span>
                            {project.tags && project.tags.slice(0, 2).map(tag => (
                                <span key={tag} className="px-3 py-1 text-xs font-mono border border-white/5 rounded-full text-secondary backdrop-blur-md bg-white/5">
                                    {tag}
                                </span>
                            ))}
                        </div>

                        {/* Title */}
                        <h3 className="text-2xl md:text-3xl lg:text-4xl font-display font-bold text-primary mb-3 leading-tight">
                            {project.title}
                        </h3>

                        {/* Description */}
                        <p className="text-secondary text-sm md:text-base line-clamp-2 mb-6 opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100 max-w-xl">
                            {project.description}
                        </p>

                        {/* Action */}
                        {!project.comingSoon && (
                            <div className="flex items-center gap-2 text-accent font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-200">
                                {isExternal ? (
                                    <>Visit Website <ExternalLink className="w-4 h-4" /></>
                                ) : (
                                    <>View Case Study <ArrowRight className="w-4 h-4" /></>
                                )}
                            </div>
                        )}
                    </div>
                </div>
            </LinkComponent>
        </motion.div>
    );
};

const ProjectsShowcase = () => {
    return (
        <section id="work" className="relative bg-background py-20 md:py-32 overflow-hidden">
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
            </div>

            {/* Bento Grid Container */}
            <div className="px-4 sm:px-6 lg:px-12">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {projects.map((project, index) => (
                        <ProjectCard key={index} project={project} index={index} />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default ProjectsShowcase;
