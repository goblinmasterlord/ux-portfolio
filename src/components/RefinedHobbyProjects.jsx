// src/components/RefinedHobbyProjects.jsx
import { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence, useAnimation } from 'framer-motion';
import { useEnhancedScrollAnimation } from '../hooks/useEnhancedScrollAnimation';
import { Github, ExternalLink, Sparkles, Zap, BarChart3, Video, Palette, Droplets, Plus } from 'lucide-react';
import { useInView } from 'react-intersection-observer';

const RefinedHobbyProjects = () => {
  const [ref, controls, variants] = useEnhancedScrollAnimation('stagger', { 
    staggerDelay: 0.1,
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

  // Real hobby projects with detailed descriptions
  const hobbyProjects = [
    {
      title: "Aromate",
      description: "A personalized fragrance finder that helps users discover their perfect scent. Users complete an interactive quiz about their preferences, lifestyle, and personality, and receive tailored perfume recommendations based on their unique profile.",
      technologies: ["React", "Node.js", "Recommendation Engine", "Tailwind CSS"],
      icon: <Droplets className="w-6 h-6" />,
      images: [
        "/images/Aromate.jpg"
      ],
      color: "blue",
      githubUrl: "https://github.com/goblinmasterlord/aromate",
      liveUrl: "https://aromate.vercel.app/",
      features: [
        "Interactive preference quiz with engaging UI",
        "Personalized fragrance recommendations",
        "Detailed fragrance profiles with notes and characteristics",
        "Save favorites and compare different options"
      ]
    },
    {
      title: "IsThatReallyTrue?",
      description: "A near real-time fact-checker using AI that analyzes content for factual accuracy. This tool processes video and audio content, extracts claims, and verifies them against reliable sources to combat misinformation.",
      technologies: ["React", "Python", "OpenAI Whisper", "HuggingFace", "FFmpeg", "ElasticSearch"],
      icon: <Sparkles className="w-6 h-6" />,
      images: [
        "/images/Isthattrue.jpg"
      ],
      color: "indigo",
      githubUrl: "https://github.com/goblinmasterlord/robot-chicken",
      liveUrl: "https://isthatreallyture.vercel.app/",
      features: [
        "Multi-stage AI processing pipeline",
        "Speaker identification and attribution",
        "Claim extraction and verification",
        "Source citation and confidence scoring"
      ]
    },
    {
      title: "UxTools",
      description: "A comprehensive toolkit for UX professionals featuring AI-powered tools to enhance design workflows. The platform offers various utilities that leverage selected AI models to streamline UX processes.",
      technologies: ["React", "Node.js", "Claude API", "Anthropic API"],
      icon: <Zap className="w-6 h-6" />,
      images: [
        "/images/UXTools.jpg"
      ],
      color: "violet",
      githubUrl: "https://github.com/goblinmasterlord/ux-toolkit",
      liveUrl: "https://uxtools.ai/",
      features: [
        "AI-powered design critique and feedback",
        "User research analysis and pattern recognition",
        "Accessibility evaluation and recommendations",
        "Customizable AI model selection for different tasks"
      ]
    },
    {
      title: "NeuralUXStudio",
      description: "An educational platform teaching UX professionals how to leverage AI tools in their workflow. Features video tutorials, blog posts, and practical guides on integrating AI into UX processes.",
      technologies: ["Next.js", "React", "Tailwind CSS", "Supabase"],
      icon: <Video className="w-6 h-6" />,
      images: [
        "/images/NeuralUX.jpg"
      ],
      color: "purple",
      githubUrl: "https://github.com/goblinmasterlord/ai-consulting",
      liveUrl: "https://neuraluxstudio.com",
      features: [
        "Structured learning paths for different skill levels",
        "High-quality video tutorials with practical examples",
        "In-depth blog posts on AI applications in UX",
        "Community forum for questions and knowledge sharing"
      ]
    },
    {
      title: "SmartBudget",
      description: "A mobile budgeting app that provides personalized financial insights using AI. Users set financial goals and receive tailored recommendations based on their spending patterns and objectives.",
      technologies: ["React Native", "Node.js", "Gemini API"],
      icon: <BarChart3 className="w-6 h-6" />,
      images: [
        "/images/Budgeting.jpg"
      ],
      color: "teal",
      githubUrl: "https://github.com/goblinmasterlord/smart-budget-app",
      liveUrl: "https://smartbudget-demo.vercel.app/",
      features: [
        "Goal-based financial planning",
        "AI-powered spending analysis and categorization",
        "Personalized saving and investment recommendations",
        "Predictive cash flow visualization"
      ]
    },
    {
      title: "ArtimeStudio",
      description: "A beautiful portfolio website for a creative studio showcasing their work, services, and team. Features stunning animations, interactive elements, and a thoughtful user experience.",
      technologies: ["React", "Vite", "Tailwind CSS"],
      icon: <Palette className="w-6 h-6" />,
      images: [
        "/images/Artimestudio.jpg"
      ],
      color: "magenta",
      githubUrl: "https://github.com/goblinmasterlord/artimestudio",
      liveUrl: "https://artimestudio.com",
      features: [
        "Immersive 3D elements and animations",
        "Case study showcases with detailed process insights",
        "Interactive team profiles and expertise highlights",
        "Optimized performance with progressive enhancement"
      ]
    }
  ];

  return (
    <section id="hobby-projects" className="px-4 sm:px-6 lg:px-12 py-24 md:py-32 relative overflow-hidden">
      {/* Enhanced background with subtle animation */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-background via-blue/5 to-background" />
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgdmlld0JveD0iMCAwIDYwIDYwIj48cGF0aCBkPSJNNjAgMEgwdjYwaDYwVjB6TTIgMmg1NnY1NkgyVjJ6IiBmaWxsPSIjMjAyMDIwIiBmaWxsLW9wYWNpdHk9IjAuMDIiIGZpbGwtcnVsZT0iZXZlbm9kZCIvPjwvc3ZnPg==')] opacity-10" />
        <div className="colorful-blob w-[600px] h-[600px] -top-[250px] -right-[250px] bg-blue/10 animate-float-slow" />
        <div className="colorful-blob w-[700px] h-[700px] -bottom-[300px] -left-[300px] bg-violet/10 animate-float-medium" />
      </div>

      <motion.div
        ref={ref}
        initial="hidden"
        animate={controls}
        variants={variants}
        className="max-w-[1800px] mx-auto relative z-10"
      >
        {/* Modern header with animated accent */}
        <div className="mb-12 md:mb-16">
          <motion.div
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { opacity: 1, y: 0, transition: { duration: 0.4 } }
            }}
            className="flex items-center gap-3 mb-4"
          >
            <motion.span 
              initial={{ width: 0 }}
              animate={{ width: 32 }}
              transition={{ duration: 0.6, ease: "easeInOut" }}
              className="h-[2px] bg-blue"
            />
            <span className="text-blue font-medium tracking-wide text-sm">CREATIVE CODING</span>
          </motion.div>
          
          <motion.div
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { opacity: 1, y: 0, transition: { duration: 0.4 } }
            }}
          >
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-display mb-4 md:mb-6 gradient-text inline-block">
              Hobby Projects
            </h2>
            
            <p className="text-primary/70 text-base sm:text-lg leading-relaxed max-w-2xl">
              My playground for experimentation and learning. These side projects showcase my passion for building useful tools and exploring new technologies.
            </p>
          </motion.div>
        </div>

        {/* Projects Grid - Improved layout with featured projects */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {hobbyProjects.map((project, index) => (
            <ProjectCard 
              key={project.title} 
              project={project} 
              index={index} 
              isMobile={isMobile}
            />
          ))}
        </div>
        
        {/* GitHub link with improved hover effect */}
        <motion.div
          variants={{
            hidden: { opacity: 0, y: 10 },
            visible: { opacity: 1, y: 0, transition: { delay: 0.3, duration: 0.4 } }
          }}
          className="mt-12 md:mt-16 flex justify-center"
        >
          <a
            href="https://github.com/yourusername"
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center gap-3 px-6 py-3 bg-primary/5 hover:bg-primary/10 rounded-full transition-all duration-300"
          >
            <Github className="w-5 h-5 text-primary group-hover:text-blue transition-colors duration-300" />
            <span className="text-primary font-medium group-hover:text-blue transition-colors duration-300">More projects on GitHub</span>
          </a>
        </motion.div>
      </motion.div>
    </section>
  );
};

// Enhanced Project Card with improved hover interactions
const ProjectCard = ({ project, index, isMobile }) => {
  const [isHovered, setIsHovered] = useState(false);
  const [showAllTech, setShowAllTech] = useState(false);
  const [imageLoaded, setImageLoaded] = useState(false);
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });
  
  // Staggered entrance animation
  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0, 
      transition: { 
        duration: 0.5, 
        delay: index * 0.1,
        ease: [0.25, 0.1, 0.25, 1.0]
      } 
    },
    exit: { 
      opacity: 0,
      y: 10,
      transition: { duration: 0.3 }
    }
  };

  return (
    <motion.div
      ref={ref}
      variants={cardVariants}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      exit="exit"
      className="group relative bg-white/5 backdrop-blur-sm rounded-xl overflow-hidden border border-primary/10 hover:border-blue/30 transition-all duration-300 shadow-sm hover:shadow-lg h-full"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => {
        setIsHovered(false);
        setShowAllTech(false);
      }}
    >
      {/* Media container with aspect ratio */}
      <div className="relative overflow-hidden">
        <div className="aspect-[16/9] overflow-hidden bg-gradient-to-br from-primary/5 to-primary/10">
          {/* Main image with smooth transition */}
          {project.images && project.images[0] && (
            <img 
              src={project.images[0]} 
              alt={project.title} 
              className={`w-full h-full object-cover object-center transition-transform duration-700 group-hover:scale-105 ${imageLoaded ? 'opacity-100' : 'opacity-0'}`}
              onLoad={() => setImageLoaded(true)}
            />
          )}
          
          {/* Loading state */}
          {!imageLoaded && (
            <div className="absolute inset-0 flex items-center justify-center">
              <div className={`w-8 h-8 rounded-full border-2 border-t-${project.color} border-r-transparent animate-spin`}></div>
            </div>
          )}
          
          {/* Gradient overlay that reveals on hover */}
          <div 
            className={`absolute inset-0 bg-gradient-to-t from-${project.color}/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300`}
          />
          
          {/* Project icon badge */}
          <div className="absolute top-3 left-3">
            <div className={`w-10 h-10 rounded-lg bg-${project.color} text-white flex items-center justify-center shadow-lg`}>
              {project.icon}
            </div>
          </div>
        </div>
      </div>
      
      {/* Content with improved typography and spacing */}
      <div className="p-5">
        {/* Title with animated underline on hover */}
        <h3 className="text-xl font-display text-primary group-hover:text-blue transition-colors duration-300 mb-2 relative inline-block">
          {project.title}
          <span className={`absolute bottom-0 left-0 w-0 h-[2px] bg-${project.color} group-hover:w-full transition-all duration-300`}></span>
        </h3>
        
        {/* Truncated description */}
        <p className="text-primary/70 text-sm leading-relaxed mb-4 line-clamp-3">
          {project.description}
        </p>
        
        {/* Technology tags with consistent styling */}
        <div className="flex flex-wrap gap-1.5 mb-6 min-h-[28px]">
          {(showAllTech ? project.technologies : project.technologies.slice(0, 3)).map((tech, i) => (
            <span 
              key={i} 
              className={`px-2 py-1 text-xs bg-${project.color}/10 rounded-md text-${project.color} font-medium transition-all duration-300`}
            >
              {tech}
            </span>
          ))}
          {!showAllTech && project.technologies.length > 3 && (
            <motion.button
              onClick={(e) => {
                e.stopPropagation();
                setShowAllTech(true);
              }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className={`px-2 py-1 text-xs bg-${project.color}/10 rounded-md text-${project.color} font-medium flex items-center gap-1 hover:bg-${project.color}/20 transition-all duration-300`}
            >
              <Plus className="w-3 h-3" />
              <span>{project.technologies.length - 3} more</span>
            </motion.button>
          )}
        </div>

        {/* Action buttons with improved design */}
        <div className="flex items-center gap-3 mt-auto">
          <a
            href={project.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className={`flex items-center gap-2 px-4 py-2 rounded-lg bg-${project.color}/10 hover:bg-${project.color}/20 text-${project.color} transition-all duration-300 text-sm font-medium`}
          >
            <Github className="w-4 h-4" />
            <span>GitHub</span>
          </a>
          
          {project.liveUrl && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className={`flex items-center gap-2 px-4 py-2 rounded-lg bg-${project.color} text-white hover:bg-${project.color}/90 transition-all duration-300 text-sm font-medium shadow-sm hover:shadow-md`}
            >
              <ExternalLink className="w-4 h-4" />
              <span>Demo</span>
            </a>
          )}
        </div>
      </div>
    </motion.div>
  );
};

export default RefinedHobbyProjects;