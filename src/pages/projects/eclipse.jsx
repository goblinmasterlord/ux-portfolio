import { caseStudies } from '../../data/projects';
import { CaseHero, CaseSection, Lead, Steps, FactList, NextProject } from '../../components/case';
import uploadImage from '../../assets/projects/eclipse/1-upload.png';
import analyzeImage from '../../assets/projects/eclipse/2-analyze.png';
import reviewImage from '../../assets/projects/eclipse/3-review.png';
import exportImage from '../../assets/projects/eclipse/4-export.png';

const project = caseStudies.find((p) => p.id === 'eclipse');

const steps = [
    {
        title: 'Upload',
        description: 'Upload large documents of 100 to 200+ pages, such as educational records and administrative files.',
        image: uploadImage,
        alt: 'Eclipse upload screen with a drag-and-drop area for PDF documents',
    },
    {
        title: 'Analyse',
        description: "A multi-step AI built on the Vertex API analyses the content semantically. It does not just find PII: it works out context, mapping data to specific individuals and their relationships.",
        image: analyzeImage,
        alt: 'Eclipse analysis screen showing document processing progress',
    },
    {
        title: 'Review',
        description: 'Administrators review the identified individuals and sensitive data points and choose what to redact and what to keep.',
        image: reviewImage,
        alt: 'Eclipse review screen with the document and a list of suggested redactions',
    },
    {
        title: 'Export',
        description: 'Generate the redacted document, along with an audit log for compliance and record-keeping.',
        image: exportImage,
        alt: 'Eclipse export screen with the processed document summary',
    },
];

const team = [
    { label: 'Me', value: 'UX architecture, prompt engineering, frontend development' },
    { label: 'Backend engineer', value: 'System architecture and API integrations' },
    { label: 'Business developer', value: 'Strategy and client partnerships' },
];

const Eclipse = () => (
    <main>
        <CaseHero
            project={project}
            title="Document redaction for *educational* institutions"
            intro="Eclipse Education is an AI-based redaction tool for multi-academy trusts and schools. It finds sensitive information in large documents and lets administrators decide what to redact."
            meta={[{ label: 'Team', value: 'Backend engineer, business developer and me' }]}
        />

        <CaseSection index="01" label="Overview">
            <Lead>
                Schools hold long records full of personal data about pupils and staff. Eclipse finds that data in
                documents of 100 to 200+ pages and shows who each piece belongs to, so an administrator can decide
                what to redact.
            </Lead>
        </CaseSection>

        <CaseSection index="02" label="How it works" title="From upload to *redacted* export" wide>
            <Steps steps={steps} />
        </CaseSection>

        <CaseSection index="03" label="My role" title="Design, prompts and *frontend*" dark>
            <Lead>
                I designed the user flow so a complex process feels manageable for school administrators, wrote the
                prompts behind the semantic analysis and built the frontend. I worked with a backend engineer and a
                business developer.
            </Lead>
            <FactList items={team} />
        </CaseSection>

        <NextProject currentId={project.id} />
    </main>
);

export default Eclipse;
