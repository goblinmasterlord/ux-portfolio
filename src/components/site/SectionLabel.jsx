// "(02) — Selected work" style mono label used to open every section.
const SectionLabel = ({ index, children, className = '', inverted = false }) => (
    <div className={`label flex items-center gap-3 ${inverted ? 'text-paper/60' : 'text-mute'} ${className}`}>
        {index && <span className={inverted ? 'text-paper' : 'text-ink'}>({index})</span>}
        <span className={`h-px w-8 ${inverted ? 'bg-paper/30' : 'bg-ink/25'}`} />
        <span>{children}</span>
    </div>
);

export default SectionLabel;
