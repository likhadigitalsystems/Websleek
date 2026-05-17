type SectionHeadingProps = {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  align?: "left" | "center";
  light?: boolean;
};

export function SectionHeading({
  eyebrow,
  title,
  subtitle,
  align = "center",
  light = false,
}: SectionHeadingProps) {
  const alignClass = align === "center" ? "text-center mx-auto" : "text-left";

  return (
    <div className={`max-w-3xl mb-8 sm:mb-12 ${alignClass}`}>
      {eyebrow && (
        <p
          className={`text-xs sm:text-sm font-semibold uppercase tracking-widest mb-2 sm:mb-3 ${
            light ? "text-websleek-sky" : "text-websleek-blue"
          }`}
        >
          {eyebrow}
        </p>
      )}
      <h2
        className={`text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight leading-tight ${
          light ? "text-white" : "text-websleek-dark"
        }`}
      >
        {title}
      </h2>
      {subtitle && (
        <p
          className={`mt-3 sm:mt-4 text-base sm:text-lg leading-relaxed ${
            light ? "text-white/80" : "text-websleek-dark/70"
          }`}
        >
          {subtitle}
        </p>
      )}
    </div>
  );
}
