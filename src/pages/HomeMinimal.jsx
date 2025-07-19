import { useState, useEffect, memo, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useInView } from 'framer-motion';
import { 
  ArrowUpRight, Sparkles, Lightbulb, Bot, Brain, ChevronRight
} from 'lucide-react';
import paynanceImage1 from '../assets/projects/paynance-1.png';
import paynanceImage2 from '../assets/projects/paynance-2.png';
import loccocityImage1 from '../assets/projects/loccocity.png';
import everproveImage from '../assets/projects/everprove.png';
import MinimalHero from '../components/MinimalHero';
import RefinedHobbyProjects from '../components/RefinedHobbyProjects';
import ProtectedContact from '../components/ProtectedContact';

// Clean Bento Project Card
const BentoCard = memo(({ project, index, className }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  
  return (
    <motion.div
      ref={ref}
      className={`group relative ${className}`}
      initial={{ opacity: 0, y: 40 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
      transition={{ 
        duration: 0.6, 
        delay: index * 0.1,
        ease: [0.21, 1.11, 0.81, 0.99]
      }}
    >
      <Link
        to={project.comingSoon ? '#' : project.path}
        className="block h-full"
      >
        <div className="relative h-full rounded-2xl overflow-hidden bg-gray-50 hover:bg-gray-100 transition-colors duration-300">
          {/* Image Container */}
          <div className="relative h-48 md:h-64 overflow-hidden">
            <motion.img
              src={project.image}
              alt={project.title}
              className={`w-full h-full object-cover ${project.comingSoon ? 'grayscale opacity-50' : ''}`}
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.6 }}
            />
            {project.comingSoon && (
              <div className="absolute inset-0 flex items-center justify-center">
                <span className="px-4 py-2 bg-white/90 backdrop-blur-sm rounded-full text-sm font-medium text-gray-700">
                  Coming Soon
                </span>
              </div>
            )}
          </div>

          {/* Content */}
          <div className="p-6 md:p-8">
            {/* Category */}
            <div className="flex items-center gap-2 mb-3">
              <span className="text-xs font-mono font-medium text-gray-500 uppercase tracking-wider">
                {project.category}
              </span>
              <span className="text-xs text-gray-400">•</span>
              <span className="text-xs font-mono text-gray-500">
                {project.year}
              </span>
            </div>

            {/* Title */}
            <h3 className="text-xl md:text-2xl font-semibold text-gray-900 mb-3 group-hover:text-gray-700 transition-colors">
              {project.title}
            </h3>

            {/* Description */}
            <p className="text-sm md:text-base text-gray-600 leading-relaxed mb-4 line-clamp-3">
              {project.shortDescription}
            </p>

            {/* Tags */}
            <div className="flex flex-wrap gap-2 mb-4">
              {project.tags.slice(0, 3).map((tag, i) => (
                <span
                  key={i}
                  className="px-3 py-1 text-xs font-medium bg-white rounded-full text-gray-600"
                >
                  {tag}
                </span>
              ))}
            </div>

            {/* Link */}
            {!project.comingSoon && (
              <div className="flex items-center gap-1 text-sm font-medium text-gray-900 group-hover:gap-2 transition-all">
                <span>View case study</span>
                <ChevronRight className="w-4 h-4" />
              </div>
            )}
          </div>
        </div>
      </Link>
    </motion.div>
  );
});

// Service Card
const ServiceCard = memo(({ service, index }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <motion.div
      ref={ref}
      className="group"
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
    >
      <div className="h-full p-8 bg-white border border-gray-200 rounded-2xl hover:border-gray-300 hover:shadow-lg transition-all duration-300">
        {/* Icon */}
        <div className="w-12 h-12 flex items-center justify-center bg-gray-100 rounded-xl mb-6 group-hover:bg-gray-200 transition-colors">
          <div className="text-gray-700">
            {service.icon}
          </div>
        </div>

        {/* Title */}
        <h4 className="text-xl font-semibold text-gray-900 mb-3">
          {service.title}
        </h4>
        
        {/* Description */}
        <p className="text-gray-600 mb-6 leading-relaxed">
          {service.description}
        </p>

        {/* Features */}
        <ul className="space-y-2">
          {service.features.map((feature, i) => (
            <li key={i} className="flex items-start gap-2 text-sm text-gray-600">
              <span className="text-gray-400 mt-1">•</span>
              <span>{feature}</span>
            </li>
          ))}
        </ul>
      </div>
    </motion.div>
  );
});

// Hobby Projects Bento Section
const HobbyProjectsBento = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const hobbyProjects = [
    {
      title: "AI-Powered UX Tools",
      description: "Building next-gen design tools with AI integration",
      color: "bg-purple-50",
      icon: "🤖",
      tags: ["AI", "Design Tools", "Automation"],
      size: "large"
    },
    {
      title: "Design System Creator",
      description: "Automated design system generation from Figma",
      color: "bg-blue-50",
      icon: "🎨",
      tags: ["Figma", "Automation", "Systems"],
      size: "medium"
    },
    {
      title: "UX Research Platform",
      description: "Streamlining user research with smart analytics",
      color: "bg-green-50",
      icon: "📊",
      tags: ["Research", "Analytics", "Platform"],
      size: "medium"
    },
    {
      title: "Accessibility Checker",
      description: "Real-time accessibility audit for web apps",
      color: "bg-yellow-50",
      icon: "♿",
      tags: ["A11y", "Web", "Tools"],
      size: "small"
    },
    {
      title: "Prototype Animator",
      description: "Advanced animation library for prototypes",
      color: "bg-pink-50",
      icon: "✨",
      tags: ["Animation", "Prototyping", "Library"],
      size: "small"
    }
  ];

  return (
    <section ref={ref} id="hobby-projects" className="px-6 md:px-12 lg:px-16 py-24 md:py-32 bg-gray-50">
      <div className="max-w-[1200px] mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          className="mb-16"
        >
          <span className="text-xs font-mono font-medium text-gray-500 uppercase tracking-wider">
            Side Projects
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-2 mb-4">
            Hobby Projects & Experiments
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl">
            Exploring new ideas and pushing boundaries with experimental projects and tools.
          </p>
        </motion.div>

        {/* Bento Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 auto-rows-[200px]">
          {hobbyProjects.map((project, index) => {
            const sizeClasses = {
              large: 'col-span-2 row-span-2',
              medium: 'col-span-2 md:col-span-1 row-span-1',
              small: 'col-span-1 row-span-1'
            };

            return (
              <motion.div
                key={index}
                className={`group relative ${sizeClasses[project.size]} ${project.color} rounded-2xl p-6 hover:shadow-lg transition-all duration-300 cursor-pointer overflow-hidden`}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                whileHover={{ y: -4 }}
              >
                {/* Icon */}
                <div className="text-3xl mb-4">{project.icon}</div>
                
                {/* Content */}
                <h4 className="font-semibold text-gray-900 mb-2 text-lg">
                  {project.title}
                </h4>
                <p className="text-sm text-gray-600 mb-4 leading-relaxed">
                  {project.description}
                </p>
                
                {/* Tags */}
                <div className="flex flex-wrap gap-2 mt-auto">
                  {project.tags.map((tag, i) => (
                    <span
                      key={i}
                      className="px-2 py-1 text-xs font-medium bg-white/60 rounded-md text-gray-700"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Hover effect */}
                <div className="absolute inset-0 bg-gradient-to-br from-transparent to-black/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

const HomeMinimal = () => {
  const location = useLocation();

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
      title: "Paynance Banking Platform",
      category: "Fintech",
      path: "/projects/paynance",
      image: paynanceImage1,
      shortDescription: "Next-gen payment platform for modern businesses with seamless integration across devices.",
      year: "2024",
      tags: ["Fintech", "UX Design", "Mobile"],
    },
    {
      title: "Gamifying Urban Discovery",
      category: "Gamification",
      path: "/projects/loccocity",
      image: loccocityImage1,
      shortDescription: "Location-based treasure hunt app that drives foot traffic to local businesses.",
      year: "2023",
      tags: ["Gamification", "Mobile App", "UX"],
    },
    {
      title: "Legal Contracting Made Simple",
      category: "Legal-Tech",
      path: "/projects/everprove",
      image: everproveImage,
      shortDescription: "Blockchain-powered platform making legal contracts accessible to everyone.",
      year: "2019",
      tags: ["Legal-Tech", "Blockchain", "SaaS"],
    },
    {
      title: "Paynance Mobile Experience",
      category: "Product Design",
      path: "/projects/paynance-mobile",
      image: paynanceImage2,
      shortDescription: "Transforming smartphones into powerful payment terminals with SoftPOS technology.",
      year: "2025",
      tags: ["Mobile Design", "Payments", "UX"],
      comingSoon: true
    }
  ];

  const services = [
    {
      icon: <Sparkles className="w-5 h-5" />,
      title: "UX Consultation",
      description: "I help teams understand what users really need and create solutions that work.",
      features: [
        "User Research & Testing",
        "UX/Usability Audits",
        "Journey Mapping",
        "Design Strategy"
      ],
    },
    {
      icon: <Lightbulb className="w-5 h-5" />,
      title: "Product Strategy",
      description: "Clarifying product vision and defining features that people will actually use.",
      features: [
        "Product Roadmapping",
        "Market Analysis",
        "Feature Prioritization",
        "Growth Strategy"
      ],
    },
    {
      icon: <Bot className="w-5 h-5" />,
      title: "AI Integration",
      description: "Making AI work for real people and real problems without the hype.",
      features: [
        "AI Use-Case Discovery",
        "Solution Design",
        "Implementation Support",
        "Ethical Guidelines"
      ],
    },
    {
      icon: <Brain className="w-5 h-5" />,
      title: "Team Training",
      description: "Empowering teams with practical AI and design thinking skills.",
      features: [
        "AI Workshops",
        "Design Thinking",
        "Tool Training",
        "Best Practices"
      ],
    }
  ];

  return (
    <main className="bg-white min-h-screen">
      {/* Hero Section */}
      <MinimalHero />

      {/* Work Section */}
      <section id="work" className="px-6 md:px-12 lg:px-16 py-24 md:py-32">
        <div className="max-w-[1200px] mx-auto">
          {/* Section header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-16"
          >
            <span className="text-xs font-mono font-medium text-gray-500 uppercase tracking-wider">
              Selected Work
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-2 mb-4">
              Recent Projects
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl">
              A selection of projects I've worked on, each solving unique challenges with thoughtful design.
            </p>
          </motion.div>

          {/* Projects Grid */}
          <div className="grid md:grid-cols-2 gap-6 md:gap-8">
            {projects.map((project, index) => (
              <BentoCard
                key={index}
                project={project}
                index={index}
                className=""
              />
            ))}
          </div>
        </div>
      </section>

      {/* Hobby Projects Section */}
      <HobbyProjectsBento />

      {/* Services Section */}
      <section id="services" className="px-6 md:px-12 lg:px-16 py-24 md:py-32">
        <div className="max-w-[1200px] mx-auto">
          {/* Section header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-16"
          >
            <span className="text-xs font-mono font-medium text-gray-500 uppercase tracking-wider">
              What I Offer
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-2 mb-4">
              How I Can Help
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl">
              Whether you need UX expertise, product strategy, or AI integration, I'm here to help.
            </p>
          </motion.div>

          {/* Services Grid */}
          <div className="grid md:grid-cols-2 gap-6">
            {services.map((service, index) => (
              <ServiceCard key={index} service={service} index={index} />
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="px-6 md:px-12 lg:px-16 py-24 md:py-32 bg-gray-50">
        <div className="max-w-[1200px] mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-white rounded-2xl p-12 md:p-16 border border-gray-200"
          >
            <div className="flex flex-col md:flex-row justify-between items-start gap-8 md:gap-12">
              <div className="max-w-2xl">
                <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                  Let's create something amazing together
                </h3>
                <p className="text-lg text-gray-600">
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

export default HomeMinimal;