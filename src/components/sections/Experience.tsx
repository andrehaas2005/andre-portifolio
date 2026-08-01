import SectionHeading from "@/components/ui/SectionHeading";
import Badge from "@/components/ui/Badge";
import Reveal from "@/components/ui/Reveal";
import { experience } from "@/lib/content";

export default function Experience() {
  return (
    <section
      id="experiencia"
      aria-labelledby="experiencia-heading"
      className="mx-auto max-w-5xl px-6 py-16 sm:px-8 sm:py-20"
    >
      <Reveal>
        <SectionHeading
          id="experiencia-heading"
          path="experiencia"
          domain="teal"
          eyebrow={experience.eyebrow}
          title={experience.heading}
        />
      </Reveal>
      <ol className="mt-10 space-y-10 border-l border-border-subtle pl-6">
        {experience.items.map((item) => (
          <li key={`${item.company}-${item.role}`} className="relative">
            <span
              aria-hidden="true"
              className="absolute -left-[1.6rem] top-1.5 h-3 w-3 rounded-full border-2 border-accent bg-background"
            />
            <Reveal>
              <div className="flex flex-wrap items-center gap-2">
                <h3 className="text-lg font-semibold text-foreground">
                  {item.company}
                </h3>
                {item.isPlaceholder ? (
                  <Badge domain="teal">placeholder</Badge>
                ) : null}
              </div>
              <p className="mt-1 text-sm font-medium text-accent">{item.role}</p>
              <p className="text-sm text-foreground-muted">{item.period}</p>
              <p className="mt-2 max-w-2xl text-sm text-foreground-muted sm:text-base">
                {item.description}
              </p>
            </Reveal>
          </li>
        ))}
      </ol>
    </section>
  );
}
