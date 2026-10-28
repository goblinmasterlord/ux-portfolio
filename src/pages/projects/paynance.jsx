import { caseStudies } from '../../data/projects';
import { CaseHero, CaseSection, Lead, NumberedList, AspectList, FeatureColumns, StatRow, NextProject } from '../../components/case';
import aspect1 from '../../assets/projects/aspect-01.jpg';
import aspect2 from '../../assets/projects/aspect-02.jpg';
import aspect3 from '../../assets/projects/aspect-03.jpg';
import aspect4 from '../../assets/projects/aspect-04.jpg';

const project = caseStudies.find((p) => p.id === 'paynance');

const challenges = [
    'Merchants need flexible payment solutions that adapt to different business models.',
    'Traditional POS systems lack modern features like easy tipping, multiple business profiles on a single terminal and integrated cashier systems.',
    'Merchants need better visibility into their financial data.',
    'Balancing merchant needs with legal requirements and compliance standards is difficult.',
    'Complex onboarding processes delay merchant activation.',
];

const aspects = [
    {
        title: 'Landing page',
        description: "After extensive competitor analysis and user research, I designed a landing page that resonates with our target merchants. Systematic A/B testing of value propositions, layouts and CTAs showed us the most effective way to communicate Paynance's benefits. The final design pairs clear messaging with interactive demonstrations of key features.",
        image: aspect1,
        imageAlt: 'Paynance landing page',
        tags: ['Conversion optimisation', 'Visual design', 'User research', 'A/B testing', 'Competitor analysis'],
    },
    {
        title: 'Merchant platform',
        description: 'Interviews with 30+ merchants revealed common pain points in existing financial platforms. I designed a dashboard that brings critical data forward while keeping the interface clean. The final design emerged through several rounds of usability testing, so merchants of every technical level can manage their operations efficiently.',
        image: aspect2,
        imageAlt: 'Merchant platform dashboard',
        tags: ['Dashboard design', 'User interviews', 'User research', 'Competitor analysis'],
    },
    {
        title: 'Streamlined onboarding',
        description: 'Through careful analysis of regulatory requirements and user behaviour, I developed a verification process that balances security with usability. Progressive disclosure and contextual guidance make complex KYC requirements approachable while keeping full compliance with financial regulations.',
        image: aspect3,
        imageAlt: 'KYC onboarding flow',
        tags: ['User onboarding', 'Security UX', 'Process design', 'Error handling'],
    },
    {
        title: 'Mobile & POS app',
        description: 'Based on extensive field research with merchants, I designed a unified payment interface that works across mobile devices and POS terminals. It handles complex scenarios like split payments and refunds while staying simple enough for new staff to master quickly.',
        image: aspect4,
        imageAlt: 'Mobile and POS application screens',
        tags: ['Mobile design', 'POS interface', 'Payment flows', 'Cross-platform app'],
    },
];

const solutions = [
    {
        title: 'Flexible payment infrastructure',
        points: [
            'Multiple business profiles on a single terminal',
            'Support for various payment methods and systems',
            'Integrated cashier systems for seamless operations',
            'Modern, fast and user-friendly terminals',
        ],
    },
    {
        title: 'Streamlined merchant platform',
        points: [
            'Financial dashboard focused on merchant needs',
            'Comprehensive transaction management and reporting',
            'Easy feedback and support system',
            'Customisable features for different business types',
        ],
    },
    {
        title: 'Enhanced business features',
        points: [
            'Easy tipping',
            'Recurring payment support',
            'Multiple business profiles on a single terminal',
            'Many more features driven by user research',
        ],
    },
];

const results = [
    { value: '2.5M+', label: 'Transactions processed monthly' },
    { value: '1,000+', label: 'Merchants onboarded' },
    { value: '98%', label: 'Merchant satisfaction rate' },
];

const Paynance = () => (
    <main>
        <CaseHero
            project={project}
            title="Payment solutions for *modern* businesses"
            intro="A comprehensive fintech platform that simplifies merchant payments and business management."
            meta={[{ label: 'Scope', value: 'Landing page, KYC onboarding, merchant dashboard, POS app' }]}
            aspect="aspect-[4/3] md:aspect-[16/10]"
        />

        <CaseSection index="01" label="Overview">
            <Lead>
                Paynance changes how businesses handle payments. It combines traditional POS terminals, virtual POS,
                online payments and integrated cashier systems into flexible payment solutions that adapt to any
                business model.
            </Lead>
        </CaseSection>

        <CaseSection index="02" label="Challenge" title="Merchants face real hurdles in payments and *financial* management">
            <NumberedList items={challenges} />
        </CaseSection>

        <CaseSection index="03" label="The work" title="Four products, one *merchant* journey" wide>
            <AspectList items={aspects} />
        </CaseSection>

        <CaseSection index="04" label="Solution" title="Engineered for *impact*" wide dark>
            <FeatureColumns groups={solutions} />
        </CaseSection>

        <CaseSection index="05" label="Results">
            <StatRow stats={results} />
        </CaseSection>

        <NextProject currentId={project.id} />
    </main>
);

export default Paynance;
