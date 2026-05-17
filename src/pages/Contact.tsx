import { useState } from "react";
import { PageHero } from "../components/PageHero";
import { SectionHeading } from "../components/SectionHeading";

export function Contact() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSubmitted(true);
  }

  return (
    <>
      <PageHero className="py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-sm font-semibold uppercase tracking-widest text-websleek-teal mb-3">
            Contact
          </p>
          <h1 className="text-4xl md:text-5xl font-bold text-websleek-dark">Request a System Assessment</h1>
          <p className="mt-4 text-lg text-websleek-dark/70 max-w-2xl">
            Tell us about your agency or business. We'll qualify the fit and recommend the right
            path — OpsCore, GovFlow, or a scoped entry module.
          </p>
        </div>
      </PageHero>

      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16">
            <div>
              <SectionHeading
                eyebrow="Contact"
                title="Book a call or send details"
                align="left"
              />
              <ul className="space-y-6 text-websleek-dark/80">
                <li>
                  <p className="font-semibold text-websleek-dark">Best for</p>
                  <p className="text-sm mt-1">
                    Government agencies (regional/LGUs), retail & trading, clinics, and service
                    companies ready to move beyond spreadsheets.
                  </p>
                </li>
                <li>
                  <p className="font-semibold text-websleek-dark">What to include</p>
                  <p className="text-sm mt-1">
                    Organization type, current pain points, timeline, and whether you need systems,
                    website, hosting, or all three.
                  </p>
                </li>
                <li>
                  <p className="font-semibold text-websleek-dark">Response</p>
                  <p className="text-sm mt-1">
                    We review submissions and follow up to schedule a qualification call — not a
                    generic sales pitch.
                  </p>
                </li>
              </ul>
            </div>

            <div className="rounded-2xl border border-websleek-sky/25 bg-websleek-sky/5 p-8 md:p-10">
              {submitted ? (
                <div className="text-center py-12">
                  <div className="w-16 h-16 rounded-full bg-websleek-green/20 text-websleek-green flex items-center justify-center mx-auto text-2xl">
                    ✓
                  </div>
                  <h2 className="mt-6 text-2xl font-bold text-websleek-dark">Thank you!</h2>
                  <p className="mt-2 text-websleek-dark/70">
                    We've received your request. Our team will reach out to schedule your system
                    assessment.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid sm:grid-cols-2 gap-5">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-websleek-dark mb-1">
                        Full name *
                      </label>
                      <input
                        id="name"
                        name="name"
                        required
                        className="w-full rounded-lg border border-websleek-sky/40 bg-white px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-websleek-blue"
                      />
                    </div>
                    <div>
                      <label htmlFor="org" className="block text-sm font-medium text-websleek-dark mb-1">
                        Organization *
                      </label>
                      <input
                        id="org"
                        name="org"
                        required
                        className="w-full rounded-lg border border-websleek-sky/40 bg-white px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-websleek-blue"
                      />
                    </div>
                  </div>
                  <div className="grid sm:grid-cols-2 gap-5">
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-websleek-dark mb-1">
                        Email *
                      </label>
                      <input
                        id="email"
                        name="email"
                        type="email"
                        required
                        className="w-full rounded-lg border border-websleek-sky/40 bg-white px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-websleek-blue"
                      />
                    </div>
                    <div>
                      <label htmlFor="phone" className="block text-sm font-medium text-websleek-dark mb-1">
                        Phone
                      </label>
                      <input
                        id="phone"
                        name="phone"
                        type="tel"
                        className="w-full rounded-lg border border-websleek-sky/40 bg-white px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-websleek-blue"
                      />
                    </div>
                  </div>
                  <div>
                    <label htmlFor="type" className="block text-sm font-medium text-websleek-dark mb-1">
                      Organization type *
                    </label>
                    <select
                      id="type"
                      name="type"
                      required
                      className="w-full rounded-lg border border-websleek-sky/40 bg-white px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-websleek-blue"
                    >
                      <option value="">Select...</option>
                      <option value="government">Government / LGU</option>
                      <option value="sme-retail">SME — Retail & Trading</option>
                      <option value="sme-health">SME — Healthcare / Clinic</option>
                      <option value="sme-service">SME — Service Company</option>
                      <option value="other">Other</option>
                    </select>
                  </div>
                  <div>
                    <label htmlFor="interest" className="block text-sm font-medium text-websleek-dark mb-1">
                      Primary interest *
                    </label>
                    <select
                      id="interest"
                      name="interest"
                      required
                      className="w-full rounded-lg border border-websleek-sky/40 bg-white px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-websleek-blue"
                    >
                      <option value="">Select...</option>
                      <option value="opscore">OpsCore™ Business System</option>
                      <option value="govflow">GovFlow™ Management System</option>
                      <option value="website">Gov-Ready Website</option>
                      <option value="hosting">Hosting & Support</option>
                      <option value="retainer">Retainer / Managed Ops</option>
                      <option value="unsure">Not sure — need assessment</option>
                    </select>
                  </div>
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-websleek-dark mb-1">
                      Tell us about your needs
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={4}
                      className="w-full rounded-lg border border-websleek-sky/40 bg-white px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-websleek-blue resize-y"
                      placeholder="Current challenges, timeline, modules needed..."
                    />
                  </div>
                  <button
                    type="submit"
                    className="w-full gradient-brand text-white font-semibold py-3 rounded-lg hover:brightness-110 transition-all shadow-lg shadow-websleek-blue/20"
                  >
                    Submit Assessment Request
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
