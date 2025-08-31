import { createApp } from 'vue';
import App from './App.vue';
import router from './router.js';
import '../styles.css';

export function mountApp(selector = '#app') {
  try {
    console.log('[vue] mounting app');
    const app = createApp(App);
    app.use(router);
    return app.mount(selector);
  } catch (err) {
    console.error('[vue] mount error:', err);
    const el = document.querySelector(selector);
    if (el) el.textContent = 'Vue failed to mount: ' + (err && err.message ? err.message : String(err));
    return null;
  }
}

if (typeof window !== 'undefined') {
  try {
    mountApp('#app');
  } catch (e) {
    /* handled */
  }
}
