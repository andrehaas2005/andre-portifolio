export type Domain = "teal" | "violet" | "amber";

interface SectionHeadingProps {
  id: string;
  path: string;
  eyebrow?: string;
  title: string;
  description?: string;
  domain?: Domain;
}

const domainTextClass: Record<Domain, string> = {
  teal: "text-accent",
  violet: "text-accent-violet",
  amber: "text-accent-amber",
};

export default function SectionHeading({
  id,
  path,
  eyebrow,
  title,
  description,
  domain = "teal",
}: SectionHeadingProps) {
  return (
    <div className="max-w-2xl">
      <p className="flex items-center gap-2 font-mono text-xs uppercase tracking-wide text-foreground-muted">
        <span className={domainTextClass[domain]}>~/{path}</span>
        {eyebrow ? <span>· {eyebrow}</span> : null}
      </p>
      <h2
        id={id}
        className="mt-2 text-2xl font-semibold tracking-tight text-foreground sm:text-3xl"
      >
        {title}
      </h2>
      {description ? (
        <p className="mt-3 text-base text-foreground-muted">{description}</p>
      ) : null}
    </div>
  );
}
