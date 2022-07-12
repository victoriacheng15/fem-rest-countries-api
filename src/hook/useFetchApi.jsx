import { useState, useEffect } from 'react';
import setUrl from './api';

export const useFetchCountries = () => {
  const [countries, setCountries] = useState([]);
  const [fetchError, setFetchError] = useState(null);

  useEffect(() => {
    (async function () {
      try {
        const url = setUrl('all');
        const data = await (await fetch(url)).json();
        setCountries(data);
      } catch (error) {
        setFetchError(error);
      }
    })();
  }, []);

  return { countries, fetchError };
};
