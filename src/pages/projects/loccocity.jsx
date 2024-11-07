console.log('1. loccocity.jsx file loaded');

import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { MapPin, Trophy, Store, Activity, Users, Clock, TrendingUp, ArrowLeft } from 'lucide-react';
import ProjectHero from '../../components/project/ProjectHero';
import ProjectOverview from '../../components/project/ProjectOverview';
import ProjectChallenge from '../../components/project/ProjectChallenge';
import ProjectSolution from '../../components/project/ProjectSolution';
import ProjectResults from '../../components/project/ProjectResults';
import ProjectNextSteps from '../../components/project/ProjectNextSteps';

console.log('2. loccocity.jsx imports completed');

const LoccoCityPage = () => {
  console.log('Component rendering started');
  
  const projectData = {
    title: "Gamifying Urban Discovery",
    subtitle: "How Locco City Turns City Exploration into Rewards",
    overview: "Locco City revolutionizes retail engagement by blending physical exploration with digital rewards. Similar to Pokémon GO's groundbreaking approach to gaming, we've created an engaging platform that encourages users to explore their city while collecting real-world rewards from their favorite brands.",
    challengeDescription: "While digital marketing continues to evolve, connecting online engagement with real-world actions remains a significant challenge:",
    challenges: [
      "Traditional advertising struggles to drive physical foot traffic",
      "Local businesses need innovative ways to attract customers",
      "Digital and physical retail experiences remain disconnected",
      "Young consumers seek gamified experiences in everyday activities",
      "Customer loyalty programs lack engaging elements"
    ],
    solutions: [
      {
        title: "Gamified Urban Exploration",
        points: [
          "Location-based reward discovery",
          "Interactive city mapping",
          "Achievement-based progression",
          "Real-time reward availability"
        ]
      },
      {
        title: "Seamless Reward Experience",
        points: [
          "Proximity-based coupon activation",
          "Easy redemption process",
          "Personalized reward suggestions",
          "Brand partnership integration"
        ]
      }
    ],
    results: [
      { stat: "62.4k+", description: "active users exploring cities" },
      { stat: "1.2k+", description: "partnered local businesses" },
      { stat: "4.8/5", description: "user satisfaction rating" }
    ]
  };

  return (
    <div className="min-h-screen bg-black text-white">
      {console.log('Rendering main container')}
      
      <Link 
        to="/" 
        className="fixed bottom-8 left-8 z-50 flex items-center gap-2 px-4 py-2 bg-gray-800 text-white rounded-full"
      >
        <ArrowLeft className="w-4 h-4" />
        Back to Home
      </Link>

      {console.log('Rendering ProjectHero')}
      <ProjectHero 
        title={projectData.title} 
        subtitle={projectData.subtitle} 
      />

      {console.log('Rendering ProjectOverview')}
      <ProjectOverview 
        content={projectData.overview} 
      />

      {console.log('Rendering ProjectChallenge')}
      <ProjectChallenge 
        challenges={projectData.challenges} 
        description={projectData.challengeDescription} 
      />

      {console.log('Rendering ProjectSolution')}
      <ProjectSolution 
        solutions={projectData.solutions} 
      />

      {console.log('Rendering ProjectResults')}
      <ProjectResults 
        results={projectData.results} 
      />

      {console.log('Rendering ProjectNextSteps')}
      <ProjectNextSteps />
    </div>
  );
};

console.log('15. After component definition');
export default LoccoCityPage;
console.log('16. After export');