import { useState, useEffect, memo, useRef } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { 
  Menu, X, ArrowUpRight, MousePointer2, Sparkles, Lightbulb, 
  Layers, Bot, Scale, ShoppingCart, BarChart2, MessageSquare, 
  HeadphonesIcon, Mail, ShoppingBag, Share2, Briefcase, Compass, 
  Zap, Users, ArrowRight, Brain
} from 'lucide-react';
import paynanceImage1 from '../assets/projects/paynance-1.png';
import paynanceImage2 from '../assets/projects/paynance-2.png';
import loccocityImage1 from '../assets/projects/loccocity.png';
import everproveImage from '../assets/projects/everprove.png';
import { motion } from 'framer-motion';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import { useEnhancedScrollAnimation } from '../hooks/useEnhancedScrollAnimation';
// import AiSection from '../components/AiSection';
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
  const [cardRef, cardControls] = useEnhancedScrollAnimation('fadeUp', { 
    threshold: 0.1,
    triggerOnce: true
  });
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      ref={cardRef}
      initial="hidden"
      animate={cardControls}
      variants={{
        hidden: { opacity: 0, y: 50 },
        visible: { 
          opacity: 1, 
          y: 0, 
          transition: { 
            duration: 0.7, 
            delay: index * 0.15, 
            ease: [0.25, 1, 0.5, 1] 
          }
        }
      }}
      className="w-full" // This motion.div is for the entry animation and layout
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <Link
        to={project.comingSoon ? '#' : project.path}
        // These classes define the card's shape, shadow, border, and group for hover states.
        // No bg-white here, it's on the inner div.
        className="group relative block rounded-xl md:rounded-2xl transition-all duration-500 shadow-lg hover:shadow-xl overflow-hidden border border-primary/5 hover:border-transparent"
      >
        {/* Animated Gradient Border - visible on hover, sits BEHIND the content div */}
        <motion.div
          className="absolute -inset-0.5 rounded-xl md:rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-0"
          style={{
            background: 'linear-gradient(120deg, var(--color-blue), var(--color-violet), var(--color-magenta))',
            backgroundSize: '200% 200%',
          }}
          animate={{
            backgroundPosition: isHovered ? ['0% 50%', '100% 50%', '0% 50%'] : '50% 50%',
          }}
          transition={{
            duration: isHovered ? 4 : 0.5,
            ease: "linear",
            repeat: isHovered ? Infinity : 0,
          }}
        />

        {/* Inner container for actual content, has the white background, sits ABOVE the gradient border */}
        {/* Rounded slightly less than the Link to make the gradient border visible */}
        <div className="relative flex flex-col lg:flex-row bg-white rounded-[11px] md:rounded-[15px] z-10 h-full">
          {/* Image Container - Refined Styling */}
          <div className="relative w-full lg:w-[380px] lg:min-w-[380px] lg:max-w-[380px] h-[260px] lg:h-auto">
            <div className="absolute inset-0 m-3 sm:m-4 overflow-hidden rounded-lg md:rounded-xl shadow-md">
              <div className="absolute inset-0 bg-gradient-to-br from-blue/10 via-transparent to-violet/10 opacity-0 group-hover:opacity-30 transition-opacity duration-500 z-10" />
              <img
                src={project.image}
                alt={project.title}
                className={`w-full h-full object-cover transform group-hover:scale-[1.04] transition-transform duration-700 ease-in-out
                  ${project.comingSoon ? 'grayscale' : ''}`}
              />
              <div className="absolute top-3 left-3 px-3 py-1.5 bg-background/90 backdrop-blur-md rounded-full shadow-lg border border-white/20">
                <span className="text-blue text-xs md:text-sm font-medium">{project.category}</span>
              </div>
              {project.comingSoon && (
                <div className="absolute inset-0 flex items-center justify-center bg-primary/20 backdrop-blur-sm">
                  <span className="text-white text-sm font-medium bg-black/50 px-3 py-1 rounded-md">Coming Soon</span>
                </div>
              )}
            </div>
          </div>

          {/* Content - Refined Spacing and Typography */}
          <div className="relative flex-1 flex flex-col p-4 sm:p-6 lg:p-8">
            <div className="mb-auto">
              <span className="text-primary/50 text-xs md:text-sm mb-1.5 md:mb-2 block font-mono tracking-tight font-medium">{project.year}</span>
              <h3 className="text-2xl md:text-3xl font-display font-bold mb-3 md:mb-4 text-primary group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-blue group-hover:to-violet transition-colors duration-400 leading-tight">
                {project.title}
              </h3>
              <p className="text-text-body text-sm md:text-base leading-relaxed mb-5 md:mb-8 font-sans">
                {project.description}
              </p>
              <div className="flex flex-wrap gap-2 md:gap-2.5 mb-5 md:mb-8">
                {project.tags.map((tag, i) => (
                  <span
                    key={i}
                    className="px-2.5 md:px-3 py-1 md:py-1.5 text-xs font-medium bg-primary/5 group-hover:bg-white rounded-md text-text-body group-hover:text-blue transform transition-all duration-300 ease-in-out shadow-sm group-hover:shadow-md border border-transparent group-hover:border-blue/30"
                    style={{ transitionDelay: `${i * 60}ms` }}
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            {!project.comingSoon && (
              <div className="mt-auto pt-4">
                <span
                  className="group/cta inline-flex items-center gap-2 md:gap-2.5 px-4 md:px-5 py-2 md:py-2.5 bg-gradient-to-r from-blue/90 to-violet/90 hover:from-blue hover:to-violet rounded-lg text-white transition-all duration-400 ease-in-out shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
                >
                  <span className="text-xs md:text-sm font-semibold">View Case Study</span>
                  <ArrowRight className="w-3.5 h-3.5 md:w-4 md:h-4 transform group-hover/cta:translate-x-1 transition-transform duration-300" />
                </span>
              </div>
            )}
          </div>
        </div>
      </Link>
    </motion.div>
  );
});

// Service Card Component with enhanced animations
const ServiceCard = memo(({ service, index }) => {
  const [cardRef, cardControls] = useEnhancedScrollAnimation('fadeUp', {
    threshold: 0.1,
    triggerOnce: true
  });
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      ref={cardRef}
      initial="hidden"
      animate={cardControls}
      variants={{
        hidden: { 
          opacity: 0,
          y: 40
        },
        visible: { 
          opacity: 1,
          y: 0,
          transition: { 
            duration: 0.6,
            delay: index * 0.1,
            ease: [0.25, 1, 0.5, 1]
          }
        }
      }}
      className="group relative rounded-xl md:rounded-2xl bg-white hover:bg-white transition-all duration-500 shadow-lg hover:shadow-xl overflow-hidden border border-primary/5 hover:border-transparent h-full flex flex-col"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Animated Gradient Border */}
      <motion.div
        className="absolute -inset-0.5 rounded-xl md:rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-0"
        style={{
          background: 'linear-gradient(120deg, var(--color-indigo), var(--color-violet), var(--color-purple))',
          backgroundSize: '200% 200%',
        }}
        animate={{
          backgroundPosition: isHovered ? ['0% 50%', '100% 50%', '0% 50%'] : '50% 50%',
        }}
        transition={{
          duration: isHovered ? 4 : 0.5,
          ease: "linear",
          repeat: isHovered ? Infinity : 0,
        }}
      />
      
      {/* Inner content container */}
      <div className="relative z-10 flex flex-col flex-grow p-6 md:p-8 bg-white rounded-[11px] md:rounded-[15px] h-full">
        {/* Icon and Title */}
        <div className="flex items-center gap-4 mb-4 md:mb-5">
          <div className="p-2.5 md:p-3 bg-gradient-to-br from-indigo/10 to-purple/10 rounded-lg shadow-sm group-hover:from-indigo/20 group-hover:to-purple/20 transition-all duration-300 flex-shrink-0">
            <div className="text-indigo group-hover:text-violet transition-colors duration-300">
              {service.icon}
            </div>
          </div>
          <div className="flex-grow">
            <h4 className="text-xl md:text-2xl font-display font-bold text-primary group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-indigo group-hover:to-purple transition-colors duration-400 leading-tight">
              {service.title}
            </h4>
          </div>
        </div>
        
        {/* Description */}
        <p className="text-primary/70 text-sm md:text-base leading-relaxed font-sans mb-5 md:mb-6 flex-grow">
          {service.description}
        </p>

        {/* Features as inline tags */}
        <div className="mt-auto">
          <h5 className="text-xs font-semibold text-primary/50 mb-2 uppercase tracking-wider">Key Focus Areas</h5>
          <div className="flex flex-wrap gap-2">
            {service.features.map((feature, i) => (
              <span 
                key={i}
                className="px-2.5 md:px-3 py-1 md:py-1.5 text-xs font-medium bg-primary/5 group-hover:bg-white rounded-md text-primary/70 group-hover:text-indigo transform transition-all duration-300 ease-in-out shadow-sm group-hover:shadow-md border border-transparent group-hover:border-indigo/30"
                style={{ transitionDelay: `${i * 50}ms` }}
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
      icon: <Sparkles className="w-5 h-5 md:w-6 md:h-6" />,
      title: "UX Consultation",
      description: "Got a digital product that could be better? I help teams dig into what users *really* need. We'll find the sticking points and map out clear, practical solutions that make sense for your users and your business goals.",
      features: [
        "User Research & Testing",
        "UX/Usability Audits",
        "Journey Mapping",
        "Actionable Recommendations"
      ],
    },
    {
      icon: <Lightbulb className="w-5 h-5 md:w-6 md:h-6" />,
      title: "Product Strategy",
      description: "Not sure what to build, or how to make your existing product shine? I work with teams to clarify product vision, understand the market, and define features that people will actually use and love.",
      features: [
        "Product Vision & Roadmap",
        "Market & User Insights",
        "Feature Prioritization",
        "Launch & Growth Strategy"
      ],
    },
    {
      icon: <Bot className="w-5 h-5 md:w-6 md:h-6" />,
      title: "AI Integration",
      description: "AI is powerful, but can be complex. I help businesses figure out where AI can *actually* make a difference – for your team and your users – and then design and implement practical, valuable AI solutions without the hype.",
      features: [
        "AI Use-Case Discovery",
        "Custom AI Solution Design",
        "LLM & API Integration",
        "Ethical AI Considerations"
      ],
    },
    {
      icon: <Brain className="w-5 h-5 md:w-6 md:h-6" />,
      title: "AI Workshops & LLM Training",
      description: "Want to empower your team with AI skills? I run hands-on workshops teaching how to effectively use Large Language Models (LLMs) and other AI tools to boost creativity, productivity, and problem-solving.",
      features: [
        "Customized LLM Training",
        "Practical AI Tooling",
        "Team Upskilling",
        "Responsible AI Use"
      ],
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
            <span className="text-blue font-semibold tracking-wider text-xs md:text-sm uppercase">Selected Work</span>
          </motion.span>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="max-w-3xl mb-8 md:mb-16"
          >
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-black mb-4 md:mb-6 leading-tight tracking-tight">
              Some of my work
            </h2>
            <p className="text-text-body text-base md:text-lg lg:text-xl leading-relaxed font-sans">
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
      <section id="services" className="px-4 sm:px-6 lg:px-12 py-16 md:py-32 bg-gradient-to-br from-background via-indigo/5 to-background">
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
            <span className="w-6 md:w-8 h-[2px] bg-indigo" />
            <span className="text-indigo font-semibold tracking-wider text-xs md:text-sm uppercase">What I Offer</span>
          </motion.span>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="max-w-3xl mb-10 md:mb-20"
          >
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-black mb-4 md:mb-6 leading-tight tracking-tight">
              Helping You Build Better Digital Products
            </h2>
            <p className="text-text-body text-base md:text-lg lg:text-xl leading-relaxed font-sans">
              Whether it's refining user experiences, shaping product strategy, integrating AI meaningfully, or upskilling your team – I'm here to help you navigate the complexities and create things people love to use.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-6 md:gap-8">
            {services.map((service, index) => (
              <ServiceCard key={index} service={service} index={index} />
            ))}
          </div>
        </motion.div>
      </section>

      {/* AI Section - REMOVING THIS */}
      {/* <AiSection /> */}

      {/* Contact Section */}
      <motion.section id="contact" className="px-4 sm:px-6 lg:px-12 py-16 md:py-32 bg-background text-primary">
        <div className="max-w-[1800px] mx-auto">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 mb-3 md:mb-4"
          >
            <span className="w-6 md:w-8 h-[2px] bg-blue" />
            <span className="text-blue font-semibold tracking-wider text-xs md:text-sm uppercase">Get in Touch</span>
          </motion.span>
          
          <div className="flex flex-col md:flex-row justify-between items-start gap-8 md:gap-12">
            <div className="max-w-2xl">
              <h3 className="text-3xl sm:text-4xl md:text-5xl font-display font-black text-primary mb-4 md:mb-6 leading-tight tracking-tight">
                Let's create something amazing together
              </h3>
              <p className="text-text-body text-base md:text-lg leading-relaxed font-sans">
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