import React from 'react';
import { render, screen } from '@testing-library/react';
import { beforeEach, describe, it, expect } from 'vitest';
import HeaderBar from './index';

describe('Header', () => {
  beforeEach(() => {
    render(<HeaderBar />);
  });

  it('should renders the h1 heading', () => {
    const heading = screen.getByRole('heading');
    expect(heading).toBeInTheDocument();
  });

  it('should show light mode', () => {
    const button = screen.getByRole('button');
    expect(button).toHaveTextContent(/light mode/i);
  });
});
