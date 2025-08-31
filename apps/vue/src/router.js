import { createRouter, createWebHashHistory } from 'vue-router';
import Home from './views/HomeView.vue';
import FinancialAid from './views/FinancialAidView.vue';
import GraduatePrograms from './views/GraduateProgramsView.vue';
import UndergraduatePrograms from './views/UndergraduateProgramsView.vue';
import Contact from './views/ContactView.vue';
import Search from './views/SearchView.vue';

const routes = [
  { path: '/', component: Home, meta: { title: 'Home' } },
  { path: '/financial-aid', component: FinancialAid, meta: { title: 'Financial Aid' } },
  { path: '/graduate-programs', component: GraduatePrograms, meta: { title: 'Graduate Programs' } },
  { path: '/undergraduate-programs', component: UndergraduatePrograms, meta: { title: 'Undergraduate Programs' } },
  { path: '/contact', component: Contact, meta: { title: 'Contact' } },
  { path: '/search', component: Search, meta: { title: 'Search' } },
  { path: '/:pathMatch(.*)*', redirect: '/' },
];

export const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

router.afterEach((to) => {
  const base = 'SS JS QA — Vue';
  document.title = `${base} | ${to.meta.title || 'Not Found'}`;
});

export default router;

