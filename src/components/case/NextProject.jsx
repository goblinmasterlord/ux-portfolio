// <NextProject> — closing link to the next case study (order comes from caseStudies).
// Desktop: hovering wipes the cover in and slides the arrow. Mobile: the cover is always shown.
//   currentId   id of the page's own case study, e.g. "paynance"
import { Link } from 'react-router-dom';
import { caseStudies, getNextCaseStudy } from '../../data/projects';
import { Reveal } from '../site/Reveal';

const NextProject = ({ currentId }) => {
    const next = getNextCaseStudy(currentId);
    const index = String(caseStudies.findIndex((p) => p.id === next.id) + 1).padStart(2, '0');

    return (
        <section className="shell pt-section pb-20 md:pb-28">
            <Link to={next.path} className="group block border-t border-line pt-5 md:pt-6" data-cursor="Next case study" aria-label={`Next case study: ${next.title}`}>
                <div className="label text-mute flex items-center justify-between gap-4">
                    <span className="flex items-center gap-3">
                        <span className="text-ink">({index})</span>
                        <span className="h-px w-8 bg-ink/25" />
                        Next case study
                    </span>
                    <span className="hidden sm:block">{next.sector}</span>
                </div>

                <div className="grid-12 gap-y-8 mt-10 md:mt-14 items-end">
                    <Reveal className="col-span-4 md:col-span-7">
                        <h2 className="text-display-xl font-medium text-balance transition-transform duration-700 ease-expo md:group-hover:translate-x-[0.08em]">
                            {next.title}
                            <span className="relative inline-block align-baseline overflow-hidden w-[1.15em] h-[1em] ml-[0.3em] text-[0.5em] leading-none" aria-hidden="true">
                                <span className="absolute left-0 bottom-0 transition-transform duration-700 ease-expo group-hover:translate-x-[120%]">→</span>
                                <span className="absolute left-0 bottom-0 -translate-x-[120%] transition-transform duration-700 ease-expo group-hover:translate-x-0">→</span>
                            </span>
                        </h2>
                        <p className="mt-6 md:mt-8 text-ink-2 max-w-[46ch] text-pretty">{next.summary}</p>
                    </Reveal>

                    <div className="col-span-4 md:col-span-5 overflow-hidden rounded-[3px] bg-paper-2 aspect-[4/3] transition-[clip-path] duration-[900ms] ease-quart md:[clip-path:inset(100%_0_0_0)] md:group-hover:[clip-path:inset(0_0_0_0)] md:group-focus-visible:[clip-path:inset(0_0_0_0)]">
                        <img
                            src={next.image}
                            alt=""
                            loading="lazy"
                            decoding="async"
                            className="w-full h-full object-cover transition-transform duration-[1200ms] ease-expo md:scale-110 md:group-hover:scale-100"
                        />
                    </div>
                </div>
            </Link>
        </section>
    );
};

export default NextProject;
