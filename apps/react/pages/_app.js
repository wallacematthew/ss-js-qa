export default function App({ Component, pageProps }) {
  return (
    <>
      <nav style={{ padding: '12px', display: 'flex', gap: 12, borderBottom: '1px solid #ccc' }}>
        <a href="/">Home</a>
        <a href="/financial-aid">Financial Aid</a>
        <a href="/graduate-programs">Graduate Programs</a>
        <a href="/undergraduate-programs">Undergraduate Programs</a>
        <a href="/contact">Contact</a>
      </nav>
      <main style={{ maxWidth: 960, margin: '0 auto', padding: 16 }}>
        <Component {...pageProps} />
      </main>
    </>
  );
}

