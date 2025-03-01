import { motion } from 'framer-motion';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

const ProcessSection = () => {
  const [ref, controls] = useScrollAnimation();

  return (
    <section className="px-6 lg:px-12 py-32 relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 -left-12 w-64 h-64 bg-blue/10 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-violet/5 rounded-full blur-3xl" />
        
        {/* Subtle grid pattern overlay */}
        <div 
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: 'radial-gradient(circle at center, var(--color-blue) 1px, transparent 1px)',
            backgroundSize: '24px 24px'
          }}
        />
      </div>

      <motion.div
        ref={ref}
        initial="hidden"
        animate={controls}
        variants={{
          hidden: { opacity: 0 },
          visible: { opacity: 1, transition: { staggerChildren: 0.2 } }
        }}
        className="max-w-[1800px] mx-auto relative z-10"
      >
        {/* Header */}
        <div className="max-w-3xl mb-20">
          <motion.h2 
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { opacity: 1, y: 0 }
            }}
            className="text-4xl md:text-5xl font-display mb-6"
          >
            A thoughtful approach to design challenges
          </motion.h2>
          <motion.p
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { opacity: 1, y: 0 }
            }}
            className="text-primary/60 text-lg md:text-xl leading-relaxed"
          >
            I believe great products emerge from a deep understanding of both user needs and business goals. 
            My process is collaborative, iterative, and focused on delivering measurable results.
          </motion.p>
        </div>

        {/* Process Steps */}
        <div className="grid md:grid-cols-3 gap-8">
          <ProcessStep
            number="01"
            title="Discover & Define"
            description="Understanding the problem space through research, stakeholder interviews, and data analysis"
          />
          <ProcessStep
            number="02"
            title="Explore & Iterate"
            description="Rapid prototyping and testing of solutions, learning and adapting based on feedback"
          />
          <ProcessStep
            number="03"
            title="Refine & Deliver"
            description="Polishing the solution and ensuring seamless implementation with development teams"
          />
        </div>
      </motion.div>
    </section>
  );
};

// ProcessStep component with advanced visual elements
const ProcessStep = ({ number, title, description }) => {
  return (
    <motion.div
      variants={{
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0 }
      }}
      className="group relative"
    >
      {/* Animated background shape */}
      <div className="absolute -inset-4 bg-blue/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-all duration-500" />
      
      {/* Number with animated border */}
      <div className="relative mb-6">
        <div className="w-20 h-20 relative">
          {/* Animated border */}
          <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-blue/20 to-violet/0 group-hover:from-blue/40 group-hover:to-violet/20 transition-all duration-500" />
          
          {/* Inner content */}
          <div className="absolute inset-[1px] rounded-xl bg-background flex items-center justify-center">
            <span className="text-3xl font-display text-blue group-hover:scale-110 transition-transform duration-500">
              {number}
            </span>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="relative space-y-4">
        <h3 className="text-2xl font-display group-hover:text-blue transition-colors duration-300">
          {title}
        </h3>
        <p className="text-primary/60 leading-relaxed">
          {description}
        </p>
      </div>

      {/* Decorative elements */}
      <div className="absolute top-0 right-0 w-20 h-20 opacity-0 group-hover:opacity-100 transition-all duration-500">
        <div className="absolute inset-0 bg-blue/10 rounded-full blur-xl animate-pulse" />
        <div className="absolute inset-4 bg-violet/5 rounded-full blur-md animate-float-slow" />
      </div>
    </motion.div>
  );
};

export default ProcessSection;