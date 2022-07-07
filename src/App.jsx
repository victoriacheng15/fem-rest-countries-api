import React, { useState } from 'react';
import HeaderBar from './componments/header/Header';

function App() {
  const [darkMode, setDarkMode] = useState(false);

  const setMode = () => setDarkMode(!darkMode);

  return (
    <div className={`min-h-screen font-nuito ${darkMode && 'dark'}`}>
      <HeaderBar onClick={setMode} isDark={darkMode} />
    </div>
  );
}

export default App;
