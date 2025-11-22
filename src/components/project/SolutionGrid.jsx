import React from 'react';
import { motion } from 'framer-motion';

const SolutionGrid = ({ solutions }) => {
    // Determine grid columns based on number of items
    const getGridClass = (count) => {
        if (count === 2) return "md:grid-cols-2";
        if (count === 3) return "md:grid-cols-3";
        return "md:grid-cols-2 lg:grid-cols-4";
    };

    return (
        <section className="py-32 relative overflow-hidden">
            <div className="container mx-auto px-6 relative z-10">
                <div className="mb-20 max-w-3xl">
                    <span className="text-accent font-mono tracking-widest uppercase text-sm">The Solution</span>
                    <h2 className="text-5xl md:text-7xl font-display font-bold mt-4 mb-8">
                        Engineered for <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-white/50">Impact.</span>
                    </h2>
                </div>

                <div className={`grid grid-cols-1 ${getGridClass(solutions.length)} gap-6`}>
                    {solutions.map((solution, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.1 }}
                            className="group relative p-8 rounded-3xl bg-surface border border-white/10 overflow-hidden hover:border-accent/30 transition-all duration-500 flex flex-col h-full"
                        >
                            {/* Hover Gradient */}
                            <div className="absolute inset-0 bg-gradient-to-br from-accent/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                            <div className="relative z-10 flex flex-col h-full">
                                <div className="mb-auto">
                                    <div className="w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center text-accent mb-6 group-hover:scale-110 group-hover:bg-accent group-hover:text-black transition-all duration-500">
                                        {solution.icon}
                                    </div>
                                    <h3 className="text-2xl font-display font-bold mb-4">{solution.title}</h3>
                                </div>

                                <ul className="space-y-3 mt-8">
                                    {solution.points.map((point, i) => (
                                        <li key={i} className="flex items-start gap-3 text-secondary group-hover:text-primary transition-colors">
                                            <div className="w-1.5 h-1.5 rounded-full bg-accent/50 mt-2 shrink-0" />
                                            <span className="text-sm leading-relaxed">{point}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default SolutionGrid;
