import { Link } from "react-router-dom";
import type { Service } from "../data/services";
import { CardCarousel } from "./CardCarousel";
import { PageHero } from "./PageHero";
import { ServiceThumbnail } from "./ServiceThumbnail";
import { businessContact, services } from "../data/services";

const accentMap: Record<
  Service["accent"],
  { pill: string; icon: string; border: string; cta: string }
> = {
  teal: {
    pill: "bg-websleek-teal/10 text-websleek-teal ring-websleek-teal/20",
    icon: "bg-websleek-teal/10 text-websleek-teal",
    border: "border-websleek-teal/30",
    cta: "bg-websleek-teal hover:bg-websleek-ocean",
  },
  blue: {
    pill: "bg-websleek-blue/10 text-websleek-blue ring-websleek-blue/20",
    icon: "bg-websleek-blue/10 text-websleek-blue",
    border: "border-websleek-blue/30",
    cta: "bg-websleek-blue hover:bg-websleek-ocean",
  },
  ocean: {
    pill: "bg-websleek-ocean/10 text-websleek-ocean ring-websleek-ocean/20",
    icon: "bg-websleek-ocean/10 text-websleek-ocean",
    border: "border-websleek-ocean/30",
    cta: "bg-websleek-ocean hover:bg-websleek-teal",
  },
  green: {
    pill: "bg-websleek-green/10 text-websleek-green ring-websleek-green/20",
    icon: "bg-websleek-green/10 text-websleek-green",
    border: "border-websleek-green/30",
    cta: "bg-websleek-green hover:bg-websleek-teal",
  },
};

const deliveryPoints = [
  {
    title: "Documented delivery",
    description: "Clear scope, handover materials, and structured support from day one.",
  },
  {
    title: "Subscription-ready",
    description: "Ongoing maintenance and monitoring options built into every engagement.",
  },
  {
    title: "Philippine-focused",
    description: "Serving government agencies, LGUs, SMEs, and partners nationwide.",
  },
] as const;

function CheckIcon({ className = "w-5 h-5" }: { className?: string }) {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
    </svg>
  );
}

type ServiceDetailPageProps = {
  service: Service;
};

export function ServiceDetailPage({ service }: ServiceDetailPageProps) {
  const accent = accentMap[service.accent];
  const others = services.filter((s) => s.slug !== service.slug);

  return (
    <>
      {/* Hero */}
      <PageHero>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 pb-12 md:pt-10 md:pb-16">
          <nav className="flex items-center gap-2 text-sm text-websleek-dark/50 mb-8">
            <Link to="/" className="hover:text-websleek-teal transition-colors">
              Home
            </Link>
            <span aria-hidden>/</span>
            <Link to="/services" className="hover:text-websleek-teal transition-colors">
              Services
            </Link>
            <span aria-hidden>/</span>
            <span className="text-websleek-dark font-medium">{service.shortTitle}</span>
          </nav>

          <div className="grid lg:grid-cols-12 gap-10 lg:gap-12 items-center">
            <div className="order-2 lg:order-1 lg:col-span-7">
              <span
                className={`inline-flex items-center rounded-full px-3.5 py-1 text-xs font-semibold uppercase tracking-wider ring-1 ${accent.pill}`}
              >
                {service.tagline}
              </span>
              <h1 className="mt-5 text-2xl sm:text-4xl lg:text-[2.75rem] font-bold text-websleek-dark leading-[1.12] tracking-tight">
                {service.title}
              </h1>
              <p className="mt-5 text-lg text-websleek-dark/65 leading-relaxed max-w-xl">
                {service.description}
              </p>
              <div className="mt-8 flex flex-col sm:flex-row gap-3">
                <Link
                  to="/contact"
                  className={`inline-flex items-center justify-center rounded-lg text-white text-sm font-semibold px-7 py-3.5 shadow-md transition-colors ${accent.cta}`}
                >
                  Request a quote
                </Link>
                <Link
                  to="/services"
                  className="inline-flex items-center justify-center rounded-lg border border-gray-200 bg-white text-websleek-dark text-sm font-semibold px-7 py-3.5 hover:border-websleek-teal/40 hover:bg-gray-50 transition-colors"
                >
                  All services
                </Link>
              </div>
              <dl className="mt-10 grid grid-cols-2 gap-4 max-w-md">
                <div className="rounded-xl bg-gray-50 border border-gray-100 px-4 py-3">
                  <dt className="text-[10px] font-bold uppercase tracking-wider text-websleek-dark/45">
                    Response
                  </dt>
                  <dd className="mt-0.5 text-sm font-semibold text-websleek-dark">Within 1 business day</dd>
                </div>
                <div className="rounded-xl bg-gray-50 border border-gray-100 px-4 py-3">
                  <dt className="text-[10px] font-bold uppercase tracking-wider text-websleek-dark/45">
                    Coverage
                  </dt>
                  <dd className="mt-0.5 text-sm font-semibold text-websleek-dark">Nationwide (PH)</dd>
                </div>
              </dl>
            </div>

            <div className="order-1 lg:order-2 lg:col-span-5 flex justify-center lg:justify-end">
              <div
                className={`w-full max-w-[300px] sm:max-w-[340px] lg:max-w-[380px] rounded-2xl overflow-hidden shadow-lg ring-1 ring-gray-200/80 border-l-4 ${accent.border} bg-white`}
              >
                <ServiceThumbnail
                  src={service.image}
                  alt={service.title}
                  className="[&_img]:max-h-64 sm:[&_img]:max-h-72 [&_img]:w-full [&_img]:object-contain [&_img]:mx-auto"
                />
              </div>
            </div>
          </div>
        </div>
      </PageHero>

      {/* Delivery pillars */}
      <section className="bg-gray-50/80 border-b border-gray-100 py-10 md:py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <CardCarousel desktopClassName="md:grid md:grid-cols-3" gapClassName="gap-3 md:gap-8">
            {deliveryPoints.map((point) => (
              <div key={point.title} className="flex w-full min-w-0 gap-4 p-4 sm:p-0 rounded-xl sm:rounded-none bg-white sm:bg-transparent border border-gray-100 sm:border-0">
                <span className={`shrink-0 flex items-center justify-center w-10 h-10 rounded-lg ${accent.icon}`}>
                  <CheckIcon className="w-5 h-5" />
                </span>
                <div>
                  <h2 className="text-sm font-bold text-websleek-dark">{point.title}</h2>
                  <p className="mt-1 text-sm text-websleek-dark/55 leading-relaxed">{point.description}</p>
                </div>
              </div>
            ))}
          </CardCarousel>
        </div>
      </section>

      {/* Features */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mb-12 md:mb-14">
            <p className="text-sm font-semibold uppercase tracking-widest text-websleek-teal mb-3">
              Scope of service
            </p>
            <h2 className="text-2xl md:text-3xl font-bold text-websleek-dark">
              What's included in {service.shortTitle}
            </h2>
            <p className="mt-4 text-websleek-dark/60 leading-relaxed">
              A complete, accountable package — not a one-off project that ends at go-live. Every
              engagement can include documentation, support retainers, and long-term partnership.
            </p>
          </div>

          <ul className="grid sm:grid-cols-2 gap-4 lg:gap-5">
            {service.features.map((feature, index) => (
              <li
                key={feature}
                className="group flex gap-4 rounded-xl border border-gray-100 bg-white p-5 md:p-6 shadow-sm hover:shadow-md hover:border-websleek-teal/25 transition-all duration-200"
              >
                <span
                  className={`shrink-0 flex items-center justify-center w-9 h-9 rounded-lg text-xs font-bold ${accent.icon}`}
                >
                  {String(index + 1).padStart(2, "0")}
                </span>
                <div className="min-w-0 pt-0.5">
                  <p className="text-sm md:text-base font-semibold text-websleek-dark leading-snug">
                    {feature}
                  </p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* CTA */}
      <section className="py-14 md:py-16 bg-websleek-dark text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
            <div>
              <h2 className="text-2xl md:text-3xl font-bold leading-tight">
                Ready to get started with {service.shortTitle}?
              </h2>
              <p className="mt-4 text-white/65 leading-relaxed">
                Tell us about your requirements. We'll qualify the fit and provide a scoped proposal
                — no generic sales pitch.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row lg:flex-col xl:flex-row gap-4 lg:gap-3">
              <a
                href={businessContact.phoneHref}
                className="flex items-center gap-4 rounded-xl bg-white/5 border border-white/10 px-5 py-4 hover:bg-white/10 transition-colors"
              >
                <span className="flex items-center justify-center w-11 h-11 rounded-full bg-websleek-teal/20 text-websleek-sky shrink-0">
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
                  </svg>
                </span>
                <span>
                  <span className="block text-[10px] uppercase tracking-wider text-white/45">Phone</span>
                  <span className="block text-sm font-semibold">{businessContact.phone}</span>
                </span>
              </a>
              <a
                href={businessContact.emailHref}
                className="flex items-center gap-4 rounded-xl bg-white/5 border border-white/10 px-5 py-4 hover:bg-white/10 transition-colors"
              >
                <span className="flex items-center justify-center w-11 h-11 rounded-full bg-websleek-teal/20 text-websleek-sky shrink-0">
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                  </svg>
                </span>
                <span className="min-w-0">
                  <span className="block text-[10px] uppercase tracking-wider text-white/45">Email</span>
                  <span className="block text-sm font-semibold truncate">{businessContact.email}</span>
                </span>
              </a>
            </div>
          </div>
          <div className="mt-10 pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="text-sm text-white/50">Websleek IT Solutions · Philippines</p>
            <Link
              to="/contact"
              className={`inline-flex items-center justify-center rounded-lg text-white text-sm font-semibold px-8 py-3 transition-colors ${accent.cta}`}
            >
              Start a conversation
            </Link>
          </div>
        </div>
      </section>

      {/* Related services */}
      <section className="py-16 md:py-20 bg-gray-50/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-8">
            <div>
              <p className="text-sm font-semibold uppercase tracking-widest text-websleek-teal mb-2">
                More from Websleek
              </p>
              <h2 className="text-xl md:text-2xl font-bold text-websleek-dark">Related services</h2>
            </div>
            <Link
              to="/services"
              className="text-sm font-semibold text-websleek-teal hover:text-websleek-ocean transition-colors shrink-0"
            >
              View all services →
            </Link>
          </div>
          <CardCarousel desktopClassName="sm:grid sm:grid-cols-3" gridFrom="sm">
            {others.map((s) => (
              <Link
                key={s.slug}
                to={`/services/${s.slug}`}
                className="group flex flex-col w-full min-w-0 rounded-2xl bg-white border border-gray-100 overflow-hidden shadow-sm hover:shadow-lg hover:border-websleek-teal/20 transition-all"
              >
                <ServiceThumbnail
                  src={s.image}
                  alt={s.title}
                  className="[&_img]:max-h-40 [&_img]:w-full [&_img]:object-contain sm:[&_img]:max-h-none"
                />
                <div className="p-5 border-t border-gray-50">
                  <p className="font-semibold text-websleek-dark group-hover:text-websleek-teal transition-colors">
                    {s.shortTitle}
                  </p>
                  <p className="mt-1 text-xs text-websleek-dark/50 line-clamp-2">{s.description}</p>
                  <span className="mt-3 inline-flex text-xs font-semibold text-websleek-teal">
                    Learn more →
                  </span>
                </div>
              </Link>
            ))}
          </CardCarousel>
        </div>
      </section>
    </>
  );
}
