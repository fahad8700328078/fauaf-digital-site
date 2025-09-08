// app/page.jsx

export default function HomePage() {
  return (
    <main className="min-h-screen bg-white text-gray-800 flex flex-col justify-center">
      <section className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8 py-20">
        <h1 className="text-5xl sm:text-6xl font-bold mb-6 text-gray-900">
          FAUAF DIGITAL
        </h1>
        <p className="text-lg sm:text-xl text-gray-600 mb-10 leading-relaxed">
          Your one-stop solution for Accounting, E-commerce, Website Development, Computer Repair, and Creative Services.
        </p>
        <a
          href="/contact"
          className="inline-block bg-blue-600 text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-blue-700 transition-colors shadow-lg"
        >
          Get in Touch
        </a>
      </section>
    </main>
  );
}
