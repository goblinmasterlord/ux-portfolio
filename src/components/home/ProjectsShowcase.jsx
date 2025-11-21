import React, { useRef } from 'react';
import { motion, useScroll, useTransform, useMotionTemplate, useMotionValue } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import { Link } from 'react-router-dom';

// Import assets
import paynanceImage from '../../assets/projects/paynance-1.png';
import everproveImage from '../../assets/projects/everprove.png';
import loccocityImage from '../../assets/projects/loccocity.png';

// Project Data
const projects = [
    {
        id: 'paynance',
        title: "Paynance",
        category: "Fintech / SaaS",
        tag: "Financial Systems Design",
        description: "Designed a comprehensive fintech ecosystem spanning web, mobile, and POS terminals. Led the UX overhaul of the merchant platform serving 1,000+ active merchants, focusing on real-time analytics and automated invoicing.",
        image: paynanceImage,
        path: "/projects/paynance",
        color: "blue",
        layout: "large" // 2x2
    },
    {
        id: 'everprove',
        title: "Everprove",
        category: "LegalTech",
        tag: "Decentralized Trust",
        description: "Designed trustless legal-tech solutions on blockchain infrastructure. Simplified cryptographic processes into intuitive user journeys, increasing user activation by 40% through a redesigned onboarding flow.",
        image: everproveImage,
        path: "/projects/everprove",
        color: "emerald",
        layout: "tall" // 1x2
    },
    {
        id: 'loccocity',
        title: "Loccocity",
        category: "Smart City",
        tag: "Augmented Reality UX",
        description: "Gamified urban exploration platform connecting local businesses with citizens. Features immersive AR challenges and a rewards system to boost local engagement and tourism.",
        image: loccocityImage,
        path: "/projects/loccocity",
        color: "orange",
        layout: "standard" // 1x1
    },
    {
        id: 'eclipse',
        title: "Eclipse",
        category: "EdTech",
        tag: "Adaptive Learning Algorithms",
        description: "An adaptive AI learning platform that personalizes English language education. Uses natural language processing to tailor curriculum to each student's pace, significantly reducing manual processing time.",
        image: "/images/Eclipse.jpg",
        path: "/projects/eclipse",
        color: "violet",
        layout: "standard" // 1x1
    },
    {
        id: 'kovetkezotoken',
        title: "KovetkezoToken",
        category: "Crypto News",
        tag: "Data Visualization",
        description: "Hungary's leading digital asset intelligence hub. Provides real-time market data, sentiment analysis, and expert insights, translating complex financial data into accessible dashboards.",
        image: "/images/KovetkezoToken.jpg",
        path: "/projects/kovetkezotoken",
        color: "indigo",
        layout: "standard" // 1x1
    }
];

const Card = ({ project }) => {
    const ref = useRef(null);
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start end", "end start"]
    });

    // Parallax effect for image - kept subtle
    const y = useTransform(scrollYProgress, [0, 1], [-20, 20]);

    // Mouse move effect for sheen
    const mouseX = useMotionValue(0);
    const mouseY = useMotionValue(0);

    const handleMouseMove = ({ clientX, clientY, currentTarget }) => {
        const { left, top } = currentTarget.getBoundingClientRect();
        mouseX.set(clientX - left);
        mouseY.set(clientY - top);
    };

    // Layout classes for 3-column grid
    const getLayoutClasses = (layout) => {
        switch (layout) {
            case 'large': return 'md:col-span-2 md:row-span-2 min-h-[500px]';
            case 'tall': return 'md:col-span-1 md:row-span-2 min-h-[500px]';
            case 'standard': return 'md:col-span-1 md:row-span-1 min-h-[350px]';
            default: return 'md:col-span-1 min-h-[350px]';
        }
    };

    return (
        <motion.div
            ref={ref}
            initial={{ opacity: 0, y: 50, scale: 0.95, filter: "blur(8px)" }}
            whileInView={{ opacity: 1, y: 0, scale: 1, filter: "blur(0px)" }}
            viewport={{ once: true, margin: "-50px" }} // Robust trigger
            transition={{ duration: 0.8, ease: [0.2, 0.8, 0.2, 1] }} // Luxury ease
            className={`group relative rounded-3xl overflow-hidden bg-surface border border-white/5 ${getLayoutClasses(project.layout)}`}
            onMouseMove={handleMouseMove}
        >
            <Link to={project.path} className="block w-full h-full relative">
                {/* Image Container with Parallax */}
                <div className="absolute inset-0 overflow-hidden">
                    <motion.div style={{ y }} className="w-full h-[120%] -y-[10%]">
                        <img
                            src={project.image}
                            alt={project.title}
                            className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
                        />
                    </motion.div>
                    <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-black/20 opacity-60 group-hover:opacity-90 transition-opacity duration-500" />
                </div>

                {/* Content Overlay */}
                <div className="absolute inset-0 p-6 md:p-8 flex flex-col justify-end z-20">
                    <div className="transform translate-y-8 group-hover:translate-y-0 transition-transform duration-500 ease-out">

                        {/* Header: Category & Tag */}
                        <div className="flex justify-between items-start mb-3">
                            <div className="flex flex-col gap-2">
                                <span className={`inline-block px-3 py-1 rounded-full bg-${project.color}-500/20 text-${project.color}-300 text-xs font-mono border border-${project.color}-500/30 backdrop-blur-sm w-fit`}>
                                    {project.category}
                                </span>
                                <span className="text-white/60 text-xs font-mono uppercase tracking-wider">
                                    {project.tag}
                                </span>
                            </div>

                            <div className="p-3 rounded-full bg-white/10 backdrop-blur-md text-white opacity-0 group-hover:opacity-100 transition-all duration-300 group-hover:rotate-45 border border-white/10">
                                <ArrowUpRight className="w-5 h-5" />
                            </div>
                        </div>

                        <h3 className="text-2xl md:text-3xl font-display font-bold text-white mb-2 tracking-tight">
                            {project.title}
                        </h3>

                        {/* Description - Hidden by default, reveals on hover */}
                        <div className="h-0 overflow-hidden group-hover:h-auto transition-all duration-500 ease-in-out opacity-0 group-hover:opacity-100">
                            <p className="text-gray-300 text-sm md:text-base pt-2 leading-relaxed">
                                {project.description}
                            </p>
                        </div>
                    </div>
                </div>

                {/* Hover Sheen Effect */}
                <motion.div
                    className="absolute inset-0 z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none mix-blend-overlay"
                    style={{
                        background: useMotionTemplate`
              radial-gradient(
                600px circle at ${mouseX}px ${mouseY}px,
                rgba(255,255,255,0.15),
                transparent 80%
              )
            `
                    }}
                />
            </Link>
        </motion.div>
    );
};

const ProjectsShowcase = () => {
    return (
        <section id="work" className="py-20 md:py-32 px-4 sm:px-6 lg:px-12 bg-background relative">
            {/* Ambient Background */}
            <div className="absolute top-1/4 right-0 w-[800px] h-[800px] bg-blue/5 rounded-full blur-[150px] pointer-events-none" />

            <div className="max-w-[1600px] mx-auto relative z-10">
                <div className="mb-16 md:mb-24">
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
                        className="text-5xl md:text-7xl font-display font-bold text-primary max-w-4xl leading-tight tracking-tight mb-6"
                    >
                        Crafting digital <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue via-indigo-500 to-violet">masterpieces.</span>
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className="text-lg md:text-xl text-secondary max-w-2xl leading-relaxed"
                    >
                        A selection of projects where strategy meets design, delivering impactful results for global clients.
                    </motion.p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
                    {projects.map((project) => (
                        <Card key={project.id} project={project} />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default ProjectsShowcase;
