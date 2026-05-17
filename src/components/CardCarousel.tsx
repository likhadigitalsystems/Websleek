import type { ReactNode } from "react";

type CardCarouselProps = {
  children: ReactNode;
  /** Grid classes from breakpoint upward, e.g. `md:grid md:grid-cols-3` */
  desktopClassName?: string;
  /** Min width of each slide on mobile */
  slideSize?: "sm" | "md" | "lg" | "single";
  className?: string;
  gapClassName?: string;
  /** Hide the swipe hint under the carousel */
  hideHint?: boolean;
  /** Breakpoint where carousel becomes grid/layout (match desktopClassName) */
  gridFrom?: "sm" | "md" | "lg";
};

const gridFromReset = {
  sm: "sm:overflow-visible sm:mx-0 sm:px-0 sm:pb-0 sm:[&>*]:min-w-0 sm:[&>*]:max-w-none sm:[&>*]:w-full sm:[&>*]:flex-[unset] sm:[&>*]:flex-shrink sm:[&>*]:snap-align-none",
  md: "md:overflow-visible md:mx-0 md:px-0 md:pb-0 md:[&>*]:min-w-0 md:[&>*]:max-w-none md:[&>*]:w-full md:[&>*]:flex-[unset] md:[&>*]:flex-shrink md:[&>*]:snap-align-none",
  lg: "lg:overflow-visible lg:mx-0 lg:px-0 lg:pb-0 lg:[&>*]:min-w-0 lg:[&>*]:max-w-none lg:[&>*]:w-full lg:[&>*]:flex-[unset] lg:[&>*]:flex-shrink lg:[&>*]:snap-align-none",
} as const;

const slideSizeClass = {
  sm: "[&>*]:min-w-[min(72vw,16rem)]",
  md: "[&>*]:min-w-[min(85vw,20rem)]",
  lg: "[&>*]:min-w-[min(90vw,24rem)]",
  /** One full-width card per swipe on mobile (matches -mx-4 px-4 padding) */
  single: "[&>*]:flex-[0_0_calc(100vw-2rem)] [&>*]:max-w-[calc(100vw-2rem)]",
} as const;

export function CardCarousel({
  children,
  desktopClassName = "md:grid md:grid-cols-3",
  slideSize = "single",
  className = "",
  gapClassName = "gap-4 md:gap-6 lg:gap-8",
  hideHint = false,
  gridFrom = "md",
}: CardCarouselProps) {
  return (
    <div className={className}>
      <div
        className={[
          "flex overflow-x-auto snap-x snap-mandatory",
          "-mx-4 px-4 pb-2",
          "[scrollbar-width:none] [&::-webkit-scrollbar]:hidden",
          slideSizeClass[slideSize],
          "[&>*]:flex-shrink-0 [&>*]:snap-center",
          desktopClassName,
          gridFromReset[gridFrom],
          gapClassName,
        ].join(" ")}
      >
        {children}
      </div>
      {!hideHint && (
        <p
          className={`mt-3 text-center text-[11px] text-websleek-dark/40 ${gridFrom}:hidden`}
          aria-hidden
        >
          Swipe to see more
        </p>
      )}
    </div>
  );
}
