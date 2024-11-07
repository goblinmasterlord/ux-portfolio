import { motion } from 'framer-motion';

const ResultCard = ({ result, index }) => {
  const Icon = result.icon;

  return (
    <motion.div
      variants={{
        hidden: { opacity: 0, y: 20 },
        visible: { 
          opacity: 1, 
          y: 0,
          transition: { delay: index * 0.1 }
        }
      }}
      className="p-6 rounded-xl bg-background/50 backdrop-blur-sm"
    >
      <div className="flex items-start gap-4">
        <span className="flex-shrink-0 w-12 h-12 rounded-full bg-accent/10 text-accent flex items-center justify-center">
          <Icon className="w-6 h-6" />
        </span>
        <div>
          <div className="text-2xl font-display text-primary mb-1">{result.metric}</div>
          <div className="text-lg font-medium mb-2">{result.label}</div>
          <p className="text-primary/60">{result.description}</p>
        </div>
      </div>
    </motion.div>
  );
};

export default ResultCard;