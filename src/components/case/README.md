# Case-study kit

Building blocks for `src/pages/projects/*.jsx`. Import from `src/components/case`.
Reference pages: `eclipse.jsx` (the full set: Summary, Steps, Decisions, Ledger, Flow) and `paynance.jsx` (AspectList, Ledger).

## Page rules
- Wrap the page in a bare `<main>`. Don't add a background, `overflow-hidden` (it breaks sticky), back or close buttons, contact sections or `window.scrollTo`. The app shell handles nav, footer, transitions and scroll reset.
- Order: `CaseHero` → `Summary` → numbered `CaseSection`s (01, 02…) → `NextProject` → `CaseNav`.
- Tell it as a case study: context, the problem, what you learned or decided and why, the work, the outcome. Every section should answer "why", not only "what".
- Use `dark` on one section per page at most. Kit components inside it pick up dark colours automatically.
- Headline strings (`title` props) take `*word*` for the serif-italic accent. Use one accent per headline, and avoid putting it on "AI" (in the serif italic it reads as "Al").
- Keep the copy factual. Don't invent metrics, research, quotes or rationale; if a fact isn't confirmed, leave it out.
- UI screenshots: use `screen` (Figure) or the Steps/Decisions components, which frame them. Save as JPG, 2000px wide, fictional data only.

## Components
| Component | Props | Notes |
|---|---|---|
| `CaseHero` | `project`, `title`, `intro`, `meta?`, `image?`, `imageAlt?`, `aspect?` | `project` comes from `caseStudies`. `meta` is `[{label, value}]`: an item with the label Sector, Year or Role replaces that default, and any other label is appended (aim for 4 items). The cover uses a clip wipe and scroll parallax. |
| `CaseSection` | `index`, `label`, `title?`, `wide?`, `dark?`, `id?`, `children` | Hairline rule, sticky label in cols 1–3, content in cols 5–12. `wide` puts the children across all 12 columns. |
| `Lead` | `children` | Large statement paragraph. |
| `Prose` | `children` (`<p>`s) | Body copy at a 65ch measure. `<strong>` gets the ink colour. |
| `NumberedList` | `items: string[]` | Numbered rows with hairlines that draw in. |
| `StatRow` | `stats: [{value, label}]` | Numbers count up once (e.g. `"2.5M+"`, `"1,000+"`, `"98%"`). 2 columns on mobile, n columns on md+. |
| `Figure` | `src`, `alt`, `fig?`, `caption?`, `aspect?`, `contain?`, `screen?`, `className?` | Clip-wipe reveal. `screen` frames a UI screenshot (rounded, hairline, soft shadow) on a paper plate; `contain` shows any image whole. |
| `FeatureColumns` | `groups: [{title, points[]}]` | 2–3 columns. Works best in a `wide` section. |
| `FactList` | `items: [{label, value}]` | Label/value rows, e.g. team or stack. |
| `Steps` | `steps: [{title, description, image, alt?, caption?}]` | Sticky screenshot frame on lg+ that wipes between steps. Stacked below lg. Put it in a `wide` section. |
| `AspectList` | `items: [{title, description, image, imageAlt?, tags?[]}]`, `figStart?` | Alternating image and text blocks. Put it in a `wide` section. `AspectBlock` is the single block. |
| `NextProject` | `currentId` | Links to `getNextCaseStudy(currentId)`. On desktop, hovering reveals the cover. |
| `CaseNav` | — | Floating pill naming the current section and progress; opens a list to jump between sections. Render once, after `NextProject`. Finds sections through the data attributes `CaseSection` sets. |
| `Summary` | `items: [{label, text}]`, `label?` | "At a glance" strip under the hero: Challenge / What I did / Outcome, 2–3 sentences each. |
| `Callout` | `children` (string), `note?` | Pull-quote statement with an accent rule; `*word*` for the serif accent. |
| `Decisions` | `items: [{title, problem, decision, image?, alt?, caption?, extra?}]`, `figStart?` | Problem → what I did, in a sticky column beside a framed screenshot. `extra` adds a second figure. Put it in a `wide` section. |
| `Ledger` | `columns: string[]`, `rows: string[][]`, `accent?` | Numbered table between hairlines (iteration rounds, research methods). Stacks with labels on mobile. |
| `Flow` | `stages: [{step, nodes: [{title, text?, human?}]}]`, `caption?` | Pipeline diagram in type and hairlines; several nodes in a stage run side by side. `human` marks where a person takes over. Put it in a `wide` section. |
| `FigureGrid` | `figures: [{src, alt, caption}]`, `figStart?`, `screen?` | Two framed screenshots side by side. |

## Skeleton
```jsx
import { caseStudies } from '../../data/projects';
import { CaseHero, Summary, CaseSection, Lead, Prose, NumberedList, Decisions, StatRow, NextProject, CaseNav } from '../../components/case';

const project = caseStudies.find((p) => p.id === 'everprove');

const Everprove = () => (
    <main>
        <CaseHero project={project} title="Legal contracts for *everyone*" intro="…" meta={[{ label: 'Team', value: '…' }]} />
        <Summary items={[{ label: 'Challenge', text: '…' }, { label: 'What I did', text: '…' }, { label: 'Outcome', text: '…' }]} />
        <CaseSection index="01" label="Context">
            <Lead>…</Lead>
            <Prose><p>…</p></Prose>
        </CaseSection>
        <CaseSection index="02" label="Challenge" title="…">
            <NumberedList items={[…]} />
        </CaseSection>
        <CaseSection index="03" label="Decisions" wide>
            <Decisions items={[…]} />
        </CaseSection>
        <CaseSection index="04" label="Outcome" dark>
            <StatRow stats={[…]} />
        </CaseSection>
        <NextProject currentId={project.id} />
        <CaseNav />
    </main>
);

export default Everprove;
```
