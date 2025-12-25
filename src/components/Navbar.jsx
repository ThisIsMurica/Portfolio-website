export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-slate-950/70 backdrop-blur">
      {/* max-w keeps content from stretching too wide */}
      <nav className="mx-auto flex max-w-5xl items-center justify-between px-6 py-4">
        {/* Left: name / brand */}
        <a href="#top" className="text-lg font-semibold tracking-tight">
          M Dia
        </a>

        {/* Middle: links (hidden on tiny screens for simplicity) */}
        <div className="hidden sm:flex items-center gap-6 text-sm text-slate-300">
          <a className="hover:text-white" href="#about">About</a>
          <a className="hover:text-white" href="#projects">Projects</a>
        </div>

        {/* Right: contact button */}
        <a
          href="#contact"
          className="rounded-full bg-blue-500 px-4 py-2 text-sm font-medium text-white hover:bg-blue-400"
        >
          Contact
        </a>
      </nav>
    </header>
  );
}
