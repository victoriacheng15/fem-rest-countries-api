import { useState, useEffect } from 'react';
import url from './fetchUrls';

const useFetchCountry = (code) => {
  const [country, setCountry] = useState('');
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    (async function () {
      const address = `${url.alphaCode}${code}`;
      setLoading(true);
      const data = await (await fetch(address)).json();
      setCountry(data);
      setLoading(false);
    })();
  }, [code]);

  return { country, loading };
};

export default useFetchCountry;
