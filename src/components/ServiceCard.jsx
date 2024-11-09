const ServiceCard = memo(({ service }) => {
    const [ref, controls] = useScrollAnimation();
  
    return (
      <motion.div
        ref={ref}
        initial="hidden"
        animate={controls}
        variants={fadeInScale}
        className="group relative p-6 rounded-xl bg-primary/5 hover:bg-primary/10 transition-all duration-500"
      >
        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-accent/0 via-accent/5 to-accent/0 opacity-0 group-hover:opacity-100 transition-all duration-500" />
        
        <div className="relative z-10 flex gap-4">
          {/* Icon */}
          <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center shrink-0">
            <div className="text-accent">
              {service.icon}
            </div>
          </div>
  
          <div>
            {/* Title */}
            <h4 className="text-xl font-display text-primary mb-2 group-hover:text-accent transition-colors duration-300">
              {service.title}
            </h4>
            
            {/* Description */}
            <p className="text-primary/60 text-sm mb-3 leading-relaxed">
              {service.description}
            </p>
  
            {/* Features as inline tags */}
            <div className="flex flex-wrap gap-2">
              {service.features.map((feature, index) => (
                <span 
                  key={index}
                  className="px-2 py-1 text-xs bg-primary/5 rounded-full text-primary/60"
                >
                  {feature}
                </span>
              ))}
            </div>
          </div>
        </div>
      </motion.div>
    );
  });