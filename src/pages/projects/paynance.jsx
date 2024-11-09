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
        description: "The landing page needed to showcase Paynance's unique strengths through compelling visuals and clear messaging. I crafted an experience that balances bold design elements with practical demonstrations of our platform's capabilities, helping merchants quickly understand the value we deliver.",
        image: aspect1,
        imageAlt: "Paynance landing page design showcase",
        metrics: [
          { value: "+45%", label: "Merchant Sign-ups" },
          { value: "+60%", label: "User Engagement" }
        ]
      },
      {
        title: "Merchant Platform",
        description: "Extensive merchant interviews and feedback sessions shaped this platform from the ground up. I designed a comprehensive system that includes everything from transaction management to detailed analytics, while keeping the interface intuitive. Each feature was refined through continuous user testing and real-world feedback.",
        image: aspect2,
        imageAlt: "Merchant platform dashboard interface",
        metrics: [
          { value: "98%", label: "Satisfaction Rate" },
          { value: "-40%", label: "Support Tickets" }
        ]
      },
      {
        title: "Streamlined Onboarding",
        description: "The challenge was making KYC verification less daunting without compromising security. I designed a step-by-step flow with clear guidance throughout. The new process significantly improved completion rates while maintaining compliance requirements.",
        image: aspect3,
        imageAlt: "Onboarding flow visualization",
        metrics: [
          { value: "90%", label: "Completion Rate" },
          { value: "6min", label: "Average Time" }
        ]
      },
      {
        title: "Mobile & POS Application",
        description: "Merchant feedback drove the development of standout features like instant refunds, custom payment flows, and smart transaction management. The interface adapts seamlessly between mobile and POS environments, delivering a fast, intuitive experience that merchants actually enjoy using.",
        image: aspect4,
        imageAlt: "Mobile application interface",
        metrics: [
          { value: "4.8", label: "App Rating" },
          { value: "2.5M+", label: "Monthly Transactions" }
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
      <ProjectOverview content={projectData.overview} />
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