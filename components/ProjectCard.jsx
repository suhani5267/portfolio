export default function ProjectCard({ title, desc, img, link }) {
  return (
    <div className="bg-gray-900 p-4 rounded-xl shadow-lg hover:scale-105 transition duration-300">
      <img src={img} alt={title} className="rounded-lg mb-3" />
      <h3 className="text-xl font-semibold text-white">{title}</h3>
      <p className="text-gray-400">{desc}</p>
      <a
        href={link}
        target="_blank"
        className="text-blue-400 mt-3 block underline"
      >
        View Project →
      </a>
    </div>
  );
}
