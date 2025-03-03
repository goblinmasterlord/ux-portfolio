// src/components/SimplifiedContactSection.jsx
import { motion } from 'framer-motion';
import { useEnhancedScrollAnimation } from '../hooks/useEnhancedScrollAnimation';
import ProtectedContact from './ProtectedContact';

const SimplifiedContactSection = () => {
  const [ref, controls, variants] = useEnhancedScrollAnimation('fadeIn', { 
    threshold: 0.1 
  });

  return (
    <section 
      id="contact" 
      className="relative px-6 lg:px-12 py-32 overflow-hidden"
      ref={ref}
    >
      {/* Gradient background similar to ProjectHero */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue/20 to-violet/10">
        {/* Subtle pattern overlay */}
        <div 
          className="absolute top-0 left-0 w-full h-full opacity-5"
          style={{
            backgroundImage: `radial-gradient(circle at 10% 10%, white 1px, transparent 1px), 
                             radial-gradient(circle at 90% 90%, white 0.5px, transparent 0.5px)`,
            backgroundSize: '60px 60px',
          }}
        />
        
        {/* Animated floating blobs */}
        <div className="absolute top-20 right-20 w-64 h-64 rounded-full bg-blue/30 blur-3xl opacity-20 animate-float-slow" />
        <div className="absolute -bottom-32 -left-32 w-96 h-96 rounded-full bg-violet/30 blur-3xl opacity-30 animate-float-medium" />
      </div>

      <motion.div
        initial="hidden"
        animate={controls}
        variants={variants}
        className="max-w-[1800px] mx-auto relative z-10"
      >
        <motion.span
          variants={{
            hidden: { opacity: 0, y: 20 },
            visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
          }}
          className="inline-flex items-center gap-2 mb-4"
        >
          <span className="w-8 h-[2px] bg-blue" />
          <span className="text-blue font-medium tracking-wide">GET IN TOUCH</span>
        </motion.span>
        
        <div className="flex flex-col md:flex-row justify-between items-start gap-12">
          <div className="md:w-1/2">
            <motion.h3
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0, transition: { duration: 0.6, delay: 0.1 } }
              }}
              className="text-4xl md:text-5xl font-display text-white mb-6"
            >
              Let's create something amazing together
            </motion.h3>
            
            <motion.p
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0, transition: { duration: 0.6, delay: 0.2 } }
              }}
              className="text-white/70 text-lg leading-relaxed max-w-xl"
            >
              Have a project in mind? Let's discuss how we can work together to bring your ideas to life. I'm currently available for new opportunities.
            </motion.p>
          </div>
          
          <motion.div
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { opacity: 1, y: 0, transition: { duration: 0.6, delay: 0.3 } }
            }}
            className="md:w-1/2 w-full"
          >
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
              <ProtectedContact darkMode={true} />
            </div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

export default SimplifiedContactSection;