import { ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import ProjectHero from '../../components/project/ProjectHero';
import ProjectOverview from '../../components/project/ProjectOverview';
import ProjectChallenge from '../../components/project/ProjectChallenge';
import ProjectSolution from '../../components/project/ProjectSolution';
import ProjectResults from '../../components/project/ProjectResults';
import ProjectNextSteps from '../../components/project/ProjectNextSteps';
import ProjectAspect from '../../components/project/ProjectAspect';

const Everprove = () => {
  const projectData = {
    title: "Making Legal Contracts Simple and Accessible",
    subtitle: "A digital platform that helps people and small businesses handle contracts without the headaches",
    overview: "Everprove started with a simple idea: legal contracts shouldn't be intimidating. We've created a platform that makes creating and managing contracts straightforward, whether you're an individual renting out your apartment or a small business handling client agreements. The focus was on creating a clean, intuitive experience that guides users through each step while maintaining the legal validity they need.",
    overviewStats: [
      { value: "85%", label: "Faster Completion" },
      { value: "15min", label: "Average Time to Sign" },
      { value: "50K+", label: "Contracts Created" }
    ],
    challengeDescription: "Through user research, I identified several key pain points in how people deal with contracts:",
    challenges: [
      "People often avoid proper contracts due to legal complexity and cost",
      "Small businesses struggle to maintain consistent contract processes",
      "Finding and customizing the right template is time-consuming",
      "Digital signing solutions feel corporate and intimidating",
      "Users worry about the legal validity of online contracts"
    ],
    solutions: [
      {
        title: "Friendly User Experience",
        points: [
          "Conversational guidance through contract creation",
          "Visual contract builder with plain language",
          "Simple mobile signing process",
          "Organized document dashboard"
        ]
      },
      {
        title: "Smart Workflow Tools",
        points: [
          "Simple entry of contract details",
          "Collaborative review process",
          "Automated reminders and tracking",
          "Quick duplicate and modify options"
        ]
      },
      {
        title: "Trust & Security",
        points: [
          "Clear audit history",
          "Contract recorded on blockchain",
          "Valid digital signature",
        ]
      }
    ],
    results: [
      { stat: "80+%", description: "of users completed their contract in one session" },
      { stat: "4.8/5", description: "average user satisfaction rating" },
      { stat: "15min", description: "average time to create and send a contract" }
    ],
    hero: {
      timeline: "6 Months",
      role: "UX/UI Designer",
      platform: "Web and Mobile Applications",
      team: "Solo designer, collaborating with 2 developers",
      involvement: [
        "User Research",
        "UX/UI Design",
        "Prototyping",
        "Usability Testing"
      ]
    },
    aspects: [
      {
        title: "Simple Contract Creation Flow",
        description: "We transformed the intimidating process of creating legal contracts into a friendly, guided experience. Through extensive user research with small business owners and individuals, we developed an intuitive flow that feels more like having a conversation than filling out legal forms. The interface breaks down complex requirements into simple questions, automatically translating responses into proper legal language behind the scenes.",
        image: "/assets/projects/everprove-flow.jpg",
        imageAlt: "Everprove's intuitive contract creation flow",
        tags: [
          "Conversational UI",
          "Step-by-Step Guidance",
          "Progress Tracking",
          "Smart Defaults",
          "Plain Language"
        ]
      },
      {
        title: "Smart Template Builder",
        description: "We created a powerful template builder that lets businesses design their own smart contracts. Teams can create dynamic templates with conditional logic, automated calculations, and customizable fields that adapt based on user inputs. The builder supports complex if-else scenarios, allowing contracts to automatically adjust their content and requirements based on specific conditions - all while maintaining legal validity.",
        image: "/assets/projects/everprove-builder.jpg",
        imageAlt: "Smart contract template builder interface",
        tags: [
          "Conditional Logic",
          "Dynamic Fields",
          "Custom Calculations",
          "Template Library",
          "Version Control"
        ]
      },
      {
        title: "Instant Contract Access",
        description: "Accessing contracts is just as easy as creating them. Each digitally signed contract is securely recorded on the blockchain, creating an immutable record that can't be tampered with. What makes it truly special is the accessibility - anyone can instantly retrieve a contract by simply scanning its QR code, pulling the verified document directly from the blockchain. Combined with our comprehensive audit log, it creates a transparent and secure contract management system.",
        image: "/assets/projects/everprove-signing.jpg",
        imageAlt: "Contract retrieval and blockchain verification interface",
        tags: [
          "QR Code Access",
          "Blockchain Storage",
          "Digital Signatures",
          "Audit Logging",
          "Instant Retrieval"
        ]
      }
    ]
  };

  return (
    <main className="bg-background text-primary">
      <Link 
        to="/" 
        className="fixed bottom-8 left-8 z-50 flex items-center gap-2 px-4 py-2 bg-background/80 backdrop-blur-sm rounded-full border border-primary/10 text-primary/60 hover:text-accent transition-all duration-300 hover:border-accent/20"
      >
        <ArrowLeft className="w-4 h-4" />
        Back to Home
      </Link>

      <ProjectHero 
        title={projectData.title} 
        subtitle={projectData.subtitle} 
        hero={projectData.hero}
      />
      
      <ProjectOverview 
        content={projectData.overview} 
        stats={projectData.overviewStats}
      />
      
      <ProjectChallenge 
        challenges={projectData.challenges} 
        description={projectData.challengeDescription}
      />

      <section className="py-32">
        <div className="container mx-auto px-4">
          {/* Section Header */}
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 mb-4"
          >
            <span className="w-8 h-[2px] bg-accent" />
            <span className="text-accent font-medium tracking-wide">KEY ASPECTS</span>
          </motion.span>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="max-w-3xl mb-16"
          >
            <h2 className="text-4xl font-display mb-6">
              Breaking down the solution
            </h2>
            <p className="text-primary/60 text-lg leading-relaxed">
              Let's explore how we transformed complex legal processes into simple, user-friendly experiences while maintaining security and validity.
            </p>
          </motion.div>

          {/* Project Aspects */}
          {projectData.aspects.map((aspect, index) => (
            <ProjectAspect
              key={aspect.title}
              {...aspect}
              index={index}
            />
          ))}
        </div>
      </section>
      
      <ProjectSolution solutions={projectData.solutions} />
      <ProjectResults results={projectData.results} />
      <ProjectNextSteps />
    </main>
  );
};

export default Everprove;