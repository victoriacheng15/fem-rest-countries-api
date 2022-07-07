import { describe, expect, it } from 'vitest';
import React from 'react';
import App from './App';
import { render, screen, userEvent } from '../test-utils';

describe('Simple working test', () => {
  it('have light mode text by default', () => {
    render(<App />);
    const button = screen.getByRole('button');
    expect(button).toHaveTextContent('light mode');
  });

  it('have dark mode text after button is fired', async () => {
    render(<App />);
    const button = screen.getByRole('button');
    userEvent.click(button);
    const buttonTextContent = screen.findByText(/dark mode/i)
    expect(await buttonTextContent).toHaveTextContent('dark mode');
  });
});