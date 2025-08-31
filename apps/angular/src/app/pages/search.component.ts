import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-search',
  standalone: true,
  template: `
    <h1>Search</h1>
    <p class="lead">This page is ready for the SearchStax UI kit.</p>
    <div id="searchstax-root" class="placeholder">Mount search UI here.</div>
  `,
})
export class SearchComponent implements OnInit {
  constructor(private title: Title) {}
  ngOnInit(): void {
    this.title.setTitle('SS JS QA — Angular | Search');
  }
}

