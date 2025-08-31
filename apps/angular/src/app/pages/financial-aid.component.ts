import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-financial-aid',
  standalone: true,
  template: `
    <h1>Financial Aid</h1>
    <p class="lead">Overview of tuition, scholarships, deadlines, and forms.</p>
  `,
})
export class FinancialAidComponent implements OnInit {
  constructor(private title: Title) {}
  ngOnInit(): void {
    this.title.setTitle('SS JS QA — Angular | Financial Aid');
  }
}
