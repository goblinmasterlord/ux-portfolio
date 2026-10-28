import { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { motion, useScroll, useTransform } from 'framer-motion';
import { caseStudies } from '../../data/projects';
import { scrollToTarget } from '../../lib/scroll';
import { easeOutExpo } from '../../lib/motion';
import SectionLabel from '../site/SectionLabel';
import { RevealText } from '../site/Reveal';

const pad = (n) => String(n + 1).padStart(2, '0');

const ProjectImage = ({ project }) => {
    const ref = useRef(null);
    const { scrollYProgress } = useScroll({ target: ref, offset: ['start end', 'end start'] });
    const y = useTransform(scrollYProgress, [0, 1], ['-6%', '6%']);

    return (
        <Link
            ref={ref}
            to={project.path}
            data-cursor="View case study"
            className="group block relative aspect-[16/11] overflow-hidden rounded-[3px] bg-paper-2"
        >
            <motion.div
                className="absolute inset-0"
                initial={{ clipPath: 'inset(12% 12% 12% 12%)' }}
                whileInView={{ clipPath: 'inset(0% 0% 0% 0%)' }}
                viewport={{ once: true, amount: 0.25 }}
                transition={{ duration: 1.3, ease: easeOutExpo }}
            >
                <motion.img
                    src={project.image}
                    alt={`${project.title} case study`}
                    loading="lazy"
                    style={{ y }}
                    className="absolute inset-0 w-full h-[115%] -top-[7.5%] object-cover transition-transform duration-[1.2s] ease-expo group-hover:scale-[1.035]"
                />
            </motion.div>
        </Link>
    );
};

const ProjectEntry = ({ project, index, onActive }) => {
    const ref = useRef(null);

    useEffect(() => {
        const el = ref.current;
        // "active" = the entry crossing the middle band of the viewport
        const io = new IntersectionObserver(([e]) => e.isIntersecting && onActive(index), { rootMargin: '-45% 0px -45% 0px' });
        io.observe(el);
        return () => io.disconnect();
    }, [index, onActive]);

    return (
        <article ref={ref} id={`work-${project.id}`} className="scroll-mt-28">
            <ProjectImage project={project} />
            <div className="grid grid-cols-4 md:grid-cols-8 gap-x-[clamp(1rem,1.6vw,1.5rem)] gap-y-4 mt-5 md:mt-6">
                <div className="col-span-4 md:col-span-4">
                    <p className="label text-mute mb-3"><span className="text-ink">{pad(index)}</span> · {project.sector}</p>
                    <h3 className="text-display-s font-medium">
                        <Link to={project.path} className="link-draw">{project.title}</Link>
                    </h3>
                </div>
                <p className="col-span-4 md:col-span-4 text-[0.98rem] leading-relaxed text-ink-2 text-pretty md:pt-6">
                    {project.summary}
                </p>
                <div className="col-span-4 md:col-span-8 flex flex-wrap items-baseline justify-between gap-3 border-t border-line pt-3 label text-mute">
                    <span>{project.role}</span>
                    <span>
                        <span className="text-ink">{project.stat.value}</span> {project.stat.label} · {project.year}
                    </span>
                </div>
            </div>
        </article>
    );
};

const WorkIndex = () => {
    const [active, setActive] = useState(0);

    return (
        <section id="work" className="shell pt-section scroll-mt-0">
            <div className="grid-12 gap-y-8 border-t border-line pt-6 mb-16 md:mb-24">
                <div className="col-span-4 md:col-span-3">
                    <SectionLabel index="02">Selected work</SectionLabel>
                </div>
                <RevealText className="col-span-4 md:col-span-9 text-display-l font-medium text-balance">
                    Five projects, one *question:* does it actually help?
                </RevealText>
            </div>

            <div className="grid-12">
                {/* Sticky index (desktop) */}
                <aside className="hidden lg:block lg:col-span-3">
                    <div className="sticky top-28">
                        <ol className="border-t border-line">
                            {caseStudies.map((p, i) => (
                                <li key={p.id}>
                                    <button
                                        onClick={() => scrollToTarget(`#work-${p.id}`, { offset: -110 })}
                                        className={`w-full flex items-baseline gap-4 py-3 border-b border-line text-left transition-colors duration-500 ${
                                            active === i ? 'text-ink' : 'text-mute hover:text-ink'
                                        }`}
                                        aria-current={active === i ? 'true' : undefined}
                                    >
                                        <span className="font-mono text-[0.72rem] w-6">{pad(i)}</span>
                                        <span className="text-[1.05rem] font-medium tracking-[-0.02em] flex-1">{p.title}</span>
                                        <span
                                            className={`w-1.5 h-1.5 rounded-full bg-signal transition-transform duration-500 ease-expo ${
                                                active === i ? 'scale-100' : 'scale-0'
                                            }`}
                                        />
                                    </button>
                                </li>
                            ))}
                        </ol>
                        <div className="mt-6 flex items-center gap-3 label text-mute">
                            <span className="tabular text-ink">{pad(active)}</span>
                            <span className="relative h-px flex-1 bg-line overflow-hidden">
                                <span
                                    className="absolute inset-y-0 left-0 bg-ink transition-[width] duration-700 ease-expo"
                                    style={{ width: `${((active + 1) / caseStudies.length) * 100}%` }}
                                />
                            </span>
                            <span className="tabular">{pad(caseStudies.length - 1)}</span>
                        </div>
                    </div>
                </aside>

                <div className="col-span-4 md:col-span-12 lg:col-span-8 lg:col-start-5 flex flex-col gap-24 md:gap-40">
                    {caseStudies.map((p, i) => (
                        <ProjectEntry key={p.id} project={p} index={i} onActive={setActive} />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default WorkIndex;
