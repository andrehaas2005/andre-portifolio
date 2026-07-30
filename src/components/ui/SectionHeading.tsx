interface SectionHeadingProps {
  id: string;
  eyebrow?: string;
  title: string;
  description?: string;
}

export default function SectionHeading({
  id,
  eyebrow,
  title,
  description,
}: SectionHeadingProps) {
  return (
    <div className="max-w-2xl">
      {eyebrow ? (
        <p className="text-sm font-medium tracking-wide text-accent uppercase">
          {eyebrow}
        </p>
      ) : null}
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
