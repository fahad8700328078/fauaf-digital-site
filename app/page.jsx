// app/page.jsx

export default function HomePage() {
  return (
    <main className="min-h-screen bg-white text-gray-800 p-8">
      <section className="max-w-5xl mx-auto text-center py-20">
        <h1 className="text-5xl font-bold mb-6">FAUAF DIGITAL</h1>
        <p className="text-lg text-gray-600">
          Your one-stop solution for Accounting, E-commerce, Website Development, Computer Repair, and Creative Services.
        </p>
        <div className="mt-10">
          <a
            href="/contact"
            className="bg-blue-600 text-white px-6 py-3 rounded-full hover:bg-blue-700 transition"
          >
            Get in Touch
          </a>
        </div>
      </section>
    </main>
  );
}
