import { useState, useEffect, memo, useRef } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { Menu, X, ArrowUpRight, MousePointer2, Sparkles, Lightbulb, Layers, Bot, Scale, ShoppingCart, BarChart2, MessageSquare, HeadphonesIcon, Mail, ShoppingBag, Share2, Briefcase, Compass, Zap, Users } from 'lucide-react';
import paynanceImage1 from '../assets/projects/paynance-1.png';
import paynanceImage2 from '../assets/projects/paynance-2.png';
import loccocityImage1 from '../assets/projects/loccocity.png';
import everproveImage from '../assets/projects/everprove.png';
import { motion } from 'framer-motion';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import { ArrowRight } from 'lucide-react';
import ProcessSection from '../components/ProcessSection';
import AiSection from '../components/AiSection';
import ProtectedContact from '../components/ProtectedContact';
import CreativeHero from '../components/CreativeHero';

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

// Update the animation variants
const fadeInScale = {
  hidden: { 
    opacity: 0,
    scale: 0.98
  },
  visible: { 
    opacity: 1,
    scale: 1,
    transition: { 
      duration: 0.5,
      ease: [0.22, 1, 0.36, 1] // Custom easing for smooth animation
    }
  }
};

// Project Card Component
const ProjectCard = memo(({ project, index }) => {
  return (
    <Link
      to={project.comingSoon ? '#' : project.path}
      className="group relative flex flex-col lg:flex-row gap-8 p-6 rounded-2xl bg-primary/5 hover:bg-primary/10 transition-all duration-500"
    >
      {/* Subtle gradient border on hover */}
      <div
        className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-all duration-500"
        style={{
          background: 'linear-gradient(45deg, var(--color-blue/0.05), var(--color-violet/0.05))',
          backdropFilter: 'blur(2px)'
        }}
      />

      {/* Image Container */}
      <div className="relative w-full lg:w-[320px] shrink-0">
        <div className="relative overflow-hidden rounded-xl aspect-[4/3]">
          {/* Gradient overlay on hover */}
          <div className="absolute inset-0 bg-gradient-to-br from-blue/10 via-indigo/5 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500 z-10" />

          <img
            src={project.image}
            alt={project.title}
            className={`w-full h-full object-cover transform group-hover:scale-[1.02] transition-all duration-700 
              ${project.comingSoon ? 'grayscale' : ''}`}
          />

          {/* Category badge */}
          <div className="absolute top-3 left-3 px-3 py-1.5 bg-background/90 backdrop-blur-sm rounded-full">
            <span className="text-blue text-sm">{project.category}</span>
          </div>

          {project.comingSoon && (
            <div className="absolute inset-0 flex items-center justify-center bg-primary/10 backdrop-blur-sm">
              <span className="text-primary/60 text-sm font-medium">Coming Soon</span>
            </div>
          )}
        </div>
      </div>

      {/* Content */}
      <div className="relative flex-1 flex flex-col">
        <div className="mb-auto">
          {/* Year */}
          <span className="text-primary/40 text-sm mb-2 block">{project.year}</span>

          {/* Title */}
          <h3 className="text-2xl font-display mb-3 group-hover:text-blue transition-colors duration-300">
            {project.title}
          </h3>

          {/* Description */}
          <p className="text-primary/60 text-base leading-relaxed mb-6">
            {project.description}
          </p>

          {/* Tags */}
          <div className="flex flex-wrap gap-2 mb-6">
            {project.tags.map((tag, i) => (
              <span
                key={i}
                className="px-3 py-1 text-sm bg-primary/5 rounded-full text-primary/60 
                  transform group-hover:translate-x-1 transition-all duration-300"
                style={{ transitionDelay: `${i * 50}ms` }}
              >
                {tag}
              </span>
            ))}
          </div>
        </div>

        {/* Stats */}
        {project.stats && (
          <div className="flex flex-wrap gap-6 pt-6 border-t border-primary/10">
            {Object.entries(project.stats).map(([key, value]) => (
              <div key={key} className="space-y-1">
                <div className="text-lg font-display text-blue">{value}</div>
                <div className="text-sm text-primary/40 capitalize">{key}</div>
              </div>
            ))}
          </div>
        )}

        {/* Floating CTA - Moved inside the content container and made responsive */}
        {!project.comingSoon && (
          <div className="mt-4 lg:mt-6">
            <Link
              to={project.path}
              className="group inline-flex items-center gap-2 px-4 py-2 bg-blue/10 rounded-full text-blue hover:bg-blue/20 transition-all duration-300"
            >
              <span className="text-sm">View Case Study</span>
              <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform duration-300" />
            </Link>
          </div>
        )}
      </div>
    </Link>
  );
});

// Service Card Component
const ServiceCard = memo(({ service }) => {
  const [ref, controls] = useScrollAnimation();

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={controls}
      variants={fadeInScale}
      className="group relative p-6 rounded-xl bg-primary/5 hover:bg-primary/10 transition-all duration-500"
    >
      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue/0 via-indigo/5 to-violet/0 opacity-0 group-hover:opacity-100 transition-all duration-500" />
      
      <div className="relative z-10 flex gap-4">
        {/* Icon */}
        <div className="w-10 h-10 rounded-lg bg-blue/10 flex items-center justify-center shrink-0">
          <div className="text-blue">
            {service.icon}
          </div>
        </div>

        <div>
          {/* Title */}
          <h4 className="text-xl font-display text-primary mb-2 group-hover:text-blue transition-colors duration-300">
            {service.title}
          </h4>
          
          {/* Description */}
          <p className="text-primary/60 text-sm mb-3 leading-relaxed">
            {service.description}
          </p>

          {/* Features as inline tags */}
          <div className="flex flex-wrap gap-2">
            {service.features.map((feature, index) => (
              <span 
                key={index}
                className="px-2 py-1 text-xs bg-primary/5 rounded-full text-primary/60"
              >
                {feature}
              </span>
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  );
});

const Hero = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [animationsComplete, setAnimationsComplete] = useState(false);
  const [disableMouseTracking, setDisableMouseTracking] = useState(true); // Start with mouse tracking disabled
  const heroRef = useRef(null);
  const navigate = useNavigate();

  // Set animations as complete after initial animations finish
  useEffect(() => {
    const timer = setTimeout(() => {
      setAnimationsComplete(true);
      // Wait a bit longer before enabling mouse tracking to ensure all animations are done
      setTimeout(() => setDisableMouseTracking(false), 500);
    }, 3000);
    
    return () => clearTimeout(timer);
  }, []);

  const handleMouseMove = (e) => {
    if (disableMouseTracking) return; // Skip mouse tracking until animations are complete
    
    if (heroRef.current) {
      const rect = heroRef.current.getBoundingClientRect();
      const x = (e.clientX - rect.left) / rect.width - 0.5;
      const y = (e.clientY - rect.top) / rect.height - 0.5;
      setMousePosition({ x, y });
    }
  };

  // Calculate parallax effect based on mouse position
  const calcParallax = (strength = 20) => {
    if (disableMouseTracking) return { x: 0, y: 0 }; // Return no movement if tracking is disabled
    
    return {
      x: mousePosition.x * strength,
      y: mousePosition.y * strength
    };
  };

  // Scroll to section function
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // Animated text component
  const AnimatedText = ({ text, className }) => (
    <motion.span
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className={className}
    >
      {text}
    </motion.span>
  );

  return (
    <section 
      ref={heroRef} 
      onMouseMove={handleMouseMove}
      className="relative min-h-[100vh] pt-32 pb-24 px-6 lg:px-12 flex flex-col justify-center overflow-hidden"
      style={{ paddingTop: 'calc(10vh + 80px)', paddingBottom: 'calc(10vh + 40px)' }} // Increased padding to prevent cut-off
    >
      {/* Background elements */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Animated gradient background */}
        <div className="absolute inset-0 bg-gradient-to-br from-blue/10 to-violet/10 animate-pulse-slow" />
        
        {/* Decorative elements */}
        <div className="absolute top-1/4 -left-12 w-64 h-64 bg-blue/10 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-violet/5 rounded-full blur-3xl" />
        
        {/* Grid pattern overlay */}
        <div 
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: 'radial-gradient(circle at center, var(--color-blue) 1px, transparent 1px)',
            backgroundSize: '24px 24px'
          }}
        />
      </div>

      {/* Main content */}
      <div className="max-w-[1800px] mx-auto relative z-10 flex flex-col items-center">
        <div className="w-full max-w-[1200px] mx-auto">
          {/* Heading with animated text */}
          <div className="mb-8">
            <motion.h1 
              className="text-5xl md:text-7xl lg:text-8xl font-display leading-tight tracking-tight text-center"
              style={{
                transform: `translate(${calcParallax(5).x}px, ${calcParallax(5).y}px)`,
              }}
            >
              <div className="overflow-hidden">
                <AnimatedText text="Hey, I'm Marci" className="inline-flex items-center gap-2">
                  <motion.span
                    initial={{ rotate: -15, scale: 0.8, opacity: 0 }}
                    animate={{ rotate: 0, scale: 1, opacity: 1 }}
                    transition={{ delay: 0.8, duration: 0.6, type: "spring" }}
                    className="inline-block"
                  >
                    👋
                  </motion.span>
                </AnimatedText>
              </div>
              
              <div className="overflow-hidden mt-4">
                <AnimatedText 
                  text="I make digital products" 
                  className="block"
                />
              </div>
              
              <div className="overflow-hidden mt-4">
                <span className="relative inline-block">
                  <AnimatedText 
                    text="people " 
                    className="inline-block"
                  />
                  
                  <motion.span
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 1.5, duration: 0.6 }}
                    className="gradient-text font-bold"
                  >
                    love
                  </motion.span>
                  
                  {/* Animated underline */}
                  <motion.div
                    initial={{ scaleX: 0, opacity: 0 }}
                    animate={{ scaleX: 1, opacity: 1 }}
                    transition={{ delay: 1.8, duration: 0.8, ease: "easeOut" }}
                    className="absolute -bottom-2 left-0 right-0 h-2 bg-gradient-to-r from-blue via-indigo to-violet opacity-70 rounded-full"
                    style={{ transformOrigin: "left" }}
                  />
                </span>
              </div>
            </motion.h1>
          </div>
          
          {/* Description with staggered fade-in */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1.9 }}
            className="text-primary/70 text-xl md:text-2xl max-w-[700px] mx-auto text-center leading-relaxed"
            style={{
              transform: `translate(${calcParallax(10).x}px, ${calcParallax(10).y}px)`,
            }}
          >
            I help companies build products that are <span className="text-blue font-medium">simple to use</span> and a <span className="text-violet font-medium">joy to interact with</span>. Let's create something amazing together.
          </motion.p>

          {/* CTA Buttons with hover effects */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 2.1 }}
            className="flex flex-wrap items-center justify-center gap-6 pt-8"
          >
            <motion.button 
              className="relative overflow-hidden rounded-full px-6 py-3 text-white"
              onClick={() => scrollToSection('work')}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {/* Static gradient background instead of animated one */}
              <div className="absolute inset-0 bg-gradient-to-r from-blue via-indigo to-violet" />
              
              <span className="relative z-10 flex items-center gap-2">
                Check out my work
                <motion.span
                  animate={{ x: [0, 5, 0] }}
                  transition={{ 
                    repeat: Infinity, 
                    repeatType: "loop", 
                    duration: 1.5,
                    ease: "easeInOut"
                  }}
                >
                  →
                </motion.span>
              </span>
            </motion.button>
            
            <button 
              className="px-6 py-3 rounded-full border border-primary/20 hover:border-blue hover:text-blue transition-all duration-300"
              onClick={() => scrollToSection('contact')}
            >
              Let's talk
            </button>
          </motion.div>
        </div>
        
        {/* Stats section - Redesigned as a horizontal bar */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 2.3 }}
          className="w-full max-w-[900px] mx-auto mt-24 mb-8" // Increased margin to move away from bottom
        >
          <div className="bg-gradient-to-r from-blue/5 to-violet/5 rounded-2xl p-1">
            <div className="bg-white/50 backdrop-blur-sm rounded-xl shadow-sm border border-primary/5 flex flex-wrap">
              {/* Years */}
              <div className="flex-1 p-6 flex items-center gap-4 group hover:bg-blue/5 transition-colors duration-300 border-r border-primary/10">
                <div className="text-blue">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="18" height="18" x="3" y="4" rx="2" ry="2"></rect><line x1="16" x2="16" y1="2" y2="6"></line><line x1="8" x2="8" y1="2" y2="6"></line><line x1="3" x2="21" y1="10" y2="10"></line><path d="M8 14h.01"></path><path d="M12 14h.01"></path><path d="M16 14h.01"></path><path d="M8 18h.01"></path><path d="M12 18h.01"></path><path d="M16 18h.01"></path></svg>
                </div>
                <div>
                  <div className="text-2xl font-display text-blue group-hover:scale-110 transition-transform duration-300">6+</div>
                  <div className="text-sm text-primary/60">Years building cool stuff</div>
                </div>
              </div>
              
              {/* Projects */}
              <div className="flex-1 p-6 flex items-center gap-4 group hover:bg-violet/5 transition-colors duration-300 border-r border-primary/10">
                <div className="text-violet">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"></path><polyline points="7.5 4.21 12 6.81 16.5 4.21"></polyline><polyline points="7.5 19.79 7.5 14.6 3 12"></polyline><polyline points="21 12 16.5 14.6 16.5 19.79"></polyline><polyline points="3.27 6.96 12 12.01 20.73 6.96"></polyline><line x1="12" x2="12" y1="22.08" y2="12"></line></svg>
                </div>
                <div>
                  <div className="text-2xl font-display text-violet group-hover:scale-110 transition-transform duration-300">20+</div>
                  <div className="text-sm text-primary/60">Projects shipped & loved</div>
                </div>
              </div>
              
              {/* Clients */}
              <div className="flex-1 p-6 flex items-center gap-4 group hover:bg-blue-light/5 transition-colors duration-300 border-r border-primary/10">
                <div className="text-blue-light">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle><path d="M23 21v-2a4 4 0 0 0-3-3.87"></path><path d="M16 3.13a4 4 0 0 1 0 7.75"></path></svg>
                </div>
                <div>
                  <div className="text-2xl font-display text-blue-light group-hover:scale-110 transition-transform duration-300">15+</div>
                  <div className="text-sm text-primary/60">Happy client partnerships</div>
                </div>
              </div>
              
              {/* Industries */}
              <div className="flex-1 p-6 flex items-center gap-4 group hover:bg-indigo/5 transition-colors duration-300">
                <div className="text-indigo">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"></circle><line x1="2" x2="22" y1="12" y2="12"></line><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path></svg>
                </div>
                <div>
                  <div className="text-2xl font-display text-indigo group-hover:scale-110 transition-transform duration-300">3</div>
                  <div className="text-sm text-primary/60">Industries of expertise</div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

const Home = () => {
  const location = useLocation();

  useEffect(() => {
    // Check if we have a scrollTo parameter in the state
    if (location.state?.scrollTo) {
      const element = document.getElementById(location.state.scrollTo);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
      // Clear the state after scrolling
      window.history.replaceState({}, document.title);
    }
  }, [location]);

  const projects = [
    {
      title: "Paynance Banking Platform",
      category: "Fintech",
      path: "/projects/paynance",
      image: paynanceImage1,
      description: "A new fintech platform for businesses to handle their payments how they want. I designed the complete user experience: from the initial landing page and merchant onboarding flow to a comprehensive web platform and mobile payment app. The solution works seamlessly across smartphones, traditional POS systems, and cash registers, making it easy for businesses to accept payments their way.",
      year: "2024",
      tags: ["Fintech", "Payment Solutions", "UX & UI Design", "User Research"],
      stats: {
        Endpoints: "1000+",
        transactions: "1 million monthly transactions",
        timeframe: "12 months"
      }
    },
    {
      title: "Gamifying Urban Discovery",
      category: "Gamification",
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
      title: "Transforming Legal Contracting",
      category: "Legal-Tech",
      path: "/projects/everprove",
      image: everproveImage,
      description: "Everprove makes legal contracts accessible to everyone. The consumer platform lets users create and sign legally-binding documents in minutes through guided templates and digital signing, with each contract securely recorded on the blockchain. For enterprises, it streamlines complex contract workflows through smart automation and tools.",
      year: "2019",
      tags: ["Legal-Tech", "Smart Templates", "Digital Signing", "Blockchain", "Enterprise Solutions"],
      stats: {
        "Contract Creation": "5 minutes average",
        "Cost Savings": "95% vs traditional",
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
      description: "I help teams improve their digital products by focusing on what users actually need. Through research and testing, we'll identify problems and create solutions that make sense for your users and business.",
      features: [
        "User Research & Testing",
        "UX Audits",
        "Journey Mapping",
        "Usability Improvements"
      ],
    },
    {
      icon: <Layers className="w-6 h-6" />,
      title: "UI Design",
      description: "Creating interfaces that work well and look good. I focus on building consistent design systems and components that can scale with your product while keeping development handoff smooth.",
      features: [
        "Design Systems",
        "Interactive Prototypes",
        "Responsive Design",
        "Design-Dev Handoff"
      ],
    },
    {
      icon: <Lightbulb className="w-6 h-6" />,
      title: "Product Consultation",
      description: "Helping teams figure out what to build and why. I focus on understanding your market, users, and business goals to make sure we're building something people actually want to use.",
      features: [
        "Product Strategy",
        "Feature Planning",
        "Market Research",
        "Launch Planning"
      ],
    },
    {
      icon: <Bot className="w-6 h-6" />,
      title: "AI Solutions",
      description: "Making AI work for your business in practical ways. I help identify where AI can actually help your team and users, then implement solutions that bring real value without unnecessary complexity.",
      features: [
        "AI Use-Case Analysis",
        "Solution Design",
        "Integration Planning",
        "UX Implementation",
      ],
    },
  ];

  // Add aiUseCases data near other data constants (projects, services)
  const aiUseCases = [
    {
      industry: "E-commerce",
      title: "Smart Shopping Helper",
      description: "A friendly AI chat assistant that helps customers find what they're looking for, compares products, and makes personalized suggestions - just like having a knowledgeable friend who knows the entire catalog.",
      features: ["Natural conversations", "Product matching", "Smart recommendations", "Size help"],
      impact: "35% fewer abandoned carts",
      icon: ShoppingBag
    },
    {
      industry: "Data Analysis",
      title: "Data Story Generator",
      description: "Turn your messy spreadsheets into clear insights. This tool cleans up your data, spots interesting patterns, and explains what it all means in plain English - no data science degree needed.",
      features: ["Automated cleaning", "Pattern detection", "Clear explanations", "Visual reports"],
      impact: "Hours of analysis → minutes",
      icon: BarChart2
    },
    {
      industry: "Content Creation",
      title: "Social Media Assistant",
      description: "A helping hand for your social media that learns your brand's style. It suggests post ideas, writes drafts, and helps plan your content calendar - while keeping your unique voice.",
      features: ["Post suggestions", "Caption writing", "Hashtag research", "Content planning"],
      impact: "3x faster content creation",
      icon: Share2
    },
    {
      industry: "Customer Support",
      title: "Support Chat Enhancer",
      description: "Works alongside your support team to handle common questions, gather initial info, and suggest solutions - letting your team focus on the complex stuff that really needs their attention.",
      features: ["Quick responses", "Smart routing", "Solution suggestions", "24/7 availability"],
      impact: "80% faster first response",
      icon: HeadphonesIcon
    },
    {
      industry: "Small Business",
      title: "Email Assistant",
      description: "Helps manage your inbox by drafting responses, summarizing long emails, and highlighting what needs your attention first - like having a smart email secretary.",
      features: ["Response drafting", "Priority sorting", "Meeting scheduling", "Follow-up reminders"],
      impact: "2 hours saved daily",
      icon: Mail
    },
    {
      industry: "Legal",
      title: "Legal Doc Assistant",
      description: "Helps law firms quickly review contracts and documents, spots potential issues, and suggests relevant precedents - making document review less tedious and more thorough.",
      features: ["Contract analysis", "Issue spotting", "Citation finding", "Summary generation"],
      impact: "75% faster document review",
      icon: Scale
    }
  ];

  return (
    <main className="bg-background">
      <Hero />

      {/* Work Section */}
      <section id="work" className="px-6 lg:px-12 py-32 bg-background">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="max-w-[1800px] mx-auto"
        >
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 mb-4"
          >
            <span className="w-8 h-[2px] bg-blue" />
            <span className="text-blue font-medium tracking-wide">SELECTED WORK</span>
          </motion.span>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="max-w-3xl mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-display mb-6">
              Some of my work
            </h2>
            <p className="text-primary/60 text-lg md:text-xl leading-relaxed">
              Here are some of the favorite projects I've worked on. Each one was a unique challenge solved with unique solutions and close collaboration with amazing teams.
            </p>
          </motion.div>

          <div className="space-y-6">
            {projects.map((project, index) => (
              <ProjectCard key={index} project={project} index={index + 1} />
            ))}
          </div>
        </motion.div>
      </section>

      {/* Services Section */}
      <section id="services" className="px-6 lg:px-12 py-32 bg-background/50">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-[1800px] mx-auto"
        >
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 mb-4"
          >
            <span className="w-8 h-[2px] bg-blue" />
            <span className="text-blue font-medium tracking-wide">SERVICES</span>
          </motion.span>

          <div className="flex flex-col md:flex-row justify-between items-start gap-4 mb-16">
            <div className="max-w-2xl">
              <h2 className="text-4xl md:text-5xl font-display text-primary mb-6">
                How I Can Help
              </h2>
              <p className="text-primary/60 text-lg leading-relaxed">
                I bring a structured approach to challenges while keeping things practical and focused on results.
              </p>
            </div>
          </div>

          {/* Services Grid */}
          <div className="grid md:grid-cols-2 gap-4 mb-16">
            {services.map((service, index) => (
              <ServiceCard key={index} service={service} />
            ))}
          </div>

          {/* CTA Section */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="flex flex-col items-center text-center pt-8 border-t border-primary/10"
          >
            <h3 className="text-2xl md:text-3xl font-display mb-4">
              Ready to start your next project?
            </h3>
            <p className="text-primary/60 mb-8 max-w-xl">
              Let's discuss how we can work together to create something amazing.
            </p>
            <Link
              to="/contact"
              className="group inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-blue to-violet text-white rounded-full hover:shadow-lg hover:shadow-blue/20 transition-all duration-300"
            >
              Start a Conversation
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
            </Link>
          </motion.div>
        </motion.div>
      </section>

      {/* Add the Process Section here */}
      <ProcessSection />

      {/* AI Section */}
      <section id="ai" className="px-6 lg:px-12 py-32 bg-background">
        <AiSection />
      </section>

      {/* Contact Section */}
      <motion.section id="contact" className="px-6 lg:px-12 py-32 bg-background text-primary">
        <div className="max-w-[1800px] mx-auto">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 mb-4"
          >
            <span className="w-8 h-[2px] bg-blue" />
            <span className="text-blue font-medium tracking-wide">GET IN TOUCH</span>
          </motion.span>
          
          <div className="flex flex-col md:flex-row justify-between items-start gap-12">
            <div className="max-w-2xl">
              <h3 className="text-4xl md:text-5xl font-display text-primary mb-6">
                Let's create something amazing together
              </h3>
              <p className="text-primary/60 text-lg leading-relaxed">
                Have a project in mind? Let's discuss how we can work together to bring your ideas to life.
              </p>
            </div>
            <ProtectedContact />
          </div>
        </div>
      </motion.section>
    </main>
  );
};

export default Home;