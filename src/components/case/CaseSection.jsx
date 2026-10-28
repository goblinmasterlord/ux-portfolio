// <CaseSection> — the backbone of a case study. A hairline rule with big space above it,
// a "(01) —— Label" in the left 3 columns (sticky unless `wide`) and content in columns 5–12.
//   index      "01", "02"… (sections are numbered in page order)
//   label      short section name, e.g. "Challenge"
//   title      optional h2 statement; *asterisks* mark the serif-italic accent
//   wide       children span all 12 columns under the header (galleries, Steps, AspectList)
//   dark       ink background for contrast; use at most once per page. Kit components
//              inside adapt their colours automatically.
import { RevealText } from '../site/Reveal';
import SectionLabel from '../site/SectionLabel';
import { DarkContext } from './context';

const CaseSection = ({ index, label, title, wide = false, dark = false, id, children }) => {
    const heading = title && (
        <RevealText as="h2" className="text-display-s font-medium text-balance max-w-[22ch]">
            {title}
        </RevealText>
    );

    const body = (
        <div className="grid-12 gap-y-10">
            {/* Sticky only when the label has its own column; in wide sections content runs underneath it */}
            <div className={`col-span-4 md:col-span-3 self-start ${wide ? '' : 'md:sticky md:top-28'}`}>
                <SectionLabel index={index} inverted={dark}>{label}</SectionLabel>
            </div>
            {wide ? (
                <>
                    {heading && <div className="col-span-4 md:col-span-8 md:col-start-5">{heading}</div>}
                    <div className="col-span-4 md:col-span-12 mt-6 md:mt-16">{children}</div>
                </>
            ) : (
                <div className="col-span-4 md:col-span-8 md:col-start-5 flex flex-col gap-12 md:gap-16">
                    {heading}
                    {children}
                </div>
            )}
        </div>
    );

    return (
        <DarkContext.Provider value={dark}>
            {dark ? (
                <section id={id} className="mt-section bg-ink text-paper">
                    <div className="shell py-section">{body}</div>
                </section>
            ) : (
                <section id={id} className="shell pt-section">
                    <div className="border-t border-line pt-5 md:pt-6">{body}</div>
                </section>
            )}
        </DarkContext.Provider>
    );
};

export default CaseSection;
