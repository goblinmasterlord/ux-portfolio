// <Flow> — a left-to-right pipeline diagram (top-to-bottom below lg), built from type and
// hairlines rather than an image, so it stays sharp and readable. A stage can hold one
// node or several running side by side. Place it in <CaseSection wide>.
//   stages   [{ step: "Read", nodes: [{ title: "OCR", text: "…", human?: true }] }]
//            human: marks the node where a person takes over (drawn in the accent colour)
//   caption  optional line under the diagram
import { motion } from 'framer-motion';
import { easeOutExpo } from '../../lib/motion';
import { useDark } from './context';

const pad = (n) => String(n).padStart(2, '0');

const Flow = ({ stages, caption }) => {
    const dark = useDark();
    const rule = dark ? 'border-line-inv' : 'border-line';
    const mute = dark ? 'text-paper/50' : 'text-mute';

    return (
        <figure>
            <ol className="grid grid-cols-1 lg:grid-flow-col lg:auto-cols-fr gap-3 lg:gap-0">
                {stages.map((stage, i) => (
                    <motion.li
                        key={stage.step}
                        className="relative flex flex-col lg:pr-6"
                        initial={{ opacity: 0, y: 18 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, amount: 0.3 }}
                        transition={{ duration: 0.9, ease: easeOutExpo, delay: i * 0.08 }}
                    >
                        <div className={`flex items-center gap-3 label ${mute}`}>
                            <span className={dark ? 'text-paper' : 'text-ink'}>{pad(i + 1)}</span>
                            <span>{stage.step}</span>
                            {i < stages.length - 1 && (
                                <span aria-hidden="true" className="hidden lg:flex flex-1 items-center gap-1">
                                    <span className={`h-px flex-1 ${dark ? 'bg-paper/25' : 'bg-ink/20'}`} />
                                    <span className="text-[0.8rem] leading-none">→</span>
                                </span>
                            )}
                        </div>
                        <div className="mt-4 flex flex-col gap-3 flex-1">
                            {stage.nodes.map((n) => (
                                <div
                                    key={n.title}
                                    className={`rounded-[4px] border p-4 flex-1 ${
                                        n.human
                                            ? 'border-signal bg-signal text-paper'
                                            : `${rule} ${dark ? 'bg-paper/[0.03]' : 'bg-paper-2/60'}`
                                    }`}
                                >
                                    <p className="text-[1rem] leading-[1.25] tracking-[-0.015em] font-medium">{n.title}</p>
                                    {n.text && (
                                        <p className={`mt-2 text-[0.875rem] leading-[1.5] text-pretty ${n.human ? 'text-paper/80' : dark ? 'text-paper/60' : 'text-ink-2'}`}>
                                            {n.text}
                                        </p>
                                    )}
                                </div>
                            ))}
                        </div>
                        {i < stages.length - 1 && (
                            <span aria-hidden="true" className={`lg:hidden self-center mt-3 text-[0.9rem] ${mute}`}>↓</span>
                        )}
                    </motion.li>
                ))}
            </ol>
            {caption && <figcaption className={`mt-5 text-[0.8rem] leading-snug ${mute}`}>{caption}</figcaption>}
        </figure>
    );
};

export default Flow;
