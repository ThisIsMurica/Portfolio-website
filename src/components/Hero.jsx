export default function Hero() {
  return (
    <section id="top" className="relative">
      {/* Background gradient glow */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(59,130,246,0.25),transparent_55%)]" />

      <div className="mx-auto max-w-5xl px-6 py-20">
        {/* Small badge */}
        <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs text-slate-200">
          Electrical & Computer Engineering · Temple University
        </div>

        {/* Big headline */}
        <h1 className="mt-6 text-4xl font-bold tracking-tight sm:text-6xl">
          Building practical systems and{" "}
          <span className="text-blue-400">engineering projects</span>.
        </h1>

        {/* Subtitle */}
        <p className="mt-6 max-w-2xl text-base text-slate-300 sm:text-lg">
          Undergraduate ECE student interested in embedded systems, software, and
          hardware. I like turning ideas into working prototypes.
        </p>

        {/* Buttons */}
        <div className="mt-8 flex flex-wrap gap-3">
          <a
            href="#projects"
            className="rounded-lg bg-blue-500 px-5 py-3 text-sm font-medium text-white hover:bg-blue-400"
          >
            View projects
          </a>

          <a
            href="#contact"
            className="rounded-lg border border-white/10 bg-white/5 px-5 py-3 text-sm font-medium text-white hover:bg-white/10"
          >
            Contact me
          </a>
        </div>
      </div>
    </section>
  );
}
