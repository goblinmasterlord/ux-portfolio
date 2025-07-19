import { useState, useEffect, useRef, useMemo } from 'react';
import { motion, useMotionValue, useTransform, useSpring, useScroll, useVelocity } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, Sparkles } from 'lucide-react';

const EliteHero = () => {
  const containerRef = useRef(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const { scrollY } = useScroll();
  const scrollVelocity = useVelocity(scrollY);
  
  // Parallax transforms
  const y1 = useTransform(scrollY, [0, 300], [0, -100]);
  const y2 = useTransform(scrollY, [0, 300], [0, -50]);
  const opacity = useTransform(scrollY, [0, 200], [1, 0]);
  
  // Mouse parallax for background elements
  const bgX = useTransform(mouseX, [0, window.innerWidth], [-30, 30]);
  const bgY = useTransform(mouseY, [0, window.innerHeight], [-30, 30]);
  
  useEffect(() => {
    setIsLoaded(true);
    
    const handleMouseMove = (e) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
    };
    
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, [mouseX, mouseY]);

  // Staggered text animation
  const textAnimation = {
    initial: { y: 100, opacity: 0 },
    animate: (i) => ({
      y: 0,
      opacity: 1,
      transition: {
        delay: i * 0.05,
        duration: 0.8,
        ease: [0.6, 0.01, 0.05, 0.95],
      },
    }),
  };

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
    <section ref={containerRef} className="relative min-h-screen overflow-hidden bg-background">
      {/* Noise texture overlay */}
      <div className="absolute inset-0 noise-texture z-0" />
      
      {/* Animated gradient background */}
      <motion.div 
        className="absolute inset-0 opacity-30"
        style={{ x: bgX, y: bgY }}
      >
        <div className="absolute top-0 -left-1/4 w-[800px] h-[800px] bg-gradient-to-br from-accent-coral/20 via-transparent to-transparent rounded-full blur-3xl" />
        <div className="absolute bottom-0 -right-1/4 w-[600px] h-[600px] bg-gradient-to-tl from-accent-lime/20 via-transparent to-transparent rounded-full blur-3xl" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-gradient-to-r from-accent-electric/20 via-transparent to-transparent rounded-full blur-3xl" />
      </motion.div>

      {/* Grid pattern overlay */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHZpZXdCb3g9IjAgMCA0MCA0MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cGF0aCBkPSJNNDAgMEgwdjQwaDQwVjB6TTEgMWgzOHYzOEgxVjF6IiBmaWxsPSIjMDAwMDAwIiBmaWxsLW9wYWNpdHk9IjAuMDIiIGZpbGwtcnVsZT0iZXZlbm9kZCIvPjwvc3ZnPg==')] opacity-50" />

      {/* Main content container */}
      <motion.div 
        className="relative z-10 min-h-screen flex items-center px-4 sm:px-6 lg:px-8"
        style={{ opacity }}
      >
        <div className="w-full max-w-[1440px] mx-auto">
          {/* Creative typography section */}
          <div className="grid lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-7">
              {/* Animated greeting */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                className="mb-8"
              >
                <span className="inline-flex items-center gap-2 px-4 py-2 glass rounded-full">
                  <Sparkles className="w-4 h-4 text-accent-coral" />
                  <span className="text-sm font-medium text-primary/80">Available for new projects</span>
                </span>
              </motion.div>

              {/* Split text hero heading */}
              <h1 className="mb-6">
                <div className="overflow-hidden">
                  <motion.div 
                    className="flex flex-wrap"
                    initial="initial"
                    animate="animate"
                  >
                    {"Hey, I'm Marci".split(' ').map((word, i) => (
                      <motion.span
                        key={i}
                        custom={i}
                        variants={textAnimation}
                        className="text-6xl md:text-7xl lg:text-8xl font-black mr-4"
                      >
                        {word}
                      </motion.span>
                    ))}
                  </motion.div>
                </div>
                
                <div className="overflow-hidden mt-2">
                  <motion.div 
                    className="flex flex-wrap items-baseline"
                    initial="initial"
                    animate="animate"
                  >
                    {"I make digital products people".split(' ').map((word, i) => (
                      <motion.span
                        key={i}
                        custom={i + 3}
                        variants={textAnimation}
                        className="text-4xl md:text-5xl lg:text-6xl font-medium text-primary/80 mr-3"
                      >
                        {word}
                      </motion.span>
                    ))}
                    <motion.span
                      custom={8}
                      variants={textAnimation}
                      className="relative"
                    >
                      <span className="text-6xl md:text-7xl lg:text-8xl font-black gradient-text">love</span>
                      <motion.div
                        className="absolute -bottom-2 left-0 right-0 h-3 bg-gradient-to-r from-accent-coral via-accent-electric to-accent-lime rounded-full"
                        initial={{ scaleX: 0 }}
                        animate={{ scaleX: 1 }}
                        transition={{ delay: 0.8, duration: 0.6, ease: "easeOut" }}
                      />
                    </motion.span>
                  </motion.div>
                </div>
              </h1>

              {/* Animated description */}
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6, duration: 0.6 }}
                className="text-lg md:text-xl text-secondary max-w-2xl mb-10"
              >
                With <span className="font-semibold text-primary">6+ years of experience</span>, I help companies build products that are{' '}
                <span className="font-semibold text-accent-coral">simple to use</span> and a{' '}
                <span className="font-semibold text-accent-electric">joy to interact with</span>.
                Let's create something amazing together.
              </motion.p>

              {/* CTA Buttons with magnetic effect */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8, duration: 0.6 }}
                className="flex flex-wrap gap-4"
              >
                <MagneticButton onClick={() => scrollToSection('work')}>
                  <span className="relative z-10 flex items-center gap-2 px-8 py-4 text-white font-semibold">
                    Check out my work
                    <ArrowRight className="w-4 h-4" />
                  </span>
                </MagneticButton>

                <motion.button
                  onClick={() => scrollToSection('hobby-projects')}
                  className="group px-8 py-4 text-primary font-medium relative overflow-hidden"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <span className="relative z-10">See my hobby projects</span>
                  <motion.div
                    className="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-accent-coral to-accent-electric"
                    initial={{ scaleX: 0 }}
                    whileHover={{ scaleX: 1 }}
                    transition={{ duration: 0.3 }}
                  />
                </motion.button>
              </motion.div>
            </div>

            {/* Creative visual element */}
            <div className="lg:col-span-5 relative">
              <motion.div
                className="relative w-full aspect-square max-w-md mx-auto"
                style={{ y: y1 }}
              >
                {/* Floating elements */}
                <FloatingElement
                  delay={0}
                  duration={8}
                  className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-accent-coral/20 to-transparent rounded-full blur-2xl"
                />
                <FloatingElement
                  delay={1}
                  duration={10}
                  className="absolute bottom-0 left-0 w-40 h-40 bg-gradient-to-tr from-accent-lime/20 to-transparent rounded-full blur-2xl"
                />
                <FloatingElement
                  delay={2}
                  duration={6}
                  className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-48 h-48 bg-gradient-to-r from-accent-electric/20 to-transparent rounded-full blur-2xl"
                />
                
                {/* Central glass card */}
                <motion.div
                  className="absolute inset-8 glass rounded-3xl flex items-center justify-center"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.4, duration: 0.8, ease: "easeOut" }}
                >
                  <div className="text-center p-8">
                    <motion.div
                      className="text-6xl font-black gradient-text mb-4"
                      animate={{ rotate: [0, 5, -5, 0] }}
                      transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                    >
                      UX
                    </motion.div>
                    <p className="text-sm text-primary/60 font-medium">Design & Strategy</p>
                  </div>
                </motion.div>
              </motion.div>
            </div>
          </div>

          {/* Scroll indicator */}
          <motion.div
            className="absolute bottom-8 left-1/2 -translate-x-1/2"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.2, duration: 0.6 }}
          >
            <div className="scroll-indicator" />
          </motion.div>
        </div>
      </motion.div>

      {/* Bottom gradient fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent z-20" />
    </section>
  );
};

// Magnetic button component
const MagneticButton = ({ children, onClick, className = "" }) => {
  const ref = useRef(null);
  const [isHovered, setIsHovered] = useState(false);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  
  const springConfig = { stiffness: 150, damping: 15, mass: 0.1 };
  const xSpring = useSpring(x, springConfig);
  const ySpring = useSpring(y, springConfig);

  const handleMouseMove = (e) => {
    if (!ref.current || !isHovered) return;
    
    const rect = ref.current.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    
    const distanceX = e.clientX - centerX;
    const distanceY = e.clientY - centerY;
    
    x.set(distanceX * 0.1);
    y.set(distanceY * 0.1);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.button
      ref={ref}
      onClick={onClick}
      className={`relative overflow-hidden rounded-2xl bg-gradient-to-r from-accent-coral via-accent-electric to-accent-lime shadow-lg ${className}`}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => {
        setIsHovered(false);
        handleMouseLeave();
      }}
      style={{ x: xSpring, y: ySpring }}
      whileTap={{ scale: 0.95 }}
    >
      <motion.div
        className="absolute inset-0 bg-gradient-to-r from-accent-coral via-accent-electric to-accent-lime"
        animate={{
          x: isHovered ? ['-100%', '100%'] : '0%',
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
          ease: "linear",
        }}
      />
      {children}
    </motion.button>
  );
};

// Floating element component
const FloatingElement = ({ className, delay = 0, duration = 8 }) => {
  return (
    <motion.div
      className={className}
      animate={{
        y: [0, -30, 0],
        x: [0, 15, -15, 0],
        scale: [1, 1.1, 1],
      }}
      transition={{
        duration: duration,
        delay: delay,
        repeat: Infinity,
        ease: "easeInOut",
      }}
    />
  );
};

export default EliteHero;