import logo from "../assets/logo/logo.png";
import { Link } from "react-router-dom";
// import { Linkedin, Instagram, Twitter, Code2 } from "lucide-react";
import { COMPANY } from "../data/company";
import { NAV_LINKS } from "../data/navigation";

const serviceLinks = [
  { name: "Websites", path: "/services" },
  { name: "Web Applications", path: "/services" },
  { name: "Enterprise Solutions", path: "/services" },
  { name: "Full-Stack Development", path: "/services" },
  { name: "Training", path: "/services" },
];

// const social = [
//   { icon: Linkedin, href: COMPANY.social.linkedin, label: "LinkedIn" },
//   { icon: Instagram, href: COMPANY.social.instagram, label: "Instagram" },
//   { icon: Code2, href: COMPANY.social.github, label: "GitHub" }, // Code2 as GitHub substitute
//   { icon: Twitter, href: COMPANY.social.twitter, label: "X" },
// ];

export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-navy-900">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">
          <div className="lg:col-span-1">
            <Link to="/" className="flex items-center gap-2">
              <img
                src={logo}
                alt="Odyssey AI Systems logo"
                className="h-10 w-10 object-contain"
              />
              <span className="text-lg font-bold text-white">{COMPANY.name}</span>
            </Link>
            <p className="mt-4 text-sm leading-relaxed text-slate-400">
              {COMPANY.tagline}
            </p>
          </div>

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-slate-300">
              Company
            </h3>
            <ul className="mt-4 space-y-3">
              {NAV_LINKS.map((l) => (
                <li key={l.path}>
                  <Link
                    to={l.path}
                    className="text-sm text-slate-400 transition hover:text-white"
                  >
                    {l.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-slate-300">
              Services
            </h3>
            <ul className="mt-4 space-y-3">
              {serviceLinks.map((l) => (
                <li key={l.name}>
                  <Link
                    to={l.path}
                    className="text-sm text-slate-400 transition hover:text-white"
                  >
                    {l.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-slate-300">
              Connect
            </h3>
            {/* <div className="mt-4 flex gap-3">
              {social.map(({ icon: Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="flex h-10 w-10 items-center justify-center rounded-lg border border-white/10 text-slate-400 transition hover:border-blue-400/50 hover:bg-blue-500/10 hover:text-blue-300"
                >
                  <Icon className="h-4 w-4" />
                </a>
              ))}
            </div> */}
            <p className="mt-6 text-sm text-slate-500">{COMPANY.email}</p>
          </div>
        </div>

        <div className="mt-12 border-t border-white/10 pt-8 text-center text-sm text-slate-500">
          © 2026 {COMPANY.name}. All rights reserved.
        </div>
      </div>
    </footer>
  );
}