export default function AboutPage() {
  return (
    <main className="min-h-screen bg-gray-50 text-gray-900 px-4 sm:px-8 lg:px-16 py-12">
      
      {/* About Me Section */}
      <section className="max-w-4xl mx-auto bg-white shadow-md rounded-xl p-8 sm:p-12 mb-12">
        <h1 className="text-4xl sm:text-5xl font-bold text-center text-gray-900 mb-8">
          About Me
        </h1>

        <p className="text-lg sm:text-xl text-gray-700 mb-6 leading-relaxed">
          Hello! I’m <strong>Fahad Mohammad</strong>, a multi-talented professional with experience across diverse fields such as accounting, software development, website creation, e-commerce, computer repair, and even writing novels.
        </p>

        <p className="text-lg sm:text-xl text-gray-700 mb-6 leading-relaxed">
          Currently working as an <strong>Accountant</strong> at <strong>Ankit School Uniforms</strong> in Noida, I manage sales, purchases, and inventory, while also handling platforms like <strong>Amazon</strong>, <strong>Flipkart</strong>, and <strong>Meesho</strong>.
        </p>

        <p className="text-lg sm:text-xl text-gray-700 mb-6 leading-relaxed">
          I also develop custom software solutions and websites, repair computers and POS systems, and offer locksmith and CCTV installation services.
        </p>

        <p className="text-lg sm:text-xl text-gray-700 leading-relaxed">
          On the creative side, I’ve written and published multiple novels on <strong>Pocket Novel</strong>, blending my love for storytelling with imagination and emotion.
        </p>
      </section>

      {/* My Journey / Timeline Section */}
      <section className="max-w-4xl mx-auto bg-white shadow-md rounded-xl p-8 sm:p-12">
        <h2 className="text-4xl sm:text-5xl font-bold text-center text-gray-900 mb-8">
          My Journey
        </h2>

        <div className="space-y-6">
          <div className="bg-gray-100 p-6 rounded-lg shadow">
            <h3 className="text-2xl font-semibold mb-2">2016</h3>
            <p className="text-gray-700">
              Graduated from CSJM University with a BSc, launching my professional career.
            </p>
          </div>

          <div className="bg-gray-100 p-6 rounded-lg shadow">
            <h3 className="text-2xl font-semibold mb-2">2017</h3>
            <p className="text-gray-700">
              Began working as an accountant at Ankit Uniforms, expanding into e-commerce and tech solutions.
            </p>
          </div>

          <div className="bg-gray-100 p-6 rounded-lg shadow">
            <h3 className="text-2xl font-semibold mb-2">2020</h3>
            <p className="text-gray-700">
              Started website development and web support services for clients, enhancing business efficiency.
            </p>
          </div>
        </div>
      </section>

    </main>
  );
}
