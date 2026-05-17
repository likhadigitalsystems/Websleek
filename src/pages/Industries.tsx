import { Link } from "react-router-dom";
import { Button } from "../components/Button";
import { PageHero } from "../components/PageHero";
import { CTASection } from "../components/CTASection";
import { SectionHeading } from "../components/SectionHeading";
import { industries } from "../data/content";

export function Industries() {
  return (
    <>
      <PageHero className="py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-sm font-semibold uppercase tracking-widest text-websleek-teal mb-3">
            Industries
          </p>
          <h1 className="text-4xl md:text-5xl font-bold text-websleek-dark max-w-3xl">
            Vertical focus for sharper SME marketing
          </h1>
          <p className="mt-4 text-lg text-websleek-dark/70 max-w-2xl">
            SMEs don't buy "systems" — they buy less manual work, fewer errors, faster reporting,
            and compliance readiness.
          </p>
        </div>
      </PageHero>

      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            title="We replace spreadsheets with systems that grow"
            subtitle="Each vertical gets a dedicated landing approach, tailored demo, pricing starting range, and case examples."
          />
          <div className="grid md:grid-cols-3 gap-8">
            {industries.map((ind) => (
              <article
                key={ind.name}
                className="rounded-2xl border border-websleek-sky/25 overflow-hidden hover:shadow-lg transition-shadow"
              >
                <div className="h-2 gradient-brand" />
                <div className="p-8">
                  <h2 className="text-xl font-bold text-websleek-dark">{ind.name}</h2>
                  <div className="mt-6 space-y-4">
                    <div>
                      <p className="text-xs font-semibold uppercase text-websleek-dark/50">The pain</p>
                      <p className="mt-1 text-sm text-websleek-dark/75">{ind.pain}</p>
                    </div>
                    <div>
                      <p className="text-xs font-semibold uppercase text-websleek-green">The outcome</p>
                      <p className="mt-1 text-sm text-websleek-dark/75">{ind.outcome}</p>
                    </div>
                  </div>
                  <Link
                    to="/solutions#systems"
                    className="inline-block mt-6 text-sm font-semibold text-websleek-blue hover:underline"
                  >
                    See OpsCore™ →
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-websleek-sky/10">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <h2 className="text-2xl font-bold">Ready to scope your vertical?</h2>
          <p className="mt-3 text-websleek-dark/70">
            We'll map your workflows and recommend OpsCore modules or a phased entry.
          </p>
          <div className="mt-8">
            <Button to="/contact">Request Assessment</Button>
          </div>
        </div>
      </section>

      <CTASection />
    </>
  );
}
