export default function CustomersStrip() {
  const logos = [
    "/logos/brand-1.svg","/logos/brand-2.svg","/logos/brand-3.svg",
    "/logos/brand-4.svg","/logos/brand-5.svg","/logos/brand-6.svg",
  ];
  return (
    <section className="mx-auto max-w-7xl px-6 -mt-8">
      <div className="rounded-2xl border border-white/10 bg-[#0f172a]/70 backdrop-blur p-6 md:p-8 shadow-[0_20px_60px_-20px_rgba(0,0,0,0.5)]">
        <p className="text-center text-white/80">
          Join our <span className="font-semibold text-white">100+ </span>happy customers
        </p>
        <div className="mt-6 grid grid-cols-2 gap-6 opacity-90 md:grid-cols-6">
          {logos.map((src, i) => (
            // eslint-disable-next-line @next/next/no-img-element
            <img key={i} src={src} alt="" className="mx-auto h-8 w-auto opacity-80" />
          ))}
        </div>
      </div>
    </section>
  );
}
