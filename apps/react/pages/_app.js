import '../styles.css';

export default function App({ Component, pageProps }) {
  return (
    <>
      <header className="site-header">
        <nav className="nav">
          <a className="brand" href="/">SS JS QA</a>
          <div className="links">
            <a href="/financial-aid">Financial Aid</a>
            <a href="/graduate-programs">Graduate Programs</a>
            <a href="/undergraduate-programs">Undergraduate Programs</a>
            <a href="/contact">Contact</a>
            <a href="/search">Search</a>
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
