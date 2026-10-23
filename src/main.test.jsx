// @vitest-environment happy-dom
import React from 'react';
import { afterEach, describe, expect, it, vi } from 'vitest';
import { cleanup, fireEvent, render, screen, waitFor, within } from '@testing-library/react';
import { App } from './main.jsx';

vi.mock('motion/react', async () => {
  const ReactModule = await import('react');
  const motion = new Proxy({}, {
    get: (_, tag) => ReactModule.forwardRef(({ children, initial, animate, exit, variants, transition, custom, whileTap, whileHover, ...props }, ref) => ReactModule.createElement(tag, { ...props, ref }, children))
  });
  return { AnimatePresence: ({ children }) => children, motion, useReducedMotion: () => true };
});

function renderApp() {
  return render(<App />);
}

afterEach(() => {
  cleanup();
  window.localStorage.removeItem('story-slides-theme');
  document.documentElement.dir = 'ltr';
  document.documentElement.lang = 'en';
});

describe('presentation controls', () => {
  it('advances the story with the keyboard', async () => {
    renderApp();
    fireEvent.click(screen.getByRole('button', { name: 'Begin presentation' }));
    await screen.findByRole('heading', { name: 'Four institutions. One moving shipment.' });

    fireEvent.keyDown(window, { key: 'ArrowRight' });
    await screen.findByRole('heading', { name: 'The Silk Roads: trade before shared rules' });
    fireEvent.keyDown(window, { key: 'ArrowRight' });
    await screen.findByRole('heading', { name: 'After World War I: business looks for a way back' });
  });

  it('switches to Arabic and applies right-to-left direction', async () => {
    renderApp();
    fireEvent.click(screen.getByRole('button', { name: 'عربي' }));
    expect(document.documentElement.dir).toBe('rtl');

    fireEvent.click(screen.getByRole('button', { name: 'ابدأ العرض' }));
    await screen.findByRole('heading', { name: 'أربع ركائز، وشحنة واحدة.' });
  });

  it('requests fullscreen from the presentation control', async () => {
    const requestFullscreen = vi.fn().mockResolvedValue(undefined);
    renderApp();
    Object.defineProperty(document.querySelector('.studio-shell'), 'requestFullscreen', { value: requestFullscreen });

    fireEvent.click(screen.getByRole('button', { name: 'Enter presentation mode' }));
    await waitFor(() => expect(requestFullscreen).toHaveBeenCalledOnce());
  });

  it('switches themes and remembers the choice', async () => {
    renderApp();
    fireEvent.click(screen.getByRole('button', { name: 'Switch to light theme' }));
    expect(document.querySelector('.studio-shell').dataset.theme).toBe('light');
    expect(window.localStorage.getItem('story-slides-theme')).toBe('light');

    fireEvent.click(screen.getByRole('button', { name: 'Switch to dark theme' }));
    expect(document.querySelector('.studio-shell').dataset.theme).toBe('dark');
  });

  it('opens a contextual concept explanation and closes it with Escape', async () => {
    renderApp();
    fireEvent.click(screen.getByRole('button', { name: 'Begin presentation' }));
    await screen.findByRole('heading', { name: 'Four institutions. One moving shipment.' });

    fireEvent.click(screen.getByRole('button', { name: 'Explain: Rules & customs' }));
    const dialog = screen.getByRole('dialog');
    expect(dialog).toBeTruthy();
    expect(within(dialog).getByRole('heading', { name: 'Rules & customs' })).toBeTruthy();
    expect(within(dialog).getByText(/Governments set shared trade obligations/)).toBeTruthy();

    fireEvent.keyDown(window, { key: 'Escape' });
    expect(screen.queryByRole('dialog')).toBeNull();

    fireEvent.click(screen.getByRole('button', { name: 'Explain: Money & trust' }));
    expect(within(screen.getByRole('dialog')).getByText(/Country-level monetary stability/)).toBeTruthy();
    fireEvent.keyDown(window, { key: 'Escape' });

    fireEvent.click(screen.getByRole('button', { name: 'FR' }));
    fireEvent.click(screen.getByRole('button', { name: 'Expliquer: Règles commerciales' }));
    expect(within(screen.getByRole('dialog')).getByText(/Propriété, paiement et qualité/)).toBeTruthy();
    fireEvent.keyDown(window, { key: 'Escape' });
    fireEvent.click(screen.getByRole('button', { name: 'EN' }));
    fireEvent.click(screen.getByRole('button', { name: 'Explain: WTO / OMC' }));
    expect(within(screen.getByRole('dialog')).getByText(/The WTO works between governments/)).toBeTruthy();
  });

  it('shows sourced Silk Road and World War stories', async () => {
    renderApp();
    fireEvent.click(screen.getByRole('button', { name: 'Begin presentation' }));
    fireEvent.keyDown(window, { key: 'ArrowRight' });
    await screen.findByRole('heading', { name: 'The Silk Roads: trade before shared rules' });

    expect(screen.getByAltText(/Tang dynasty ceramic camel and rider/)).toBeTruthy();
    expect(screen.getByRole('link', { name: /VeronikaB/ }).getAttribute('href')).toContain('commons.wikimedia.org');

    const carousel = screen.getByRole('region', { name: 'A longer story of trade' });
    fireEvent.touchStart(carousel, { changedTouches: [{ identifier: 1, clientX: 320, clientY: 120 }] });
    fireEvent.touchEnd(carousel, { changedTouches: [{ identifier: 1, clientX: 120, clientY: 120 }] });
    await screen.findByRole('heading', { name: 'After World War I: business looks for a way back' });
    expect(screen.getByText(/founded the ICC in Paris/)).toBeTruthy();

    fireEvent.keyDown(window, { key: 'ArrowRight' });
    await screen.findByRole('heading', { name: 'After World War II: cooperation at a wider scale' });
    expect(screen.getByText(/It did not create the ICC/)).toBeTruthy();

    fireEvent.keyDown(window, { key: 'ArrowRight' });
    await screen.findByRole('heading', { name: 'A system built from hard lessons.' });
  });

  it('explains standards as a three-stage readiness process', async () => {
    renderApp();
    fireEvent.click(screen.getByRole('button', { name: 'Begin presentation' }));
    for (let step = 0; step < 8; step += 1) fireEvent.keyDown(window, { key: 'ArrowRight' });

    await screen.findByRole('heading', { name: 'Standards make goods ready to travel.' });
    expect(screen.getByRole('heading', { name: '1. Set the requirement' })).toBeTruthy();
    expect(screen.getByRole('heading', { name: '2. Verify the product' })).toBeTruthy();
    expect(screen.getByRole('heading', { name: '3. Move it safely' })).toBeTruthy();
    expect(screen.getByText('International Organization for Standardization')).toBeTruthy();
    expect(screen.getByText('International Maritime Organization')).toBeTruthy();
    expect(screen.getByText(/ISO publishes standards; it does not certify the supplier/)).toBeTruthy();
    expect(screen.getByText(/The air waybill records carriage/)).toBeTruthy();
  });
});