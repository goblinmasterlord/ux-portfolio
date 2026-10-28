// <StatRow> — big numbers with labels. Numbers count up once when they scroll into view
// (reduced motion: the final value is shown straight away).
//   stats    [{ value: "2.5M+", label: "Transactions processed monthly" }]
//            value keeps any prefix/suffix; only the first number in it animates.
import { useEffect, useRef, useState } from 'react';
import { animate, useInView, useReducedMotion } from 'framer-motion';
import { easeOutExpo } from '../../lib/motion';
import { Reveal } from '../site/Reveal';
import { useDark } from './context';

const parse = (value) => {
    const m = String(value).match(/^(\D*)([\d.,]+)(.*)$/);
    if (!m) return null;
    const raw = m[2];
    return {
        prefix: m[1],
        suffix: m[3],
        target: parseFloat(raw.replace(/,/g, '')),
        decimals: (raw.split('.')[1] || '').length,
        grouped: raw.includes(','),
    };
};

const format = (n, { prefix, suffix, decimals, grouped }) => {
    const num = grouped
        ? n.toLocaleString('en-US', { minimumFractionDigits: decimals, maximumFractionDigits: decimals })
        : n.toFixed(decimals);
    return `${prefix}${num}${suffix}`;
};

const CountUp = ({ value }) => {
    const ref = useRef(null);
    const reduce = useReducedMotion();
    const inView = useInView(ref, { once: true, amount: 0.8 });
    const parsed = parse(value);
    const [shown, setShown] = useState(() => (parsed && !reduce ? format(0, parsed) : value));

    useEffect(() => {
        if (!inView || !parsed || reduce) return;
        const controls = animate(0, parsed.target, {
            duration: 1.8,
            ease: easeOutExpo,
            onUpdate: (v) => setShown(format(v, parsed)),
            onComplete: () => setShown(value),
        });
        return () => controls.stop();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [inView, value, reduce]);

    // The invisible final value reserves the width so the row never reflows while counting.
    return (
        <span ref={ref} className="inline-grid tabular">
            <span className="invisible col-start-1 row-start-1" aria-hidden="true">{value}</span>
            <span className="col-start-1 row-start-1" aria-hidden="true">{reduce ? value : shown}</span>
            <span className="sr-only">{value}</span>
        </span>
    );
};

const cols = { 1: 'md:grid-cols-1', 2: 'md:grid-cols-2', 3: 'md:grid-cols-3', 4: 'md:grid-cols-4' };

const StatRow = ({ stats }) => {
    const dark = useDark();
    return (
        <dl className={`grid grid-cols-2 ${cols[stats.length] || 'md:grid-cols-3'} gap-x-4 md:gap-x-6 gap-y-10`}>
            {stats.map((s, i) => (
                <Reveal key={s.label} delay={i * 0.08} className={`flex flex-col border-l pl-4 md:pl-5 ${dark ? 'border-line-inv' : 'border-line'}`}>
                    <dt className={`order-2 mt-4 text-[0.95rem] leading-snug max-w-[24ch] ${dark ? 'text-paper/60' : 'text-mute'}`}>{s.label}</dt>
                    <dd className="order-1 text-display-m font-medium">
                        <CountUp value={s.value} />
                    </dd>
                </Reveal>
            ))}
        </dl>
    );
};

export default StatRow;
