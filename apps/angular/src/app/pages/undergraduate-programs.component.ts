import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-undergraduate-programs',
  standalone: true,
  template: `
    <h1>Undergraduate Programs</h1>
    <p class="lead">Majors, minors, and advising resources.</p>
  `,
})
export class UndergraduateProgramsComponent implements OnInit {
  constructor(private title: Title) {}
  ngOnInit(): void {
    this.title.setTitle('SS JS QA — Angular | Undergraduate Programs');
  }
}
