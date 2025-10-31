export default function ContactPage() {
  return (
    <section className="pt-32 space-y-8 max-w-xl mx-auto text-center">
      <h2 className="text-3xl font-bold text-blue-400">Contact Me</h2>
      <p className="text-gray-400">
        I’m open to freelance work, collaborations, and exciting job opportunities.
      </p>

      <form className="space-y-4">
        <input
          type="text"
          placeholder="Your Name"
          className="w-full px-4 py-3 bg-gray-900 border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <input
          type="email"
          placeholder="Your Email"
          className="w-full px-4 py-3 bg-gray-900 border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <textarea
          rows="5"
          placeholder="Your Message"
          className="w-full px-4 py-3 bg-gray-900 border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
        ></textarea>
        <button
          type="submit"
          className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-xl shadow transition mb-4"
        >
          Send Message
        </button>
      </form>
    </section>
  );
}
