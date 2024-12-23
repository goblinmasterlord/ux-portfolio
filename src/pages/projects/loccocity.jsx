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
    subtitle: "A location-based platform that transforms city exploration into an engaging treasure hunt, connecting adventurous users with local businesses through real-world rewards",
    overview: "Locco City revolutionizes retail engagement by blending physical exploration with digital rewards. Similar to Pokémon GO's groundbreaking approach to gaming, we've created an engaging platform that encourages users to explore their city while collecting real-world rewards from their favorite brands.",
    overviewStats: [
      { value: "1000+", label: "active users exploring cities" },
      { value: "100+", label: "partnered local businesses" },
    ],
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
          "Tailored rewards for each user",
          "Achievement-based progression",
          "Real-time reward availability"
        ]
      },
      {
        title: "Seamless Reward Experience",
        points: [
          "Proximity-based coupon activation",
          "Easy redemption process",
          "Brand partnership integration"
        ]
      }
    ],
    results: [
      { stat: "10.000+", description: "active users exploring cities" },
      { stat: "100+", description: "partnered local businesses" },
    ],
    hero: {
      timeline: "6 Months",
      role: "Product Designer",
      platform: "iOS & Android Apps",
      team: "2 designers, 6 developers",
      involvement: [
        "Gamification Design",
        "UX Research",
        "UI Design",
        "Prototyping"
      ]
    }
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

      <ProjectHero 
        title={projectData.title} 
        subtitle={projectData.subtitle} 
        hero={projectData.hero}
      />

      <ProjectOverview 
        content={projectData.overview}
        stats={projectData.overviewStats}
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