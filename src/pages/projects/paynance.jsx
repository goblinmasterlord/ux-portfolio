import { ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';
import ProjectHero from '../../components/project/ProjectHero';
import ProjectOverview from '../../components/project/ProjectOverview';
import ProjectChallenge from '../../components/project/ProjectChallenge';
import ProjectSolution from '../../components/project/ProjectSolution';
import ProjectResults from '../../components/project/ProjectResults';
import ProjectNextSteps from '../../components/project/ProjectNextSteps';
import ProjectAspect from '../../components/project/ProjectAspect';
import { motion } from 'framer-motion';
import aspect1 from '../../assets/projects/aspect-01.jpg';
import aspect2 from '../../assets/projects/aspect-02.jpg';
import aspect3 from '../../assets/projects/aspect-03.jpg';
import aspect4 from '../../assets/projects/aspect-04.jpg';

const Paynance = () => {
  const projectData = {
    title: "Revolutionizing Payment Solutions for Modern Businesses",
    subtitle: "A comprehensive fintech platform that simplifies merchant payments and business management",
    overview: "Paynance is a cutting-edge fintech solution that transforms how businesses handle payments. By combining traditional POS terminals, virtual POS, online payments, and integrated cashier systems, we provide flexible payment solutions that adapt to any business model.",
    overviewStats: [
      { value: "2.5M+", label: "Transactions processed monthly" },
      { value: "1000+", label: "Merchants onboarded" }
    ],
    challengeDescription: "In today's fast-paced business environment, merchants face several hurdles when it comes to payment processing and financial management:",
    challenges: [
      "Merchants need flexible payment solutions that adapt to different business models",
      "Traditional POS systems lack modern features like easy tipping, multiple business profiles on single terminals, and integrated cashier systems",
      "Merchants need better visibility into their financial data",
      "Meeting merchant needs, legal requirements, and compliance standards is difficult",
      "Complex onboarding processes delay merchant activation"
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
          "Intuitive financial dashboard focused on merchant needs",
          "Comprehensive transaction management and reporting",
          "Easy feedback and support system",
          "Customizable features for different business types"
        ]
      },
      {
        title: "Enhanced Business Features",
        points: [
          "Easy tipping functionality",
          "Recurring payment support",
          "Multiple business profiles on single terminals",
          "And many more features based on user research"
        ]
      }
    ],
    results: [
      { stat: "2.5M+", description: "Transactions processed monthly" },
      { stat: "1000+", description: "Merchants onboarded" },
      { stat: "98%", description: "Merchant satisfaction rate" }
    ],
    hero: {
      timeline: "12 Months",
      role: "Product Designer",
      platform: "Web Application & Mobile and POS",
      team: "4 designers, 12 developers",
      involvement: [
        "User Research",
        "UX Strategy",
        "UI Design",
        "Usability Testing"
      ]
    },
    aspects: [
      {
        title: "Landing Page Design",
        description: "After extensive competitor analysis and user research, I designed a landing page that resonates with our target merchants. Through systematic A/B testing of different value propositions, layouts, and CTAs, we identified the most effective way to communicate Paynance's benefits. The final design combines clear messaging with interactive demonstrations of key features.",
        image: aspect1,
        imageAlt: "Paynance landing page design showcase",
        tags: [
          "Conversion Optimization",
          "Visual Design",
          "User Research",
          "A/B Testing",
          "Competitor Analysis"
        ]
      },
      {
        title: "Merchant Platform",
        description: "User interviews with 30+ merchants revealed common pain points in existing financial platforms. I designed an intuitive dashboard that brings critical data forward while maintaining a clean interface. The final design emerged through multiple rounds of usability testing, ensuring merchants of all technical levels could efficiently manage their operations.",
        image: aspect2,
        imageAlt: "Merchant platform dashboard interface",
        tags: [
          "Dashboard Design",
          "User Interviews",
          "User Research",
          "Competitor Analysis"
        ]
      },
      {
        title: "Streamlined Onboarding",
        description: "Through careful analysis of regulatory requirements and user behavior, I developed a verification process that balances security with usability. The solution uses progressive disclosure and contextual guidance to make complex KYC requirements more approachable, while maintaining full compliance with financial regulations.",
        image: aspect3,
        imageAlt: "Onboarding flow visualization",
        tags: [
          "User Onboarding",
          "Security UX",
          "Process Design",
          "Error Handling"
        ]
      },
      {
        title: "Mobile & POS Application",
        description: "Based on extensive field research with merchants, I designed a unified payment interface that works seamlessly across mobile devices and POS terminals. The system handles complex scenarios like split payments and refunds while maintaining a simple, intuitive interface that new staff can master quickly.",
        image: aspect4,
        imageAlt: "Mobile application interface",
        tags: [
          "Mobile Design",
          "POS Interface",
          "Payment Flows",
          "Cross-platform App"
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
      <ProjectChallenge challenges={projectData.challenges} description={projectData.challengeDescription} />
      
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
              Breaking down the project
            </h2>
            <p className="text-primary/60 text-lg leading-relaxed">
              Let's dive into the key parts of Paynance - from the landing page that gets merchants excited, to the tools that make their daily operations a breeze.
            </p>
          </motion.div>

          {/* Updated aspect content */}
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

export default Paynance;