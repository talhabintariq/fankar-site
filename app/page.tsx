"use client";

import { motion } from "framer-motion";
import Link from "next/link";

const services = [
  { href: "/service/web-development", label: "Web Development" },
  { href: "/service/mobile-app-development", label: "Mobile App Development" },
  { href: "/service/custom-app-development", label: "Custom App Development" },
  { href: "/service/ai-ml", label: "AI/ML" },
  { href: "/service/security", label: "Security" },
  { href: "/service/ui-ux-design", label: "UI/UX Design" },
  { href: "/service/quality-assurance", label: "Quality Assurance" },
  { href: "/service/dev-ops", label: "Dev Ops" },
  { href: "/service/game-development", label: "Game Development" },
];

export default function Home() {
  return (
    <main className="mx-auto max-w-6xl px-6 py-16">
      <section className="text-center space-y-6">
        <motion.h1
          className="text-4xl md:text-6xl font-bold"
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
        >
          Fankar — Where Art Meets Engineering
        </motion.h1>
        <p className="text-muted-foreground max-w-2xl mx-auto">
          Creative-tech consultancy building elegant products with Next.js, Tailwind, Sanity, and AI.
        </p>
      </section>

      <section className="mt-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {services.map((s) => (
          <Link
            key={s.href}
            href={s.href}
            className="rounded-xl border p-6 hover:shadow-md transition"
          >
            <h3 className="font-semibold">{s.label}</h3>
            <p className="text-sm text-muted-foreground mt-2">Learn more →</p>
          </Link>
        ))}
      </section>
    </main>
  );
}
