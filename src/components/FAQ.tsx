import { useState } from "react";
import { faqs } from "../data/content";

export function FAQ() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <p className="text-sm font-semibold uppercase tracking-widest text-websleek-teal text-center mb-3">
          FAQ
        </p>
        <h2 className="text-3xl md:text-4xl font-bold text-websleek-dark text-center mb-10">
          Common questions
        </h2>
        <div className="space-y-3">
          {faqs.map((faq, i) => {
            const isOpen = open === i;
            return (
              <div
                key={faq.question}
                className="rounded-xl border border-gray-100 overflow-hidden bg-white shadow-sm"
              >
                <button
                  type="button"
                  onClick={() => setOpen(isOpen ? null : i)}
                  className="w-full flex items-center justify-between gap-4 px-5 py-4 text-left hover:bg-gray-50/80 transition-colors"
                  aria-expanded={isOpen}
                >
                  <span className="font-semibold text-websleek-dark text-sm md:text-base">
                    {faq.question}
                  </span>
                  <span
                    className={`shrink-0 w-8 h-8 rounded-full flex items-center justify-center text-websleek-teal transition-transform ${
                      isOpen ? "rotate-180 bg-websleek-teal/10" : "bg-gray-50"
                    }`}
                  >
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </span>
                </button>
                {isOpen && (
                  <div className="px-5 pb-5 text-sm text-websleek-dark/70 leading-relaxed border-t border-gray-50 pt-4">
                    {faq.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
