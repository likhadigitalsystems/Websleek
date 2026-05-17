import { CTASection } from "../components/CTASection";
import { PageHero } from "../components/PageHero";
import { caseStudies } from "../data/content";

export function CaseStudies() {
  return (
    <>
      <PageHero className="py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-websleek-blue text-sm font-semibold uppercase tracking-widest mb-3">
            Case Studies
          </p>
          <h1 className="text-4xl md:text-5xl font-bold text-websleek-dark max-w-3xl">
            Proof of deployment — redacted where required
          </h1>
          <p className="mt-4 text-lg text-websleek-dark/70 max-w-2xl">
            Real outcomes from government and SME engagements. Full details available on request
            during assessment calls.
          </p>
        </div>
      </PageHero>

      <section className="py-16 md:py-24 bg-websleek-sky/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8">
            {caseStudies.map((study) => (
              <article
                key={study.title}
                className="bg-white rounded-2xl p-8 border border-websleek-sky/20 shadow-sm hover:shadow-md transition-shadow flex flex-col"
              >
                <p className="text-xs font-semibold uppercase tracking-wider text-websleek-blue">
                  {study.sector}
                </p>
                <h2 className="mt-3 text-xl font-bold text-websleek-dark">{study.title}</h2>
                <p className="mt-4 text-sm text-websleek-dark/70 leading-relaxed flex-1">
                  {study.summary}
                </p>
                <div className="mt-6 flex flex-wrap gap-2">
                  {study.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-xs px-3 py-1 rounded-full bg-websleek-sky/20 text-websleek-ocean font-medium"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </article>
            ))}
          </div>
          <p className="text-center mt-12 text-sm text-websleek-dark/50">
            Additional case studies available for qualified government and enterprise prospects.
          </p>
        </div>
      </section>

      <CTASection />
    </>
  );
}
