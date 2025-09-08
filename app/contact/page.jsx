export default function ContactPage() {
  return (
    <main className="min-h-screen bg-gray-50 text-gray-900 px-4 sm:px-8 lg:px-16 py-12">
      <section className="max-w-4xl mx-auto bg-white shadow-md rounded-xl p-8 sm:p-12">
        <h1 className="text-4xl sm:text-5xl font-bold text-center text-gray-900 mb-8">
          Contact Me
        </h1>

        <p className="text-lg sm:text-xl text-gray-700 mb-6 leading-relaxed text-center">
          Feel free to reach out for collaborations, projects, or just a friendly hello 👋
        </p>

        <ul className="text-lg sm:text-xl text-gray-700 space-y-4 text-center">
          <li>
            📧 Email: <a href="mailto:fahadmohammad005@gmail.com" className="text-blue-600 hover:underline">fahadmohammad005@gmail.com</a>
          </li>
          <li>
            📸 Instagram: <a href="https://instagram.com/fahad_designs" target="_blank" className="text-blue-600 hover:underline">@fahad_designs</a>
          </li>
          <li>
            💻 GitHub: <a href="https://github.com/fahad8700328078" target="_blank" className="text-blue-600 hover:underline">github.com/fahad8700328078</a>
          </li>
        </ul>

        {/* Optional Contact Form */}
        <form className="mt-8 flex flex-col space-y-4">
          <input
            type="text"
            placeholder="Your Name"
            className="p-3 border rounded-lg border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
          <input
            type="email"
            placeholder="Your Email"
            className="p-3 border rounded-lg border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
          <textarea
            placeholder="Your Message"
            rows={5}
            className="p-3 border rounded-lg border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
          <button
            type="submit"
            className="bg-blue-600 text-white p-3 rounded-lg text-lg hover:bg-blue-700 transition-colors"
          >
            Send Message
          </button>
        </form>
      </section>
    </main>
  );
}
