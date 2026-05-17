import { Link } from "react-router-dom";
import { footerCompanyLinks, footerServiceLinks } from "../data/content";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-websleek-dark text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8 text-center md:text-left">
          <div className="lg:col-span-5 flex flex-col items-center md:items-start">
            <Link
              to="/"
              aria-label="Websleek IT Solutions — Home"
              className="inline-flex flex-col sm:flex-row items-center gap-4 mb-5 group"
            >
              <img
                src="/assets/logo-with-bg.png"
                alt=""
                className="h-20 w-20 shrink-0 rounded-lg ring-1 ring-white/10 group-hover:ring-websleek-sky/40 transition-all"
              />
              <span className="flex flex-col sm:border-l sm:border-white/15 sm:pl-4">
                <span className="font-display text-xl font-bold text-white tracking-wide group-hover:text-websleek-sky transition-colors">
                  Websleek
                </span>
                <span className="text-xs font-semibold uppercase tracking-[0.18em] text-websleek-sky">
                  IT Solutions
                </span>
              </span>
            </Link>
            <p className="text-white/65 text-sm leading-relaxed max-w-sm mx-auto md:mx-0">
              Government-ready IT systems partner delivering secure, documented, and scalable
              digital systems for Philippine agencies, LGUs, and SMEs.
            </p>
          </div>

          <div className="lg:col-span-3 lg:col-start-7 flex flex-col items-center md:items-start">
            <h3 className="font-display font-semibold text-xs uppercase tracking-widest text-websleek-sky mb-4">
              Company
            </h3>
            <ul className="space-y-2.5">
              {footerCompanyLinks.map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className="text-sm text-white/65 hover:text-white transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-3 flex flex-col items-center md:items-start">
            <h3 className="font-display font-semibold text-xs uppercase tracking-widest text-websleek-sky mb-4">
              Services
            </h3>
            <ul className="space-y-2.5">
              {footerServiceLinks.map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className="text-sm text-white/65 hover:text-white transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-10 md:mt-12 pt-8 border-t border-white/10 flex flex-col items-center md:flex-row md:justify-between gap-3 text-xs text-white/45 text-center md:text-left">
          <p>© {year} Websleek IT Solutions. All rights reserved.</p>
          <p>Philippines · Data Privacy · Security Practices</p>
        </div>
      </div>
    </footer>
  );
}
