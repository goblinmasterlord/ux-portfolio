import { motion } from 'framer-motion';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import { Brain, Sparkles, Zap, Building, ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const AiSection = () => {
  const [ref, controls] = useScrollAnimation();

  return (
    <section className="px-6 lg:px-12 py-32 relative overflow-hidden">
      {/* Dynamic background */}
      <div className="absolute inset-0">
        {/* Neural network-like pattern */}
        <div className="absolute inset-0 opacity-[0.15]"
          style={{
            backgroundImage: `radial-gradient(circle at 50% 50%, var(--color-accent) 1px, transparent 1px), 
                             radial-gradient(circle at 0% 100%, var(--color-accent) 1px, transparent 1px)`,
            backgroundSize: '40px 40px',
            backgroundPosition: '0 0, 20px 20px',
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background via-accent/5 to-background" />
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
        {/* Header Section */}
        <div className="max-w-3xl mb-20">
          <motion.div 
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { opacity: 1, y: 0 }
            }}
            className="flex items-center gap-4 mb-6"
          >
            <Brain className="w-8 h-8 text-accent" />
            <span className="text-accent font-medium">AI SOLUTIONS</span>
          </motion.div>

          <motion.h2
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { opacity: 1, y: 0 }
            }}
            className="text-4xl md:text-5xl font-display mb-6"
          >
            Making AI work for your business
          </motion.h2>

          <motion.p
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { opacity: 1, y: 0 }
            }}
            className="text-primary/60 text-lg leading-relaxed"
          >
            With the rise of powerful language models, AI has become more accessible and practical than ever. We help you identify and implement the right solutions that can transform how your business handles information, automates tasks, and serves customers.
          </motion.p>
        </div>

        {/* Use Cases Showcase */}
        <motion.div
          variants={{
            hidden: { opacity: 0, y: 20 },
            visible: { opacity: 1, y: 0 }
          }}
          className="rounded-2xl border border-accent/20 p-8 bg-accent/5 backdrop-blur-sm"
        >
          <div className="flex items-center gap-4 mb-8">
            <Building className="w-6 h-6 text-accent" />
            <h3 className="text-2xl font-display">Potential Applications</h3>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {useCases.map((useCase, index) => (
              <UseCaseCard key={index} {...useCase} />
            ))}
            <FinalCard />
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
};

const UseCaseCard = ({ title, description, impact }) => (
  <motion.div
    variants={{
      hidden: { opacity: 0, y: 20 },
      visible: { opacity: 1, y: 0 }
    }}
    className="group p-6 rounded-xl bg-background/50 hover:bg-background/80 transition-all duration-300"
  >
    <h4 className="text-xl font-display mb-3 group-hover:text-accent transition-colors duration-300">
      {title}
    </h4>
    <p className="text-primary/60 text-sm mb-4">
      {description}
    </p>
    <div className="text-accent text-sm font-medium">
      {impact}
    </div>
  </motion.div>
);

const FinalCard = () => (
  <Link
    to="/contact"
    className="group p-6 rounded-xl bg-accent/10 hover:bg-accent/15 transition-all duration-300 flex flex-col justify-between h-full"
  >
    <div>
      <h4 className="text-xl font-display mb-3 text-accent">
        And Many More Possibilities...
      </h4>
      <p className="text-primary/60 text-sm mb-4">
        Language models can help with any task involving text, analysis, or decision-making - from drafting and summarizing to answering questions and generating insights.
      </p>
    </div>
    <div className="flex items-center gap-2 text-accent group-hover:translate-x-1 transition-transform duration-300">
      Let's discuss your needs
      <ChevronRight className="w-4 h-4" />
    </div>
  </Link>
);

const useCases = [
  {
    title: "Knowledge Base Assistant",
    description: "Turn your scattered documentation into an intelligent system that answers questions using your company's collective knowledge.",
    impact: "90% faster information retrieval"
  },
  {
    title: "Data Analysis Helper",
    description: "Transform complex data into clear insights with AI-assisted analysis and visualization.",
    impact: "Hours of analysis → minutes"
  },
  {
    title: "Customer FAQ Bot",
    description: "Handle common customer questions automatically while keeping your team's personal touch.",
    impact: "24/7 basic support"
  },
  {
    title: "Meeting Summarizer",
    description: "Turn long meetings into clear, actionable summaries. Automatically capture key points, decisions, and follow-ups from your recorded discussions.",
    impact: "Save 30min per meeting"
  },
  {
    title: "Market Research Helper",
    description: "AI-powered tool that analyzes trends, customer feedback, and competitor data to provide actionable market insights.",
    impact: "Research time cut by 60%"
  },
  {
    title: "Document Processing",
    description: "Extract and organize information from documents automatically with AI assistance.",
    impact: "50% less manual review"
  },
  {
    title: "Content Copilot",
    description: "AI assistant that helps write, edit, and optimize your content while maintaining brand voice and style guidelines.",
    impact: "2x faster content delivery"
  },
  {
    title: "Email Communication Helper",
    description: "Draft, summarize, and prioritize emails while maintaining your personal tone. Includes smart templates and response suggestions.",
    impact: "Email handling time cut by 40%"
  }
];

export default AiSection;