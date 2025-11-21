import paynanceImage1 from '../assets/projects/paynance-1.png';
import paynanceImage2 from '../assets/projects/paynance-2.png';
import loccocityImage1 from '../assets/projects/loccocity.png';
import everproveImage from '../assets/projects/everprove.png';

export const projects = [
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
