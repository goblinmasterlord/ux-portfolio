import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X, ArrowUpRight, MousePointer2, Sparkles, Lightbulb, Layers, Bot } from 'lucide-react';
import paynanceImage1 from '../assets/projects/paynance-1.jpg';
import paynanceImage2 from '../assets/projects/paynance-2.jpg';
import paynanceImage3 from '../assets/projects/paynance-3.jpg';
import everproveImage from '../assets/projects/paynance-3.jpg';
import { motion } from 'framer-motion';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import { ArrowRight } from 'lucide-react';

// Add these animation variants right after imports
const fadeInUp = {
  hidden: { opacity: 0, y: 60 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" }
  }
};

const fadeIn = {
  hidden: { opacity: 0 },
  visible: { 
    opacity: 1,
    transition: { duration: 0.6 }
  }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2
    }
  }
};

// Project Card Component
const ProjectCard = ({ project, index }) => {
  const [ref, controls] = useScrollAnimation();
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={controls}
      variants={fadeInUp}
      className="relative"
    >
      <Link 
        to={project.path}
        className="group cursor-pointer grid md:grid-cols-2 gap-4 md:gap-8 items-start md:items-center p-4 md:p-6 rounded-2xl hover:bg-primary/5 transition-all duration-500"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        {/* Image Container */}
        <div className="relative overflow-hidden rounded-xl aspect-[4/3]">
          <div className="absolute inset-0 bg-gradient-to-br from-accent/20 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500 z-10" />
          <img 
            src={project.image} 
            alt={project.title} 
            className="w-full h-full object-cover transform group-hover:scale-105 transition-all duration-700"
          />
          {/* Tags Overlay - Responsive adjustments */}
          <div className="absolute bottom-3 md:bottom-4 left-3 md:left-4 right-3 md:right-4 flex flex-wrap gap-1.5 md:gap-2 z-20">
            {project.tags.map((tag, i) => (
              <span 
                key={i}
                className="px-2 md:px-3 py-1 text-xs md:text-sm bg-background/80 backdrop-blur-sm rounded-full text-primary/80"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
        
        {/* Content */}
        <div className="space-y-4 md:space-y-6 pt-4 md:pt-0">
          <div>
            <div className="flex flex-wrap items-center gap-2 md:gap-4 mb-3 md:mb-4">
              <span className="text-accent text-sm md:text-base">{project.category}</span>
              <span className="w-1 h-1 rounded-full bg-primary/20" />
              <span className="text-primary/40 text-sm md:text-base">{project.year}</span>
            </div>
            <h3 className="text-xl md:text-2xl lg:text-3xl font-display mb-2 md:mb-4 group-hover:text-accent transition-colors duration-300">
              {project.title}
            </h3>
            <p className="text-sm md:text-base text-primary/60 leading-relaxed">
              {project.description}
            </p>
          </div>

          {/* Stats - Responsive grid */}
          {project.stats && (
            <div className="grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-4 pt-4 md:pt-6 border-t border-primary/10">
              {Object.entries(project.stats).map(([key, value]) => (
                <div key={key} className="space-y-0.5 md:space-y-1">
                  <div className="text-lg md:text-xl font-display text-accent">{value}</div>
                  <div className="text-xs md:text-sm text-primary/40 capitalize">{key}</div>
                </div>
              ))}
            </div>
          )}

          {/* CTA Button - Show on mobile without hover */}
          <div className="flex items-center gap-2 text-accent md:opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-x-0 group-hover:translate-x-2">
            <span className="text-sm md:text-base">View Project Details</span>
            <ArrowRight className="w-3 h-3 md:w-4 md:h-4" />
          </div>
        </div>
      </Link>
    </motion.div>
  );
};

// Service Card Component
const ServiceCard = ({ service }) => {
  const [ref, controls] = useScrollAnimation();

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={controls}
      variants={fadeInUp}
      className="group relative p-8 rounded-2xl bg-primary/5 hover:bg-primary/10 transition-all duration-500 overflow-hidden"
    >
      <div className="absolute inset-0 bg-gradient-to-br from-accent/0 to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      
      <div className="relative z-10">
        <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center mb-6">
          <div className="text-accent">
            {service.icon}
          </div>
        </div>

        <h4 className="text-2xl font-display text-primary mb-4">{service.title}</h4>
        <p className="text-primary/60 mb-8">{service.description}</p>

        <div className="space-y-3">
          {service.features.map((feature, index) => (
            <div key={index} className="flex items-center gap-3">
              <div className="w-1 h-1 rounded-full bg-accent" />
              <span className="text-sm text-primary/60">{feature}</span>
            </div>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

const Home = () => {
  const projects = [
    {
      title: "Paynance Banking Platform",
      category: "UX Design & Strategy",
      path: "/projects/paynance",
      image: paynanceImage1,
      description: "Revolutionizing payment solutions for modern businesses with flexible, feature-rich platforms",
      year: "2024",
      tags: ["Fintech", "Payment Solutions", "UX Design", "Business Platform"],
      stats: {
        users: "2.5M+",
        satisfaction: "98%",
        timeframe: "6 months"
      }
    },
    {
      title: "Transforming Legal Contracting",
      category: "Digital Transformation",
      path: "/projects/everprove",
      image: everproveImage,
      description: "Reimagining how businesses create, negotiate, and sign contracts in the digital age",
      year: "2023",
      tags: ["Legal Tech", "Blockchain", "Enterprise UX", "Product Design", "Smart Contracts"],
      stats: {
        reduction: "85%",
        completion: "3x",
        satisfaction: "98%"
      }
    },
    {
      title: "Paynance Mobile Experience",
      category: "Product Design",
      path: "/projects/paynance-mobile",
      image: paynanceImage2,
      description: "Creating a seamless mobile banking experience with advanced security features",
      year: "2023",
      tags: ["Mobile Design", "UI/UX", "Security", "Payments", "User Testing"],
      stats: {
        transactions: "1M+",
        retention: "94%",
        growth: "+150%"
      }
    },
    {
      title: "Paynance Business Suite",
      category: "Enterprise Solutions",
      path: "/projects/paynance-business",
      image: paynanceImage3,
      description: "Comprehensive business banking platform with powerful management tools",
      year: "2023",
      tags: ["B2B", "Enterprise", "Dashboard", "Analytics", "Financial Tools"],
      stats: {
        businesses: "50k+",
        processing: "$2B+",
        satisfaction: "96%"
      }
    }
  ];

  const services = [
    {
      icon: <Sparkles className="w-6 h-6" />,
      title: "UX Consultation",
      description: "Transform your digital products with user-centered design strategies and expert consultation.",
      features: ["User Research", "UX Audits", "Design Sprints", "Usability Testing"],
    },
    {
      icon: <Layers className="w-6 h-6" />,
      title: "UI Design",
      description: "Create stunning, intuitive interfaces that engage users and elevate your brand.",
      features: ["Design Systems", "Visual Design", "Interactive Prototypes", "Design-to-Dev"],
    },
    {
      icon: <Lightbulb className="w-6 h-6" />,
      title: "Product Consultation",
      description: "Strategic guidance to transform your ideas into successful digital products.",
      features: ["Product Strategy", "Market Analysis", "Feature Prioritization", "Growth Planning"],
    },
    {
      icon: <Bot className="w-6 h-6" />,
      title: "Generative AI Solutions",
      description: "Harness the power of AI to create innovative, personalized user experiences.",
      features: ["AI Integration", "LLM Implementation", "AI UX Patterns", "Conversational UI"],
    },
  ];

  return (
    <main className="bg-background">
      {/* Hero Section */}
      <section className="min-h-screen px-6 lg:px-12 flex flex-col justify-center">
        <div className="max-w-[1800px] mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <span className="text-accent font-medium">UX Designer & Product Thinker</span>
            
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-display leading-tight">
              Crafting Digital Experiences that Matter
            </h1>
            
            <p className="text-primary/60 text-lg md:text-xl max-w-[600px] leading-relaxed">
              I design products that bridge the gap between complexity and simplicity, 
              creating memorable experiences that users love.
            </p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
            >
              <Link 
                to="#work" 
                className="inline-flex items-center gap-2 mt-8 text-lg hover:text-accent transition-colors duration-300"
              >
                View Selected Work
                <ArrowRight className="w-5 h-5" />
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Featured Work Section with staggered children */}
      <section id="work" className="px-6 lg:px-12 py-32 bg-background">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-[1800px] mx-auto"
        >
          <motion.h2 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-primary/30 text-sm font-medium tracking-wider mb-16"
          >
            SELECTED WORK
          </motion.h2>
          <div className="space-y-24">
            {projects.map((project, index) => (
              <ProjectCard key={index} project={project} index={index + 1} />
            ))}
          </div>
        </motion.div>
      </section>

      {/* Services Section with staggered animations */}
      <section className="px-6 lg:px-12 py-32 bg-background/50">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-[1800px] mx-auto"
        >
          <motion.h2 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-primary/30 text-sm font-medium tracking-wider mb-4"
          >
            SERVICES
          </motion.h2>
          <div className="flex flex-col md:flex-row justify-between items-start gap-4 mb-20">
            <h3 className="text-4xl md:text-5xl font-display text-primary max-w-2xl">
              Comprehensive design solutions for the digital age
            </h3>
            <a 
              href="#contact" 
              className="group flex items-center gap-2 text-accent hover:text-primary transition-colors duration-300"
            >
              Start a Project
              <ArrowUpRight className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
            </a>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <ServiceCard key={index} service={service} />
            ))}
          </div>
        </motion.div>
      </section>

      {/* Contact Section with animation */}
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        id="contact" 
        className="px-6 lg:px-12 py-32 bg-background text-primary"
      >
        <div className="max-w-[1800px] mx-auto">
          <h2 className="text-primary/30 text-sm font-medium tracking-wider mb-4">GET IN TOUCH</h2>
          <div className="flex flex-col md:flex-row justify-between items-start gap-4">
            <h3 className="text-4xl md:text-5xl font-display text-primary max-w-2xl">
              Let's create something amazing together
            </h3>
            <div className="space-y-4">
              <p className="text-primary/60">Email: yourname@example.com</p>
              <p className="text-primary/60">Phone: +123 456 7890</p>
              <a 
                href="mailto:yourname@example.com" 
                className="group flex items-center gap-2 text-accent hover:text-primary transition-colors duration-300"
              >
                Send an Email
                <ArrowUpRight className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
              </a>
            </div>
          </div>
        </div>
      </motion.section>
    </main>
  );
};

export default Home;