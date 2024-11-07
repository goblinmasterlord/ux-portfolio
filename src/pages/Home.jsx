import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X, ArrowUpRight, MousePointer2, Sparkles, Lightbulb, Layers, Bot } from 'lucide-react';
import paynanceImage1 from '../assets/projects/paynance-1.jpg';
import paynanceImage2 from '../assets/projects/paynance-2.jpg';
import loccocityImage1 from '../assets/projects/loccocity.jpg';
import everproveImage from '../assets/projects/everprove.jpg';
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
  console.log('ProjectCard rendering:', project.path);
  
  const handleClick = (e) => {
    console.log('ProjectCard clicked:', project.path);
  };

  const [ref, controls] = useScrollAnimation();
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={controls}
      variants={fadeInUp}
      className="relative"
      onClick={handleClick}
    >
      <Link 
        to={project.comingSoon ? '#' : project.path}
        className={`group cursor-pointer grid md:grid-cols-2 gap-4 md:gap-8 items-start md:items-center p-4 md:p-6 rounded-2xl hover:bg-primary/5 transition-all duration-500 ${project.comingSoon ? 'opacity-75 cursor-default' : ''}`}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        {/* Image Container */}
        <div className="relative overflow-hidden rounded-xl aspect-[4/3]">
          <div className="absolute inset-0 bg-gradient-to-br from-accent/20 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500 z-10" />
          <img 
            src={project.image} 
            alt={project.title} 
            className={`w-full h-full object-cover transform group-hover:scale-105 transition-all duration-700 ${project.comingSoon ? 'grayscale' : ''}`}
          />
          {project.comingSoon && (
            <div className="absolute inset-0 flex items-center justify-center bg-primary/10 backdrop-blur-sm">
              <span className="text-primary/60 text-sm font-medium">
                Coming Soon
              </span>
            </div>
          )}
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
            <p className="text-sm md:text-base text-primary/60 leading-relaxed mb-4">
              {project.description}
            </p>
            
            {/* Tags moved here */}
            <div className="flex flex-wrap gap-1.5 md:gap-2">
              {project.tags.map((tag, i) => (
                <span 
                  key={i}
                  className="px-2 md:px-3 py-1 text-xs md:text-sm bg-primary/5 rounded-full text-primary/60"
                >
                  {tag}
                </span>
              ))}
            </div>
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

          {/* CTA Button - Only show if not coming soon */}
          {!project.comingSoon && (
            <div className="flex items-center gap-2 text-accent md:opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-x-0 group-hover:translate-x-2">
              <span className="text-sm md:text-base">View Project Details</span>
              <ArrowRight className="w-3 h-3 md:w-4 md:h-4" />
            </div>
          )}
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

const Hero = () => {
  return (
    <section className="min-h-screen px-6 lg:px-12 flex flex-col justify-center relative overflow-hidden">
      {/* Abstract Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 -left-12 w-64 h-64 bg-accent/10 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-accent/5 rounded-full blur-3xl" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-accent/5 rounded-full blur-3xl opacity-50" />
      </div>

      {/* Grid Pattern Overlay */}
      <div 
        className="absolute inset-0 opacity-20"
        style={{
          backgroundImage: 'radial-gradient(circle at center, rgba(255,255,255,0.1) 2px, transparent 2px)',
          backgroundSize: '40px 40px'
        }}
      />

      <div className="max-w-[1800px] mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="space-y-8"
        >
          {/* Role Badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-accent/20 bg-accent/5 backdrop-blur-sm"
          >
            <span className="w-2 h-2 rounded-full bg-accent animate-pulse" />
          </motion.div>
          
          {/* Main Heading */}
          <div className="space-y-4">
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-display leading-[1.1] tracking-tight">
              <motion.span
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3, duration: 0.6 }}
                className="block"
              >
                Hey, I'm Marci 👋
              </motion.span>
              <motion.span
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 0.6 }}
                className="block"
              >
                I make digital products <span className="text-accent">people love</span>
              </motion.span>
            </h1>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.6 }}
              className="text-primary/60 text-lg md:text-xl max-w-[600px] leading-relaxed"
            >
              I help companies build products that are simple to use and a joy to interact with. 
              Currently working on tools that make work easier for teams.
            </motion.p>
          </div>

          {/* CTA Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.6 }}
            className="flex items-center gap-6 pt-4"
          >
            <a 
              href="#work" 
              className="group inline-flex items-center gap-2 px-6 py-3 bg-accent text-background rounded-full hover:bg-accent/90 transition-colors duration-300"
              onClick={(e) => {
                e.preventDefault();
                document.getElementById('work').scrollIntoView({ behavior: 'smooth' });
              }}
            >
              Check out my work
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
            </a>
            <a 
              href="mailto:marci.mocsonoky.gmail.com"
              className="group inline-flex items-center gap-2 text-primary/60 hover:text-accent transition-colors duration-300"
            >
              Let's talk
              <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-300" />
            </a>
          </motion.div>

          {/* Quick Facts - More casual version */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7, duration: 0.6 }}
            className="flex flex-wrap gap-8 pt-12 text-primary/40"
          >
            <div className="space-y-1">
              <div className="text-xl font-display text-primary">6+ Years</div>
              <div className="text-sm">Building cool stuff</div>
            </div>
            <div className="space-y-1">
              <div className="text-xl font-display text-primary">20+ Projects</div>
              <div className="text-sm">Shipped & loved</div>
            </div>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1, duration: 0.6 }}
        className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <div className="w-5 h-8 border-2 border-primary/20 rounded-full flex items-start p-1">
          <div className="w-1 h-1.5 bg-primary/20 rounded-full animate-bounce" />
        </div>
        <span className="text-sm text-primary/40">Scroll to explore</span>
      </motion.div>
    </section>
  );
};

const Home = () => {
  const projects = [
    {
      title: "Paynance Banking Platform",
      category: "UX Design & Strategy",
      path: "/projects/paynance",
      image: paynanceImage1,
      description: "A comprehensive fintech platform for businesses to handle their payments how they want. By unifying traditional POS systems with modern digital solutions, Paynance creates a seamless experience for both merchants and their customers. The platform handles everything from payment processing to business analytics, making financial management easy.",
      year: "2024",
      tags: ["Fintech", "Payment Solutions", "UX & UI Design", "User Research"],
      stats: {
        users: "2.5M+",
        transactions: "1 million tx monthly",
        timeframe: "12 months"
      }
    },
    {
      title: "Transforming Legal Contracting",
      category: "Digital Transformation",
      path: "/projects/everprove",
      image: everproveImage,
      description: "Everprove democratizes legal protection through two solutions: a consumer platform that makes personal legal documents accessible to everyone, and an enterprise system that automates complex contract workflows.",
      year: "2019",
      tags: ["Legal-Tech", "Blockchain", "UX & UI Design", "Smart Contracts", "Mobile & Web App"],
      stats: {
        "Processing Time": "2 mins vs 2 days",
        "Cost Savings": "95%"
      }
    },
    {
      title: "Gamifying Urban Discovery",
      category: "Location-Based Platform",
      path: "/projects/loccocity",
      image: loccocityImage1,
      description: "Locco City transforms urban exploration into an engaging treasure hunt that benefits both users and local businesses. By combining location-based gameplay with real-world rewards, we've created a platform that drives foot traffic to local businesses while making city discovery an adventure.",
      year: "2023",
      tags: ["Gamification", "Location Services", "Mobile App", "Retail Tech", "UX & UI Design"],
      stats: {
        users: "10.000+",
        businesses: "100+",
      }
    },
    {
      title: "Paynance Mobile Experience",
      category: "Product Design",
      path: "/projects/paynance-mobile",
      image: paynanceImage2,
      description: "Reimagining the payment terminal experience with a mobile-first SoftPOS solution. By turning smartphones into powerful payment terminals, we're enabling merchants to accept payments anywhere while providing features like instant refunds, smart tipping, and detailed transaction analytics - all with bank-grade security.",
      year: "2025",
      tags: ["Mobile Design", "UX & UI Design", "Security", "Payments"],
      stats: {
        "Status": "Coming Soon",
        "Launch": "2025 Q2"
      },
      comingSoon: true
    }
  ];

  const services = [
    {
      icon: <Sparkles className="w-6 h-6" />,
      title: "UX Consultation",
      description: "Transform your digital products with user-centered design strategies and expert consultation. Understand your users and build products that they love.",
      features: ["User Research", "UX Audits", "Customer Feedback Analysis", "Usability Testing"],
    },
    {
      icon: <Layers className="w-6 h-6" />,
      title: "UI Design",
      description: "Create beautiful, intuitive interfaces that engage users with a focus on usability and accessibility.",
      features: ["Visual Design", "Interactive Prototypes", "Design-to-Dev"],
    },
    {
      icon: <Lightbulb className="w-6 h-6" />,
      title: "Product Consultation",
      description: "Strategic guidance to transform your ideas into successful digital products.",
      features: ["Product Strategy", "Market Analysis", "Feature Prioritization", "Growth Planning"],
    },
    {
      icon: <Bot className="w-6 h-6" />,
      title: "AI Business Solutions",
      description: "Unlock new opportunities and efficiencies with AI. I help businesses identify and implement practical AI solutions that boost productivity, enhance customer experiences, and drive growth.",
      features: [
        "Automate Repetitive Tasks",
        "Enhance Customer Support",
        "Optimize Operations",
      ],
    },
  ];

  return (
    <main className="bg-background">
      <Hero />

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

      {/* Services Section */}
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
              Turning complex challenges into intuitive digital experiences
              <span className="block text-xl md:text-2xl text-primary/60 mt-4">
                From initial concept to final delivery, I help teams build products that users actually want to use
              </span>
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
              <p className="text-primary/60">Email: marci.mocsonoky.gmail.com</p>
              <p className="text-primary/60">Phone: +36202312384</p>
              <a 
                href="mailto:marci.mocsonoky.gmail.com" 
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