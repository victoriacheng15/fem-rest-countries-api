import { useState, useEffect } from 'react';
import url from './fetchUrls';

const useFetchCountry = (code) => {
  const [country, setCountry] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchCountry = async () => {
      setLoading(true);
      try {
        const address = `${url.alphaCode}${code}`;
        const data = await (await fetch(address)).json();
        setCountry(data);
      } catch (err) {
        setError(err);
      }
      setLoading(false);
    };

    fetchCountry();
  }, [code]);

  return { country, error, loading };
};

export default useFetchCountry;
