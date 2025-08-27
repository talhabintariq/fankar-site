export default function WebDev() {
  return (
    <main className="mx-auto max-w-4xl px-6 py-16 space-y-6">
      <h1 className="text-3xl md:text-4xl font-bold">Web Development</h1>
      <p className="text-muted-foreground">
        Modern, accessible, and high-performance web apps using Next.js, Tailwind, and best practices.
      </p>
      <ul className="list-disc pl-6 space-y-2">
        <li>Next.js App Router, SSR/ISR</li>
        <li>Shadcn UI + Tailwind</li>
        <li>Performance, SEO, accessibility</li>
      </ul>
      <div className="pt-4">
        <a href="/contact" className="underline">Start your project →</a>
      </div>
    </main>
  );
}
