import { caseStudies } from '../../data/projects';
import { CaseHero, CaseSection, Lead, Prose, NumberedList, AspectList, StatRow, NextProject } from '../../components/case';
import aspect1 from '../../assets/projects/everprove-aspect-01.jpg';
import aspect2 from '../../assets/projects/everprove-aspect-02.jpg';

const project = caseStudies.find((p) => p.id === 'everprove');

const challenges = [
    'People often avoid proper contracts because of legal complexity and cost.',
    'Small businesses struggle to keep contracts consistent, and finding and customising the right template takes time.',
    'Digital signing tools feel corporate and intimidating.',
    'Users worry about the legal validity of online contracts.',
];

const aspects = [
    {
        title: 'Simple contract creation flow',
        description: 'Research with small business owners and individuals led me to a guided flow that feels more like a conversation than a legal form. The interface breaks complex requirements into simple questions and translates the answers into proper legal language behind the scenes.',
        image: aspect1,
        imageAlt: "Everprove's guided contract creation flow",
        tags: ['Conversational UI', 'Step-by-step guidance', 'Progress tracking', 'Smart defaults', 'Plain language'],
    },
    {
        title: 'Smart template builder',
        description: 'The template builder lets businesses design their own smart contracts. Teams create dynamic templates with conditional logic, automated calculations and customisable fields that adapt to user input, so a contract can adjust its content to specific conditions while staying legally valid.',
        tags: ['Conditional logic', 'Dynamic fields', 'Custom calculations', 'Template library', 'Version control'],
    },
    {
        title: 'Instant contract access',
        description: 'Each digitally signed contract is recorded on the blockchain, so the record cannot be tampered with. Anyone can retrieve it by scanning its QR code, which pulls the verified document straight from the blockchain. A full audit log keeps the history clear.',
        image: aspect2,
        imageAlt: 'Contract signing and blockchain verification screens',
        tags: ['QR code access', 'Blockchain storage', 'Digital signatures', 'Audit logging', 'Instant retrieval'],
    },
];

const results = [
    { value: '85%', label: 'Faster completion' },
    { value: '50K+', label: 'Contracts created' },
];

const Everprove = () => (
    <main>
        <CaseHero
            project={project}
            title="Making legal contracts *simple* and accessible"
            intro="A digital platform for creating, signing and verifying contracts, built for people and small businesses."
            meta={[{ label: 'Scope', value: 'Contract creation flow, template builder, blockchain verification' }]}
            aspect="aspect-[4/3] md:aspect-[16/10]"
        />

        <CaseSection index="01" label="Overview">
            <Lead>
                Everprove makes creating and managing contracts straightforward, whether you&apos;re renting out an
                apartment or handling client agreements.
            </Lead>
            <Prose>
                <p>
                    I worked on product and UX design across the guided creation flow, the template builder and
                    blockchain verification. Around them sit a document dashboard, mobile signing, collaborative
                    review and automated reminders.
                </p>
            </Prose>
        </CaseSection>

        <CaseSection index="02" label="Challenge" title="People avoid contracts because they feel *complex* and costly">
            <NumberedList items={challenges} />
        </CaseSection>

        <CaseSection index="03" label="The work" title="Creating, building and *verifying* contracts" wide>
            <AspectList items={aspects} />
        </CaseSection>

        <CaseSection index="04" label="Results" dark>
            <StatRow stats={results} />
        </CaseSection>

        <NextProject currentId={project.id} />
    </main>
);

export default Everprove;
