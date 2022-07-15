import React from 'react';
import { beforeEach, describe, expect, it } from 'vitest';
import { render, screen } from '@testing-library/react';
import Main from '../Main';

describe('main content', () => {
  beforeEach(() => {
    render(<Main />);
  });

  it('should rendered input element', () => {
    const inputElement = screen.getByPlaceholderText(/search for a country/i);
    expect(inputElement).toBeInTheDocument();
  });

  it('should rendered dropdown menu"', () => {
    const dropdownMen = screen.getByDisplayValue(/filter by region/i);
    expect(dropdownMen).toBeInTheDocument();
  });
});
