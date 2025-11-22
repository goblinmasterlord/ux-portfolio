import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowLeft, Brain, Cpu, Network, Workflow, Terminal, Zap, Layers, Code2, Bot, Database, Globe, Users as UsersIcon } from 'lucide-react';
import { Link } from 'react-router-dom';
import NextProject from '../../components/project/NextProject';
import SolutionGrid from '../../components/project/SolutionGrid';
import projectImage from '../../assets/projects/kovetkezotoken.jpg';
import aspect1 from '../../assets/projects/aspect-01.jpg';

// --- Data & Content ---

const trainingPersonas = [
    {
        id: 'fundamentals',
        title: "AI Fundamentals",
        subtitle: "For All Employees",
        icon: <Bot className="w-6 h-6" />,
        description: "Designed to establish a solid baseline. I structured this module to demystify AI logic, ensuring every team member can move from 'magic' to 'utility' through safe and confident tool usage.",
        modules: [
            {
                title: "Understanding AI Logic & Limitations",
                desc: "Building a mental model of how LLMs work to understand their capabilities and inherent limitations."
            },
            {
                title: "Effective Prompt Engineering",
                desc: "Mastering the art of communication with AI to consistently elicit high-quality, relevant responses."
            },
            {
                title: "Tool Selection Strategy",
                desc: "Navigating the landscape of available models to choose the right tool for specific business tasks."
            },
            {
                title: "Daily Workflow Integration",
                desc: "Identifying and integrating AI into routine processes to immediately boost personal productivity."
            }
        ]
    },
    {
        id: 'executive',
        title: "Executive Workshop",
        subtitle: "For Top Management",
        icon: <Brain className="w-6 h-6" />,
        description: "Focused on strategic vision. I facilitate workshops that help leadership identify high-impact value streams, establish governance frameworks, and prepare the organization for an AI-first culture.",
        modules: [
            {
                title: "Strategic Vision & ROI Analysis",
                desc: "Aligning AI initiatives with core business objectives to ensure measurable value creation."
            },
            {
                title: "Risk, Governance & Data Privacy",
                desc: "Establishing robust frameworks to manage data security, privacy, and ethical considerations."
            },
            {
                title: "Organizational Readiness Assessment",
                desc: "Evaluating the organization's cultural and technical maturity to identify gaps before scaling."
            },
            {
                title: "Change Management Strategy",
                desc: "Leading the cultural shift required to embrace AI as a partner rather than a threat."
            }
        ]
    },
    {
        id: 'management',
        title: "AI in Practice",
        subtitle: "For Middle Management",
        icon: <UsersIcon className="w-6 h-6" />,
        description: "Bridging strategy and execution. I developed a methodology to teach managers how to re-engineer workflows, lead AI-augmented teams, and measure the real impact of automation.",
        modules: [
            {
                title: "Advanced Iterative Prompting",
                desc: "Moving from simple queries to complex, iterative problem-solving workflows."
            },
            {
                title: "Workflow Re-engineering",
                desc: "Rethinking existing business processes to maximize the potential of human-AI collaboration."
            },
            {
                title: "AI-Augmented Leadership",
                desc: "Adapting management styles to lead teams where AI handles execution and humans focus on strategy."
            },
            {
                title: "Defining AI KPIs",
                desc: "Establishing clear metrics to track the real-world impact and efficiency gains of AI adoption."
            }
        ]
    },
    {
        id: 'professional',
        title: "Professional Applications",
        subtitle: "For Functional Teams",
        icon: <Workflow className="w-6 h-6" />,
        description: "Domain-specific mastery. I create tailored deep-dives for HR, Marketing, or Finance, focusing on the specific tools and automations that solve their actual daily challenges.",
        modules: [
            {
                title: "Domain-Specific Tool Stacks",
                desc: "Identifying and implementing the most effective specialized tools for specific functional areas."
            },
            {
                title: "Automating Routine Tasks",
                desc: "Streamlining repetitive operational tasks to free up time for high-value strategic work."
            },
            {
                title: "Building Custom Prompt Libraries",
                desc: "Systematizing successful workflows into shared assets to drive consistency and quality."
            },
            {
                title: "Real-world Project Workshops",
                desc: "Applying learned concepts directly to current business challenges for immediate impact."
            }
        ]
    }
];

const techStack = [
    {
        category: "The Brains (Models)",
        summary: "I select the right model for the right task, balancing cost, speed, and reasoning capability.",
        items: [
            { name: "Anthropic models", desc: "Claude Opus 4.1, Sonnet 4.5 primarily for coding related tasks", icon: <Bot /> },
            { name: "OpenAI models", desc: "GPT 5.1 and GPT 5 as the primary models for complex reasoning tasks", icon: <Zap /> },
            { name: "Google models", desc: "Gemini 3, 2.5 Pro and Flash as daily driver and for general tasks", icon: <Brain /> }
        ]
    },
    {
        category: "The Nervous System (Orchestration)",
        summary: "Moving beyond rigid frameworks to build flexible, production-grade agentic systems.",
        items: [
            { name: "Vercel AI SDK", desc: "The engine for deployment and easy-to-use AI integration", icon: <Code2 /> },
            { name: "n8n / Make", desc: "Visual Workflow Automation for ease of use", icon: <Workflow /> },
            { name: "Custom Solutions", desc: "For maximizing customizability and scalability", icon: <Network /> }
        ]
    },
    {
        category: "The Tools (Environment)",
        summary: "A modern, robust development stack ensuring scalability and performance.",
        items: [
            { name: "React / Next.js", desc: "The industry standard frontend framework for building performant web applications", icon: <Code2 /> },
            { name: "Supabase", desc: "Scalable vector database and authentication solution for enterprise-grade security", icon: <Database /> },
            { name: "Cursor", desc: "AI-native IDE that accelerates development through intelligent code generation", icon: <Terminal /> }
        ]
    }
];

// --- Components ---

const KovetkezoToken = () => {
    console.log("KovetkezoToken component mounted - v3 (Restored)");
    const [activePersona, setActivePersona] = useState(trainingPersonas[0]);

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const nextProject = {
        title: "Paynance",
        category: "Fintech",
        image: aspect1,
        path: "/projects/paynance"
    };

    return (
        <main className="bg-background min-h-screen text-primary selection:bg-accent/30 overflow-x-hidden">

            {/* Close Button */}
            <Link
                to="/"
                className="fixed top-6 right-6 z-[60] p-3 rounded-full bg-black/50 backdrop-blur-md border border-white/10 text-white hover:bg-white hover:text-black transition-all duration-300 group"
            >
                <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
                <span className="sr-only">Back to Home</span>
            </Link>

            {/* Hero Section - Minimal & Bold */}
            <section className="relative h-[90vh] flex items-center justify-center overflow-hidden">
                <div className="absolute inset-0 z-0">
                    <div className="absolute inset-0 bg-gradient-to-b from-background/30 via-background/90 to-background z-10" />
                    <img
                        src={projectImage}
                        alt="Következő Token Hero"
                        className="w-full h-full object-cover opacity-40 scale-105"
                    />
                </div>

                <div className="relative z-10 container mx-auto px-6">
                    <motion.div
                        initial={{ opacity: 0, y: 40 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1, ease: [0.2, 0.8, 0.2, 1] }}
                        className="max-w-5xl"
                    >
                        <div className="flex items-center gap-4 mb-8">
                            <span className="px-4 py-1.5 rounded-full bg-accent/10 border border-accent/20 text-accent font-mono text-sm tracking-wider uppercase">
                                AI Consultancy
                            </span>
                            <span className="h-px w-12 bg-white/20" />
                            <span className="text-secondary font-mono text-sm uppercase tracking-wider">Est. 2023</span>
                        </div>

                        <h1 className="text-5xl md:text-7xl lg:text-8xl font-display font-bold mb-8 leading-[0.9] tracking-tight">
                            Democratizing <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-white to-white/50">Machine Intelligence.</span>
                        </h1>

                        <p className="text-xl md:text-2xl text-secondary max-w-2xl font-light leading-relaxed">
                            I bridge the gap between theoretical AI research and practical business application.
                            Helping companies build their <span className="text-white font-medium">Next Breakthrough</span>.
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* The Mission - Redesigned "Beyond the Hype" */}
            <section className="py-32 border-t border-white/5 bg-surface/50">
                <div className="container mx-auto px-6">
                    <div className="max-w-4xl mx-auto text-center mb-20">
                        <span className="text-accent font-mono tracking-widest uppercase text-sm">The Reality Check</span>
                        <h2 className="text-4xl md:text-6xl font-display font-bold mt-4 mb-8">
                            Moving Beyond the <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-white/50">Hype Cycle.</span>
                        </h2>
                        <p className="text-xl text-secondary leading-relaxed">
                            While the market is flooded with "AI wrappers," I focus on building robust, production-grade systems.
                            <span className="text-white font-medium block mt-2">This project demonstrates my ability to:</span>
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 gap-12 items-center">
                        <div className="p-8 rounded-3xl bg-white/5 border border-white/5 relative overflow-hidden group">
                            <div className="absolute inset-0 bg-blue-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                            <h3 className="text-2xl font-display font-bold text-white mb-6">Identify Strategic Value</h3>
                            <ul className="space-y-4 text-secondary">
                                <li className="flex items-center gap-3">
                                    <span className="w-1.5 h-1.5 rounded-full bg-blue-400" />
                                    Distinguishing hype from utility
                                </li>
                                <li className="flex items-center gap-3">
                                    <span className="w-1.5 h-1.5 rounded-full bg-blue-400" />
                                    Assessing technical feasibility
                                </li>
                                <li className="flex items-center gap-3">
                                    <span className="w-1.5 h-1.5 rounded-full bg-blue-400" />
                                    Calculating ROI on AI features
                                </li>
                                <li className="flex items-center gap-3">
                                    <span className="w-1.5 h-1.5 rounded-full bg-blue-400" />
                                    Risk & Data Sovereignty analysis
                                </li>
                            </ul>
                        </div>

                        <div className="p-8 rounded-3xl bg-accent/5 border border-accent/20 relative overflow-hidden">
                            <div className="absolute inset-0 bg-accent/10 blur-3xl" />
                            <h3 className="text-2xl font-display font-bold text-white mb-6 relative z-10">Engineer Robust Systems</h3>
                            <ul className="space-y-4 text-white relative z-10">
                                <li className="flex items-center gap-3">
                                    <span className="w-1.5 h-1.5 rounded-full bg-accent" />
                                    Architecting agentic workflows
                                </li>
                                <li className="flex items-center gap-3">
                                    <span className="w-1.5 h-1.5 rounded-full bg-accent" />
                                    Implementing reliable RAG pipelines
                                </li>
                                <li className="flex items-center gap-3">
                                    <span className="w-1.5 h-1.5 rounded-full bg-accent" />
                                    Handling non-deterministic outputs
                                </li>
                                <li className="flex items-center gap-3">
                                    <span className="w-1.5 h-1.5 rounded-full bg-accent" />
                                    Full-stack integration (Next.js + AI)
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            {/* Interactive Training Personas */}
            <section className="py-32 bg-surface/30 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-accent/5 blur-[150px] rounded-full pointer-events-none" />

                <div className="container mx-auto px-6 relative z-10">
                    <div className="mb-16">
                        <span className="text-accent font-mono tracking-widest uppercase text-sm">Curriculum</span>
                        <h2 className="text-4xl font-display font-bold mt-4">Tailored Knowledge Transfer</h2>
                    </div>

                    <div className="grid lg:grid-cols-12 gap-8 min-h-[600px]">
                        <div className="lg:col-span-4 flex flex-col gap-4">
                            {trainingPersonas.map((persona) => (
                                <button
                                    key={persona.id}
                                    onClick={() => setActivePersona(persona)}
                                    className={`text-left p-6 rounded-2xl transition-all duration-300 border group ${activePersona.id === persona.id
                                        ? 'bg-white/10 border-accent/50 shadow-lg shadow-accent/5'
                                        : 'bg-transparent border-white/5 hover:bg-white/5 hover:border-white/10'
                                        }`}
                                >
                                    <div className="flex items-center gap-4 mb-2">
                                        <div className={`p-2 rounded-lg ${activePersona.id === persona.id ? 'bg-accent text-black' : 'bg-white/5 text-secondary group-hover:text-white'}`}>
                                            {persona.icon}
                                        </div>
                                        <span className={`font-display font-bold text-lg ${activePersona.id === persona.id ? 'text-white' : 'text-secondary group-hover:text-white'}`}>
                                            {persona.title}
                                        </span>
                                    </div>
                                    <p className="text-sm text-secondary pl-[52px] opacity-80">
                                        {persona.subtitle}
                                    </p>
                                </button>
                            ))}
                        </div>

                        <div className="lg:col-span-8 bg-background border border-white/10 rounded-3xl p-8 md:p-12 relative overflow-hidden flex flex-col">
                            <AnimatePresence mode="wait">
                                <motion.div
                                    key={activePersona.id}
                                    initial={{ opacity: 0, x: 20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    exit={{ opacity: 0, x: -20 }}
                                    transition={{ duration: 0.4, ease: "circOut" }}
                                    className="flex-grow flex flex-col justify-between"
                                >
                                    <div>
                                        <div className="flex items-center gap-3 mb-6 text-accent">
                                            {activePersona.icon}
                                            <span className="font-mono text-sm uppercase tracking-widest">Module Focus</span>
                                        </div>

                                        <h3 className="text-3xl md:text-4xl font-display font-bold mb-6">
                                            {activePersona.title}
                                        </h3>

                                        <p className="text-lg text-secondary leading-relaxed mb-12 max-w-2xl">
                                            {activePersona.description}
                                        </p>

                                        <div className="grid md:grid-cols-2 gap-4">
                                            {activePersona.modules.map((module, idx) => (
                                                <div key={idx} className="flex flex-col gap-2 p-4 rounded-xl bg-white/5 border border-white/5 hover:border-accent/20 transition-colors">
                                                    <div className="flex items-center gap-3">
                                                        <div className="w-1.5 h-1.5 rounded-full bg-accent shrink-0" />
                                                        <span className="text-sm font-medium text-white/90">{module.title}</span>
                                                    </div>
                                                    <p className="text-xs text-secondary pl-4.5 leading-relaxed opacity-80">
                                                        {module.desc}
                                                    </p>
                                                </div>
                                            ))}
                                        </div>
                                    </div>

                                    <div className="mt-12 pt-8 border-t border-white/5">
                                        <p className="text-sm text-secondary italic">
                                            {/* Disclaimer removed as requested */}
                                        </p>
                                    </div>
                                </motion.div>
                            </AnimatePresence>
                        </div>
                    </div>
                </div>
            </section>

            {/* The AI Arsenal (Tech Stack) */}
            <section className="py-32">
                <div className="container mx-auto px-6">
                    <div className="text-center mb-20">
                        <span className="text-accent font-mono tracking-widest uppercase text-sm">My Arsenal</span>
                        <h2 className="text-4xl md:text-5xl font-display font-bold mt-4 mb-6">The Modern AI Stack</h2>
                        <p className="text-secondary max-w-2xl mx-auto">
                            I don't just teach theory. I build with these tools every single day.
                            This is the production-grade stack I use to deploy real-world AI applications.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-3 gap-8">
                        {techStack.map((category, idx) => (
                            <motion.div
                                key={idx}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ delay: idx * 0.1 }}
                                className="space-y-6"
                            >
                                <div className="mb-8 text-center md:text-left">
                                    <div className="flex items-center gap-3 mb-4 justify-center md:justify-start">
                                        <div className="h-px w-8 bg-accent/50" />
                                        <h3 className="font-mono text-sm uppercase tracking-widest text-accent">{category.category}</h3>
                                    </div>
                                    <p className="text-sm text-secondary leading-relaxed">
                                        {category.summary}
                                    </p>
                                </div>

                                <div className="space-y-4">
                                    {category.items.map((item, itemIdx) => (
                                        <div
                                            key={itemIdx}
                                            className="group p-4 rounded-xl bg-surface border border-white/5 hover:border-accent/30 hover:bg-white/5 transition-all duration-300"
                                        >
                                            <div className="flex items-start gap-4">
                                                <div className="p-2 rounded-lg bg-black/50 text-white group-hover:text-accent transition-colors">
                                                    {item.icon}
                                                </div>
                                                <div>
                                                    <h4 className="font-bold text-white mb-1">{item.name}</h4>
                                                    <p className="text-xs text-secondary group-hover:text-white/70 transition-colors">
                                                        {item.desc}
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Workflow Visualization - General & Strategic */}
            <section className="py-32 bg-surface/20 border-y border-white/5">
                <div className="container mx-auto px-6">
                    <div className="flex flex-col md:flex-row items-center gap-16">
                        <div className="w-full md:w-1/2">
                            <span className="text-accent font-mono tracking-widest uppercase text-sm">The Power of Agents</span>
                            <h2 className="text-4xl font-display font-bold mt-4 mb-6">Agentic Workflows</h2>
                            <p className="text-lg text-secondary leading-relaxed mb-8">
                                The true potential of AI isn't in single prompts, but in autonomous systems.
                                I design intelligent agent architectures that can plan, execute, and self-correct to solve complex business challenges.
                            </p>
                            <ul className="space-y-6">
                                <li className="flex items-start gap-4 text-white">
                                    <div className="w-8 h-8 rounded-full bg-accent/20 flex items-center justify-center text-accent text-sm font-bold shrink-0">1</div>
                                    <div>
                                        <span className="font-bold block mb-1">Autonomous Execution</span>
                                        <span className="text-secondary text-sm">Moving beyond chat interfaces to systems that can independently perform multi-step tasks without constant human oversight.</span>
                                    </div>
                                </li>
                                <li className="flex items-start gap-4 text-white">
                                    <div className="w-8 h-8 rounded-full bg-accent/20 flex items-center justify-center text-accent text-sm font-bold shrink-0">2</div>
                                    <div>
                                        <span className="font-bold block mb-1">Tool Use & Integration</span>
                                        <span className="text-secondary text-sm">Empowering agents with the ability to browse the web, query databases, and interact with your existing API infrastructure.</span>
                                    </div>
                                </li>
                                <li className="flex items-start gap-4 text-white">
                                    <div className="w-8 h-8 rounded-full bg-accent/20 flex items-center justify-center text-accent text-sm font-bold shrink-0">3</div>
                                    <div>
                                        <span className="font-bold block mb-1">Strategic Orchestration</span>
                                        <span className="text-secondary text-sm">Designing the "nervous system" where specialized agents collaborate—handing off tasks from researcher to analyst to executor.</span>
                                    </div>
                                </li>
                            </ul>
                        </div>

                        <div className="w-full md:w-1/2">
                            <div className="relative aspect-square rounded-3xl bg-background border border-white/10 p-8 flex items-center justify-center overflow-hidden group">
                                {/* Abstract Visualization of Nodes */}
                                <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-accent/10 via-transparent to-transparent" />

                                {/* Central Hub */}
                                <div className="relative z-10">
                                    <motion.div
                                        animate={{ scale: [1, 1.05, 1] }}
                                        transition={{ duration: 4, repeat: Infinity }}
                                        className="w-24 h-24 rounded-full bg-accent/10 border border-accent/30 flex items-center justify-center backdrop-blur-md"
                                    >
                                        <Brain className="w-10 h-10 text-accent" />
                                    </motion.div>

                                    {/* Orbiting Nodes */}
                                    {[0, 1, 2].map((i) => (
                                        <motion.div
                                            key={i}
                                            animate={{ rotate: 360 }}
                                            transition={{ duration: 10 + i * 2, repeat: Infinity, ease: "linear" }}
                                            className="absolute inset-0 w-full h-full"
                                            style={{ rotate: i * 120 }}
                                        >
                                            <motion.div
                                                className="absolute -top-12 left-1/2 -translate-x-1/2 p-3 rounded-xl bg-surface border border-white/10 backdrop-blur-sm"
                                                style={{ rotate: -(i * 120) }} // Counter-rotate to keep icon upright
                                            >
                                                {i === 0 && <Globe className="w-5 h-5 text-blue-400" />}
                                                {i === 1 && <Database className="w-5 h-5 text-emerald-400" />}
                                                {i === 2 && <Terminal className="w-5 h-5 text-purple-400" />}
                                            </motion.div>
                                        </motion.div>
                                    ))}
                                </div>

                                {/* Connecting Lines (SVG) */}
                                <svg className="absolute inset-0 w-full h-full pointer-events-none opacity-20">
                                    <circle cx="50%" cy="50%" r="100" stroke="white" strokeWidth="1" strokeDasharray="4 4" fill="none" />
                                </svg>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Solutions */}
            <SolutionGrid
                solutions={[
                    {
                        title: "Strategic Clarity",
                        icon: <Brain className="w-6 h-6" />,
                        points: [
                            "Clear AI Roadmap & ROI Analysis",
                            "Vendor Selection & Risk Assessment",
                            "Executive Workshops & Alignment"
                        ]
                    },
                    {
                        title: "Operational Efficiency",
                        icon: <Zap className="w-6 h-6" />,
                        points: [
                            "Automating Repetitive Workflows",
                            "Custom GPTs for Internal Knowledge",
                            "Employee Training & Upskilling"
                        ]
                    },
                    {
                        title: "Technical Implementation",
                        icon: <Code2 className="w-6 h-6" />,
                        points: [
                            "RAG System Architecture",
                            "Fine-tuning Open Source Models",
                            "Production-Grade API Integration"
                        ]
                    }
                ]}
            />

            <NextProject project={nextProject} />

        </main>
    );
};

export default KovetkezoToken;
