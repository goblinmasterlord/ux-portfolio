import paynanceImage from '../assets/projects/paynance-1.png';
import loccocityImage from '../assets/projects/loccocity.png';
import everproveImage from '../assets/projects/everprove.png';

// Single source of truth for case studies: home index, nav and "next project" links.
export const caseStudies = [
    {
        id: 'eclipse',
        title: 'Eclipse',
        path: '/projects/eclipse',
        sector: 'EdTech · AI SaaS',
        year: '2025',
        role: 'UX architecture, prompt engineering, frontend',
        summary: 'AI document redaction for schools. Semantic analysis finds personal data in 200-page files and maps it to real people, so administrators decide what to protect in minutes, not days.',
        image: '/images/Eclipse.jpg',
        stat: { value: '200+', label: 'pages analysed per upload' },
    },
    {
        id: 'paynance',
        title: 'Paynance',
        path: '/projects/paynance',
        sector: 'Fintech · Payments',
        year: '2024',
        role: 'Lead product designer, research',
        summary: 'A payment platform for merchants, covering everything from the landing page and KYC onboarding to the merchant dashboard and the POS app used at the counter.',
        image: paynanceImage,
        stat: { value: '1,000+', label: 'merchants onboarded' },
    },
    {
        id: 'kovetkezotoken',
        title: 'Következő Token',
        path: '/projects/kovetkezotoken',
        sector: 'AI Consulting · Training',
        year: '2023—',
        role: 'Founder, lead consultant',
        summary: 'My AI consultancy. I train teams from the boardroom to the front line and build the agentic workflows that make AI part of day-to-day operations.',
        image: '/images/KovetkezoToken.jpg',
        stat: { value: '500+', label: 'professionals trained' },
    },
    {
        id: 'everprove',
        title: 'Everprove',
        path: '/projects/everprove',
        sector: 'LegalTech · Blockchain',
        year: '2019',
        role: 'Product & UX design',
        summary: 'Legal contracts for everyone. Guided templates and digital signing let people create binding agreements in minutes, and each one is recorded on-chain.',
        image: everproveImage,
        stat: { value: '50K+', label: 'contracts created' },
    },
    {
        id: 'loccocity',
        title: 'Locco City',
        path: '/projects/loccocity',
        sector: 'Gamification · Mobile',
        year: '2023',
        role: 'Product & UX design',
        summary: 'A location-based treasure hunt that sends players to local businesses, rewarding exploration and bringing in measurable foot traffic.',
        image: loccocityImage,
        stat: { value: '10,000+', label: 'players' },
    },
];

export const getNextCaseStudy = (id) => {
    const i = caseStudies.findIndex((p) => p.id === id);
    return caseStudies[(i + 1) % caseStudies.length];
};

export const labProjects = [
    { title: 'UXTools', description: 'AI design critique and accessibility checker.', stack: ['React', 'Claude API'], image: '/images/UXTools.jpg', link: 'https://github.com/goblinmasterlord/ux-toolkit' },
    { title: 'NeuralUX', description: 'Learning platform for AI-driven design.', stack: ['Next.js', 'Supabase'], image: '/images/NeuralUX.jpg', link: 'https://neuraluxstudio.com' },
    { title: 'FactCheck', description: 'Real-time claim verification for audio and video.', stack: ['Python', 'Whisper'], image: '/images/Isthattrue.jpg', link: 'https://github.com/goblinmasterlord/robot-chicken' },
    { title: 'SmartBudget', description: 'AI financial advisor and spending analyser.', stack: ['React Native', 'Gemini'], image: '/images/Budgeting.jpg', link: 'https://github.com/goblinmasterlord/smart-budget-app' },
    { title: 'Aromate', description: 'Algorithmic fragrance recommendations.', stack: ['React', 'Algorithms'], image: '/images/Aromate.jpg', link: 'https://aromate.vercel.app/' },
    { title: 'Artime', description: 'Minimal portfolio for a creative studio.', stack: ['React', 'Framer Motion'], image: '/images/Artimestudio.jpg', link: 'https://artimestudio.vercel.app/' },
    { title: 'BeautifulData', description: 'Site for a data-visualisation consultancy.', stack: ['React', 'Vite'], image: '/images/Beautifuldata.jpg', link: 'https://beautifuldata.co.uk' },
    { title: 'AI Doc Processor', description: 'Automated document extraction and structuring.', stack: ['LLMs', 'Automation'], image: '/images/AIDocProcessor.jpg', link: 'https://ai-document-processing-rho.vercel.app/' },
];

export const links = {
    linkedin: 'https://www.linkedin.com/in/m%C3%A1rton-mocsonoky-052091116/',
    github: 'https://github.com/goblinmasterlord',
};
