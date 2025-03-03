import { useState, useEffect, useRef, useMemo } from 'react';
import { motion, useMotionValue, useTransform, useSpring } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, Sparkles, Zap, Clock, Rocket, Users, TrendingUp } from 'lucide-react';

const CreativeHero = () => {
  const containerRef = useRef(null);
  const mouseX = useRef(0);
  const mouseY = useRef(0);

  // Mouse movement tracking (optimized)
  useEffect(() => {
    const handleMouseMove = (e) => {
      if (containerRef.current) {
        const rect = containerRef.current.getBoundingClientRect();
        mouseX.current = e.clientX - rect.left;
        mouseY.current = e.clientY - rect.top;
      }
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

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
    }, [x, y]); // Reduced dependencies


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

    return (
      <h1 className="text-4xl md:text-6xl lg:text-7xl font-display leading-tight mb-2">
        <div className="overflow-hidden mb-4">
          {renderInteractiveText("Hey, I'm Marci")}
          <motion.span
            className="inline-block ml-4"
            initial={{ opacity: 1, scale: 1 }}
            whileHover={{ rotate: [-10, 10, -5, 5, 0], transition: { duration: 0.4 } }}
          >
            👋
          </motion.span>
        </div>
        <div className="overflow-hidden mb-4">
          {renderInteractiveText("I make digital products")}
        </div>
        <div className="overflow-hidden relative">
          {renderInteractiveText("people", "inline-block mr-4")}
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
              className="absolute -bottom-2 left-0 right-0 h-2 bg-gradient-to-r from-blue via-violet to-purple opacity-70 rounded-full"
              style={{ transformOrigin: "left" }}
            />
          </span>
        </div>
      </h1>
    );
  };

  // Redesigned Creative Stat Cards
  const CreativeStatCards = () => {
    const cardsData = [
      {
        icon: <Clock className="w-6 h-6 text-blue" />,
        title: "6+ Years in the Game",
        description: "Building digital experiences that blend user needs with business goals.",
        color: "blue",
      },
      {
        icon: <Rocket className="w-6 h-6 text-purple" />,
        title: "20+ Projects Launched",
        description: "From concept to deployment, delivering products users love and businesses thrive on.",
        color: "purple",
      },
      {
        icon: <Users className="w-6 h-6 text-violet" />,
        title: "15+ Happy Clients",
        description: "Partnering with diverse clients to create impactful digital solutions.",
        color: "violet",
      },
      {
        icon: <TrendingUp className="w-6 h-6 text-indigo" />,
        title: "Cross-Industry Expertise",
        description: "Experience across Fintech, Legal-Tech, and Gamification, bringing a broad perspective.",
        color: "indigo",
      },
    ];

    return (
      <div className="max-w-6xl mx-auto"> {/* Wider container */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-20 mb-12">
          {cardsData.map((card, index) => (
            <div
              key={index}
              className={`relative group p-6 rounded-2xl bg-primary/5 hover:bg-primary/10 transition-all duration-500 border border-${card.color}/10`}
            >
              {/* Subtle Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-br from-blue/0 via-indigo/5 to-violet/0 opacity-0 group-hover:opacity-100 transition-all duration-500 rounded-2xl" />

              <div className="flex gap-4 items-start">
                <div className={`w-10 h-10 rounded-lg bg-${card.color}/10 flex items-center justify-center shrink-0`}>
                    {card.icon}
                </div>
                <div>
                  <h4 className={`text-xl font-display text-primary mb-2 group-hover:text-${card.color} transition-colors duration-300`}>
                    {card.title}
                  </h4>
                  <p className="text-primary/60 text-sm leading-relaxed">
                    {card.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  };


  return (
    <section
      ref={containerRef}
      className="min-h-[80vh] px-6 lg:px-12 flex flex-col justify-center relative overflow-hidden py-24"
    >
      {/* Animated background elements */}
      <div className="absolute inset-0 z-0">
        {/* Colorful blobs - Using CSS animations */}
        <div className="colorful-blob w-[500px] h-[500px] top-[-10%] left-[-10%] bg-purple/30 animate-float-slow" />
        <div className="colorful-blob w-[600px] h-[600px] bottom-[-20%] right-[-10%] bg-teal/30 animate-float-medium" />
        <div className="colorful-blob w-[300px] h-[300px] top-[20%] right-[10%] bg-accent/20 animate-float-slow" />
        <div className="colorful-blob w-[250px] h-[250px] bottom-[30%] left-[10%] bg-yellow/30 animate-float-medium" />
      </div>

      {/* Main content */}
      <div className="max-w-[1800px] mx-auto relative z-10">
        <div className="space-y-8">
          {/* Interactive heading */}
          <InteractiveHeading />

          <motion.p
            initial={{ opacity: 1 }}
            className="text-primary/70 text-xl md:text-2xl max-w-[700px] leading-relaxed"
          >
            I help companies build products that are{' '}
            <span className="text-blue font-medium">simple to use</span> and a{' '}
            <span className="text-violet font-medium">joy to interact with</span>.
            Let's create something amazing together.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 1 }}
            className="flex flex-wrap items-center gap-6 pt-6"
          >
            <motion.button
              onClick={() => scrollToSection('work')}
              className="relative overflow-hidden rounded-full px-6 py-3 text-white"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-blue via-indigo to-violet"
              />

              <span className="relative z-10 flex items-center gap-2">
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
                  <ArrowRight className="w-4 h-4" />
                </motion.span>
              </span>
            </motion.button>

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

          {/* Redesigned Creative Stats Cards */}
          <CreativeStatCards />
        </div>
      </div>
    </section>
  );
};

export default CreativeHero;