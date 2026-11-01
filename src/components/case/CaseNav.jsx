// <CaseNav> — a floating pill at the bottom of the screen that names the section you're
// reading and how far through the case study you are. Opening it lists every section to
// jump to. It finds sections through the data attributes <CaseSection> sets, appears once
// the first section is reached and steps aside when <NextProject> comes into view. Like the
// top nav, it tucks away while you read down the page and returns on any upward scroll.
// Render it once per page, anywhere inside <main>.
import { useEffect, useRef, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { useLocation } from 'react-router-dom';
import { easeOutExpo } from '../../lib/motion';
import { scrollToTarget } from '../../lib/scroll';

const CaseNav = () => {
    const [sections, setSections] = useState([]);
    const [active, setActive] = useState(-1);
    const [progress, setProgress] = useState(0);
    const [ended, setEnded] = useState(false);
    const [open, setOpen] = useState(false);
    const [tucked, setTucked] = useState(false);
    const root = useRef(null);
    const { pathname } = useLocation();

    useEffect(() => {
        const els = [...document.querySelectorAll('[data-case-label]')];
        setSections(els.map((el) => ({ el, index: el.dataset.caseIndex, label: el.dataset.caseLabel })));
        const end = document.querySelector('[data-case-end]');

        let frame = 0;
        let lastY = window.scrollY;
        const update = () => {
            frame = 0;
            const y = window.scrollY;
            if (Math.abs(y - lastY) > 6) {
                setTucked(y > lastY);
                lastY = y;
            }
            const line = window.innerHeight * 0.4;
            let current = -1;
            els.forEach((el, i) => {
                if (el.getBoundingClientRect().top <= line) current = i;
            });
            setActive(current);
            setEnded(end ? end.getBoundingClientRect().top < window.innerHeight * 0.85 : false);
            if (els.length) {
                const start = els[0].getBoundingClientRect().top + window.scrollY - line;
                const stop = (end ? end.getBoundingClientRect().top + window.scrollY : document.body.scrollHeight) - window.innerHeight;
                setProgress(Math.min(1, Math.max(0, (window.scrollY - start) / Math.max(1, stop - start))));
            }
        };
        const onScroll = () => {
            if (!frame) frame = requestAnimationFrame(update);
        };
        update();
        window.addEventListener('scroll', onScroll, { passive: true });
        window.addEventListener('resize', onScroll);
        return () => {
            cancelAnimationFrame(frame);
            window.removeEventListener('scroll', onScroll);
            window.removeEventListener('resize', onScroll);
        };
    }, [pathname]);

    useEffect(() => {
        if (!open) return;
        const onKey = (e) => e.key === 'Escape' && setOpen(false);
        const onDown = (e) => !root.current?.contains(e.target) && setOpen(false);
        window.addEventListener('keydown', onKey);
        window.addEventListener('pointerdown', onDown);
        return () => {
            window.removeEventListener('keydown', onKey);
            window.removeEventListener('pointerdown', onDown);
        };
    }, [open]);

    const shown = active >= 0 && !ended && (!tucked || open);
    useEffect(() => {
        if (active < 0 || ended) setOpen(false);
    }, [active, ended]);

    // Lazy images above the target can grow while the page scrolls, moving the target. Once the
    // scroll settles, check where the section landed and correct (at most twice).
    const jump = (el) => {
        setOpen(false);
        scrollToTarget(el, { offset: -24 });
        let last = -1;
        let still = 0;
        let fixes = 0;
        const timer = setInterval(() => {
            const y = window.scrollY;
            still = Math.abs(y - last) < 1 ? still + 1 : 0;
            last = y;
            if (still < 2) return;
            if (Math.abs(el.getBoundingClientRect().top - 24) > 8 && fixes < 2) {
                fixes += 1;
                still = 0;
                scrollToTarget(el, { offset: -24 });
            } else {
                clearInterval(timer);
            }
        }, 150);
    };

    const current = sections[active];

    return (
        <AnimatePresence>
            {shown && open && (
                <motion.div
                    key="scrim"
                    aria-hidden="true"
                    className="fixed inset-0 z-40 bg-paper/70 backdrop-blur-[2px] md:hidden"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.3 }}
                />
            )}
            {shown && current && (
                <motion.nav
                    key="nav"
                    ref={root}
                    aria-label="Case study sections"
                    className="fixed z-40 bottom-4 md:bottom-6 inset-x-0 mx-auto w-[min(22rem,calc(100vw-2.5rem))]"
                    initial={{ opacity: 0, y: 24 }}
                    animate={{ opacity: 1, y: 0, transition: { duration: 0.7, ease: easeOutExpo } }}
                    exit={{ opacity: 0, y: 24, transition: { duration: 0.35 } }}
                >
                    <AnimatePresence>
                        {open && (
                            <motion.ol
                                id="case-nav-list"
                                className="absolute bottom-full inset-x-0 mb-2 rounded-[6px] bg-ink text-paper ring-1 ring-paper/15 shadow-[0_18px_50px_-12px_rgb(0_0_0/0.5)] py-2 origin-bottom"
                                initial={{ opacity: 0, y: 10, scale: 0.98 }}
                                animate={{ opacity: 1, y: 0, scale: 1, transition: { duration: 0.45, ease: easeOutExpo } }}
                                exit={{ opacity: 0, y: 6, transition: { duration: 0.2 } }}
                            >
                                {sections.map((s, i) => (
                                    <li key={s.index}>
                                        <button
                                            type="button"
                                            onClick={() => jump(s.el)}
                                            aria-current={i === active ? 'true' : undefined}
                                            className={`w-full flex items-baseline gap-4 px-4 py-2.5 text-left transition-colors ${i === active ? 'text-paper' : 'text-paper/55 hover:text-paper'}`}
                                        >
                                            <span className="label tabular w-6 shrink-0">{s.index}</span>
                                            <span className="flex-1 text-[0.95rem] tracking-[-0.01em]">{s.label}</span>
                                            {i === active && <span className="w-1.5 h-1.5 rounded-full bg-signal self-center" aria-hidden="true" />}
                                        </button>
                                    </li>
                                ))}
                            </motion.ol>
                        )}
                    </AnimatePresence>

                    <button
                        type="button"
                        onClick={() => setOpen((v) => !v)}
                        aria-expanded={open}
                        aria-controls="case-nav-list"
                        className="relative w-full overflow-hidden rounded-full bg-ink/90 backdrop-blur-md text-paper ring-1 ring-paper/15 shadow-[0_12px_40px_-12px_rgb(0_0_0/0.45)] pl-4 pr-3 h-11 flex items-center gap-3 text-left"
                    >
                        <span className="label tabular text-paper/50">{current.index}</span>
                        <span className="relative flex-1 h-[1.2em] overflow-hidden text-[0.9rem] tracking-[-0.01em]">
                            <AnimatePresence initial={false}>
                                <motion.span
                                    key={current.label}
                                    className="absolute inset-0 truncate"
                                    initial={{ y: '100%' }}
                                    animate={{ y: '0%', transition: { duration: 0.5, ease: easeOutExpo } }}
                                    exit={{ y: '-100%', transition: { duration: 0.35, ease: easeOutExpo } }}
                                >
                                    {current.label}
                                </motion.span>
                            </AnimatePresence>
                        </span>
                        <span className="label tabular text-paper/50">
                            {String(active + 1).padStart(2, '0')}/{String(sections.length).padStart(2, '0')}
                        </span>
                        <span aria-hidden="true" className={`text-paper/60 text-[0.8rem] transition-transform duration-500 ease-expo ${open ? 'rotate-180' : ''}`}>
                            ↑
                        </span>
                        <span aria-hidden="true" className="absolute left-0 bottom-0 h-[2px] bg-signal" style={{ width: `${progress * 100}%` }} />
                    </button>
                </motion.nav>
            )}
        </AnimatePresence>
    );
};

export default CaseNav;
