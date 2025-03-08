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
      title: "UxTools",
      description: "A comprehensive toolkit for UX professionals featuring AI-powered tools to enhance design workflows. The platform offers various utilities that leverage selected AI models to streamline UX processes.",
      technologies: ["React", "Node.js", "Claude API", "Anthropic API"],
      icon: <Zap className="w-6 h-6" />,
      images: [
        "/images/UXTools.jpg"
      ],
      color: "violet",
      githubUrl: "https://github.com/goblinmasterlord/ux-toolkit",
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
      title: "Is that REALLY true?",
      description: "A real-time fact-checker using AI that can transcribe and analyze audio and video content for factual accuracy of the speakers. We've built it for a Hackathon.",
      technologies: ["React", "Python", "OpenAI Whisper", "RAG", "FFmpeg", "ElasticSearch"],
      icon: <Sparkles className="w-6 h-6" />,
      images: [
        "/images/Isthattrue.jpg"
      ],
      color: "indigo",
      githubUrl: "https://github.com/goblinmasterlord/robot-chicken",
      features: [
        "Multi-stage AI processing pipeline",
        "Speaker identification and attribution",
        "Claim extraction and verification",
        "Source citation and confidence scoring"
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
      features: [
        "Goal-based financial planning",
        "AI-powered spending analysis and categorization",
        "Personalized saving and investment recommendations",
        "Predictive cash flow visualization"
      ]
    },
    {
      title: "Aromate",
      description: "A personalized fragrance finder that helps users discover their perfect scent. Users complete an interactive quiz about their preferences, lifestyle, and personality, and receive tailored perfume recommendations based on their unique profile.",
      technologies: ["React", "Node.js", "Recommendation Algorithm", "Tailwind CSS"],
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
      title: "ArtimeStudio",
      description: "A beautiful portfolio website for a creative studio showcasing their work, services, and team.",
      technologies: ["React", "Vite", "Tailwind CSS"],
      icon: <Palette className="w-6 h-6" />,
      images: [
        "/images/Artimestudio.jpg"
      ],
      color: "magenta",
      githubUrl: "https://github.com/goblinmasterlord/artimestudio",
      liveUrl: "https://artimestudio.vercel.app/",
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
        {/* Modern header with animated accent - Matching "work" section */}
        <div className="mb-12 md:mb-16">
          <motion.span
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { opacity: 1, y: 0, transition: { duration: 0.4 } }
            }}
            className="inline-flex items-center gap-2 mb-3 md:mb-4"
          >
            <span className="w-6 md:w-8 h-[2px] bg-blue" />
            <span className="text-blue font-medium tracking-wide text-xs md:text-sm">SIDE PROJECTS</span>
          </motion.span>
          
          <motion.div
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { opacity: 1, y: 0, transition: { duration: 0.4 } }
            }}
            className="max-w-3xl"
          >
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-display mb-3 md:mb-6">
              Personal Projects
            </h2>
            
            <p className="text-primary/60 text-base md:text-lg lg:text-xl leading-relaxed">
              A collection of projects I've built to explore new technologies and solve interesting problems. These represent my curiosity outside of work.
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
            href="https://github.com/goblinmasterlord"
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center gap-3 px-6 py-3 bg-primary/5 hover:bg-blue/10 rounded-full transition-all duration-300"
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
      className="group relative bg-primary/5 rounded-xl overflow-hidden border border-primary/10 hover:border-blue/20 transition-all duration-300 shadow-card hover:shadow-card-hover h-full flex flex-col"
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
              className={`w-full h-full object-cover object-center transition-transform duration-700 group-hover:scale-[1.03] ${imageLoaded ? 'opacity-100' : 'opacity-0'}`}
              onLoad={() => setImageLoaded(true)}
            />
          )}
          
          {/* Loading state */}
          {!imageLoaded && (
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-8 h-8 rounded-full border-2 border-t-blue border-r-transparent animate-spin"></div>
            </div>
          )}
          
          {/* Gradient overlay on hover - Matching "Some of my work" section */}
          <div 
            className="absolute inset-0 bg-gradient-to-br from-blue/20 via-indigo/10 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500 z-10"
          />
        </div>
      </div>
      
      {/* Content with improved typography and spacing */}
      <div className="p-5 flex-1 flex flex-col">
        {/* Title with subtle hover effect - Matching "Some of my work" section */}
        <h3 className="text-xl font-display text-primary group-hover:text-blue transition-colors duration-300 mb-2">
          {project.title}
        </h3>
        
        {/* Description with proper height */}
        <div className="mb-4 flex-grow">
          <p className="text-primary/70 text-sm leading-relaxed">
            {project.description}
          </p>
        </div>
        
        {/* Technology tags with consistent styling */}
        <div className="flex flex-wrap gap-1.5 mb-6">
          {(showAllTech ? project.technologies : project.technologies.slice(0, 3)).map((tech, i) => (
            <span 
              key={i} 
              className="px-2 py-1 text-xs bg-primary/5 rounded-full text-primary/70 group-hover:bg-blue/10 group-hover:text-blue transform group-hover:translate-x-1 transition-all duration-300"
              style={{ transitionDelay: `${i * 50}ms` }}
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
              className="px-2 py-1 text-xs bg-primary/5 rounded-full text-primary/70 flex items-center gap-1 hover:bg-blue/10 hover:text-blue transition-all duration-300"
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
            className="flex items-center gap-2 px-4 py-2 rounded-lg bg-primary/5 hover:bg-blue/10 text-primary/80 hover:text-blue transition-all duration-300 text-sm font-medium shadow-button hover:shadow-button-hover"
          >
            <Github className="w-4 h-4" />
            <span>GitHub</span>
          </a>
          
          {project.liveUrl && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-4 py-2 rounded-lg bg-blue/10 text-blue hover:bg-blue/20 transition-all duration-300 text-sm font-medium shadow-button-blue"
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