// <Ledger> — a small numbered table between hairlines: iteration rounds, research
// findings, before/after pairs. Columns sit side by side from md; below that each row
// stacks with its column names as labels.
//   columns   ["Tried", "What was wrong", "What I kept"]
//   rows      [["…", "…", "…"], …]   one string per column
//   accent    index of a column to set in ink (the takeaway); the others stay muted
import { motion } from 'framer-motion';
import { easeOutExpo } from '../../lib/motion';
import { useDark } from './context';

const pad = (n) => String(n).padStart(2, '0');
const spans = { 2: 'row-span-2', 3: 'row-span-3' };
const tracks = { 2: 'md:grid-cols-[2.5rem_repeat(2,minmax(0,1fr))]', 3: 'md:grid-cols-[2.5rem_repeat(3,minmax(0,1fr))]' };

const Ledger = ({ columns, rows, accent = columns.length - 1 }) => {
    const dark = useDark();
    const rule = dark ? 'border-line-inv' : 'border-line';
    const mute = dark ? 'text-paper/50' : 'text-mute';
    const grid = `grid grid-cols-[2.5rem_1fr] ${tracks[columns.length] || tracks[3]} gap-x-6`;

    return (
        <div role="table" className={`border-b ${rule}`}>
            <div role="row" className={`hidden md:grid ${grid} pb-3`}>
                <span role="columnheader">
                    <span className="sr-only">Number</span>
                </span>
                {columns.map((c) => (
                    <span role="columnheader" key={c} className={`label ${mute}`}>{c}</span>
                ))}
            </div>
            {rows.map((row, i) => (
                <motion.div
                    role="row"
                    key={i}
                    className={`${grid} gap-y-3 border-t ${rule} py-5`}
                    initial={{ opacity: 0, y: 12 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.5 }}
                    transition={{ duration: 0.8, ease: easeOutExpo, delay: (i % 4) * 0.05 }}
                >
                    <span role="cell" className={`label tabular pt-1 ${mute} ${spans[columns.length] || ''} md:row-span-1`}>{pad(i + 1)}</span>
                    {row.map((cell, j) => (
                        <div role="cell" key={j} className="col-start-2 md:col-start-auto">
                            <span className={`md:hidden label block mb-1.5 ${mute}`}>{columns[j]}</span>
                            <span
                                className={`block text-[0.975rem] leading-[1.5] text-pretty ${
                                    j === accent ? (dark ? 'text-paper' : 'text-ink') : dark ? 'text-paper/65' : 'text-ink-2'
                                } ${j === 0 ? 'font-medium tracking-[-0.01em]' : ''}`}
                            >
                                {cell}
                            </span>
                        </div>
                    ))}
                </motion.div>
            ))}
        </div>
    );
};

export default Ledger;
