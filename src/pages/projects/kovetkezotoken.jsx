import { useRef, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { caseStudies } from '../../data/projects';
import { easeOutExpo } from '../../lib/motion';
import { Reveal } from '../../components/site/Reveal';
import ArrowLink from '../../components/site/ArrowLink';
import { CaseHero, CaseSection, Lead, Prose, StatRow, FeatureColumns, Figure, NextProject } from '../../components/case';

const demoImage = '/images/AIDocProcessor.jpg';
const project = caseStudies.find((p) => p.id === 'kovetkezotoken');

const approach = [
    {
        title: 'Identify strategic value',
        points: [
            'Distinguishing hype from utility',
            'Assessing technical feasibility',
            'Calculating ROI on AI features',
            'Risk and data sovereignty analysis',
        ],
    },
    {
        title: 'Engineer robust systems',
        points: [
            'Architecting agentic workflows',
            'Implementing reliable RAG pipelines',
            'Handling non-deterministic outputs',
            'Full-stack integration (Next.js + AI)',
        ],
    },
];

const personas = [
    {
        id: 'fundamentals',
        title: 'AI Fundamentals',
        audience: 'For all employees',
        description:
            "Designed to establish a solid baseline. I structured this module to demystify AI logic, ensuring every team member can move from 'magic' to 'utility' through safe and confident tool usage.",
        modules: [
            { title: 'Understanding AI logic and limitations', desc: 'Building a mental model of how LLMs work to understand their capabilities and inherent limitations.' },
            { title: 'Effective prompt engineering', desc: 'Mastering the art of communication with AI to consistently elicit high-quality, relevant responses.' },
            { title: 'Tool selection strategy', desc: 'Navigating the landscape of available models to choose the right tool for specific business tasks.' },
            { title: 'Daily workflow integration', desc: 'Identifying and integrating AI into routine processes to immediately boost personal productivity.' },
        ],
    },
    {
        id: 'executive',
        title: 'Executive Workshop',
        audience: 'For top management',
        description:
            'Focused on strategic vision. I facilitate workshops that help leadership identify high-impact value streams, establish governance frameworks and prepare the organisation for an AI-first culture.',
        modules: [
            { title: 'Strategic vision and ROI analysis', desc: 'Aligning AI initiatives with core business objectives to ensure measurable value creation.' },
            { title: 'Risk, governance and data privacy', desc: 'Establishing robust frameworks to manage data security, privacy and ethical considerations.' },
            { title: 'Organisational readiness assessment', desc: "Evaluating the organisation's cultural and technical maturity to identify gaps before scaling." },
            { title: 'Change management strategy', desc: 'Leading the cultural shift required to embrace AI as a partner rather than a threat.' },
        ],
    },
    {
        id: 'management',
        title: 'AI in Practice',
        audience: 'For middle management',
        description:
            'Bridging strategy and execution. I developed a methodology to teach managers how to re-engineer workflows, lead AI-augmented teams and measure the real impact of automation.',
        modules: [
            { title: 'Advanced iterative prompting', desc: 'Moving from simple queries to complex, iterative problem-solving workflows.' },
            { title: 'Workflow re-engineering', desc: 'Rethinking existing business processes to maximise the potential of human-AI collaboration.' },
            { title: 'AI-augmented leadership', desc: 'Adapting management styles to lead teams where AI handles execution and humans focus on strategy.' },
            { title: 'Defining AI KPIs', desc: 'Establishing clear metrics to track the real-world impact and efficiency gains of AI adoption.' },
        ],
    },
    {
        id: 'professional',
        title: 'Professional Applications',
        audience: 'For functional teams',
        description:
            'Domain-specific mastery. I create tailored deep-dives for HR, Marketing or Finance, focusing on the specific tools and automations that solve their actual daily challenges.',
        modules: [
            { title: 'Domain-specific tool stacks', desc: 'Identifying and implementing the most effective specialised tools for specific functional areas.' },
            { title: 'Automating routine tasks', desc: 'Streamlining repetitive operational tasks to free up time for high-value strategic work.' },
            { title: 'Building custom prompt libraries', desc: 'Systematising successful workflows into shared assets to drive consistency and quality.' },
            { title: 'Real-world project workshops', desc: 'Applying learned concepts directly to current business challenges for immediate impact.' },
        ],
    },
];

const stack = [
    {
        title: 'The Brains',
        kind: 'Models',
        summary: 'I select the right model for the right task, balancing cost, speed and reasoning capability.',
        items: [
            { name: 'Anthropic models', desc: 'Claude Opus 4.1, Sonnet 4.5 primarily for coding related tasks' },
            { name: 'OpenAI models', desc: 'GPT 5.1 and GPT 5 as the primary models for complex reasoning tasks' },
            { name: 'Google models', desc: 'Gemini 3, 2.5 Pro and 2.5 Flash as daily driver and for general tasks' },
        ],
    },
    {
        title: 'The Nervous System',
        kind: 'Orchestration',
        summary: 'Moving beyond rigid frameworks to build flexible, production-grade agentic systems.',
        items: [
            { name: 'Vercel AI SDK', desc: 'The engine for deployment and easy-to-use AI integration' },
            { name: 'n8n / Make', desc: 'Visual workflow automation for ease of use' },
            { name: 'Custom solutions', desc: 'For maximising customisability and scalability' },
        ],
    },
    {
        title: 'The Tools',
        kind: 'Environment',
        summary: 'A modern, robust development stack ensuring scalability and performance.',
        items: [
            { name: 'React / Next.js', desc: 'The industry standard frontend framework for building performant web applications' },
            { name: 'Supabase', desc: 'Scalable vector database and authentication solution for enterprise-grade security' },
            { name: 'Cursor', desc: 'AI-native IDE that accelerates development through intelligent code generation' },
        ],
    },
];

const agentPrinciples = [
    {
        title: 'Autonomous execution',
        desc: 'Moving beyond chat interfaces to systems that can independently perform multi-step tasks without constant human oversight.',
    },
    {
        title: 'Tool use and integration',
        desc: 'Empowering agents with the ability to browse the web, query databases and interact with your existing API infrastructure.',
    },
    {
        title: 'Strategic orchestration',
        desc: 'Designing the \u201cnervous system\u201d where specialised agents collaborate, handing off tasks from researcher to analyst to executor.',
    },
];

const legalSteps = [
    {
        title: 'Structured data extraction',
        desc: 'Processing raw ID cards and address documents to extract validated, structured JSON data for contract population.',
    },
    {
        title: 'Intelligent templating',
        desc: 'Dynamically generating standard contracts based on pre-defined legal templates and extracted entities.',
    },
    {
        title: 'Agentic drafting',
        desc: 'For custom requests, an agent analyses the context, verifies all necessary legal requirements are met and drafts a bespoke agreement.',
    },
];

const legalFlow = [
    { label: 'Input', value: 'Raw documents' },
    { label: 'Model', value: 'Gemini 2.5 Pro' },
    { label: 'Output', value: 'Valid contract' },
];

const solutions = [
    {
        title: 'Strategic clarity',
        points: ['Clear AI roadmap and ROI analysis', 'Vendor selection and risk assessment', 'Executive workshops and alignment'],
    },
    {
        title: 'Operational efficiency',
        points: ['Automating repetitive workflows', 'Custom GPTs for internal knowledge', 'Employee training and upskilling'],
    },
    {
        title: 'Technical implementation',
        points: ['RAG system architecture', 'Fine-tuning open source models', 'Production-grade API integration'],
    },
];

const facts = [
    { value: '500+', label: 'Professionals trained' },
    { value: '20+', label: 'Partner companies' },
    { value: '4', label: 'Tailored programmes, one per audience' },
];

const pad = (n) => String(n).padStart(2, '0');

// Numbered title/description rows between hairlines, in the same language as NumberedList.
const Rows = ({ items }) => (
    <ol className="border-b border-line">
        {items.map((it, i) => (
            <li
                key={it.title}
                className={`grid grid-cols-[2.75rem_1fr] lg:grid-cols-[3.5rem_minmax(0,2fr)_minmax(0,3fr)] gap-y-2 lg:gap-x-6 border-t border-line py-6 md:py-7`}
            >
                <span className="label tabular pt-1.5 text-mute">{pad(i + 1)}</span>
                <h3 className="text-[clamp(1.15rem,1.45vw,1.4rem)] leading-[1.25] tracking-[-0.02em] font-medium text-balance">{it.title}</h3>
                <p className="col-start-2 lg:col-start-3 text-[0.975rem] leading-[1.55] text-ink-2 text-pretty">{it.desc}</p>
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

// Three-column stack list for the dark section: index, name, summary, then name / description rows.
const StackColumns = ({ groups }) => (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-x-[clamp(1rem,1.6vw,1.5rem)] gap-y-14">
        {groups.map((g, i) => (
            <Reveal key={g.title} delay={i * 0.08} className="border-t border-paper/60 pt-5">
                <p className="label tabular text-paper/50">
                    {pad(i + 1)} <span aria-hidden="true">/</span> {g.kind}
                </p>
                <h3 className="mt-8 md:mt-12 text-[clamp(1.35rem,1.8vw,1.75rem)] leading-[1.15] tracking-[-0.025em] font-medium text-balance">{g.title}</h3>
                <p className="mt-4 text-[0.975rem] leading-snug text-paper/70 text-pretty max-w-[34ch]">{g.summary}</p>
                <dl className="mt-8 border-t border-line-inv">
                    {g.items.map((it) => (
                        <div key={it.name} className="border-b border-line-inv py-4">
                            <dt className="text-[1.0625rem] leading-snug tracking-[-0.01em] font-medium">{it.name}</dt>
                            <dd className="mt-1.5 text-[0.95rem] leading-snug text-paper/70 text-pretty">{it.desc}</dd>
                        </div>
                    ))}
                </dl>
            </Reveal>
        ))}
    </div>
);

// Input / model / output strip for the legal automation example.
const Flow = () => (
    <Reveal as="ol" className="grid grid-cols-1 sm:grid-cols-3 border-y border-line">
        {legalFlow.map((s, i) => (
            <li key={s.label} className={`py-5 sm:px-5 first:sm:pl-0 ${i > 0 ? 'border-t sm:border-t-0 sm:border-l border-line' : ''}`}>
                <p className="label tabular text-mute">
                    {pad(i + 1)} <span aria-hidden="true">/</span> {s.label}
                </p>
                <p className="mt-6 text-[clamp(1.15rem,1.5vw,1.45rem)] leading-[1.2] tracking-[-0.02em] font-medium">{s.value}</p>
            </li>
        ))}
    </Reveal>
);

const KovetkezoToken = () => (
    <main>
        <CaseHero
            project={project}
            title="Democratising *machine* intelligence"
            intro="My AI consultancy. I train teams from the boardroom to the front line and build the agentic workflows that make AI part of day-to-day operations."
            meta={[{ label: 'Focus', value: 'Team training, agentic workflows, AI integration' }]}
        />

        <CaseSection index="01" label="Overview">
            <Lead>
                I bridge the gap between theoretical AI research and practical business application, helping companies build their next breakthrough.
            </Lead>
            <Prose>
                <p>
                    Következő Token has been my own consultancy since 2023. The work splits in two: training people at
                    every level of an organisation, and building the agentic systems that put AI to work in daily operations.
                </p>
            </Prose>
            <StatRow stats={facts} />
        </CaseSection>

        <CaseSection index="02" label="Approach" title="Moving beyond the *hype* cycle">
            <Lead>While the market is flooded with &ldquo;AI wrappers&rdquo;, I focus on building robust, production-grade systems.</Lead>
            <Prose>
                <p>This project demonstrates my ability to:</p>
            </Prose>
            <FeatureColumns groups={approach} />
        </CaseSection>

        <CaseSection index="03" label="Curriculum" title="Tailored *knowledge* transfer" wide>
            <Personas />
        </CaseSection>

        <CaseSection index="04" label="Stack" title="The modern AI *stack*" wide dark>
            <div className="flex flex-col gap-16">
                <div className="grid-12">
                    <div className="col-span-4 md:col-span-8 md:col-start-5">
                        <Prose>
                            <p>
                                I don&apos;t just teach theory. I build with these tools every single day. This is the production-grade
                                stack I use to deploy real-world AI applications.
                            </p>
                        </Prose>
                    </div>
                </div>
                <StackColumns groups={stack} />
            </div>
        </CaseSection>

        <CaseSection index="05" label="Agents" title="The power of *agentic* workflows">
            <Lead>
                The true potential of AI isn&apos;t in single prompts, but in autonomous systems.
            </Lead>
            <Prose>
                <p>
                    I design intelligent agent architectures that can plan, execute and self-correct to solve complex business challenges.
                </p>
            </Prose>
            <Rows items={agentPrinciples} />
        </CaseSection>

        <CaseSection index="06" label="Applied work" title="Legal AI *automation* in practice">
            <Lead>
                For a legal firm, I engineered an intelligent document processing system that automates the entire contract lifecycle.
            </Lead>
            <Prose>
                <p>
                    I build specialised tools that solve expensive business problems. This one runs on <strong>Gemini 2.5 Pro</strong>.
                </p>
            </Prose>
            <Flow />
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

        <CaseSection index="07" label="Services" title="Engineered for *impact*" wide>
            <FeatureColumns groups={solutions} />
        </CaseSection>

        <NextProject currentId={project.id} />
    </main>
);

export default KovetkezoToken;
