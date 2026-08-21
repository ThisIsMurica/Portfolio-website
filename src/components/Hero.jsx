export default function Hero() {
  return (
    <section id="top" className="relative overflow-hidden">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(59,130,246,0.28),transparent_55%)]" />

      <div className="relative mx-auto max-w-5xl px-6 py-24 sm:py-28">
        <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs text-slate-200">
          Electrical &amp; Computer Engineering · Temple University
        </div>

        <h1 className="mt-6 max-w-4xl text-4xl font-bold tracking-tight sm:text-6xl">
          Building embedded systems where{" "}
          <span className="text-blue-400">hardware meets software</span>.
        </h1>

        <p className="mt-6 max-w-2xl text-base leading-7 text-slate-300 sm:text-lg">
          ECE student focused on embedded systems, firmware, sensing, RF, and
          aviation technology. I like turning real-world problems into working
          hardware/software systems.
        </p>

        <div className="mt-8 flex flex-wrap gap-3">
          <a
            href="#projects"
            className="rounded-lg bg-blue-500 px-5 py-3 text-sm font-medium text-white transition hover:bg-blue-400"
          >
            View projects
          </a>
          <a
            href="#experience"
            className="rounded-lg border border-white/10 bg-white/5 px-5 py-3 text-sm font-medium text-white transition hover:bg-white/10"
          >
            Experience
          </a>
          <a
            href="#contact"
            className="rounded-lg border border-white/10 bg-white/5 px-5 py-3 text-sm font-medium text-white transition hover:bg-white/10"
          >
            Contact me
          </a>
        </div>
      </div>
    </section>
  );
}
