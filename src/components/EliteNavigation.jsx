import { useState, useEffect, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, useScroll, useTransform, useMotionValue, useSpring } from 'framer-motion';
import { Menu, X, ArrowUpRight } from 'lucide-react';

const EliteNavigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();
  const { scrollY } = useScroll();
  const navRef = useRef(null);

  // Magnetic cursor effect
  const cursorX = useMotionValue(0);
  const cursorY = useMotionValue(0);
  const springConfig = { stiffness: 300, damping: 30 };
  const cursorXSpring = useSpring(cursorX, springConfig);
  const cursorYSpring = useSpring(cursorY, springConfig);

  // Navigation background opacity based on scroll
  const navBgOpacity = useTransform(scrollY, [0, 100], [0, 1]);
  const navBlur = useTransform(scrollY, [0, 100], [0, 20]);

  useEffect(() => {
    const updateScrollState = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', updateScrollState);
    return () => window.removeEventListener('scroll', updateScrollState);
  }, []);

  // Prevent scroll when menu is open
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isMenuOpen]);

  const navItems = [
    { href: '/#work', label: 'Work' },
    { href: '/#services', label: 'Services' },
    { href: '/#hobby-projects', label: 'Projects' },
    { href: '/#contact', label: 'Contact' },
  ];

  const scrollToSection = (e, sectionId) => {
    e.preventDefault();
    const element = document.getElementById(sectionId.replace('#', ''));
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
      setIsMenuOpen(false);
    }
  };

  return (
    <>
      {/* Navigation Bar */}
      <motion.nav
        ref={navRef}
        className="fixed top-0 left-0 right-0 z-50 px-4 sm:px-6 lg:px-8"
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        <motion.div
          className="absolute inset-0 bg-white/80"
          style={{
            opacity: navBgOpacity,
            backdropFilter: `blur(${navBlur}px)`,
          }}
        />
        
        <div className="relative max-w-[1440px] mx-auto">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <Link
              to="/"
              className="relative z-10 group"
            >
              <motion.div
                className="text-2xl font-black"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <span className="text-primary group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-accent-coral group-hover:to-accent-electric transition-all duration-300">
                  marci
                </span>
                <motion.span
                  className="inline-block ml-1 text-accent-coral"
                  animate={{ rotate: [0, 10, -10, 0] }}
                  transition={{ duration: 2, repeat: Infinity }}
                >
                  .
                </motion.span>
              </motion.div>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center gap-8">
              {navItems.map((item, index) => (
                <NavLink
                  key={item.label}
                  href={item.href}
                  onClick={(e) => scrollToSection(e, item.href.split('/')[1])}
                  delay={index * 0.1}
                >
                  {item.label}
                </NavLink>
              ))}
              
              {/* CTA Button */}
              <motion.a
                href="mailto:hello@uxwithmarci.com"
                className="relative overflow-hidden px-6 py-2.5 rounded-full glass border border-primary/10 group"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <span className="relative z-10 text-sm font-medium text-primary group-hover:text-white transition-colors duration-300">
                  Let's talk
                </span>
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-accent-coral to-accent-electric"
                  initial={{ x: '-100%' }}
                  whileHover={{ x: 0 }}
                  transition={{ duration: 0.3 }}
                />
              </motion.a>
            </div>

            {/* Mobile Menu Button */}
            <motion.button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden relative z-10 p-2"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <div className="relative w-6 h-6">
                <motion.span
                  className="absolute inset-0 flex items-center justify-center"
                  animate={{ opacity: isMenuOpen ? 0 : 1, rotate: isMenuOpen ? 90 : 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <Menu className="w-6 h-6" />
                </motion.span>
                <motion.span
                  className="absolute inset-0 flex items-center justify-center"
                  animate={{ opacity: isMenuOpen ? 1 : 0, rotate: isMenuOpen ? 0 : -90 }}
                  transition={{ duration: 0.3 }}
                >
                  <X className="w-6 h-6" />
                </motion.span>
              </div>
            </motion.button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Menu Overlay */}
      <motion.div
        className="fixed inset-0 z-40 md:hidden"
        initial="closed"
        animate={isMenuOpen ? "open" : "closed"}
        variants={{
          open: { pointerEvents: "auto" },
          closed: { pointerEvents: "none" }
        }}
      >
        {/* Background blur */}
        <motion.div
          className="absolute inset-0 bg-white/95 backdrop-blur-xl"
          variants={{
            open: { opacity: 1 },
            closed: { opacity: 0 }
          }}
          transition={{ duration: 0.3 }}
          onClick={() => setIsMenuOpen(false)}
        />

        {/* Menu content */}
        <motion.div
          className="absolute inset-x-0 top-20 p-6"
          variants={{
            open: { y: 0, opacity: 1 },
            closed: { y: -20, opacity: 0 }
          }}
          transition={{ duration: 0.3 }}
        >
          <div className="glass rounded-2xl p-6 space-y-2">
            {navItems.map((item, index) => (
              <motion.a
                key={item.label}
                href={item.href}
                onClick={(e) => scrollToSection(e, item.href.split('/')[1])}
                className="block py-3 px-4 rounded-xl hover:bg-primary/5 transition-colors duration-200"
                variants={{
                  open: {
                    x: 0,
                    opacity: 1,
                    transition: { delay: index * 0.1 }
                  },
                  closed: {
                    x: -20,
                    opacity: 0
                  }
                }}
              >
                <span className="text-lg font-medium text-primary">
                  {item.label}
                </span>
              </motion.a>
            ))}
            
            <motion.div
              className="pt-4 border-t border-primary/10"
              variants={{
                open: {
                  y: 0,
                  opacity: 1,
                  transition: { delay: 0.4 }
                },
                closed: {
                  y: 20,
                  opacity: 0
                }
              }}
            >
              <a
                href="mailto:hello@uxwithmarci.com"
                className="flex items-center justify-between p-4 rounded-xl bg-gradient-to-r from-accent-coral to-accent-electric text-white"
              >
                <span className="font-medium">Let's work together</span>
                <ArrowUpRight className="w-5 h-5" />
              </a>
            </motion.div>
          </div>
        </motion.div>
      </motion.div>
    </>
  );
};

// Magnetic nav link component
const NavLink = ({ href, children, onClick, delay = 0 }) => {
  const ref = useRef(null);
  const [isHovered, setIsHovered] = useState(false);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  
  const springConfig = { stiffness: 300, damping: 20 };
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
    <motion.a
      ref={ref}
      href={href}
      onClick={onClick}
      className="relative py-2 text-sm font-medium text-primary/80 hover:text-primary transition-colors duration-200"
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => {
        setIsHovered(false);
        handleMouseLeave();
      }}
      style={{ x: xSpring, y: ySpring }}
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay, duration: 0.5 }}
    >
      <span className="relative">
        {children}
        <motion.span
          className="absolute -bottom-1 left-0 right-0 h-0.5 bg-gradient-to-r from-accent-coral to-accent-electric rounded-full"
          initial={{ scaleX: 0 }}
          animate={{ scaleX: isHovered ? 1 : 0 }}
          transition={{ duration: 0.3 }}
        />
      </span>
    </motion.a>
  );
};

export default EliteNavigation;