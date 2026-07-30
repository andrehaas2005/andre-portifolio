import Link from "next/link";
import { navLinks, siteIdentity } from "@/lib/content";

export default function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-border-subtle bg-background/80 backdrop-blur">
      <nav
        aria-label="Navegação principal"
        className="mx-auto flex max-w-5xl items-center justify-between px-6 py-4 sm:px-8"
      >
        <Link
          href="#top"
          className="text-base font-semibold tracking-tight text-foreground focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
        >
          {siteIdentity.name}
        </Link>
        <ul className="flex items-center gap-4 overflow-x-auto text-sm sm:gap-6">
          {navLinks.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                className="whitespace-nowrap text-foreground-muted transition-colors hover:text-foreground focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
