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
        summary: 'AI document redaction for schools. Semantic analysis finds personal data in 200-page files and maps it to real people, so administrators decide exactly what to redact.',
        image: '/images/Eclipse.jpg',
        stat: { value: '200+', label: 'page documents handled' },
    },
    {
        id: 'paynance',
        title: 'Paynance',
        path: '/projects/paynance',
        sector: 'Fintech · Payments',
        year: '2024',
        role: 'Product & UX design, research',
        summary: 'A payment platform for merchants, covering everything from the landing page and KYC onboarding to the merchant dashboard and the POS app used at the counter.',
        image: paynanceImage,
        stat: { value: '2.5M+', label: 'transactions a month' },
    },
    {
        id: 'kovetkezotoken',
        title: 'Következő Token',
        path: '/projects/kovetkezotoken',
        sector: 'AI Consulting · Training',
        year: '2023—',
        role: 'Founder, lead consultant',
        summary: 'My AI consultancy. I teach teams to use AI well and build the automations that put it to work in their daily operations.',
        image: '/images/KovetkezoToken.jpg',
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
        summary: 'A location-based treasure hunt that sends players to local businesses, rewarding exploration and bringing foot traffic to their doors.',
        image: loccocityImage,
        stat: { value: '10,000+', label: 'players' },
    },
];

export const getNextCaseStudy = (id) => {
    const i = caseStudies.findIndex((p) => p.id === id);
    return caseStudies[(i + 1) % caseStudies.length];
};

// Own side projects (curated from GitHub). `link: null` = private repo, shown without a link.
export const labProjects = [
    {
        title: 'Noctiluca',
        description: 'A scroll-driven deep-sea dive. 262,144 plankton on the GPU light up as you move, with procedural creatures and generative sound, and every fact cites its source.',
        stack: ['WebGL2', 'TypeScript', 'Web Audio'],
        year: '2026',
        image: '/images/lab/noctiluca.jpg',
        link: null,
        featured: true,
    },
    { title: 'AI Doc Processor', description: 'Drafts company-formation papers and contracts from ID scans.', stack: ['Next.js', 'Gemini', 'Vercel AI SDK'], year: '2025', image: '/images/AIDocProcessor.jpg', link: 'https://ai-document-processing-rho.vercel.app/' },
    { title: 'BanánMester', description: 'Turns one product photo into a set of ad creatives.', stack: ['React', 'TypeScript', 'Gemini'], year: '2026', link: 'https://github.com/goblinmasterlord/productphotogenerator' },
    { title: 'Tamahagane', description: 'Forge a Japanese sword in ten stages; your choices shape the blade.', stack: ['Three.js', 'Vite'], year: '2026', link: 'https://tamahagane-green.vercel.app' },
    { title: 'Still', description: "Native macOS time tracker you drive by typing '45m review #studio'.", stack: ['SwiftUI', 'macOS'], year: '2026', link: null },
    { title: 'Aromate', description: 'Perfume finder built on weighted note matching.', stack: ['React', 'Vite'], year: '2026', image: '/images/Aromate.jpg', link: 'https://aromate.vercel.app/' },
    { title: 'Breakdownz', description: 'Djent riff generator with a step sequencer and Web Audio playback.', stack: ['React', 'Web Audio'], year: '2026', link: 'https://github.com/goblinmasterlord/breakdownz' },
];

export const links = {
    linkedin: 'https://www.linkedin.com/in/m%C3%A1rton-mocsonoky-052091116/',
    github: 'https://github.com/goblinmasterlord',
};
