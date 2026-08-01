import Image from "next/image";
import { hero } from "@/lib/content";

export default function Hero() {
  return (
    <section
      id="top"
      aria-label="Apresentação"
      className="mx-auto flex max-w-5xl flex-col items-center gap-10 px-6 py-20 sm:px-8 sm:py-28 md:flex-row md:items-start"
    >
      <div className="flex max-w-xl flex-col items-start gap-6 md:order-1">
        <p className="font-mono text-[13px] text-accent">
          $ whoami
          <span className="blink-cursor" aria-hidden="true" />
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
            className="inline-flex items-center justify-center rounded-md bg-accent px-6 py-3 text-sm font-semibold text-background transition-transform hover:-translate-y-0.5 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
          >
            {hero.ctaPrimary.label}
          </a>
          <a
            href={hero.ctaSecondary.href}
            className="inline-flex items-center justify-center rounded-md border border-border-subtle px-6 py-3 text-sm font-semibold text-foreground transition-colors hover:border-accent hover:text-accent focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
          >
            {hero.ctaSecondary.label}
          </a>
        </div>
      </div>
      {hero.photo && (
        <div className="relative h-40 w-40 shrink-0 sm:h-52 sm:w-52 md:order-2">
          <span className="ring-pulse absolute -inset-4 rounded-full border border-accent/25" aria-hidden="true" />
          <span
            className="ring-pulse absolute -inset-8 rounded-full border border-accent/15"
            style={{ animationDelay: "0.6s" }}
            aria-hidden="true"
          />
          <div className="relative h-full w-full overflow-hidden rounded-full border border-accent/40">
            <Image
              src={hero.photo}
              alt={hero.name}
              fill
              sizes="(min-width: 640px) 13rem, 10rem"
              className="object-cover"
              priority
            />
          </div>
        </div>
      )}
    </section>
  );
}
