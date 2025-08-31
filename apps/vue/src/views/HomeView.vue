<template>
  <section>
    <h1>Welcome (Vue)</h1>
    <p class="lead">A minimal Vue app mirroring the vanilla demo.</p>
  </section>
  <section class="section">
    <div class="card-grid">
      <div class="card"><h2>Financial Aid</h2><p>Tuition, scholarships, deadlines, and forms.</p><router-link class="button" to="/financial-aid">Explore</router-link></div>
      <div class="card"><h2>Graduate Programs</h2><p>Masters and doctoral programs and admissions info.</p><router-link class="button" to="/graduate-programs">Explore</router-link></div>
      <div class="card"><h2>Undergraduate Programs</h2><p>Majors, minors, and advising resources.</p><router-link class="button" to="/undergraduate-programs">Explore</router-link></div>
      <div class="card"><h2>Contact</h2><p>Reach out to a department or support.</p><router-link class="button" to="/contact">Explore</router-link></div>
    </div>
  </section>
  <section class="section">
    <h2>Search Placeholder</h2>
    <div id="searchstax-placeholder" class="placeholder">Search UI kit mounts here later.</div>
  </section>
</template>

