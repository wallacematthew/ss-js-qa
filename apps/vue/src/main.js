import { createApp, ref, computed } from 'vue';

const routes = ['/', '/financial-aid', '/graduate-programs', '/undergraduate-programs', '/contact'];

function getPath() {
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
    return { nav, view };
  },
  template: `
    <header style="border-bottom:1px solid #ccc;padding:12px">
      <nav style="display:flex;gap:12px;flex-wrap:wrap">
        <a v-for="n in nav" :key="n.href" :href="n.href">{{ n.label }}</a>
      </nav>
    </header>
    <main style="max-width:960px;margin:0 auto;padding:16px">
      <section v-if="view==='/'">
        <h1>Welcome (Vue)</h1>
        <p>A minimal Vue app mirroring the vanilla demo.</p>
        <div id="searchstax-placeholder" style="padding:16px;border:2px dashed #999;border-radius:8px">Search UI kit mounts here later.</div>
      </section>
      <section v-else-if="view==='/financial-aid'"><h1>Financial Aid</h1><p>Tuition, scholarships, deadlines, and forms.</p></section>
      <section v-else-if="view==='/graduate-programs'"><h1>Graduate Programs</h1><p>Masters and doctoral programs overview.</p></section>
      <section v-else-if="view==='/undergraduate-programs'"><h1>Undergraduate Programs</h1><p>Majors, minors, and advising.</p></section>
      <section v-else-if="view==='/contact'"><h1>Contact</h1><p>Reach out to departments or support.</p><div id="searchstax-placeholder-contact" style="padding:16px;border:2px dashed #999;border-radius:8px">Search UI kit mounts here later.</div></section>
      <section v-else>
        <h1>Not Found</h1>
        <a href="#/">Go home</a>
      </section>
    </main>
  `,
};

createApp(App).mount('#app');

