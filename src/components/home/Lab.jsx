import { labProjects } from '../../data/projects';
import SectionLabel from '../site/SectionLabel';
import { Reveal, RevealText } from '../site/Reveal';

const host = (url) => (url.includes('github.com') ? 'GitHub' : 'Live site');

const Lab = () => (
    <section id="lab" className="shell pt-section">
        <div className="grid-12 gap-y-8 border-t border-line pt-6 mb-16 md:mb-24">
            <div className="col-span-4 md:col-span-3">
                <SectionLabel index="04">Lab</SectionLabel>
            </div>
            <div className="col-span-4 md:col-span-9 grid grid-cols-1 md:grid-cols-9 gap-y-6 items-end">
                <RevealText className="md:col-span-6 text-display-l font-medium text-balance">
                    Things I build to *learn* faster.
                </RevealText>
                <Reveal as="p" delay={0.2} className="md:col-span-3 text-[0.98rem] leading-relaxed text-ink-2 text-pretty">
                    Prototypes, tools and client sites built at night and on weekends. Most of them ship. Some only teach me something.
                </Reveal>
            </div>
        </div>

        <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-[clamp(1rem,1.6vw,1.5rem)] gap-y-12 md:gap-y-16">
            {labProjects.map((p, i) => (
                <Reveal as="li" key={p.title} delay={(i % 4) * 0.07}>
                    <a href={p.link} target="_blank" rel="noreferrer" className="group block" data-cursor={host(p.link) === 'GitHub' ? 'View on GitHub ↗' : 'Visit site ↗'}>
                        <div className="aspect-[16/10] overflow-hidden rounded-[3px] bg-paper-2">
                            <img
                                src={p.image}
                                alt={`${p.title} screenshot`}
                                loading="lazy"
                                className="w-full h-full object-cover transition-transform duration-[1.2s] ease-expo group-hover:scale-[1.05]"
                            />
                        </div>
                        <div className="flex items-baseline justify-between gap-4 mt-4 border-b border-line pb-3">
                            <h3 className="text-[1.15rem] font-medium tracking-[-0.02em]">
                                <span className="font-mono text-[0.7rem] text-mute mr-3 align-middle">L.{String(i + 1).padStart(2, '0')}</span>
                                {p.title}
                            </h3>
                            <span className="label text-mute group-hover:text-signal transition-colors whitespace-nowrap">{host(p.link)} ↗</span>
                        </div>
                        <p className="mt-3 text-[0.92rem] text-ink-2 leading-relaxed">{p.description}</p>
                        <p className="mt-2 label text-mute">{p.stack.join(' · ')}</p>
                    </a>
                </Reveal>
            ))}
        </ul>
    </section>
);

export default Lab;
