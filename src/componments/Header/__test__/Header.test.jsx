import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { vi } from 'vitest';
import HeaderBar from '../index';

describe('App Compomnet', () => {
  beforeEach(() => {
    render(<HeaderBar />);
  });

  it('should renders the h1 heading', () => {
    const heading = screen.getByRole('heading');
    expect(heading).toHaveTextContent(/where in the world/i);
  });

  it('should show light mode', () => {
    const button = screen.getByRole('button');
    expect(button).toHaveTextContent(/light mode/i);
  });

  // it('should show light mode', async () => {
  //   const user = userEvent.setup();
  //   const button = screen.getByRole('button');
  //   // const darkMode = screen.findByText(/dark mode/i);
  //   await user.click(button);
  //   expect(await screen.queryByRole('button')).toHaveTextContent('dark mode');
  // });
});
