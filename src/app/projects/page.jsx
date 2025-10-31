export default function ProjectsPage() {
  const projects = [
    {
      title: "Online Image Gallery",
      desc: "A dynamic gallery app using Python, Tailwind CSS, and Flask API integration.",
      tech: ["React","CSS"],
    },
    {
      title: "Portfolio Website",
      desc: "My personal portfolio showcasing skills, experience, and projects.",
      tech: ["Next.js", "React", "Tailwind CSS"],
    },
    {
      title: "Music Player",
      desc: "An interactive music player using React .",
      tech: ["React"],
    },
  ];

  return (
    <section className="pt-32 space-y-8">
      <h2 className="text-3xl font-bold text-blue-400">Projects</h2>
      <div className="grid sm:grid-cols-2 gap-8">
        {projects.map((p, i) => (
          <div
            key={i}
            className="p-6 rounded-2xl bg-gray-900 border border-gray-800 shadow hover:shadow-lg hover:-translate-y-1 transition"
          >
            <h3 className="text-xl font-semibold text-blue-400 mb-2">{p.title}</h3>
            <p className="text-gray-400 mb-4">{p.desc}</p>
            <div className="flex flex-wrap gap-2">
              {p.tech.map((t) => (
                <span
                  key={t}
                  className="bg-gray-800 text-gray-300 px-3 py-1 rounded-full text-sm"
                >
                  {t}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
