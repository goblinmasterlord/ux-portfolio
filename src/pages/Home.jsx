import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import Hero from '../components/home/Hero';
import ProjectsShowcase from '../components/home/ProjectsShowcase';
import Services from '../components/home/Services';
import HobbyProjects from '../components/home/HobbyProjects';
import TechStack from '../components/home/TechStack';
import ProtectedContact from '../components/ProtectedContact';
import { motion } from 'framer-motion';

const Home = () => {
  const location = useLocation();

  useEffect(() => {
    // Handle state-based scrolling (if used)
    if (location.state?.scrollTo) {
      const element = document.getElementById(location.state.scrollTo);
      if (element) {
        setTimeout(() => {
          element.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }, 100);
      }
      window.history.replaceState({}, document.title);
    }

    // Handle hash-based scrolling (from Navigation.jsx)
    if (location.hash) {
      const id = location.hash.replace('#', '');
      const element = document.getElementById(id);
      if (element) {
        setTimeout(() => {
          element.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }, 100);
      }
    }
  }, [location]);

  return (
    <main className="bg-background min-h-screen">
      <Hero />
      <ProjectsShowcase />
      <TechStack />
      <Services />
      <HobbyProjects />

      {/* Contact Section */}
      <section id="contact" className="py-20 md:py-32 px-4 sm:px-6 lg:px-12 bg-background relative">
        <div className="absolute bottom-0 right-0 w-1/2 h-1/2 bg-accent-purple/5 rounded-full blur-[120px] pointer-events-none" />

        <div className="max-w-[1800px] mx-auto relative z-10">
          <div className="flex flex-col md:flex-row justify-between items-start gap-12">
            <div className="max-w-2xl">
              <motion.span
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-accent font-mono text-sm tracking-widest uppercase mb-4 block"
              >
                Contact
              </motion.span>
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="text-section-title text-primary mb-6"
              >
                Let's create something amazing together.
              </motion.h2>
              <p className="text-secondary text-lg mb-8">
                Have a project in mind? Let's discuss how we can work together to bring your ideas to life.
              </p>
            </div>
            <ProtectedContact />
          </div>
        </div>
      </section>
    </main>
  );
};

export default Home;