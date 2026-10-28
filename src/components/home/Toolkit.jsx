const tools = ['Claude', 'GPT', 'Gemini', 'Vercel AI SDK', 'n8n', 'Make', 'Supabase', 'Next.js', 'React', 'Figma', 'Cursor', 'Linear'];

// Slow, endless ticker of the daily toolkit. Pauses on hover; static with reduced motion.
const Toolkit = () => (
    <section className="pt-section" aria-label="Toolkit">
        <div className="shell label text-mute flex justify-between mb-5">
            <span>Daily toolkit</span>
            <span className="hidden sm:inline">Models · orchestration · build</span>
        </div>
        <div className="group overflow-hidden border-y border-line py-6 md:py-8">
            <div className="flex w-max animate-marquee group-hover:[animation-play-state:paused] motion-reduce:animate-none">
                {[0, 1].map((copy) => (
                    <ul key={copy} className="flex shrink-0 items-center" aria-hidden={copy === 1 ? 'true' : undefined}>
                        {tools.map((t) => (
                            <li key={t} className="flex items-center text-display-m font-medium whitespace-nowrap">
                                <span className="px-6 md:px-10">{t}</span>
                                <span className="font-serif italic text-signal">/</span>
                            </li>
                        ))}
                    </ul>
                ))}
            </div>
        </div>
    </section>
);

export default Toolkit;
