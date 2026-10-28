import { caseStudies } from '../../data/projects';
import { CaseHero, CaseSection, Lead, Prose, StatRow, Steps, FactList, NextProject } from '../../components/case';
import uploadImage from '../../assets/projects/eclipse/1-upload.png';
import analyzeImage from '../../assets/projects/eclipse/2-analyze.png';
import reviewImage from '../../assets/projects/eclipse/3-review.png';
import exportImage from '../../assets/projects/eclipse/4-export.png';

const project = caseStudies.find((p) => p.id === 'eclipse');

const steps = [
    {
        title: 'Upload',
        description: 'Securely upload large documents of 100 to 200+ pages. The system is built to handle extensive educational records and administrative files with ease.',
        image: uploadImage,
        alt: 'Eclipse upload screen with a drag-and-drop area for PDF documents',
    },
    {
        title: 'Analyse',
        description: "A multi-step AI, powered by the Vertex API, performs deep semantic analysis. It doesn't just find PII: it understands context, mapping data to specific individuals and their relationships.",
        image: analyzeImage,
        alt: 'Eclipse analysis screen showing document processing progress',
    },
    {
        title: 'Review',
        description: 'Administrators get granular control. They review the identified individuals and sensitive data points and choose exactly what to redact and what to keep.',
        image: reviewImage,
        alt: 'Eclipse review screen with the document and a list of suggested redactions',
    },
    {
        title: 'Export',
        description: 'Generate the finalised, redacted document instantly. The system also produces a comprehensive audit log for compliance and record-keeping.',
        image: exportImage,
        alt: 'Eclipse export screen with the processed document summary',
    },
];

const facts = [
    { value: '200+', label: 'Pages handled in a single document' },
    { value: '4', label: 'Steps from upload to redacted export' },
    { value: '3', label: 'People on the team' },
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
            title="Intelligent document redaction for *educational* institutions"
            intro="Eclipse Education is an AI-based redaction tool built for MATs and schools. It simplifies the complex work of protecting sensitive information in large documents."
            meta={[{ label: 'Team', value: 'Backend engineer, business developer and me' }]}
        />

        <CaseSection index="01" label="Overview" title="Protecting *student* privacy with AI">
            <Lead>
                Users upload documents of 100 to 200 pages. A multi-step AI, powered by the Vertex API, analyses the
                content to identify personally identifiable information.
            </Lead>
            <Prose>
                <p>
                    Beyond simple detection, Eclipse uses semantic analysis to map the data it finds to specific
                    individuals, giving context on what each piece of data is and who it belongs to.
                </p>
            </Prose>
            <StatRow stats={facts} />
        </CaseSection>

        <CaseSection index="02" label="How it works" title="From a 200-page file to a *safe* one in four steps" wide>
            <Steps steps={steps} />
        </CaseSection>

        <CaseSection index="03" label="My role" title="End to end: design, prompts and *frontend*" dark>
            <Lead>
                I architected the entire user flow and UX, so a complex technical process feels intuitive and
                manageable for school administrators. Beyond design, I engineered the prompts that power the
                AI&apos;s semantic analysis and built the full frontend application.
            </Lead>
            <Prose>
                <p>
                    Eclipse was built by a lean team of three. I worked closely with a <strong>backend engineer</strong>,
                    who handled the system architecture and API integrations, and a <strong>business developer</strong>,
                    who managed strategy and client partnerships. Together we turned a complex privacy challenge into a
                    seamless, automated solution.
                </p>
            </Prose>
            <FactList items={team} />
        </CaseSection>

        <NextProject currentId={project.id} />
    </main>
);

export default Eclipse;
