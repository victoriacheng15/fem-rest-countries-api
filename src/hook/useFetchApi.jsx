import { useState, useEffect } from 'react';

const useFetchCountries = () => {
  const [countries, setCountries] = useState([]);
  const [list, setList] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    (async function () {
      const url = 'https://restcountries.com/v3.1/all';
      setLoading(true);
      const data = await (await fetch(url)).json();
      setCountries(data);
      setList(data);
      setLoading(false);
    })();
  }, []);

  return { countries, loading, list, setList };
};

export default useFetchCountries;
