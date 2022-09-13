import React from 'react';
import { Link, useParams } from 'react-router-dom';
import useFetchCountry from '../hook/useFetchCountry';

function CountryPage() {
  const { id } = useParams();
  const { country, loading } = useFetchCountry(id);
  // console.log({ id, country, loading });
  return (
    <>
      <Link to="/">Back</Link>
      <section>
        <h1> dummy page</h1>
      </section>
    </>
  );
}

export default CountryPage;
