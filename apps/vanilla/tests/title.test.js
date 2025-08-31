import { describe, it, expect, beforeEach } from 'vitest';

beforeEach(async () => {
  // Reset DOM and import app (attaches listeners)
  document.body.innerHTML = '<main id="app"></main>';
  await import('../src/main.js');
});

function navigateTo(hash) {
  window.location.hash = hash;
  window.dispatchEvent(new HashChangeEvent('hashchange'));
}

describe('Vanilla titles', () => {
  it('sets Financial Aid title', () => {
    navigateTo('#/financial-aid');
    expect(document.title).toContain('SS JS QA — Vanilla');
    expect(document.title).toContain('Financial Aid');
  });
});

