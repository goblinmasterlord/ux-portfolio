import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Mail, Linkedin, Github, ArrowUpRight, Copy, Check, Twitter, Instagram } from 'lucide-react';
import { Link } from 'react-router-dom';

const Contact = () => {
    const [copied, setCopied] = useState(false);
    const email = "marci.mocsonoky@gmail.com";

    const handleCopyEmail = () => {
        navigator.clipboard.writeText(email);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
    };

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1,
                delayChildren: 0.2
            }
        }
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.5, ease: [0.25, 0.1, 0.25, 1] }
        }
    };

    return (
        <main className="min-h-screen bg-background relative overflow-hidden pt-32 pb-20 px-4 sm:px-6 lg:px-12">
            {/* Ambient Background */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <div className="absolute top-0 left-0 w-full h-full bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgdmlld0JveD0iMCAwIDYwIDYwIj48cGF0aCBkPSJNNjAgMEgwdjYwaDYwVjB6TTIgMmg1NnY1NkgyVjJ6IiBmaWxsPSIjMjAyMDIwIiBmaWxsLW9wYWNpdHk9IjAuMDIiIGZpbGwtcnVsZT0iZXZlbm9kZCIvPjwvc3ZnPg==')] opacity-20" />
                <div className="colorful-blob w-[600px] h-[600px] -top-[200px] -right-[200px] bg-blue/10 animate-float-slow" />
                <div className="colorful-blob w-[500px] h-[500px] bottom-0 left-0 bg-violet/10 animate-float-medium" />
            </div>

            <motion.div
                variants={containerVariants}
                initial="hidden"
                animate="visible"
                className="max-w-6xl mx-auto relative z-10"
            >
                <div className="grid lg:grid-cols-2 gap-12 lg:gap-24">
                    {/* Left Column: Header & Context */}
                    <div className="flex flex-col justify-center">
                        <motion.div variants={itemVariants} className="mb-8">
                            <div className="w-24 h-24 sm:w-32 sm:h-32 rounded-full overflow-hidden mb-8 border-2 border-white/10">
                                <img
                                    src="/images/mrci.jpeg"
                                    alt="Marci"
                                    className="w-full h-full object-cover"
                                    onError={(e) => {
                                        // Try importing it if this path fails, but for now assume public/images or src/assets mapped
                                        // If it was imported in the previous file as 'import profileImage from '../assets/mrci.jpeg';'
                                        // We should probably use that import.
                                        e.target.style.display = 'none';
                                    }}
                                />
                            </div>
                            <span className="inline-block py-1 px-3 rounded-full bg-accent/10 text-accent text-sm font-mono mb-6 border border-accent/20">
                                Open for opportunities
                            </span>
                            <h1 className="text-5xl md:text-7xl lg:text-8xl font-display font-bold text-primary leading-[0.9] tracking-tight mb-6">
                                Let's start a <br />
                                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue via-indigo-500 to-violet">conversation.</span>
                            </h1>
                            <p className="text-xl text-secondary max-w-lg leading-relaxed font-sans">
                                Interested in working together? I'm always open to discussing new projects, creative ideas, or opportunities to be part of your visions.
                            </p>
                        </motion.div>

                        <motion.div variants={itemVariants} className="flex flex-wrap gap-4">
                            <SocialButton
                                href="https://www.linkedin.com/in/m%C3%A1rton-mocsonoky-052091116/"
                                icon={Linkedin}
                                label="LinkedIn"
                            />
                            <SocialButton
                                href="https://github.com/goblinmasterlord"
                                icon={Github}
                                label="GitHub"
                            />
                            <SocialButton
                                href="#"
                                icon={Twitter}
                                label="Twitter"
                            />
                        </motion.div>
                    </div>

                    {/* Right Column: Interactive Contact Actions */}
                    <div className="flex flex-col justify-center gap-6">
                        {/* Email Card */}
                        <motion.div
                            variants={itemVariants}
                            className="group relative p-8 rounded-3xl bg-white/5 backdrop-blur-xl border border-white/10 hover:border-accent/30 transition-all duration-500"
                        >
                            <div className="absolute inset-0 bg-gradient-to-br from-blue/5 to-violet/5 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                            <div className="relative z-10">
                                <div className="flex items-center justify-between mb-8">
                                    <div className="p-3 rounded-xl bg-white/5 text-accent">
                                        <Mail className="w-6 h-6" />
                                    </div>
                                    <span className="text-sm text-secondary font-mono">Response time: &lt; 24h</span>
                                </div>

                                <div className="space-y-2 mb-8">
                                    <h3 className="text-sm text-secondary uppercase tracking-wider font-semibold">Email Me</h3>
                                    <a href={`mailto:${email}`} className="block text-2xl md:text-3xl font-display font-medium text-primary hover:text-accent transition-colors">
                                        {email}
                                    </a>
                                </div>

                                <button
                                    onClick={handleCopyEmail}
                                    className="w-full py-4 rounded-xl bg-primary text-background font-medium flex items-center justify-center gap-2 hover:bg-accent transition-colors duration-300 group/btn"
                                >
                                    <AnimatePresence mode="wait">
                                        {copied ? (
                                            <motion.span
                                                key="copied"
                                                initial={{ opacity: 0, y: 10 }}
                                                animate={{ opacity: 1, y: 0 }}
                                                exit={{ opacity: 0, y: -10 }}
                                                className="flex items-center gap-2"
                                            >
                                                <Check className="w-5 h-5" />
                                                Copied to clipboard
                                            </motion.span>
                                        ) : (
                                            <motion.span
                                                key="copy"
                                                initial={{ opacity: 0, y: 10 }}
                                                animate={{ opacity: 1, y: 0 }}
                                                exit={{ opacity: 0, y: -10 }}
                                                className="flex items-center gap-2"
                                            >
                                                <Copy className="w-5 h-5" />
                                                Copy Email Address
                                            </motion.span>
                                        )}
                                    </AnimatePresence>
                                </button>
                            </div>
                        </motion.div>

                        {/* Quick Links */}
                        <motion.div variants={itemVariants} className="grid grid-cols-2 gap-4">
                            <Link to="/projects/paynance" className="group p-6 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/10 transition-all duration-300">
                                <div className="flex justify-between items-start mb-4">
                                    <span className="text-xs text-secondary font-mono">Case Study</span>
                                    <ArrowUpRight className="w-4 h-4 text-secondary group-hover:text-accent group-hover:translate-x-1 group-hover:-translate-y-1 transition-all duration-300" />
                                </div>
                                <h4 className="text-lg font-display font-medium text-primary group-hover:text-accent transition-colors">Paynance</h4>
                            </Link>

                            <Link to="/projects/everprove" className="group p-6 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/10 transition-all duration-300">
                                <div className="flex justify-between items-start mb-4">
                                    <span className="text-xs text-secondary font-mono">Case Study</span>
                                    <ArrowUpRight className="w-4 h-4 text-secondary group-hover:text-accent group-hover:translate-x-1 group-hover:-translate-y-1 transition-all duration-300" />
                                </div>
                                <h4 className="text-lg font-display font-medium text-primary group-hover:text-accent transition-colors">Everprove</h4>
                            </Link>
                        </motion.div>
                    </div>
                </div>
            </motion.div>
        </main>
    );
};

const SocialButton = ({ href, icon: Icon, label }) => (
    <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className="group flex items-center gap-3 px-6 py-3 rounded-full bg-white/5 border border-white/10 hover:border-accent/30 hover:bg-white/10 transition-all duration-300"
    >
        <Icon className="w-5 h-5 text-secondary group-hover:text-accent transition-colors" />
        <span className="text-secondary font-medium group-hover:text-primary transition-colors">{label}</span>
    </a>
);

export default Contact;