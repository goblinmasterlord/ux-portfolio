import React, { useEffect } from 'react';
import { motion, useAnimation, useInView } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import { useRef } from 'react';

const projects = [
    {
        title: "UXTools",
        description: "AI-powered design critique & accessibility checker.",
        tags: ["React", "Claude API"],
        image: "/images/UXTools.jpg",
        link: "https://github.com/goblinmasterlord/ux-toolkit",
        color: "violet"
    },
    {
        title: "NeuralUX",
        description: "Educational platform for AI-driven design.",
        tags: ["Next.js", "Supabase"],
        image: "/images/NeuralUX.jpg",
        link: "https://neuraluxstudio.com",
        color: "purple"
    },
    {
        title: "FactCheck",
        description: "Real-time audio/video claim verification.",
        tags: ["Python", "Whisper"],
        image: "/images/Isthattrue.jpg",
        link: "https://github.com/goblinmasterlord/robot-chicken",
        color: "indigo"
    },
    {
        title: "SmartBudget",
        description: "AI financial advisor & spending analyzer.",
        tags: ["React Native", "Gemini"],
        image: "/images/Budgeting.jpg",
        link: "https://github.com/goblinmasterlord/smart-budget-app",
        color: "teal"
    },
    {
        title: "Aromate",
        description: "Algorithmic fragrance recommendation engine.",
        tags: ["React", "Algorithm"],
        image: "/images/Aromate.jpg",
        link: "https://aromate.vercel.app/",
        color: "blue"
    },
    {
        title: "Artime",
        description: "Minimalist portfolio for creative studios.",
        tags: ["Framer Motion"],
        image: "/images/Artimestudio.jpg",
        link: "https://artimestudio.vercel.app/",
        color: "magenta"
    },
    {
        title: "BeautifulData",
        description: "Data visualization consultancy portfolio.",
        tags: ["React", "Vite"],
        image: "/images/Beautifuldata.jpg",
        link: "https://beautifuldata.co.uk",
        color: "emerald"
    },
    {
        title: "AI Doc Processor",
        description: "Automated document extraction & structuring.",
        tags: ["AI", "Automation"],
        image: "https://placehold.co/600x400/1a1a1a/white?text=AI+Docs",
        link: "https://ai-document-processing-rho.vercel.app/",
        color: "cyan"
    }
];

const BentoCard = ({ project, index }) => {
    // Individual card animation control for maximum stability
    const controls = useAnimation();
    const ref = useRef(null);
    const inView = useInView(ref, { once: true, margin: "-50px" });

    useEffect(() => {
        if (inView) {
            controls.start("visible");
        }
    }, [controls, inView]);

    return (
        <motion.a
            ref={ref}
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            initial="hidden"
            animate={controls}
            variants={{
                hidden: { opacity: 0, y: 30, scale: 0.95, filter: "blur(8px)" },
                visible: {
                    opacity: 1,
                    y: 0,
                    scale: 1,
                    filter: "blur(0px)",
                    transition: { duration: 0.7, delay: index * 0.05, ease: [0.2, 0.8, 0.2, 1] }
                }
            }}
            className="group relative overflow-hidden rounded-2xl bg-surface border border-white/5 hover:border-white/10 transition-all duration-500 h-[280px] flex flex-col"
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
            <div className="relative z-10 p-5 flex flex-col h-full justify-end">
                <div className="transform translate-y-2 group-hover:translate-y-0 transition-transform duration-500">
                    <div className="flex justify-between items-center mb-1">
                        <h3 className="text-lg font-display font-bold text-primary">{project.title}</h3>
                        <div className={`p-1.5 rounded-full bg-white/10 backdrop-blur-md text-${project.color}-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300`}>
                            <ArrowUpRight className="w-4 h-4" />
                        </div>
                    </div>

                    <p className="text-secondary text-xs mb-3 line-clamp-2 group-hover:text-primary/90 transition-colors duration-300">
                        {project.description}
                    </p>

                    <div className="flex flex-wrap gap-1.5">
                        {project.tags.map((tag, i) => (
                            <span
                                key={i}
                                className="text-[10px] font-mono px-1.5 py-0.5 rounded-md bg-white/10 backdrop-blur-sm text-primary/80 border border-white/5"
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
                        className="text-section-title text-primary max-w-2xl mb-6"
                    >
                        Experiments, Tools, and <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent-blue to-accent-purple">Side Quests</span>
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className="text-lg md:text-xl text-secondary max-w-2xl leading-relaxed"
                    >
                        A collection of experimental projects, open-source tools, and creative coding explorations.
                    </motion.p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
                    {projects.map((project, index) => (
                        <BentoCard key={index} project={project} index={index} />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default HobbyProjects;
