export default function About() {
  return (
    <section id="about" className="mx-auto max-w-5xl px-6 py-16">
      <h2 className="text-sm font-semibold tracking-widest text-blue-400">ABOUT</h2>
      <h3 className="mt-3 text-2xl font-semibold">Engineering by building</h3>

      <p className="mt-4 max-w-3xl leading-7 text-slate-300">
        I’m an Electrical &amp; Computer Engineering student at Temple University.
        My projects span embedded navigation, RF aircraft tracking, sensor
        systems, and aviation software, with an emphasis on integrating hardware,
        firmware, and software into complete working prototypes.
      </p>

      <div className="mt-8 grid gap-4 sm:grid-cols-3">
        <div className="rounded-xl border border-white/10 bg-white/5 p-5">
          <p className="text-sm text-slate-400">Focus</p>
          <p className="mt-1 font-medium">Embedded + Firmware</p>
        </div>
        <div className="rounded-xl border border-white/10 bg-white/5 p-5">
          <p className="text-sm text-slate-400">Core tools</p>
          <p className="mt-1 font-medium">C/C++, Python, Linux</p>
        </div>
        <div className="rounded-xl border border-white/10 bg-white/5 p-5">
          <p className="text-sm text-slate-400">Academic</p>
          <p className="mt-1 font-medium">4.0 GPA · Dean’s List</p>
        </div>
      </div>
    </section>
  );
}
