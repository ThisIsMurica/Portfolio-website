const groups = [
  {
    label: "Programming & Software",
    items: ["Python", "C/C++", "JavaScript", "React", "Node.js", "HTML/CSS", "Bash", "Git", "Linux"],
  },
  {
    label: "Embedded & Hardware",
    items: ["ESP32-S3", "Raspberry Pi", "LVGL", "RTL-SDR", "I²C", "UART", "GPIO", "Environmental Sensors"],
  },
];

export default function Skills() {
  return (
    <section id="skills" className="mx-auto max-w-5xl px-6 py-16">
      <h2 className="text-sm font-semibold tracking-widest text-blue-400">SKILLS</h2>
      <h3 className="mt-3 text-2xl font-semibold">Technical toolkit</h3>

      <div className="mt-8 grid gap-5 sm:grid-cols-2">
        {groups.map((group) => (
          <div key={group.label} className="rounded-2xl border border-white/10 bg-white/5 p-6">
            <h4 className="font-semibold">{group.label}</h4>
            <div className="mt-4 flex flex-wrap gap-2">
              {group.items.map((item) => (
                <span key={item} className="rounded-full border border-white/10 bg-slate-950/50 px-3 py-1.5 text-xs text-slate-200">
                  {item}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
