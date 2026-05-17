import { CardCarousel } from "../components/CardCarousel";
import { PageHero } from "../components/PageHero";
import { CTASection } from "../components/CTASection";
import { SectionHeading } from "../components/SectionHeading";
import { hostingBundles, retainerTiers, solutions } from "../data/content";

const colorMap: Record<string, string> = {
  "websleek-green": "#178768",
  "websleek-blue": "#0a74b1",
  "websleek-teal": "#16777e",
};

export function Solutions() {
  return (
    <>
      <PageHero className="py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-sm font-semibold uppercase tracking-widest text-websleek-teal mb-3">
            Solutions
          </p>
          <h1 className="text-2xl sm:text-4xl md:text-5xl font-bold text-websleek-dark max-w-3xl leading-tight">
            Productized systems, hosting, and long-term support
          </h1>
          <p className="mt-4 text-lg text-websleek-dark/70 max-w-2xl">
            We sell defined offers — not open-ended custom software. Every engagement can include
            hosting and a retainer path.
          </p>
        </div>
      </PageHero>

      <section id="systems" className="py-16 md:py-24 bg-white scroll-mt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Core offers"
            title="IT Systems"
            subtitle="Three productized platforms — scoped for fast sales and clean upgrades."
          />
          <CardCarousel
            desktopClassName="md:flex md:flex-col md:gap-12"
            gapClassName="gap-3 md:gap-12"
            gridFrom="md"
            hideHint
          >
            {solutions.map((sol) => (
              <article
                key={sol.id}
                className="w-full min-w-0 rounded-2xl border border-websleek-sky/25 p-5 sm:p-8 md:p-10 bg-gradient-to-br from-white to-websleek-sky/5"
              >
                <span
                  className="inline-block text-xs font-bold uppercase tracking-wider text-white px-3 py-1 rounded-full mb-4"
                  style={{ backgroundColor: colorMap[sol.color] }}
                >
                  {sol.audience}
                </span>
                <h2 className="text-2xl sm:text-3xl font-bold text-websleek-dark">
                  {sol.name}
                  <span className="text-websleek-blue"> {sol.tagline}</span>
                </h2>
                <p className="mt-4 text-sm sm:text-base text-websleek-dark/70">{sol.highlight}</p>
                <ul className="mt-6 grid sm:grid-cols-2 gap-3">
                  {sol.modules.map((m) => (
                    <li key={m} className="flex items-start gap-2 text-sm">
                      <span className="text-websleek-green font-bold">✓</span>
                      {m}
                    </li>
                  ))}
                </ul>
              </article>
            ))}
          </CardCarousel>
        </div>
      </section>

      <section id="hosting" className="py-16 md:py-24 bg-websleek-sky/10 scroll-mt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Recurring revenue"
            title="Hosting & Support Bundles"
            subtitle="Attach hosting strategically — Standard, Business, and Government tiers."
          />
          <CardCarousel>
            {hostingBundles.map((bundle) => (
              <div
                key={bundle.tier}
                className="w-full min-w-0 bg-white rounded-2xl p-5 sm:p-8 border border-websleek-sky/20 shadow-sm"
              >
                <h3 className="text-xl font-bold text-websleek-blue">{bundle.tier}</h3>
                <p className="text-sm text-websleek-dark/60 mt-1">{bundle.for}</p>
                <ul className="mt-6 space-y-2">
                  {bundle.includes.map((item) => (
                    <li key={item} className="text-sm flex items-center gap-2">
                      <span className="text-websleek-green">●</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </CardCarousel>
        </div>
      </section>

      <section id="websites" className="py-16 md:py-24 bg-white scroll-mt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Retainers"
            title="Every system needs a care plan"
            subtitle="Target 50%+ of clients on retainers. Non-negotiable going forward."
          />
          <CardCarousel>
            {retainerTiers.map((tier, i) => (
              <div
                key={tier.name}
                className={`w-full min-w-0 rounded-2xl p-5 sm:p-8 border-2 ${
                  i === 2
                    ? "border-websleek-blue bg-websleek-blue/5"
                    : "border-websleek-sky/30 bg-white"
                }`}
              >
                {i === 2 && (
                  <span className="text-xs font-bold uppercase text-websleek-blue mb-2 block">
                    Recommended
                  </span>
                )}
                <h3 className="text-xl font-bold">{tier.name}</h3>
                <ul className="mt-4 space-y-2">
                  {tier.items.map((item) => (
                    <li key={item} className="text-sm text-websleek-dark/75">
                      ✓ {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </CardCarousel>
        </div>
      </section>

      <CTASection />
    </>
  );
}
