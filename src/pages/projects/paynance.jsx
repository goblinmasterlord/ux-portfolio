import { caseStudies } from '../../data/projects';
import { CaseHero, CaseNav, Summary, CaseSection, Lead, Prose, NumberedList, Ledger, AspectList, StatRow, FactList, NextProject } from '../../components/case';
import aspect1 from '../../assets/projects/aspect-01.jpg';
import aspect2 from '../../assets/projects/aspect-02.jpg';
import aspect3 from '../../assets/projects/aspect-03.jpg';
import aspect4 from '../../assets/projects/aspect-04.jpg';

const project = caseStudies.find((p) => p.id === 'paynance');

const summary = [
    {
        label: 'Challenge',
        text: 'Merchants were stuck with rigid terminals, little visibility into their own money, and a compliance-heavy sign-up that delayed the day they could take a first payment.',
    },
    {
        label: 'What I did',
        text: 'As one of four product designers, I designed the merchant journey across four products: the landing page, KYC onboarding, the merchant dashboard and the mobile and POS app.',
    },
    {
        label: 'Outcome',
        text: 'Paynance processes more than 2.5 million transactions a month for over 1,000 onboarded merchants.',
    },
];

const challenges = [
    'Merchants need payment solutions that adapt to different business models, not one terminal for everyone.',
    'Traditional POS systems lack modern features such as easy tipping, multiple business profiles on one terminal and integrated cashier systems.',
    'Merchants have little visibility into their own financial data.',
    'Compliance requirements make onboarding slow, which delays merchant activation.',
];

const research = [
    ['Competitor analysis and user research', 'The direction of the landing page'],
    ['A/B tests of value propositions, layouts and calls to action', 'The final landing page'],
    ['Interviews with 30+ merchants', 'Which data the dashboard brings forward'],
    ['Several rounds of usability testing', 'A dashboard merchants of any technical level can run'],
    ['Regulatory requirements and merchant behaviour', 'The KYC onboarding flow'],
    ['Field research with merchants', 'One payment interface for mobile and POS'],
];

const aspects = [
    {
        title: 'Landing page',
        description: 'Competitor analysis and user research set the direction; A/B tests of value propositions, layouts and calls to action chose between the options. The final version pairs clear messaging with interactive demonstrations of the key features.',
        image: aspect1,
        imageAlt: 'Paynance landing page',
        tags: ['Competitor analysis', 'A/B testing', 'Visual design', 'Conversion'],
    },
    {
        title: 'Merchant platform',
        description: 'Interviews with more than 30 merchants showed what they looked for first. The dashboard brings that data forward and keeps everything else out of the way, refined over several rounds of usability testing so merchants of any technical level can run their operations.',
        image: aspect2,
        imageAlt: 'Merchant platform dashboard',
        tags: ['User interviews', 'Dashboard design', 'Usability testing'],
    },
    {
        title: 'Streamlined onboarding',
        description: 'Starting from the regulatory requirements and how merchants actually behave, I designed a verification flow that balances security with usability. Progressive disclosure and contextual guidance make the KYC steps approachable while the flow stays compliant.',
        image: aspect3,
        imageAlt: 'KYC onboarding flow',
        tags: ['KYC', 'Progressive disclosure', 'Error handling'],
    },
    {
        title: 'Mobile & POS app',
        description: 'Field research with merchants shaped one payment interface for both mobile devices and POS terminals. It handles split payments and refunds while staying simple enough for new staff to learn quickly.',
        image: aspect4,
        imageAlt: 'Mobile and POS application screens',
        tags: ['Field research', 'POS interface', 'Payment flows'],
    },
];

const results = [
    { value: '2.5M+', label: 'Transactions processed monthly' },
    { value: '1,000+', label: 'Merchants onboarded' },
];

const facts = [
    { label: 'My role', value: 'Product designer: research, UX and UI' },
    { label: 'Team', value: '4 designers, 12 developers' },
    { label: 'Duration', value: '12 months' },
    { label: 'Platforms', value: 'Web app, mobile app and POS terminals' },
];

const Paynance = () => (
    <main>
        <CaseHero
            project={project}
            title="Payments and business tools for *merchants*"
            intro="Paynance combines POS terminals, virtual POS, online payments and integrated cashier systems, so merchants can take payments the way their business works."
            meta={[{ label: 'Team', value: '4 designers, 12 developers' }]}
            aspect="aspect-[4/3] md:aspect-[16/10]"
        />

        <Summary items={summary} />

        <CaseSection index="01" label="Context">
            <Lead>
                Merchants take payments in very different ways, yet traditional POS systems give them all the same
                rigid terminal and little insight into their own numbers.
            </Lead>
            <Prose>
                <p>
                    Paynance set out to fit the payment to the business: easy tipping, recurring payments and
                    multiple business profiles on a single terminal, with online and in-person payments in one place.
                    I worked on the experience that ties those pieces together, from a merchant&apos;s first visit to
                    the site to the app their staff use at the counter.
                </p>
            </Prose>
        </CaseSection>

        <CaseSection index="02" label="Challenge" title="Rigid payments and opaque *finances*">
            <NumberedList items={challenges} />
        </CaseSection>

        <CaseSection index="03" label="Research" title="Research behind every *product*" wide>
            <Ledger columns={['Method', 'What it shaped']} rows={research} />
        </CaseSection>

        <CaseSection index="04" label="The work" title="Four products, one *merchant* journey" wide>
            <AspectList items={aspects} />
        </CaseSection>

        <CaseSection index="05" label="Outcome" title="Live at *scale*" dark>
            <StatRow stats={results} />
            <FactList items={facts} />
        </CaseSection>

        <NextProject currentId={project.id} />
        <CaseNav />
    </main>
);

export default Paynance;
