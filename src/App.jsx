import React, { useReducer } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import HeaderBar from './componments/header/Header';
import Main from './componments/main/Main';
import Footer from './componments/footer/Footer';
import { CountriesProvider } from './context/CountriesContext';

function App() {
  const [darkMode, setDarkMode] = useReducer((prevMode) => !prevMode, false);

  return (
    <CountriesProvider>
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
    </CountriesProvider>
  );
}

export default App;
