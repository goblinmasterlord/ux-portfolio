import { caseStudies } from '../../data/projects';
import { CaseHero, CaseSection, Lead, Prose, NumberedList, AspectList, StatRow, NextProject } from '../../components/case';
import aspect1 from '../../assets/projects/locco-aspect-01.jpg';

const project = caseStudies.find((p) => p.id === 'loccocity');

const challenges = [
    'Traditional advertising struggles to bring people through the door of local businesses.',
    'Digital and physical retail experiences remain disconnected.',
    'Young consumers look for gamified experiences in everyday activities.',
    'Customer loyalty programmes lack engaging elements.',
];

const aspects = [
    {
        title: 'Exploration & discovery system',
        description: 'We designed an exploration system around a dynamic map that reveals nearby rewards and points of interest. The app combines fixed locations with randomly spawning rewards, keeping exploration unpredictable and nudging players towards new areas of their city. Coupons activate by proximity and are easy to redeem.',
        image: aspect1,
        imageAlt: "Locco City's interactive map and discovery interface",
        tags: ['Dynamic mapping', 'Location services', 'Real-time updates', 'Discovery zones', 'Local exploration'],
    },
    {
        title: 'Merchant dashboard',
        description: 'The merchant dashboard gives businesses control over their presence in the game. They can create and manage rewards, track foot traffic and analyse engagement, schedule promotions, set reward parameters and see how players interact with their offers.',
        // No merchant dashboard screenshot exists yet, so this block is text-only
        tags: ['Analytics dashboard', 'Reward management', 'Traffic insights', 'Campaign planning', 'Performance metrics'],
    },
];

const results = [
    { value: '10,000+', label: 'Active players' },
    { value: '100+', label: 'Partnered local businesses' },
];

const LoccoCity = () => (
    <main>
        <CaseHero
            project={project}
            title="Gamifying *urban* discovery"
            intro="A location-based game that turns city exploration into a treasure hunt, connecting players with local businesses through real-world rewards."
            meta={[{ label: 'Scope', value: 'Player map and discovery, merchant dashboard' }]}
            aspect="aspect-[4/3] md:aspect-[16/10]"
        />

        <CaseSection index="01" label="Overview">
            <Lead>
                Locco City blends physical exploration with digital rewards, so shopping streets become a game board
                and local businesses become the destinations. Much like Pokémon GO&apos;s approach to gaming, it
                encourages people to explore their city while collecting <strong>real-world rewards</strong> from
                their favourite brands.
            </Lead>
            <Prose>
                <p>
                    I worked on product and UX across both sides of the platform: the player map and discovery
                    experience, and the merchant dashboard.
                </p>
            </Prose>
        </CaseSection>

        <CaseSection index="02" label="Challenge" title="Online engagement rarely turns into *real-world* action">
            <NumberedList items={challenges} />
        </CaseSection>

        <CaseSection index="03" label="The work" title="One map for players, one dashboard for *merchants*" wide>
            <AspectList items={aspects} />
        </CaseSection>

        <CaseSection index="04" label="Results" dark>
            <StatRow stats={results} />
        </CaseSection>

        <NextProject currentId={project.id} />
    </main>
);

export default LoccoCity;
