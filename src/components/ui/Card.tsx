import type { Domain } from "./SectionHeading";

interface CardProps {
  children: React.ReactNode;
  className?: string;
  domain?: Domain;
}

const domainClass: Record<Domain, string> = {
  teal: "",
  violet: "domain-violet",
  amber: "domain-amber",
};

// Painel com cantos técnicos (estilo prancheta). Os spans .corner-bl/.corner-br são
// necessários pra formar os 4 cantos — ver .panel-brackets em globals.css.
export default function Card({ children, className = "", domain = "teal" }: CardProps) {
  return (
    <div
      className={`panel-brackets ${domainClass[domain]} rounded-none border border-border-subtle bg-background-elevated p-6 ${className}`}
    >
      <span className="corner-bl" />
      <span className="corner-br" />
      {children}
    </div>
  );
}
