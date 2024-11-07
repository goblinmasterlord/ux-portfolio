import { motion } from 'framer-motion';
import { useScrollAnimation } from '../../hooks/useScrollAnimation';

const ProjectHero = ({ title, subtitle }) => {
  const [ref, controls] = useScrollAnimation();

  return (
    <section className="min-h-[90vh] relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-accent/5 to-background" />
      
      <div className="relative px-6 lg:px-12 pt-32 pb-24">
        <div className="max-w-[1800px] mx-auto">
          <motion.div
            ref={ref}
            initial="hidden"
            animate={controls}
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: {
                opacity: 1,
                y: 0,
                transition: { duration: 0.8, ease: "easeOut" }
              }
            }}
            className="flex flex-col gap-8"
          >
            <span className="inline-flex items-center gap-2">
              <span className="w-8 h-[2px] bg-accent" />
              <span className="text-accent font-medium tracking-wide">Case Study</span>
            </span>
            
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-display max-w-[1400px] leading-tight">
              {title}
            </h1>
            
            <p className="text-primary/60 text-lg md:text-xl max-w-[600px] leading-relaxed">
              {subtitle}
            </p>

            <div className="flex flex-wrap gap-8 mt-12">
              <div className="flex flex-col gap-2">
                <span className="text-primary/40 text-sm">Timeline</span>
                <span className="text-primary font-display">6 Months</span>
              </div>
              <div className="flex flex-col gap-2">
                <span className="text-primary/40 text-sm">Role</span>
                <span className="text-primary font-display">Lead Designer</span>
              </div>
              <div className="flex flex-col gap-2">
                <span className="text-primary/40 text-sm">Platform</span>
                <span className="text-primary font-display">Web and Mobile Applications</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ProjectHero;