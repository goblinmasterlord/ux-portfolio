import { useRef, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { caseStudies } from '../../data/projects';
import { easeOutExpo } from '../../lib/motion';
import { Reveal } from '../../components/site/Reveal';
import ArrowLink from '../../components/site/ArrowLink';
import { CaseHero, CaseNav, Summary, CaseSection, Lead, Prose, NumberedList, FeatureColumns, Figure, NextProject } from '../../components/case';
import onePagers from '../../assets/projects/kovetkezotoken-onepagers.jpg';

const demoImage = '/images/AIDocProcessor.jpg';
const project = caseStudies.find((p) => p.id === 'kovetkezotoken');

const personas = [
    {
        id: 'intro',
        title: 'Introductory workshop',
        audience: 'All staff, any experience',
        duration: '60 minutes',
        description: 'A shared starting point for a whole company: what changed, how the models work and where they fail, and how to start using them safely the same week.',
        modules: [
            { title: 'Why now', desc: 'How quickly capabilities have improved, with examples companies already use' },
            { title: 'How AI works, plainly', desc: 'Language models, prompts, context windows, and why they sometimes make things up' },
            { title: 'Talking to AI', desc: 'A five-part recipe for a good prompt, then iterating on the answer' },
            { title: 'Where to start', desc: 'Six core capabilities, and a “kill list” of two or three repetitive tasks to hand over first' },
            { title: 'Data protection', desc: 'What can be shared with which tools, and how company and public tools differ' },
        ],
    },
    {
        id: 'executive',
        title: 'Executive workshop',
        audience: 'Leaders and decision makers',
        duration: '1.5 to 3 hours',
        description: 'For leaders who need to decide where AI creates value, what it needs from the organisation and how to measure it. No technical background needed.',
        modules: [
            { title: 'A leader’s mental model', desc: 'AI as a tool rather than magic, model tiers, and a portfolio view of capabilities' },
            { title: 'Use cases and focus', desc: 'Finding three to five focus areas, quick wins, and the build-or-buy decision' },
            { title: 'Readiness', desc: 'Data quality, security and GDPR, and who owns AI decisions' },
            { title: 'Change and measurement', desc: 'New ways of working, bringing the team along, and the KPIs that show impact' },
        ],
    },
    {
        id: 'functional',
        title: 'Skills programme for functional leaders',
        audience: 'Functional leaders and specialists',
        duration: '3 to 5 hours',
        description: 'A step-by-step programme where each module builds on the last, ending in templates and workflows a team can use the next day.',
        modules: [
            { title: 'Foundations', desc: 'How models work, how to talk to them, and what to expect of them' },
            { title: 'Effective use', desc: 'Building prompts, checking output for typical errors, iterating' },
            { title: 'Choosing the work', desc: 'Matching tasks to AI with an impact and effort matrix' },
            { title: 'Into the workflow', desc: 'Custom solutions, templates and responsible use across the team' },
            { title: 'Domain deep-dives', desc: 'HR, marketing, finance, sales and technical teams' },
        ],
    },
    {
        id: 'individual',
        title: 'From basics to confident use',
        audience: 'Specialists, creatives and analysts',
        duration: '2 to 3 hours',
        description: 'For individuals who want more than better prompts: a way of thinking that makes AI a real partner in their own work.',
        modules: [
            { title: 'How models think', desc: 'Tokens, context windows and temperature, and what they mean in practice' },
            { title: 'Advanced conversation', desc: 'Multi-step tasks, chain-of-thought and iterative refinement' },
            { title: 'Building your own tools', desc: 'AI-driven workflows, small personal apps and assistants' },
            { title: 'Agents and next skills', desc: 'What agents can do, and building a personal prompt library' },
        ],
    },
];

const challenges = [
    'Too many tools, and no clear view of which ones are worth using.',
    'Uneven skills across the team, so everyone uses AI differently.',
    'Concerns about company data and the reliability of the output.',
    'Pilots that never make it into daily work, and no way to measure the value.',
];

const method = [
    {
        title: 'Practical before theoretical',
        points: ['Real examples from the client’s own industry', 'Exercises on current work, not toy tasks', 'Templates people take back to their desk'],
    },
    {
        title: 'Tools that outlast the session',
        points: ['The five-part prompt: role, context, task, format, constraints', 'A kill list of two or three repetitive tasks to hand over first', 'An impact and effort matrix for choosing what to automate'],
    },
    {
        title: 'Safety built in',
        points: ['Clear rules for what data goes where', 'A checklist for catching made-up answers', 'Human oversight where the stakes are high'],
    },
];

const legalSteps = [
    {
        title: 'Structured data extraction',
        desc: 'ID cards and address documents become validated JSON for the contract.',
    },
    {
        title: 'Intelligent templating',
        desc: 'Standard contracts are generated from legal templates and the extracted data.',
    },
    {
        title: 'Agentic drafting',
        desc: 'For custom requests, an agent checks the legal requirements are met and drafts a bespoke agreement.',
    },
];

const pad = (n) => String(n).padStart(2, '0');

// Numbered title/description rows between hairlines, in the same language as NumberedList. Description is optional.
const Rows = ({ items }) => (
    <ol className="border-b border-line">
        {items.map((it, i) => (
            <li
                key={it.title}
                className={`grid grid-cols-[2.75rem_1fr] lg:grid-cols-[3.5rem_minmax(0,2fr)_minmax(0,3fr)] gap-y-2 lg:gap-x-6 border-t border-line py-6 md:py-7`}
            >
                <span className="label tabular pt-1.5 text-mute">{pad(i + 1)}</span>
                <h3 className={`text-[clamp(1.15rem,1.45vw,1.4rem)] leading-[1.25] tracking-[-0.02em] font-medium text-balance ${it.desc ? '' : 'lg:col-span-2'}`}>{it.title}</h3>
                {it.desc && <p className="col-start-2 lg:col-start-3 text-[0.975rem] leading-[1.55] text-ink-2 text-pretty">{it.desc}</p>}
            </li>
        ))}
    </ol>
);

const Personas = () => {
    const [active, setActive] = useState(0);
    const tabs = useRef([]);
    const persona = personas[active];

    const onKeyDown = (e) => {
        const last = personas.length - 1;
        const keys = {
            ArrowRight: (active + 1) % personas.length,
            ArrowDown: (active + 1) % personas.length,
            ArrowLeft: (active + last) % personas.length,
            ArrowUp: (active + last) % personas.length,
            Home: 0,
            End: last,
        };
        if (!(e.key in keys)) return;
        e.preventDefault();
        setActive(keys[e.key]);
        tabs.current[keys[e.key]]?.focus();
    };

    return (
        <div className="grid-12 gap-y-10">
            <Reveal className="col-span-4 md:col-span-4">
                <div role="tablist" aria-label="Training audiences" onKeyDown={onKeyDown} className="grid grid-cols-2 gap-x-4 md:grid-cols-1 border-b border-line">
                    {personas.map((p, i) => {
                        const on = i === active;
                        return (
                            <button
                                key={p.id}
                                ref={(el) => (tabs.current[i] = el)}
                                id={`persona-tab-${p.id}`}
                                role="tab"
                                type="button"
                                aria-selected={on}
                                aria-controls="persona-panel"
                                tabIndex={on ? 0 : -1}
                                onClick={() => setActive(i)}
                                className={`relative flex flex-col items-start justify-start text-left border-t border-line py-5 md:py-6 transition-colors duration-500 ease-expo ${on ? 'text-ink' : 'text-mute hover:text-ink'}`}
                            >
                                {on && (
                                    <motion.span
                                        layoutId="persona-rule"
                                        aria-hidden="true"
                                        className="absolute inset-x-0 -top-px h-[2px] bg-ink"
                                        transition={{ duration: 0.6, ease: easeOutExpo }}
                                    />
                                )}
                                <span className="label tabular block">{pad(i + 1)}</span>
                                <span className="mt-4 md:mt-5 block text-[1.05rem] md:text-[1.25rem] leading-[1.15] tracking-[-0.02em] font-medium text-balance">{p.title}</span>
                                <span className="label mt-2.5 block !leading-[1.4] text-mute">{p.audience}</span>
                            </button>
                        );
                    })}
                </div>
            </Reveal>

            <div className="col-span-4 md:col-span-8 md:col-start-5">
                <AnimatePresence mode="wait" initial={false}>
                    <motion.div
                        key={persona.id}
                        id="persona-panel"
                        role="tabpanel"
                        aria-labelledby={`persona-tab-${persona.id}`}
                        tabIndex={0}
                        initial={{ opacity: 0, y: 14 }}
                        animate={{ opacity: 1, y: 0, transition: { duration: 0.6, ease: easeOutExpo } }}
                        exit={{ opacity: 0, y: -8, transition: { duration: 0.2 } }}
                        className="md:min-h-[34rem]"
                    >
                        <p className="label text-mute flex flex-wrap gap-x-3 gap-y-1">
                            <span>{persona.audience}</span>
                            <span aria-hidden="true">·</span>
                            <span className="text-ink">{persona.duration}</span>
                        </p>
                        <h3 className="mt-5 text-display-s font-medium text-balance">{persona.title}</h3>
                        <p className="mt-6 max-w-[58ch] text-[1.0625rem] leading-[1.65] text-ink-2 text-pretty">{persona.description}</p>
                        <p className="label text-mute mt-12 mb-5">Modules</p>
                        <Rows items={persona.modules} />
                    </motion.div>
                </AnimatePresence>
            </div>
        </div>
    );
};

const summary = [
    {
        label: 'Challenge',
        text: 'Companies feel pressure to use AI, but their teams have uneven skills, too many tools and real worries about data, and pilots rarely reach daily work.',
    },
    {
        label: 'What I do',
        text: 'I train people at every level, from all-staff introductions to executive workshops, and build the automations that put AI to work in their operations.',
    },
    {
        label: 'Scope',
        text: 'Four workshop formats, from a 60-minute introduction to a five-hour programme, and custom automations such as contract drafting for a legal firm.',
    },
];

const KovetkezoToken = () => (
    <main>
        <CaseHero
            project={project}
            title="Training and *automation* for companies"
            intro="My AI consultancy. I teach teams to use AI well and build the automations that put it to work in their daily operations."
            meta={[{ label: 'Formats', value: 'Workshops from 60 minutes to 5 hours, and custom builds' }]}
        />

        <Summary items={summary} />

        <CaseSection index="01" label="Overview">
            <Lead>Következő Token is my AI consultancy, which I have run since 2023.</Lead>
            <Prose>
                <p>
                    I do two things there: I train people at every level of a company, and I build the automations that
                    put AI to work in their operations. I start by working out where AI is useful for a company and
                    where it isn&apos;t, and because I build as well as teach, the training stays practical.
                </p>
            </Prose>
        </CaseSection>

        <CaseSection index="02" label="Challenge" title="Pressure to adopt, no clear *path*">
            <NumberedList items={challenges} />
        </CaseSection>

        <CaseSection index="03" label="Training" title="A programme for each *audience*" wide>
            <Personas />
            <Figure
                src={onePagers}
                alt="The four programme one-pagers, in Hungarian: introductory workshop, executive workshop, functional leaders programme and individual workshop"
                fig="01"
                caption="Each programme has a one-pager that lists its audience, length, the problems it addresses and every module (in Hungarian)."
                className="mt-20 md:mt-28"
            />
        </CaseSection>

        <CaseSection index="04" label="Method" title="Built to outlast the *session*" wide>
            <FeatureColumns groups={method} />
        </CaseSection>

        <CaseSection index="05" label="Applied work" title="Legal document *automation*">
            <Lead>For a legal firm, I built a system that turns raw identity documents into a finished contract.</Lead>
            <Rows items={legalSteps} />
            <Figure
                src={demoImage}
                alt="Screens of the live document processing demo: a contract analysis step, the start page with three workflows and a party details form"
                fig="02"
                caption="The live demo"
            />
            <ArrowLink href="https://ai-document-processing-rho.vercel.app/" target="_blank" rel="noreferrer" className="self-start text-[1.0625rem] font-medium">
                View live demo
            </ArrowLink>
        </CaseSection>

        <NextProject currentId={project.id} />
        <CaseNav />
    </main>
);

export default KovetkezoToken;
