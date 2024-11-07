import { ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';
import ProjectHero from '../../components/project/ProjectHero';
import ProjectOverview from '../../components/project/ProjectOverview';
import ProjectChallenge from '../../components/project/ProjectChallenge';
import ProjectSolution from '../../components/project/ProjectSolution';
import ProjectResults from '../../components/project/ProjectResults';
import ProjectNextSteps from '../../components/project/ProjectNextSteps';

const Paynance = () => {
  const projectData = {
    title: "Revolutionizing Payment Solutions for Modern Businesses",
    subtitle: "A comprehensive fintech platform that simplifies merchant payments and business management",
    overview: "Paynance is a cutting-edge fintech solution that transforms how businesses handle payments. By combining traditional POS terminals, virtual POS, online payments, and integrated cashier systems, we provide flexible payment solutions that adapt to any business model.",
    challengeDescription: "In today's fast-paced business environment, merchants face several hurdles when it comes to payment processing and financial management:",
    challenges: [
      "Merchants need flexible payment solutions that adapt to different business models",
      "Complex onboarding processes often delay merchant activation",
      "Businesses struggle with managing multiple payment streams",
      "Traditional POS systems lack modern features like easy tipping",
      "Merchants need better visibility into their financial data"
    ],
    solutions: [
      {
        title: "Flexible Payment Infrastructure",
        points: [
          "Multiple business profiles on single terminals",
          "Support for various payment methods and systems",
          "Integrated cashier systems for seamless operations",
          "Modern, fast, and user-friendly terminals"
        ]
      },
      {
        title: "Streamlined Merchant Platform",
        points: [
          "Intuitive financial dashboard",
          "Comprehensive transaction management",
          "Automated payout tracking",
          "Customizable email reports"
        ]
      },
      {
        title: "Enhanced Business Features",
        points: [
          "Easy tipping functionality",
          "Recurring payment support",
          "Integrated KYC process with Onfido",
          "24/7 merchant support system"
        ]
      }
    ],
    results: [
      { stat: "2.5M+", description: "Transactions processed monthly" },
      { stat: "98%", description: "Merchant satisfaction rate" },
      { stat: "6 mins", description: "Average onboarding time" }
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
      <ProjectChallenge challenges={projectData.challenges} description={projectData.challengeDescription} />
      <ProjectSolution solutions={projectData.solutions} />
      <ProjectResults results={projectData.results} />
      <ProjectNextSteps />
    </main>
  );
};

export default Paynance;