import { sanityClient } from "@/lib/sanity.client";
import { serviceBySlugQuery } from "@/lib/queries";
import { urlFor } from "@/lib/sanity.image";

export default async function GameDevPage() {
  // Make sure your Sanity doc slug is exactly "game-development"
  const data = await sanityClient.fetch(serviceBySlugQuery, { slug: "game-development" });

  if (!data) {
    return (
      <main className="mx-auto max-w-4xl px-6 py-16 space-y-6">
        <h1 className="text-3xl md:text-4xl font-bold">Game Development</h1>
        <p className="text-muted-foreground">
          Content coming soon. Please create/publish the “Game Development” service in Sanity with slug <code>game-development</code>.
        </p>
      </main>
    );
  }

  return (
    <main className="mx-auto max-w-4xl px-6 py-16 space-y-6">
      <h1 className="text-3xl md:text-4xl font-bold">{data.title}</h1>

      {data.image && (
        // eslint-disable-next-line @next/next/no-img-element
        <img
          src={urlFor(data.image).width(1200).height(600).url()}
          alt={data.title}
          className="rounded-xl border"
        />
      )}

      {data.description && (
        <p className="text-muted-foreground">{data.description}</p>
      )}

      {Array.isArray(data.tech) && data.tech.length > 0 && (
        <ul className="list-disc pl-6 space-y-1">
          {data.tech.map((t: string) => (
            <li key={t}>{t}</li>
          ))}
        </ul>
      )}

      <div className="pt-4">
        <a href="/contact" className="underline">
          Start your project →
        </a>
      </div>
    </main>
  );
}
