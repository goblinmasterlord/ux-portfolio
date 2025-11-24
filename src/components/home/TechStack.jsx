import React, { useRef, useState } from 'react';
import { motion } from 'framer-motion';

const techStack = [
    { name: "React", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
    { name: "Next.js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg" },
    { name: "TypeScript", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg" },
    { name: "Tailwind", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg" },
    { name: "Supabase", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/supabase/supabase-original.svg" },
    { name: "Figma", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg" },
    { name: "Azure DevOps", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/azure/azure-original.svg" },
    { name: "Google Cloud", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/googlecloud/googlecloud-original.svg" },
    { name: "Vercel AI SDK", icon: "https://assets.vercel.com/image/upload/v1588805858/repositories/vercel/logo.png" }, // Vercel Logo
    { name: "OpenAI", icon: "https://cdn.worldvectorlogo.com/logos/openai-2.svg" }, // Icon only
    { name: "Anthropic", icon: "https://cdn.simpleicons.org/anthropic/white" }, // Claude Logo (White for dark mode)
    { name: "Gemini", icon: "https://www.gstatic.com/lamda/images/gemini_sparkle_v002_d4735304ff6292a690345.svg" }, // Gemini Sparkle
    { name: "Linear", icon: "https://cdn.simpleicons.org/linear/white" }, // Linear Logo (White for dark mode)
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
            className="group relative flex flex-col items-center justify-center p-4 rounded-2xl bg-surface border border-white/5 hover:border-accent/20 hover:bg-white/5 transition-colors duration-300"
        >
            <div className="w-10 h-10 md:w-12 md:h-12 mb-3 relative flex items-center justify-center">
                <img
                    src={tech.icon}
                    alt={tech.name}
                    className="w-full h-full object-contain filter grayscale group-hover:grayscale-0 transition-all duration-300 transform group-hover:scale-110"
                />
                {/* Glow effect behind icon */}
                <div className="absolute inset-0 bg-accent/20 blur-xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </div>
            <span className="text-xs font-mono text-secondary group-hover:text-primary transition-colors">
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

                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3 md:gap-5">
                    {techStack.map((tech, index) => (
                        <MagneticIcon key={index} tech={tech} />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default TechStack;
