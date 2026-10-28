// <NumberedList> — challenges / problems / principles as numbered rows between hairlines.
// Each row's rule draws in from the left and its text lifts in, staggered.
//   items    array of strings (or inline nodes)
import { motion } from 'framer-motion';
import { easeOutExpo } from '../../lib/motion';
import { useDark } from './context';

const NumberedList = ({ items }) => {
    const dark = useDark();
    return (
        <ol className={`border-b ${dark ? 'border-line-inv' : 'border-line'}`}>
            {items.map((item, i) => (
                <motion.li
                    key={i}
                    className="relative grid grid-cols-[2.75rem_1fr] md:grid-cols-[4.5rem_1fr] items-baseline py-6 md:py-7"
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true, amount: 0.6 }}
                    transition={{ delayChildren: (i % 3) * 0.06 }}
                >
                    <motion.span
                        aria-hidden="true"
                        className={`absolute inset-x-0 top-0 h-px origin-left ${dark ? 'bg-paper/[0.16]' : 'bg-ink/[0.14]'}`}
                        variants={{ hidden: { scaleX: 0 }, show: { scaleX: 1, transition: { duration: 1.2, ease: easeOutExpo } } }}
                    />
                    <span className={`label tabular ${dark ? 'text-paper/50' : 'text-mute'}`}>{String(i + 1).padStart(2, '0')}</span>
                    <motion.span
                        className="text-[clamp(1.15rem,1.55vw,1.5rem)] leading-[1.3] tracking-[-0.02em] text-pretty max-w-[40ch]"
                        variants={{ hidden: { opacity: 0, y: 14 }, show: { opacity: 1, y: 0, transition: { duration: 0.9, ease: easeOutExpo } } }}
                    >
                        {item}
                    </motion.span>
                </motion.li>
            ))}
        </ol>
    );
};

export default NumberedList;
