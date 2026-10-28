import { motion } from 'framer-motion';
import { easeOutExpo } from '../../lib/motion';
import useSectionNav from '../../hooks/useSectionNav';
import TokenHeadline from './TokenHeadline';
import DiffusionPortrait from './DiffusionPortrait';

const fade = (delay) => ({
    initial: { opacity: 0, y: 16 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 1, ease: easeOutExpo, delay },
});

const Hero = () => {
    const goTo = useSectionNav();

    return (
        <section className="shell relative min-h-[100svh] flex flex-col pt-28 md:pt-[22vh] pb-10 md:pb-12">
            <motion.div {...fade(0.2)} className="grid-12 label text-mute mb-6 md:mb-10">
                <span className="col-span-2 md:col-span-3"><span className="text-ink">(00)</span> Index</span>
                <span className="col-span-2 md:col-span-3 text-right md:text-left">Portfolio 2019—2026</span>
                <span className="hidden lg:block col-span-3">Product strategy · UX · AI</span>
            </motion.div>

            <TokenHeadline className="text-[clamp(3rem,8vw,10rem)] leading-[0.95] tracking-[-0.045em] font-medium max-w-[14ch] md:max-w-none" />

            <div className="grid-12 gap-y-10 mt-auto pt-14 md:pt-20 items-end">
                <motion.figure {...fade(0.5)} className="col-span-2 md:col-span-2">
                    <div className="aspect-[4/5] w-full overflow-hidden rounded-[3px]">
                        <DiffusionPortrait src="/images/profile.jpg" alt="Portrait of Márton Mocsonoky" delay={700} />
                    </div>
                    <figcaption className="label text-mute mt-3 leading-[1.4]">Fig. 00 — Marci,<br />denoised in 11 steps</figcaption>
                </motion.figure>

                <motion.p {...fade(1.1)} className="col-span-4 md:col-span-5 md:col-start-5 text-lead text-ink-2 text-pretty">
                    I&apos;m Marci, a product manager and designer. I test models, refine prompts and design the workflows that make
                    AI dependable inside real businesses, from first research to shipped interface.
                </motion.p>

                <motion.nav {...fade(1.25)} className="col-span-4 md:col-span-3 md:col-start-10 flex flex-col border-t border-line" aria-label="Hero">
                    {[
                        ['work', 'Selected work', '05'],
                        ['lab', 'Lab & experiments', '08'],
                        ['contact', 'Start a conversation', '→'],
                    ].map(([id, label, meta]) => (
                        <button
                            key={id}
                            onClick={() => goTo(id)}
                            className="group flex items-center justify-between py-3 border-b border-line text-left text-[0.95rem] font-medium"
                        >
                            <span className="transition-transform duration-500 ease-expo group-hover:translate-x-2">{label}</span>
                            <span className="font-mono text-[0.75rem] text-mute group-hover:text-signal transition-colors">{meta}</span>
                        </button>
                    ))}
                </motion.nav>
            </div>
        </section>
    );
};

export default Hero;
