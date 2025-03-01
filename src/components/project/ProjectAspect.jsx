import { motion } from 'framer-motion';

const ProjectAspect = ({ title, description, image, imageAlt, tags, index }) => {
  // Determine if we're using the image layout or text-only layout
  const hasImage = Boolean(image);

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
          className="absolute inset-0 opacity-[0.05]"
          style={{
            backgroundImage: 'radial-gradient(circle at center, var(--color-blue) 1px, transparent 1px)',
            backgroundSize: '24px 24px'
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-blue/10 to-transparent" />
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
            <span className="w-8 h-[2px] bg-blue" />
            <span className="text-blue font-medium tracking-wide">
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

        {/* Main Content Grid - Conditional Layout */}
        <div className={`grid ${hasImage ? 'lg:grid-cols-2 gap-12 lg:gap-16' : 'grid-cols-1 max-w-3xl'} items-center`}>
          {/* Content Column */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-8"
          >
            <p className={`text-base text-primary/80 leading-relaxed ${!hasImage ? 'max-w-3xl' : ''}`}>
              {description}
            </p>

            {tags && (
              <div className="flex flex-wrap gap-3">
                {tags.map((tag, idx) => (
                  <motion.span
                    key={idx}
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ 
                      duration: 0.4, 
                      delay: 0.3 + idx * 0.1,
                      type: "spring",
                      stiffness: 100
                    }}
                    className="group relative"
                  >
                    <div className="absolute inset-0 bg-blue/20 rounded-full blur-lg opacity-0 group-hover:opacity-50 transition-all duration-500" />
                    <div className="relative px-4 py-2 rounded-full bg-blue/10 text-blue border border-blue/20 text-sm font-medium hover:bg-blue/20 transition-all duration-300">
                      {tag}
                    </div>
                  </motion.span>
                ))}
              </div>
            )}
          </motion.div>

          {/* Image Column - Only render if image is provided */}
          {hasImage && (
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="relative group"
            >
              {/* Image container with effects */}
              <div className="relative rounded-2xl overflow-hidden shadow-lg">
                {/* Decorative elements */}
                <div className="absolute -inset-4 bg-violet/20 rounded-2xl blur-2xl opacity-0 group-hover:opacity-70 transition-all duration-700" />
                <div className="absolute inset-0 bg-gradient-to-tr from-blue/20 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-700 z-10" />
                
                {/* Main image */}
                <div className="relative rounded-2xl overflow-hidden border border-primary/10">
                  <img 
                    src={image} 
                    alt={imageAlt} 
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                </div>

                {/* Accent line */}
                <div className="absolute -bottom-4 left-8 right-8 h-[2px] bg-blue/50 blur-sm" />
              </div>
            </motion.div>
          )}
        </div>
      </div>
    </motion.section>
  );
};

export default ProjectAspect;