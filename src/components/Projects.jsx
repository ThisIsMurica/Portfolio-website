const projects = [
  {
    title: "Aerobrief",
    description:
      "A pilot briefing tool powered by Google Gemini to translate airport meteorological data",
    tags: ["TypeScript", "APIs", "Aviation Weather", "Frontend",],
    link: "https://github.com/ThisIsMurica/aerobrief",
  },
  {
    title: "Portable weather station",
    description:
      "Portable Arduino Automated weather observation station",
    tags: ["C++", "Embedded", "Hardware", "Arduino"],
    link: "https://example.com/",
  },
];

export default function Projects() {
  return (
    <section id="projects" className="mx-auto max-w-5xl px-6 py-16">
      <h2 className="text-sm font-semibold tracking-widest text-blue-400">
        PROJECTS
      </h2>

      <h3 className="mt-3 text-2xl font-semibold">Things I’ve built</h3>

      <div className="mt-8 grid gap-6 sm:grid-cols-2">
        {projects.map((p) => (
          <a
            key={p.title}
            href={p.link}
            target="_blank"
            className="group rounded-2xl border border-white/10 bg-white/5 p-6 hover:bg-white/10"
          >
            <div className="flex items-center justify-between">
              <h4 className="text-lg font-semibold">{p.title}</h4>
              <span className="text-slate-400 group-hover:text-white">↗</span>
            </div>

            <p className="mt-3 text-sm text-slate-300">{p.description}</p>

            <div className="mt-4 flex flex-wrap gap-2">
              {p.tags.map((t) => (
                <span
                  key={t}
                  className="rounded-full border border-white/10 bg-slate-950/40 px-3 py-1 text-xs text-slate-200"
                >
                  {t}
                </span>
              ))}
            </div>
          </a>
        ))}
      </div>
    </section>
  );
}
