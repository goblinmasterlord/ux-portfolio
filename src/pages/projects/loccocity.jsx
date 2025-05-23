import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { MapPin, Trophy, Store, Activity, Users, Clock, TrendingUp, ArrowLeft } from 'lucide-react';
import { motion } from 'framer-motion';
import ProjectHero from '../../components/project/ProjectHero';
import ProjectOverview from '../../components/project/ProjectOverview';
import ProjectChallenge from '../../components/project/ProjectChallenge';
import ProjectSolution from '../../components/project/ProjectSolution';
import ProjectResults from '../../components/project/ProjectResults';
import ProjectNextSteps from '../../components/project/ProjectNextSteps';
import ProjectAspect from '../../components/project/ProjectAspect';
import aspect1 from '../../assets/projects/locco-aspect-01.jpg';
import aspect2 from '../../assets/projects/locco-aspect-02.jpg';

const LoccoCityPage = () => {
  const projectData = {
    title: "Gamifying Urban Discovery",
    subtitle: "A location-based platform that transforms city exploration into an engaging treasure hunt, connecting adventurous users with local businesses through real-world rewards",
    overview: "Locco City revolutionizes retail engagement by blending physical exploration with digital rewards. Similar to Pokémon GO's groundbreaking approach to gaming, we've created an engaging platform that encourages users to explore their city while collecting real-world rewards from their favorite brands.",
    overviewStats: [
      { value: "10.000+", label: "active users exploring cities" },
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
    },
    aspects: [
      {
        title: "Exploration & Discovery System",
        description: "We designed an engaging urban exploration system that makes discovering your city feel like an adventure. Using location-based technology, we created a dynamic map that reveals nearby rewards and points of interest. The app uses a combination of fixed locations and randomly spawning rewards to keep exploration exciting and unpredictable, encouraging users to explore new areas of their city.",
        image: aspect1,
        imageAlt: "Locco City's interactive map and discovery interface",
        tags: [
          "Dynamic Mapping",
          "Location Services",
          "Real-time Updates",
          "Discovery Zones",
          "Local Exploration"
        ]
      },
      {
        title: "Merchant Dashboard",
        description: "We developed a powerful yet simple dashboard that gives merchants complete control over their digital presence. Businesses can create and manage rewards, track foot traffic, and analyze customer engagement patterns. The interface includes tools for scheduling promotions, setting reward parameters, and viewing real-time analytics about how users interact with their offers.",
        image: aspect2,
        imageAlt: "Merchant control dashboard interface",
        tags: [
          "Analytics Dashboard",
          "Reward Management",
          "Traffic Insights",
          "Campaign Planning",
          "Performance Metrics"
        ]
      },

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
              Breaking down the experience
            </h2>
            <p className="text-primary/60 text-lg leading-relaxed">
              Let's explore how we transformed urban exploration into an engaging game that benefits both users and local businesses.
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

export default LoccoCityPage;