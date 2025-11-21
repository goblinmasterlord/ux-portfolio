import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { ArrowLeft, CreditCard, Smartphone, LayoutDashboard } from 'lucide-react';
import { Link } from 'react-router-dom';
import NextProject from '../../components/project/NextProject';
import paynanceImage from '../../assets/projects/paynance-1.png';
import aspect1 from '../../assets/projects/aspect-01.jpg';
import aspect2 from '../../assets/projects/aspect-02.jpg';
import aspect3 from '../../assets/projects/aspect-03.jpg';
import aspect4 from '../../assets/projects/aspect-04.jpg';
import loccocityImage from '../../assets/projects/loccocity.png';

const Paynance = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

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
        icon: <CreditCard className="w-8 h-8" />,
        points: [
          "Multiple business profiles on single terminals",
          "Support for various payment methods and systems",
          "Integrated cashier systems for seamless operations",
          "Modern, fast, and user-friendly terminals"
        ]
      },
      {
        title: "Streamlined Merchant Platform",
        icon: <LayoutDashboard className="w-8 h-8" />,
        points: [
          "Intuitive financial dashboard focused on merchant needs",
          "Comprehensive transaction management and reporting",
          "Easy feedback and support system",
          "Customizable features for different business types"
        ]
      },
      {
        title: "Enhanced Business Features",
        icon: <Smartphone className="w-8 h-8" />,
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
    aspects: [
      {
        title: "Landing Page Design",
        description: "After extensive competitor analysis and user research, I designed a landing page that resonates with our target merchants. Through systematic A/B testing of different value propositions, layouts, and CTAs, we identified the most effective way to communicate Paynance's benefits. The final design combines clear messaging with interactive demonstrations of key features.",
        image: aspect1,
        imageAlt: "Paynance landing page design showcase",
        tags: ["Conversion Optimization", "Visual Design", "User Research", "A/B Testing", "Competitor Analysis"]
      },
      {
        title: "Merchant Platform",
        description: "User interviews with 30+ merchants revealed common pain points in existing financial platforms. I designed an intuitive dashboard that brings critical data forward while maintaining a clean interface. The final design emerged through multiple rounds of usability testing, ensuring merchants of all technical levels could efficiently manage their operations.",
        image: aspect2,
        imageAlt: "Merchant platform dashboard interface",
        tags: ["Dashboard Design", "User Interviews", "User Research", "Competitor Analysis"]
      },
      {
        title: "Streamlined Onboarding",
        description: "Through careful analysis of regulatory requirements and user behavior, I developed a verification process that balances security with usability. The solution uses progressive disclosure and contextual guidance to make complex KYC requirements more approachable, while maintaining full compliance with financial regulations.",
        image: aspect3,
        imageAlt: "Onboarding flow visualization",
        tags: ["User Onboarding", "Security UX", "Process Design", "Error Handling"]
      },
      {
        title: "Mobile & POS Application",
        description: "Based on extensive field research with merchants, I designed a unified payment interface that works seamlessly across mobile devices and POS terminals. The system handles complex scenarios like split payments and refunds while maintaining a simple, intuitive interface that new staff can master quickly.",
        image: aspect4,
        imageAlt: "Mobile application interface",
        tags: ["Mobile Design", "POS Interface", "Payment Flows", "Cross-platform App"]
      }
    ]
  };

  const nextProject = {
    title: "Loccocity",
    category: "Smart City / IoT",
    image: loccocityImage,
    path: "/projects/loccocity"
  };

  return (
    <main className="bg-background min-h-screen text-primary selection:bg-accent/30 overflow-x-hidden">

      {/* Close Button - Fixed High Z-Index */}
      <Link
        to="/"
        className="fixed top-6 right-6 z-[60] p-3 rounded-full bg-black/50 backdrop-blur-md border border-white/10 text-white hover:bg-white hover:text-black transition-all duration-300 group"
      >
        <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
        <span className="sr-only">Back to Home</span>
      </Link>

      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-background/80 to-background z-10" />
          <img
            src={paynanceImage}
            alt="Paynance Hero"
            className="w-full h-full object-cover opacity-50"
          />
        </div>

        <div className="relative z-10 container mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <span className="inline-block px-3 py-1 mb-6 text-xs font-mono tracking-widest text-accent uppercase border border-accent/20 rounded-full bg-accent/5">
              Fintech / SaaS
            </span>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-display font-bold mb-6 tracking-tight leading-tight">
              {projectData.title}
            </h1>
            <p className="text-xl md:text-2xl text-secondary max-w-3xl mx-auto font-light leading-relaxed">
              {projectData.subtitle}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Broken Grid Challenges */}
      <section className="py-32 bg-surface/20">
        <div className="container mx-auto px-6">
          <div className="max-w-2xl mb-24">
            <span className="text-accent font-mono tracking-widest uppercase text-sm">The Challenge</span>
            <h3 className="text-3xl md:text-4xl font-display font-bold mt-4">
              {projectData.challengeDescription}
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projectData.challenges.map((challenge, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className={`p-8 bg-background border border-white/5 rounded-3xl hover:border-accent/30 transition-colors ${index === 0 ? 'md:col-span-2 bg-accent/5' : ''
                  } ${index === 3 ? 'md:col-span-2' : ''
                  }`}
              >
                <span className="text-4xl font-display font-bold text-white/10 mb-4 block">0{index + 1}</span>
                <p className="text-lg text-primary">{challenge}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Overlapping Aspects - REFACTORED LAYOUT */}
      <section className="py-32 overflow-hidden">
        <div className="container mx-auto px-6">
          <div className="space-y-32">
            {projectData.aspects.map((aspect, index) => (
              <div key={index} className={`flex flex-col md:flex-row gap-12 items-center ${index % 2 === 1 ? 'md:flex-row-reverse' : ''}`}>

                {/* Image Side */}
                <div className="w-full md:w-1/2">
                  <motion.div
                    whileHover={{ scale: 0.98 }}
                    transition={{ duration: 0.5 }}
                    className="rounded-3xl overflow-hidden border border-white/10 shadow-2xl"
                  >
                    <img src={aspect.image} alt={aspect.imageAlt} className="w-full h-auto" />
                  </motion.div>
                </div>

                {/* Content Side */}
                <div className="w-full md:w-1/2">
                  <div className="p-8 md:p-12 bg-surface/50 backdrop-blur-sm border border-white/10 rounded-3xl">
                    <h3 className="text-3xl font-display font-bold mb-6">{aspect.title}</h3>
                    <p className="text-secondary leading-relaxed mb-8 text-lg">
                      {aspect.description}
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {aspect.tags.map((tag, i) => (
                        <span key={i} className="px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs font-mono text-secondary">
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Solutions - Premium Cards */}
      <section className="py-32 relative overflow-hidden">
        {/* Background Glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-accent/20 blur-[120px] rounded-full pointer-events-none" />

        <div className="container mx-auto px-6 relative z-10">
          <div className="grid md:grid-cols-3 gap-6">
            {projectData.solutions.map((solution, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="group relative p-1 rounded-3xl bg-gradient-to-b from-white/10 to-white/5 hover:from-accent/50 hover:to-accent/10 transition-all duration-500"
              >
                <div className="absolute inset-0 bg-accent/20 blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="relative h-full bg-background/90 backdrop-blur-xl rounded-[20px] p-8 border border-white/5 group-hover:border-transparent transition-colors">
                  <div className="mb-8 w-14 h-14 rounded-2xl bg-accent/10 flex items-center justify-center text-accent group-hover:scale-110 group-hover:bg-accent group-hover:text-black transition-all duration-500">
                    {solution.icon}
                  </div>
                  <h3 className="text-2xl font-display font-bold mb-6 group-hover:text-accent transition-colors">{solution.title}</h3>
                  <ul className="space-y-4">
                    {solution.points.map((point, i) => (
                      <li key={i} className="flex items-start gap-3 text-secondary group-hover:text-primary transition-colors">
                        <div className="w-1.5 h-1.5 rounded-full bg-accent/50 mt-2 shrink-0 group-hover:bg-accent" />
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Results - Massive Typography */}
      <section className="py-32">
        <div className="container mx-auto px-6">
          <div className="space-y-24">
            {projectData.results.map((result, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                className="flex flex-col md:flex-row items-baseline gap-4 md:gap-12 border-b border-white/10 pb-12"
              >
                <span className="text-6xl md:text-9xl font-display font-bold text-transparent bg-clip-text bg-gradient-to-r from-accent to-white">
                  {result.stat}
                </span>
                <span className="text-xl md:text-2xl text-secondary max-w-md">
                  {result.description}
                </span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Next Project */}
      <NextProject project={nextProject} />

    </main>
  );
};

export default Paynance;
