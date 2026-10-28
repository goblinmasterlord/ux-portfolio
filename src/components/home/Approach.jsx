import { useEffect, useRef, useState } from 'react';
import { motion, useInView, useReducedMotion, useScroll, useTransform } from 'framer-motion';
import SectionLabel from '../site/SectionLabel';
import { Reveal } from '../site/Reveal';

const STATEMENT =
    'Most AI projects stall somewhere between the demo and the daily routine. I work in that gap: researching what people actually need, prototyping with real models, and shipping interfaces that make intelligence feel *obvious.*';

// Only figures confirmed by the owner — don't add estimates here.
const stats = [
    { value: 2.5, decimals: 1, suffix: 'M+', label: 'Monthly transactions on Paynance' },
    { value: 1000, suffix: '+', label: 'Merchants onboarded at Paynance' },
    { value: 50, suffix: 'K+', label: 'Contracts created on Everprove' },
    { value: 10000, suffix: '+', label: 'Players exploring Locco City' },
];

// Each word brightens as the paragraph scrolls through the viewport.
const Word = ({ progress, range, children, accent }) => {
    const opacity = useTransform(progress, range, [0.14, 1]);
    return (
        <motion.span style={{ opacity }} className={accent ? 'serif-accent' : undefined}>
            {children}
        </motion.span>
    );
};

const ScrubStatement = () => {
    const ref = useRef(null);
    const { scrollYProgress } = useScroll({ target: ref, offset: ['start 0.85', 'end 0.5'] });
    const words = STATEMENT.split(' ');
    return (
        <p ref={ref} className="text-display-s font-medium text-balance" aria-label={STATEMENT.replace(/\*/g, '')}>
            {words.map((w, i) => (
                <span key={i} aria-hidden="true">
                    <Word progress={scrollYProgress} range={[i / words.length, (i + 1) / words.length]} accent={w.startsWith('*')}>
                        {w.replace(/\*/g, '')}
                    </Word>{' '}
                </span>
            ))}
        </p>
    );
};

const format = (n, decimals) => n.toLocaleString('en-US', { minimumFractionDigits: decimals, maximumFractionDigits: decimals });

const CountUp = ({ value, suffix, decimals = 0 }) => {
    const ref = useRef(null);
    const inView = useInView(ref, { once: true, amount: 0.6 });
    const reduce = useReducedMotion();
    const [n, setN] = useState(reduce ? value : 0);

    useEffect(() => {
        if (!inView || reduce) return;
        let raf;
        const start = performance.now();
        const tick = (t) => {
            const p = Math.min(1, (t - start) / 1600);
            setN(value * (1 - Math.pow(1 - p, 4)));
            if (p < 1) raf = requestAnimationFrame(tick);
        };
        raf = requestAnimationFrame(tick);
        return () => cancelAnimationFrame(raf);
    }, [inView, reduce, value]);

    return (
        <span ref={ref} className="tabular">
            {format(n, decimals)}
            {suffix.replace('+', '')}
            {suffix.includes('+') && <span className="text-signal">+</span>}
        </span>
    );
};

const Approach = () => (
    <section className="shell pt-section">
        <div className="grid-12 gap-y-8 border-t border-line pt-6">
            <div className="col-span-4 md:col-span-3">
                <SectionLabel index="01">Approach</SectionLabel>
            </div>
            <div className="col-span-4 md:col-span-9 lg:col-span-8">
                <ScrubStatement />
            </div>
        </div>

        <dl className="grid grid-cols-2 md:grid-cols-4 mt-24 md:mt-36 border-t border-line">
            {stats.map((s, i) => (
                <Reveal
                    key={s.label}
                    delay={i * 0.08}
                    className={`pt-5 pb-8 md:pb-0 pr-4 ${i % 2 === 1 ? 'pl-4 border-l border-line' : ''} ${i === 2 ? 'md:pl-4 md:border-l md:border-line' : ''}`}
                >
                    <dt className="label text-mute mb-6 md:mb-10 max-w-[18ch] leading-[1.4]">{s.label}</dt>
                    <dd className="text-display-m font-medium">
                        <CountUp value={s.value} suffix={s.suffix} decimals={s.decimals} />
                    </dd>
                </Reveal>
            ))}
        </dl>
    </section>
);

export default Approach;
