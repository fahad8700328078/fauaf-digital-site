export const metadata = {
  title: 'FAUAF DIGITAL',
  description: 'Your professional digital partner.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <header>
          <h1>FAUAF DIGITAL</h1>
        </header>
        <main>{children}</main>
        <footer>
          <p>© {new Date().getFullYear()} FAUAF DIGITAL</p>
        </footer>
      </body>
    </html>
  );
}
