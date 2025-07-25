export default function Home() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center px-4 text-center bg-white text-black">
      <h1 className="text-4xl font-bold mb-4">Welcome to FAUAF DIGITAL</h1>
      <p className="text-lg mb-8">Your professional digital partner.</p>

      <section className="max-w-2xl">
        <h2 className="text-2xl font-semibold mb-2">🚀 Services We Offer</h2>
        <ul className="text-left list-disc list-inside mb-6">
          <li>Website Design & Development</li>
          <li>Mobile App Development</li>
          <li>Digital Marketing</li>
          <li>Branding & Graphics</li>
          <li>E-commerce Solutions</li>
        </ul>

        <h2 className="text-2xl font-semibold mb-2">👨‍💼 About FAUAF DIGITAL</h2>
        <p className="mb-6">
          We are your one-stop solution for everything digital — from idea to execution.
          FAUAF DIGITAL brings modern tech and creative strategy to grow your online presence.
        </p>

        <h2 className="text-2xl font-semibold mb-2">📞 Contact</h2>
        <p>Email: <a href="mailto:ga@email.com" className="text-blue-600 underline">ga@email.com</a></p>
        <p>Website: <a href="https://glitter-alyssum-14d.notion.site/Personal-Website-e98c0a34be814365980ecc5e9350af64" className="text-blue-600 underline">Visit My Portfolio</a></p>
        <p>GitHub: <a href="https://github.com/fahad8700328078" className="text-blue-600 underline">fahad8700328078</a></p>
      </section>
    </main>
  );
}
