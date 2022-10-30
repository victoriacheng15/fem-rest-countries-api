import React, { useContext } from 'react';
import { Link, useParams } from 'react-router-dom';
import useFetchCountry from '../hook/useFetchCountry';
import CountriesContext from '../context/CountriesContext';
import {
  BackHome,
  Paragraph,
  Spinner,
  FlagImage,
  Heading2,
  Heading3,
} from '../components';
import { ParaContainer } from '../layouts';

function CountryPage() {
  const { code } = useParams();
  const { country, loading } = useFetchCountry(code);
  const { list } = useContext(CountriesContext);
  const getInput = (input) => Object.values(input);

  const getBorderName = (border) => {
    const getName = list.filter(({ cca3 }) => cca3.includes(border));

    return getName.map(({ name }) => name.common)[0];
  };

  if (loading) return <Spinner />;

  return (
    <>
      <BackHome />
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
            className="mt-20 flex w-full flex-col justify-center gap-8 md:flex-row lg:gap-12"
          >
            <FlagImage src={flags.png} alt={`flag of ${name.common}`} />
            <div className="flex-1">
              <Heading2 title={name.common} />
              <div className="lg:flex lg:justify-between lg:gap-4">
                <ParaContainer compType="CountryPage">
                  <Paragraph
                    title="population"
                    content={population.toLocaleString()}
                  />
                  <Paragraph title="region" content={region} />
                  <Paragraph title="sub region" content={subregion} />
                  <Paragraph title="capital" content={capital} />
                </ParaContainer>
                <ParaContainer compType="CountryPage">
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
                </ParaContainer>
              </div>
              <div className="flex flex-col gap-3 py-5">
                <Heading3 title="Border Countries:" />
                <section className="flex flex-wrap items-center gap-6 text-darkBlue-900 dark:text-lightGray-800">
                  {borders
                    ? borders.map((border) => (
                        <Link
                          to={`/country/${border}`}
                          key={border}
                          className="rounded-lg bg-lightGray-800 py-2 px-3 text-lg font-medium shadow-md shadow-darkBlue-900 duration-300 ease-in-out hover:scale-125 dark:bg-darkBlue-900 dark:text-lightGray-800 dark:shadow-lightGray-900 lg:text-xl"
                        >
                          {getBorderName(border)}
                        </Link>
                      ))
                    : 'No Border Countries'}
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
