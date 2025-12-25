export default function About() {
  return (
    <section id="about" className="mx-auto max-w-5xl px-6 py-16">
      <h2 className="text-sm font-semibold tracking-widest text-blue-400">
        ABOUT
      </h2>

      <h3 className="mt-3 text-2xl font-semibold">A little bit about me</h3>

      <p className="mt-4 max-w-3xl text-slate-300">
        I’m an undergraduate Electrical & Computer Engineering student at Temple
        University. I’m building foundation in circuits, programming,
        and systems while creating projects that I'm passionate.
      </p>

      {/* Quick highlights */}
      <div className="mt-8 grid gap-4 sm:grid-cols-3">
        <div className="rounded-xl border border-white/10 bg-white/5 p-5">
          <p className="text-sm text-slate-300">Focus</p>
          <p className="mt-1 font-medium">Embedded + Systems</p>
        </div>
        <div className="rounded-xl border border-white/10 bg-white/5 p-5">
          <p className="text-sm text-slate-300">Tools</p>
          <p className="mt-1 font-medium">Python, C/C++, Linux</p>
        </div>
        <div className="rounded-xl border border-white/10 bg-white/5 p-5">
          <p className="text-sm text-slate-300">Goal</p>
          <p className="mt-1 font-medium">Internship-ready portfolio</p>
        </div>
      </div>
    </section>
  );
}
