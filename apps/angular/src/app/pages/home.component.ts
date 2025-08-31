import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  standalone: true,
  template: `
    <section>
      <h1>Welcome (Angular)</h1>
      <p class="lead">A minimal Angular app mirroring the vanilla demo.</p>
    </section>

    <section class="section">
      <div class="card-grid">
        <div class="card">
          <h2>Financial Aid</h2>
          <p>Tuition, scholarships, deadlines, and forms.</p>
          <a class="button" routerLink="/financial-aid">Explore</a>
        </div>
        <div class="card">
          <h2>Graduate Programs</h2>
          <p>Masters and doctoral programs and admissions info.</p>
          <a class="button" routerLink="/graduate-programs">Explore</a>
        </div>
        <div class="card">
          <h2>Undergraduate Programs</h2>
          <p>Majors, minors, and advising resources.</p>
          <a class="button" routerLink="/undergraduate-programs">Explore</a>
        </div>
        <div class="card">
          <h2>Contact</h2>
          <p>Reach out to a department or support.</p>
          <a class="button" routerLink="/contact">Explore</a>
        </div>
      </div>
    </section>

    <section class="section">
      <h2>Search Placeholder</h2>
      <div class="placeholder" id="searchstax-placeholder">
        Search UI kit mounts here later.
      </div>
    </section>
  `,
})
export class HomeComponent {}

