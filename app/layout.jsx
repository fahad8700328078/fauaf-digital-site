export const metadata = {
  title: "FAUAF DIGITAL",
  description: "Empowering Your Digital Future – FAUAF DIGITAL",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body style={{ fontFamily: "Arial, sans-serif", margin: 0, padding: 0 }}>
        <nav style={{
          background: "#1e1e1e",
          padding: "1rem",
          display: "flex",
          gap: "2rem",
          color: "#fff"
        }}>
          <a href="/" style={{ color: "white", textDecoration: "none" }}>Home</a>
          <a href="/services" style={{ color: "white", textDecoration: "none" }}>Services</a>
          <a href="/contact" style={{ color: "white", textDecoration: "none" }}>Contact</a>
        </nav>
        <main style={{ padding: "2rem" }}>{children}</main>
      </body>
    </html>
  );
}
