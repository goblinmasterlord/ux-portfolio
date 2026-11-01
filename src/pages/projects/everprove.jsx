import { caseStudies } from '../../data/projects';
import { CaseHero, CaseNav, Summary, CaseSection, Lead, Prose, Callout, NumberedList, AspectList, FeatureColumns, StatRow, FactList, NextProject } from '../../components/case';
import aspect1 from '../../assets/projects/everprove-aspect-01.jpg';
import aspect2 from '../../assets/projects/everprove-aspect-02.jpg';

const project = caseStudies.find((p) => p.id === 'everprove');

const summary = [
    {
        label: 'Challenge',
        text: 'People skip proper contracts because they look complex and expensive, and they doubt that an online contract would hold up.',
    },
    {
        label: 'What I did',
        text: 'As the only designer, working with two developers, I designed the guided creation flow, the template builder and blockchain verification, on web and mobile.',
    },
    {
        label: 'Outcome',
        text: 'More than 50,000 contracts have been created on Everprove.',
    },
];

const challenges = [
    'People often avoid proper contracts because of legal complexity and cost.',
    'Small businesses struggle to keep contracts consistent, and finding and customising the right template takes time.',
    'Digital signing tools feel corporate and intimidating.',
    'Users worry about the legal validity of online contracts.',
];

const aspects = [
    {
        title: 'A contract that feels like a conversation',
        description: 'Research with small business owners and individuals led to a guided flow that feels more like a conversation than a legal form. The interface breaks complex requirements into simple questions and turns the answers into proper legal language behind the scenes.',
        image: aspect1,
        imageAlt: "Everprove's guided contract creation flow",
        tags: ['Conversational UI', 'Step-by-step guidance', 'Smart defaults', 'Plain language'],
    },
    {
        title: 'Templates that adapt',
        description: 'The template builder lets businesses design their own smart contracts: conditional logic, automated calculations and fields that adapt to what the user enters. A contract can change its content to fit specific conditions and stay legally valid.',
        tags: ['Conditional logic', 'Dynamic fields', 'Custom calculations', 'Version control'],
    },
    {
        title: 'Proof anyone can check',
        description: 'Each signed contract is recorded on the blockchain, so the record cannot be tampered with. Anyone can retrieve the verified document by scanning its QR code, and a full audit log keeps the history clear.',
        image: aspect2,
        imageAlt: 'Contract signing and blockchain verification screens',
        tags: ['QR code access', 'Blockchain record', 'Digital signatures', 'Audit log'],
    },
];

const shipped = [
    {
        title: 'Friendly to use',
        points: ['Conversational guidance through contract creation', 'Visual contract builder in plain language', 'Simple mobile signing', 'Organised document dashboard'],
    },
    {
        title: 'Workflow tools',
        points: ['Quick entry of contract details', 'Collaborative review', 'Automated reminders and tracking', 'Duplicate and modify in one step'],
    },
    {
        title: 'Trust and security',
        points: ['Valid digital signature', 'Contract recorded on the blockchain', 'Clear audit history'],
    },
];

const results = [
    { value: '50K+', label: 'Contracts created' },
    { value: '85%', label: 'Faster completion' },
];

const facts = [
    { label: 'My role', value: 'UX/UI designer, the only designer on the team' },
    { label: 'Team', value: 'Me and 2 developers' },
    { label: 'Duration', value: '6 months' },
    { label: 'Platforms', value: 'Web and mobile' },
];

const Everprove = () => (
    <main>
        <CaseHero
            project={project}
            title="Making legal contracts *simple* and accessible"
            intro="A platform for creating, signing and verifying contracts, built for individuals and small businesses: renting out a flat, agreeing terms with a client."
            meta={[{ label: 'Team', value: 'Solo designer with 2 developers' }]}
            aspect="aspect-[4/3] md:aspect-[16/10]"
        />

        <Summary items={summary} />

        <CaseSection index="01" label="Context">
            <Lead>
                Everprove started from a simple idea: legal contracts shouldn&apos;t be intimidating.
            </Lead>
            <Prose>
                <p>
                    Whether you&apos;re renting out a flat or handling client agreements, a proper contract protects
                    you, yet many people skip one because of the legal complexity and cost. Everprove guides them
                    through each step of creating, signing and storing a contract while keeping the legal validity
                    they need.
                </p>
            </Prose>
        </CaseSection>

        <CaseSection index="02" label="Research" title="Why people avoid *contracts*">
            <Prose>
                <p>Research with small business owners and individuals surfaced four recurring problems:</p>
            </Prose>
            <NumberedList items={challenges} />
            <Callout>Make it feel like a *conversation,* not a legal form.</Callout>
        </CaseSection>

        <CaseSection index="03" label="The work" title="Create, adapt and *verify*" wide>
            <AspectList items={aspects} />
        </CaseSection>

        <CaseSection index="04" label="What shipped" title="Around the core *flows*" wide>
            <FeatureColumns groups={shipped} />
        </CaseSection>

        <CaseSection index="05" label="Outcome" dark>
            <StatRow stats={results} />
            <FactList items={facts} />
        </CaseSection>

        <NextProject currentId={project.id} />
        <CaseNav />
    </main>
);

export default Everprove;
