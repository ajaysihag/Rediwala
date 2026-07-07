export default function HomePage() {
  return (
    <main className="min-h-screen">
      <section className="mx-auto flex min-h-screen w-full max-w-6xl flex-col justify-center px-6 py-12">
        <div className="max-w-3xl">
          <p className="text-sm font-semibold uppercase tracking-wide text-mint">
            Day 1 foundation
          </p>
          <h1 className="mt-4 text-4xl font-bold text-charcoal sm:text-6xl">
            Rediwala
          </h1>
          <p className="mt-5 max-w-2xl text-lg leading-8 text-slate-700">
            A street vendor discovery platform is taking shape here. The
            backend foundation, MongoDB config, environment setup, and health
            endpoint are ready for the next build day.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a
              className="rounded-md bg-chutney px-5 py-3 text-sm font-semibold text-white shadow-sm transition hover:bg-orange-700"
              href="http://localhost:5000/ping"
            >
              Check API
            </a>
            <span className="rounded-md border border-orange-200 bg-white px-5 py-3 text-sm font-medium text-slate-700">
              Next: JWT auth system
            </span>
          </div>
        </div>
      </section>
    </main>
  );
}
