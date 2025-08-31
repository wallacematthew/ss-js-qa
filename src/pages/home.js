export function Home() {
  return `
    <section>
      <h1>Welcome</h1>
      <p class="lead">A minimal JS app to validate SearchStax Vanilla JS UI kit and docs.</p>
    </section>

    <section class="section">
      <div class="card-grid">
        <div class="card">
          <h2>Financial Aid</h2>
          <p>Tuition, scholarships, deadlines, and forms.</p>
          <a class="button" href="#/financial-aid">Explore</a>
        </div>
        <div class="card">
          <h2>Graduate Programs</h2>
          <p>Masters and doctoral programs and admissions info.</p>
          <a class="button" href="#/graduate-programs">Explore</a>
        </div>
        <div class="card">
          <h2>Undergraduate Programs</h2>
          <p>Majors, minors, and advising resources.</p>
          <a class="button" href="#/undergraduate-programs">Explore</a>
        </div>
        <div class="card">
          <h2>Contact</h2>
          <p>Reach out to a department or support.</p>
          <a class="button" href="#/contact">Explore</a>
        </div>
      </div>
    </section>

    <section class="section">
      <h2>Search Placeholder</h2>
      <div class="placeholder" id="searchstax-placeholder">
        Search UI kit mounts here later.
      </div>
    </section>
  `;
}

