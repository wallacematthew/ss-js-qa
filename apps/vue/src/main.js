import { createApp, ref, computed, watch } from 'vue';
import '../styles.css';

export function getPath() {
  const hash = window.location.hash || '#/';
  try {
    const url = new URL(hash.slice(1), window.location.origin);
    return url.pathname || '/';
  } catch {
    return '/';
  }
}

const App = {
  setup() {
    const path = ref(getPath());
    const nav = [
      { href: '#/', label: 'Home' },
      { href: '#/financial-aid', label: 'Financial Aid' },
      { href: '#/graduate-programs', label: 'Graduate Programs' },
      { href: '#/undergraduate-programs', label: 'Undergraduate Programs' },
      { href: '#/contact', label: 'Contact' },
    ];
    const view = computed(() => path.value);
    const onHash = () => (path.value = getPath());
    window.addEventListener('hashchange', onHash);
    const base = 'SS JS QA — Vue';
    const titles = {
      '/': 'Home',
      '/financial-aid': 'Financial Aid',
      '/graduate-programs': 'Graduate Programs',
      '/undergraduate-programs': 'Undergraduate Programs',
      '/contact': 'Contact',
    };
    watch(path, (p) => {
      document.title = `${base} | ${titles[p] || 'Not Found'}`;
    }, { immediate: true });
    return { nav, view };
  },
  template: `
    <header class="site-header">
      <nav class="nav">
        <a class="brand" href="#/">SS JS QA</a>
        <div class="links">
          <a v-for="n in nav" :key="n.href" :href="n.href">{{ n.label }}</a>
        </div>
      </nav>
    </header>
    <main class="container">
      <section v-if="view==='/'">
        <h1>Welcome (Vue)</h1>
        <p class="lead">A minimal Vue app mirroring the vanilla demo.</p>
        <div id="searchstax-placeholder" class="placeholder">Search UI kit mounts here later.</div>
      </section>
      <section v-else-if="view==='/financial-aid'"><h1>Financial Aid</h1><p>Tuition, scholarships, deadlines, and forms.</p></section>
      <section v-else-if="view==='/graduate-programs'"><h1>Graduate Programs</h1><p>Masters and doctoral programs overview.</p></section>
      <section v-else-if="view==='/undergraduate-programs'"><h1>Undergraduate Programs</h1><p>Majors, minors, and advising.</p></section>
      <section v-else-if="view==='/contact'"><h1>Contact</h1><p>Reach out to departments or support.</p><div id="searchstax-placeholder-contact" class="placeholder">Search UI kit mounts here later.</div></section>
      <section v-else>
        <h1>Not Found</h1>
        <a href="#/">Go home</a>
      </section>
    </main>
    <footer class="site-footer">
      <small>Demo app for testing SearchStax UI kit integration.</small>
    </footer>
  `,
};

export function mountApp(selector = '#app') {
  return createApp(App).mount(selector);
}

if (typeof window !== 'undefined') {
  mountApp('#app');
}
