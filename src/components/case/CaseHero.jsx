// <CaseHero> — top of every case study: breadcrumb, headline, intro, meta strip, cover.
//   project      entry from caseStudies (src/data/projects.js); supplies index, title, meta, cover
//   title        headline string; wrap accent words in *asterisks* for the serif italic
//   intro        short paragraph under the headline
//   meta         optional [{ label, value }]; replaces a default (Sector / Year / Role) with the
//                same label, or is appended. Aim for four items in total.
//   image, imageAlt   cover override (defaults to project.image)
//   aspect       cover aspect classes (default "aspect-[4/3] md:aspect-[16/9]")
import { useRef } from 'react';
import { motion, useReducedMotion, useScroll, useTransform } from 'framer-motion';
import { caseStudies } from '../../data/projects';
import { easeInOutQuart, easeOutExpo } from '../../lib/motion';
import { RevealText } from '../site/Reveal';
import useSectionNav from '../../hooks/useSectionNav';

const fadeUp = (delay) => ({
    initial: { opacity: 0, y: 16 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 1, ease: easeOutExpo, delay },
});

const CaseHero = ({ project, title, intro, meta = [], image, imageAlt, aspect = 'aspect-[4/3] md:aspect-[16/9]' }) => {
    const goTo = useSectionNav();
    const reduce = useReducedMotion();
    const coverRef = useRef(null);
    const { scrollYProgress } = useScroll({ target: coverRef, offset: ['start end', 'end start'] });
    const y = useTransform(scrollYProgress, [0, 1], ['-7%', '7%']);

    const index = String(caseStudies.findIndex((p) => p.id === project.id) + 1).padStart(2, '0');
    const defaults = [
        { label: 'Sector', value: project.sector },
        { label: 'Year', value: project.year },
        { label: 'Role', value: project.role },
    ];
    const items = [
        ...defaults.map((d) => meta.find((m) => m.label === d.label) || d),
        ...meta.filter((m) => !defaults.some((d) => d.label === m.label)),
    ];

    return (
        <header className="shell pt-32 md:pt-40">
            <motion.div className="label text-mute flex items-center justify-between gap-4" {...fadeUp(0.1)}>
                <p className="flex items-center gap-2">
                    <button onClick={() => goTo('work')} className="uppercase link-draw hover:text-ink transition-colors">Work</button>
                    <span aria-hidden="true">/</span>
                    <span className="text-ink">{index} — {project.title}</span>
                </p>
                <p className="hidden sm:flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-signal" aria-hidden="true" />
                    Case study
                </p>
            </motion.div>

            <div className="grid-12 mt-10 md:mt-16">
                <RevealText
                    as="h1"
                    immediate
                    delay={0.15}
                    className="col-span-4 md:col-span-11 text-display-l font-medium text-balance"
                >
                    {title}
                </RevealText>
                {intro && (
                    <motion.p
                        className="col-span-4 md:col-span-6 md:col-start-7 mt-10 md:mt-16 text-lead text-ink-2 text-pretty"
                        {...fadeUp(0.45)}
                    >
                        {intro}
                    </motion.p>
                )}
            </div>

            <motion.dl className="grid-12 gap-y-6 mt-16 md:mt-24 border-t border-line pt-5" {...fadeUp(0.6)}>
                {items.map((m) => (
                    <div key={m.label} className="col-span-2 md:col-span-3 pr-2">
                        <dt className="label text-mute">{m.label}</dt>
                        <dd className="mt-2.5 text-[0.95rem] leading-snug tracking-[-0.01em] text-pretty">{m.value}</dd>
                    </div>
                ))}
            </motion.dl>

            <motion.div
                ref={coverRef}
                className={`relative mt-10 md:mt-14 overflow-hidden rounded-[3px] bg-paper-2 ${aspect}`}
                initial={reduce ? false : { clipPath: 'inset(100% 0% 0% 0%)' }}
                animate={{ clipPath: 'inset(0% 0% 0% 0%)' }}
                transition={{ duration: 1.4, ease: easeInOutQuart, delay: 0.55 }}
            >
                <motion.div
                    className="absolute inset-x-0 -top-[8%] h-[116%]"
                    initial={{ scale: 1.15 }}
                    animate={{ scale: 1 }}
                    transition={{ duration: 2, ease: easeOutExpo, delay: 0.55 }}
                >
                    <motion.img
                        src={image || project.image}
                        alt={imageAlt || `${project.title} cover`}
                        fetchpriority="high"
                        className="w-full h-full object-cover"
                        style={reduce ? undefined : { y }}
                    />
                </motion.div>
            </motion.div>
        </header>
    );
};

export default CaseHero;
