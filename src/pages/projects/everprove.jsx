import { caseStudies } from '../../data/projects';
import { CaseHero, CaseSection, Lead, Prose, NumberedList, AspectList, FeatureColumns, StatRow, NextProject } from '../../components/case';
import aspect1 from '../../assets/projects/everprove-aspect-01.jpg';
import aspect2 from '../../assets/projects/everprove-aspect-02.jpg';

const project = caseStudies.find((p) => p.id === 'everprove');

const overviewStats = [
    { value: '85%', label: 'Faster completion' },
    { value: '50K+', label: 'Contracts created' },
];

const challenges = [
    'People often avoid proper contracts because of legal complexity and cost.',
    'Small businesses struggle to keep their contract process consistent.',
    'Finding and customising the right template is time-consuming.',
    'Digital signing solutions feel corporate and intimidating.',
    'Users worry about the legal validity of online contracts.',
];

const aspects = [
    {
        title: 'Simple contract creation flow',
        description: 'I turned the intimidating process of creating a legal contract into a friendly, guided experience. Research with small business owners and individuals led to a flow that feels more like a conversation than a legal form. The interface breaks complex requirements into simple questions and translates the answers into proper legal language behind the scenes.',
        image: aspect1,
        imageAlt: "Everprove's guided contract creation flow",
        tags: ['Conversational UI', 'Step-by-step guidance', 'Progress tracking', 'Smart defaults', 'Plain language'],
    },
    {
        title: 'Smart template builder',
        description: 'The template builder lets businesses design their own smart contracts. Teams create dynamic templates with conditional logic, automated calculations and customisable fields that adapt to user input. The builder supports complex if-else scenarios, so a contract can adjust its content and requirements to specific conditions while keeping its legal validity.',
        tags: ['Conditional logic', 'Dynamic fields', 'Custom calculations', 'Template library', 'Version control'],
    },
    {
        title: 'Instant contract access',
        description: 'Accessing a contract is as easy as creating one. Each digitally signed contract is recorded on the blockchain, creating an immutable record that cannot be tampered with. Anyone can retrieve it by scanning its QR code, which pulls the verified document straight from the blockchain. Together with a full audit log, it makes contract management transparent and secure.',
        image: aspect2,
        imageAlt: 'Contract signing and blockchain verification screens',
        tags: ['QR code access', 'Blockchain storage', 'Digital signatures', 'Audit logging', 'Instant retrieval'],
    },
];

const solutions = [
    {
        title: 'Friendly user experience',
        points: [
            'Conversational guidance through contract creation',
            'Visual contract builder in plain language',
            'Simple mobile signing process',
            'Organised document dashboard',
        ],
    },
    {
        title: 'Smart workflow tools',
        points: [
            'Simple entry of contract details',
            'Collaborative review process',
            'Automated reminders and tracking',
            'Quick duplicate and modify options',
        ],
    },
    {
        title: 'Trust and security',
        points: ['Clear audit history', 'Contract recorded on the blockchain', 'Valid digital signature'],
    },
];

const results = [
    { value: '80+%', label: 'Of users completed their contract in one session' },
    { value: '4.8/5', label: 'Average user satisfaction rating' },
    { value: '15min', label: 'Average time to create and send a contract' },
];

const Everprove = () => (
    <main>
        <CaseHero
            project={project}
            title="Making legal contracts *simple* and accessible"
            intro="A digital platform that helps people and small businesses handle contracts without the headaches."
            meta={[{ label: 'Scope', value: 'Contract creation flow, template builder, blockchain verification' }]}
            aspect="aspect-[4/3] md:aspect-[16/10]"
        />

        <CaseSection index="01" label="Overview">
            <Lead>
                Legal contracts shouldn&apos;t be intimidating. Everprove makes creating and managing them
                straightforward, whether you&apos;re renting out an apartment or handling client agreements.
            </Lead>
            <Prose>
                <p>
                    The focus was a clean, intuitive experience that guides users through each step while keeping
                    the legal validity they need.
                </p>
            </Prose>
            <StatRow stats={overviewStats} />
        </CaseSection>

        <CaseSection index="02" label="Challenge" title="People avoid contracts because they feel *complex* and costly">
            <Prose>
                <p>Through user research, I identified several key pain points in how people deal with contracts.</p>
            </Prose>
            <NumberedList items={challenges} />
        </CaseSection>

        <CaseSection index="03" label="The work" title="Creating, building and *verifying* contracts" wide>
            <AspectList items={aspects} />
        </CaseSection>

        <CaseSection index="04" label="Solution" title="Simple to use, safe to *rely* on" wide dark>
            <FeatureColumns groups={solutions} />
        </CaseSection>

        <CaseSection index="05" label="Results">
            <StatRow stats={results} />
        </CaseSection>

        <NextProject currentId={project.id} />
    </main>
);

export default Everprove;
