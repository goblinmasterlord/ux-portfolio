import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { ArrowLeft, Upload, Brain, Eye, FileCheck, Sparkles, Code, Lightbulb } from 'lucide-react';
import { Link } from 'react-router-dom';
import Button from '../../components/ui/Button';
import NextProject from '../../components/project/NextProject';
import paynanceImage from '../../assets/projects/paynance-1.png';

// Import images directly
import uploadImage from '../../assets/projects/eclipse/1-upload.png';
import analyzeImage from '../../assets/projects/eclipse/2-analyze.png';
import reviewImage from '../../assets/projects/eclipse/3-review.png';
import exportImage from '../../assets/projects/eclipse/4-export.png';

const Eclipse = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const steps = [
        {
            id: 1,
            title: "Upload",
            description: "Securely upload large documents (100-200+ pages). The system is built to handle extensive educational records and administrative files with ease.",
            image: uploadImage,
            icon: <Upload className="w-6 h-6 text-violet-400" />
        },
        {
            id: 2,
            title: "Analyze",
            description: "Our multi-step AI, powered by Vertex API, performs deep semantic analysis. It doesn't just find PII; it understands context, mapping data to specific individuals and relationships.",
            image: analyzeImage,
            icon: <Brain className="w-6 h-6 text-blue-400" />
        },
        {
            id: 3,
            title: "Review",
            description: "Administrators get granular control. Review identified individuals and sensitive data points, choosing exactly what to redact and what to keep with a user-friendly interface.",
            image: reviewImage,
            icon: <Eye className="w-6 h-6 text-emerald-400" />
        },
        {
            id: 4,
            title: "Export",
            description: "Generate the finalized, redacted document instantly. The system also produces a comprehensive audit log for compliance and record-keeping.",
            image: exportImage,
            icon: <FileCheck className="w-6 h-6 text-accent" />
        }
    ];

    const nextProject = {
        title: "Paynance",
        category: "Fintech / SaaS",
        image: paynanceImage,
        path: "/projects/paynance"
    };

    return (
        <main className="bg-background min-h-screen text-primary selection:bg-accent/30 overflow-x-hidden">

            {/* Back Button */}
            <Link
                to="/"
                className="fixed top-6 right-6 z-[60] p-3 rounded-full bg-black/50 backdrop-blur-md border border-white/10 text-white hover:bg-white hover:text-black transition-all duration-300 group"
            >
                <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
                <span className="sr-only">Back to Home</span>
            </Link>

            {/* Hero Section */}
            <section className="relative h-screen flex items-center justify-center overflow-hidden">
                <div className="absolute inset-0 z-0">
                    <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-background/80 to-background z-10" />
                    <img
                        src="/images/Eclipse.jpg"
                        alt="Eclipse Hero"
                        className="w-full h-full object-cover opacity-60 scale-105 animate-pulse-slow"
                    />
                </div>

                <div className="relative z-10 container mx-auto px-6 text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                    >
                        <span className="inline-block px-3 py-1 mb-6 text-xs font-mono tracking-widest text-violet-400 uppercase border border-violet-500/20 rounded-full bg-violet-500/5">
                            EdTech / AI SaaS
                        </span>
                        <h1 className="text-5xl md:text-7xl lg:text-8xl font-display font-bold mb-6 tracking-tight leading-tight">
                            Eclipse <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-400 via-blue-500 to-emerald-400">
                                Education
                            </span>
                        </h1>
                        <p className="text-xl md:text-2xl text-secondary max-w-3xl mx-auto font-light leading-relaxed">
                            Intelligent document redaction for educational institutions.
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* About Section */}
            <section className="py-32 px-6">
                <div className="container mx-auto max-w-4xl text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="space-y-8"
                    >
                        <h2 className="text-3xl md:text-4xl font-display font-bold">Protecting Student Privacy with AI</h2>
                        <p className="text-lg md:text-xl text-secondary leading-relaxed font-light">
                            Eclipse is an AI-based document redaction tool designed specifically for educational institutes like MATs and schools.
                            It simplifies the complex process of protecting sensitive information in large documents.
                        </p>
                        <p className="text-lg md:text-xl text-secondary leading-relaxed font-light">
                            Users can upload documents ranging from 100 to 200 pages. Our multi-step AI, powered by the Vertex API,
                            analyzes the content to identify Personally Identifiable Information (PII). Beyond simple detection,
                            we utilize semantic analysis to map found data to specific individuals, providing context on what the data is.
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* Zig-Zag How It Works Section */}
            <section className="relative bg-surface/30 py-32">
                <div className="container mx-auto px-6 max-w-7xl">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-4xl md:text-5xl font-display font-bold text-center mb-24"
                    >
                        How It Works
                    </motion.h2>

                    <div className="space-y-32">
                        {steps.map((step, index) => (
                            <motion.div
                                key={step.id}
                                initial={{ opacity: 0, y: 40 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, margin: "-100px" }}
                                transition={{ duration: 0.6 }}
                                className={`flex flex-col ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} gap-12 lg:gap-24 items-center`}
                            >
                                {/* Text Side */}
                                <div className="flex-1 space-y-6">
                                    <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-white/5 border border-white/10 backdrop-blur-sm">
                                        {step.icon}
                                        <span className="font-mono text-sm text-secondary uppercase tracking-wider">Step 0{step.id}</span>
                                    </div>
                                    <h3 className="text-3xl md:text-4xl font-display font-bold">{step.title}</h3>
                                    <p className="text-lg md:text-xl text-secondary leading-relaxed">{step.description}</p>
                                </div>

                                {/* Image Side */}
                                <div className="flex-1 w-full">
                                    <div className="relative rounded-3xl overflow-hidden border border-white/10 shadow-2xl bg-[#0a0a0a] group">
                                        <div className="absolute inset-0 bg-gradient-to-br from-violet-500/5 to-blue-500/5 opacity-100 transition-opacity duration-500 z-0" />
                                        <div className="p-8 lg:p-12">
                                            <img
                                                src={step.image}
                                                alt={step.title}
                                                className="w-full h-auto object-contain rounded-xl shadow-lg transform group-hover:scale-105 transition-transform duration-700"
                                            />
                                        </div>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* My Role Section */}
            <section className="py-32 px-6 border-t border-white/5">
                <div className="container mx-auto max-w-4xl">
                    <div className="grid md:grid-cols-12 gap-12 items-start">
                        <div className="md:col-span-4">
                            <h2 className="text-3xl md:text-4xl font-display font-bold mb-6">My Role</h2>
                            <div className="flex flex-col gap-4">
                                <div className="p-4 rounded-xl bg-white/5 border border-white/10">
                                    <Lightbulb className="w-6 h-6 text-yellow-400 mb-2" />
                                    <h3 className="font-bold">UX Architecture</h3>
                                </div>
                                <div className="p-4 rounded-xl bg-white/5 border border-white/10">
                                    <Code className="w-6 h-6 text-blue-400 mb-2" />
                                    <h3 className="font-bold">Frontend Dev</h3>
                                </div>
                                <div className="p-4 rounded-xl bg-white/5 border border-white/10">
                                    <Sparkles className="w-6 h-6 text-violet-400 mb-2" />
                                    <h3 className="font-bold">Prompt Engineering</h3>
                                </div>
                            </div>
                        </div>
                        <div className="md:col-span-8">
                            <div className="prose prose-invert prose-lg">
                                <p className="text-xl text-secondary leading-relaxed mb-6">
                                    I architected the entire user flow and UX, ensuring that a complex technical process felt intuitive and manageable for school administrators.
                                    Beyond design, I engineered the prompts that power the AI's semantic analysis and built the full frontend application.
                                </p>
                                <p className="text-xl text-secondary leading-relaxed">
                                    This project was a collaborative effort by a lean team of three. I worked closely with a
                                    <span className="text-white font-medium"> Backend Engineer</span> who handled the system architecture and API integrations,
                                    and a <span className="text-white font-medium"> Business Developer</span> who managed strategy and client partnerships.
                                    Together, we turned a complex privacy challenge into a seamless, automated solution.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Next Project */}
            <NextProject project={nextProject} />

        </main>
    );
};

export default Eclipse;
