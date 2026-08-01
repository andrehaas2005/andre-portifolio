import SectionHeading from "@/components/ui/SectionHeading";
import Badge from "@/components/ui/Badge";
import Reveal from "@/components/ui/Reveal";
import { about } from "@/lib/content";

export default function About() {
  return (
    <section
      id="sobre"
      aria-labelledby="sobre-heading"
      className="mx-auto max-w-5xl px-6 py-16 sm:px-8 sm:py-20"
    >
      <Reveal>
        <SectionHeading
          id="sobre-heading"
          path="sobre"
          domain="teal"
          eyebrow={about.eyebrow}
          title={about.heading}
        />
      </Reveal>
      <Reveal className="mt-6">
        <p className="max-w-2xl whitespace-pre-line text-base text-foreground-muted sm:text-lg">
          {about.bio}
        </p>
      </Reveal>
      <Reveal className="mt-8">
        <ul className="flex flex-wrap gap-3" aria-label="Áreas de expertise">
          {about.skills.map((skill) => (
            <li key={skill}>
              <Badge domain="teal">{skill}</Badge>
            </li>
          ))}
        </ul>
      </Reveal>
    </section>
  );
}
