import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Layout, Code, Smartphone, Database, Zap, Globe } from 'lucide-react';

const services = [
    {
        icon: Layout,
        title: "UI/UX Design",
        description: "Crafting intuitive, user-centric interfaces that blend aesthetics with functionality. I focus on creating systems that scale.",
        color: "blue"
    },
    {
        icon: Code,
        title: "Frontend Development",
        description: "Building responsive, high-performance web applications using modern frameworks like React, Next.js, and Tailwind CSS.",
        color: "purple"
    },
    {
        icon: Smartphone,
        title: "Mobile Solutions",
        description: "Designing and developing cross-platform mobile experiences that feel native and fluid on any device.",
        color: "emerald"
    },
    {
        icon: Database,
        title: "System Architecture",
        description: "Planning and implementing robust, scalable backend structures and database schemas for data-heavy applications.",
        color: "orange"
    },
    {
        icon: Zap,
        title: "Performance Optimization",
        description: "Auditing and refining applications for maximum speed, accessibility, and SEO performance.",
        color: "yellow"
    },
    {
        icon: Globe,
        title: "Web3 & Blockchain",
        description: "Designing trustless interfaces and integrating decentralized protocols into seamless user journeys.",
        color: "cyan"
    }
];

const ServiceCard = ({ service, index }) => {
    const ref = useRef(null);
    const inView = useInView(ref, { once: true, margin: "-50px" });

    return (
        <motion.div
            ref={ref}
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6, delay: index * 0.1, ease: [0.2, 0.8, 0.2, 1] }}
            className="group p-8 rounded-3xl bg-surface border border-white/5 hover:border-white/10 hover:bg-white/5 transition-all duration-300"
        >
            <div className={`w-12 h-12 rounded-xl bg-${service.color}-500/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                <service.icon className={`w-6 h-6 text-${service.color}-400`} />
            </div>
            <h3 className="text-xl font-display font-bold text-primary mb-3">
                {service.title}
            </h3>
            <p className="text-secondary text-sm leading-relaxed group-hover:text-primary/80 transition-colors duration-300">
                {service.description}
            </p>
        </motion.div>
    );
};

const Services = () => {
    return (
        <section id="services" className="py-20 md:py-32 bg-background relative">
            <div className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-12">
                <div className="mb-16 md:mb-24">
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
                        className="text-section-title text-primary max-w-3xl"
                    >
                        Comprehensive solutions for <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue via-indigo-500 to-purple-500">digital transformation.</span>
                    </motion.h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {services.map((service, index) => (
                        <ServiceCard key={index} service={service} index={index} />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Services;
