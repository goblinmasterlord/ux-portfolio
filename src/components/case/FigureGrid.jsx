// <FigureGrid> — two screenshots side by side (stacked on mobile), e.g. two states of one
// screen. Numbering continues from `figStart`.
//   figures   [{ src, alt, caption }]
import Figure from './Figure';

const pad = (n) => String(n).padStart(2, '0');

const FigureGrid = ({ figures, figStart = 1, screen = true }) => (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-x-[clamp(1rem,1.6vw,1.5rem)] gap-y-10">
        {figures.map((f, i) => (
            <Figure key={f.caption || i} src={f.src} alt={f.alt} caption={f.caption} fig={pad(figStart + i)} screen={screen} />
        ))}
    </div>
);

export default FigureGrid;
