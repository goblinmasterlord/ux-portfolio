import { ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';
import ProjectHero from '../../components/project/ProjectHero';
import ProjectOverview from '../../components/project/ProjectOverview';
import ProjectChallenge from '../../components/project/ProjectChallenge';
import ProjectSolution from '../../components/project/ProjectSolution';
import ProjectResults from '../../components/project/ProjectResults';

const Everprove = () => {
  const projectData = {
    title: "Transforming Legal Contracting into a Seamless Digital Experience",
    subtitle: "Reimagining how people create, negotiate, and sign contracts in the digital age",
    overview: "everprove simplifies the traditionally complex contract creation process through an intuitive, user-friendly digital platform. By combining smart UX design with blockchain technology, we've transformed legal contracting from a cumbersome process into a streamlined experience that anyone can navigate with confidence.",
    challenges: [
      "Complex legal templates intimidate non-legal users",
      "Back-and-forth email negotiations create confusion",
      "Paper-based signing is inefficient and time-consuming",
      "Contract storage and retrieval is often disorganized",
      "Legal costs for contract creation are prohibitively expensive for small businesses"
    ],
    solutions: [
      {
        title: "Smart Template Selection",
        points: [
          "Simplified contract templates for common scenarios",
          "Plain language descriptions of legal terms",
          "Visual wizard interface for template customization"
        ]
      },
      {
        title: "Collaborative Review Process",
        points: [
          "Real-time contract review and negotiation",
          "Clear visual indicators of changes and approvals",
          "Streamlined back-and-forth between parties"
        ]
      },
      {
        title: "Secure Digital Signing",
        points: [
          "Blockchain-verified digital signatures",
          "Immutable record-keeping",
          "Instant contract generation and distribution"
        ]
      }
    ],
    results: [
      { stat: "85%", description: "reduction in average contract completion time" },
      { stat: "3x", description: "increase in contract completion rate" },
      { stat: "98%", description: "user satisfaction rate" }
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

      <ProjectHero title={projectData.title} subtitle={projectData.subtitle} />
      <ProjectOverview content={projectData.overview} />
      <ProjectChallenge challenges={projectData.challenges} />
      <ProjectSolution solutions={projectData.solutions} />
      <ProjectResults results={projectData.results} />
    </main>
  );
};

export default Everprove;