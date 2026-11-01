// <Summary> — "at a glance" strip right under <CaseHero>, for readers who skim: the
// problem, what I did and how it turned out, in two or three sentences each.
//   items    [{ label: "Challenge", text: "…" }]   (3 items read best)
import { Reveal } from '../site/Reveal';
import SectionLabel from '../site/SectionLabel';

const cols = { 2: 'md:col-span-4', 3: 'md:col-span-3' };

const Summary = ({ items, label = 'At a glance' }) => (
    <section className="shell mt-16 md:mt-24">
        <div className="grid-12 gap-y-8 border-t border-line pt-5 md:pt-6">
            <div className="col-span-4 md:col-span-3">
                <SectionLabel>{label}</SectionLabel>
            </div>
            {items.map((it, i) => (
                <Reveal key={it.label} delay={i * 0.08} className={`col-span-4 ${cols[items.length] || 'md:col-span-3'}`}>
                    <h2 className="label text-ink">{it.label}</h2>
                    <p className="mt-4 text-[1.0625rem] leading-[1.55] text-ink-2 text-pretty">{it.text}</p>
                </Reveal>
            ))}
        </div>
    </section>
);

export default Summary;
