import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { ArrowLeft, Clock } from 'lucide-react';
import { Link } from 'react-router-dom';

const Eclipse = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <main className="bg-background min-h-screen text-primary selection:bg-accent/30 flex flex-col items-center justify-center relative overflow-hidden">

            {/* Background Ambience */}
            <div className="absolute inset-0 z-0">
                <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-violet-500/10 rounded-full blur-[120px]" />
                <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-blue-500/10 rounded-full blur-[120px]" />
            </div>

            {/* Back Button */}
            <Link
                to="/"
                className="fixed top-6 right-6 z-[60] p-3 rounded-full bg-black/50 backdrop-blur-md border border-white/10 text-white hover:bg-white hover:text-black transition-all duration-300 group"
            >
                <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
                <span className="sr-only">Back to Home</span>
            </Link>

            {/* Content */}
            <div className="relative z-10 container mx-auto px-6 text-center">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: [0.2, 0.8, 0.2, 1] }}
                    className="max-w-3xl mx-auto"
                >
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 mb-8 backdrop-blur-sm">
                        <Clock className="w-4 h-4 text-accent" />
                        <span className="text-sm font-mono text-accent uppercase tracking-widest">Coming Soon</span>
                    </div>

                    <h1 className="text-6xl md:text-8xl font-display font-bold mb-8 tracking-tight">
                        Eclipse <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-400 to-blue-500">Education</span>
                    </h1>

                    <p className="text-xl md:text-2xl text-secondary font-light leading-relaxed max-w-2xl mx-auto mb-12">
                        An adaptive AI learning platform revolutionizing language education.
                        We are currently crafting the case study for this project.
                    </p>

                    <Button
                        to="/"
                        variant="primary"
                    >
                        Return Home
                    </Button>
                </motion.div>
            </div>
        </main>
    );
};

export default Eclipse;
