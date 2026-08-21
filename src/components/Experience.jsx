const roles = [
  {
    title: "Teaching Assistant, Introduction to Engineering Computation",
    org: "Temple University",
    date: "Fall 2026",
    description:
      "Mentor assigned engineering students in programming, computational problem-solving, and debugging.",
  },
  {
    title: "Peer Advisor, College of Engineering",
    org: "Temple University",
    date: "March 2026 - Present",
    description:
      "Advise students on course selection and academic planning while troubleshooting registration, scheduling, and university-system issues.",
  },
];

export default function Experience() {
  return (
    <section id="experience" className="border-y border-white/10 bg-white/[0.02]">
      <div className="mx-auto max-w-5xl px-6 py-16">
        <h2 className="text-sm font-semibold tracking-widest text-blue-400">EXPERIENCE</h2>
        <h3 className="mt-3 text-2xl font-semibold">Teaching and student support</h3>

        <div className="mt-8 space-y-5">
          {roles.map((role) => (
            <article key={role.title} className="rounded-2xl border border-white/10 bg-slate-950/50 p-6">
              <div className="flex flex-col gap-1 sm:flex-row sm:items-start sm:justify-between sm:gap-6">
                <div>
                  <h4 className="font-semibold">{role.title}</h4>
                  <p className="mt-1 text-sm text-slate-400">{role.org}</p>
                </div>
                <p className="shrink-0 text-sm text-slate-400">{role.date}</p>
              </div>
              <p className="mt-4 max-w-3xl text-sm leading-6 text-slate-300">{role.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
