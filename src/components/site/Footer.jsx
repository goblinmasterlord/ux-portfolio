import { motion } from 'framer-motion';
import { useLocation } from 'react-router-dom';
import { scrollToTarget } from '../../lib/scroll';
import { easeOutExpo } from '../../lib/motion';
import { ContactBlock } from './ContactBlock';
import Clock from './Clock';

const WORDMARK = 'Mocsonoky';

const Footer = () => {
    const { pathname } = useLocation();
    const year = new Date().getFullYear();

    return (
        <footer id="contact" className="relative bg-ink text-paper overflow-hidden">
            {/* The /contact page renders the block itself as its main content */}
            {pathname !== '/contact' && (
                <div className="shell pt-section pb-24 md:pb-32">
                    <ContactBlock />
                </div>
            )}

            <div className="shell">
                <div className="grid-12 label text-paper/50 border-t border-line-inv py-5 gap-y-3">
                    <span className="col-span-2 md:col-span-3">© {year} Márton Mocsonoky</span>
                    <span className="col-span-2 md:col-span-3 text-right md:text-left"><Clock /></span>
                    <span className="hidden md:block col-span-3">Designed &amp; built by hand</span>
                    <button onClick={() => scrollToTarget(0)} className="col-span-4 md:col-span-3 text-left md:text-right uppercase hover:text-paper transition-colors">
                        Back to top ↑
                    </button>
                </div>
            </div>

            <motion.p
                aria-hidden="true"
                className="flex justify-between select-none font-medium leading-none tracking-[-0.06em] text-[18.6vw] px-[1vw] pb-[1vw]"
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, amount: 0.3 }}
                transition={{ staggerChildren: 0.05 }}
            >
                {WORDMARK.split('').map((ch, i) => (
                    <span key={i} className="inline-block overflow-hidden pb-[0.04em]">
                        <motion.span
                            className="inline-block"
                            variants={{ hidden: { y: '100%' }, show: { y: '0%', transition: { duration: 1.2, ease: easeOutExpo } } }}
                        >
                            {ch}
                        </motion.span>
                    </span>
                ))}
            </motion.p>
        </footer>
    );
};

export default Footer;
