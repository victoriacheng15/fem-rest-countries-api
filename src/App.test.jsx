import React from 'react';
import { beforeEach, describe, expect, it } from 'vitest';
import { render, screen, fireEvent } from '@testing-library/react';
import App from './App';

describe.only('Simple working test', () => {
  beforeEach(() => {
    render(<App />);
  });

  it('have light mode text by default', () => {
    const button = screen.getByRole('button');
    expect(button).toHaveTextContent('light mode');
  });

  it('have dark mode text after button is fired', async () => {
    const button = screen.getByRole('button');
    fireEvent.click(button);
    const buttonTextContent = screen.findByText(/dark mode/i);
    expect(await buttonTextContent).toHaveTextContent('dark mode');
  });
});
