import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Github, ExternalLink, ArrowUpRight } from 'lucide-react';

const projects = [
    {
        title: "UXTools",
        description: "A collection of AI-powered tools I built to help with everyday UX tasks. Includes design critique, research analysis, and accessibility checks.",
        tags: ["React", "Node.js", "Claude API"],
        image: "/images/UXTools.jpg",
        link: "https://github.com/goblinmasterlord/ux-toolkit",
        color: "violet",
        size: "large" // Spans 2 cols
    },
    {
        title: "NeuralUXStudio",
        description: "A platform documenting my journey and learnings in AI-driven UX design, featuring tutorials and case studies.",
        tags: ["Next.js", "Supabase", "Education"],
        image: "/images/NeuralUX.jpg",
        link: "https://neuraluxstudio.com",
        color: "purple",
        size: "medium"
    },
    {
        title: "Is that REALLY true?",
        description: "Real-time fact-checker built for a hackathon. Listens to audio/video and flags questionable claims using RAG and Whisper.",
        tags: ["Python", "Whisper", "RAG"],
        image: "/images/Isthattrue.jpg",
        link: "https://github.com/goblinmasterlord/robot-chicken",
        color: "indigo",
        size: "medium"
    },
    {
        title: "SmartBudget",
        description: "AI-powered mobile app that analyzes spending habits and provides personalized financial advice.",
        tags: ["React Native", "Gemini API"],
        image: "/images/Budgeting.jpg",
        link: "https://github.com/goblinmasterlord/smart-budget-app",
        color: "teal",
        size: "medium"
    },
    {
        title: "Aromate",
        description: "Fragrance recommendation engine helping users find their perfect scent through interactive quizzes.",
        tags: ["React", "Algorithm"],
        image: "/images/Aromate.jpg",
        link: "https://aromate.vercel.app/",
        color: "blue",
        size: "large"
    },
    {
        title: "ArtimeStudio",
        description: "Portfolio website built for a creative studio to showcase their work with smooth animations.",
        tags: ["React", "Framer Motion"],
        image: "/images/Artimestudio.jpg",
        link: "https://artimestudio.vercel.app/",
        color: "magenta",
        size: "medium"
    },
    {
        title: "BeautifulData",
        description: "Professional consultancy site showcasing data services and case studies.",
        tags: ["React", "Vite"],
        image: "/images/Beautifuldata.jpg",
        link: "https://beautifuldata.co.uk",
        color: "emerald",
        size: "medium"
    },
    {
        title: "Drnd.hu",
        description: "Modern website for a Hungarian law firm with clear service presentation.",
        tags: ["React", "Tailwind"],
        image: "/images/Drnd.jpg",
        link: "https://drnd.hu",
        color: "orange",
        size: "medium"
    }
];

const BentoCard = ({ project, index }) => {
    const isLarge = project.size === "large";

    return (
        <motion.a
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.05 }}
            className={`group relative overflow-hidden rounded-3xl bg-surface border border-white/5 hover:border-white/10 transition-all duration-500 ${isLarge ? 'md:col-span-2 md:row-span-2' : 'col-span-1'
                } min-h-[300px] flex flex-col`}
        >
            {/* Background Image with Overlay */}
            <div className="absolute inset-0 z-0">
                <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background via-background/80 to-transparent opacity-90 group-hover:opacity-80 transition-opacity duration-500" />
            </div>

            {/* Content */}
            <div className="relative z-10 p-6 flex flex-col h-full justify-end">
                <div className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                    <div className="flex justify-between items-center mb-2">
                        <h3 className="text-2xl font-display font-bold text-primary">{project.title}</h3>
                        <div className={`p-2 rounded-full bg-white/10 backdrop-blur-md text-${project.color}-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300`}>
                            <ArrowUpRight className="w-5 h-5" />
                        </div>
                    </div>

                    <p className="text-secondary text-sm mb-4 line-clamp-2 group-hover:line-clamp-none transition-all duration-300">
                        {project.description}
                    </p>

                    <div className="flex flex-wrap gap-2">
                        {project.tags.map((tag, i) => (
                            <span
                                key={i}
                                className="text-xs font-mono px-2 py-1 rounded-md bg-white/10 backdrop-blur-sm text-primary/80 border border-white/5"
                            >
                                {tag}
                            </span>
                        ))}
                    </div>
                </div>
            </div>
        </motion.a>
    );
};

const HobbyProjects = () => {
    return (
        <section id="hobby-projects" className="py-20 md:py-32 bg-background relative overflow-hidden">
            {/* Background Elements */}
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
                <div className="absolute top-1/4 left-0 w-[500px] h-[500px] bg-accent-purple/5 rounded-full blur-[120px]" />
                <div className="absolute bottom-1/4 right-0 w-[500px] h-[500px] bg-accent-blue/5 rounded-full blur-[120px]" />
            </div>

            <div className="max-w-[1800px] mx-auto px-4 sm:px-6 lg:px-12 relative z-10">
                <div className="mb-12 md:mb-16">
                    <motion.span
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-accent font-mono text-sm tracking-widest uppercase mb-4 block"
                    >
                        Creative Playground
                    </motion.span>
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="text-section-title text-primary max-w-2xl"
                    >
                        Experiments, Tools, and <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent-blue to-accent-purple">Side Quests</span>
                    </motion.h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6 auto-rows-[300px]">
                    {projects.map((project, index) => (
                        <BentoCard key={index} project={project} index={index} />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default HobbyProjects;
