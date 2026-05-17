type ServiceThumbnailProps = {
  src: string;
  alt?: string;
  className?: string;
};

/** Shows the full thumbnail without cropping (natural aspect ratio). */
export function ServiceThumbnail({ src, alt = "", className = "" }: ServiceThumbnailProps) {
  return (
    <div
      className={`overflow-hidden bg-gradient-to-br from-websleek-sky/10 to-websleek-teal/5 ${className}`}
    >
      <img src={src} alt={alt} className="w-full h-auto block" loading="lazy" decoding="async" />
    </div>
  );
}
