"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export default function Hero() {
  return (
    <section
      className={[
        "relative overflow-hidden",
        "bg-[radial-gradient(120%_120%_at_10%_-20%,#1b2a52_0%,#0f172a_60%,#0b1022_100%)]",
        "pt-20 md:pt-28 pb-16"
      ].join(" ")}
    >
      {/* faint planet/aurora accents */}
      <div className="pointer-events-none absolute -right-32 -top-20 h-[28rem] w-[28rem] rounded-full bg-indigo-600/20 blur-3xl" />
      <div className="pointer-events-none absolute -left-40 top-40 h-[24rem] w-[24rem] rounded-[48px] bg-sky-500/10 blur-3xl" />

      <div className="mx-auto max-w-7xl px-6">
        <motion.h1
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-6xl font-extrabold tracking-tight text-white"
        >
          Your Advanced Tech
          <br className="hidden md:block" /> Partner For All Your Needs
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1, duration: 0.5 }}
          className="mt-4 max-w-2xl text-base md:text-lg text-white/70"
        >
          We fuse artistry with engineering—building elegant software with Next.js,
          Tailwind, Sanity, and AI.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.45 }}
          className="mt-8 flex items-center gap-3"
        >
          <Link
            href="/contact"
            className="inline-flex items-center rounded-lg bg-[#586290] px-5 py-3 text-white shadow-md shadow-indigo-950/40 hover:bg-[#4a5a75] transition"
          >
            Get Started
          </Link>
          <Link
            href="/about"
            className="inline-flex items-center rounded-lg border border-white/20 px-5 py-3 text-white/90 hover:bg-white/10"
          >
            Learn More →
          </Link>
        </motion.div>
      </div>

      {/* soft bottom curve */}
      <div className="absolute inset-x-0 bottom-0 h-10 bg-gradient-to-b from-transparent to-background" />
    </section>
  );
}
