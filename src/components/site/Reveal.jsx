import { motion } from 'framer-motion';
import { easeOutExpo } from '../../lib/motion';

// Fades + lifts its children the first time they enter the viewport.
export const Reveal = ({ as = 'div', children, delay = 0, y = 24, className = '', amount = 0.2 }) => {
    const Tag = motion[as];
    return (
        <Tag
            className={className}
            initial={{ opacity: 0, y }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount }}
            transition={{ duration: 0.9, ease: easeOutExpo, delay }}
        >
            {children}
        </Tag>
    );
};

// Word-masked headline reveal: each word slides up from behind its own clip.
// `children` must be a plain string; wrap accent words with *asterisks* to set them in the serif italic.
export const RevealText = ({ as = 'h2', children, className = '', delay = 0, stagger = 0.04, immediate = false }) => {
    const Tag = motion[as];
    const words = children.split(' ');
    const trigger = immediate
        ? { initial: 'hidden', animate: 'show' }
        : { initial: 'hidden', whileInView: 'show', viewport: { once: true, amount: 0.4 } };

    return (
        <Tag className={className} {...trigger} transition={{ staggerChildren: stagger, delayChildren: delay }} aria-label={children.replace(/\*/g, '')}>
            {words.map((word, i) => {
                const accent = word.startsWith('*');
                const text = word.replace(/\*/g, '');
                return (
                    <span key={i} aria-hidden="true" className="inline-block overflow-hidden align-bottom pb-[0.08em] -mb-[0.08em]">
                        <motion.span
                            className={`inline-block ${accent ? 'serif-accent' : ''}`}
                            variants={{ hidden: { y: '110%' }, show: { y: '0%', transition: { duration: 1, ease: easeOutExpo } } }}
                        >
                            {text}
                        </motion.span>
                        {i < words.length - 1 && ' '}
                    </span>
                );
            })}
        </Tag>
    );
};
