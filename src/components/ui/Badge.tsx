interface BadgeProps {
  children: React.ReactNode;
}

export default function Badge({ children }: BadgeProps) {
  return (
    <span className="inline-flex items-center rounded-full border border-border-subtle bg-background-elevated px-3 py-1 text-xs font-medium text-foreground-muted">
      {children}
    </span>
  );
}
