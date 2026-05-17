import { Link } from "react-router-dom";
import { FAQ } from "../components/FAQ";
import { HeroSection } from "../components/HeroSection";
import { SectionHeading } from "../components/SectionHeading";
import { ServiceIcon } from "../components/ServiceIcons";
import { operationalPillars, processSteps } from "../data/content";
import { ServiceThumbnail } from "../components/ServiceThumbnail";
import { services } from "../data/services";

export function Home() {
  return (
    <>
      <HeroSection />

      {/* Core service areas */}
      <section className="py-16 md:py-24 bg-gray-50/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="What we do"
            title="Our services"
            subtitle="Hosting, POS, websites, and IT support — delivered with accountability for Philippine businesses."
          />
          <div className="grid sm:grid-cols-2 xl:grid-cols-4 gap-6 lg:gap-8">
            {services.map((service) => (
              <Link
                key={service.slug}
                to={`/services/${service.slug}`}
                className="group flex flex-col rounded-2xl bg-white border border-gray-100 overflow-hidden shadow-sm hover:shadow-lg hover:border-websleek-teal/30 transition-all"
              >
                <ServiceThumbnail src={service.image} alt={service.title} />
                <div className="p-5 flex flex-col flex-1">
                  <h3 className="text-sm font-bold text-websleek-dark group-hover:text-websleek-teal transition-colors leading-snug">
                    {service.shortTitle}
                  </h3>
                  <p className="mt-2 text-xs text-websleek-dark/55 leading-relaxed flex-1 line-clamp-3">
                    {service.description}
                  </p>
                  <span className="mt-4 inline-flex items-center gap-1 text-xs font-semibold text-websleek-teal">
                    Learn more
                    <span className="group-hover:translate-x-0.5 transition-transform" aria-hidden>→</span>
                  </span>
                </div>
              </Link>
            ))}
          </div>
          <div className="text-center mt-10">
            <Link
              to="/services"
              className="inline-flex items-center justify-center rounded-lg border border-websleek-teal text-websleek-teal text-sm font-semibold px-6 py-2.5 hover:bg-websleek-teal hover:text-white transition-colors"
            >
              View all services
            </Link>
          </div>
        </div>
      </section>

      {/* Operational clarity */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="How we deliver"
            title="Operational clarity"
            subtitle="Every engagement is built for accountability — not just go-live."
          />
          <div className="grid md:grid-cols-3 gap-6">
            {operationalPillars.map((pillar) => (
              <article
                key={pillar.title}
                className="rounded-2xl border border-websleek-sky/20 bg-gradient-to-b from-white to-websleek-sky/5 p-7"
              >
                <ServiceIcon name={pillar.icon} />
                <h3 className="mt-4 text-lg font-bold text-websleek-dark">{pillar.title}</h3>
                <p className="mt-2 text-sm text-websleek-dark/60 leading-relaxed">{pillar.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-16 md:py-24 bg-websleek-dark text-white relative overflow-hidden">
        <div
          className="absolute inset-0 opacity-20 pointer-events-none"
          style={{
            background:
              "radial-gradient(circle at 20% 50%, var(--color-websleek-teal), transparent 50%)",
          }}
          aria-hidden
        />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Our process"
            title="A structured path"
            subtitle="From discovery to long-term operations — no disappearing after launch."
            light
          />
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {processSteps.map((step) => (
              <div
                key={step.step}
                className="rounded-xl bg-white/5 border border-white/10 p-6 backdrop-blur-sm hover:bg-white/10 transition-colors"
              >
                <span className="text-2xl font-bold text-websleek-sky">{step.step}</span>
                <h3 className="mt-3 text-lg font-bold">{step.title}</h3>
                <p className="mt-2 text-sm text-white/65 leading-relaxed">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <FAQ />

      {/* CTA banner */}
      <section className="py-14 md:py-16 bg-websleek-teal/10 border-y border-websleek-teal/15">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-6 text-center md:text-left">
          <div>
            <h2 className="text-2xl md:text-3xl font-bold text-websleek-dark">
              Ready to discuss your requirements?
            </h2>
            <p className="mt-2 text-websleek-dark/60 text-sm md:text-base">
              Request a system assessment — we'll qualify the fit and recommend the right path.
            </p>
          </div>
          <Link
            to="/contact"
            className="shrink-0 inline-flex items-center justify-center rounded-lg bg-websleek-teal text-white text-sm font-semibold px-8 py-3.5 hover:bg-websleek-ocean transition-colors shadow-md shadow-websleek-teal/25"
          >
            Start a conversation
          </Link>
        </div>
      </section>
    </>
  );
}
