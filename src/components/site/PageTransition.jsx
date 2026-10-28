import { motion } from 'framer-motion';
import { easeInOutQuart, easeOutExpo } from '../../lib/motion';

// Ink curtain: rises over the outgoing page, then lifts off the incoming one.
// The first page load skips the curtain so the hero intro plays on its own.
const PageTransition = ({ children, skipIntro }) => (
    <>
        <motion.div
            initial={skipIntro ? false : { opacity: 0 }}
            animate={{ opacity: 1, transition: { duration: 0.6, ease: easeOutExpo, delay: 0.35 } }}
            exit={{ opacity: 0, transition: { duration: 0.25, delay: 0.25 } }}
        >
            {children}
        </motion.div>
        <motion.div
            aria-hidden="true"
            className="fixed inset-0 z-[70] bg-ink origin-bottom pointer-events-none"
            initial={{ scaleY: 0 }}
            animate={{ scaleY: 0 }}
            exit={{ scaleY: 1 }}
            transition={{ duration: 0.5, ease: easeInOutQuart }}
        />
        <motion.div
            aria-hidden="true"
            className="fixed inset-0 z-[70] bg-ink origin-top pointer-events-none"
            initial={{ scaleY: skipIntro ? 0 : 1 }}
            animate={{ scaleY: 0 }}
            exit={{ scaleY: 0 }}
            transition={{ duration: 0.6, ease: easeInOutQuart, delay: 0.05 }}
        />
    </>
);

export default PageTransition;
