import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Menu, X } from 'lucide-react';

const MinimalNav = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const { scrollY } = useScroll();
  
  const navBg = useTransform(
    scrollY,
    [0, 100],
    ['rgba(255, 255, 255, 0)', 'rgba(255, 255, 255, 0.8)']
  );

  useEffect(() => {
    const updateScrollState = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', updateScrollState);
    return () => window.removeEventListener('scroll', updateScrollState);
  }, []);

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
      <motion.nav
        className="fixed top-0 left-0 right-0 z-50 px-6 md:px-12 lg:px-16"
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <motion.div
          className="absolute inset-0 backdrop-blur-md"
          style={{ backgroundColor: navBg }}
        />
        
        <div className="relative max-w-[1200px] mx-auto">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <Link to="/" className="relative z-10">
              <motion.div
                className="text-2xl font-bold text-gray-900"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                marci<span className="text-red-500">.</span>
              </motion.div>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center gap-8">
              {navItems.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  onClick={(e) => scrollToSection(e, item.href.split('/')[1])}
                  className="text-sm font-medium text-gray-600 hover:text-gray-900 transition-colors duration-200"
                >
                  {item.label}
                </a>
              ))}
              
              {/* CTA */}
              <a
                href="mailto:hello@uxwithmarci.com"
                className="px-4 py-2 text-sm font-medium text-white bg-gray-900 rounded-lg hover:bg-gray-800 transition-colors duration-200"
              >
                Let's talk
              </a>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden relative z-10 p-2"
            >
              {isMenuOpen ? (
                <X className="w-6 h-6 text-gray-900" />
              ) : (
                <Menu className="w-6 h-6 text-gray-900" />
              )}
            </button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Menu */}
      <motion.div
        className="fixed inset-0 z-40 md:hidden"
        initial="closed"
        animate={isMenuOpen ? "open" : "closed"}
        variants={{
          open: { pointerEvents: "auto" },
          closed: { pointerEvents: "none" }
        }}
      >
        <motion.div
          className="absolute inset-0 bg-white"
          variants={{
            open: { opacity: 1 },
            closed: { opacity: 0 }
          }}
          transition={{ duration: 0.3 }}
        />

        <motion.div
          className="absolute inset-x-0 top-20 p-6"
          variants={{
            open: { y: 0, opacity: 1 },
            closed: { y: -20, opacity: 0 }
          }}
        >
          <div className="space-y-4">
            {navItems.map((item) => (
              <motion.a
                key={item.label}
                href={item.href}
                onClick={(e) => scrollToSection(e, item.href.split('/')[1])}
                className="block py-3 text-lg font-medium text-gray-900"
              >
                {item.label}
              </motion.a>
            ))}
            
            <motion.div className="pt-4 border-t border-gray-200">
              <a
                href="mailto:hello@uxwithmarci.com"
                className="block w-full py-3 text-center text-white bg-gray-900 rounded-lg"
              >
                Let's work together
              </a>
            </motion.div>
          </div>
        </motion.div>
      </motion.div>
    </>
  );
};

export default MinimalNav;