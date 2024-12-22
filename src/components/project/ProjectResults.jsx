import { motion } from 'framer-motion';
import { useScrollAnimation } from '../../hooks/useScrollAnimation';
import { TrendingUp, Users, Clock, Target, Sparkles, ChartBar } from 'lucide-react';

const ResultCard = ({ result, index }) => {
  const [ref, controls] = useScrollAnimation();

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={controls}
      variants={{
        hidden: { opacity: 0, y: 20 },
        visible: {
          opacity: 1,
          y: 0,
          transition: { delay: index * 0.2 }
        }
      }}
      className="relative group"
    >
      <div className="absolute inset-0 bg-gradient-to-br from-accent/5 to-primary/5 rounded-2xl transform group-hover:scale-105 transition-transform duration-500" />
      <div className="relative p-8 rounded-2xl border border-primary/10 backdrop-blur-sm">
        {/* Icon */}
        <div className="w-12 h-12 rounded-xl bg-accent/10 text-accent flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-500">
          {result.icon && <result.icon className="w-6 h-6" />}
        </div>
        
        {/* Content */}
        <div className="space-y-2">
          <span className="text-5xl font-display text-primary">
            {result.stat}
          </span>
          <p className="text-primary/60">
            {result.description}
          </p>
          
          {/* Additional context if provided */}
          {result.context && (
            <p className="text-sm text-primary/40 mt-4 pt-4 border-t border-primary/10">
              {result.context}
            </p>
          )}
        </div>
      </div>
    </motion.div>
  );
};

const ProjectResults = ({ results, title = "Impact & Results", description }) => {
  return (
    <section className="px-6 lg:px-12 py-32 bg-gradient-to-br from-accent/5 to-primary/5">
      <div className="max-w-[1000px] mx-auto">
        <div className="flex flex-col md:flex-row gap-12">
          <div className="md:w-1/3">
            <h2 className="text-2xl font-display sticky top-8">{title}</h2>
            {description && (
              <p className="text-primary/60 mt-4">
                {description}
              </p>
            )}
          </div>
          <div className="md:w-2/3">
            <div className="grid md:grid-cols-2 gap-6">
              {results.map((result, index) => (
                <ResultCard 
                  key={index} 
                  result={result} 
                  index={index} 
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectResults;