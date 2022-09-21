import React from 'react';
import { Link, useParams } from 'react-router-dom';
import { IoArrowBackOutline } from 'react-icons/io5';
import useFetchCountry from '../hook/useFetchCountry';
import Spinner from '../componments/CountryCard/Spinner';
import Paragraph from '../componments/Paragraph';
import Container from '../componments/Container';

function CountryPage() {
  const { code } = useParams();
  const { country, loading } = useFetchCountry(code);
  const getInput = (input) => Object.values(input);

  if (loading) return <Spinner />;

  return (
    <>
      <Link to="/" className="">
        <div className="inline-flex items-center gap-4 rounded-lg border-2 border-gray-600 p-2 font-semibold text-darkBlue-900 duration-300 ease-in-out hover:bg-darkBlue-900 hover:text-lightGray-700 dark:border-gray-300  dark:text-lightGray-800 dark:hover:bg-lightGray-700 dark:hover:text-darkBlue-700">
          <IoArrowBackOutline /> back
        </div>
      </Link>
      {country.map(
        ({
          flags,
          name,
          population,
          region,
          subregion,
          capital,
          tld,
          currencies,
          borders,
          languages,
        }) => (
          <section
            key={name.common}
            className="mt-20 flex w-full flex-col items-center justify-center gap-10 lg:flex-row"
          >
            <img
              className="w-full max-w-[550px] flex-1 border-2 border-lightGray-900"
              src={flags.png}
              alt={name.common}
            />
            <div className="flex-1">
              <h2 className="my-5 text-xl font-bold text-darkBlue-900 dark:text-lightGray-800 lg:text-2xl">
                {name.common}
              </h2>
              <div className="lg:flex lg:justify-between lg:gap-4">
                <Container>
                  <Paragraph
                    title="population"
                    content={population.toLocaleString()}
                  />
                  <Paragraph title="region" content={region} />
                  <Paragraph title="sub region" content={subregion} />
                  <Paragraph title="capital" content={capital} />
                </Container>
                <Container>
                  <Paragraph
                    title="top level domain"
                    content={tld.map((elm) => elm).join(', ')}
                  />
                  <Paragraph
                    title="currencies"
                    content={getInput(currencies)
                      .map((currency) => currency.name)
                      .join(', ')}
                  />
                  <Paragraph
                    title="languages"
                    content={getInput(languages)
                      .map((lang) => lang)
                      .join(', ')}
                  />
                </Container>
              </div>
              <div className="flex flex-col gap-3 py-5">
                <h3 className="text-xl font-semibold text-darkBlue-900 dark:text-lightGray-800">
                  Border Countries:
                </h3>
                <section className="flex flex-wrap items-center gap-4">
                  {borders
                    ? borders.map((border) => (
                        <button
                          key={border}
                          type="button"
                          className="bg-slate-200 py-1 px-4 shadow-xl"
                        >
                          {border}
                        </button>
                      ))
                    : 'N/A'}
                </section>
              </div>
            </div>
          </section>
        )
      )}
    </>
  );
}

export default CountryPage;
