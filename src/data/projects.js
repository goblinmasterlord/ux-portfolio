import paynanceImage1 from '../assets/projects/paynance-1.png';
import paynanceImage2 from '../assets/projects/paynance-2.png';
import loccocityImage1 from '../assets/projects/loccocity.png';
import everproveImage from '../assets/projects/everprove.png';

export const projects = [
    {
        id: "eclipse",
        title: "Eclipse - Automated Redaction",
        category: "AI Tool",
        path: "https://eclipse.education",
        isExternal: true,
        image: "https://placehold.co/1200x800/1a1a1a/666666/png?text=Eclipse+Education", // Placeholder
        description: "An automated document redaction tool designed for educational institutions and legal firms. It uses advanced AI to identify and redact sensitive information from PDFs securely and efficiently.",
        year: "2024",
        tags: ["AI", "Privacy", "React", "PDF Processing"],
        span: "md:col-span-2", // Large emphasis
        stats: {
            "Efficiency": "100x faster",
            "Accuracy": "99.9%"
        }
    },
    {
        id: "kovetkezotoken",
        title: "Következő Token AI Training",
        category: "Education",
        path: "https://kovetkezotoken.hu",
        isExternal: true,
        image: "https://placehold.co/800x1000/1a1a1a/666666/png?text=Kovetkezo+Token", // Placeholder
        description: "Practical AI training for businesses and professionals in Hungary. Focusing on real-world applications of ChatGPT, prompt engineering, and AI strategy for teams.",
        year: "2024",
        tags: ["Education", "AI Consulting", "Corporate Training"],
        span: "md:col-span-1 md:row-span-2", // Tall emphasis
        stats: {
            "Students": "500+",
            "Courses": "12+"
        }
    },
    {
        id: "smartdocs",
        title: "SmartDocs Legal AI",
        category: "Legal-Tech",
        path: "https://ai-document-processing-rho.vercel.app/",
        isExternal: true,
        image: "https://placehold.co/800x600/1a1a1a/666666/png?text=SmartDocs", // Placeholder
        description: "Intelligent document processing for law firms. Automates ID verification, signature generation, and contract creation using Hungarian Civil Code (Ptk.) compliant templates.",
        year: "2024",
        tags: ["Legal-Tech", "Document Automation", "AI"],
        span: "md:col-span-1",
        stats: {
            "Docs Processed": "Automated",
            "Compliance": "100%"
        }
    },
    {
        id: "paynance",
        title: "Paynance Banking Platform",
        category: "Fintech",
        path: "/projects/paynance",
        image: paynanceImage1,
        description: "A new fintech platform for businesses to handle their payments how they want. I designed the complete user experience: from the initial landing page and merchant onboarding flow to a comprehensive web platform and mobile payment app.",
        year: "2024",
        tags: ["Fintech", "Payment Solutions", "UX & UI Design", "User Research"],
        stats: {
            Endpoints: "1000+",
            transactions: "1 million monthly transactions",
            timeframe: "12 months"
        }
    },
    {
        id: "loccocity",
        title: "Gamifying Urban Discovery",
        category: "Gamification",
        path: "/projects/loccocity",
        image: loccocityImage1,
        description: "Locco City transforms urban exploration into an engaging treasure hunt that benefits both users and local businesses. By combining location-based gameplay with real-world rewards, we've created a platform that drives foot traffic to local businesses.",
        year: "2023",
        tags: ["Gamification", "Location Services", "Mobile App", "Retail Tech"],
        stats: {
            users: "10.000+",
            businesses: "100+",
        }
    },
    {
        id: "everprove",
        title: "Transforming Legal Contracting",
        category: "Legal-Tech",
        path: "/projects/everprove",
        image: everproveImage,
        description: "Everprove makes legal contracts accessible to everyone. The consumer platform lets users create and sign legally-binding documents in minutes through guided templates and digital signing, with each contract securely recorded on the blockchain.",
        year: "2019",
        tags: ["Legal-Tech", "Smart Templates", "Digital Signing", "Blockchain"],
        stats: {
            "Contract Creation": "5 minutes average",
            "Cost Savings": "95% vs traditional",
        }
    },
    {
        id: "paynance-mobile",
        title: "Paynance Mobile Experience",
        category: "Product Design",
        path: "/projects/paynance-mobile",
        image: paynanceImage2,
        description: "Reimagining the payment terminal experience with a mobile-first SoftPOS solution. By turning smartphones into powerful payment terminals, we're enabling merchants to accept payments anywhere while providing features like instant refunds.",
        year: "2025",
        tags: ["Mobile Design", "UX & UI Design", "Security", "Payments"],
        stats: {
            "Status": "Coming Soon",
            "Launch": "2025 Q2"
        },
        comingSoon: true
    }
];
