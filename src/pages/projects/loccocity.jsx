import { caseStudies } from '../../data/projects';
import { CaseHero, CaseNav, Summary, CaseSection, Lead, Prose, NumberedList, AspectList, FeatureColumns, StatRow, FactList, NextProject } from '../../components/case';
import aspect1 from '../../assets/projects/locco-aspect-01.jpg';

const project = caseStudies.find((p) => p.id === 'loccocity');

const summary = [
    {
        label: 'Challenge',
        text: 'Advertising rarely gets people through the door of a local shop, and loyalty schemes give them little reason to come back.',
    },
    {
        label: 'What I did',
        text: 'As one of two designers, working with six developers, I worked on both sides of the platform: the player app on iOS and Android, and the dashboard merchants use to run their rewards.',
    },
    {
        label: 'Outcome',
        text: 'More than 10,000 active players and over 100 partnered local businesses.',
    },
];

const challenges = [
    'Traditional advertising struggles to bring people through the door of local businesses.',
    'Digital and physical retail experiences remain disconnected.',
    'Young consumers look for gamified experiences in everyday activities.',
    'Customer loyalty programmes lack engaging elements.',
];

const aspects = [
    {
        title: 'Exploration & discovery',
        description: 'A dynamic map reveals nearby rewards and points of interest. It mixes fixed locations with rewards that spawn at random, which keeps exploration unpredictable and encourages players to explore new areas of their city. Players pick their interests first, and coupons activate when they get close.',
        image: aspect1,
        imageAlt: 'The player app: map, interests, coupon and redemption screens',
        tags: ['Location services', 'Random spawns', 'Interest filters', 'Proximity coupons'],
    },
    {
        title: 'Merchant dashboard',
        description: 'Businesses control their presence in the game: they create and manage rewards, schedule promotions, set reward parameters, and track foot traffic and how players respond to their offers.',
        tags: ['Reward management', 'Campaign scheduling', 'Traffic insights', 'Performance metrics'],
    },
];

const loop = [
    {
        title: 'Players',
        points: ['Location-based reward discovery', 'Rewards tailored to their interests', 'Achievement-based progression', 'Real-time reward availability'],
    },
    {
        title: 'At the counter',
        points: ['Proximity-based coupon activation', 'Show the code to the cashier before the timer runs out', 'Brand partnership integration'],
    },
    {
        title: 'Merchants',
        points: ['Create and schedule rewards', 'Set reward parameters', 'Track foot traffic and engagement'],
    },
];

const results = [
    { value: '10,000+', label: 'Active players' },
    { value: '100+', label: 'Partnered local businesses' },
];

const facts = [
    { label: 'My role', value: 'Product designer' },
    { label: 'Team', value: '2 designers, 6 developers' },
    { label: 'Duration', value: '6 months' },
    { label: 'Platforms', value: 'iOS and Android apps, merchant dashboard' },
];

const LoccoCity = () => (
    <main>
        <CaseHero
            project={project}
            title="Gamifying *urban* discovery"
            intro="A location-based treasure hunt that turns shopping streets into a game board and local businesses into the destinations, rewarding players with real-world coupons."
            meta={[{ label: 'Team', value: '2 designers, 6 developers' }]}
            aspect="aspect-[4/3] md:aspect-[16/10]"
        />

        <Summary items={summary} />

        <CaseSection index="01" label="Context">
            <Lead>
                Much like Pokémon GO did for gaming, Locco City gets people out exploring their city, but the
                treasure is <strong>real-world rewards</strong> from local businesses.
            </Lead>
            <Prose>
                <p>
                    For players it&apos;s a game. For merchants it&apos;s a way to turn online attention into people
                    walking through the door. The product has to work for both sides at once: a player discovers a
                    reward, walks there and redeems it at the counter, and the merchant sees the visit and plans the
                    next offer.
                </p>
            </Prose>
        </CaseSection>

        <CaseSection index="02" label="Challenge" title="Online engagement rarely turns into *real-world* action">
            <NumberedList items={challenges} />
        </CaseSection>

        <CaseSection index="03" label="The loop" title="One game, three *moments*" wide>
            <FeatureColumns groups={loop} />
        </CaseSection>

        <CaseSection index="04" label="The work" title="A map for players, a dashboard for *merchants*" wide>
            <AspectList items={aspects} />
        </CaseSection>

        <CaseSection index="05" label="Outcome" dark>
            <StatRow stats={results} />
            <FactList items={facts} />
        </CaseSection>

        <NextProject currentId={project.id} />
        <CaseNav />
    </main>
);

export default LoccoCity;
