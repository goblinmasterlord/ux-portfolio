import { motion } from 'framer-motion';
import { useScrollAnimation } from '../../hooks/useScrollAnimation';

const ProjectHero = ({ title, subtitle, hero }) => {
  const [ref, controls] = useScrollAnimation();

  return (
    <section className="min-h-[80vh] relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-accent/5 to-background" />
      
      <div className="relative px-6 lg:px-12 pt-32 pb-24">
        <div className="max-w-[1400px] mx-auto">
          <div className="grid lg:grid-cols-[1.5fr,1fr] gap-12 lg:gap-16">
            {/* Left Column - Main Content */}
            <motion.div
              ref={ref}
              className="space-y-8"
            >
              <motion.span
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="inline-flex items-center gap-2"
              >
                <span className="w-8 h-[2px] bg-accent" />
                <span className="text-accent font-medium tracking-wide">Case Study</span>
              </motion.span>
              
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2, duration: 0.6 }}
                className="text-4xl md:text-6xl lg:text-7xl font-display leading-[1.1] tracking-tight"
              >
                {title}
              </motion.h1>
              
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3, duration: 0.6 }}
                className="text-primary/60 text-lg md:text-xl max-w-[600px] leading-relaxed"
              >
                {subtitle}
              </motion.p>
            </motion.div>

            {/* Right Column - Project Details */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.5, duration: 0.6 }}
              className="space-y-8 lg:border-l lg:border-primary/10 lg:pl-16"
            >
              <div className="grid grid-cols-2 gap-8">
                <div className="space-y-2">
                  <span className="text-primary/40 text-sm">Timeline</span>
                  <div className="text-xl font-display">{hero.timeline}</div>
                </div>
                <div className="space-y-2">
                  <span className="text-primary/40 text-sm">Role</span>
                  <div className="text-xl font-display">{hero.role}</div>
                </div>
                <div className="space-y-2">
                  <span className="text-primary/40 text-sm">Platform</span>
                  <div className="text-xl font-display">{hero.platform}</div>
                </div>
              </div>

              <div className="space-y-3">
                <span className="text-primary/40 text-sm">My Involvement</span>
                <div className="flex flex-wrap gap-2">
                  {hero.involvement.map((item, index) => (
                    <span 
                      key={index}
                      className="px-3 py-1 bg-accent/5 rounded-full text-accent/80 text-sm"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectHero;