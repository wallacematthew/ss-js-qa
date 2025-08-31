import { describe, it, expect, beforeEach } from 'vitest';

beforeEach(() => {
  document.body.innerHTML = '<div id="app"></div>';
});

describe('Vue app', () => {
  it('renders home heading', async () => {
    await import('../src/main.js');
    const h1 = document.querySelector('h1');
    expect(h1).toBeTruthy();
    expect(h1.textContent).toContain('Welcome (Vue)');
  });
});

