import { useState, useEffect, memo, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion';
import { useInView } from 'framer-motion';
import { 
  ArrowUpRight, MousePointer2, Sparkles, Lightbulb, 
  Layers, Bot, Scale, ShoppingCart, BarChart2, MessageSquare, 
  HeadphonesIcon, Mail, ShoppingBag, Share2, Briefcase, Compass, 
  Zap, Users, ArrowRight, Brain, Circle, ChevronRight
} from 'lucide-react';
import paynanceImage1 from '../assets/projects/paynance-1.png';
import paynanceImage2 from '../assets/projects/paynance-2.png';
import loccocityImage1 from '../assets/projects/loccocity.png';
import everproveImage from '../assets/projects/everprove.png';
import EliteHero from '../components/EliteHero';
import RefinedHobbyProjects from '../components/RefinedHobbyProjects';
import ProtectedContact from '../components/ProtectedContact';

// Bento Grid Project Card
const BentoProjectCard = memo(({ project, index, layoutClass }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });
  const [isHovered, setIsHovered] = useState(false);
  
  return (
    <motion.div
      ref={ref}
      className={`${layoutClass} group relative`}
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{ 
        duration: 0.8, 
        delay: index * 0.1,
        ease: [0.25, 1, 0.5, 1]
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <Link
        to={project.comingSoon ? '#' : project.path}
        className="block h-full"
      >
        <motion.div 
          className="relative h-full rounded-3xl overflow-hidden glass border border-white/20 hover:border-white/40 transition-all duration-500"
          whileHover={{ scale: 1.02 }}
          transition={{ duration: 0.3 }}
        >
          {/* Gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-br from-transparent via-transparent to-black/20 z-10" />
          
          {/* Image */}
          <div className="absolute inset-0">
            <motion.img
              src={project.image}
              alt={project.title}
              className={`w-full h-full object-cover ${project.comingSoon ? 'grayscale' : ''}`}
              animate={{ scale: isHovered ? 1.1 : 1 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
            />
          </div>

          {/* Content overlay */}
          <div className="absolute inset-0 flex flex-col justify-end p-6 md:p-8 z-20">
            {/* Category badge */}
            <motion.div
              className="inline-flex items-center gap-2 px-3 py-1.5 glass rounded-full mb-4 w-fit"
              initial={{ opacity: 0, x: -20 }}
              animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
              transition={{ delay: index * 0.1 + 0.3 }}
            >
              <Circle className="w-2 h-2 fill-current text-accent-coral" />
              <span className="text-xs font-medium text-primary">{project.category}</span>
            </motion.div>

            {/* Title and description */}
            <motion.h3 
              className="text-2xl md:text-3xl font-bold text-primary mb-2"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ delay: index * 0.1 + 0.4 }}
            >
              {project.title}
            </motion.h3>
            
            <motion.p 
              className="text-sm md:text-base text-secondary mb-4 line-clamp-2"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ delay: index * 0.1 + 0.5 }}
            >
              {project.shortDescription}
            </motion.p>

            {/* Tags */}
            <motion.div 
              className="flex flex-wrap gap-2 mb-6"
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : { opacity: 0 }}
              transition={{ delay: index * 0.1 + 0.6 }}
            >
              {project.tags.slice(0, 3).map((tag, i) => (
                <span
                  key={i}
                  className="px-3 py-1 text-xs font-medium glass rounded-full text-primary/80"
                >
                  {tag}
                </span>
              ))}
            </motion.div>

            {/* CTA */}
            {!project.comingSoon && (
              <motion.div
                className="flex items-center gap-2 text-primary font-medium group/cta"
                initial={{ opacity: 0 }}
                animate={isInView ? { opacity: 1 } : { opacity: 0 }}
                transition={{ delay: index * 0.1 + 0.7 }}
              >
                <span>View case study</span>
                <ChevronRight className="w-4 h-4 transform group-hover/cta:translate-x-1 transition-transform" />
              </motion.div>
            )}

            {project.comingSoon && (
              <motion.div
                className="absolute inset-0 flex items-center justify-center bg-black/50 backdrop-blur-sm"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
              >
                <span className="text-white text-lg font-medium px-4 py-2 glass rounded-full">
                  Coming Soon
                </span>
              </motion.div>
            )}
          </div>
        </motion.div>
      </Link>
    </motion.div>
  );
});

// Service Card with glassmorphism
const EliteServiceCard = memo(({ service, index }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      ref={ref}
      className="relative group"
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
      transition={{ 
        duration: 0.6, 
        delay: index * 0.1,
        ease: [0.25, 1, 0.5, 1]
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <motion.div 
        className="h-full p-8 glass rounded-3xl border border-white/20 hover:border-white/40 transition-all duration-500 noise-texture overflow-hidden"
        whileHover={{ y: -5 }}
        transition={{ duration: 0.3 }}
      >
        {/* Floating gradient background */}
        <motion.div
          className="absolute -top-1/2 -right-1/2 w-full h-full bg-gradient-to-br from-accent-coral/10 via-transparent to-transparent rounded-full blur-3xl"
          animate={{
            x: isHovered ? -50 : 0,
            y: isHovered ? 50 : 0,
          }}
          transition={{ duration: 0.6 }}
        />

        {/* Icon */}
        <motion.div
          className="relative z-10 w-12 h-12 rounded-2xl glass flex items-center justify-center mb-6"
          animate={{ rotate: isHovered ? 360 : 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="text-accent-coral">
            {service.icon}
          </div>
        </motion.div>

        {/* Content */}
        <h4 className="relative z-10 text-xl font-bold text-primary mb-3">
          {service.title}
        </h4>
        
        <p className="relative z-10 text-sm text-secondary mb-6">
          {service.description}
        </p>

        {/* Features */}
        <div className="relative z-10 space-y-2">
          {service.features.map((feature, i) => (
            <motion.div
              key={i}
              className="flex items-center gap-2 text-sm text-primary/80"
              initial={{ opacity: 0, x: -20 }}
              animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
              transition={{ delay: index * 0.1 + i * 0.05 + 0.3 }}
            >
              <Circle className="w-1.5 h-1.5 fill-current text-accent-coral" />
              <span>{feature}</span>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </motion.div>
  );
});

const HomeElite = () => {
  const location = useLocation();
  const { scrollY } = useScroll();
  
  // Parallax effects
  const y1 = useTransform(scrollY, [0, 500], [0, -50]);
  const y2 = useTransform(scrollY, [0, 500], [0, -100]);

  useEffect(() => {
    if (location.state?.scrollTo) {
      const element = document.getElementById(location.state.scrollTo);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
      window.history.replaceState({}, document.title);
    }
  }, [location]);

  const projects = [
    {
      title: "Paynance Banking",
      category: "Fintech",
      path: "/projects/paynance",
      image: paynanceImage1,
      shortDescription: "Next-gen payment platform for modern businesses",
      description: "A new fintech platform for businesses to handle their payments how they want. I designed the complete user experience: from the initial landing page and merchant onboarding flow to a comprehensive web platform and mobile payment app. The solution works seamlessly across smartphones, traditional POS systems, and cash registers, making it easy for businesses to accept payments their way.",
      year: "2024",
      tags: ["Fintech", "Payment Solutions", "UX & UI Design", "User Research"],
      layoutClass: "col-span-2 row-span-2"
    },
    {
      title: "Urban Discovery",
      category: "Gamification",
      path: "/projects/loccocity",
      image: loccocityImage1,
      shortDescription: "Gamifying city exploration with real rewards",
      description: "Locco City transforms urban exploration into an engaging treasure hunt that benefits both users and local businesses. By combining location-based gameplay with real-world rewards, we've created a platform that drives foot traffic to local businesses while making city discovery an adventure.",
      year: "2023",
      tags: ["Gamification", "Location Services", "Mobile App"],
      layoutClass: "col-span-1 row-span-1"
    },
    {
      title: "Legal Contracting",
      category: "Legal-Tech",
      path: "/projects/everprove",
      image: everproveImage,
      shortDescription: "Making legal contracts accessible to everyone",
      description: "Everprove makes legal contracts accessible to everyone. The consumer platform lets users create and sign legally-binding documents in minutes through guided templates and digital signing, with each contract securely recorded on the blockchain.",
      year: "2019",
      tags: ["Legal-Tech", "Smart Templates", "Digital Signing"],
      layoutClass: "col-span-1 row-span-1"
    },
    {
      title: "Mobile Experience",
      category: "Product Design",
      path: "/projects/paynance-mobile",
      image: paynanceImage2,
      shortDescription: "Mobile-first SoftPOS payment solution",
      description: "Reimagining the payment terminal experience with a mobile-first SoftPOS solution. By turning smartphones into powerful payment terminals.",
      year: "2025",
      tags: ["Mobile Design", "UX & UI Design", "Security"],
      layoutClass: "col-span-2 row-span-1",
      comingSoon: true
    }
  ];

  const services = [
    {
      icon: <Sparkles className="w-5 h-5" />,
      title: "UX Consultation",
      description: "Got a digital product that could be better? I help teams dig into what users really need.",
      features: [
        "User Research & Testing",
        "UX/Usability Audits",
        "Journey Mapping",
        "Actionable Recommendations"
      ],
    },
    {
      icon: <Lightbulb className="w-5 h-5" />,
      title: "Product Strategy",
      description: "Not sure what to build, or how to make your existing product shine? Let's clarify your vision.",
      features: [
        "Product Vision & Roadmap",
        "Market & User Insights",
        "Feature Prioritization",
        "Launch & Growth Strategy"
      ],
    },
    {
      icon: <Bot className="w-5 h-5" />,
      title: "AI Integration",
      description: "AI is powerful, but can be complex. I help businesses figure out where AI can actually make a difference.",
      features: [
        "AI Use-Case Discovery",
        "Custom AI Solution Design",
        "LLM & API Integration",
        "Ethical AI Considerations"
      ],
    },
    {
      icon: <Brain className="w-5 h-5" />,
      title: "AI Workshops",
      description: "Want to empower your team with AI skills? I run hands-on workshops teaching effective AI use.",
      features: [
        "Customized LLM Training",
        "Practical AI Tooling",
        "Team Upskilling",
        "Responsible AI Use"
      ],
    }
  ];

  return (
    <main className="bg-background min-h-screen">
      {/* Elite Hero Section */}
      <EliteHero />

      {/* Work Section with Bento Grid */}
      <section id="work" className="relative px-4 sm:px-6 lg:px-8 py-24 md:py-32">
        {/* Background elements */}
        <motion.div 
          className="absolute inset-0 opacity-30"
          style={{ y: y1 }}
        >
          <div className="absolute top-1/4 -left-1/4 w-[600px] h-[600px] bg-gradient-to-br from-accent-electric/10 via-transparent to-transparent rounded-full blur-3xl" />
          <div className="absolute bottom-1/4 -right-1/4 w-[800px] h-[800px] bg-gradient-to-tl from-accent-coral/10 via-transparent to-transparent rounded-full blur-3xl" />
        </motion.div>

        <div className="relative z-10 max-w-[1440px] mx-auto">
          {/* Section header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-16"
          >
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-[2px] bg-gradient-to-r from-accent-coral to-accent-electric rounded-full" />
              <span className="text-sm font-medium text-accent-coral uppercase tracking-wider">Selected Work</span>
            </div>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-black mb-6">
              Some of my work
            </h2>
            <p className="text-lg text-secondary max-w-3xl">
              Here are some of the favorite projects I've worked on. Each one was a unique challenge solved with unique solutions and close collaboration with amazing teams.
            </p>
          </motion.div>

          {/* Bento Grid */}
          <div className="grid grid-cols-2 md:grid-cols-3 gap-6 auto-rows-[250px]">
            {projects.map((project, index) => (
              <BentoProjectCard
                key={index}
                project={project}
                index={index}
                layoutClass={project.layoutClass}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Hobby Projects Section */}
      <RefinedHobbyProjects />

      {/* Services Section */}
      <section id="services" className="relative px-4 sm:px-6 lg:px-8 py-24 md:py-32">
        {/* Gradient background */}
        <div className="absolute inset-0 bg-gradient-to-br from-background via-accent-lime/5 to-background" />
        
        <motion.div 
          className="absolute inset-0 opacity-20"
          style={{ y: y2 }}
        >
          <div className="absolute top-1/3 left-1/4 w-[500px] h-[500px] bg-gradient-to-br from-accent-lime/20 via-transparent to-transparent rounded-full blur-3xl" />
        </motion.div>

        <div className="relative z-10 max-w-[1440px] mx-auto">
          {/* Section header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-16"
          >
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-[2px] bg-gradient-to-r from-accent-lime to-accent-electric rounded-full" />
              <span className="text-sm font-medium text-accent-lime uppercase tracking-wider">What I Offer</span>
            </div>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-black mb-6">
              Helping You Build Better Digital Products
            </h2>
            <p className="text-lg text-secondary max-w-3xl">
              Whether it's refining user experiences, shaping product strategy, integrating AI meaningfully, or upskilling your team – I'm here to help you navigate the complexities and create things people love to use.
            </p>
          </motion.div>

          {/* Services Grid */}
          <div className="grid md:grid-cols-2 gap-6">
            {services.map((service, index) => (
              <EliteServiceCard key={index} service={service} index={index} />
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="relative px-4 sm:px-6 lg:px-8 py-24 md:py-32">
        <div className="relative z-10 max-w-[1440px] mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="glass rounded-3xl p-12 md:p-16 noise-texture overflow-hidden"
          >
            {/* Animated gradient */}
            <motion.div
              className="absolute -top-1/2 -right-1/2 w-full h-full bg-gradient-to-br from-accent-coral/20 via-accent-electric/20 to-accent-lime/20 rounded-full blur-3xl"
              animate={{
                rotate: [0, 360],
                scale: [1, 1.2, 1],
              }}
              transition={{
                duration: 20,
                repeat: Infinity,
                ease: "linear",
              }}
            />

            <div className="relative z-10 flex flex-col md:flex-row justify-between items-start gap-8 md:gap-12">
              <div className="max-w-2xl">
                <h3 className="text-4xl md:text-5xl font-black mb-6">
                  Let's create something amazing together
                </h3>
                <p className="text-lg text-secondary">
                  Have a project in mind? Let's discuss how we can work together to bring your ideas to life.
                </p>
              </div>
              <ProtectedContact />
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  );
};

export default HomeElite;