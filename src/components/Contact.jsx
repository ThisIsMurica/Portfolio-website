export default function Contact() {
  return (
    <section id="contact" className="border-t border-white/10 bg-slate-950">
      <div className="mx-auto max-w-5xl px-6 py-16">
        <h2 className="text-sm font-semibold tracking-widest text-blue-400">
          CONTACT
        </h2>

        <h3 className="mt-3 text-2xl font-semibold">Let’s connect</h3>

        <p className="mt-4 text-slate-300">
          Email is best. I also keep my LinkedIn and GitHub updated.
        </p>

        {/* Email block */}
        <div className="mt-8 rounded-2xl border border-white/10 bg-white/5 p-6">
          <p className="text-sm text-slate-300">Email</p>
          <a
            className="mt-2 block text-xl font-semibold hover:text-blue-400"
            href="mailto:mouhamed.dia@temple.edu"
          >
            mouhamed.dia@temple.edu
          </a>

          <div className="mt-6 flex flex-wrap gap-4 text-sm">
            <a
              className="text-slate-200 hover:text-white underline underline-offset-4"
              href="https://www.linkedin.com/in/mouhamed-dia-678b6224a/"
              target="_blank"
            >
              LinkedIn
            </a>

            <a
              className="text-slate-200 hover:text-white underline underline-offset-4"
              href="https://github.com/ThisIsMurica"
              target="_blank"
            >
              GitHub
            </a>

            <a
              className="text-slate-200 hover:text-white underline underline-offset-4"
              href="/resume.pdf"
              target="_blank"
            >
              Resume
            </a>
          </div>
        </div>

        <p className="mt-10 text-xs text-slate-500">
          © {new Date().getFullYear()} Mouhamed Dia
        </p>
      </div>
    </section>
  );
}
