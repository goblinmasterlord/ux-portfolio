import { useState } from 'react';
import { AnimatePresence, motion, useMotionValue, useSpring } from 'framer-motion';
import { labProjects } from '../../data/projects';
import { easeOutExpo } from '../../lib/motion';
import SectionLabel from '../site/SectionLabel';
import { Reveal, RevealText } from '../site/Reveal';

const linkLabel = (url) => (!url ? 'Private repo' : url.includes('github.com') ? 'GitHub ↗' : 'Live ↗');
const pad = (n) => String(n + 1).padStart(2, '0');

// Wraps a row in a link when the project has one; private repos render as plain rows.
const MaybeLink = ({ href, className, children, ...rest }) =>
    href ? (
        <a href={href} target="_blank" rel="noreferrer" className={className} {...rest}>
            {children}
        </a>
    ) : (
        <div className={className}>{children}</div>
    );

const Featured = ({ project }) => (
    <Reveal className="mb-16 md:mb-24">
        <MaybeLink href={project.link} className="group grid-12 gap-y-6 items-end" data-cursor={project.link ? 'Open ↗' : undefined}>
            <div className="col-span-4 md:col-span-8 aspect-[16/10] overflow-hidden rounded-[3px] bg-ink">
                <motion.img
                    src={project.image}
                    alt={`${project.title} screenshot`}
                    loading="lazy"
                    className="w-full h-full object-cover transition-transform duration-[1.4s] ease-expo group-hover:scale-[1.03]"
                    initial={{ scale: 1.12 }}
                    whileInView={{ scale: 1 }}
                    viewport={{ once: true, amount: 0.3 }}
                    transition={{ duration: 1.6, ease: easeOutExpo }}
                />
            </div>
            <div className="col-span-4 md:col-span-4 md:pb-2">
                <p className="label text-mute mb-4"><span className="text-ink">L.01</span> · Featured experiment · {project.year}</p>
                <h3 className="text-display-m font-medium">{project.title}</h3>
                <p className="mt-5 text-[1.02rem] leading-relaxed text-ink-2 text-pretty">{project.description}</p>
                <p className="mt-6 flex justify-between gap-4 border-t border-line pt-3 label text-mute">
                    <span>{project.stack.join(' · ')}</span>
                    <span className="whitespace-nowrap">{linkLabel(project.link)}</span>
                </p>
            </div>
        </MaybeLink>
    </Reveal>
);

// Index rows. On mouse/trackpad, rows with a screenshot show it trailing the pointer.
const Lab = () => {
    const [featured, ...rest] = labProjects;
    const [preview, setPreview] = useState(null);
    const x = useMotionValue(0);
    const y = useMotionValue(0);
    const sx = useSpring(x, { stiffness: 300, damping: 35, mass: 0.5 });
    const sy = useSpring(y, { stiffness: 300, damping: 35, mass: 0.5 });

    const onMove = (e) => {
        x.set(e.clientX);
        y.set(e.clientY);
    };

    return (
        <section id="lab" className="shell pt-section">
            <div className="grid-12 gap-y-8 border-t border-line pt-6 mb-16 md:mb-24">
                <div className="col-span-4 md:col-span-3">
                    <SectionLabel index="04">Lab</SectionLabel>
                </div>
                <div className="col-span-4 md:col-span-9 grid grid-cols-1 md:grid-cols-9 gap-y-6 items-end">
                    <RevealText className="md:col-span-6 text-display-l font-medium text-balance">
                        Things I build to *learn* faster.
                    </RevealText>
                    <Reveal as="p" delay={0.2} className="md:col-span-3 text-[0.98rem] leading-relaxed text-ink-2 text-pretty">
                        Side projects where I take an idea all the way: AI tools, a native app, games and generative audio.
                    </Reveal>
                </div>
            </div>

            <Featured project={featured} />

            <ol className="border-t border-line" onPointerMove={onMove} onPointerLeave={() => setPreview(null)}>
                {rest.map((p, i) => (
                    <Reveal as="li" key={p.title} delay={i * 0.04} className="border-b border-line">
                        <MaybeLink
                            href={p.link}
                            className="group grid-12 gap-y-2 py-5 md:py-6 items-baseline"
                            onPointerEnter={() => setPreview(p.image || null)}
                            data-cursor={p.link && !p.image ? linkLabel(p.link) : undefined}
                        >
                            <span className="col-span-1 font-mono text-[0.72rem] text-mute">L.{pad(i + 1)}</span>
                            <h3 className="col-span-3 md:col-span-3 text-[1.35rem] md:text-[1.6rem] font-medium tracking-[-0.03em] transition-transform duration-500 ease-expo group-hover:translate-x-2">
                                {p.title}
                            </h3>
                            <p className="col-span-4 md:col-span-4 text-[0.95rem] text-ink-2 leading-snug md:pr-6">{p.description}</p>
                            <p className="col-span-2 md:col-span-2 label text-mute">{p.stack.join(' · ')}</p>
                            <p className="col-span-2 md:col-span-2 label text-right whitespace-nowrap">
                                <span className="text-mute mr-3">{p.year}</span>
                                <span className={p.link ? 'text-ink group-hover:text-signal transition-colors' : 'text-mute'}>{linkLabel(p.link)}</span>
                            </p>
                        </MaybeLink>
                    </Reveal>
                ))}
            </ol>

            {/* Floating preview, desktop only */}
            <motion.div aria-hidden="true" className="hidden md:block fixed left-0 top-0 z-30 pointer-events-none" style={{ x: sx, y: sy }}>
                <AnimatePresence>
                    {preview && (
                        <motion.img
                            key={preview}
                            src={preview}
                            alt=""
                            className="absolute w-[22rem] max-w-none aspect-[16/10] object-cover rounded-[3px] shadow-[0_30px_60px_-20px_rgb(14_14_12/0.35)] left-8 -top-[6.875rem]"
                            initial={{ opacity: 0, scale: 0.92, rotate: -2 }}
                            animate={{ opacity: 1, scale: 1, rotate: 0 }}
                            exit={{ opacity: 0, scale: 0.96 }}
                            transition={{ duration: 0.35, ease: easeOutExpo }}
                        />
                    )}
                </AnimatePresence>
            </motion.div>
        </section>
    );
};

export default Lab;
