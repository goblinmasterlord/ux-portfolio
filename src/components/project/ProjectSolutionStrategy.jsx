import PropTypes from 'prop-types';
import { motion } from 'framer-motion';
import ProjectAspect from './ProjectAspect';

const ProjectSolutionStrategy = ({ aspects }) => {
  return (
    <section className="py-32">
      <div className="max-w-[1000px] mx-auto px-6">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-24"
        >
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 mb-4"
          >
            <span className="w-8 h-[2px] bg-accent" />
            <span className="text-accent font-medium tracking-wide">SOLUTION STRATEGY</span>
          </motion.span>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl font-display mb-6"
          >
            How we solved it
          </motion.h2>
        </motion.div>

        {/* Aspects */}
        <div className="space-y-32">
          {aspects.map((aspect, index) => (
            <ProjectAspect
              key={index}
              index={index}
              {...aspect}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

ProjectSolutionStrategy.propTypes = {
  aspects: PropTypes.arrayOf(PropTypes.shape({
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    imageAlt: PropTypes.string.isRequired,
    metrics: PropTypes.arrayOf(PropTypes.shape({
      value: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
    })),
  })).isRequired,
};

export default ProjectSolutionStrategy;