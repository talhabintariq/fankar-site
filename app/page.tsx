import Link from "next/link";
import { sanityClient } from "@/lib/sanity.client";
import { allServicesQuery } from "@/lib/queries";

export default async function Home() {
  const services = await sanityClient.fetch(allServicesQuery);

  return (
    <main className="mx-auto max-w-6xl px-6 py-16">
      <section className="text-center space-y-4">
        <h1 className="text-4xl md:text-6xl font-bold">Fankar — Where Art Meets Engineering</h1>
        <p className="text-muted-foreground max-w-2xl mx-auto">
          Creative‑tech consultancy building elegant products with Next.js, Tailwind, Sanity, and AI.
        </p>
      </section>

      <section className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {services?.map((s: any) => (
          <Link key={s.slug} href={`/service/${s.slug}`} className="rounded-xl border p-6 hover:shadow-md transition">
            <h3 className="font-semibold">{s.title}</h3>
            <p className="text-sm text-muted-foreground mt-2 line-clamp-3">{s.description}</p>
            <p className="text-sm mt-3 underline">Learn more →</p>
          </Link>
        ))}
      </section>
    </main>
  );
}
