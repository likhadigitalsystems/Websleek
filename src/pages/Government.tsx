import { Button } from "../components/Button";
import { PageHero } from "../components/PageHero";
import { CTASection } from "../components/CTASection";
import { SectionHeading } from "../components/SectionHeading";
import { govCapabilities, govTerms } from "../data/content";

export function Government() {
  return (
    <>
      <PageHero className="py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-sm font-semibold uppercase tracking-widest text-websleek-teal mb-3">
            Government
          </p>
          <h1 className="text-4xl md:text-5xl font-bold text-websleek-dark max-w-3xl">
            Evaluation-ready capability — not just marketing
          </h1>
          <p className="mt-4 text-lg text-websleek-dark/70 max-w-2xl">
            This page is built for procurement reviewers, IT officers, and LGU decision-makers who
            need proof of process, security, and documentation.
          </p>
          <div className="mt-8">
            <Button to="/contact">Discuss a Government Project</Button>
          </div>
        </div>
      </PageHero>

      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Capability layer"
            title="Government Systems Experience"
            subtitle="What evaluators look for — and what most IT vendors skip."
          />
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {govCapabilities.map((cap) => (
              <div
                key={cap}
                className="flex items-start gap-4 p-6 rounded-xl bg-websleek-sky/10 border border-websleek-sky/20"
              >
                <span className="flex items-center justify-center w-10 h-10 rounded-lg bg-websleek-blue text-white font-bold shrink-0">
                  ✓
                </span>
                <p className="font-medium text-websleek-dark">{cap}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-websleek-sky/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12">
            <div>
              <SectionHeading
                eyebrow="Language"
                title="We speak procurement"
                align="left"
              />
              <div className="flex flex-wrap gap-3">
                {govTerms.map((term) => (
                  <span
                    key={term}
                    className="px-4 py-2 rounded-full bg-white border border-websleek-blue/30 text-sm font-semibold text-websleek-blue"
                  >
                    {term}
                  </span>
                ))}
              </div>
            </div>
            <div className="rounded-2xl bg-white p-8 border border-websleek-sky/25 shadow-sm">
              <h3 className="text-xl font-bold text-websleek-dark">Land → Expand Strategy</h3>
              <p className="mt-3 text-websleek-dark/70 text-sm leading-relaxed">
                Don't pitch large systems first. Start with a website upgrade, inventory module, or
                single-department workflow — then expand into full systems, hosting, retainers, and
                additional departments.
              </p>
              <ul className="mt-6 space-y-3 text-sm">
                <li className="flex gap-2">
                  <span className="text-websleek-green font-bold">1.</span>
                  Entry: website upgrade, asset module, or workflow digitization
                </li>
                <li className="flex gap-2">
                  <span className="text-websleek-green font-bold">2.</span>
                  Expand: full GovFlow™ system deployment
                </li>
                <li className="flex gap-2">
                  <span className="text-websleek-green font-bold">3.</span>
                  Retain: hosting, SLA support, compliance assistance
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="GovFlow™"
            title="Built for agencies & LGUs"
            subtitle="Request → Approval → Action workflows with audit trails, role-based permissions, and exportable reports."
          />
          <div className="rounded-2xl gradient-brand p-8 md:p-12 text-white">
            <div className="grid md:grid-cols-2 gap-8">
              <ul className="space-y-3">
                {[
                  "Workflow digitization",
                  "Asset / inventory tracking",
                  "Audit trail & logs",
                  "Role-based permissions",
                ].map((item) => (
                  <li key={item} className="flex items-center gap-3">
                    <span className="w-2 h-2 rounded-full bg-websleek-sky" />
                    {item}
                  </li>
                ))}
              </ul>
              <ul className="space-y-3">
                {[
                  "Exportable reports",
                  "Documentation package",
                  "Data-privacy-aware design",
                  "Operational continuity focus",
                ].map((item) => (
                  <li key={item} className="flex items-center gap-3">
                    <span className="w-2 h-2 rounded-full bg-websleek-sky" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      <CTASection />
    </>
  );
}
