import React, { useState } from 'react';
import HeaderBar from './componments/header/Header';
import Main from './componments/main/Main';
import Footer from './componments/footer/Footer';

function App() {
  const [darkMode, setDarkMode] = useState(false);
  const setMode = () => setDarkMode(!darkMode);

  return (
    <div
      className={`min-h-screen font-nuito flex flex-col bg-darkBlue-800 justify-center ${
        darkMode && 'dark'
      }`}
    >
      <HeaderBar onClick={setMode} isDark={darkMode} />
      <Main />
      <Footer />
    </div>
  );
}

export default App;
