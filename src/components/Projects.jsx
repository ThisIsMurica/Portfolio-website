const projects = [
  {
    title: "Embedded Flight Management & Navigation Computer",
    description:
      "ESP32-S3 touchscreen flight-management and navigation computer with GPS integration, real-time course, distance, groundspeed, ETE and ETA calculations, plus Direct-To, flight-plan, route and progress functionality.",
    tags: ["ESP32-S3", "C/C++", "LVGL", "GPS", "I²C"],
    status: "In development",
    github: "https://github.com/ThisIsMurica/esp32-s3-flight-management-computer",
  },
  {
    title: "Live ADS-B Aircraft Tracker",
    description:
      "Real-time 1090 MHz ADS-B receiver built with a Raspberry Pi and RTL-SDR, parsing aircraft telemetry and driving a 64×32 HUB75 RGB LED matrix display.",
    tags: ["Raspberry Pi", "RTL-SDR", "Python", "RF", "GPIO"],
    status: "Personal project",
  },
  {
    title: "Portable Automated Weather Observation Station",
    description:
      "ESP32-based sensor system for temperature, pressure and humidity acquisition, with a Python host application and aviation-style synthesized weather audio.",
    tags: ["ESP32", "Embedded C/C++", "Sensors", "Python", "I²C"],
    status: "Personal project",
  },
  {
    title: "AeroBrief",
    description:
      "Beginner-focused aviation weather application that retrieves live METAR/TAF data and uses AI-assisted interpretation to turn coded reports into clearer preflight information and wind/runway guidance.",
    tags: ["React", "JavaScript", "APIs", "Gemini", "Aviation Weather"],
    status: "OWLHacks 2025 Track Award",
    github: "https://github.com/ThisIsMurica/aerobrief",
    live: "https://thisismurica.github.io/aerobrief/",
  },
];

function ProjectCard({ project }) {
  return (
    <article className="flex h-full flex-col rounded-2xl border border-white/10 bg-white/5 p-6 transition hover:-translate-y-0.5 hover:bg-white/[0.07]">
      <div className="flex items-start justify-between gap-4">
        <h4 className="text-lg font-semibold leading-snug">{project.title}</h4>
        <span className="shrink-0 rounded-full border border-blue-400/20 bg-blue-400/10 px-2.5 py-1 text-[11px] font-medium text-blue-300">
          {project.status}
        </span>
      </div>

      <p className="mt-3 flex-1 text-sm leading-6 text-slate-300">
        {project.description}
      </p>

      <div className="mt-5 flex flex-wrap gap-2">
        {project.tags.map((tag) => (
          <span
            key={tag}
            className="rounded-full border border-white/10 bg-slate-950/40 px-3 py-1 text-xs text-slate-200"
          >
            {tag}
          </span>
        ))}
      </div>

      {(project.github || project.live) && (
        <div className="mt-5 flex gap-4 text-sm font-medium">
          {project.live && (
            <a
              href={project.live}
              target="_blank"
              rel="noreferrer"
              className="text-blue-400 hover:text-blue-300"
            >
              Live demo ↗
            </a>
          )}
          {project.github && (
            <a
              href={project.github}
              target="_blank"
              rel="noreferrer"
              className="text-slate-300 hover:text-white"
            >
              GitHub ↗
            </a>
          )}
        </div>
      )}
    </article>
  );
}

export default function Projects() {
  return (
    <section id="projects" className="mx-auto max-w-5xl px-6 py-16">
      <h2 className="text-sm font-semibold tracking-widest text-blue-400">PROJECTS</h2>
      <h3 className="mt-3 text-2xl font-semibold">Things I’ve built</h3>
      <p className="mt-3 max-w-2xl text-slate-400">
        A mix of embedded, RF, sensing, and software projects built around real engineering problems.
      </p>

      <div className="mt-8 grid gap-6 sm:grid-cols-2">
        {projects.map((project) => (
          <ProjectCard key={project.title} project={project} />
        ))}
      </div>
    </section>
  );
}
