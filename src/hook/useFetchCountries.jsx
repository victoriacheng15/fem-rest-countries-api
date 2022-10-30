import { useState, useEffect } from 'react';
import url from './fetchUrls';

const useFetchCountries = () => {
  const [countries, setCountries] = useState([]);
  const [list, setList] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchCountries = async () => {
      setLoading(true);
      try {
        const address = url.all;
        const data = await (await fetch(address)).json();
        setCountries(data);
        setList(data);
      } catch (err) {
        setError(err);
      }
      setLoading(false);
    };

    fetchCountries();
  }, []);

  return { countries, loading, error, list, setList };
};

export default useFetchCountries;
