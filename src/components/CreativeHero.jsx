import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, Sparkles, MousePointer, Zap } from 'lucide-react';

const CreativeHero = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [scrollY, setScrollY] = useState(0);
  
  // Track mouse position for interactive elements
  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };
    
    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('scroll', handleScroll);
    
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  // Calculate parallax effect based on mouse position
  const calcParallax = (strength = 20) => {
    const centerX = window.innerWidth / 2;
    const centerY = window.innerHeight / 2;
    
    const moveX = (mousePosition.x - centerX) / strength;
    const moveY = (mousePosition.y - centerY) / strength;
    
    return { x: moveX, y: moveY };
  };

  // Animated text reveal
  const textVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.08,
      },
    },
  };

  const letterVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { 
      y: 0, 
      opacity: 1,
      transition: { type: "spring", stiffness: 100 }
    },
  };

  const AnimatedText = ({ text, className }) => (
    <motion.span
      className={className}
      variants={textVariants}
      initial="hidden"
      animate="visible"
    >
      {text.split('').map((char, index) => (
        <motion.span key={index} variants={letterVariants}>
          {char === ' ' ? '\u00A0' : char}
        </motion.span>
      ))}
    </motion.span>
  );

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    }
  };

  return (
    <section className="min-h-screen px-6 lg:px-12 flex flex-col justify-center relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 z-0">
        {/* Colorful blobs */}
        <div className="colorful-blob w-[500px] h-[500px] top-[-10%] left-[-10%] bg-purple/30"></div>
        <div className="colorful-blob w-[600px] h-[600px] bottom-[-20%] right-[-10%] bg-teal/30 animate-pulse-slow delay-1000"></div>
        <div className="colorful-blob w-[300px] h-[300px] top-[30%] right-[20%] bg-accent/20 animate-pulse-slow delay-2000"></div>
        <div className="colorful-blob w-[250px] h-[250px] bottom-[10%] left-[20%] bg-yellow/30 animate-pulse-slow delay-3000"></div>
        
        {/* Animated grid pattern */}
        <div 
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: `
              linear-gradient(to right, var(--color-primary) 1px, transparent 1px),
              linear-gradient(to bottom, var(--color-primary) 1px, transparent 1px)
            `,
            backgroundSize: '40px 40px',
            transform: `translateX(${calcParallax(100).x}px) translateY(${calcParallax(100).y}px)`,
          }}
        ></div>
        
        {/* Animated shapes */}
        <motion.div 
          className="absolute w-20 h-20 rounded-full border-4 border-purple opacity-20 top-[15%] left-[15%]"
          animate={{ 
            rotate: 360,
            scale: [1, 1.1, 1],
          }}
          transition={{ 
            rotate: { duration: 20, repeat: Infinity, ease: "linear" },
            scale: { duration: 8, repeat: Infinity, ease: "easeInOut" }
          }}
        ></motion.div>
        
        <motion.div 
          className="absolute w-32 h-32 rounded-lg border-4 border-teal opacity-20 bottom-[20%] right-[25%]"
          animate={{ 
            rotate: -360,
            scale: [1, 1.2, 1],
          }}
          transition={{ 
            rotate: { duration: 25, repeat: Infinity, ease: "linear" },
            scale: { duration: 10, repeat: Infinity, ease: "easeInOut" }
          }}
        ></motion.div>
        
        <motion.div 
          className="absolute w-24 h-24 rounded-lg border-4 border-accent opacity-20 top-[40%] right-[10%]"
          style={{ rotate: 45 }}
          animate={{ 
            rotate: [45, 90, 45],
            scale: [1, 1.1, 1],
          }}
          transition={{ 
            rotate: { duration: 15, repeat: Infinity, ease: "easeInOut" },
            scale: { duration: 7, repeat: Infinity, ease: "easeInOut" }
          }}
        ></motion.div>
      </div>

      {/* Main content */}
      <div className="max-w-[1800px] mx-auto relative z-10">
        <div className="space-y-8">
          {/* Animated badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-purple/20 to-teal/20 border border-primary/10 mb-6"
          >
            <Sparkles className="w-4 h-4 text-purple" />
            <span className="text-primary/80 text-sm font-medium">UX Designer & Product Consultant</span>
          </motion.div>
          
          {/* Main heading with animated gradient */}
          <div className="space-y-4">
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-5xl md:text-7xl lg:text-8xl font-display leading-tight"
            >
              Hey, I'm Marci <span className="inline-block animate-bounce-subtle">👋</span>
              <br />
              I make digital products{' '}
              <span className="relative">
                <span className="gradient-text font-bold">people love</span>
                <motion.svg
                  width="100%"
                  height="10"
                  viewBox="0 0 400 10"
                  className="absolute -bottom-2 left-0 w-full"
                  initial={{ pathLength: 0, opacity: 0 }}
                  animate={{ pathLength: 1, opacity: 1 }}
                  transition={{ duration: 1, delay: 1.2 }}
                >
                  <motion.path
                    d="M 0 5 C 100 -5 300 15 400 5"
                    fill="none"
                    stroke="url(#gradient)"
                    strokeWidth="4"
                    strokeLinecap="round"
                  />
                  <defs>
                    <linearGradient id="gradient" x1="0" y1="0" x2="100%" y2="0">
                      <stop offset="0%" stopColor="#FF6B6B" />
                      <stop offset="50%" stopColor="#9B5DE5" />
                      <stop offset="100%" stopColor="#00F5D4" />
                    </linearGradient>
                  </defs>
                </motion.svg>
              </span>
            </motion.h1>
          </div>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-primary/70 text-xl md:text-2xl max-w-[700px] leading-relaxed"
          >
            I help companies build products that are simple to use and a joy to 
            interact with. Let's create something amazing together.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="flex flex-wrap items-center gap-6 pt-6"
          >
            <button 
              onClick={() => scrollToSection('work')}
              className="btn-gradient group"
            >
              <span className="flex items-center gap-2">
                Check out my work
                <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform duration-300" />
              </span>
            </button>
            
            <Link 
              to="/contact"
              className="group inline-flex items-center gap-2 text-primary/70 hover:text-purple transition-colors duration-300"
            >
              Let's talk
              <motion.div
                className="w-6 h-6 rounded-full bg-lavender flex items-center justify-center"
                whileHover={{ scale: 1.2 }}
              >
                <Zap className="w-3 h-3 text-purple" />
              </motion.div>
            </Link>
          </motion.div>

          {/* Animated stats with colorful accents */}
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-6 pt-20"
          >
            <motion.div 
              whileHover={{ scale: 1.05 }}
              className="relative p-6 rounded-xl bg-white shadow-sm overflow-hidden group"
            >
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-accent to-purple"></div>
              <h3 className="text-2xl md:text-3xl font-display mb-1 group-hover:text-accent transition-colors duration-300">6+ Years</h3>
              <p className="text-primary/60">Building cool stuff</p>
            </motion.div>
            
            <motion.div 
              whileHover={{ scale: 1.05 }}
              className="relative p-6 rounded-xl bg-white shadow-sm overflow-hidden group"
            >
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-purple to-teal"></div>
              <h3 className="text-2xl md:text-3xl font-display mb-1 group-hover:text-purple transition-colors duration-300">20+ Projects</h3>
              <p className="text-primary/60">Shipped & loved</p>
            </motion.div>
          </motion.div>
        </div>
      </div>
      
      {/* Scroll indicator */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2 flex flex-col items-center"
      >
        <span className="text-primary/40 text-sm mb-2">Scroll to explore</span>
        <motion.div 
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 1.5 }}
          className="w-6 h-10 rounded-full border border-primary/20 flex items-center justify-center"
        >
          <motion.div 
            animate={{ y: [0, 4, 0] }}
            transition={{ repeat: Infinity, duration: 1.5 }}
            className="w-1.5 h-1.5 rounded-full bg-accent"
          />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default CreativeHero; 