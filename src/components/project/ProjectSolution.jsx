import { motion } from 'framer-motion';
import { useScrollAnimation } from '../../hooks/useScrollAnimation';
import { Check, ArrowRight } from 'lucide-react';

const ProjectSolution = ({ solutions }) => {
  const [ref, controls] = useScrollAnimation();

  return (
    <section className="px-6 lg:px-12 py-32 bg-light">
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
            <h2 className="text-2xl font-display sticky top-8">Solution Strategy</h2>
          </div>
          <div className="md:w-2/3 space-y-16">
            {solutions.map((solution, index) => (
              <motion.div
                key={index}
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  visible: {
                    opacity: 1,
                    y: 0,
                    transition: { delay: index * 0.2 }
                  }
                }}
                className="relative"
              >
                <div className="flex items-center gap-4 mb-6">
                  <span className="flex-shrink-0 w-12 h-12 rounded-full bg-blue/20 text-blue flex items-center justify-center font-display">
                    {index + 1}
                  </span>
                  <h3 className="text-xl font-display">{solution.title}</h3>
                </div>
                
                <div className="pl-16">
                  <div className="space-y-4">
                    {solution.points.map((point, pointIndex) => (
                      <motion.div
                        key={pointIndex}
                        variants={{
                          hidden: { opacity: 0, x: -20 },
                          visible: {
                            opacity: 1,
                            x: 0,
                            transition: { delay: index * 0.2 + pointIndex * 0.1 }
                          }
                        }}
                        className="flex items-start gap-3 group"
                      >
                        <span className="flex-shrink-0 w-6 h-6 rounded-full bg-blue/10 text-blue flex items-center justify-center mt-0.5 group-hover:bg-blue group-hover:text-white transition-all duration-300">
                          <Check className="w-3 h-3" />
                        </span>
                        <p className="text-primary/80 group-hover:text-primary transition-colors duration-300">
                          {point}
                        </p>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default ProjectSolution;
