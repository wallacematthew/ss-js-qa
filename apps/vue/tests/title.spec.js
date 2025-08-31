import { describe, it, expect, beforeEach } from 'vitest';

beforeEach(() => {
  document.body.innerHTML = '<div id="app"></div>';
});

describe('Vue titles', () => {
  it('sets Graduate Programs title', async () => {
    const mod = await import('../src/main.js');
    mod.mountApp('#app');
    window.location.hash = '#/graduate-programs';
    window.dispatchEvent(new HashChangeEvent('hashchange'));
    expect(document.title).toContain('SS JS QA — Vue');
    expect(document.title).toContain('Graduate Programs');
  });
});

