import React from 'react';
import { beforeEach, describe, expect, it } from 'vitest';
import { render, screen } from '@testing-library/react';
import HeaderBar from '../Header';

describe('header', () => {
  beforeEach(() => {
    render(<HeaderBar />);
  });

  it('should have the h1 in the page', () => {
    const heading = screen.getByText(/where in the world?/i);
    expect(heading).toBeInTheDocument();
  });

  it('should have the textContent "Where in the world?"', () => {
    const heading = screen.getByTestId('heading');
    expect(heading).toHaveTextContent('Where in the world?');
  });
});
