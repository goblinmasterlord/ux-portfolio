// <Callout> — one pull-quote sized statement: the insight a section turns on.
//   children   plain string; *asterisks* mark the serif-italic accent
//   note       optional small line under it (a source, or who said it)
import { RevealText, Reveal } from '../site/Reveal';
import { useDark } from './context';

const Callout = ({ children, note }) => {
    const dark = useDark();
    return (
        <figure className={`border-l-2 pl-5 md:pl-8 ${dark ? 'border-paper' : 'border-signal'}`}>
            <RevealText as="blockquote" className="text-display-s font-medium text-balance max-w-[24ch]">
                {children}
            </RevealText>
            {note && (
                <Reveal as="figcaption" delay={0.2} className={`mt-6 label !leading-[1.5] ${dark ? 'text-paper/50' : 'text-mute'}`}>
                    {note}
                </Reveal>
            )}
        </figure>
    );
};

export default Callout;
