import { caseStudies } from '../../data/projects';
import {
    CaseHero,
    CaseNav,
    Summary,
    CaseSection,
    Lead,
    Prose,
    Callout,
    NumberedList,
    Steps,
    Decisions,
    Ledger,
    Flow,
    FigureGrid,
    StatRow,
    FactList,
    NextProject,
} from '../../components/case';
import coverImage from '../../assets/projects/eclipse/cover.jpg';
import uploadImage from '../../assets/projects/eclipse/upload.jpg';
import overviewImage from '../../assets/projects/eclipse/overview.jpg';
import reviewImage from '../../assets/projects/eclipse/review.jpg';
import exportImage from '../../assets/projects/eclipse/export.jpg';
import reviewPeopleImage from '../../assets/projects/eclipse/review-people.jpg';
import overviewDetailImage from '../../assets/projects/eclipse/overview-crop.jpg';
import contextualImage from '../../assets/projects/eclipse/contextual.jpg';
import drawImage from '../../assets/projects/eclipse/draw.jpg';
import searchImage from '../../assets/projects/eclipse/search.jpg';
import practiceImage from '../../assets/projects/eclipse/practice.jpg';
import batchImage from '../../assets/projects/eclipse/batch.jpg';
import analysingImage from '../../assets/projects/eclipse/analysing.jpg';
import historyImage from '../../assets/projects/eclipse/history.jpg';

const project = caseStudies.find((p) => p.id === 'eclipse');

const summary = [
    {
        label: 'Challenge',
        text: 'When someone asks a school for their records, staff have a month to send them with every other pupil, parent and teacher removed. By hand that takes hours, and one missed name can expose a child.',
    },
    {
        label: 'What I did',
        text: 'I designed the workflow and its screens and built the React frontend, from upload to audit log. I also wrote the extraction prompt behind Enhanced mode.',
    },
    {
        label: 'Outcome',
        text: 'Eclipse is sold to UK schools and multi-academy trusts on annual plans, and has shipped more than 60 updates since November 2025.',
    },
];

const stakes = [
    'Miss one name, nickname or telling detail, and you can expose a child, a parent or a member of staff.',
    'Remove too much, and you withhold information the requester has a right to see.',
    'The same person turns up in many forms: “Amelia Hartwell”, “Amelia”, “AH”, “her mum”.',
    'Whether a detail is sensitive depends on who it is about and who is asking.',
];

const steps = [
    {
        title: 'Upload',
        description: 'Drop in a PDF, an Office file or an email export, or paste text. Pick the request type, then a mode: Standard for fast pattern detection, or Enhanced, where AI reads context and links every finding to a person.',
        image: uploadImage,
        alt: 'Eclipse upload screen with a file drop area, the request type and the Standard or Enhanced mode selector',
        caption: 'Upload: request type and processing mode',
    },
    {
        title: 'Analyse',
        description: 'Analysis ends on a results-first overview: who was found, what kind of data, and what happens next. There is nothing to approve here; every decision happens once, in Review.',
        image: overviewImage,
        alt: 'Analysis Complete screen listing the people found and proportional bars for each category of personal data',
        caption: 'Analysis complete: people and categories at a glance',
    },
    {
        title: 'Review',
        description: 'The document on one side, the people in it on the other. Everything about a person sits under their name with one Keep | Redact control. Anything the AI missed can be searched for or drawn by hand.',
        image: reviewImage,
        alt: 'Review workspace: a fictional exclusion report with outlined findings, and a sidebar grouping findings under each person with Keep and Redact buttons',
        caption: 'Review: grouped by person, one control per row',
    },
    {
        title: 'Export',
        description: 'Redaction removes the text from the PDF rather than covering it. The file comes with an audit log that lists every person and item, whether it was kept or redacted, and where.',
        image: exportImage,
        alt: 'Export screen offering the redacted document and the audit log for download',
        caption: 'Export: redacted PDF and audit log',
    },
];

const decisions = [
    {
        title: 'Group findings by person, not by type',
        problem: 'A flat list of findings is slow to work through and hides the hard cases: a surname that is also a common word, or two different people both called “Mum”.',
        decision: 'In Enhanced mode everything about one person sits under their name, with their other forms of address on one line. A single Keep | Redact control works on the whole person, one item or one occurrence, and each row shows a short category tag instead of repeating the text.',
        image: reviewPeopleImage,
        contain: false,
        alt: 'Review sidebar: Emma Thompson’s group with her aliases on one line and a Keep or Redact choice on each of her 13 items',
        caption: 'One person, every mention and detail, one decision per row',
    },
    {
        title: 'Make judgement calls look like judgement calls',
        problem: 'Health and family details, such as a diagnosis or who a child lives with, are not always meant to go. Redacting them by default quietly withholds information; keeping them by default could expose it.',
        decision: 'They get their own pinned “Contextually sensitive” group, start as Keep so a person decides, and are outlined with a dashed border in the document. People and hard identifiers start as Redact.',
        image: contextualImage,
        contain: false,
        alt: 'The Contextually Sensitive group expanded in the review sidebar, with its items set to Keep',
        caption: 'Contextually sensitive items wait for a person',
    },
    {
        title: 'Decide once, next to the document',
        problem: 'A separate Verify step asked people to approve findings, and then Review asked again. On long documents, people went through the same findings twice.',
        decision: 'Verify became a results-first overview with nothing to approve: who was found, what kind of data, and what happens next. Every decision now happens once, in Review, beside the page it affects.',
        image: overviewDetailImage,
        contain: false,
        alt: 'Analysis Complete overview with the people found, sensitive data by category and the next steps',
        caption: 'Analysis complete, with nothing to approve',
    },
    {
        title: 'Fix what the AI missed in one gesture',
        problem: 'No model finds everything. Adding a missed redaction took several steps, and a missed name usually appears more than once.',
        decision: 'Press S and drag: the box snaps to whole words and asks who it belongs to, with the nearest person suggested. Deleting has an Undo instead of a confirmation. Search & Redact finds every other occurrence as you type, so you tick the ones to remove.',
        image: drawImage,
        contain: false,
        alt: 'A box drawn over a word in the document with a popover asking which person it belongs to',
        caption: 'Draw, snap to words, attach to a person',
        extra: {
            image: searchImage,
            alt: 'Search & Redact drawer listing every occurrence of a search term, with the hits ringed in the document',
            caption: 'Search & Redact: every occurrence, ticked one by one',
        },
    },
    {
        title: 'Teach inside the real product',
        problem: 'Trial users get five documents and need to reach a first real redaction before they run out. A standalone tutorial looked nothing like Eclipse and didn’t follow the real workflow.',
        decision: 'A practice run on a fictional document, through the real screens, that uses no trial documents. A ring marks the next real control and a quiet note explains why; the guide never clicks for you. It took ten rounds to get there.',
        image: practiceImage,
        contain: false,
        alt: 'The practice run: a ring around a real control and a short note explaining what to do next',
        caption: 'The practice run guides through the real interface',
    },
    {
        title: 'Put the one costly decision in plain sight',
        problem: 'On the batch page the cost sat in one card and the button that spent it in another, with equal weight, so nothing said “this is the decision”. Cancel was one irreversible click.',
        decision: 'One column: files, pages, quota cost and time estimate directly above a single “Start processing” button. Once the batch runs, the same slot becomes the progress bar and the promise of an email. Cancelling asks first and says the uploads will be deleted.',
        image: batchImage,
        contain: false,
        alt: 'Batch summary page with files, pages, quota cost and estimated time above the Start processing button',
        caption: 'The batch page, rebuilt around its one decision',
    },
];

const rounds = [
    ['Standalone tutorial', 'Didn’t follow the real workflow and looked unlike Eclipse', 'Teach inside the real screens'],
    ['Large card above each page', 'Duplicated the step indicator, and its “Show” button did the task for the user', 'Never act for the user'],
    ['Slim strip above each page', 'Too small and too far from the action', 'Guidance sits next to the control'],
    ['Dark callout anchored to the control', 'Much better', 'Anchor to the real control'],
    ['Glows, gradient icons, progress segments', 'More decorative than instructional', 'No decoration'],
    ['Mini demos inside the card', 'Pulled attention away from the interface', 'Teach with the real UI'],
    ['Dimmed page with a popup', 'People read the popup and stopped looking at the screen', 'Rings first, a quiet note second'],
    ['Search lesson', 'Hard to follow', 'Show the problem first: ring the missed reference'],
    ['Animated step changes', 'Flicker on automatic transitions', 'Plain CSS transitions'],
    ['A text link as the way in', 'Easy to miss, and no way to replay', 'One designed banner; replay from the profile menu'],
];

const pipeline = [
    {
        step: 'Read',
        nodes: [
            { title: 'Normalise', text: 'Office files, emails and pasted text become a PDF.' },
            { title: 'OCR', text: 'Document AI reads the text and where each word sits.' },
        ],
    },
    {
        step: 'Detect',
        nodes: [
            { title: 'Gemini', text: 'People, their aliases and five categories of sensitive data, each linked to a person.' },
            { title: 'NLP safety net', text: 'Deterministic UK patterns: UPN, NHS and NI numbers, phones, postcodes.' },
        ],
    },
    {
        step: 'Merge',
        nodes: [{ title: 'Deduplicate', text: 'Exact duplicates dropped, name variants merged into one person.' }],
    },
    {
        step: 'Locate',
        nodes: [{ title: 'Map to the page', text: 'Every finding matched to word coordinates; common-word false matches filtered out.' }],
    },
    {
        step: 'Decide',
        nodes: [{ title: 'Human review', text: 'A person keeps or redacts every item, and adds what was missed.', human: true }],
    },
    {
        step: 'Redact',
        nodes: [{ title: 'Remove and log', text: 'Text removed from the PDF; every decision written to the audit log.' }],
    },
];

const craft = [
    { value: '114', label: 'edge states mapped across 6 journeys' },
    { value: '480+', label: 'unit tests, run before every deploy' },
    { value: '47%', label: 'faster page changes in a 50-page review' },
];

const outcome = [
    { value: '60+', label: 'updates shipped since November 2025' },
    { value: '50', label: 'files per batch' },
    { value: '20,000', label: 'pages per batch in Standard mode' },
];

const team = [
    { label: 'Me', value: 'Product design, frontend, extraction prompt' },
    { label: 'Product owner', value: 'Priorities and roadmap' },
    { label: 'Lead engineer', value: 'Backend, document pipeline, billing' },
    { label: 'Machine learning specialist', value: 'Detection models and the feedback loop' },
    { label: 'Data protection officer', value: 'Information governance' },
    { label: 'Strategic adviser', value: 'Multi-academy trust expertise' },
];

const Eclipse = () => (
    <main>
        <CaseHero
            project={project}
            title="Making redaction a decision about *people*"
            intro="Eclipse helps staff in UK schools and multi-academy trusts redact subject access requests, Freedom of Information responses and exclusion paperwork. AI finds every person in the file and everything about them; a person decides what leaves the building."
            meta={[{ label: 'Team', value: 'Product owner, two engineers, a DPO and me' }]}
            image={coverImage}
            imageAlt="Eclipse review workspace with a fictional school report and its findings grouped by person"
        />

        <Summary items={summary} />

        <CaseSection index="01" label="Context" title="A legal deadline, a long file and *everyone* in it">
            <Lead>
                Under UK GDPR, anyone can ask a school for the personal data it holds about them. The school has a
                month to answer, and must take out what belongs to other people.
            </Lead>
            <Prose>
                <p>
                    Requests arrive as subject access requests from parents, Freedom of Information requests from the
                    public, and exclusion or HR casework. The records behind them are long and messy: safeguarding
                    logs, letters, email threads, exports from school systems. The person doing the work is usually a
                    data protection officer or a school business manager, accountable for every line, and there are
                    two ways to get it wrong.
                </p>
            </Prose>
            <NumberedList items={stakes} />
        </CaseSection>

        <CaseSection index="02" label="Insight" title="Redaction is a decision about *people*">
            <Callout>A pattern can find a phone number. It can&apos;t tell you *whose* it is.</Callout>
            <Prose>
                <p>
                    The first version of Eclipse followed its original spec: type the name of the pupil the request is
                    about, then check findings marked red, amber or green by confidence. Over the following year the
                    product moved away from both.
                </p>
                <p>
                    Today Eclipse finds every person in the document first, attaches each piece of personal data to its
                    owner, and turns review into <strong>one question per person: keep or redact?</strong> Every screen
                    below follows from that.
                </p>
            </Prose>
        </CaseSection>

        <CaseSection index="03" label="How it works" title="From upload to a *defensible* export" wide>
            <Steps steps={steps} />
        </CaseSection>

        <CaseSection index="04" label="Decisions" title="Six decisions that shaped the *review*" wide>
            <Decisions items={decisions} figStart={5} />
        </CaseSection>

        <CaseSection index="05" label="Iteration" title="Ten rounds to a guide that stays *quiet*" wide>
            <div className="grid-12 gap-y-12">
                <div className="col-span-4 md:col-span-8 md:col-start-5">
                    <Prose>
                        <p>
                            The practice run is the clearest record of how I work. Each round shipped to a preview,
                            got used, and was kept or thrown out. The rule that came out of it:{' '}
                            <strong>the interface has to be louder than the guide.</strong>
                        </p>
                    </Prose>
                </div>
                <div className="col-span-4 md:col-span-12">
                    <Ledger columns={['Tried', 'What was wrong', 'What I kept']} rows={rounds} />
                </div>
            </div>
        </CaseSection>

        <CaseSection index="06" label="The AI" title="Two engines and a *strict* prompt" wide>
            <div className="grid-12 gap-y-16">
                <div className="col-span-4 md:col-span-8 md:col-start-5">
                    <Prose>
                        <p>
                            Eclipse has two modes, and the interface is open about the difference. <strong>Standard</strong>{' '}
                            runs language-processing models tuned for UK identifiers: fast, half the cost, and grouped by
                            type. <strong>Enhanced</strong> adds OCR and Gemini, which reads context and links every item
                            to a person.
                        </p>
                    </Prose>
                </div>
                <div className="col-span-4 md:col-span-12">
                    <Flow stages={pipeline} caption="Enhanced mode. Standard skips OCR and Gemini and groups findings by type." />
                </div>
                <div className="col-span-4 md:col-span-8 md:col-start-5 flex flex-col gap-12">
                    <Callout note="From the production prompt">
                        Extract only what clearly fits a category. When uncertain, *leave* it out.
                    </Callout>
                    <Prose>
                        <p>
                            The first draft of the prompt told the model: “DO NOT miss any potentially sensitive
                            information.” The production version says the opposite, because the model is no longer the
                            only safety net. Deterministic patterns catch identifiers, Search &amp; Redact and drawing
                            catch the rest, and a person reviews everything.
                        </p>
                        <p>
                            The prompt defines who counts as a person, including people named only by relationship
                            (“Grandma”, “Akira&apos;s uncle”) and staff initials, and five categories of sensitive data,
                            with worked examples of what not to flag: “feeling anxious” is an emotion, not a diagnosis.
                            When reviewers mark a finding as not sensitive, they pick a reason and it goes to a queue the
                            team reviews, rather than straight into a blocklist.
                        </p>
                    </Prose>
                </div>
            </div>
        </CaseSection>

        <CaseSection index="07" label="Process" title="Mapping every path before *changing* one">
            <Prose>
                <p>
                    Regressions in Eclipse hide in the gaps between screens: a refresh during analysis, Back after an
                    export, a batch file reopened from History. So I mapped the flow as six journeys, 32 steps and 114
                    edge states, each with a permanent ID that names its test. A unit test fails if a route exists that
                    the map doesn&apos;t cover.
                </p>
                <p>
                    I build with AI coding agents every day, so the guardrails are explicit: written journey and
                    navigation rules, unit tests that run offline against recorded backend responses, Playwright
                    journeys against staging, and deploy scripts that refuse to build when lint or tests fail. Changes
                    are measured, not assumed: profiling the review step on a real 50-page document cut page changes
                    from 167 to 88 milliseconds, and showed that a risky rewrite of the overlay layer wasn&apos;t needed.
                </p>
            </Prose>
            <StatRow stats={craft} />
        </CaseSection>

        <CaseSection index="08" label="Around the core" title="The states nobody *screenshots*" wide>
            <div className="grid-12 gap-y-12">
                <div className="col-span-4 md:col-span-8 md:col-start-5">
                    <Prose>
                        <p>
                            Waiting, resuming and failing get the same care as the happy path. While a document is
                            analysed, the screen shows a sourced fact about information law instead of a spinner. History
                            puts the documents that need you at the top and warns before files expire. When something
                            breaks, the error names the stage, says you weren&apos;t charged, and offers the next step.
                        </p>
                    </Prose>
                </div>
                <div className="col-span-4 md:col-span-12">
                    <FigureGrid
                        figStart={12}
                        figures={[
                            { src: analysingImage, alt: 'Analysing screen with the eclipse loader and a sourced fact about information law', caption: 'Analysing: a sourced legal fact, not a spinner' },
                            { src: historyImage, alt: 'History page with documents waiting for review at the top', caption: 'History: what needs you comes first' },
                        ]}
                    />
                </div>
            </div>
        </CaseSection>

        <CaseSection index="09" label="Outcome" title="Where it is *now*" dark>
            <Lead>
                Eclipse is live and sold to UK schools and trusts on annual plans, with team accounts that share a page
                pool, Google and Microsoft sign-in, and batch processing.
            </Lead>
            <StatRow stats={outcome} />
            <Prose>
                <p>
                    Next is measurement. The practice run has a defined success metric, the share of new users who
                    complete a first real export, and product analytics now track it without recording any document
                    content, names or file names.
                </p>
            </Prose>
            <FactList items={team} />
        </CaseSection>

        <NextProject currentId={project.id} />
        <CaseNav />
    </main>
);

export default Eclipse;
