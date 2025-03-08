import { motion } from 'framer-motion';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import { Brain, Sparkles, Zap, Building, ChevronRight, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const AiSection = () => {
  const [ref, controls] = useScrollAnimation();

  return (
    <section id="ai" className="px-4 sm:px-6 lg:px-12 py-16 md:py-32 bg-background relative overflow-hidden">
      {/* Dynamic background */}
      <div className="absolute inset-0">
        {/* Neural network-like pattern */}
        <div className="absolute inset-0 opacity-[0.15]"
          style={{
            backgroundImage: `radial-gradient(circle at 50% 50%, var(--color-blue) 1px, transparent 1px), 
                             radial-gradient(circle at 0% 100%, var(--color-violet) 1px, transparent 1px)`,
            backgroundSize: '40px 40px',
            backgroundPosition: '0 0, 20px 20px',
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background via-blue/5 to-background" />
      </div>

      <motion.div
        ref={ref}
        initial="hidden"
        animate={controls}
        variants={{
          hidden: { opacity: 0 },
          visible: { 
            opacity: 1,
            transition: {
              staggerChildren: 0.1
            }
          }
        }}
        className="max-w-[1800px] mx-auto relative z-10"
      >
        {/* Section header */}
        <motion.span
          variants={{
            hidden: { opacity: 0, y: 20 },
            visible: { opacity: 1, y: 0 }
          }}
          className="inline-flex items-center gap-2 mb-3 md:mb-4"
        >
          <span className="w-6 md:w-8 h-[2px] bg-blue" />
          <span className="text-blue font-medium tracking-wide text-xs md:text-sm">AI SOLUTIONS</span>
        </motion.span>

        {/* Section title and description */}
        <motion.div
          variants={{
            hidden: { opacity: 0, y: 20 },
            visible: { opacity: 1, y: 0 }
          }}
          className="max-w-3xl mb-12 md:mb-16"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-display mb-3 md:mb-6">
            AI-Powered Experiences
          </h2>
          <p className="text-primary/60 text-base md:text-lg lg:text-xl leading-relaxed">
            I help teams integrate AI capabilities into their products to create more intelligent, personalized, and efficient user experiences.
          </p>
        </motion.div>

        {/* Use Cases Showcase */}
        <motion.div
          variants={{
            hidden: { opacity: 0, y: 20 },
            visible: { opacity: 1, y: 0 }
          }}
          className="rounded-2xl border border-primary/10 hover:border-blue/20 p-8 bg-primary/5 backdrop-blur-sm shadow-card hover:shadow-card-hover transition-all duration-300"
        >
          <div className="flex items-center gap-4 mb-8">
            <div className="w-10 h-10 rounded-lg bg-blue/10 flex items-center justify-center shrink-0 group-hover:bg-blue/20 transition-all duration-300 shadow-blue-sm">
              <Building className="w-6 h-6 text-blue" />
            </div>
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
    className="group p-6 rounded-xl bg-background/50 hover:bg-background/80 transition-all duration-300 border border-primary/10 hover:border-blue/20 shadow-card hover:shadow-card-hover"
  >
    <h4 className="text-xl font-display mb-3 group-hover:text-blue transition-colors duration-300">
      {title}
    </h4>
    <p className="text-primary/60 text-sm mb-4">
      {description}
    </p>
    <div className="text-blue text-sm font-medium">
      {impact}
    </div>
  </motion.div>
);

const FinalCard = () => (
  <motion.div
    variants={{
      hidden: { opacity: 0, y: 20 },
      visible: { opacity: 1, y: 0 }
    }}
    className="p-6 rounded-xl bg-gradient-to-br from-blue/10 to-violet/10 border border-primary/10 hover:border-blue/20 shadow-card hover:shadow-card-hover transition-all duration-300"
  >
    <h4 className="text-xl font-display mb-3">
      Ready to explore AI possibilities?
    </h4>
    <p className="text-primary/60 text-sm mb-4">
      Let's discuss how AI can enhance your product and create more value for your users.
    </p>
    <Link
      to="/contact"
      className="inline-flex items-center gap-2 text-blue text-sm font-medium group"
    >
      <span>Get in touch</span>
      <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform duration-300" />
    </Link>
  </motion.div>
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