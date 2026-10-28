import { useEffect, useState } from 'react';
import { AnimatePresence, motion, useMotionValue, useSpring } from 'framer-motion';

// A small pill that trails the pointer over any element with a data-cursor="Label"
// attribute. Mouse/trackpad only; touch devices never see it.
const CursorLabel = () => {
    const [label, setLabel] = useState(null);
    const x = useMotionValue(-100);
    const y = useMotionValue(-100);
    const sx = useSpring(x, { stiffness: 500, damping: 40, mass: 0.4 });
    const sy = useSpring(y, { stiffness: 500, damping: 40, mass: 0.4 });

    useEffect(() => {
        if (!window.matchMedia('(pointer: fine)').matches) return;
        const onMove = (e) => {
            x.set(e.clientX);
            y.set(e.clientY);
            const el = e.target.closest?.('[data-cursor]');
            setLabel(el ? el.getAttribute('data-cursor') : null);
        };
        const onLeave = () => setLabel(null);
        window.addEventListener('pointermove', onMove, { passive: true });
        document.addEventListener('pointerleave', onLeave);
        return () => {
            window.removeEventListener('pointermove', onMove);
            document.removeEventListener('pointerleave', onLeave);
        };
    }, [x, y]);

    return (
        <motion.div aria-hidden="true" className="fixed left-0 top-0 z-[60] pointer-events-none" style={{ x: sx, y: sy }}>
            <AnimatePresence>
                {label && (
                    <motion.span
                        key="pill"
                        className="absolute -translate-x-1/2 -translate-y-1/2 whitespace-nowrap rounded-full bg-signal text-paper text-[0.8rem] font-medium px-4 py-2.5"
                        initial={{ scale: 0.4, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        exit={{ scale: 0.4, opacity: 0 }}
                        transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
                    >
                        {label}
                    </motion.span>
                )}
            </AnimatePresence>
        </motion.div>
    );
};

export default CursorLabel;
