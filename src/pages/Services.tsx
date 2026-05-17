import { Link } from "react-router-dom";
import { CardCarousel } from "../components/CardCarousel";
import { PageHero } from "../components/PageHero";
import { SectionHeading } from "../components/SectionHeading";
import { ServiceThumbnail } from "../components/ServiceThumbnail";
import { businessContact, services } from "../data/services";

export function Services() {
  return (
    <>
      <PageHero className="py-12 md:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-sm font-semibold uppercase tracking-widest text-websleek-teal mb-3">
            Services
          </p>
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-websleek-dark max-w-3xl leading-tight">
            Technology services for{" "}
            <span className="text-websleek-teal">Philippine businesses</span>
          </h1>
          <p className="mt-4 text-base text-websleek-dark/60 max-w-2xl leading-relaxed">
            From hosting and POS to websites and ongoing IT support — delivered with documentation,
            accountability, and long-term partnership.
          </p>
        </div>
      </PageHero>

      <section className="py-10 md:py-14 bg-gray-50/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <CardCarousel desktopClassName="lg:grid lg:grid-cols-4" gapClassName="gap-3 lg:gap-5" gridFrom="lg">
            {services.map((service) => (
              <Link
                key={service.slug}
                to={`/services/${service.slug}`}
                className="group flex flex-col w-full min-w-0 rounded-xl bg-white border border-gray-100 overflow-hidden shadow-sm hover:shadow-md hover:border-websleek-teal/30 transition-all"
              >
                <div className="overflow-hidden">
                  <ServiceThumbnail
                    src={service.image}
                    alt={service.title}
                    className="[&_img]:max-h-40 [&_img]:w-full [&_img]:object-contain [&_img]:mx-auto lg:[&_img]:max-h-32"
                  />
                </div>
                <div className="p-4 flex flex-col flex-1 border-t border-gray-50">
                  <h2 className="text-sm font-bold text-websleek-dark group-hover:text-websleek-teal transition-colors leading-snug">
                    {service.shortTitle}
                  </h2>
                  <p className="mt-2 text-xs text-websleek-dark/55 leading-relaxed flex-1 line-clamp-3">
                    {service.description}
                  </p>
                  <span className="mt-3 inline-flex items-center gap-1 text-xs font-semibold text-websleek-teal">
                    Learn more
                    <span className="group-hover:translate-x-0.5 transition-transform" aria-hidden>→</span>
                  </span>
                </div>
              </Link>
            ))}
          </CardCarousel>
        </div>
      </section>

      <section className="py-12 bg-websleek-teal/10 border-t border-websleek-teal/15">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <SectionHeading
            title="Questions about a service?"
            subtitle="Call or email us — we'll help you find the right fit."
          />
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-2">
            <a
              href={businessContact.phoneHref}
              className="text-sm font-semibold text-websleek-teal hover:text-websleek-ocean"
            >
              {businessContact.phone}
            </a>
            <span className="hidden sm:inline text-websleek-dark/30">|</span>
            <a
              href={businessContact.emailHref}
              className="text-sm font-semibold text-websleek-teal hover:text-websleek-ocean"
            >
              {businessContact.email}
            </a>
          </div>
          <Link
            to="/contact"
            className="inline-flex mt-8 items-center justify-center rounded-lg bg-websleek-teal text-white text-sm font-semibold px-8 py-3 hover:bg-websleek-ocean transition-colors"
          >
            Contact us
          </Link>
        </div>
      </section>
    </>
  );
}
