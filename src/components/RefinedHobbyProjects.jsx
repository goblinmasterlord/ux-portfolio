// src/components/RefinedHobbyProjects.jsx
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Github, ExternalLink, Sparkles, Zap, BarChart3, Video, Palette, Droplets, ChevronDown, ChevronUp, Brain, Cpu, Globe, Code } from 'lucide-react';
import { useInView } from 'react-intersection-observer';

const RefinedHobbyProjects = () => {
  const [sectionRef, sectionInView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  const [isMobile, setIsMobile] = useState(false);

  // Check if mobile on mount and window resize
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  // Tech logos mapping
  const techLogos = {
    "React": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
    "Next.js": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg",
    "Node.js": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
    "Python": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg",
    "Tailwind CSS": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg",
    "TypeScript": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg",
    "Supabase": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/supabase/supabase-original.svg",
    "Vite": "https://vitejs.dev/logo.svg",
    "Claude API": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/openai/openai-original.svg",
    "Anthropic API": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/openai/openai-original.svg",
    "OpenAI Whisper": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/openai/openai-original.svg",
    "RAG": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg",
    "FFmpeg": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg",
    "ElasticSearch": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/elasticsearch/elasticsearch-original.svg",
    "React Native": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
    "Gemini API": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/google/google-original.svg",
    "Recommendation Algorithm": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg",
    "Framer Motion": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/framermotion/framermotion-original.svg"
  };

  // AI-focused projects (hobby/friend projects)
  const aiProjects = [
    {
      title: "UXTools",
      description: "A collection of AI-powered tools I built to help with everyday UX tasks.",
      shortDescription: "AI tools for UX work - design critique, research analysis, and accessibility checks that I actually use",
      technologies: ["React", "Node.js", "Claude API", "Anthropic API"],
      icon: <Brain className="w-6 h-6" />,
      images: ["/images/UXTools.jpg"],
      color: "violet",
      githubUrl: "https://github.com/goblinmasterlord/ux-toolkit",
      category: "AI Tool",
      features: [
        "Design critique",
        "UX audits with actionable suggestions",
        "Can switch between different AI models"
      ]
    },
    {
      title: "NeuralUXStudio",
      description: "A site where I document and share what I've learned about using AI in UX work.",
      shortDescription: "My attempt at teaching others how to use AI in UX through tutorials, case studies, and videos (coming soon)",
      technologies: ["Next.js", "React", "Tailwind CSS", "Supabase"],
      icon: <Video className="w-6 h-6" />,
      images: ["/images/NeuralUX.jpg"],
      color: "purple",
      githubUrl: "https://github.com/goblinmasterlord/ai-consulting",
      liveUrl: "https://neuraluxstudio.com",
      category: "Education",
      features: [
        "Step-by-step guides for different experience levels",
        "Blog posts about practical AI applications",
        "Videos (work in progress)"
      ]
    },
    {
      title: "Is that REALLY true?",
      description: "A real-time fact-checker that listens to audio/video and flags questionable claims as they happen.",
      shortDescription: "Built during a hackathon - transcribes speech in real-time and fact-checks claims with sources",
      technologies: ["React", "Python", "OpenAI Whisper", "RAG", "FFmpeg", "ElasticSearch"],
      icon: <Sparkles className="w-6 h-6" />,
      images: ["/images/Isthattrue.jpg"],
      color: "indigo",
      githubUrl: "https://github.com/goblinmasterlord/robot-chicken",
      category: "Hackathon",
      features: [
        "Multi-step AI pipeline for processing speech",
        "Identifies who's speaking and what they're claiming",
        "Automatically extracts and verifies factual statements",
        "Shows sources and confidence levels",
        "Live overlay on video/audio streams"
      ]
    },
    {
      title: "SmartBudget",
      description: "A mobile app for personal budgeting that uses AI to give you insights about your spending habits.",
      shortDescription: "Personal finance app with AI that actually helps you understand where your money goes and how to save",
      technologies: ["React Native", "Node.js", "Gemini API"],
      icon: <BarChart3 className="w-6 h-6" />,
      images: ["/images/Budgeting.jpg"],
      color: "teal",
      githubUrl: "https://github.com/goblinmasterlord/smart-budget-app",
      category: "Mobile App",
      features: [
        "AI-powered spending analysis",
        "Smart categorization of expenses",
        "Personalized recommendations based on set goals"
      ]
    }
  ];

  // Client sites and non-AI projects
  const clientProjects = [
    {
      title: "Aromate",
      description: "A fragrance recommendation site that helps people find perfumes they'll actually like.",
      shortDescription: "Fragrance finder with interactive quizzes and smart recommendations based on your preferences",
      technologies: ["React", "Node.js", "Recommendation Algorithm", "Tailwind CSS"],
      icon: <Droplets className="w-6 h-6" />,
      images: ["/images/Aromate.jpg"],
      color: "blue",
      githubUrl: "https://github.com/goblinmasterlord/aromate",
      liveUrl: "https://aromate.vercel.app/",
      category: "E-commerce",
      features: [
        "Fun quiz that actually works for finding scents",
        "Recommendation engine based on fragrance notes",
        "Detailed perfume profiles with ingredient breakdowns",
        "Save favorites and compare different options",
        "Works great on mobile"
      ]
    },
    {
      title: "ArtimeStudio",
      description: "Portfolio website I built for a creative studio to showcase their work and team.",
      shortDescription: "Creative studio portfolio with smooth animations and transitions",
      technologies: ["React", "Vite", "Tailwind CSS", "Framer Motion"],
      icon: <Palette className="w-6 h-6" />,
      images: ["/images/Artimestudio.jpg"],
      color: "magenta",
      githubUrl: "https://github.com/goblinmasterlord/artimestudio",
      liveUrl: "https://artimestudio.vercel.app/",
      category: "Portfolio",
      features: [
        "Smooth transitions and animations",
        "Fast loading with progressive enhancement"
      ]
    },
    {
      title: "BeautifulData",
      description: "Website for a data consultancy showcasing their services and previous work.",
      shortDescription: "Professional consultancy site with service displays and case studies",
      technologies: ["React", "Vite", "Tailwind CSS", "Framer Motion"],
      icon: <BarChart3 className="w-6 h-6" />,
      images: ["/images/Beautifuldata.jpg"],
      color: "emerald",
      githubUrl: "https://github.com/goblinmasterlord/data-consultancy",
      liveUrl: "https://beautifuldata.co.uk",
      category: "Consultancy",
      features: [
        "Clean presentation of services and expertise",
        "Blazing performance with Vite and Framer Motion",
        "Real client case studies and results"
      ]
    },
    {
      title: "Drnd.hu",
      description: "Professional website for a Hungarian law firm offering legal services.",
      shortDescription: "Hungarian law firm website with modern design and clear service presentation",
      technologies: ["React", "Vite", "Tailwind CSS", "Framer Motion"],
      icon: <Globe className="w-6 h-6" />,
      images: ["/images/Drnd.jpg"],
      color: "orange",
      githubUrl: "https://github.com/goblinmasterlord/drnd",
      liveUrl: "https://drnd.hu",
      category: "Legal Services",
      features: [
        "Clear service descriptions and expertise areas",
        "Modern, trustworthy design",
        "Contact forms and inquiry handling"
      ]
    }
  ];

  // Tech stack data
  const techStack = [
    { name: "React", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg", category: "Frontend" },
    { name: "Next.js", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg", category: "Framework" },
    { name: "Node.js", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg", category: "Backend" },
    { name: "Python", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg", category: "Backend" },
    { name: "Tailwind CSS", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg", category: "Styling" },
    { name: "TypeScript", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg", category: "Language" },
    { name: "Supabase", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/supabase/supabase-original.svg", category: "Database" },
    { name: "Vite", logo: "https://vitejs.dev/logo.svg", category: "Build Tool" },
    { name: "Framer Motion", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/framermotion/framermotion-original.svg", category: "Animation" },
    { name: "OpenAI", logo: "https://static.vecteezy.com/system/resources/previews/021/059/827/non_2x/chatgpt-logo-chat-gpt-icon-on-white-background-free-vector.jpg", category: "AI" },
    { name: "Claude", logo: "https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/anthropic.svg", category: "AI" },
    { name: "Gemini", logo: "https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/googlegemini.svg", category: "AI" },
    { name: "ChatGPT", logo: "https://static.vecteezy.com/system/resources/previews/021/059/827/non_2x/chatgpt-logo-chat-gpt-icon-on-white-background-free-vector.jpg", category: "AI" }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, scale: 0.8, y: 20 },
    visible: { 
      opacity: 1, 
      scale: 1,
      y: 0,
      transition: { duration: 0.4, ease: [0.25, 0.1, 0.25, 1] }
    }
  };

  return (
    <section 
      id="hobby-projects" 
      className="bg-background px-4 sm:px-6 lg:px-12 pt-16 md:pt-32 pb-0 relative overflow-hidden"
    >
      {/* Enhanced background: removed full section gradient, kept pattern and blobs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* The following div created the full section gradient and is now removed/commented out
        <div className="absolute inset-0 bg-gradient-to-br from-background via-blue/5 to-background" /> 
        */}
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgdmlld0JveD0iMCAwIDYwIDYwIj48cGF0aCBkPSJNNjAgMEgwdjYwaDYwVjB6TTIgMmg1NnY1NkgyVjJ6IiBmaWxsPSIjMjAyMDIwIiBmaWxsLW9wYWNpdHk9IjAuMDIiIGZpbGwtcnVsZT0iZXZlbm9kZCIvPjwvc3ZnPg==')] opacity-10" />
        <div className="colorful-blob w-[600px] h-[600px] -top-[250px] -right-[250px] bg-blue/10 animate-float-slow" />
        <div className="colorful-blob w-[700px] h-[700px] -bottom-[300px] -left-[300px] bg-violet/10 animate-float-medium" />
      </div>

      <motion.div
        ref={sectionRef}
        initial="hidden"
        animate={sectionInView ? "visible" : "hidden"}
        variants={containerVariants}
        className="max-w-[1800px] mx-auto relative z-10"
      >
        {/* Consistent header format like other sections */}
        <motion.span
          variants={{
            hidden: { opacity: 0, y: 20 },
            visible: { opacity: 1, y: 0, transition: { duration: 0.4 } }
          }}
          className="inline-flex items-center gap-2 mb-3 md:mb-4"
        >
          <span className="w-6 md:w-8 h-[2px] bg-blue" />
          <span className="text-blue font-semibold tracking-wider text-xs md:text-sm uppercase">Personal Projects</span>
        </motion.span>
        
        <motion.div
          variants={{
            hidden: { opacity: 0, y: 20 },
            visible: { opacity: 1, y: 0, transition: { duration: 0.4, delay: 0.1 } }
          }}
          className="max-w-3xl mb-8 md:mb-16"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-black mb-3 md:mb-6 leading-tight tracking-tight">
            Side Projects & Experiments
          </h2>
          
          <p className="text-text-body text-base md:text-lg lg:text-xl leading-relaxed font-sans">
            A collection of projects exploring AI, building tools for others, and experimenting with new technologies.
          </p>
        </motion.div>

        {/* AI-Focused Projects Section */}
        <motion.div
          variants={{
            hidden: { opacity: 0, y: 20 },
            visible: { opacity: 1, y: 0, transition: { duration: 0.5, delay: 0.2 } }
          }}
          className="mb-16 md:mb-20"
        >
          <div className="flex items-center gap-3 mb-6 md:mb-8">
            <div className="p-2 bg-violet/10 rounded-lg">
              <Cpu className="w-5 h-5 text-violet" />
            </div>
            <h3 className="text-xl md:text-2xl font-display font-bold">AI-Powered Projects</h3>
            <div className="flex-1 h-[1px] bg-gradient-to-r from-violet/20 to-transparent ml-4" />
          </div>
          
          <motion.div
            variants={{
              hidden: { opacity: 0 },
              visible: { 
                opacity: 1,
                transition: {
                  staggerChildren: 0.1
                }
              }
            }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6"
          >
            {aiProjects.map((project, index) => (
              <CompactProjectCard 
                key={project.title} 
                project={project} 
                index={index} 
                isMobile={isMobile}
                type="ai"
                techLogos={techLogos}
              />
            ))}
          </motion.div>
        </motion.div>

        {/* Client Sites Section */}
        <motion.div
          variants={{
            hidden: { opacity: 0, y: 20 },
            visible: { opacity: 1, y: 0, transition: { duration: 0.5, delay: 0.4 } }
          }}
          className="mb-16 md:mb-20"
        >
          <div className="flex items-center gap-3 mb-6 md:mb-8">
            <div className="p-2 bg-blue/10 rounded-lg">
              <Globe className="w-5 h-5 text-blue" />
            </div>
            <h3 className="text-xl md:text-2xl font-display font-bold">Client Projects</h3>
            <div className="flex-1 h-[1px] bg-gradient-to-r from-blue/20 to-transparent ml-4" />
          </div>
          
          <motion.div
            variants={{
              hidden: { opacity: 0 },
              visible: { 
                opacity: 1,
                transition: {
                  staggerChildren: 0.1
                }
              }
            }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6"
          >
            {clientProjects.map((project, index) => (
              <CompactProjectCard 
                key={project.title} 
                project={project} 
                index={index} 
                isMobile={isMobile}
                type="client"
                techLogos={techLogos}
              />
            ))}
          </motion.div>
        </motion.div>

        {/* Tech Stack Section */}
        <TechStackSection techStack={techStack} />
      </motion.div>
    </section>
  );
};

// Compact Project Card with vertical layout
const CompactProjectCard = ({ project, index, isMobile, type, techLogos }) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const [imageLoaded, setImageLoaded] = useState(false);
  
  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0, 
      transition: { 
        duration: 0.5, 
        ease: [0.25, 0.1, 0.25, 1.0]
      } 
    }
  };

  const expandVariants = {
    collapsed: { height: 0, opacity: 0 },
    expanded: { 
      height: "auto", 
      opacity: 1,
      transition: {
        height: { duration: 0.4, ease: [0.25, 0.1, 0.25, 1] },
        opacity: { duration: 0.3, delay: 0.1 }
      }
    }
  };

  const getTypeColor = () => {
    return type === 'ai' ? 'violet' : 'blue';
  };

  const getTypeGradient = () => {
    return type === 'ai' 
      ? 'from-violet/20 via-purple/10 to-transparent' 
      : 'from-blue/20 via-indigo/10 to-transparent';
  };

  return (
    <motion.div
      variants={cardVariants}
      className="group relative bg-white rounded-xl overflow-hidden border border-primary/10 hover:border-primary/20 transition-all duration-500 shadow-card hover:shadow-lg h-full flex flex-col"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => {
        setIsHovered(false);
      }}
    >
      {/* Gradient border effect */}
      <div className={`absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition-all duration-500 bg-gradient-to-br ${getTypeGradient()}`} />
      
      {/* Horizontal image container */}
      <div className="relative overflow-hidden">
        <div className="aspect-[16/9] overflow-hidden bg-gradient-to-br from-primary/5 to-primary/10">
          {project.images && project.images[0] && (
            <img 
              src={project.images[0]} 
              alt={project.title} 
              className={`w-full h-full object-cover object-center transition-all duration-700 group-hover:scale-105 ${imageLoaded ? 'opacity-100' : 'opacity-0'}`}
              onLoad={() => setImageLoaded(true)}
            />
          )}
          
          {!imageLoaded && (
            <div className="absolute inset-0 flex items-center justify-center">
              <div className={`w-5 h-5 rounded-full border-2 border-t-${getTypeColor()} border-r-transparent animate-spin`}></div>
            </div>
          )}
          
          {/* Overlay gradient */}
          <div className={`absolute inset-0 bg-gradient-to-br ${getTypeGradient()} opacity-0 group-hover:opacity-100 transition-all duration-500 z-10`} />
          
          {/* Project icon */}
          <div className="absolute bottom-2 right-2 z-20">
            <div className={`p-1.5 bg-white/90 backdrop-blur-sm rounded-lg shadow-md text-${getTypeColor()} transform group-hover:scale-110 transition-all duration-300`}>
              {React.cloneElement(project.icon, { className: "w-3 h-3" })}
            </div>
          </div>
        </div>
      </div>
      
      {/* Compact content */}
      <div className="p-3 flex-1 flex flex-col relative z-10">
        {/* Title */}
        <div className="mb-2">
          <h3 className={`text-sm font-display font-semibold text-primary group-hover:text-${getTypeColor()} transition-colors duration-300 mb-1 line-clamp-1`}>
            {project.title}
          </h3>
          
          <p className="text-text-body text-xs leading-relaxed line-clamp-2 font-sans">
            {project.shortDescription}
          </p>
        </div>
        
        {/* Compact technology tags with logos */}
        <div className="flex flex-wrap gap-1 mb-3">
          {project.technologies.map((tech, i) => (
            <div 
              key={i} 
              className={`flex items-center gap-1 px-2 py-1 text-xs font-sans bg-primary/5 rounded-md text-text-body group-hover:bg-${getTypeColor()}/10 group-hover:text-${getTypeColor()} transform group-hover:translate-x-0.5 transition-all duration-300`}
              style={{ transitionDelay: `${i * 50}ms` }}
            >
              {techLogos[tech] && (
                <img 
                  src={techLogos[tech]} 
                  alt={tech}
                  className="w-3 h-3 object-contain"
                  onError={(e) => e.target.style.display = 'none'}
                />
              )}
              <span className="truncate font-medium">{tech}</span>
            </div>
          ))}
        </div>

        {/* Expandable features section */}
        <AnimatePresence>
          {isExpanded && (
            <motion.div
              initial="collapsed"
              animate="expanded"
              exit="collapsed"
              variants={expandVariants}
              className="overflow-hidden mb-3"
            >
              <div className="pt-2 border-t border-primary/10">
                <h4 className="text-xs font-semibold text-primary/80 mb-1 font-sans">Key Features</h4>
                <ul className="space-y-1">
                  {project.features.slice(0, 3).map((feature, i) => (
                    <motion.li
                      key={i}
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: i * 0.1 }}
                      className="flex items-start gap-1.5 text-xs text-text-body font-sans"
                    >
                      <div className={`w-1 h-1 rounded-full bg-${getTypeColor()} mt-1 flex-shrink-0`} />
                      <span className="line-clamp-1">{feature}</span>
                    </motion.li>
                  ))}
                </ul>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Compact action buttons */}
        <div className="flex items-center justify-between mt-auto">
          <div className="flex items-center gap-1">
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className={`flex items-center gap-1 px-2 py-1 rounded-md bg-primary/5 hover:bg-${getTypeColor()}/10 text-text-body hover:text-${getTypeColor()} transition-all duration-300 text-xs font-sans font-medium`}
            >
              <Github className="w-3 h-3" />
              <span>Code</span>
            </a>
            
            {project.liveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className={`flex items-center gap-1 px-2 py-1 rounded-md bg-${getTypeColor()}/10 text-${getTypeColor()} hover:bg-${getTypeColor()}/20 transition-all duration-300 text-xs font-sans font-medium`}
              >
                <ExternalLink className="w-3 h-3" />
                <span>Live</span>
              </a>
            )}
          </div>

          {/* Compact expand/collapse button */}
          <motion.button
            onClick={() => setIsExpanded(!isExpanded)}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className={`p-1 rounded-md bg-primary/5 hover:bg-${getTypeColor()}/10 text-primary/60 hover:text-${getTypeColor()} transition-all duration-300`}
          >
            <motion.div
              animate={{ rotate: isExpanded ? 180 : 0 }}
              transition={{ duration: 0.3 }}
            >
              <ChevronDown className="w-3 h-3" />
            </motion.div>
          </motion.button>
        </div>
      </div>
    </motion.div>
  );
};

// Creative Tech Stack Section Component
const TechStackSection = ({ techStack }) => {
  const [sectionRef, sectionInView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  const containerVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        staggerChildren: 0.05
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, scale: 0.8, y: 20 },
    visible: { 
      opacity: 1, 
      scale: 1,
      y: 0,
      transition: { duration: 0.4, ease: [0.25, 0.1, 0.25, 1] }
    }
  };

  return (
    <motion.div
      ref={sectionRef}
      initial="hidden"
      animate={sectionInView ? "visible" : "hidden"}
      variants={containerVariants}
      className="mb-8 md:mb-12 relative"
    >
      {/* Creative background with blur effect */}
      <div className="absolute inset-0 -mx-4 sm:-mx-6 lg:-mx-12 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-blue/5 to-violet/5 backdrop-blur-3xl" />
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI0MCIgaGVpZ2h0PSI0MCIgdmlld0JveD0iMCAwIDQwIDQwIj48cGF0aCBkPSJNNDAgMEgwdjQwaDQwVjB6TTIgMmgzNnYzNkgyVjJ6IiBmaWxsPSIjMjAyMDIwIiBmaWxsLW9wYWNpdHk9IjAuMDMiIGZpbGwtcnVsZT0iZXZlbm9kZCIvPjwvc3ZnPg==')] opacity-30" />
        
        {/* Floating elements */}
        <div className="colorful-blob w-[300px] h-[300px] -top-[100px] -right-[100px] bg-blue/10 animate-float-slow" />
        <div className="colorful-blob w-[400px] h-[400px] -bottom-[150px] -left-[150px] bg-violet/10 animate-float-medium" />
        <div className="colorful-blob w-[200px] h-[200px] top-[50%] left-[20%] bg-indigo/10 animate-pulse-slow" />
      </div>

      <div className="relative z-10 px-4 sm:px-6 lg:px-12 py-16 md:py-20">
        {/* Header */}
        <div className="text-center mb-12 md:mb-16">
          <motion.div
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
            }}
            className="inline-flex items-center gap-2 mb-4"
          >
            <div className="p-2 bg-white/80 backdrop-blur-sm rounded-lg shadow-lg">
              <Code className="w-5 h-5 text-indigo" />
            </div>
            <span className="text-indigo font-semibold tracking-wider text-sm uppercase">Tech Stack</span>
          </motion.div>
          
          <motion.h3
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { opacity: 1, y: 0, transition: { duration: 0.5, delay: 0.1 } }
            }}
            className="text-3xl md:text-4xl font-display font-black mb-4 leading-tight tracking-tight">
            Technologies I Love
          </motion.h3>
          
          <motion.p
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { opacity: 1, y: 0, transition: { duration: 0.5, delay: 0.2 } }
            }}
            className="text-text-body text-lg max-w-2xl mx-auto font-sans leading-relaxed">
            The tools and frameworks that power my creative process
          </motion.p>
        </div>

        {/* Tech logos in a creative floating layout */}
        <motion.div
          variants={containerVariants}
          className="relative max-w-5xl mx-auto"
        >
          {/* Main grid with better alignment */}
          <div className="grid grid-cols-4 sm:grid-cols-6 md:grid-cols-8 lg:grid-cols-13 gap-4 md:gap-6 items-center justify-items-center">
            {techStack.map((tech, index) => (
              <motion.div
                key={tech.name}
                variants={itemVariants}
                whileHover={{ 
                  scale: 1.2, 
                  y: -8,
                  transition: { duration: 0.2, ease: "easeOut" }
                }}
                className="group relative"
              >
                <div className="relative">
                  {/* Glow effect */}
                  <div className="absolute inset-0 bg-white/20 rounded-2xl blur-xl scale-150 opacity-0 group-hover:opacity-100 transition-all duration-500" />
                  
                  {/* Logo container */}
                  <div className="relative w-12 h-12 md:w-16 md:h-16 bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center border border-white/20">
                    <img 
                      src={tech.logo} 
                      alt={tech.name}
                      className="w-6 h-6 md:w-8 md:h-8 object-contain filter group-hover:brightness-110 transition-all duration-300"
                      onError={(e) => {
                        // Fallback for missing logos
                        e.target.style.display = 'none';
                        e.target.nextSibling.style.display = 'flex';
                      }}
                    />
                    {/* Fallback text */}
                    <div className="hidden w-full h-full items-center justify-center text-xs font-medium text-text-body font-sans">
                      {tech.name.charAt(0)}
                    </div>
                  </div>
                  
                  {/* Tooltip */}
                  <div className="absolute -top-12 left-1/2 transform -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-all duration-300 pointer-events-none z-20">
                    <div className="bg-primary text-white text-xs px-3 py-2 rounded-lg whitespace-nowrap shadow-xl backdrop-blur-sm">
                      {tech.name}
                      <div className="absolute top-full left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-primary"></div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default RefinedHobbyProjects;