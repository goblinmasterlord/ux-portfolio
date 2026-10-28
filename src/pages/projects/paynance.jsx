import { caseStudies } from '../../data/projects';
import { CaseHero, CaseSection, Lead, Prose, NumberedList, AspectList, StatRow, NextProject } from '../../components/case';
import aspect1 from '../../assets/projects/aspect-01.jpg';
import aspect2 from '../../assets/projects/aspect-02.jpg';
import aspect3 from '../../assets/projects/aspect-03.jpg';
import aspect4 from '../../assets/projects/aspect-04.jpg';

const project = caseStudies.find((p) => p.id === 'paynance');

const challenges = [
    'Merchants need payment solutions that adapt to different business models.',
    'Traditional POS systems lack modern features such as easy tipping, multiple business profiles on one terminal and integrated cashier systems.',
    'Merchants have little visibility into their financial data.',
    'Compliance requirements make onboarding slow, which delays merchant activation.',
];

const aspects = [
    {
        title: 'Landing page',
        description: "After competitor analysis and user research, I designed a landing page for our target merchants. A/B tests of value propositions, layouts and CTAs shaped the final version, which pairs clear messaging with interactive demonstrations of key features.",
        image: aspect1,
        imageAlt: 'Paynance landing page',
        tags: ['Conversion optimisation', 'Visual design', 'User research', 'A/B testing', 'Competitor analysis'],
    },
    {
        title: 'Merchant platform',
        description: 'Interviews with 30+ merchants revealed common pain points in existing financial platforms. I designed a dashboard that brings critical data forward and keeps the interface clean, refined over several rounds of usability testing so merchants of any technical level can run their operations.',
        image: aspect2,
        imageAlt: 'Merchant platform dashboard',
        tags: ['Dashboard design', 'User interviews', 'User research', 'Competitor analysis'],
    },
    {
        title: 'Streamlined onboarding',
        description: 'Starting from the regulatory requirements and how merchants actually behave, I designed a verification process that balances security with usability. Progressive disclosure and contextual guidance make the KYC steps approachable while keeping the flow compliant.',
        image: aspect3,
        imageAlt: 'KYC onboarding flow',
        tags: ['User onboarding', 'Security UX', 'Process design', 'Error handling'],
    },
    {
        title: 'Mobile & POS app',
        description: 'Based on field research with merchants, I designed one payment interface for mobile devices and POS terminals. It handles split payments and refunds while staying simple enough for new staff to learn quickly.',
        image: aspect4,
        imageAlt: 'Mobile and POS application screens',
        tags: ['Mobile design', 'POS interface', 'Payment flows', 'Cross-platform app'],
    },
];

const results = [
    { value: '2.5M+', label: 'Transactions processed monthly' },
    { value: '1,000+', label: 'Merchants onboarded' },
];

const Paynance = () => (
    <main>
        <CaseHero
            project={project}
            title="Payments and business tools for *merchants*"
            intro="A fintech platform for merchant payments and business management."
            meta={[{ label: 'Scope', value: 'Landing page, KYC onboarding, merchant dashboard, POS app' }]}
            aspect="aspect-[4/3] md:aspect-[16/10]"
        />

        <CaseSection index="01" label="Overview">
            <Lead>
                Paynance combines POS terminals, virtual POS, online payments and integrated cashier systems, so
                merchants can take payments in the way their business works.
            </Lead>
            <Prose>
                <p>
                    It supports easy tipping, recurring payments and multiple business profiles on a single terminal.
                    I designed the complete user experience, backed by merchant research: the landing page, KYC
                    onboarding, merchant dashboard and the mobile and POS app.
                </p>
            </Prose>
        </CaseSection>

        <CaseSection index="02" label="Challenge" title="Merchants struggle with rigid payments and opaque *finances*">
            <NumberedList items={challenges} />
        </CaseSection>

        <CaseSection index="03" label="The work" title="Four products, one *merchant* journey" wide>
            <AspectList items={aspects} />
        </CaseSection>

        <CaseSection index="04" label="Results" dark>
            <StatRow stats={results} />
        </CaseSection>

        <NextProject currentId={project.id} />
    </main>
);

export default Paynance;
