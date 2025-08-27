export default function MobileAppDev() {
  return (
    <main className="mx-auto max-w-4xl px-6 py-16 space-y-6">
      <h1 className="text-3xl md:text-4xl font-bold">Mobile App Development</h1>
      <p className="text-muted-foreground">
        Cross-platform mobile applications using React Native, Flutter, and native technologies.
      </p>
      <ul className="list-disc pl-6 space-y-2">
        <li>React Native & Expo</li>
        <li>Flutter & Dart</li>
        <li>iOS & Android native development</li>
        <li>App Store & Play Store deployment</li>
      </ul>
      <div className="pt-4">
        <a href="/contact" className="underline">Start your project →</a>
      </div>
    </main>
  );
}
