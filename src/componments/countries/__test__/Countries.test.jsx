import React from 'react';
import { beforeEach, describe, expect, it } from 'vitest';
import { render, screen } from '@testing-library/react';
import Countries from '../Countries';
import useFetchCountries from '../../../hook/useFetchApi';

// describe('counrties', () => {
//   beforeEach(() => {
//     const { countries } = useFetchCountries();
//     render(<Countries countries={countries} />);
//   });
//   it('should have country cards', () => {
//     // render(<Countries />);
//     const cards = screen.queryAllByTestId('card');
//     expect(cards).toBeInTheDocument();
//   });
// });
