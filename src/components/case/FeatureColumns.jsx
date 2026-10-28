// <FeatureColumns> — 2–3 groups of features side by side (stacked on mobile).
// Each group: index, title, then a hairline-separated list of points.
//   groups   [{ title: "Flexible payment infrastructure", points: ["…", "…"] }]
import { Reveal } from '../site/Reveal';
import { useDark } from './context';

const cols = { 2: 'md:grid-cols-2', 3: 'md:grid-cols-3' };

const FeatureColumns = ({ groups }) => {
    const dark = useDark();
    const rule = dark ? 'border-line-inv' : 'border-line';
    return (
        <div className={`grid grid-cols-1 ${cols[groups.length] || 'md:grid-cols-3'} gap-x-[clamp(1rem,1.6vw,1.5rem)] gap-y-14`}>
            {groups.map((g, i) => (
                <Reveal key={g.title} delay={i * 0.08} className={`border-t pt-5 ${dark ? 'border-paper/60' : 'border-ink'}`}>
                    <p className={`label tabular ${dark ? 'text-paper/50' : 'text-mute'}`}>{String(i + 1).padStart(2, '0')}</p>
                    <h3 className="mt-8 md:mt-12 text-[clamp(1.35rem,1.8vw,1.75rem)] leading-[1.15] tracking-[-0.025em] font-medium text-balance max-w-[18ch]">
                        {g.title}
                    </h3>
                    <ul className={`mt-8 border-t ${rule}`}>
                        {g.points.map((pt) => (
                            <li key={pt} className={`border-b ${rule} py-3.5 text-[0.975rem] leading-snug text-pretty ${dark ? 'text-paper/70' : 'text-ink-2'}`}>
                                {pt}
                            </li>
                        ))}
                    </ul>
                </Reveal>
            ))}
        </div>
    );
};

export default FeatureColumns;
