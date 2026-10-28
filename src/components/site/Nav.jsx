import { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';
import { caseStudies } from '../../data/projects';
import { startScroll, stopScroll } from '../../lib/scroll';
import useSectionNav from '../../hooks/useSectionNav';
import { easeInOutQuart, easeOutExpo } from '../../lib/motion';
import Clock from './Clock';

const sections = [
    { id: 'work', label: 'Work' },
    { id: 'services', label: 'Services' },
    { id: 'lab', label: 'Lab' },
    { id: 'contact', label: 'Contact' },
];

const Nav = () => {
    const [open, setOpen] = useState(false);
    const [hidden, setHidden] = useState(false);
    const location = useLocation();
    const goTo = useSectionNav();

    useEffect(() => setOpen(false), [location.pathname]);

    // Tuck the bar away while reading down the page; bring it back on any upward scroll
    useEffect(() => {
        let last = window.scrollY;
        const onScroll = () => {
            const y = window.scrollY;
            if (Math.abs(y - last) < 6) return;
            setHidden(y > last && y > 160);
            last = y;
        };
        window.addEventListener('scroll', onScroll, { passive: true });
        return () => window.removeEventListener('scroll', onScroll);
    }, []);
    useEffect(() => {
        if (open) stopScroll();
        else startScroll();
    }, [open]);
    useEffect(() => {
        if (!open) return;
        const onKey = (e) => e.key === 'Escape' && setOpen(false);
        window.addEventListener('keydown', onKey);
        return () => window.removeEventListener('keydown', onKey);
    }, [open]);

    const handleSection = (id) => {
        setOpen(false);
        // let the menu start closing before the scroll begins
        setTimeout(() => goTo(id), open ? 350 : 0);
    };

    return (
        <>
            <header
                className={`fixed inset-x-0 top-0 z-50 text-paper mix-blend-difference transition-transform duration-700 ease-expo ${
                    hidden && !open ? '-translate-y-full' : ''
                }`}
            >
                <div className="shell grid-12 items-center h-16 md:h-[4.5rem] text-[0.82rem] font-medium tracking-[-0.01em]">
                    <Link to="/" className="col-span-2 md:col-span-4 lg:col-span-3 flex items-center gap-2.5 whitespace-nowrap" aria-label="Márton Mocsonoky, home">
                        <span className="font-serif italic text-[1.35rem] leading-none -mt-0.5">M</span>
                        <span>Márton Mocsonoky</span>
                    </Link>
                    <p className="hidden lg:block col-span-3 text-paper/60">Product &amp; AI. Independent.</p>
                    <p className="hidden lg:flex col-span-3 items-center gap-2 text-paper/60">
                        <span className="w-1.5 h-1.5 rounded-full bg-paper" />
                        Taking on new projects · <Clock />
                    </p>
                    <nav className="hidden md:flex md:col-span-8 lg:col-span-3 justify-end gap-6" aria-label="Primary">
                        {sections.map((s) => (
                            <button key={s.id} onClick={() => handleSection(s.id)} className="link-draw">
                                {s.label}
                            </button>
                        ))}
                    </nav>
                    <button
                        className="md:hidden col-span-2 justify-self-end flex items-center gap-2"
                        onClick={() => setOpen((v) => !v)}
                        aria-expanded={open}
                        aria-controls="mobile-menu"
                    >
                        <span className="relative block h-[1.1em] overflow-hidden">
                            <span className={`block transition-transform duration-500 ease-expo ${open ? '-translate-y-full' : ''}`}>Menu</span>
                            <span className={`absolute inset-0 transition-transform duration-500 ease-expo ${open ? '' : 'translate-y-full'}`}>Close</span>
                        </span>
                    </button>
                </div>
            </header>

            <AnimatePresence>
                {open && (
                    <motion.div
                        id="mobile-menu"
                        className="fixed inset-0 z-40 bg-ink text-paper md:hidden flex flex-col shell pt-24 pb-8"
                        initial={{ clipPath: 'inset(0 0 100% 0)' }}
                        animate={{ clipPath: 'inset(0 0 0% 0)' }}
                        exit={{ clipPath: 'inset(0 0 100% 0)' }}
                        transition={{ duration: 0.6, ease: easeInOutQuart }}
                    >
                        <nav className="flex flex-col gap-1" aria-label="Mobile">
                            {sections.map((s, i) => (
                                <motion.button
                                    key={s.id}
                                    onClick={() => handleSection(s.id)}
                                    className="text-left text-[3.2rem] leading-[1.05] tracking-[-0.04em] font-medium"
                                    initial={{ y: 40, opacity: 0 }}
                                    animate={{ y: 0, opacity: 1 }}
                                    transition={{ duration: 0.8, ease: easeOutExpo, delay: 0.15 + i * 0.05 }}
                                >
                                    {s.label}
                                </motion.button>
                            ))}
                        </nav>
                        <div className="mt-10 border-t border-line-inv pt-5">
                            <p className="label text-paper/50 mb-4">Case studies</p>
                            <ul className="grid grid-cols-2 gap-y-2 text-paper/80">
                                {caseStudies.map((p) => (
                                    <li key={p.id}><Link to={p.path}>{p.title}</Link></li>
                                ))}
                            </ul>
                        </div>
                        <p className="mt-auto label text-paper/50 flex justify-between">
                            <span>Taking on new projects</span>
                            <Clock />
                        </p>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
};

export default Nav;
