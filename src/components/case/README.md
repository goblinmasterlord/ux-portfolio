# Case-study kit

Building blocks for `src/pages/projects/*.jsx`. Import from `src/components/case`.
Reference pages: `eclipse.jsx` (uses Steps) and `paynance.jsx` (uses AspectList and FeatureColumns).

## Page rules
- Wrap the page in a bare `<main>`. Don't add a background, `overflow-hidden` (it breaks sticky), back or close buttons, contact sections or `window.scrollTo`. The app shell handles nav, footer, transitions and scroll reset.
- Order: `CaseHero` → numbered `CaseSection`s (01, 02…) → `NextProject`.
- Use `dark` on one section per page at most. Kit components inside it pick up dark colours automatically.
- Headline strings (`title` props) take `*word*` for the serif-italic accent. Use one accent per headline, and avoid putting it on "AI" (in the serif italic it reads as "Al").
- Keep the copy factual. Don't invent metrics.

## Components
| Component | Props | Notes |
|---|---|---|
| `CaseHero` | `project`, `title`, `intro`, `meta?`, `image?`, `imageAlt?`, `aspect?` | `project` comes from `caseStudies`. `meta` is `[{label, value}]`: an item with the label Sector, Year or Role replaces that default, and any other label is appended (aim for 4 items). The cover uses a clip wipe and scroll parallax. |
| `CaseSection` | `index`, `label`, `title?`, `wide?`, `dark?`, `id?`, `children` | Hairline rule, sticky label in cols 1–3, content in cols 5–12. `wide` puts the children across all 12 columns. |
| `Lead` | `children` | Large statement paragraph. |
| `Prose` | `children` (`<p>`s) | Body copy at a 65ch measure. `<strong>` gets the ink colour. |
| `NumberedList` | `items: string[]` | Numbered rows with hairlines that draw in. |
| `StatRow` | `stats: [{value, label}]` | Numbers count up once (e.g. `"2.5M+"`, `"1,000+"`, `"98%"`). 2 columns on mobile, n columns on md+. |
| `Figure` | `src`, `alt`, `fig?`, `caption?`, `aspect?`, `contain?`, `className?` | Clip-wipe reveal. `contain` shows a full UI screenshot on a paper plate. |
| `FeatureColumns` | `groups: [{title, points[]}]` | 2–3 columns. Works best in a `wide` section. |
| `FactList` | `items: [{label, value}]` | Label/value rows, e.g. team or stack. |
| `Steps` | `steps: [{title, description, image, alt?}]` | Sticky screenshot frame on lg+ that wipes between steps. Stacked below lg. Put it in a `wide` section. |
| `AspectList` | `items: [{title, description, image, imageAlt?, tags?[]}]`, `figStart?` | Alternating image and text blocks. Put it in a `wide` section. `AspectBlock` is the single block. |
| `NextProject` | `currentId` | Links to `getNextCaseStudy(currentId)`. On desktop, hovering reveals the cover. |

## Skeleton
```jsx
import { caseStudies } from '../../data/projects';
import { CaseHero, CaseSection, Lead, Prose, NumberedList, AspectList, StatRow, NextProject } from '../../components/case';

const project = caseStudies.find((p) => p.id === 'everprove');

const Everprove = () => (
    <main>
        <CaseHero project={project} title="Legal contracts for *everyone*" intro="…" meta={[{ label: 'Platform', value: 'Web app' }]} />
        <CaseSection index="01" label="Overview">
            <Lead>…</Lead>
            <Prose><p>…</p></Prose>
        </CaseSection>
        <CaseSection index="02" label="Challenge" title="…">
            <NumberedList items={[…]} />
        </CaseSection>
        <CaseSection index="03" label="The work" wide>
            <AspectList items={[…]} />
        </CaseSection>
        <CaseSection index="04" label="Results" dark>
            <StatRow stats={[…]} />
        </CaseSection>
        <NextProject currentId={project.id} />
    </main>
);

export default Everprove;
```
