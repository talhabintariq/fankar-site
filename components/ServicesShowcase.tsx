import Link from "next/link";

const services = [
  { title: "AI/ML", href: "/service/ai-ml", color: "from-indigo-500/30 to-purple-500/20", icon: "🤖" },
  { title: "Mobile App Development", href: "/service/mobile-app-development", color: "from-blue-500/40 to-violet-500/30", icon: "📱" },
  { title: "Web Development", href: "/service/web-development", color: "from-sky-500/30 to-teal-500/20", icon: "🖥️" },
  { title: "UI/UX Design", href: "/service/ui-ux-design", color: "from-fuchsia-500/30 to-rose-500/20", icon: "🎨" },
  { title: "Quality Assurance", href: "/service/quality-assurance", color: "from-emerald-500/30 to-lime-500/20", icon: "✅" },
  { title: "Dev Ops", href: "/service/dev-ops", color: "from-cyan-500/30 to-blue-500/20", icon: "⚙️" },
  { title: "Security", href: "/service/security", color: "from-orange-500/30 to-amber-500/20", icon: "🛡️" },
  { title: "Custom App Development", href: "/service/custom-app-development", color: "from-violet-500/30 to-indigo-500/20", icon: "🧩" },
  { title: "Game Development", href: "/service/game-development", color: "from-green-500/30 to-teal-500/20", icon: "🎮" },
];

export default function ServicesShowcase() {
  return (
    <section className="mx-auto max-w-7xl px-6 py-16">
      <div className="mb-8">
        <p className="text-xs font-medium tracking-wider text-white/60">SERVICES</p>
        <h2 className="mt-2 text-3xl md:text-4xl font-bold text-white">Discover Our Expertise</h2>
      </div>

      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {services.map((s, idx) => (
          <Link
            key={idx}
            href={s.href}
            className={[
              "group relative overflow-hidden rounded-2xl border border-white/10",
              "bg-gradient-to-br", s.color,
              "p-5 transition will-change-transform",
              "shadow-[0_16px_40px_-20px_rgba(0,0,0,0.6)]",
              "hover:scale-[1.02]"
            ].join(" ")}
          >
            <div className="text-2xl">{s.icon}</div>
            <div className="mt-3 text-lg font-semibold text-white">{s.title}</div>
            <div className="pointer-events-none absolute -right-24 -top-24 h-56 w-56 rounded-full bg-white/10 blur-2xl transition-opacity group-hover:opacity-70 opacity-40" />
            <div className="mt-4 h-28 rounded-xl bg-black/10 backdrop-blur-sm" />
          </Link>
        ))}
      </div>
    </section>
  );
}
