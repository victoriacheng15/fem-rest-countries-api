import React, { useReducer } from 'react';
import HeaderBar from './components/Header';
import Main from './components/Main';
import Footer from './components/Footer';
import { CountriesProvider } from './context/CountriesContext';
import { PaginationProvider } from './context/PaginationContext';

function App() {
  const [darkMode, setDarkMode] = useReducer((prevMode) => !prevMode, false);

  return (
    <CountriesProvider>
      <PaginationProvider>
        <div className={`min-h-screen font-nuito ${darkMode && 'dark'}`}>
          <HeaderBar onClick={setDarkMode} isDark={darkMode} />
          <Main />
          <Footer />
        </div>
      </PaginationProvider>
    </CountriesProvider>
  );
}

export default App;
