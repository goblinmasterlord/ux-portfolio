// <AspectList> — the deliverables of a project, one block each, alternating image and text
// across the 12-column grid. Place it in <CaseSection wide>.
//   items     [{ title, description, image?, imageAlt, tags: ["…"] }]
//             (no image → a text-only block; better than reusing a screenshot that doesn't fit)
//   figStart  number of the first figure caption (default 1), so numbering runs across the page
import { Reveal } from '../site/Reveal';
import Figure from './Figure';
import { useDark } from './context';

const pad = (n) => String(n).padStart(2, '0');

export const AspectBlock = ({ item, index, total, fig, flip = false }) => {
    const dark = useDark();
    const hasImage = Boolean(item.image);
    return (
        <article className={`grid-12 gap-y-8 items-end ${hasImage ? '' : 'border-t border-line pt-8'}`}>
            {hasImage && <Figure
                src={item.image}
                alt={item.imageAlt || item.title}
                aspect="aspect-[4/3]"
                fig={pad(fig)}
                caption={item.imageAlt}
                className={`col-span-4 md:col-span-7 md:row-start-1 ${flip ? 'md:col-start-6' : 'md:col-start-1'}`}
            />}
            <Reveal
                className={
                    hasImage
                        ? `col-span-4 md:col-span-4 md:row-start-1 md:pb-10 ${flip ? 'md:col-start-1' : 'md:col-start-9'}`
                        : 'col-span-4 md:col-span-6 md:col-start-5'
                }
            >
                <p className={`label tabular ${dark ? 'text-paper/50' : 'text-mute'}`}>
                    {pad(index + 1)} / {pad(total)}
                </p>
                <h3 className="mt-5 text-display-s font-medium text-balance">{item.title}</h3>
                <p className={`mt-5 text-[1.0625rem] leading-[1.6] text-pretty ${dark ? 'text-paper/70' : 'text-ink-2'}`}>
                    {item.description}
                </p>
                {item.tags?.length > 0 && (
                    <ul className="mt-8 flex flex-wrap gap-1.5" aria-label="Disciplines">
                        {item.tags.map((t) => (
                            <li
                                key={t}
                                className={`label normal-case tracking-normal text-[0.7rem] border rounded-full px-2.5 py-1.5 ${dark ? 'border-line-inv text-paper/70' : 'border-line text-ink-2'}`}
                            >
                                {t}
                            </li>
                        ))}
                    </ul>
                )}
            </Reveal>
        </article>
    );
};

const AspectList = ({ items, figStart = 1 }) => {
    let fig = figStart - 1;
    return (
        <div className="flex flex-col gap-24 md:gap-40">
            {items.map((item, i) => (
                <AspectBlock key={item.title} item={item} index={i} total={items.length} fig={item.image ? ++fig : fig} flip={i % 2 === 1} />
            ))}
        </div>
    );
};

export default AspectList;
