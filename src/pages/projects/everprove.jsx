import { ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';
import ProjectHero from '../../components/project/ProjectHero';
import ProjectOverview from '../../components/project/ProjectOverview';
import ProjectChallenge from '../../components/project/ProjectChallenge';
import ProjectSolution from '../../components/project/ProjectSolution';
import ProjectResults from '../../components/project/ProjectResults';
import ProjectNextSteps from '../../components/project/ProjectNextSteps';

const Everprove = () => {
  const projectData = {
    title: "Transforming Legal Contracting into a Seamless Digital Experience",
    subtitle: "Building the future of digital contracts for both individuals and enterprises",
    overview: "Everprove makes contract creation and management effortless through two key offerings: a consumer platform that simplifies personal legal documents, and an enterprise solution that provides customized contracting workflows for businesses. By combining intuitive design with powerful automation, we're making legal processes accessible to everyone while providing the robustness that businesses demand.",
    challengeDescription: "The legal contract landscape presents unique challenges for both individuals and businesses:",
    challenges: [
      "Individuals avoid legal protection due to complex contract language",
      "Businesses need customizable, automated contract workflows",
      "Traditional contract processes waste valuable time and resources",
      "Enterprise compliance requirements add layers of complexity",
      "Integration with existing systems is often problematic"
    ],
    solutions: [
      {
        title: "Consumer-Friendly Platform",
        points: [
          "Plain-language contract templates",
          "Guided document creation process",
          "Mobile-first signing experience",
          "Secure document storage"
        ]
      },
      {
        title: "Enterprise Workflow Engine",
        points: [
          "Custom approval workflows",
          "API-first integration approach",
          "Automated compliance checks",
          "Bulk processing capabilities"
        ]
      },
      {
        title: "Secure Infrastructure",
        points: [
          "Blockchain-verified signatures",
          "Enterprise-grade security",
          "Audit trail and versioning",
          "Multi-party collaboration tools"
        ]
      }
    ],
    results: [
      { stat: "85%", description: "reduction in average contract completion time" },
      { stat: "3x", description: "increase in contract completion rate" },
      { stat: "98%", description: "user satisfaction rate" }
    ],
    hero: {
      timeline: "12 Months",
      role: "UX & UI Designer",
      platform: "Web and Mobile Applications",
      team: "3 designers, 8 developers",
      involvement: [
        "User Research",
        "UX/UI Design",
        "User Testing",
        "Wireframing"
      ]
    }
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
      <ProjectOverview content={projectData.overview} />
      <ProjectChallenge 
        challenges={projectData.challenges} 
        description={projectData.challengeDescription}
      />
      <ProjectSolution solutions={projectData.solutions} />
      <ProjectResults results={projectData.results} />
      <ProjectNextSteps />
    </main>
  );
};

export default Everprove;