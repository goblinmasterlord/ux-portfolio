import React, { useEffect, useRef } from 'react';
import { motion, useScroll } from 'framer-motion';
import { ArrowLeft, Trophy, Navigation as NavIcon } from 'lucide-react';
import { Link } from 'react-router-dom';
import NextProject from '../../components/project/NextProject';
import loccocityImage from '../../assets/projects/loccocity.png';
import aspect1 from '../../assets/projects/locco-aspect-01.jpg';
import aspect2 from '../../assets/projects/locco-aspect-02.jpg';
import everproveImage from '../../assets/projects/everprove.png';

const Loccocity = () => {
    const containerRef = useRef(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start start", "end end"]
    });

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const projectData = {
        title: "Gamifying Urban Discovery",
        subtitle: "A location-based platform that transforms city exploration into an engaging treasure hunt, connecting adventurous users with local businesses through real-world rewards",
        overview: "Locco City revolutionizes retail engagement by blending physical exploration with digital rewards. Similar to Pokémon GO's groundbreaking approach to gaming, we've created an engaging platform that encourages users to explore their city while collecting real-world rewards from their favorite brands.",
        overviewStats: [
            { value: "10.000+", label: "active users exploring cities" },
            { value: "100+", label: "partnered local businesses" },
        ],
        challengeDescription: "While digital marketing continues to evolve, connecting online engagement with real-world actions remains a significant challenge:",
        challenges: [
            "Traditional advertising struggles to drive physical foot traffic",
            "Local businesses need innovative ways to attract customers",
            "Digital and physical retail experiences remain disconnected",
            "Young consumers seek gamified experiences in everyday activities",
            "Customer loyalty programs lack engaging elements"
        ],
        solutions: [
            {
                title: "Gamified Urban Exploration",
                icon: <NavIcon className="w-6 h-6" />,
                points: [
                    "Location-based reward discovery",
                    "Tailored rewards for each user",
                    "Achievement-based progression",
                    "Real-time reward availability"
                ]
            },
            {
                title: "Seamless Reward Experience",
                icon: <Trophy className="w-6 h-6" />,
                points: [
                    "Proximity-based coupon activation",
                    "Easy redemption process",
                    "Brand partnership integration"
                ]
            }
        ],
        results: [
            { stat: "10.000+", description: "active users exploring cities" },
            { stat: "100+", description: "partnered local businesses" },
        ],
        aspects: [
            {
                title: "Exploration & Discovery System",
                description: "We designed an engaging urban exploration system that makes discovering your city feel like an adventure. Using location-based technology, we created a dynamic map that reveals nearby rewards and points of interest. The app uses a combination of fixed locations and randomly spawning rewards to keep exploration exciting and unpredictable, encouraging users to explore new areas of their city.",
                image: aspect1,
                imageAlt: "Locco City's interactive map and discovery interface",
                tags: ["Dynamic Mapping", "Location Services", "Real-time Updates", "Discovery Zones", "Local Exploration"]
            },
            {
                title: "Merchant Dashboard",
                description: "We developed a powerful yet simple dashboard that gives merchants complete control over their digital presence. Businesses can create and manage rewards, track foot traffic, and analyze customer engagement patterns. The interface includes tools for scheduling promotions, setting reward parameters, and viewing real-time analytics about how users interact with their offers.",
                image: aspect2,
                imageAlt: "Merchant control dashboard interface",
                tags: ["Analytics Dashboard", "Reward Management", "Traffic Insights", "Campaign Planning", "Performance Metrics"]
            }
        ]
    };

    const nextProject = {
        title: "Everprove",
        category: "Fintech / Blockchain",
        image: everproveImage,
        path: "/projects/everprove"
    };

    return (
        <main ref={containerRef} className="bg-background min-h-screen text-primary selection:bg-accent/30 overflow-x-hidden relative">

            {/* Central Path Line */}
            <div className="absolute left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-accent/30 to-transparent -translate-x-1/2 hidden md:block" />

            {/* Close Button - Fixed High Z-Index */}
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
                    <div className="absolute inset-0 bg-gradient-to-b from-transparent via-background/80 to-background z-10" />
                    <img
                        src={loccocityImage}
                        alt="Loccocity Hero"
                        className="w-full h-full object-cover opacity-50"
                    />
                </div>

                <div className="relative z-10 container mx-auto px-6 text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                    >
                        <span className="inline-block px-3 py-1 mb-6 text-xs font-mono tracking-widest text-accent uppercase border border-accent/20 rounded-full bg-accent/5">
                            Smart City / IoT
                        </span>
                        <h1 className="text-4xl md:text-6xl lg:text-7xl font-display font-bold mb-6 tracking-tight leading-tight">
                            {projectData.title}
                        </h1>
                        <p className="text-xl md:text-2xl text-secondary max-w-3xl mx-auto font-light leading-relaxed">
                            {projectData.subtitle}
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* Journey Overview */}
            <section className="py-32 relative z-10">
                <div className="container mx-auto px-6">
                    <div className="grid md:grid-cols-2 gap-12 md:gap-24 items-start">
                        <div className="md:text-right md:pr-12">
                            <h2 className="text-4xl md:text-6xl font-display font-bold mb-8">
                                The<br />Journey
                            </h2>
                            <p className="text-xl text-secondary leading-relaxed">
                                {projectData.overview}
                            </p>
                        </div>
                        <div className="md:pl-12 space-y-12 pt-8 md:pt-0">
                            {projectData.overviewStats.map((stat, index) => (
                                <div key={index} className="relative pl-8 md:pl-0 border-l-2 border-accent md:border-l-0">
                                    <div className="text-5xl font-bold text-accent mb-2">{stat.value}</div>
                                    <div className="text-sm font-mono text-secondary uppercase">{stat.label}</div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* Broken Grid Challenges */}
            <section className="py-32 bg-surface/20">
                <div className="container mx-auto px-6">
                    <div className="max-w-2xl mb-24">
                        <span className="text-accent font-mono tracking-widest uppercase text-sm">The Challenge</span>
                        <h3 className="text-3xl md:text-4xl font-display font-bold mt-4">
                            {projectData.challengeDescription}
                        </h3>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {projectData.challenges.map((challenge, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ delay: index * 0.1 }}
                                className={`p-8 bg-background border border-white/5 rounded-3xl hover:border-accent/30 transition-colors ${index === 0 ? 'md:col-span-2 bg-accent/5' : ''
                                    } ${index === 3 ? 'md:col-span-2' : ''
                                    }`}
                            >
                                <span className="text-4xl font-display font-bold text-white/10 mb-4 block">0{index + 1}</span>
                                <p className="text-lg text-primary">{challenge}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Connected Aspects */}
            <section className="py-32 relative z-10">
                <div className="container mx-auto px-6 space-y-48">
                    {projectData.aspects.map((aspect, index) => (
                        <div key={index} className={`flex flex-col md:flex-row gap-12 items-center ${index % 2 === 1 ? 'md:flex-row-reverse' : ''
                            }`}>
                            <div className="flex-1">
                                <div className="relative rounded-3xl overflow-hidden border border-white/10 shadow-2xl group">
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent z-10" />
                                    <img src={aspect.image} alt={aspect.imageAlt} className="w-full h-auto group-hover:scale-105 transition-transform duration-700" />
                                    <div className="absolute bottom-6 left-6 z-20">
                                        <div className="flex gap-2">
                                            {aspect.tags.slice(0, 3).map((tag, i) => (
                                                <span key={i} className="px-3 py-1 rounded-full bg-black/50 backdrop-blur-md text-xs font-mono border border-white/10">
                                                    {tag}
                                                </span>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="flex-1 md:px-12">
                                <h3 className="text-3xl md:text-4xl font-display font-bold mb-6">{aspect.title}</h3>
                                <p className="text-lg text-secondary leading-relaxed">
                                    {aspect.description}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            {/* Solution Cards - Premium Design */}
            <section className="py-32 relative overflow-hidden">
                {/* Background Glow */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-accent/20 blur-[120px] rounded-full pointer-events-none" />

                <div className="container mx-auto px-6 relative z-10">
                    <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
                        {projectData.solutions.map((solution, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ delay: index * 0.1 }}
                                className="group relative p-1 rounded-3xl bg-gradient-to-b from-white/10 to-white/5 hover:from-accent/50 hover:to-accent/10 transition-all duration-500"
                            >
                                <div className="absolute inset-0 bg-accent/20 blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                                <div className="relative h-full bg-background/90 backdrop-blur-xl rounded-[20px] p-8 border border-white/5 group-hover:border-transparent transition-colors">
                                    <div className="mb-8 w-14 h-14 rounded-2xl bg-accent/10 flex items-center justify-center text-accent group-hover:scale-110 group-hover:bg-accent group-hover:text-black transition-all duration-500">
                                        {solution.icon}
                                    </div>
                                    <h3 className="text-2xl font-display font-bold mb-6 group-hover:text-accent transition-colors">{solution.title}</h3>
                                    <ul className="space-y-4">
                                        {solution.points.map((point, i) => (
                                            <li key={i} className="flex items-start gap-3 text-secondary group-hover:text-primary transition-colors">
                                                <div className="w-1.5 h-1.5 rounded-full bg-accent/50 mt-2 shrink-0 group-hover:bg-accent" />
                                                <span>{point}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Next Project */}
            <NextProject project={nextProject} />
        </main>
    );
};

export default Loccocity;
