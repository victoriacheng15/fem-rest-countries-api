import { useState, useEffect } from 'react';
import url from './fetchUrls';

const useFetchCountries = () => {
  const [countries, setCountries] = useState([]);
  const [list, setList] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    (async function () {
      const address = url.all;
      setLoading(true);
      const data = await (await fetch(address)).json();
      setCountries(data);
      setList(data);
      setLoading(false);
    })();
  }, []);

  return { countries, loading, list, setList };
};

export default useFetchCountries;
