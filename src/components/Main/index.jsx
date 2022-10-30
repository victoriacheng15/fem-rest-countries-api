import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { Countries, CountryPage, ErrorPage } from '../../pages';
import { MaxWidthContainer } from '../../layouts';

function Main() {
  return (
    <main className="min-h-screen bg-lightGray-800 py-12 dark:bg-darkBlue-800">
      <MaxWidthContainer>
        <Routes>
          <Route path="/" element={<Countries />} />
          <Route path="/country/:code" element={<CountryPage />} />
          <Route path="*" element={<ErrorPage />} />
        </Routes>
      </MaxWidthContainer>
    </main>
  );
}

export default Main;
