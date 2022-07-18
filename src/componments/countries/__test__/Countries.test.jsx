import React from 'react';
import { beforeEach, describe, expect, it, vi } from 'vitest';
import { render, screen } from '@testing-library/react';
import CountryCard from '../CountryCard';

const country = {
  url: 'canada',
  name: 'Canada',
  captial: 'Ottawa',
  flag: 'https://flagcdn.com/w320/ca.png',
  population: 38005238,
  region: 'Americas',
};

describe('country card', () => {
  beforeEach(() => {
    render(
      <CountryCard
        name={country.name}
        countryCaptial={country.capital}
        region={country.region}
        flags={country.flag}
        alt={country.name}
        population={country.population}
      />
    );
  });

  it('should return Canada as the country name', async () => {
    const countryName = screen.getByText(/canada/i);
    expect(countryName).toHaveTextContent('Canada');
  });

  it('should return 38005238 as the country population', () => {
    const countryPopulation = screen.getByText(/population/i);
    expect(countryPopulation).toHaveTextContent(38005238);
  });

  it('should return Ottawa as the country captial', async () => {
    const countryCaptial = screen.getByText(/captial/i);
    expect(countryCaptial).toBeInTheDocument();
  });
});
