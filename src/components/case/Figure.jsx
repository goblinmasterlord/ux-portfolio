// <Figure> — an image that wipes up from the bottom (clip-path inset) and settles
// from 1.15x to 1x the first time it enters the viewport. Optional "Fig. 0X" caption.
//   src, alt        image
//   fig             caption number, e.g. "03" → "Fig. 03"
//   caption         caption text
//   aspect          Tailwind aspect class(es), e.g. "aspect-[4/3]"; omit to use the image's own ratio
//   contain         show the whole image on a paper plate (for UI screenshots) instead of cropping
//   className       extra classes on the <figure>
import { motion, useReducedMotion } from 'framer-motion';
import { easeInOutQuart, easeOutExpo } from '../../lib/motion';
import { useDark } from './context';

const Figure = ({ src, alt = '', fig, caption, aspect = '', contain = false, className = '' }) => {
    const reduce = useReducedMotion();
    const dark = useDark();
    const sized = Boolean(aspect);

    return (
        // The unclipped <figure> watches the viewport (a clipped element can read as invisible).
        <motion.figure className={className} initial={reduce ? false : 'hidden'} whileInView="show" viewport={{ once: true, amount: 0.15 }}>
            <motion.div
                className={`relative overflow-hidden rounded-[3px] ${dark ? 'bg-paper/5' : 'bg-paper-2'} ${aspect}`}
                variants={{
                    hidden: { clipPath: 'inset(100% 0% 0% 0%)' },
                    show: { clipPath: 'inset(0% 0% 0% 0%)', transition: { duration: 1.2, ease: easeInOutQuart } },
                }}
            >
                <motion.img
                    src={src}
                    alt={alt}
                    loading="lazy"
                    decoding="async"
                    className={`block w-full ${sized ? 'h-full' : 'h-auto'} ${contain ? `object-contain ${sized ? 'p-[5%]' : ''}` : 'object-cover'}`}
                    variants={{
                        hidden: { scale: 1.15 },
                        show: { scale: 1, transition: { duration: 1.6, ease: easeOutExpo } },
                    }}
                />
            </motion.div>
            {(fig || caption) && (
                <figcaption className="mt-3 flex items-baseline gap-3 text-[0.8rem] leading-snug">
                    {fig && <span className={`label shrink-0 ${dark ? 'text-paper' : 'text-ink'}`}>Fig. {fig}</span>}
                    {caption && <span className={dark ? 'text-paper/55' : 'text-mute'}>{caption}</span>}
                </figcaption>
            )}
        </motion.figure>
    );
};

export default Figure;
