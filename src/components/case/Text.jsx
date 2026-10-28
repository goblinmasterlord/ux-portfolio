// Text blocks for use inside <CaseSection>. Both fade-lift in when scrolled into view.
//   <Lead>   one large statement paragraph (pass a string or inline nodes)
//   <Prose>  body copy, ~65ch measure; pass one or more <p> children
import { Reveal } from '../site/Reveal';
import { useDark } from './context';

export const Lead = ({ children, className = '' }) => {
    const dark = useDark();
    return (
        <Reveal
            as="p"
            className={`text-[clamp(1.35rem,2.05vw,2.1rem)] leading-[1.24] tracking-[-0.025em] font-medium text-pretty max-w-[34ch] ${dark ? 'text-paper' : 'text-ink'} ${className}`}
        >
            {children}
        </Reveal>
    );
};

export const Prose = ({ children, className = '' }) => {
    const dark = useDark();
    return (
        <Reveal
            className={`max-w-[65ch] space-y-5 text-[1.0625rem] leading-[1.65] text-pretty ${dark ? 'text-paper/70 [&_strong]:text-paper' : 'text-ink-2 [&_strong]:text-ink'} [&_strong]:font-medium ${className}`}
        >
            {children}
        </Reveal>
    );
};
