import { Home } from './pages/home.js';
import { FinancialAid } from './pages/financialAid.js';
import { GraduatePrograms } from './pages/graduatePrograms.js';
import { UndergraduatePrograms } from './pages/undergraduatePrograms.js';
import { Contact } from './pages/contact.js';
import { Search } from './pages/search.js';

const routes = {
  '/': Home,
  '/financial-aid': FinancialAid,
  '/graduate-programs': GraduatePrograms,
  '/undergraduate-programs': UndergraduatePrograms,
  '/contact': Contact,
  '/search': Search,
};

const titles = {
  '/': 'Home',
  '/financial-aid': 'Financial Aid',
  '/graduate-programs': 'Graduate Programs',
  '/undergraduate-programs': 'Undergraduate Programs',
  '/contact': 'Contact',
  '/search': 'Search',
};

function getPath() {
  const hash = window.location.hash || '#/';
  try {
    const url = new URL(hash.slice(1), window.location.origin);
    return url.pathname || '/';
  } catch (_) {
    return '/';
  }
}

function render(Component) {
  const app = document.querySelector('#app');
  app.innerHTML = Component();
}

function handleRoute() {
  const path = getPath();
  const Component = routes[path] || NotFound;
  render(Component);
  const base = 'SS JS QA — Vanilla';
  const suffix = titles[path] || 'Not Found';
  document.title = `${base} | ${suffix}`;
}

function NotFound() {
  return `
    <h1>Page Not Found</h1>
    <p class="lead">The page you requested does not exist.</p>
    <p><a href="#/">Go back home</a></p>
  `;
}

window.addEventListener('hashchange', handleRoute);
window.addEventListener('DOMContentLoaded', handleRoute);
