import PropTypes from 'prop-types';
import { motion } from 'framer-motion';

const ProjectAspect = ({ title, description, image, imageAlt, metrics, index }) => {
  return (
    <motion.section 
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
      className="relative min-h-[70vh] flex items-center py-20"
    >
      {/* Dynamic background with subtle pattern */}
      <div className="absolute inset-0">
        <div 
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: 'radial-gradient(circle at center, var(--color-accent) 1px, transparent 1px)',
            backgroundSize: '24px 24px'
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-accent/5 to-transparent" />
      </div>

      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="mb-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex items-center gap-2 mb-4"
          >
            <span className="w-8 h-[2px] bg-accent" />
            <span className="text-accent font-medium tracking-wide">
              {`ASPECT ${String(index + 1).padStart(2, '0')}`}
            </span>
          </motion.div>

          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-3xl md:text-4xl font-display mb-6"
          >
            {title}
          </motion.h2>
        </div>

        {/* Main Content Grid */}
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Column - Content */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-8"
          >
            <p className="text-base text-primary/80 leading-relaxed">
              {description}
            </p>

            {metrics && (
              <div className="grid grid-cols-2 gap-6">
                {metrics.map((metric, idx) => (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: 0.3 + idx * 0.1 }}
                    className="group relative"
                  >
                    <div className="absolute inset-0 bg-accent/5 rounded-xl blur-xl opacity-0 group-hover:opacity-100 transition-all duration-500" />
                    <div className="relative space-y-1">
                      <div className="text-2xl font-display text-accent">
                        {metric.value}
                      </div>
                      <div className="text-sm text-primary/60">
                        {metric.label}
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            )}
          </motion.div>

          {/* Right Column - Image */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="relative group"
          >
            {/* Image container with effects */}
            <div className="relative rounded-2xl overflow-hidden">
              {/* Decorative elements */}
              <div className="absolute -inset-4 bg-accent/10 rounded-2xl blur-2xl opacity-0 group-hover:opacity-50 transition-all duration-700" />
              <div className="absolute inset-0 bg-gradient-to-tr from-accent/20 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-700 z-10" />
              
              {/* Main image */}
              <div className="relative rounded-2xl overflow-hidden border border-primary/10">
                <img 
                  src={image} 
                  alt={imageAlt} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>

              {/* Accent line */}
              <div className="absolute -bottom-4 left-8 right-8 h-[2px] bg-accent/30 blur-sm" />
            </div>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
};

ProjectAspect.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  imageAlt: PropTypes.string.isRequired,
  index: PropTypes.number.isRequired,
  metrics: PropTypes.arrayOf(PropTypes.shape({
    value: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
  })),
};

export default ProjectAspect;