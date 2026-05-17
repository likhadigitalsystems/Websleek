import { Link } from "react-router-dom";
import { PageHero } from "../components/PageHero";
import { SectionHeading } from "../components/SectionHeading";
import { differentiators } from "../data/content";
import { FeatureIcon } from "../components/Icons";

export function About() {
  return (
    <>
      <PageHero className="py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-sm font-semibold uppercase tracking-widest text-websleek-teal mb-3">
            About Websleek
          </p>
          <h1 className="text-4xl md:text-5xl font-bold text-websleek-dark max-w-3xl leading-tight">
            A government-ready IT partner for the Philippines
          </h1>
          <p className="mt-6 text-lg text-websleek-dark/65 max-w-2xl leading-relaxed">
            Websleek IT Solutions delivers secure, documented, and scalable digital systems for
            Philippine government agencies, LGUs, GOCCs, and SMEs — without enterprise friction.
          </p>
        </div>
      </PageHero>

      <section className="py-16 md:py-24 bg-gray-50/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            title="What sets us apart"
            subtitle="Most competitors sell features and disappear after launch. We sell operational reliability and long-term partnership."
          />
          <div className="grid md:grid-cols-3 gap-8">
            {differentiators.map((item) => (
              <div
                key={item.title}
                className="rounded-2xl bg-white border border-gray-100 p-8 shadow-sm"
              >
                <FeatureIcon name={item.icon} />
                <h3 className="mt-5 text-xl font-bold text-websleek-dark">{item.title}</h3>
                <p className="mt-3 text-websleek-dark/65 leading-relaxed text-sm">{item.description}</p>
              </div>
            ))}
          </div>
          <div className="mt-12 text-center">
            <Link
              to="/contact"
              className="inline-flex items-center justify-center rounded-lg bg-websleek-teal text-white text-sm font-semibold px-8 py-3 hover:bg-websleek-ocean transition-colors"
            >
              Start a conversation
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
