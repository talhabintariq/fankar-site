import Link from "next/link";
import { Mail, Phone, MapPin, Facebook, Linkedin, Github } from "lucide-react";

const services = [
  { href: "/service/mobile-app-development", label: "Mobile App Development" },
  { href: "/service/web-development", label: "Web Development" },
  { href: "/service/custom-app-development", label: "Custom App Development" },
  { href: "/service/ai-ml", label: "AI/ML" },
  { href: "/service/security", label: "Security" },
  { href: "/service/ui-ux-design", label: "UI/UX Design" },
  { href: "/service/quality-assurance", label: "Quality Assurance" },
  { href: "/service/dev-ops", label: "Dev Ops" },
  { href: "/service/game-development", label: "Game Development" },
];

const links = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/quick-links", label: "Quick Links" },
  { href: "/contact", label: "Contact" },
];

export default function Footer() {
  return (
    <footer
      className={[
        // match the navbar "Deep Ink" look
        "mt-24 text-white/90",
        "bg-[radial-gradient(120%_120%_at_0%_0%,#1b2a52_0%,#16213e_35%,#0f172a_70%)]",
        "relative overflow-hidden",
      ].join(" ")}
    >
      {/* Decorative soft shapes (optional) */}
      <div className="pointer-events-none absolute -left-24 -top-24 h-72 w-72 rounded-full bg-white/5 blur-2xl" />
      <div className="pointer-events-none absolute -right-24 top-1/3 h-80 w-80 rounded-[48px] bg-white/5 blur-2xl" />

      <div className="mx-auto max-w-7xl px-6 py-14">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-4">
          {/* Brand blurb */}
          <div>
            <div className="text-xl font-semibold tracking-wide">FANKAR</div>
            <p className="mt-3 text-sm text-white/70">
              Creative-tech consultancy crafting elegant products where art meets
              engineering. Next.js, Tailwind, Sanity, and AI.
            </p>

            <div className="mt-4 flex items-center gap-3">
              <Link
                aria-label="GitHub"
                href="https://github.com/talhabintariq"
                className="rounded-md border border-white/10 p-2 hover:bg-white/10"
              >
                <Github className="h-4 w-4" />
              </Link>
              <Link
                aria-label="Facebook"
                href="#"
                className="rounded-md border border-white/10 p-2 hover:bg-white/10"
              >
                <Facebook className="h-4 w-4" />
              </Link>
              <Link
                aria-label="LinkedIn"
                href="#"
                className="rounded-md border border-white/10 p-2 hover:bg-white/10"
              >
                <Linkedin className="h-4 w-4" />
              </Link>
            </div>
          </div>

          {/* Services */}
          <div>
            <div className="text-base font-semibold">Services</div>
            <ul className="mt-4 space-y-2">
              {services.map((s) => (
                <li key={s.href}>
                  <Link
                    href={s.href}
                    className="text-sm text-white/80 hover:text-white"
                  >
                    {s.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <div className="text-base font-semibold">Quick Links</div>
            <ul className="mt-4 space-y-2">
              {links.map((l) => (
                <li key={l.href}>
                  <Link
                    href={l.href}
                    className="text-sm text-white/80 hover:text-white"
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Get In Touch */}
          <div>
            <div className="text-base font-semibold">Get In Touch</div>
            <ul className="mt-4 space-y-3 text-sm">
              <li className="flex items-start gap-2">
                <Mail className="mt-0.5 h-4 w-4 text-white/60" />
                <a className="hover:text-white" href="mailto:hello@fankar.us">
                  hello@fankar.us
                </a>
              </li>
              <li className="flex items-start gap-2">
                <Phone className="mt-0.5 h-4 w-4 text-white/60" />
                <a className="hover:text-white" href="tel:+17348189704">
                  +1 (734) 818-9704
                </a>
              </li>
              <li className="flex items-start gap-2">
                <MapPin className="mt-0.5 h-4 w-4 text-white/60" />
                <span className="text-white/80">
                  Romulus, Michigan, 48174
                </span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/10">
        <div className="mx-auto max-w-7xl px-6 py-4 text-xs text-white/60">
          © {new Date().getFullYear()} Fankar. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
