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
      <ProjectOverview 
        content={projectData.overview} 
        stats={projectData.overviewStats}
      />
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