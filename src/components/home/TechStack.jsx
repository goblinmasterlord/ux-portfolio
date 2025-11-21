import React, { useRef, useState } from 'react';
import { motion } from 'framer-motion';

const techStack = [
    { name: "React", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
    { name: "Next.js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg" },
    { name: "Node.js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" },
    { name: "Python", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" },
    { name: "Tailwind", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg" },
    { name: "TypeScript", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg" },
    { name: "Supabase", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/supabase/supabase-original.svg" },
    { name: "Vite", icon: "https://vitejs.dev/logo.svg" },
    { name: "Framer", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/framermotion/framermotion-original.svg" },
    { name: "OpenAI", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/openai/openai-original.svg" }, // Using OpenAI logo for generic AI
    { name: "Elastic", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/elasticsearch/elasticsearch-original.svg" },
    { name: "Google", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/google/google-original.svg" }
];

const MagneticIcon = ({ tech }) => {
    const ref = useRef(null);
    const [position, setPosition] = useState({ x: 0, y: 0 });

    const handleMouseMove = (e) => {
        const { clientX, clientY } = e;
        const { left, top, width, height } = ref.current.getBoundingClientRect();
        const x = clientX - (left + width / 2);
        const y = clientY - (top + height / 2);
        setPosition({ x: x * 0.2, y: y * 0.2 });
    };

    const handleMouseLeave = () => {
        setPosition({ x: 0, y: 0 });
    };

    return (
        <motion.div
            ref={ref}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            animate={{ x: position.x, y: position.y }}
            transition={{ type: "spring", stiffness: 150, damping: 15, mass: 0.1 }}
            className="group relative flex flex-col items-center justify-center p-6 rounded-2xl bg-surface border border-white/5 hover:border-accent/20 hover:bg-white/5 transition-colors duration-300"
        >
            <div className="w-12 h-12 md:w-16 md:h-16 mb-4 relative flex items-center justify-center">
                <img
                    src={tech.icon}
                    alt={tech.name}
                    className="w-full h-full object-contain filter grayscale group-hover:grayscale-0 transition-all duration-300 transform group-hover:scale-110"
                />
                {/* Glow effect behind icon */}
                <div className="absolute inset-0 bg-accent/20 blur-xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </div>
            <span className="text-sm font-mono text-secondary group-hover:text-primary transition-colors">
                {tech.name}
            </span>
        </motion.div>
    );
};

const TechStack = () => {
    return (
        <section className="py-20 bg-background border-y border-white/5 relative overflow-hidden">
            <div className="max-w-[1800px] mx-auto px-4 sm:px-6 lg:px-12">
                <div className="text-center mb-16">
                    <span className="text-accent font-mono text-sm tracking-widest uppercase mb-4 block">
                        The Toolkit
                    </span>
                    <h2 className="text-section-title text-primary">
                        Powered by Modern Tech
                    </h2>
                </div>

                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4 md:gap-8">
                    {techStack.map((tech, index) => (
                        <MagneticIcon key={index} tech={tech} />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default TechStack;
