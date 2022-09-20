import React, { useReducer } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import HeaderBar from './componments/Header';
import Main from './componments/Main';
import Footer from './componments/Footer';
import { CountriesProvider } from './context/CountriesContext';
import { PaginationProvider } from './context/PaginationContext';

function App() {
  const [darkMode, setDarkMode] = useReducer((prevMode) => !prevMode, false);

  return (
    <CountriesProvider>
      <PaginationProvider>
        <Router>
          <div
            className={`flex min-h-screen flex-col justify-center bg-darkBlue-800 font-nuito ${
              darkMode && 'dark'
            }`}
          >
            <HeaderBar onClick={setDarkMode} isDark={darkMode} />
            <Main />
            <Footer />
          </div>
        </Router>
      </PaginationProvider>
    </CountriesProvider>
  );
}

export default App;
