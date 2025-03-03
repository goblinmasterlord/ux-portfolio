// src/components/RefinedHobbyProjects.jsx
import { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import { useEnhancedScrollAnimation } from '../hooks/useEnhancedScrollAnimation';
import { Github, Code } from 'lucide-react';

const RefinedHobbyProjects = () => {
  const [ref, controls, variants] = useEnhancedScrollAnimation('stagger', { 
    staggerDelay: 0.1,
    threshold: 0.1
  });

  // Sample hobby projects with video URLs
  const hobbyProjects = [
    {
      title: "Finance Dashboard",
      description: "Interactive personal finance tracking with data visualization",
      technologies: ["React", "D3.js", "Tailwind"],
      video: "/videos/finance-dashboard.mp4", // Replace with actual video paths
      previewImage: "https://via.placeholder.com/600x340", // Fallback image
      color: "blue",
      githubUrl: "https://github.com/yourusername/finance-dashboard"
    },
    {
      title: "Smart Home Controller",
      description: "IoT dashboard connecting various smart home devices",
      technologies: ["React", "Node", "MQTT"],
      video: "/videos/smart-home.mp4",
      previewImage: "https://via.placeholder.com/600x340",
      color: "violet",
      githubUrl: "https://github.com/yourusername/smart-home"
    },
    {
      title: "Recipe Finder API",
      description: "API suggesting recipes based on available ingredients",
      technologies: ["Node.js", "Express", "MongoDB"],
      video: "/videos/recipe-api.mp4",
      previewImage: "https://via.placeholder.com/600x340",
      color: "indigo",
      githubUrl: "https://github.com/yourusername/recipe-api"
    },
    {
      title: "Productivity Timer",
      description: "Pomodoro timer with task tracking and analytics",
      technologies: ["React", "Redux", "CSS"],
      video: "/videos/productivity-timer.mp4",
      previewImage: "https://via.placeholder.com/600x340",
      color: "teal",
      githubUrl: "https://github.com/yourusername/productivity-timer"
    },
    {
      title: "Markdown Blog Engine",
      description: "Blog platform using Markdown files as content source",
      technologies: ["Next.js", "Markdown", "SSG"],
      video: "/videos/markdown-blog.mp4",
      previewImage: "https://via.placeholder.com/600x340",
      color: "purple",
      githubUrl: "https://github.com/yourusername/markdown-blog"
    },
    {
      title: "Weather Visualizer",
      description: "Interactive visualization of historical weather data",
      technologies: ["D3.js", "API", "Data Viz"],
      video: "/videos/weather-viz.mp4",
      previewImage: "https://via.placeholder.com/600x340",
      color: "blue",
      githubUrl: "https://github.com/yourusername/weather-viz"
    }
  ];

  return (
    <section className="px-6 lg:px-12 py-32 relative overflow-hidden">
      {/* Subtle background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-background via-blue/5 to-background" />
      </div>

      <motion.div
        ref={ref}
        initial="hidden"
        animate={controls}
        variants={variants}
        className="max-w-[1800px] mx-auto relative z-10"
      >
        {/* Clean, elegant header */}
        <div className="mb-16">
          <motion.span
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { opacity: 1, y: 0, transition: { duration: 0.4 } }
            }}
            className="inline-flex items-center gap-2 mb-4"
          >
            <span className="w-8 h-[2px] bg-blue" />
            <span className="text-blue font-medium tracking-wide">SIDE PROJECTS</span>
          </motion.span>
          
          <motion.div
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { opacity: 1, y: 0, transition: { duration: 0.4 } }
            }}
          >
            <h2 className="text-4xl md:text-5xl font-display mb-6">
              Hobby projects
            </h2>
            
            <p className="text-primary/60 text-lg leading-relaxed max-w-2xl">
              Side projects are my playground for experimentation. Here are some things I've built to explore new technologies and ideas.
            </p>
          </motion.div>
        </div>

        {/* Projects Grid - 3 columns with elegant cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {hobbyProjects.map((project, index) => (
            <ProjectCard 
              key={index} 
              project={project} 
              index={index} 
            />
          ))}
        </div>
        
        {/* GitHub link */}
        <motion.div
          variants={{
            hidden: { opacity: 0, y: 10 },
            visible: { opacity: 1, y: 0, transition: { delay: 0.3, duration: 0.4 } }
          }}
          className="mt-16 flex justify-center"
        >
          <a
            href="https://github.com/yourusername"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 px-6 py-3 bg-primary/5 hover:bg-primary/10 rounded-full transition-all duration-300"
          >
            <Github className="w-5 h-5 text-primary" />
            <span className="text-primary font-medium">More projects on GitHub</span>
          </a>
        </motion.div>
      </motion.div>
    </section>
  );
};

// Improved Project Card with better text emphasis and responsive hover
const ProjectCard = ({ project, index }) => {
  const videoRef = useRef(null);
  const [isHovered, setIsHovered] = useState(false);
  
  // Quick and responsive hover handlers
  const handleMouseEnter = () => {
    setIsHovered(true);
    if (videoRef.current) {
      videoRef.current.play().catch(error => {
        console.log("Video play prevented:", error);
      });
    }
  };
  
  const handleMouseLeave = () => {
    setIsHovered(false);
    if (videoRef.current) {
      videoRef.current.pause();
      videoRef.current.currentTime = 0;
    }
  };

  return (
    <motion.div
      variants={{
        hidden: { opacity: 0, y: 15 },
        visible: { 
          opacity: 1, 
          y: 0, 
          transition: { 
            duration: 0.4, 
            delay: index * 0.08
          } 
        }
      }}
      className="group relative bg-white/5 backdrop-blur-sm rounded-xl overflow-hidden border border-primary/10 hover:border-blue/20 transition-all duration-200 shadow-sm hover:shadow-md"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {/* Media container with better proportions */}
      <div className="relative overflow-hidden">
        <div className="aspect-[16/9] overflow-hidden">
          {/* Main image with quicker fade */}
          <img 
            src={project.previewImage} 
            alt={project.title} 
            className={`w-full h-full object-cover object-center transition-opacity duration-200 ${isHovered ? 'opacity-0' : 'opacity-100'}`}
          />
          
          {/* Improved video overlay with immediate response */}
          <div className="absolute inset-0 flex items-center justify-center">
            <video
              ref={videoRef}
              src={project.video}
              muted
              loop
              playsInline
              className={`w-full h-full object-cover transition-opacity duration-200 ${isHovered ? 'opacity-100' : 'opacity-0'}`}
            />
          </div>
          
          {/* Color accent line with instantaneous animation */}
          <div 
            className={`absolute top-0 left-0 right-0 h-1 bg-${project.color} transition-transform duration-200 origin-left ${isHovered ? 'scale-x-100' : 'scale-x-0'}`}
          />
        </div>
      </div>
      
      {/* Enhanced content with better text emphasis */}
      <div className="p-6">
        {/* Title with better emphasis */}
        <h3 className={`text-xl font-display ${isHovered ? `text-${project.color}` : 'text-primary'} transition-colors duration-200 mb-2`}>
          {project.title}
        </h3>
        
        {/* Clearer description */}
        <p className="text-primary/80 text-base mb-4 leading-relaxed">
          {project.description}
        </p>
        
        {/* Technologies with better visibility */}
        <div className="flex flex-wrap gap-2 mb-4">
          {project.technologies.map((tech, i) => (
            <span 
              key={i} 
              className={`px-3 py-1 text-sm bg-${project.color}/10 rounded-full text-${project.color}/90 font-medium`}
            >
              {tech}
            </span>
          ))}
        </div>
        
        {/* GitHub link only */}
        <div className="flex items-center pt-4 border-t border-primary/10">
          <a 
            href={project.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className={`flex items-center gap-2 text-primary/70 hover:text-${project.color} transition-colors duration-200`}
          >
            <Code className="w-4 h-4" />
            <span className="font-medium">View source on GitHub</span>
          </a>
        </div>
      </div>
    </motion.div>
  );
};

export default RefinedHobbyProjects;