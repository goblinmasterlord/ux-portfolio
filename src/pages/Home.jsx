import { useState, useEffect, memo, useRef } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { 
  Menu, X, ArrowUpRight, MousePointer2, Sparkles, Lightbulb, 
  Layers, Bot, Scale, ShoppingCart, BarChart2, MessageSquare, 
  HeadphonesIcon, Mail, ShoppingBag, Share2, Briefcase, Compass, 
  Zap, Users, ArrowRight 
} from 'lucide-react';
import paynanceImage1 from '../assets/projects/paynance-1.png';
import paynanceImage2 from '../assets/projects/paynance-2.png';
import loccocityImage1 from '../assets/projects/loccocity.png';
import everproveImage from '../assets/projects/everprove.png';
import { motion } from 'framer-motion';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import { useEnhancedScrollAnimation } from '../hooks/useEnhancedScrollAnimation';
import ProcessSection from '../components/ProcessSection';
import AiSection from '../components/AiSection';
import RefinedHobbyProjects from '../components/RefinedHobbyProjects';
import ProtectedContact from '../components/ProtectedContact';
import CreativeHero from '../components/CreativeHero';

// Animation variants
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

// Project Card Component with enhanced animations
const ProjectCard = memo(({ project, index }) => {
  const [cardRef, cardControls, cardVariants] = useEnhancedScrollAnimation('fadeUp', { 
    threshold: 0.1,
    triggerOnce: true
  });

  return (
    <motion.div
      ref={cardRef}
      initial="hidden"
      animate={cardControls}
      variants={{
        hidden: { opacity: 0, y: 40 },
        visible: { 
          opacity: 1, 
          y: 0, 
          transition: { 
            duration: 0.8, 
            delay: index * 0.1, 
            ease: [0.25, 1, 0.5, 1] 
          }
        }
      }}
    >
      <Link
        to={project.comingSoon ? '#' : project.path}
        className="group relative flex flex-col lg:flex-row gap-5 md:gap-8 p-4 sm:p-6 rounded-xl md:rounded-2xl bg-primary/5 hover:bg-primary/10 transition-all duration-500"
      >
        {/* Subtle gradient border on hover */}
        <div
          className="absolute inset-0 rounded-xl md:rounded-2xl opacity-0 group-hover:opacity-100 transition-all duration-500"
          style={{
            background: 'linear-gradient(45deg, var(--color-blue/0.05), var(--color-violet/0.05))',
            backdropFilter: 'blur(2px)'
          }}
        />

        {/* Image Container */}
        <div className="relative w-full lg:w-[320px] shrink-0">
          <div className="relative overflow-hidden rounded-lg md:rounded-xl aspect-[4/3]">
            {/* Gradient overlay on hover */}
            <div className="absolute inset-0 bg-gradient-to-br from-blue/10 via-indigo/5 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500 z-10" />

            <img
              src={project.image}
              alt={project.title}
              className={`w-full h-full object-cover transform group-hover:scale-[1.02] transition-all duration-700 
                ${project.comingSoon ? 'grayscale' : ''}`}
            />

            {/* Category badge */}
            <div className="absolute top-2 md:top-3 left-2 md:left-3 px-2 md:px-3 py-1 md:py-1.5 bg-background/90 backdrop-blur-sm rounded-full">
              <span className="text-blue text-xs md:text-sm">{project.category}</span>
            </div>

            {project.comingSoon && (
              <div className="absolute inset-0 flex items-center justify-center bg-primary/10 backdrop-blur-sm">
                <span className="text-primary/60 text-sm font-medium">Coming Soon</span>
              </div>
            )}
          </div>
        </div>

        {/* Content */}
        <div className="relative flex-1 flex flex-col mt-4 lg:mt-0">
          <div className="mb-auto">
            {/* Year */}
            <span className="text-primary/40 text-xs md:text-sm mb-1 md:mb-2 block">{project.year}</span>

            {/* Title */}
            <h3 className="text-xl md:text-2xl font-display mb-2 md:mb-3 group-hover:text-blue transition-colors duration-300">
              {project.title}
            </h3>

            {/* Description */}
            <p className="text-primary/60 text-sm md:text-base leading-relaxed mb-4 md:mb-6">
              {project.description}
            </p>

            {/* Tags */}
            <div className="flex flex-wrap gap-1.5 md:gap-2 mb-4 md:mb-6">
              {project.tags.map((tag, i) => (
                <span
                  key={i}
                  className="px-2 md:px-3 py-0.5 md:py-1 text-xs bg-primary/5 rounded-full text-primary/60 
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
            <div className="flex flex-wrap gap-4 md:gap-6 pt-4 md:pt-6 border-t border-primary/10">
              {Object.entries(project.stats).map(([key, value]) => (
                <div key={key} className="space-y-0.5 md:space-y-1">
                  <div className="text-base md:text-lg font-display text-blue">{value}</div>
                  <div className="text-xs md:text-sm text-primary/40 capitalize">{key}</div>
                </div>
              ))}
            </div>
          )}

          {/* Floating CTA */}
          {!project.comingSoon && (
            <div className="mt-4 lg:mt-6">
              <span
                className="group inline-flex items-center gap-1.5 md:gap-2 px-3 md:px-4 py-1.5 md:py-2 bg-blue/10 rounded-full text-blue hover:bg-blue/20 transition-all duration-300"
              >
                <span className="text-xs md:text-sm">View Case Study</span>
                <ArrowRight className="w-3.5 h-3.5 md:w-4 md:h-4 transform group-hover:translate-x-1 transition-transform duration-300" />
              </span>
            </div>
          )}
        </div>
      </Link>
    </motion.div>
  );
});

// Service Card Component with enhanced animations
const ServiceCard = memo(({ service, index }) => {
  const [cardRef, cardControls, cardVariants] = useEnhancedScrollAnimation('scale', { 
    threshold: 0.1,
    initialScale: 0.95,
    triggerOnce: true
  });

  return (
    <motion.div
      ref={cardRef}
      initial="hidden"
      animate={cardControls}
      variants={{
        hidden: { opacity: 0, scale: 0.95 },
        visible: { 
          opacity: 1, 
          scale: 1, 
          transition: { 
            duration: 0.6, 
            delay: index * 0.1,
            ease: [0.22, 1, 0.36, 1]
          }
        }
      }}
      className="group relative p-4 sm:p-6 rounded-lg md:rounded-xl bg-primary/5 hover:bg-primary/10 transition-all duration-500"
    >
      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue/0 via-indigo/5 to-violet/0 opacity-0 group-hover:opacity-100 transition-all duration-500" />
      
      <div className="relative z-10 flex gap-3 md:gap-4">
        {/* Icon */}
        <div className="w-8 h-8 md:w-10 md:h-10 rounded-lg bg-blue/10 flex items-center justify-center shrink-0">
          <div className="text-blue">
            {service.icon}
          </div>
        </div>

        <div>
          {/* Title */}
          <h4 className="text-lg md:text-xl font-display text-primary mb-1.5 md:mb-2 group-hover:text-blue transition-colors duration-300">
            {service.title}
          </h4>
          
          {/* Description */}
          <p className="text-primary/60 text-xs md:text-sm mb-2 md:mb-3 leading-relaxed">
            {service.description}
          </p>

          {/* Features as inline tags */}
          <div className="flex flex-wrap gap-1.5 md:gap-2">
            {service.features.map((feature, index) => (
              <span 
                key={index}
                className="px-2 py-0.5 md:py-1 text-xs bg-primary/5 rounded-full text-primary/60"
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
      <CreativeHero />

      {/* Work Section */}
      <section id="work" className="px-4 sm:px-6 lg:px-12 py-16 md:py-32 bg-background">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="max-w-[1800px] mx-auto"
        >
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 mb-3 md:mb-4"
          >
            <span className="w-6 md:w-8 h-[2px] bg-blue" />
            <span className="text-blue font-medium tracking-wide text-xs md:text-sm">SELECTED WORK</span>
          </motion.span>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="max-w-3xl mb-8 md:mb-16"
          >
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-display mb-3 md:mb-6">
              Some of my work
            </h2>
            <p className="text-primary/60 text-base md:text-lg lg:text-xl leading-relaxed">
              Here are some of the favorite projects I've worked on. Each one was a unique challenge solved with unique solutions and close collaboration with amazing teams.
            </p>
          </motion.div>

          <div className="space-y-4 md:space-y-6">
            {projects.map((project, index) => (
              <ProjectCard key={index} project={project} index={index} />
            ))}
          </div>
        </motion.div>
      </section>

      {/* Highly Enhanced Hobby Projects Section */}
      <RefinedHobbyProjects />

      {/* Services Section with enhanced animations */}
      <section id="services" className="px-4 sm:px-6 lg:px-12 py-16 md:py-32 bg-background/50">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-[1800px] mx-auto"
        >
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 mb-3 md:mb-4"
          >
            <span className="w-6 md:w-8 h-[2px] bg-blue" />
            <span className="text-blue font-medium tracking-wide text-xs md:text-sm">SERVICES</span>
          </motion.span>

          <div className="flex flex-col md:flex-row justify-between items-start gap-4 mb-8 md:mb-16">
            <div className="max-w-2xl">
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-display text-primary mb-3 md:mb-6">
                How I Can Help
              </h2>
              <p className="text-primary/60 text-base md:text-lg leading-relaxed">
                I bring a structured approach to challenges while keeping things practical and focused on results.
              </p>
            </div>
          </div>

          {/* Services Grid */}
          <div className="grid md:grid-cols-2 gap-3 md:gap-4 mb-12 md:mb-16">
            {services.map((service, index) => (
              <ServiceCard key={index} service={service} index={index} />
            ))}
          </div>

          {/* CTA Section */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="flex flex-col items-center text-center pt-6 md:pt-8 border-t border-primary/10"
          >
            <h3 className="text-xl sm:text-2xl md:text-3xl font-display mb-3 md:mb-4">
              Ready to start your next project?
            </h3>
            <p className="text-primary/60 mb-6 md:mb-8 max-w-xl text-sm md:text-base">
              Let's discuss how we can work together to create something amazing.
            </p>
            <Link
              to="/contact"
              className="group inline-flex items-center gap-2 px-5 py-2.5 md:px-6 md:py-3 bg-gradient-to-r from-blue to-violet text-white rounded-full hover:shadow-lg hover:shadow-blue/20 transition-all duration-300 text-sm md:text-base"
            >
              Start a Conversation
              <ArrowRight className="w-3.5 h-3.5 md:w-4 md:h-4 group-hover:translate-x-1 transition-transform duration-300" />
            </Link>
          </motion.div>
        </motion.div>
      </section>

      {/* Enhanced Process Section */}
      <ProcessSection />

      {/* AI Section */}
      <section id="ai" className="px-4 sm:px-6 lg:px-12 py-16 md:py-32 bg-background">
        <AiSection />
      </section>

      {/* Original Contact Section */}
      <motion.section id="contact" className="px-4 sm:px-6 lg:px-12 py-16 md:py-32 bg-background text-primary">
        <div className="max-w-[1800px] mx-auto">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 mb-3 md:mb-4"
          >
            <span className="w-6 md:w-8 h-[2px] bg-blue" />
            <span className="text-blue font-medium tracking-wide text-xs md:text-sm">GET IN TOUCH</span>
          </motion.span>
          
          <div className="flex flex-col md:flex-row justify-between items-start gap-8 md:gap-12">
            <div className="max-w-2xl">
              <h3 className="text-3xl sm:text-4xl md:text-5xl font-display text-primary mb-3 md:mb-6">
                Let's create something amazing together
              </h3>
              <p className="text-primary/60 text-base md:text-lg leading-relaxed">
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