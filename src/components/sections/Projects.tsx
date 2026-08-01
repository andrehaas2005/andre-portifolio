import SectionHeading from "@/components/ui/SectionHeading";
import Card from "@/components/ui/Card";
import Badge from "@/components/ui/Badge";
import Reveal from "@/components/ui/Reveal";
import { projects } from "@/lib/content";

export default function Projects() {
  return (
    <section
      id="projetos"
      aria-labelledby="projetos-heading"
      className="mx-auto max-w-5xl px-6 py-16 sm:px-8 sm:py-20"
    >
      <Reveal>
        <SectionHeading
          id="projetos-heading"
          path="projetos"
          domain="violet"
          eyebrow={projects.eyebrow}
          title={projects.heading}
        />
      </Reveal>
      <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {projects.items.map((project) => (
          <Reveal key={project.name}>
            <Card domain={project.domain} className="flex h-full flex-col gap-3">
              <h3 className="text-lg font-semibold text-foreground">
                {project.name}
              </h3>
              <p className="flex-1 text-sm text-foreground-muted">
                {project.description}
              </p>
              <ul className="flex flex-wrap gap-2" aria-label="Tecnologias usadas">
                {project.tech.map((tech) => (
                  <li key={tech}>
                    <Badge domain={project.domain}>{tech}</Badge>
                  </li>
                ))}
              </ul>
              <a
                href={project.href}
                className="mt-2 text-sm font-medium text-accent hover:text-accent-strong focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
              >
                Ver projeto →
              </a>
            </Card>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
