import { useState, useEffect, useRef, useMemo } from 'react';
import { motion, useMotionValue, useTransform, useSpring } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, Code } from 'lucide-react';

const CreativeHero = () => {
  const containerRef = useRef(null);
  const mouseX = useRef(0);
  const mouseY = useRef(0);
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

  // Mouse movement tracking (optimized)
  useEffect(() => {
    const handleMouseMove = (e) => {
      if (containerRef.current && !isMobile) {
        const rect = containerRef.current.getBoundingClientRect();
        mouseX.current = e.clientX - rect.left;
        mouseY.current = e.clientY - rect.top;
      }
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, [isMobile]);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    }
  };

  // Interactive letter component (optimized)
  const InteractiveLetter = ({ char, index }) => {
    const letterRef = useRef(null);
    const x = useMotionValue(0);
    const y = useMotionValue(0);

    // Optimized spring configurations
    const springConfig = { stiffness: 400, damping: 20, mass: 0.1 };
    const springX = useSpring(x, springConfig);
    const springY = useSpring(y, springConfig);

    // Use requestAnimationFrame for smoother updates
    useEffect(() => {
      // Skip animation on mobile
      if (isMobile) return;
      
      let animationFrameId;

      const updatePosition = () => {
        if (letterRef.current && containerRef.current) {
          const rect = letterRef.current.getBoundingClientRect();
          const containerRect = containerRef.current.getBoundingClientRect();
          const letterCenterX = rect.left + rect.width / 2 - containerRect.left;
          const letterCenterY = rect.top + rect.height / 2 - containerRect.top;

          const deltaX = mouseX.current - letterCenterX;
          const deltaY = mouseY.current - letterCenterY;
          const distance = Math.sqrt(deltaX * deltaX + deltaY * deltaY);

          const interactionRadius = 150;
          const strength = Math.max(0, 1 - distance / interactionRadius);

          const angle = Math.atan2(deltaY, deltaX);

          // Use set() for direct updates
          x.set(-Math.cos(angle) * strength * 25);  // Increased push
          y.set(-Math.sin(angle) * strength * 25);
        }

        animationFrameId = requestAnimationFrame(updatePosition);
      };

      animationFrameId = requestAnimationFrame(updatePosition);

      return () => cancelAnimationFrame(animationFrameId);
    }, [x, y, isMobile]); // Added isMobile dependency


    return (
      <motion.span
        ref={letterRef}
        className="interactive-letter inline-block"
        style={{
          x: springX,
          y: springY,
        }}
      >
        {char === ' ' ? '\u00A0' : char}
      </motion.span>
    );
  };

  // Animated heading with interactive letters
  const InteractiveHeading = () => {
    const renderInteractiveText = (text, className = "") => {
      return (
        <span className={`relative ${className}`}>
          {text.split('').map((char, index) => (
            <InteractiveLetter key={index} char={char} index={index} />
          ))}
        </span>
      );
    };

    // Simple text for mobile
    const renderSimpleText = (text, className = "") => {
      return (
        <span className={`relative ${className}`}>
          {text}
        </span>
      );
    };

    return (
      <h1 className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-display leading-tight mb-2">
        <div className="overflow-hidden mb-3 md:mb-4">
          {isMobile ? renderSimpleText("Hey, I'm Marci") : renderInteractiveText("Hey, I'm Marci")}
          <motion.span
            className="inline-block ml-2 md:ml-4"
            initial={{ opacity: 1, scale: 1 }}
            whileHover={{ rotate: [-10, 10, -5, 5, 0], transition: { duration: 0.4 } }}
          >
            👋
          </motion.span>
        </div>
        <div className="overflow-hidden mb-3 md:mb-4">
          {isMobile ? renderSimpleText("I make digital products") : renderInteractiveText("I make digital products")}
        </div>
        <div className="overflow-hidden relative">
          {isMobile ? renderSimpleText("people", "inline-block mr-2 md:mr-4") : renderInteractiveText("people", "inline-block mr-2 md:mr-4")}
          <span className="relative inline-block">
            <motion.span
              initial={{ opacity: 1 }}
              className="inline-block text-transparent bg-clip-text bg-gradient-to-r from-blue to-violet font-bold"
            >
              love
            </motion.span>
            <motion.div
              initial={{ scaleX: 0, opacity: 0 }}
              animate={{ scaleX: 1, opacity: 1 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              className="absolute -bottom-1 md:-bottom-2 left-0 right-0 h-1 md:h-2 bg-gradient-to-r from-blue via-violet to-purple opacity-70 rounded-full"
              style={{ transformOrigin: "left" }}
            />
          </span>
        </div>
      </h1>
    );
  };

  return (
    <section
      ref={containerRef}
      className="min-h-[90vh] px-4 sm:px-6 lg:px-8 xl:px-12 flex flex-col justify-center relative overflow-hidden pt-28 pb-16 md:py-24 w-full max-w-[2000px] mx-auto"
    >
      {/* Enhanced creative background */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        {/* Subtle noise texture overlay */}
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMDAiIGhlaWdodD0iMzAwIj48ZmlsdGVyIGlkPSJhIiB4PSIwIiB5PSIwIj48ZmVUdXJidWxlbmNlIGJhc2VGcmVxdWVuY3k9Ii43NSIgc3RpdGNoVGlsZXM9InN0aXRjaCIgdHlwZT0iZnJhY3RhbE5vaXNlIi8+PGZlQ29sb3JNYXRyaXggdHlwZT0ic2F0dXJhdGUiIHZhbHVlcz0iMCIvPjwvZmlsdGVyPjxwYXRoIGQ9Ik0wIDBoMzAwdjMwMEgweiIgZmlsdGVyPSJ1cmwoI2EpIiBvcGFjaXR5PSIuMDUiLz48L3N2Zz4=')] opacity-30" />
        
        {/* Subtle fine grid pattern */}
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAiIGhlaWdodD0iMjAiIHZpZXdCb3g9IjAgMCAyMCAyMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cGF0aCBkPSJNMjAgMEgwdjIwaDIwVjB6TTEgMWgxOHYxOEgxVjF6IiBmaWxsPSIjMjAyMDIwIiBmaWxsLW9wYWNpdHk9IjAuMDEiIGZpbGwtcnVsZT0iZXZlbm9kZCIvPjwvc3ZnPg==')] opacity-20" />
        
        {/* Gradient mesh colors */}
        <div className="absolute -top-[10%] -right-[10%] w-[50%] h-[50%] rounded-full bg-gradient-to-br from-blue/5 via-indigo/3 to-transparent blur-3xl"></div>
        <div className="absolute -bottom-[10%] -left-[10%] w-[50%] h-[50%] rounded-full bg-gradient-to-tr from-violet/5 via-purple/3 to-transparent blur-3xl"></div>
        <div className="absolute top-[30%] -left-[5%] w-[30%] h-[30%] rounded-full bg-gradient-to-r from-indigo/4 via-blue/3 to-transparent blur-3xl"></div>
        <div className="absolute bottom-[20%] right-[5%] w-[25%] h-[25%] rounded-full bg-gradient-to-l from-purple/4 via-violet/3 to-transparent blur-3xl"></div>
        
        {/* Horizontal accent lines */}
        <div className="absolute top-[25%] left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-blue/10 to-transparent"></div>
        <div className="absolute top-[75%] left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-violet/10 to-transparent"></div>
        
        {/* Vertical accent lines */}
        <div className="absolute left-[25%] top-0 bottom-0 w-[1px] bg-gradient-to-b from-transparent via-indigo/10 to-transparent"></div>
        <div className="absolute left-[75%] top-0 bottom-0 w-[1px] bg-gradient-to-b from-transparent via-purple/10 to-transparent"></div>
        
        {/* Diagonal accent lines */}
        <div className="absolute top-0 left-0 w-[1px] h-full bg-gradient-to-b from-transparent via-blue/5 to-transparent transform rotate-45 origin-top-left"></div>
        <div className="absolute top-0 right-0 w-[1px] h-full bg-gradient-to-b from-transparent via-violet/5 to-transparent transform -rotate-45 origin-top-right"></div>
        
        {/* Radial gradient overlay */}
        <div className="absolute inset-0 bg-gradient-radial from-transparent to-background/80 opacity-70"></div>
      </div>

      {/* Main content */}
      <div className="max-w-[1800px] mx-auto relative z-10">
        <div className="space-y-6 md:space-y-8">
          {/* Interactive heading */}
          <InteractiveHeading />

          <motion.p
            initial={{ opacity: 1 }}
            className="text-primary/70 text-lg sm:text-xl md:text-2xl max-w-[800px] leading-relaxed"
          >
            With <span className="text-blue font-medium">6+ years of experience</span>, I help companies build products that are{' '}
            <span className="text-blue font-medium">simple to use</span> and a{' '}
            <span className="text-violet font-medium">joy to interact with</span>.
            Let's create something amazing together.
          </motion.p>

          {/* CTA Buttons - Improved for mobile */}
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 md:gap-6 pt-4 md:pt-6">
            <motion.button
              onClick={() => scrollToSection('work')}
              className="relative overflow-hidden rounded-full px-5 py-2.5 md:px-6 md:py-3 text-white w-full sm:w-auto"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-blue via-indigo to-violet"
              />

              <span className="relative z-10 flex items-center justify-center gap-2">
                Check out my work
                <motion.span
                  animate={{ x: [0, 5, 0] }}
                  transition={{
                    repeat: Infinity,
                    repeatType: "loop",
                    duration: 1.5,
                    ease: "easeInOut"
                  }}
                >
                  <ArrowRight className="w-3.5 h-3.5 md:w-4 md:h-4" />
                </motion.span>
              </span>
            </motion.button>

            <motion.button
              onClick={() => scrollToSection('hobby-projects')}
              className="group inline-flex items-center gap-2 text-primary/70 hover:text-purple transition-colors duration-300 w-full sm:w-auto justify-center sm:justify-start"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <span className="text-sm md:text-base">See my hobby projects</span>
              <motion.div
                className="w-5 h-5 md:w-6 md:h-6 rounded-full bg-lavender flex items-center justify-center"
                whileHover={{ scale: 1.2 }}
              >
                <Code className="w-2.5 h-2.5 md:w-3 md:h-3 text-purple" />
              </motion.div>
            </motion.button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CreativeHero;