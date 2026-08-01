import type { Domain } from "./SectionHeading";

interface BadgeProps {
  children: React.ReactNode;
  domain?: Domain;
}

const domainClass: Record<Domain, string> = {
  teal: "text-accent border-accent/30",
  violet: "text-accent-violet border-accent-violet/30",
  amber: "text-accent-amber border-accent-amber/30",
};

export default function Badge({ children, domain }: BadgeProps) {
  return (
    <span
      className={`inline-flex items-center border bg-background-elevated-2 px-2.5 py-1 font-mono text-[11px] ${
        domain ? domainClass[domain] : "border-border-subtle text-foreground-muted"
      }`}
    >
      {children}
    </span>
  );
}
