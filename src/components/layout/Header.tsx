import Link from "next/link";
import { navLinks, siteIdentity } from "@/lib/content";

export default function Header() {
  return (
    <header className="sticky top-0 z-40 border-b border-border-subtle bg-background/85 backdrop-blur-md">
      <nav
        aria-label="Navegação principal"
        className="mx-auto flex max-w-5xl items-center justify-between gap-4 px-6 py-3.5 sm:px-8"
      >
        <Link
          href="#top"
          className="flex items-center gap-2 font-mono text-[13px] font-semibold tracking-tight text-foreground focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
        >
          <span className="h-[7px] w-[7px] shrink-0 animate-pulse rounded-full bg-accent" aria-hidden="true" />
          {siteIdentity.name.toLowerCase().replace(" ", "")}
          <span className="text-foreground-muted">.dev</span>
        </Link>
        <ul className="flex items-center gap-4 overflow-x-auto font-mono text-[12.5px] sm:gap-5">
          {navLinks.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                aria-label={link.label}
                className="whitespace-nowrap text-foreground-muted transition-colors hover:text-accent focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
              >
                {link.href.replace("#", "~/")}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
