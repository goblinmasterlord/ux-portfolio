import { useState } from 'react';
import { personalEmail } from '../../utils/email';
import { links } from '../../data/projects';
import { RevealText } from './Reveal';
import SectionLabel from './SectionLabel';
import ArrowLink from './ArrowLink';

// The email stays hidden until a person asks for it (keeps naive scrapers out).
export const EmailReveal = () => {
    const [revealed, setRevealed] = useState(false);
    const [copied, setCopied] = useState(false);
    const email = revealed ? personalEmail() : null;

    const copy = async () => {
        try {
            await navigator.clipboard.writeText(personalEmail());
            setCopied(true);
            setTimeout(() => setCopied(false), 2000);
        } catch {
            window.location.href = `mailto:${personalEmail()}`;
        }
    };

    if (!revealed) {
        return (
            <button
                onClick={() => setRevealed(true)}
                className="group w-full flex items-center justify-between gap-6 border-y border-line-inv py-6 md:py-8 text-left"
            >
                <span className="text-display-s font-medium">Write to me</span>
                <span className="label text-paper/60 group-hover:text-paper transition-colors">Reveal email ↓</span>
            </button>
        );
    }

    return (
        <div className="w-full flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-y border-line-inv py-6 md:py-8">
            <a href={`mailto:${email}`} className="text-[clamp(1.25rem,2.4vw,2.5rem)] font-medium tracking-[-0.03em] link-draw break-all">
                {email}
            </a>
            <button onClick={copy} className="label shrink-0 self-start sm:self-auto border border-line-inv rounded-full px-4 py-2.5 hover:bg-paper hover:text-ink transition-colors">
                {copied ? 'Copied ✓' : 'Copy address'}
            </button>
        </div>
    );
};

const fits = [
    'AI strategy, workshops and team training',
    'Product discovery for a new idea',
    'UX for complex, regulated products',
    'Prototypes built with real models',
];

export const ContactBlock = ({ headingAs = 'h2', index }) => (
    <div className="grid-12 gap-y-12">
        <div className="col-span-4 md:col-span-12">
            <SectionLabel index={index} inverted>Contact</SectionLabel>
        </div>
        <RevealText as={headingAs} className="col-span-4 md:col-span-8 text-display-l font-medium text-balance">
            Have a problem AI could *actually* solve?
        </RevealText>
        <div className="col-span-4 md:col-span-5 md:row-start-3 self-end order-last md:order-none">
            <p className="label text-paper/50 mb-4">Good reasons to get in touch</p>
            <ul className="border-t border-line-inv">
                {fits.map((f, i) => (
                    <li key={f} className="flex gap-4 border-b border-line-inv py-3 text-[0.95rem] text-paper/80">
                        <span className="font-mono text-[0.7rem] text-paper/40 pt-1">0{i + 1}</span>
                        {f}
                    </li>
                ))}
            </ul>
        </div>
        <div className="col-span-4 md:col-span-6 md:col-start-7 md:row-start-3 flex flex-col gap-8">
            <p className="text-lead text-paper/70 text-pretty">
                Tell me where your team is stuck. You&apos;ll get an honest answer on whether AI can help, and what it would take.
            </p>
            <EmailReveal />
            <div className="flex flex-wrap gap-x-8 gap-y-3 text-[0.95rem]">
                <ArrowLink href={links.linkedin} target="_blank" rel="noreferrer" arrow="↗">LinkedIn</ArrowLink>
                <ArrowLink href={links.github} target="_blank" rel="noreferrer" arrow="↗">GitHub</ArrowLink>
            </div>
        </div>
    </div>
);
