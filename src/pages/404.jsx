import React from 'react';
import { BackHome } from '../components';

function ErrorPage() {
  return (
    <div className="flex flex-col items-center gap-10 dark:text-lightGray-700">
      <section className="flex flex-col items-center justify-center gap-10">
        <h2 className="text-5xl font-bold capitalize">
          whoops! 404 page not found
        </h2>
        <p className="text-xl font-semibold">
          Maybe the server or something else is going on vacation...
        </p>
        <p className="text-xl font-semibold">
          Feel free to raise an issue{' '}
          <a
            className="bg-darkBlue-800 px-2 text-lightGray-700 dark:bg-lightGray-700 dark:text-darkBlue-800"
            href="https://github.com/victoriacheng15/fem-rest-countries-api/issues"
            target="_blank"
            rel="noreferrer"
          >
            here
          </a>{' '}
          and let me know!
        </p>

        <p className="text-xl font-semibold">Otherwise, let&apos;s go back!</p>
      </section>
      <BackHome />
    </div>
  );
}

export default ErrorPage;
