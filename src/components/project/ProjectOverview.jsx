import { motion } from 'framer-motion';
import { useScrollAnimation } from '../../hooks/useScrollAnimation';

const ProjectOverview = ({ content, stats }) => {
  const [ref, controls] = useScrollAnimation();

  return (
    <section className="px-6 lg:px-12 py-32">
      <motion.div 
        ref={ref}
        initial="hidden"
        animate={controls}
        variants={{
          hidden: { opacity: 0, y: 20 },
          visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
        }}
        className="max-w-[1000px] mx-auto"
      >
        <div className="flex flex-col md:flex-row gap-12">
          <div className="md:w-1/3">
            <h2 className="text-2xl font-display sticky top-8">Project Overview</h2>
          </div>
          <div className="md:w-2/3">
            <p className="text-primary/80 text-lg leading-relaxed">
              {content}
            </p>
            {stats && stats.length > 0 && (
              <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-8">
                {stats.map((stat, index) => (
                  <div key={index} className="p-6 rounded-xl bg-primary/5">
                    <div className="text-3xl font-display text-accent mb-2">{stat.value}</div>
                    <div className="text-primary/60 text-sm">{stat.label}</div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default ProjectOverview;