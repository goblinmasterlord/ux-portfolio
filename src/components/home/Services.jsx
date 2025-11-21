import React from 'react';
import { motion } from 'framer-motion';
import { Sparkles, Lightbulb, Bot, Brain } from 'lucide-react';

const services = [
    {
        icon: <Sparkles className="w-6 h-6" />,
        title: "UX Consultation",
        description: "I help teams dig into what users really need. We'll find the sticking points and map out clear, practical solutions.",
        features: ["User Research", "UX Audits", "Journey Mapping"]
    },
    {
        icon: <Lightbulb className="w-6 h-6" />,
        title: "Product Strategy",
        description: "I work with teams to clarify product vision, understand the market, and define features that people will actually use.",
        features: ["Product Vision", "Market Insights", "Growth Strategy"]
    },
    {
        icon: <Bot className="w-6 h-6" />,
        title: "AI Integration",
        description: "I help businesses figure out where AI can actually make a difference and design practical, valuable AI solutions.",
        features: ["Use-Case Discovery", "Solution Design", "LLM Integration"]
    },
    {
        icon: <Brain className="w-6 h-6" />,
        title: "AI Workshops",
        description: "I run hands-on workshops teaching how to effectively use Large Language Models (LLMs) to boost productivity.",
        features: ["LLM Training", "Prompt Engineering", "Team Upskilling"]
    }
];

const ServiceCard = ({ service, index }) => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
            className="group relative p-8 rounded-2xl bg-surface/50 border border-white/5 hover:border-accent/20 transition-all duration-300 hover:bg-surface"
        >
            <div className="absolute inset-0 bg-gradient-to-br from-accent/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl" />

            <div className="relative z-10">
                <div className="w-12 h-12 rounded-lg bg-white/5 flex items-center justify-center text-accent mb-6 group-hover:scale-110 transition-transform duration-300">
                    {service.icon}
                </div>

                <h3 className="text-xl font-display font-bold text-primary mb-4 group-hover:text-accent transition-colors">
                    {service.title}
                </h3>

                <p className="text-secondary text-sm leading-relaxed mb-6">
                    {service.description}
                </p>

                <div className="flex flex-wrap gap-2">
                    {service.features.map((feature, i) => (
                        <span
                            key={i}
                            className="text-xs font-mono px-2 py-1 rounded bg-white/5 text-secondary group-hover:text-primary transition-colors"
                        >
                            {feature}
                        </span>
                    ))}
                </div>
            </div>
        </motion.div>
    );
};

const Services = () => {
    return (
        <section id="services" className="py-20 md:py-32 bg-background relative overflow-hidden">
            {/* Decorative Elements */}
            <div className="absolute top-1/2 left-0 w-1/3 h-1/3 bg-accent/5 rounded-full blur-[100px] -translate-y-1/2 pointer-events-none" />

            <div className="max-w-[1800px] mx-auto px-4 sm:px-6 lg:px-12 relative z-10">
                <div className="mb-16 md:mb-24 max-w-3xl">
                    <motion.span
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-accent font-mono text-sm tracking-widest uppercase mb-4 block"
                    >
                        Expertise
                    </motion.span>
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="text-section-title text-primary"
                    >
                        Helping you build better digital products through design and strategy.
                    </motion.h2>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {services.map((service, index) => (
                        <ServiceCard key={index} service={service} index={index} />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Services;
