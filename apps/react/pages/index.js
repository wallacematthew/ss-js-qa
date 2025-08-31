export default function Home() {
  return (
    <>
      <section>
        <h1>Welcome (React/Next)</h1>
        <p className="lead">A minimal Next.js app mirroring the vanilla demo.</p>
      </section>

      <section className="section">
        <div className="card-grid">
          <div className="card">
            <h2>Financial Aid</h2>
            <p>Tuition, scholarships, deadlines, and forms.</p>
            <a className="button" href="/financial-aid">Explore</a>
          </div>
          <div className="card">
            <h2>Graduate Programs</h2>
            <p>Masters and doctoral programs and admissions info.</p>
            <a className="button" href="/graduate-programs">Explore</a>
          </div>
          <div className="card">
            <h2>Undergraduate Programs</h2>
            <p>Majors, minors, and advising resources.</p>
            <a className="button" href="/undergraduate-programs">Explore</a>
          </div>
          <div className="card">
            <h2>Contact</h2>
            <p>Reach out to a department or support.</p>
            <a className="button" href="/contact">Explore</a>
          </div>
        </div>
      </section>

      <section className="section">
        <h2>Search Placeholder</h2>
        <div className="placeholder" id="searchstax-placeholder">
          Search UI kit mounts here later.
        </div>
      </section>
    </>
  );
}
