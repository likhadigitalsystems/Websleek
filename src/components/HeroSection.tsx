import { Link } from "react-router-dom";
import { PageHero } from "./PageHero";
import { heroStats } from "../data/content";

const dashboardItems = [
  {
    title: "Infrastructure",
    status: "99.9% uptime",
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2" />
      </svg>
    ),
  },
  {
    title: "Security",
    status: "Compliant",
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
      </svg>
    ),
  },
  {
    title: "Data layer",
    status: "Synced",
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M20.25 6.375c0 2.278-3.694 4.125-8.25 4.125S3.75 8.653 3.75 6.375m16.5 0c0-2.278-3.694-4.125-8.25-4.125S3.75 4.097 3.75 6.375m16.5 0v11.25c0 2.278-3.694 4.125-8.25 4.125s-8.25-1.847-8.25-4.125V6.375" />
      </svg>
    ),
  },
  {
    title: "Automation",
    status: "Active workflows",
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" />
      </svg>
    ),
  },
] as const;

export function HeroSection() {
  return (
    <PageHero>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-12 pb-8 md:pt-16 md:pb-10 lg:pt-20">
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-14 items-center">
          <div>
            <span className="inline-block rounded-full bg-websleek-teal/10 text-websleek-teal text-xs font-semibold px-4 py-1.5 mb-6">
              Philippines IT Partner
            </span>
            <h1 className="text-3xl sm:text-4xl lg:text-[2.75rem] xl:text-5xl font-bold text-websleek-dark leading-[1.15] tracking-tight">
              Technology solutions built for{" "}
              <span className="text-websleek-teal">trust, compliance, and scale.</span>
            </h1>
            <p className="mt-5 text-base md:text-lg text-websleek-dark/65 leading-relaxed max-w-xl">
              Websleek IT Solutions supports government agencies, LGUs, SMEs, and overseas
              partners with systems, web platforms, hosting, and AI automation.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-3 sm:gap-4">
              <Link
                to="/contact"
                className="inline-flex items-center justify-center rounded-lg bg-websleek-teal text-white text-sm font-semibold px-6 py-3 hover:bg-websleek-ocean transition-colors shadow-sm"
              >
                Contact us
              </Link>
              <Link
                to="/services"
                className="inline-flex items-center gap-1 text-sm font-semibold text-websleek-teal hover:text-websleek-ocean transition-colors sm:px-2 sm:py-3"
              >
                View services
                <span aria-hidden>→</span>
              </Link>
            </div>
          </div>

          <div className="rounded-2xl bg-slate-50 border border-gray-100 p-5 md:p-6 shadow-sm">
            <div className="flex items-start justify-between gap-4 mb-5">
              <div>
                <p className="text-[11px] font-bold uppercase tracking-widest text-websleek-teal">
                  Operations overview
                </p>
                <div className="flex flex-wrap items-center gap-2 mt-1.5">
                  <span className="text-sm font-semibold text-websleek-dark">Systems health</span>
                  <span className="flex items-center gap-1.5 text-xs text-websleek-dark/60">
                    <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" aria-hidden />
                    Live
                  </span>
                  <span className="text-[10px] font-semibold uppercase tracking-wide bg-emerald-50 text-emerald-700 px-2 py-0.5 rounded-full">
                    Stable
                  </span>
                </div>
              </div>
              <Link
                to="/solutions"
                className="text-xs font-medium text-websleek-teal hover:text-websleek-ocean shrink-0"
              >
                Details
              </Link>
            </div>

            <div className="grid grid-cols-2 gap-3">
              {dashboardItems.map((item) => (
                <div
                  key={item.title}
                  className="rounded-xl bg-white border border-gray-100 p-4 shadow-sm"
                >
                  <div className="flex items-center justify-center w-9 h-9 rounded-lg bg-websleek-teal/10 text-websleek-teal mb-3">
                    {item.icon}
                  </div>
                  <p className="text-sm font-semibold text-websleek-dark">{item.title}</p>
                  <p className="text-xs text-websleek-dark/50 mt-0.5">{item.status}</p>
                </div>
              ))}
            </div>

            <div className="mt-5 h-1.5 rounded-full bg-gray-100 overflow-hidden">
              <div className="h-full w-[88%] rounded-full bg-websleek-teal" />
            </div>
          </div>
        </div>

        <div className="mt-10 md:mt-14 grid sm:grid-cols-3 gap-4 md:gap-6">
          {heroStats.map((stat) => (
            <div
              key={stat.title}
              className="rounded-xl bg-white border border-gray-100 p-6 md:p-7 shadow-sm hover:shadow-md transition-shadow"
            >
              <p className="text-3xl md:text-4xl font-bold text-websleek-teal">{stat.value}</p>
              <p className="mt-2 text-sm font-bold text-websleek-dark">{stat.title}</p>
              <p className="mt-1 text-xs text-websleek-dark/50">{stat.subtitle}</p>
            </div>
          ))}
        </div>
      </div>
    </PageHero>
  );
}
