export default function AboutPage() {
  return (
    <section className="pt-32 pb-16 max-w-5xl mx-auto px-6 space-y-10">
      {/* Heading */}
      <div className="text-center">
        <h2 className="text-4xl font-extrabold text-blue-400 mb-2">About Me</h2>
        <p className="text-gray-400 text-lg">Get to know who I am and what I do best.</p>
      </div>

      {/* Bio Section */}
      <div className="bg-gray-900/50 border border-gray-800 rounded-2xl p-8 shadow-lg space-y-6">
        <p className="text-gray-300 leading-relaxed text-lg">
          I’m a passionate{" "}
          <span className="text-blue-400 font-semibold">Full Stack Developer</span>{" "}
          with a deep interest in creating modern, responsive, and user-friendly web
          applications. I specialize in transforming ideas into clean, scalable
          solutions — from concept to deployment.
        </p>

        <p className="text-gray-400 leading-relaxed">
          Over the years, I’ve gained hands-on experience building robust web apps
          using technologies like{" "}
          <span className="text-blue-400 font-medium">Next.js</span>,{" "}
          <span className="text-blue-400 font-medium">React</span>,{" "}
          <span className="text-blue-400 font-medium">Node.js</span>, and{" "}
          <span className="text-blue-400 font-medium">Python (Flask/Django)</span>.
          I’m also proficient with{" "}
          <span className="text-blue-400 font-medium">REST APIs</span> and databases
          like <span className="text-blue-400 font-medium">MySQL</span> and{" "}
          <span className="text-blue-400 font-medium">MongoDB</span>.
        </p>

        <p className="text-gray-400 leading-relaxed">
          Beyond coding, I love designing intuitive UI/UX experiences, collaborating
          in teams, and continuously learning new tools that improve performance and
          accessibility. My goal is to build digital products that make a positive
          impact while maintaining high-quality standards.
        </p>
      </div>

      {/* Skills Grid */}
      <div>
        <h3 className="text-2xl font-semibold text-blue-400 mb-4">Technical Skills</h3>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
          {[
            "Next.js",
            "React",
            "TypeScript",
            "Node.js",
            "Express",
            "Python",
            "Flask",
            "Django",
            "MySQL",
            "MongoDB",
            "Tailwind CSS",
            "Git & GitHub",
          ].map((skill) => (
            <div
              key={skill}
              className="bg-gray-800/60 border border-gray-700 rounded-xl p-3 text-center text-gray-300 hover:text-blue-400 hover:border-blue-400 transition"
            >
              {skill}
            </div>
          ))}
        </div>
      </div>

      {/* Closing Note */}
      <div className="text-center text-gray-400 pt-6 border-t border-gray-800">
        <p>
          🌟 Always eager to collaborate on innovative projects and explore new
          technologies.
        </p>
      </div>
    </section>
  );
}
