import { useState, useEffect, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ChevronDown, ArrowUpRight, Code } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const Navigation = () => {
  const location = useLocation();
  const [isOpen, setIsOpen] = useState(false);
  const [showDropdown, setShowDropdown] = useState(false);
  const dropdownRef = useRef(null);

  // Scroll to section function
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
      setIsOpen(false);
      setShowDropdown(false);
    } else if (location.pathname !== '/') {
      // If we're not on the home page, navigate to home and then scroll
      window.location.href = `/#${sectionId}`;
    }
  };

  const projects = [
    {
      title: "Paynance",
      description: "Payment solutions for modern businesses",
      path: "/projects/paynance"
    },
    {
      title: "Everprove",
      description: "Digital contracting platform",
      path: "/projects/everprove"
    },
    {
      title: "Locco City",
      description: "Gamified urban discovery",
      path: "/projects/loccocity"
    }
  ];

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setShowDropdown(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  // Desktop dropdown menu
  const DropdownMenu = () => (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 10 }}
      className="absolute top-full right-0 mt-2 w-[300px] bg-background/80 backdrop-blur-lg rounded-2xl border border-primary/10 overflow-hidden"
      ref={dropdownRef}
    >
      <div className="p-4">
        {projects.map((project, index) => (
          <Link
            key={index}
            to={project.path}
            className="group flex items-start gap-4 p-3 rounded-xl hover:bg-primary/5 transition-all duration-300"
            onClick={() => setShowDropdown(false)}
          >
            <div className="flex-1">
              <h3 className="font-display text-lg group-hover:text-blue transition-colors duration-300">
                {project.title}
              </h3>
              <p className="text-sm text-primary/60">{project.description}</p>
            </div>
            <ArrowUpRight className="w-5 h-5 text-primary/40 group-hover:text-blue transition-all duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
          </Link>
        ))}
      </div>
    </motion.div>
  );

  // Mobile sidebar
  const Sidebar = () => (
    <motion.div
      initial={{ x: '100%' }}
      animate={{ x: 0 }}
      exit={{ x: '100%' }}
      transition={{ type: "spring", bounce: 0, duration: 0.4 }}
      className="fixed inset-y-0 right-0 w-full max-w-[400px] bg-background border-l border-primary/10 p-6 shadow-2xl"
    >
      <div className="flex flex-col h-full">
        <div className="flex justify-end mb-8">
          <button
            onClick={() => setIsOpen(false)}
            className="p-2 hover:bg-primary/5 rounded-full transition-colors duration-300"
          >
            <X className="w-6 h-6 text-primary/60" />
          </button>
        </div>
        
        <div className="space-y-6 flex-1">
          <div className="space-y-2">
            <h3 className="text-primary/40 text-sm font-medium px-4">Projects</h3>
            <div className="space-y-1">
              {projects.map((project, index) => (
                <Link
                  key={index}
                  to={project.path}
                  className="group flex items-center justify-between p-4 rounded-xl hover:bg-primary/5 transition-all duration-300"
                  onClick={() => setIsOpen(false)}
                >
                  <div>
                    <h3 className="font-display text-lg group-hover:text-blue transition-colors duration-300">
                      {project.title}
                    </h3>
                    <p className="text-sm text-primary/60">{project.description}</p>
                  </div>
                  <ArrowUpRight className="w-5 h-5 text-primary/40 group-hover:text-blue transition-all duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
                </Link>
              ))}
            </div>
          </div>
          
          {/* Hobby Projects Link in Mobile */}
          <div className="space-y-2">
            <h3 className="text-primary/40 text-sm font-medium px-4">Personal Work</h3>
            <div className="space-y-1">
              <button
                onClick={() => scrollToSection('hobby-projects')}
                className="group flex items-center justify-between w-full text-left p-4 rounded-xl hover:bg-primary/5 transition-all duration-300"
              >
                <div className="flex items-center gap-3">
                  <Code className="w-5 h-5 text-blue" />
                  <div>
                    <h3 className="font-display text-lg group-hover:text-blue transition-colors duration-300">
                      Hobby Projects
                    </h3>
                    <p className="text-sm text-primary/60">Creative coding experiments</p>
                  </div>
                </div>
                <ArrowUpRight className="w-5 h-5 text-primary/40 group-hover:text-blue transition-all duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
              </button>
            </div>
          </div>
        </div>

        <div className="pt-8 border-t border-primary/10">
          <Link 
            to="/contact"
            className="flex items-center justify-between p-4 rounded-xl hover:bg-primary/5 transition-all duration-300"
            onClick={() => setIsOpen(false)}
          >
            <span className="font-display text-lg">Get in Touch</span>
            <ArrowUpRight className="w-5 h-5" />
          </Link>
        </div>
      </div>
    </motion.div>
  );

  return (
    <nav className="fixed top-0 left-0 right-0 z-40">
      <div className="absolute inset-0 bg-background/80 backdrop-blur-md border-b border-primary/10" />
      
      <div className="relative px-6 lg:px-12 py-6">
        <div className="max-w-[1800px] mx-auto flex justify-between items-center">
          <Link to="/" className="text-xl font-display">
            Marci's Site
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            <div className="relative">
              <button
                onClick={() => setShowDropdown(!showDropdown)}
                className="flex items-center gap-2 text-primary/60 hover:text-blue transition-colors duration-300"
              >
                Work
                <ChevronDown className={`w-4 h-4 transition-transform duration-300 ${showDropdown ? 'rotate-180' : ''}`} />
              </button>
              <AnimatePresence>
                {showDropdown && <DropdownMenu />}
              </AnimatePresence>
            </div>
            
            {/* Hobby Projects Link in Desktop */}
            <button
              onClick={() => scrollToSection('hobby-projects')}
              className="flex items-center gap-2 text-primary/60 hover:text-blue transition-colors duration-300"
            >
              Hobby Projects
            </button>
            
            <Link 
              to="/contact" 
              className="text-primary/60 hover:text-blue transition-colors duration-300"
            >
              Contact
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 hover:bg-primary/5 rounded-full transition-colors duration-300"
            onClick={() => setIsOpen(true)}
          >
            <Menu className="w-6 h-6" />
          </button>
        </div>
      </div>

      {/* Mobile Sidebar */}
      <AnimatePresence>
        {isOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-background/80 backdrop-blur-sm md:hidden"
              onClick={() => setIsOpen(false)}
            />
            <Sidebar />
          </>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navigation;