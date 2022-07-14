import React from 'react';
import { describe, expect, it } from 'vitest';
import { render, screen } from '../../../../test-utils';
import HeaderBar from '../Header';

describe('header', () => {
  it('should have the h1 in the page', () => {
    render(<HeaderBar />);
    const heading = screen.getByText(/where in the world?/i);
    expect(heading).toBeInTheDocument();
  });

  it('should have the textContent "Where in the world?"', () => {
    render(<HeaderBar />);
    const heading = screen.getByTestId('heading');
    expect(heading).toHaveTextContent('Where in the world?');
  });
});
