interface CardProps {
  children: React.ReactNode;
  className?: string;
}

export default function Card({ children, className = "" }: CardProps) {
  return (
    <div
      className={`rounded-2xl border border-border-subtle bg-background-elevated p-6 transition-colors hover:border-accent/50 ${className}`}
    >
      {children}
    </div>
  );
}
