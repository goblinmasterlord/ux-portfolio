import { useEffect, useState } from 'react';
import { useReducedMotion } from 'framer-motion';

// The headline "streams" in token by token, like a model generating it, with
// tokenizer-style tints that settle into plain type once generation finishes.
// Hovering a token afterwards brings its tint and id back.
const TOKENS = ['Turn', 'ing', ' raw', ' intel', 'ligence', ' into', ' products', ' people', ' *trust*', '.'];
const TINTS = ['#D6D5FF', '#FAD6C3', '#CBE9D2', '#F3E5A4', '#F2CFE3'];
const START = 450;

// Deterministic pseudo token ids so they look like a real vocabulary
const tokenId = (t) => [...t].reduce((h, c) => (h * 31 + c.charCodeAt(0)) % 100000, 7) + 1000;
// Slightly irregular cadence feels like real streaming
const delayFor = (i) => START + i * 95 + ((i * 37) % 5) * 22;

const TokenHeadline = ({ className = '', onDone }) => {
    const reduce = useReducedMotion();
    const [count, setCount] = useState(reduce ? TOKENS.length : 0);
    const [settled, setSettled] = useState(reduce);

    useEffect(() => {
        if (reduce) {
            onDone?.();
            return;
        }
        const timers = TOKENS.map((_, i) => setTimeout(() => setCount(i + 1), delayFor(i)));
        timers.push(
            setTimeout(() => {
                setSettled(true);
                onDone?.();
            }, delayFor(TOKENS.length) + 700),
        );
        return () => timers.forEach(clearTimeout);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [reduce]);

    const plain = TOKENS.join('').replace(/\*/g, '');

    return (
        <h1 className={`isolate ${className}`} aria-label={plain}>
            <span aria-hidden="true">
                {TOKENS.map((raw, i) => {
                    const accent = raw.includes('*');
                    const text = raw.replace(/\*/g, '');
                    const lead = text.startsWith(' ');
                    const visible = i < count;
                    return (
                        <span key={i}>
                            {lead && ' '}
                            {/* the line break after "intelligence" only applies on wide screens */}
                            {i === 5 && <br className="hidden md:block" />}
                            <span
                                className={`token group/token relative ${accent ? 'serif-accent pr-[0.04em]' : ''} ${settled ? 'token-settled' : ''}`}
                                style={{ opacity: visible ? 1 : 0, '--tint': TINTS[i % TINTS.length] }}
                                data-on={visible && !settled ? '' : undefined}
                                data-token
                            >
                                {lead ? text.slice(1) : text}
                                {settled && (
                                    <span className="pointer-events-none absolute left-0 -top-7 hidden md:block font-mono text-[0.75rem] tracking-normal font-normal not-italic text-mute opacity-0 group-hover/token:opacity-100 transition-opacity">
                                        {tokenId(raw)}
                                    </span>
                                )}
                            </span>
                        </span>
                    );
                })}
                <span
                    className={`inline-block align-baseline w-[0.08em] h-[0.78em] ml-[0.06em] -mb-[0.04em] bg-signal ${settled ? 'animate-blink' : ''}`}
                />
            </span>
        </h1>
    );
};

export default TokenHeadline;
