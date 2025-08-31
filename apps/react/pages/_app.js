import '../styles.css';
import Link from 'next/link';

export default function App({ Component, pageProps }) {
  return (
    <>
      <header className="site-header">
        <nav className="nav">
          <Link className="brand" href="/">SS JS QA</Link>
          <div className="links">
            <Link href="/financial-aid">Financial Aid</Link>
            <Link href="/graduate-programs">Graduate Programs</Link>
            <Link href="/undergraduate-programs">Undergraduate Programs</Link>
            <Link href="/contact">Contact</Link>
            <Link href="/search">Search</Link>
          </div>
        </nav>
      </header>
      <main className="container">
        <Component {...pageProps} />
      </main>
      <footer className="site-footer">
        <small>Demo app for testing SearchStax UI kit integration.</small>
      </footer>
    </>
  );
}
