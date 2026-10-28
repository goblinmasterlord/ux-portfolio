// <Steps> — a numbered process with a sticky screenshot frame (lg+). Text steps scroll on
// the left; the frame on the right holds still and wipes to the matching screenshot as each
// step crosses the middle of the viewport. Below lg the steps stack, each with its own figure.
// Place it in <CaseSection wide>.
//   steps    [{ title: "Upload", description: "…", image, alt }]
import { useEffect, useRef, useState } from 'react';
import Figure from './Figure';
import { useDark } from './context';

const pad = (n) => String(n).padStart(2, '0');

const Steps = ({ steps }) => {
    const [active, setActive] = useState(0);
    const refs = useRef([]);
    const dark = useDark();
    const rule = dark ? 'border-line-inv' : 'border-line';

    useEffect(() => {
        // A thin band across the middle of the viewport; whichever step overlaps it is active.
        const io = new IntersectionObserver(
            (entries) => entries.forEach((e) => e.isIntersecting && setActive(Number(e.target.dataset.step))),
            { rootMargin: '-45% 0px -54% 0px' }
        );
        refs.current.forEach((el) => el && io.observe(el));
        return () => io.disconnect();
    }, [steps.length]);

    return (
        <div className="grid-12">
            <ol className="col-span-4 md:col-span-12 lg:col-span-5">
                {steps.map((s, i) => (
                    <li
                        key={s.title}
                        ref={(el) => (refs.current[i] = el)}
                        data-step={i}
                        className={`border-t ${rule} py-10 md:py-14 lg:border-0 lg:py-0 lg:min-h-[78vh] lg:flex lg:flex-col lg:justify-center transition-opacity duration-700 ease-expo ${i === active ? '' : 'lg:opacity-25'}`}
                    >
                        <p className={`label flex items-center gap-3 ${dark ? 'text-paper/50' : 'text-mute'}`}>
                            <span
                                aria-hidden="true"
                                className={`w-1.5 h-1.5 rounded-full transition-colors duration-500 ${i === active ? 'bg-signal' : dark ? 'bg-paper/25' : 'bg-ink/20'}`}
                            />
                            Step {pad(i + 1)} / {pad(steps.length)}
                        </p>
                        <h3 className="mt-5 md:mt-8 text-display-m font-medium">{s.title}</h3>
                        <p className={`mt-5 md:mt-7 max-w-[44ch] text-[1.0625rem] md:text-lg leading-[1.6] text-pretty ${dark ? 'text-paper/70' : 'text-ink-2'}`}>
                            {s.description}
                        </p>
                        <Figure src={s.image} alt={s.alt || s.title} contain aspect="aspect-[16/10]" fig={pad(i + 1)} caption={s.title} className="mt-10 lg:hidden" />
                    </li>
                ))}
            </ol>

            <div className="hidden lg:flex lg:col-span-7 self-start sticky top-0 h-screen flex-col justify-center pt-12">
                <div className={`relative aspect-[16/10] overflow-hidden rounded-[3px] ${dark ? 'bg-paper/5' : 'bg-paper-2'}`}>
                    {steps.map((s, i) => (
                        // Later layers sit on top: moving forward wipes the next shot up, moving back uncovers the previous.
                        <div
                            key={s.title}
                            aria-hidden={i !== active}
                            className={`absolute inset-0 ${dark ? 'bg-ink' : 'bg-paper-2'} transition-[clip-path] duration-[1100ms] ease-quart`}
                            style={{ clipPath: i <= active ? 'inset(0% 0% 0% 0%)' : 'inset(100% 0% 0% 0%)' }}
                        >
                            <img
                                src={s.image}
                                alt={s.alt || s.title}
                                loading="lazy"
                                decoding="async"
                                className={`w-full h-full object-contain p-[5%] transition-transform duration-[1400ms] ease-expo ${i === active ? 'scale-100' : 'scale-[1.04]'}`}
                            />
                        </div>
                    ))}
                </div>
                <div className={`mt-4 flex items-center justify-between gap-6 label ${dark ? 'text-paper/50' : 'text-mute'}`}>
                    <span>
                        <span className={dark ? 'text-paper' : 'text-ink'}>Fig. {pad(active + 1)}</span>
                        <span className="ml-3">{steps[active].title}</span>
                    </span>
                    <span className="flex gap-1.5" aria-hidden="true">
                        {steps.map((s, i) => (
                            <span key={s.title} className={`h-px w-8 transition-colors duration-500 ${i <= active ? (dark ? 'bg-paper' : 'bg-ink') : dark ? 'bg-paper/20' : 'bg-ink/15'}`} />
                        ))}
                    </span>
                </div>
            </div>
        </div>
    );
};

export default Steps;
