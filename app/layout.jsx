export const metadata = {
  title: "FAUAF DIGITAL",
  description: "Empowering Your Digital Future – FAUAF DIGITAL",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="font-sans m-0 p-0 bg-gray-50 text-gray-900">
        <nav className="bg-gray-900 text-white px-6 py-4 flex justify-center gap-8 shadow-md sticky top-0 z-50">
          <a href="/" className="hover:text-yellow-400 transition-colors">Home</a>
          <a href="/services" className="hover:text-yellow-400 transition-colors">Services</a>
          <a href="/contact" className="hover:text-yellow-400 transition-colors">Contact</a>
          <a href="/about" className="hover:text-yellow-400 transition-colors">About</a>
        </nav>

        <main className="px-4 sm:px-8 lg:px-16 py-8">
          {children}
        </main>
      </body>
    </html>
  );
}
