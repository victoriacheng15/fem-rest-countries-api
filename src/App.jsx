import React, { useReducer } from 'react';
import { Route, Routes } from 'react-router-dom';
import HeaderBar from './components/Header';
import { Countries, CountryPage, ErrorPage } from './pages';
import Footer from './components/Footer';
import { MaxWidthContainer } from './layouts';
import { CountriesProvider } from './context/CountriesContext';
import { PaginationProvider } from './context/PaginationContext';

function App() {
  const [darkMode, setDarkMode] = useReducer((prevMode) => !prevMode, false);

  return (
    <CountriesProvider>
      <PaginationProvider>
        <div className={`min-h-screen font-nuito ${darkMode && 'dark'}`}>
          <HeaderBar onClick={setDarkMode} isDark={darkMode} />
          <main className="min-h-screen bg-lightGray-800 py-12 dark:bg-darkBlue-800">
            <MaxWidthContainer>
              <Routes>
                <Route path="/" element={<Countries />} />
                <Route path="/country/:code" element={<CountryPage />} />
                <Route path="*" element={<ErrorPage />} />
              </Routes>
            </MaxWidthContainer>
          </main>
          <Footer />
        </div>
      </PaginationProvider>
    </CountriesProvider>
  );
}

export default App;
