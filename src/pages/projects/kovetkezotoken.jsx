import { useRef, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { caseStudies } from '../../data/projects';
import { easeOutExpo } from '../../lib/motion';
import { Reveal } from '../../components/site/Reveal';
import ArrowLink from '../../components/site/ArrowLink';
import { CaseHero, CaseSection, Lead, Prose, Figure, NextProject } from '../../components/case';

const demoImage = '/images/AIDocProcessor.jpg';
const project = caseStudies.find((p) => p.id === 'kovetkezotoken');

const personas = [
    {
        id: 'fundamentals',
        title: 'AI Fundamentals',
        audience: 'For all employees',
        description: 'A shared baseline for everyone: how AI works, where it fails and how to use it safely in daily work.',
        modules: [
            { title: 'Understanding AI logic and limitations' },
            { title: 'Effective prompt engineering' },
            { title: 'Tool selection strategy', desc: 'Choosing the right model for the task' },
            { title: 'Daily workflow integration' },
        ],
    },
    {
        id: 'executive',
        title: 'Executive Workshop',
        audience: 'For top management',
        description: 'For leadership: where AI creates value, how to govern it and how ready the organisation is.',
        modules: [
            { title: 'Strategic vision and ROI analysis', desc: 'Tying AI initiatives to business goals' },
            { title: 'Risk, governance and data privacy' },
            { title: 'Organisational readiness assessment', desc: 'Finding the gaps before scaling' },
            { title: 'Change management strategy', desc: 'Leading the cultural shift' },
        ],
    },
    {
        id: 'management',
        title: 'AI in Practice',
        audience: 'For middle management',
        description: 'For managers who turn strategy into practice: reworking workflows, leading AI-augmented teams and measuring the result.',
        modules: [
            { title: 'Advanced iterative prompting', desc: 'From single queries to multi-step problem solving' },
            { title: 'Workflow re-engineering' },
            { title: 'AI-augmented leadership', desc: 'Leading teams where AI handles execution' },
            { title: 'Defining AI KPIs', desc: 'Measuring what adoption actually changes' },
        ],
    },
    {
        id: 'professional',
        title: 'Professional Applications',
        audience: 'For functional teams',
        description: 'Deep-dives for functions such as HR, Marketing or Finance, built around their own daily tasks and tools.',
        modules: [
            { title: 'Domain-specific tool stacks' },
            { title: 'Automating routine tasks' },
            { title: 'Building custom prompt libraries', desc: 'Turning workflows that work into shared assets' },
            { title: 'Real-world project workshops', desc: 'Working on your own current challenges' },
        ],
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
                        <p className="label text-mute">{persona.audience}</p>
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

const KovetkezoToken = () => (
    <main>
        <CaseHero
            project={project}
            title="Training and *automation* for companies"
            intro="My AI consultancy. I teach teams to use AI well and build the automations that put it to work in their daily operations."
        />

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

        <CaseSection index="02" label="Training" title="A programme for each *audience*" wide>
            <Personas />
        </CaseSection>

        <CaseSection index="03" label="Applied work" title="Legal document *automation*">
            <Lead>For a legal firm, I built a system that turns raw identity documents into a finished contract.</Lead>
            <Rows items={legalSteps} />
            <Figure
                src={demoImage}
                alt="Screens of the live document processing demo: a contract analysis step, the start page with three workflows and a party details form"
                fig="01"
                caption="The live demo"
            />
            <ArrowLink href="https://ai-document-processing-rho.vercel.app/" target="_blank" rel="noreferrer" className="self-start text-[1.0625rem] font-medium">
                View live demo
            </ArrowLink>
        </CaseSection>

        <NextProject currentId={project.id} />
    </main>
);

export default KovetkezoToken;
