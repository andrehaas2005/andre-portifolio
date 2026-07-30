import SectionHeading from "@/components/ui/SectionHeading";
import Card from "@/components/ui/Card";
import { personalProjects } from "@/lib/content";

export default function PersonalProjects() {
  return (
    <section
      id="projetos-pessoais"
      aria-labelledby="projetos-pessoais-heading"
      className="mx-auto max-w-5xl px-6 py-16 sm:px-8 sm:py-20"
    >
      <SectionHeading
        id="projetos-pessoais-heading"
        eyebrow={personalProjects.eyebrow}
        title={personalProjects.heading}
        description="[Descrição opcional da seção placeholder — ex: projetos e iniciativas fora do trabalho]"
      />
      <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2">
        {personalProjects.items.map((item) => (
          <Card key={item.name}>
            <a
              href={item.href}
              className="block focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
            >
              <h3 className="text-lg font-semibold text-foreground">
                {item.name}
              </h3>
              <p className="mt-2 text-sm text-foreground-muted">
                {item.description}
              </p>
            </a>
          </Card>
        ))}
      </div>
    </section>
  );
}
