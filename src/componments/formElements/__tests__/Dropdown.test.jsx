import React from 'react';
import { describe, expect, it } from 'vitest';
import { render, screen } from '../../../../test-utils';
import Dropdown from '../Dropdown';

describe('dropdown menu', () => {
  it('should have an select element', () => {
    render(<Dropdown />);
    const selectElement = screen.getByTestId('dropdown');
    expect(selectElement).toBeInTheDocument();
  });

  it('should have length of 6', () => {
    render(<Dropdown />);
    const optionElements = screen.getAllByTestId('option');
    expect(optionElements.length).toBe(6);
  });
});
