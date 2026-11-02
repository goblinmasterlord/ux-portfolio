// The autoresearch run on the Eclipse extraction prompt: training score after each kept
// change, as a step line over the 22 experiments. Labels and points are HTML positioned in
// percentages so the text stays legible at any width; the table under the chart (a Ledger
// on the page) carries the same numbers.
import { useState } from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { easeOutExpo } from '../../../lib/motion';

const RUNS = 22;
const Y_MIN = 88;
const Y_MAX = 98;
const x = (n) => ((n - 1) / (RUNS - 1)) * 100;
const y = (score) => 100 - ((score - Y_MIN) / (Y_MAX - Y_MIN)) * 100;

const ScoreChart = ({ points }) => {
    const [hover, setHover] = useState(null);
    const reduce = useReducedMotion();
    const path = points.reduce((d, p, i) => (i === 0 ? `M ${x(p.n)} ${y(p.score)}` : `${d} H ${x(p.n)} V ${y(p.score)}`), '') + ` H 100`;
    const ticks = [90, 92, 94, 96, 98];
    const active = hover === null ? null : points[hover];

    return (
        <figure>
            <div className="relative h-64 md:h-80 ml-8 mr-2 mt-4">
                {ticks.map((t) => (
                    <div key={t} className="absolute inset-x-0 border-t border-line" style={{ top: `${y(t)}%` }}>
                        <span className="absolute -left-8 -translate-y-1/2 label tabular text-mute">{t}</span>
                    </div>
                ))}
                <motion.div
                    className="absolute inset-0"
                    initial={reduce ? false : { clipPath: 'inset(0% 100% 0% 0%)' }}
                    whileInView={{ clipPath: 'inset(0% 0% 0% 0%)' }}
                    viewport={{ once: true, amount: 0.4 }}
                    transition={{ duration: 1.6, ease: easeOutExpo }}
                >
                    <svg viewBox="0 0 100 100" preserveAspectRatio="none" className="absolute inset-0 w-full h-full overflow-visible" aria-hidden="true">
                        <path d={path} fill="none" stroke="rgb(var(--ink))" strokeWidth="2" vectorEffect="non-scaling-stroke" />
                    </svg>
                </motion.div>
                {points.map((p, i) => (
                    <button
                        key={p.id}
                        type="button"
                        onMouseEnter={() => setHover(i)}
                        onMouseLeave={() => setHover(null)}
                        onFocus={() => setHover(i)}
                        onBlur={() => setHover(null)}
                        aria-label={`${p.id}, score ${p.score}: ${p.change}`}
                        className="absolute w-8 h-8 -translate-x-1/2 -translate-y-1/2 grid place-items-center"
                        style={{ left: `${x(p.n)}%`, top: `${y(p.score)}%` }}
                    >
                        <span className={`block rounded-full bg-signal ring-2 ring-paper transition-transform duration-300 ${hover === i ? 'w-3.5 h-3.5' : 'w-2.5 h-2.5'}`} />
                    </button>
                ))}
                {points.filter((p) => p.label).map((p) => (
                    <span
                        key={`label-${p.id}`}
                        aria-hidden="true"
                        className="absolute pointer-events-none label !normal-case !tracking-normal text-[0.72rem] text-ink-2 whitespace-nowrap"
                        style={{
                            ...(p.labelLeft ? { right: `calc(${100 - x(p.n)}% + 10px)` } : { left: `calc(${x(p.n)}% + 10px)` }),
                            top: `calc(${y(p.score)}% + ${p.labelBelow ? 8 : -22}px)`,
                        }}
                    >
                        <span className="text-ink tabular">{p.score.toFixed(1)}</span> {p.label}
                    </span>
                ))}
                {active && (
                    <div
                        role="status"
                        className="absolute z-10 pointer-events-none w-56 rounded-[4px] bg-ink text-paper px-3 py-2.5 text-[0.8rem] leading-snug shadow-[0_12px_30px_-10px_rgb(0_0_0/0.5)]"
                        style={{
                            left: `clamp(0px, calc(${x(active.n)}% - 7rem), calc(100% - 14rem))`,
                            top: `calc(${y(active.score)}% + 18px)`,
                        }}
                    >
                        <span className="label text-paper/60">{active.id} · {active.score.toFixed(2)}</span>
                        <span className="block mt-1.5">{active.change}</span>
                    </div>
                )}
                <div className="absolute inset-x-0 top-full mt-3 flex justify-between label !normal-case text-mute">
                    <span>e001</span>
                    <span>e011</span>
                    <span>e022</span>
                </div>
            </div>
        </figure>
    );
};

export default ScoreChart;
