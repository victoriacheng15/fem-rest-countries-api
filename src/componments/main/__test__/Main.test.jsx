import React from 'react';
import { describe, expect, it } from 'vitest';
import { render, screen } from '../../../../test-utils';
import Main from '../Main';

describe('main content', () => {
  it('should rendered input element', () => {
    render(<Main />);
    const inputElement = screen.getByPlaceholderText(/search for a country/i);
    expect(inputElement).toBeInTheDocument();
  });

  it('should rendered dropdown menu"', () => {
    render(<Main />);
    const dropdownMen = screen.getByDisplayValue(/filter by region/i);
    expect(dropdownMen).toBeInTheDocument();
  });
});
