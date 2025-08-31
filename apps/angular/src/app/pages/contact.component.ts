import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-contact',
  standalone: true,
  template: `
    <h1>Contact</h1>
    <p class="lead">Reach out to departments or support.</p>
    <section class="section">
      <h2>Search Placeholder</h2>
      <div class="placeholder" id="searchstax-placeholder-contact">
        Search UI kit mounts here later.
      </div>
    </section>
  `,
})
export class ContactComponent implements OnInit {
  constructor(private title: Title) {}
  ngOnInit(): void {
    this.title.setTitle('SS JS QA — Angular | Contact');
  }
}
