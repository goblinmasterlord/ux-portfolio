// <FactList> — label / value rows between hairlines. Good for team, stack, deliverables.
//   items    [{ label: "Backend engineer", value: "System architecture and API integrations" }]
import { Reveal } from '../site/Reveal';
import { useDark } from './context';

const FactList = ({ items }) => {
    const dark = useDark();
    const rule = dark ? 'border-line-inv' : 'border-line';
    return (
        <Reveal as="dl" className={`border-b ${rule}`}>
            {items.map((it) => (
                <div key={it.label} className={`grid grid-cols-1 sm:grid-cols-[minmax(0,2fr)_minmax(0,3fr)] gap-x-6 gap-y-1.5 border-t ${rule} py-4`}>
                    <dt className={`label leading-[1.4] ${dark ? 'text-paper/50' : 'text-mute'}`}>{it.label}</dt>
                    <dd className="text-[1rem] leading-snug">{it.value}</dd>
                </div>
            ))}
        </Reveal>
    );
};

export default FactList;
