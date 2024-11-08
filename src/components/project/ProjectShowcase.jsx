import { motion } from 'framer-motion';
import { useScrollAnimation } from '../../hooks/useScrollAnimation';

const ProjectShowcase = ({ images, title = "Visual Design Process" }) => {
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
            <h2 className="text-2xl font-display sticky top-8">{title}</h2>
            <p className="text-primary/60 mt-4">
              Explore the visual journey and design artifacts that shaped this project.
            </p>
          </div>
          
          <div className="md:w-2/3">
            <div className="grid grid-cols-1 gap-8">
              {images.map((image, index) => (
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
                  className="relative group"
                >
                  <div className="overflow-hidden rounded-xl bg-primary/5">
                    <motion.img
                      src={image.url}
                      alt={image.caption}
                      className="w-full h-auto object-cover transform group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  {image.caption && (
                    <p className="mt-3 text-sm text-primary/60">
                      {image.caption}
                    </p>
                  )}
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default ProjectShowcase;