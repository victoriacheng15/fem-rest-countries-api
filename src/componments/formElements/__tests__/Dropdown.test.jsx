import React from 'react';
import { beforeEach, describe, expect, it } from 'vitest';
import { render, screen } from '@testing-library/react';
import Dropdown from '../Dropdown';

describe('dropdown menu', () => {
  beforeEach(() => {
    render(<Dropdown />);
  });
  it('should have an select element', () => {
    const selectElement = screen.getByTestId('dropdown');
    expect(selectElement).toBeInTheDocument();
  });

  it('should have length of 6', () => {
    const optionElements = screen.getAllByTestId('option');
    expect(optionElements.length).toBe(6);
  });
});
