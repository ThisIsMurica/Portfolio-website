export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-slate-950/80 backdrop-blur">
      <nav className="mx-auto flex max-w-5xl items-center justify-between px-6 py-4">
        <a href="#top" className="text-lg font-semibold tracking-tight">M Dia</a>

        <div className="hidden items-center gap-5 text-sm text-slate-300 md:flex">
          <a className="hover:text-white" href="#about">About</a>
          <a className="hover:text-white" href="#projects">Projects</a>
          <a className="hover:text-white" href="#experience">Experience</a>
          <a className="hover:text-white" href="#skills">Skills</a>
        </div>

        <a
          href="#contact"
          className="rounded-full bg-blue-500 px-4 py-2 text-sm font-medium text-white transition hover:bg-blue-400"
        >
          Contact
        </a>
      </nav>
    </header>
  );
}
