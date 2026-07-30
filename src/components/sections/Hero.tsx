import { hero } from "@/lib/content";

export default function Hero() {
  return (
    <section
      id="top"
      aria-label="Apresentação"
      className="mx-auto flex max-w-5xl flex-col items-start gap-6 px-6 py-20 sm:px-8 sm:py-28"
    >
      <p className="text-sm font-medium tracking-wide text-accent uppercase">
        {hero.greeting}
      </p>
      <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
        {hero.name}
      </h1>
      <p className="text-xl font-medium text-foreground-muted">{hero.role}</p>
      <p className="max-w-xl text-base text-foreground-muted sm:text-lg">
        {hero.pitch}
      </p>
      <div className="flex flex-col gap-4 sm:flex-row">
        <a
          href={hero.ctaPrimary.href}
          className="inline-flex items-center justify-center rounded-full bg-accent px-6 py-3 text-sm font-semibold text-background transition-colors hover:bg-accent-strong focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
        >
          {hero.ctaPrimary.label}
        </a>
        <a
          href={hero.ctaSecondary.href}
          className="inline-flex items-center justify-center rounded-full border border-border-subtle px-6 py-3 text-sm font-semibold text-foreground transition-colors hover:border-accent hover:text-accent focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
        >
          {hero.ctaSecondary.label}
        </a>
      </div>
    </section>
  );
}
