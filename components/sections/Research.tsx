import { publication } from "@/lib/content";
import { SectionHeading } from "@/components/ui/SectionHeading";

export function Research() {
  return (
    <section id="research" className="py-section">
      <div className="mx-auto w-full max-w-[90rem] px-6 md:px-12">
        <SectionHeading
          index="05"
          eyebrow="Research"
          title="Peer-reviewed, before the agents."
        />

        <article className="mt-14 rounded-card border border-border bg-surface/30 p-6 md:p-10">
          <div className="flex flex-wrap items-center gap-3 font-mono text-xs">
            <span className="rounded-full bg-accent/10 px-3 py-1 uppercase tracking-wider text-accent">
              Publication
            </span>
            <span className="rounded-full border border-blue/40 px-3 py-1 uppercase tracking-wider text-blue">
              {publication.role}
            </span>
            <span className="text-muted">{publication.date}</span>
          </div>

          <h3 className="mt-6 max-w-4xl font-display text-2xl font-bold leading-snug tracking-tight text-text md:text-3xl">
            {publication.title}
          </h3>

          <p className="mt-5 max-w-3xl text-sm leading-relaxed text-muted">
            {publication.authors.map((a, i) => (
              <span key={a}>
                {a === publication.me ? (
                  <strong className="font-semibold text-text">{a}</strong>
                ) : (
                  a
                )}
                {i < publication.authors.length - 1 ? ", " : ""}
              </span>
            ))}
          </p>

          <p className="mt-3 font-mono text-xs text-muted">
            <em>{publication.venue}</em>, {publication.volume}, {publication.pages},{" "}
            {publication.date}
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-3 border-t border-border/60 pt-6">
            <a
              href={publication.url}
              target="_blank"
              rel="noopener noreferrer"
              data-cursor="hover"
              className="rounded-full bg-accent px-5 py-2 font-mono text-xs font-semibold uppercase tracking-wider text-accent-ink transition-transform hover:scale-105"
            >
              Read paper ↗
            </a>
            <span className="font-mono text-xs text-muted">doi:{publication.doi}</span>
          </div>
        </article>
      </div>
    </section>
  );
}
