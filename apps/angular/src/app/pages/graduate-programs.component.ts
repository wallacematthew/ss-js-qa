import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-graduate-programs',
  standalone: true,
  template: `
    <h1>Graduate Programs</h1>
    <p class="lead">Masters and doctoral programs overview.</p>
  `,
})
export class GraduateProgramsComponent implements OnInit {
  constructor(private title: Title) {}
  ngOnInit(): void {
    this.title.setTitle('SS JS QA — Angular | Graduate Programs');
  }
}
