import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowUpRight, MousePointer2, Sparkles, Lightbulb, Layers, Bot } from 'lucide-react';
import paynanceImage1 from '../src/assets/projects/paynance-1.jpg';
import paynanceImage2 from '../src/assets/projects/paynance-2.jpg';
import paynanceImage3 from '../src/assets/projects/paynance-3.jpg';

// Navigation Components
const NavLink = ({ href, children }) => (
  <a
    href={href}
    className="text-primary/80 hover:text-primary text-sm tracking-wide transition-colors duration-200"
  >
    {children}
  </a>
);

const MobileNavLink = ({ href, children }) => (
  <a
    href={href}
    className="block text-primary/80 hover:text-primary text-2xl font-display font-medium"
  >
    {children}
  </a>
);

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${
      scrolled ? 'bg-background/90 backdrop-blur-sm' : 'bg-transparent'
    }`}>
      <div className="max-w-[1800px] mx-auto px-6 lg:px-12">
        <div className="flex justify-between items-center h-24">
          <div className="flex-shrink-0">
            <span className="text-xl font-display font-bold text-primary">YourName.</span>
          </div>
          
          <div className="hidden md:flex items-center space-x-12">
            <NavLink href="#work">Work</NavLink>
            <NavLink href="#about">About</NavLink>
            <NavLink href="#contact">Contact</NavLink>
            <a 
              href="#contact" 
              className="px-6 py-3 bg-accent text-background rounded-full font-medium hover:bg-primary transition-colors duration-300"
            >
              Let's Talk
            </a>
          </div>

          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 text-primary"
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {isMenuOpen && (
          <div className="md:hidden absolute inset-x-0 top-24 bg-background/95 backdrop-blur-sm">
            <div className="p-6 space-y-4">
              <MobileNavLink href="#work">Work</MobileNavLink>
              <MobileNavLink href="#about">About</MobileNavLink>
              <MobileNavLink href="#contact">Contact</MobileNavLink>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

const Hero = () => (
  <section className="min-h-screen flex items-center px-6 lg:px-12 bg-background text-primary pt-24">
    <div className="max-w-[1800px] mx-auto w-full">
      <div className="flex flex-col gap-8">
        <span className="text-accent font-medium tracking-wide">UX Designer & Product Thinker</span>
        <h1 className="text-display font-display max-w-[1400px]">
          Crafting Digital Experiences that Matter
        </h1>
        <p className="text-primary/60 text-lg md:text-xl max-w-[600px] leading-relaxed">
          I design products that bridge the gap between complexity and simplicity, 
          creating memorable experiences that users love.
        </p>
        <div className="flex items-center gap-8 mt-8">
          <a 
            href="#work" 
            className="group flex items-center gap-4 text-lg font-medium hover:text-accent transition-colors duration-300"
          >
            View Selected Work
            <ArrowUpRight className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
          </a>
        </div>
      </div>
    </div>
  </section>
);

const ProjectCard = ({ project, index }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div 
      className="group cursor-pointer grid md:grid-cols-2 gap-6 items-center"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Image Section */}
      <div className="relative overflow-hidden rounded-xl aspect-[16/9]">
        <img 
          src={project.image}
          alt={project.title}
          className="w-full h-full object-cover brightness-90 group-hover:scale-105 transition-all duration-700"
        />
        {/* Subtle gradient overlay that's always present */}
        <div className="absolute inset-0 bg-gradient-to-br from-transparent to-background/50" />
        
        {/* Hover overlay - now more transparent and without blur */}
        <div className="absolute inset-0 bg-background/20 opacity-0 group-hover:opacity-100 transition-all duration-500 flex items-center justify-center">
          <span className="px-6 py-3 bg-accent text-background rounded-full font-medium transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
            View Case Study
          </span>
        </div>
      </div>

      {/* Content Section - Reduced spacing */}
      <div className="space-y-3">
        <div className="flex items-center gap-4">
          <span className="text-accent font-medium">{String(index).padStart(2, '0')}</span>
          <span className="text-primary/60 text-sm">{project.category}</span>
          <span className="ml-auto text-primary/40 text-sm">{project.year}</span>
        </div>

        <div>
          <h3 className="text-primary text-xl font-display mb-1">{project.title}</h3>
          <p className="text-primary/60 text-sm leading-relaxed">{project.description}</p>
        </div>

        <div className="flex flex-wrap gap-1.5">
          {project.tags.map((tag, i) => (
            <span 
              key={i}
              className="px-2 py-0.5 bg-primary/5 text-primary/60 text-xs rounded-full hover:bg-primary/10 transition-colors duration-300"
            >
              {tag}
            </span>
          ))}
        </div>

        <div className="flex gap-6">
          {Object.entries(project.stats).map(([key, value], i) => (
            <div key={i}>
              <div className="text-base font-display text-accent">{value}</div>
              <div className="text-xs text-primary/40 capitalize">{key.replace('_', ' ')}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

const FeaturedWork = () => {
  const projects = [
    {
      title: "Paynance Banking Platform",
      category: "UX Design & Strategy",
      image: paynanceImage1,
      description: "Reimagining personal banking for the digital age with a focus on simplicity and security",
      year: "2024",
      tags: ["UX Design", "Mobile App", "Fintech", "User Research", "Design System"],
      stats: {
        users: "2.5M+",
        satisfaction: "98%",
        timeframe: "6 months"
      }
    },
    {
      title: "Paynance Mobile Experience",
      category: "Product Design",
      image: paynanceImage2,
      description: "Creating a seamless mobile banking experience with advanced security features",
      year: "2023",
      tags: ["Mobile Design", "UI/UX", "Security", "Payments", "User Testing"],
      stats: {
        transactions: "1M+",
        retention: "94%",
        growth: "+150%"
      }
    },
    {
      title: "Paynance Business Suite",
      category: "Enterprise Solutions",
      image: paynanceImage3,
      description: "Comprehensive business banking platform with powerful management tools",
      year: "2023",
      tags: ["B2B", "Enterprise", "Dashboard", "Analytics", "Financial Tools"],
      stats: {
        businesses: "50k+",
        processing: "$2B+",
        satisfaction: "96%"
      }
    }
  ];

  return (
    <section id="work" className="px-6 lg:px-12 py-32 bg-background">
      <div className="max-w-[1800px] mx-auto">
        <h2 className="text-primary/30 text-sm font-medium tracking-wider mb-16">SELECTED WORK</h2>
        <div className="space-y-24">
          {projects.map((project, index) => (
            <ProjectCard key={index} project={project} index={index + 1} />
          ))}
        </div>
      </div>
    </section>
  );
};

const ServiceCard = ({ service }) => {
  return (
    <div className="group relative p-8 rounded-2xl bg-primary/5 hover:bg-primary/10 transition-all duration-500 overflow-hidden transform hover:scale-105">
      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-accent/0 to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      
      <div className="relative z-10">
        <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center mb-6">
          <div className="text-accent">
            {service.icon}
          </div>
        </div>

        <h4 className="text-2xl font-display text-primary mb-4">{service.title}</h4>
        <p className="text-primary/60 mb-8">{service.description}</p>

        <div className="space-y-3">
          {service.features.map((feature, index) => (
            <div key={index} className="flex items-center gap-3">
              <div className="w-1 h-1 rounded-full bg-accent" />
              <span className="text-sm text-primary/60">{feature}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

const Services = () => {
  const services = [
    {
      icon: <Sparkles className="w-6 h-6" />,
      title: "UX Consultation",
      description: "Transform your digital products with user-centered design strategies and expert consultation.",
      features: ["User Research", "UX Audits", "Design Sprints", "Usability Testing"],
    },
    {
      icon: <Layers className="w-6 h-6" />,
      title: "UI Design",
      description: "Create stunning, intuitive interfaces that engage users and elevate your brand.",
      features: ["Design Systems", "Visual Design", "Interactive Prototypes", "Design-to-Dev"],
    },
    {
      icon: <Lightbulb className="w-6 h-6" />,
      title: "Product Consultation",
      description: "Strategic guidance to transform your ideas into successful digital products.",
      features: ["Product Strategy", "Market Analysis", "Feature Prioritization", "Growth Planning"],
    },
    {
      icon: <Bot className="w-6 h-6" />,
      title: "Generative AI Solutions",
      description: "Harness the power of AI to create innovative, personalized user experiences.",
      features: ["AI Integration", "LLM Implementation", "AI UX Patterns", "Conversational UI"],
    },
  ];

  return (
    <section className="px-6 lg:px-12 py-32 bg-background/50">
      <div className="max-w-[1800px] mx-auto">
        <h2 className="text-primary/30 text-sm font-medium tracking-wider mb-4">SERVICES</h2>
        <div className="flex flex-col md:flex-row justify-between items-start gap-4 mb-20">
          <h3 className="text-4xl md:text-5xl font-display text-primary max-w-2xl">
            Comprehensive design solutions for the digital age
          </h3>
          <a 
            href="#contact" 
            className="group flex items-center gap-2 text-accent hover:text-primary transition-colors duration-300"
          >
            Start a Project
            <ArrowUpRight className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
          </a>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <ServiceCard key={index} service={service} />
          ))}
        </div>
      </div>
    </section>
  );
};

const Contact = () => (
  <section id="contact" className="px-6 lg:px-12 py-32 bg-background text-primary">
    <div className="max-w-[1800px] mx-auto">
      <h2 className="text-primary/30 text-sm font-medium tracking-wider mb-4">GET IN TOUCH</h2>
      <div className="flex flex-col md:flex-row justify-between items-start gap-4">
        <h3 className="text-4xl md:text-5xl font-display text-primary max-w-2xl">
          Let's create something amazing together
        </h3>
        <div className="space-y-4">
          <p className="text-primary/60">Email: yourname@example.com</p>
          <p className="text-primary/60">Phone: +123 456 7890</p>
          <a 
            href="mailto:yourname@example.com" 
            className="group flex items-center gap-2 text-accent hover:text-primary transition-colors duration-300"
          >
            Send an Email
            <ArrowUpRight className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
          </a>
        </div>
      </div>
    </div>
  </section>
);

const App = () => {
  return (
    <div className="bg-background">
      <Navigation />
      <main>
        <Hero />
        <FeaturedWork />
        <Services />
        <Contact />
      </main>
    </div>
  );
};

export default App;