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
        description: "Designed an engaging, conversion-focused landing page that effectively communicates Paynance's value proposition. The design emphasizes trust, security, and ease of use while maintaining a modern fintech aesthetic.",
        image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2015&auto=format&fit=crop",
        imageAlt: "Paynance landing page design showcase",
        metrics: [
          { value: "+45%", label: "Merchant Sign-ups" },
          { value: "+60%", label: "User Engagement" }
        ]
      },
      {
        title: "Merchant Platform",
        description: "Created an intuitive merchant dashboard that simplifies complex financial operations. The platform features real-time analytics, transaction management, and automated reporting systems.",
        image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2070&auto=format&fit=crop",
        imageAlt: "Merchant platform dashboard interface",
        metrics: [
          { value: "98%", label: "Satisfaction Rate" },
          { value: "-40%", label: "Support Tickets" }
        ]
      },
      {
        title: "Streamlined Onboarding",
        description: "Revolutionized the KYC process by designing a seamless onboarding flow that reduced completion time from 30+ minutes to just 6 minutes. The redesigned process maintains full compliance while eliminating friction points.",
        image: "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?q=80&w=2070&auto=format&fit=crop",
        imageAlt: "Onboarding flow visualization",
        metrics: [
          { value: "90%", label: "Completion Rate" },
          { value: "6min", label: "Average Time" }
        ]
      },
      {
        title: "Mobile & POS Application",
        description: "Developed a unified mobile application for both smartphones and POS terminals, ensuring consistency across all touchpoints. The app features an intuitive interface for payment processing, business profile management, and real-time transaction monitoring.",
        image: "https://images.unsplash.com/photo-1556742212-5b321f3c261b?q=80&w=2070&auto=format&fit=crop",
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
              description={
                index === 0 ? 
                  "The landing page needed to do one thing really well: show merchants how Paynance makes their life easier. We focused on clear messaging and strong visuals to highlight our key features and benefits." :
                index === 1 ?
                  "This is where the magic happens - a dashboard that turns complex financial data into clear insights. Merchants can track their money, manage transactions, and handle customer support all in one place." :
                index === 2 ?
                  "Nobody likes paperwork, especially when starting a business. We turned a typically painful KYC process into something you can knock out during your coffee break, while keeping everything secure and compliant." :
                  "The mobile app is all about flexibility - whether you're using it on a smartphone or our POS terminal. It's fast, secure, and packed with features that make taking payments feel like a breeze."
              }
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