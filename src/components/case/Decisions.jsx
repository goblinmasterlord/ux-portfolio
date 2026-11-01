// <Decisions> — the design decisions behind a product, one block each: what was wrong,
// what I did about it, and the screen that shows it. Text sits in a sticky column on
// desktop while the figure scrolls past. Place it in <CaseSection wide>.
//   items     [{ title, problem, decision, image?, alt?, caption?, contain?, extra? }]
//             contain: false for an image that brings its own plate (a composed detail);
//             otherwise it is framed as a UI screenshot
//             extra: a second figure under the first, { image, alt, caption }
//   figStart  number of the first figure caption, so numbering runs across the page
import { Reveal } from '../site/Reveal';
import Figure from './Figure';
import { useDark } from './context';

const pad = (n) => String(n).padStart(2, '0');

const Decisions = ({ items, figStart = 1 }) => {
    const dark = useDark();
    const mute = dark ? 'text-paper/50' : 'text-mute';
    const body = dark ? 'text-paper/70' : 'text-ink-2';
    const rule = dark ? 'border-line-inv' : 'border-line';
    let fig = figStart - 1;

    return (
        <div className="flex flex-col gap-24 md:gap-36">
            {items.map((d, i) => {
                if (d.image) fig += 1;
                const first = fig;
                if (d.extra) fig += 1;
                return (
                    <article key={d.title} className={`grid-12 gap-y-10 border-t ${rule} pt-6`}>
                        <div className={`col-span-4 ${d.image ? 'md:col-span-4' : 'md:col-span-8 md:col-start-5'}`}>
                            <Reveal className={d.image ? 'md:sticky md:top-28' : ''}>
                                <p className={`label tabular ${mute}`}>
                                    Decision {pad(i + 1)} / {pad(items.length)}
                                </p>
                                <h3 className="mt-5 text-display-s font-medium text-balance">{d.title}</h3>
                                <dl className="mt-8 space-y-6">
                                    <div>
                                        <dt className={`label ${mute}`}>The problem</dt>
                                        <dd className={`mt-2.5 text-[1.0625rem] leading-[1.6] text-pretty ${body}`}>{d.problem}</dd>
                                    </div>
                                    <div>
                                        <dt className={`label ${dark ? 'text-paper' : 'text-ink'}`}>What I did</dt>
                                        <dd className={`mt-2.5 text-[1.0625rem] leading-[1.6] text-pretty ${body}`}>{d.decision}</dd>
                                    </div>
                                </dl>
                            </Reveal>
                        </div>
                        {d.image && (
                            <div className="col-span-4 md:col-span-8 md:col-start-5 self-start flex flex-col gap-10">
                                <Figure src={d.image} alt={d.alt || d.title} fig={pad(first)} caption={d.caption} screen={d.contain !== false} />
                                {d.extra && (
                                    <Figure src={d.extra.image} alt={d.extra.alt} fig={pad(first + 1)} caption={d.extra.caption} screen={d.contain !== false} />
                                )}
                            </div>
                        )}
                    </article>
                );
            })}
        </div>
    );
};

export default Decisions;
