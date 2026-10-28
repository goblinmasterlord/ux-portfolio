import SectionLabel from '../site/SectionLabel';
import { Reveal, RevealText } from '../site/Reveal';

const services = [
    {
        title: 'Product strategy',
        body: 'From a fuzzy idea to a roadmap a team can commit to: discovery, user research, positioning and the metrics that show it works.',
        items: ['Discovery sprints', 'User research', 'Roadmaps', 'KPI frameworks'],
    },
    {
        title: 'AI implementation',
        body: 'Choosing the right models, engineering prompts and building the agentic workflows that keep AI dependable in production.',
        items: ['Model selection', 'Prompt engineering', 'Agentic workflows', 'Rapid prototypes'],
    },
    {
        title: 'UX & interface design',
        body: 'Flows, systems and interfaces for complex products, from fintech dashboards and KYC onboarding to mobile and POS.',
        items: ['UX architecture', 'Design systems', 'Usability testing', 'Frontend builds'],
    },
    {
        title: 'Training & enablement',
        body: 'Workshops for every level of a company, from executive strategy sessions to hands-on training for functional teams.',
        items: ['Executive workshops', 'Team training', 'Prompt libraries', 'Change management'],
    },
];

// Rows fill with ink from the bottom on hover (desktop); content is always visible.
const Services = () => (
    <section id="services" className="shell pt-section">
        <div className="grid-12 gap-y-8 border-t border-line pt-6 mb-16 md:mb-24">
            <div className="col-span-4 md:col-span-3">
                <SectionLabel index="03">Services</SectionLabel>
            </div>
            <RevealText className="col-span-4 md:col-span-9 text-display-l font-medium text-balance">
                Strategy, design and *engineering,* in one head.
            </RevealText>
        </div>

        <ol className="border-t border-line">
            {services.map((s, i) => (
                <Reveal as="li" key={s.title} delay={i * 0.06} className="group relative border-b border-line">
                    <span
                        aria-hidden="true"
                        className="absolute inset-0 bg-ink origin-bottom scale-y-0 transition-transform duration-700 ease-expo md:group-hover:scale-y-100"
                    />
                    <div className="relative grid-12 gap-y-4 py-8 md:py-10 transition-colors duration-500 md:group-hover:text-paper">
                        <span className="col-span-4 md:col-span-1 font-mono text-[0.75rem] pt-2 md:pl-3">0{i + 1}</span>
                        <h3 className="col-span-4 md:col-span-4 lg:col-span-3 md:col-start-2 lg:col-start-4 text-display-s font-medium transition-transform duration-700 ease-expo md:group-hover:translate-x-3">
                            {s.title}
                        </h3>
                        <p className="col-span-4 md:col-span-4 text-[0.98rem] leading-relaxed text-ink-2 md:group-hover:text-paper/75 transition-colors duration-500 text-pretty">
                            {s.body}
                        </p>
                        <ul className="col-span-4 md:col-span-3 lg:col-span-2 flex flex-wrap md:flex-col gap-x-4 gap-y-1.5 label text-mute md:group-hover:text-paper/60 transition-colors duration-500 md:pt-1.5 leading-[1.5]">
                            {s.items.map((item) => (
                                <li key={item}>{item}</li>
                            ))}
                        </ul>
                    </div>
                </Reveal>
            ))}
        </ol>
    </section>
);

export default Services;
