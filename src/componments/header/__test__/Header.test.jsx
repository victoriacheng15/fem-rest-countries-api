import { describe, expect, it } from 'vitest';
import React from 'react';
import HeaderBar from '../Header';
import { render, screen } from '../../../../test-utils';

describe('header', () => {
  it('should have the heading', () => {
    render(<HeaderBar />);
    const heading = screen.getByText(/where in the world?/i);
    expect(heading).toHaveTextContent('Where in the world?');
  });
});
