import { caseStudies } from '../../data/projects';
import { CaseHero, CaseSection, Lead, Prose, NumberedList, AspectList, FeatureColumns, StatRow, NextProject } from '../../components/case';
import aspect1 from '../../assets/projects/locco-aspect-01.jpg';

const project = caseStudies.find((p) => p.id === 'loccocity');

const challenges = [
    'Traditional advertising struggles to drive physical foot traffic.',
    'Local businesses need innovative ways to attract customers.',
    'Digital and physical retail experiences remain disconnected.',
    'Young consumers seek gamified experiences in everyday activities.',
    'Customer loyalty programmes lack engaging elements.',
];

const aspects = [
    {
        title: 'Exploration & discovery system',
        description: 'We designed an urban exploration system that makes discovering your city feel like an adventure. Using location-based technology, we built a dynamic map that reveals nearby rewards and points of interest. The app combines fixed locations with randomly spawning rewards, keeping exploration unpredictable and nudging players towards new areas of their city.',
        image: aspect1,
        imageAlt: "Locco City's interactive map and discovery interface",
        tags: ['Dynamic mapping', 'Location services', 'Real-time updates', 'Discovery zones', 'Local exploration'],
    },
    {
        title: 'Merchant dashboard',
        description: 'We developed a powerful yet simple dashboard that gives merchants full control over their presence in the game. Businesses can create and manage rewards, track foot traffic and analyse customer engagement. The interface includes tools for scheduling promotions, setting reward parameters and viewing real-time analytics on how players interact with their offers.',
        // No merchant dashboard screenshot exists yet, so this block is text-only
        tags: ['Analytics dashboard', 'Reward management', 'Traffic insights', 'Campaign planning', 'Performance metrics'],
    },
];

const solutions = [
    {
        title: 'Gamified urban exploration',
        points: [
            'Location-based reward discovery',
            'Tailored rewards for each user',
            'Achievement-based progression',
            'Real-time reward availability',
        ],
    },
    {
        title: 'Seamless reward experience',
        points: [
            'Proximity-based coupon activation',
            'Easy redemption process',
            'Brand partnership integration',
        ],
    },
];

const results = [
    { value: '10,000+', label: 'Active users exploring cities' },
    { value: '100+', label: 'Partnered local businesses' },
];

const LoccoCity = () => (
    <main>
        <CaseHero
            project={project}
            title="Gamifying *urban* discovery"
            intro="A location-based platform that turns city exploration into a treasure hunt, connecting adventurous players with local businesses through real-world rewards."
            meta={[{ label: 'Scope', value: 'Player map and discovery, merchant dashboard' }]}
            aspect="aspect-[4/3] md:aspect-[16/10]"
        />

        <CaseSection index="01" label="Overview">
            <Lead>
                Locco City blends physical exploration with digital rewards, so shopping streets become a game board
                and local businesses become the destinations.
            </Lead>
            <Prose>
                <p>
                    Much like Pokémon GO&apos;s approach to gaming, the platform encourages people to explore their city
                    while collecting <strong>real-world rewards</strong> from their favourite brands.
                </p>
            </Prose>
        </CaseSection>

        <CaseSection index="02" label="Challenge" title="Online engagement rarely turns into *real-world* action">
            <NumberedList items={challenges} />
        </CaseSection>

        <CaseSection index="03" label="The work" title="One map for players, one dashboard for *merchants*" wide>
            <AspectList items={aspects} />
        </CaseSection>

        <CaseSection index="04" label="Solution" title="Two sides of one *adventure*" wide dark>
            <FeatureColumns groups={solutions} />
        </CaseSection>

        <CaseSection index="05" label="Results">
            <StatRow stats={results} />
        </CaseSection>

        <NextProject currentId={project.id} />
    </main>
);

export default LoccoCity;
