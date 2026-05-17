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
    <PageHero overlay={76}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 pb-6 sm:pt-12 sm:pb-8 md:pt-16 md:pb-10 lg:pt-20">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-14 items-center">
          <div className="min-w-0">
            <span className="inline-block rounded-full bg-websleek-teal/10 text-websleek-teal text-[11px] sm:text-xs font-semibold px-3 py-1 sm:px-4 sm:py-1.5 mb-4 sm:mb-6">
              Philippines IT Partner
            </span>
            <h1 className="text-[1.625rem] leading-[1.2] sm:text-4xl sm:leading-[1.15] lg:text-[2.75rem] xl:text-5xl font-bold text-websleek-dark tracking-tight">
              Technology solutions built for{" "}
              <span className="text-websleek-teal">trust, compliance, and scale.</span>
            </h1>
            <p className="mt-4 sm:mt-5 text-[15px] sm:text-base md:text-lg text-websleek-dark/65 leading-relaxed max-w-xl">
              Websleek IT Solutions supports government agencies, LGUs, SMEs, and overseas
              partners with systems, web platforms, hosting, and AI automation.
            </p>
            <div className="mt-6 sm:mt-8 flex flex-col min-[400px]:flex-row gap-3 sm:gap-4">
              <Link
                to="/contact"
                className="inline-flex items-center justify-center rounded-lg bg-websleek-teal text-white text-sm font-semibold px-6 py-2.5 sm:py-3 hover:bg-websleek-ocean transition-colors shadow-sm w-full min-[400px]:w-auto"
              >
                Contact us
              </Link>
              <Link
                to="/services"
                className="inline-flex items-center justify-center gap-1 text-sm font-semibold text-websleek-teal hover:text-websleek-ocean transition-colors min-[400px]:px-2 min-[400px]:py-2.5 sm:py-3"
              >
                View services
                <span aria-hidden>→</span>
              </Link>
            </div>
          </div>

          <div className="rounded-2xl bg-white/90 backdrop-blur-sm border border-gray-100 p-4 sm:p-5 md:p-6 shadow-sm min-w-0">
            <div className="flex flex-col gap-2 sm:flex-row sm:items-start sm:justify-between sm:gap-4 mb-4 sm:mb-5">
              <div className="min-w-0">
                <p className="text-[10px] sm:text-[11px] font-bold uppercase tracking-wider sm:tracking-widest text-websleek-teal">
                  Operations overview
                </p>
                <div className="flex flex-wrap items-center gap-x-2 gap-y-1 mt-1.5">
                  <span className="text-xs sm:text-sm font-semibold text-websleek-dark">Systems health</span>
                  <span className="flex items-center gap-1.5 text-[11px] sm:text-xs text-websleek-dark/60">
                    <span className="w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-emerald-500 animate-pulse shrink-0" aria-hidden />
                    Live
                  </span>
                  <span className="text-[9px] sm:text-[10px] font-semibold uppercase tracking-wide bg-emerald-50 text-emerald-700 px-1.5 sm:px-2 py-0.5 rounded-full">
                    Stable
                  </span>
                </div>
              </div>
              <Link
                to="/solutions"
                className="text-xs font-medium text-websleek-teal hover:text-websleek-ocean shrink-0 self-start sm:self-auto"
              >
                Details →
              </Link>
            </div>

            <div className="grid grid-cols-2 gap-2 sm:gap-3">
              {dashboardItems.map((item) => (
                <div
                  key={item.title}
                  className="rounded-xl bg-white border border-gray-100 p-2.5 sm:p-4 shadow-sm min-w-0"
                >
                  <div className="flex items-center justify-center w-8 h-8 sm:w-9 sm:h-9 rounded-lg bg-websleek-teal/10 text-websleek-teal mb-2 sm:mb-3 [&_svg]:w-4 [&_svg]:h-4 sm:[&_svg]:w-5 sm:[&_svg]:h-5">
                    {item.icon}
                  </div>
                  <p className="text-xs sm:text-sm font-semibold text-websleek-dark leading-snug">{item.title}</p>
                  <p className="text-[10px] sm:text-xs text-websleek-dark/50 mt-0.5 leading-snug line-clamp-2">{item.status}</p>
                </div>
              ))}
            </div>

            <div className="mt-4 sm:mt-5 h-1.5 rounded-full bg-gray-100 overflow-hidden">
              <div className="h-full w-[88%] rounded-full bg-websleek-teal" />
            </div>
          </div>
        </div>

        <div className="mt-8 sm:mt-10 md:mt-14 grid w-full grid-cols-3 gap-2 sm:gap-4 md:gap-6">
          {heroStats.map((stat) => (
            <div
              key={stat.title}
              className="rounded-xl bg-white/90 backdrop-blur-sm border border-gray-100 p-2.5 sm:p-6 md:p-7 shadow-sm hover:shadow-md transition-shadow min-w-0"
            >
              <p className="text-lg sm:text-3xl md:text-4xl font-bold text-websleek-teal leading-none">{stat.value}</p>
              <p className="mt-1 sm:mt-2 text-[10px] sm:text-sm font-bold text-websleek-dark leading-tight">{stat.title}</p>
              <p className="mt-0.5 sm:mt-1 text-[9px] sm:text-xs text-websleek-dark/50 leading-tight line-clamp-2">
                {stat.subtitle}
              </p>
            </div>
          ))}
        </div>
      </div>
    </PageHero>
  );
}
