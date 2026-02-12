import { ReactNode } from "react";

interface SectionProps {
  children: ReactNode;
  className?: string;
  id?: string;
  onMouseMove?: (e: React.MouseEvent) => void;
}

export function Section({
  children,
  className = "",
  id,
  onMouseMove,
}: SectionProps) {
  return (
    <section
      id={id}
      className={`px-6 py-24 md:px-12 lg:px-24 w-full max-w-7xl mx-auto ${className}`}
      onMouseMove={onMouseMove}
    >
      {children}
    </section>
  );
}
