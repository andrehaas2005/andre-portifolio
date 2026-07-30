import SectionHeading from "@/components/ui/SectionHeading";
import { contact } from "@/lib/content";

export default function Contact() {
  return (
    <section
      id="contato"
      aria-labelledby="contato-heading"
      className="mx-auto max-w-5xl px-6 py-16 sm:px-8 sm:py-20"
    >
      <SectionHeading
        id="contato-heading"
        eyebrow={contact.eyebrow}
        title={contact.heading}
        description={contact.intro}
      />
      <ul className="mt-8 flex flex-col gap-4 text-base sm:flex-row sm:flex-wrap">
        <li>
          <a
            href={`mailto:${contact.email}`}
            className="inline-flex items-center gap-2 rounded-full border border-border-subtle px-5 py-3 font-medium text-foreground transition-colors hover:border-accent hover:text-accent focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
          >
            <span aria-hidden="true">✉</span>
            {contact.email}
          </a>
        </li>
        <li>
          <a
            href={contact.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full border border-border-subtle px-5 py-3 font-medium text-foreground transition-colors hover:border-accent hover:text-accent focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
          >
            <span aria-hidden="true">in</span>
            LinkedIn
          </a>
        </li>
        <li>
          <a
            href={contact.github}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full border border-border-subtle px-5 py-3 font-medium text-foreground transition-colors hover:border-accent hover:text-accent focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
          >
            <span aria-hidden="true">{"</>"}</span>
            GitHub
          </a>
        </li>
      </ul>
    </section>
  );
}
