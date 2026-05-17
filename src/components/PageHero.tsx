import type { ReactNode } from "react";

type PageHeroProps = {
  children: ReactNode;
  className?: string;
  /** Overlay strength over the circuit background (0–100). */
  overlay?: number;
};

export function PageHero({ children, className = "", overlay = 82 }: PageHeroProps) {
  return (
    <section
      className={`relative overflow-hidden border-b border-gray-100/80 hero-page-bg ${className}`}
    >
      <div
        className="absolute inset-0"
        style={{ backgroundColor: `rgba(255, 255, 255, ${overlay / 100})` }}
        aria-hidden
      />
      <div className="relative">{children}</div>
    </section>
  );
}
