import { motion } from 'framer-motion';
import { useScrollAnimation } from '../../hooks/useScrollAnimation';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const ProjectNextSteps = () => {
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
        className="max-w-[1000px] mx-auto text-center"
      >
        <h2 className="text-2xl font-display mb-8">Ready to transform your business?</h2>
        <p className="text-primary/60 mb-12 max-w-[600px] mx-auto">
          Let's discuss how we can help digitize and streamline your payment solutions.
        </p>
        <div className="flex flex-wrap justify-center gap-6">
          <Link
            to="/contact"
            className="group inline-flex items-center gap-2 px-6 py-3 bg-accent text-background rounded-full hover:bg-accent/90 transition-colors duration-300"
          >
            Get Started
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
          </Link>
          <Link
            to="/"
            className="group inline-flex items-center gap-2 px-6 py-3 border border-primary/20 rounded-full hover:border-accent hover:text-accent transition-colors duration-300"
          >
            View More Work
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
          </Link>
        </div>
      </motion.div>
    </section>
  );
};

export default ProjectNextSteps;