export default function ServicesPage() {
  return (
    <main className="min-h-screen bg-gray-50 text-gray-900 px-4 sm:px-8 lg:px-16 py-12">
      <section className="max-w-4xl mx-auto bg-white shadow-md rounded-xl p-8 sm:p-12">
        <h1 className="text-4xl sm:text-5xl font-bold text-center text-gray-900 mb-8">
          Our Services
        </h1>

        <p className="text-lg sm:text-xl text-gray-700 mb-8 leading-relaxed text-center">
          We offer a wide range of services to help your business grow and succeed online.
        </p>

        <ul className="grid grid-cols-1 sm:grid-cols-2 gap-6 text-lg sm:text-xl text-gray-700">
          <li className="bg-blue-50 p-4 rounded-lg shadow hover:bg-blue-100 transition-colors">🌐 Website Development</li>
          <li className="bg-blue-50 p-4 rounded-lg shadow hover:bg-blue-100 transition-colors">🎯 Digital Marketing</li>
          <li className="bg-blue-50 p-4 rounded-lg shadow hover:bg-blue-100 transition-colors">🎨 UI/UX Design</li>
          <li className="bg-blue-50 p-4 rounded-lg shadow hover:bg-blue-100 transition-colors">📱 App Development</li>
          <li className="bg-blue-50 p-4 rounded-lg shadow hover:bg-blue-100 transition-colors">🔧 SEO Optimization</li>
        </ul>
      </section>
    </main>
  );
}
