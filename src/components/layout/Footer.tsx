import { footer, navLinks, siteIdentity, contact } from "@/lib/content";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-border-subtle">
      <div className="mx-auto flex max-w-5xl flex-col gap-6 px-6 py-10 sm:flex-row sm:items-center sm:justify-between sm:px-8">
        <div>
          <p className="text-sm font-semibold text-foreground">
            {siteIdentity.name}
          </p>
          <p className="mt-1 text-sm text-foreground-muted">{footer.note}</p>
        </div>
        <nav aria-label="Links do rodapé">
          <ul className="flex flex-wrap gap-4 text-sm">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="text-foreground-muted transition-colors hover:text-foreground focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
                >
                  {link.label}
                </a>
              </li>
            ))}
            <li>
              <a
                href={`mailto:${contact.email}`}
                className="text-foreground-muted transition-colors hover:text-foreground focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
              >
                Email
              </a>
            </li>
          </ul>
        </nav>
      </div>
      <div className="border-t border-border-subtle px-6 py-4 sm:px-8">
        <p className="text-xs text-foreground-muted">
          © {year} {siteIdentity.name}. Todos os direitos reservados.
        </p>
      </div>
    </footer>
  );
}
