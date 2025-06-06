import { motion } from 'framer-motion';
import { useScrollAnimation } from '../../hooks/useScrollAnimation';

const ProjectChallenge = ({ challenges, description }) => {
  const [ref, controls] = useScrollAnimation();

  return (
    <section className="px-6 lg:px-12 py-32 gradient-bg">
      <motion.div 
        ref={ref}
        initial="hidden"
        animate={controls}
        variants={{
          hidden: { opacity: 0, y: 20 },
          visible: { 
            opacity: 1, 
            y: 0, 
            transition: { 
              duration: 0.6,
              staggerChildren: 0.1
            } 
          }
        }}
        className="max-w-[1000px] mx-auto"
      >
        <div className="flex flex-col md:flex-row gap-12">
          <div className="md:w-1/3">
            <h2 className="text-2xl font-display">The Challenge</h2>
          </div>
          <div className="md:w-2/3 space-y-8">
            <p className="text-primary/80 text-lg">
              {description}
            </p>
            <div className="grid gap-6">
              {challenges.map((challenge, index) => (
                <motion.div
                  key={index}
                  variants={{
                    hidden: { opacity: 0, x: -20 },
                    visible: { 
                      opacity: 1, 
                      x: 0,
                      transition: { delay: index * 0.1 }
                    }
                  }}
                  className="flex items-start gap-4 p-6 rounded-xl bg-white shadow-card hover:shadow-card-hover transition-all duration-300"
                >
                  <span className="flex-shrink-0 w-8 h-8 rounded-full bg-blue/20 text-blue flex items-center justify-center font-display">
                    {index + 1}
                  </span>
                  <p className="text-primary/80">{challenge}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default ProjectChallenge;
