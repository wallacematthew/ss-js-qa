import { describe, it, expect } from 'vitest';
import React from 'react';
import { render } from '@testing-library/react';
import Home from '../pages/index.js';

describe('React app', () => {
  it('renders home heading', () => {
    const { container } = render(React.createElement(Home));
    const h1 = container.querySelector('h1');
    expect(h1).toBeTruthy();
    expect(h1.textContent).toContain('Welcome (React/Next)');
  });

  it('sets document title with next/head', () => {
    render(React.createElement(Home));
    const titleEl = document.head.querySelector('title');
    expect(titleEl).toBeTruthy();
    expect(titleEl.textContent).toContain('SS JS QA — React');
  });
});
