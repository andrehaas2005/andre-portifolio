import SectionHeading from "@/components/ui/SectionHeading";
import Badge from "@/components/ui/Badge";
import { about } from "@/lib/content";

export default function About() {
  return (
    <section
      id="sobre"
      aria-labelledby="sobre-heading"
      className="mx-auto max-w-5xl px-6 py-16 sm:px-8 sm:py-20"
    >
      <SectionHeading id="sobre-heading" eyebrow={about.eyebrow} title={about.heading} />
      <p className="mt-6 max-w-2xl whitespace-pre-line text-base text-foreground-muted sm:text-lg">
        {about.bio}
      </p>
      <ul className="mt-8 flex flex-wrap gap-3" aria-label="Áreas de expertise">
        {about.skills.map((skill) => (
          <li key={skill}>
            <Badge>{skill}</Badge>
          </li>
        ))}
      </ul>
    </section>
  );
}
