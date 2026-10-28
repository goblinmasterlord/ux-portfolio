import { ContactBlock } from '../components/site/ContactBlock';

// Standalone contact page: the footer's contact block, given the whole screen.
const Contact = () => (
    <main className="bg-ink text-paper min-h-[100svh] shell pt-32 md:pt-44 pb-24 flex flex-col justify-center">
        <ContactBlock headingAs="h1" />
    </main>
);

export default Contact;
