import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { ArrowLeft, Clock, Brain, Sparkles, Zap, Languages, TrendingUp, Users } from 'lucide-react';
import { Link } from 'react-router-dom';
import Button from '../../components/ui/Button';

const Eclipse = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <main className="bg-background min-h-screen text-primary selection:bg-accent/30 flex flex-col items-center justify-center relative overflow-hidden">

            {/* Enhanced Background with Premium Gradients */}
            <div className="absolute inset-0 z-0">
                {/* Animated Gradient Orbs */}
                <motion.div
                    animate={{
                        scale: [1, 1.2, 1],
                        opacity: [0.3, 0.5, 0.3]
                    }}
                    transition={{
                        duration: 8,
                        repeat: Infinity,
                        ease: [0.2, 0.8, 0.2, 1]
                    }}
                    className="absolute top-1/4 left-1/4 w-[600px] h-[600px] bg-violet-500/20 rounded-full blur-[150px]"
                />
                <motion.div
                    animate={{
                        scale: [1.2, 1, 1.2],
                        opacity: [0.4, 0.6, 0.4]
                    }}
                    transition={{
                        duration: 10,
                        repeat: Infinity,
                        ease: [0.2, 0.8, 0.2, 1]
                    }}
                    className="absolute bottom-1/4 right-1/4 w-[700px] h-[700px] bg-blue-500/20 rounded-full blur-[150px]"
                />
                <motion.div
                    animate={{
                        scale: [1, 1.3, 1],
                        opacity: [0.2, 0.4, 0.2]
                    }}
                    transition={{
                        duration: 12,
                        repeat: Infinity,
                        ease: [0.2, 0.8, 0.2, 1]
                    }}
                    className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-emerald-500/15 rounded-full blur-[140px]"
                />

                {/* Grid Pattern Overlay */}
                <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)]" />
            </div>

            {/* Back Button */}
            <Link
                to="/"
                className="fixed top-6 right-6 z-[60] p-3 rounded-full bg-black/50 backdrop-blur-md border border-white/10 text-white hover:bg-white hover:text-black transition-all duration-300 group"
            >
                <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
                <span className="sr-only">Back to Home</span>
            </Link>

            {/* Main Content */}
            <div className="relative z-10 container mx-auto px-6 text-center">
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, ease: [0.2, 0.8, 0.2, 1] }}
                    className="max-w-5xl mx-auto"
                >
                    {/* Status Badge */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.3, duration: 0.6, ease: [0.2, 0.8, 0.2, 1] }}
                        className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-gradient-to-r from-violet-500/10 to-blue-500/10 border border-violet-500/20 backdrop-blur-sm mb-10"
                    >
                        <Clock className="w-4 h-4 text-violet-400 animate-pulse" />
                        <span className="text-sm font-mono text-violet-400 uppercase tracking-widest font-medium">Coming Soon</span>
                    </motion.div>

                    {/* Project Title */}
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.5, duration: 0.8, ease: [0.2, 0.8, 0.2, 1] }}
                        className="text-6xl md:text-8xl lg:text-9xl font-display font-bold mb-8 tracking-tight leading-[0.9]"
                    >
                        Eclipse <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-400 via-blue-500 to-emerald-400 animate-gradient">
                            Education
                        </span>
                    </motion.h1>

                    {/* Project Description */}
                    <motion.p
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.7, duration: 0.8 }}
                        className="text-xl md:text-2xl text-secondary font-light leading-relaxed max-w-3xl mx-auto mb-16"
                    >
                        An adaptive AI learning platform revolutionizing language education through personalized learning paths and intelligent content generation.
                    </motion.p>

                    {/* Feature Highlights Grid */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.9, duration: 0.8 }}
                        className="grid md:grid-cols-3 gap-6 mb-16 max-w-4xl mx-auto"
                    >
                        {/* Feature 1 */}
                        <div className="group relative p-6 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm hover:bg-white/10 hover:border-violet-500/30 transition-all duration-500">
                            <div className="absolute inset-0 bg-gradient-to-br from-violet-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl" />
                            <div className="relative z-10">
                                <div className="w-12 h-12 rounded-xl bg-violet-500/20 flex items-center justify-center mb-4 mx-auto group-hover:scale-110 transition-transform duration-300">
                                    <Brain className="w-6 h-6 text-violet-400" />
                                </div>
                                <h3 className="text-lg font-display font-bold text-white mb-2">AI-Powered</h3>
                                <p className="text-sm text-secondary">Adaptive learning paths tailored to individual progress</p>
                            </div>
                        </div>

                        {/* Feature 2 */}
                        <div className="group relative p-6 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm hover:bg-white/10 hover:border-blue-500/30 transition-all duration-500">
                            <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl" />
                            <div className="relative z-10">
                                <div className="w-12 h-12 rounded-xl bg-blue-500/20 flex items-center justify-center mb-4 mx-auto group-hover:scale-110 transition-transform duration-300">
                                    <Languages className="w-6 h-6 text-blue-400" />
                                </div>
                                <h3 className="text-lg font-display font-bold text-white mb-2">Multi-Language</h3>
                                <p className="text-sm text-secondary">Support for 20+ languages with native-level content</p>
                            </div>
                        </div>

                        {/* Feature 3 */}
                        <div className="group relative p-6 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm hover:bg-white/10 hover:border-emerald-500/30 transition-all duration-500">
                            <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl" />
                            <div className="relative z-10">
                                <div className="w-12 h-12 rounded-xl bg-emerald-500/20 flex items-center justify-center mb-4 mx-auto group-hover:scale-110 transition-transform duration-300">
                                    <TrendingUp className="w-6 h-6 text-emerald-400" />
                                </div>
                                <h3 className="text-lg font-display font-bold text-white mb-2">Real Progress</h3>
                                <p className="text-sm text-secondary">Data-driven insights and measurable outcomes</p>
                            </div>
                        </div>
                    </motion.div>

                    {/* Status Message */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 1.1, duration: 0.8 }}
                        className="mb-12"
                    >
                        <div className="inline-flex items-center gap-3 p-6 rounded-2xl bg-black/30 border border-white/10 backdrop-blur-md">
                            <Sparkles className="w-5 h-5 text-accent" />
                            <p className="text-base text-secondary">
                                We are currently crafting a detailed case study for this project. <span className="text-white font-medium">Stay tuned.</span>
                            </p>
                        </div>
                    </motion.div>

                    {/* CTA Button */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 1.3, duration: 0.8 }}
                    >
                        <Button
                            to="/"
                            variant="primary"
                        >
                            Return Home
                        </Button>
                    </motion.div>

                    {/* Tech Stack Preview (Optional) */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 1.5, duration: 0.8 }}
                        className="mt-20 pt-12 border-t border-white/5"
                    >
                        <p className="text-xs font-mono text-secondary uppercase tracking-widest mb-6">Powered By</p>
                        <div className="flex flex-wrap items-center justify-center gap-8 opacity-50">
                            <div className="flex items-center gap-2">
                                <Zap className="w-4 h-4 text-accent" />
                                <span className="text-sm text-secondary font-mono">Next.js 14</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <Brain className="w-4 h-4 text-violet-400" />
                                <span className="text-sm text-secondary font-mono">GPT-4 & Claude</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <Users className="w-4 h-4 text-blue-400" />
                                <span className="text-sm text-secondary font-mono">Supabase</span>
                            </div>
                        </div>
                    </motion.div>
                </motion.div>
            </div>
        </main>
    );
};

export default Eclipse;
