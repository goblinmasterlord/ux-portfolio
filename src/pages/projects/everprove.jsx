import React, { useEffect, useRef } from 'react';
import { motion, useScroll, useSpring } from 'framer-motion';
import { ArrowLeft, Shield, Zap, FileText } from 'lucide-react';
import { Link } from 'react-router-dom';
import NextProject from '../../components/project/NextProject';
import SolutionGrid from '../../components/project/SolutionGrid';
import everproveImage from '../../assets/projects/everprove.png';
import aspect1 from '../../assets/projects/everprove-aspect-01.jpg';
import aspect2 from '../../assets/projects/everprove-aspect-02.jpg';
import paynanceImage from '../../assets/projects/paynance-1.png';

const Everprove = () => {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  const smoothProgress = useSpring(scrollYProgress, { damping: 20 });

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const projectData = {
    title: "Making Legal Contracts Simple and Accessible",
    subtitle: "A digital platform that helps people and small businesses handle contracts without the headaches",
    overview: "Everprove started with a simple idea: legal contracts shouldn't be intimidating. We've created a platform that makes creating and managing contracts straightforward, whether you're an individual renting out your apartment or a small business handling client agreements. The focus was on creating a clean, intuitive experience that guides users through each step while maintaining the legal validity they need.",
    overviewStats: [
      { value: "85%", label: "Faster Completion" },
      { value: "15min", label: "Average Time to Sign" },
      { value: "50K+", label: "Contracts Created" }
    ],
    challengeDescription: "Through user research, I identified several key pain points in how people deal with contracts:",
    challenges: [
      "People often avoid proper contracts due to legal complexity and cost",
      "Small businesses struggle to maintain consistent contract processes",
      "Finding and customizing the right template is time-consuming",
      "Digital signing solutions feel corporate and intimidating",
      "Users worry about the legal validity of online contracts"
    ],
    solutions: [
      {
        title: "Friendly User Experience",
        icon: <Zap className="w-6 h-6 text-accent" />,
        points: [
          "Conversational guidance through contract creation",
          "Visual contract builder with plain language",
          "Simple mobile signing process",
          "Organized document dashboard"
        ]
      },
      {
        title: "Smart Workflow Tools",
        icon: <FileText className="w-6 h-6 text-accent" />,
        points: [
          "Simple entry of contract details",
          "Collaborative review process",
          "Automated reminders and tracking",
          "Quick duplicate and modify options"
        ]
      },
      {
        title: "Trust & Security",
        icon: <Shield className="w-6 h-6 text-accent" />,
        points: [
          "Clear audit history",
          "Contract recorded on blockchain",
          "Valid digital signature",
        ]
      }
    ],
    results: [
      { stat: "80+%", description: "of users completed their contract in one session" },
      { stat: "4.8/5", description: "average user satisfaction rating" },
      { stat: "15min", description: "average time to create and send a contract" }
    ],
    aspects: [
      {
        title: "Simple Contract Creation Flow",
        description: "We transformed the intimidating process of creating legal contracts into a friendly, guided experience. Through extensive user research with small business owners and individuals, we developed an intuitive flow that feels more like having a conversation than filling out legal forms. The interface breaks down complex requirements into simple questions, automatically translating responses into proper legal language behind the scenes.",
        image: aspect1,
        imageAlt: "Everprove's intuitive contract creation flow",
        tags: ["Conversational UI", "Step-by-Step Guidance", "Progress Tracking", "Smart Defaults", "Plain Language"]
      },
      {
        title: "Smart Template Builder",
        description: "We created a powerful template builder that lets businesses design their own smart contracts. Teams can create dynamic templates with conditional logic, automated calculations, and customizable fields that adapt based on user inputs. The builder supports complex if-else scenarios, allowing contracts to automatically adjust their content and requirements based on specific conditions - all while maintaining legal validity.",
        tags: ["Conditional Logic", "Dynamic Fields", "Custom Calculations", "Template Library", "Version Control"]
      },
      {
        title: "Instant Contract Access",
        description: "Accessing contracts is just as easy as creating them. Each digitally signed contract is securely recorded on the blockchain, creating an immutable record that can't be tampered with. What makes it truly special is the accessibility - anyone can instantly retrieve a contract by simply scanning its QR code, pulling the verified document directly from the blockchain. Combined with our comprehensive audit log, it creates a transparent and secure contract management system.",
        image: aspect2,
        imageAlt: "Contract retrieval and blockchain verification interface",
        tags: ["QR Code Access", "Blockchain Storage", "Digital Signatures", "Audit Logging", "Instant Retrieval"]
      }
    ]
  };

  const nextProject = {
    title: "Paynance",
    category: "Fintech / SaaS",
    image: paynanceImage,
    path: "/projects/paynance"
  };

  return (
    <main ref={containerRef} className="bg-background min-h-screen text-primary selection:bg-accent/30 overflow-x-hidden">

      {/* Progress Bar */}
      <motion.div
        style={{ scaleX: smoothProgress }}
        className="fixed top-0 left-0 right-0 h-1 bg-accent z-50 origin-left"
      />

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
            src={everproveImage}
            alt="Everprove Hero"
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
              Fintech / Blockchain
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

      {/* Sticky Overview Section */}
      <section className="relative min-h-[150vh]">
        <div className="sticky top-0 h-screen flex items-center overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-accent/5 to-transparent opacity-50" />
          <div className="container mx-auto px-6 relative z-10 grid md:grid-cols-2 gap-12 items-center h-full">

            {/* Left Content */}
            <div className="space-y-8">
              <motion.h2
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                className="text-5xl md:text-7xl font-display font-bold text-transparent bg-clip-text bg-gradient-to-r from-white to-white/50"
              >
                The<br />Overview
              </motion.h2>
              <div className="flex flex-wrap gap-8">
                {projectData.overviewStats.map((stat, index) => (
                  <div key={index}>
                    <div className="text-3xl font-bold text-accent">{stat.value}</div>
                    <div className="text-xs font-mono text-secondary uppercase">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Right Content - Glass Card */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="p-8 md:p-12 rounded-3xl bg-white/5 backdrop-blur-xl border border-white/10 shadow-2xl"
            >
              <p className="text-xl md:text-2xl leading-relaxed text-secondary font-light">
                {projectData.overview}
              </p>
            </motion.div>
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

      {/* Aspects - Parallax & Glass */}
      <section className="py-32 space-y-32">
        {projectData.aspects.map((aspect, index) => (
          <div key={index} className="relative min-h-screen flex items-center">
            {/* Background Image with Parallax */}
            {aspect.image && (
              <div className="absolute inset-0 z-0 overflow-hidden">
                <div className="absolute inset-0 bg-background/80 z-10" />
                <motion.img
                  src={aspect.image}
                  alt={aspect.imageAlt}
                  initial={{ scale: 1.2 }}
                  whileInView={{ scale: 1 }}
                  transition={{ duration: 1.5 }}
                  className="w-full h-full object-cover opacity-40"
                />
              </div>
            )}

            <div className="container mx-auto px-6 relative z-20">
              <div className={`grid md:grid-cols-2 gap-12 ${index % 2 === 1 ? 'md:grid-flow-col-dense' : ''}`}>
                <motion.div
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  className={`p-8 md:p-12 rounded-3xl bg-black/40 backdrop-blur-2xl border border-white/10 ${index % 2 === 1 ? 'md:col-start-2' : ''}`}
                >
                  <h3 className="text-3xl md:text-4xl font-display font-bold mb-6">{aspect.title}</h3>
                  <p className="text-lg text-secondary leading-relaxed mb-8">
                    {aspect.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {aspect.tags.map((tag, i) => (
                      <span key={i} className="px-3 py-1 rounded-full bg-accent/10 border border-accent/20 text-xs font-mono text-accent">
                        {tag}
                      </span>
                    ))}
                  </div>
                </motion.div>
              </div>
            </div>
          </div>
        ))}
      </section>

      {/* Solutions - Premium Cards */}
      {/* Solutions - Premium Cards */}
      <SolutionGrid solutions={projectData.solutions} />

      {/* Results - Big Numbers */}
      <section className="py-32">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-3 gap-12">
            {projectData.results.map((result, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.1 }}
                className="text-center relative group"
              >
                <div className="absolute inset-0 bg-accent/5 blur-3xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="relative z-10">
                  <div className="text-6xl md:text-8xl font-display font-bold text-transparent bg-clip-text bg-gradient-to-b from-white to-white/20 mb-4">
                    {result.stat}
                  </div>
                  <p className="text-secondary text-lg font-light">{result.description}</p>
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

export default Everprove;
