import React, { useState } from 'react';
import HeaderBar from './componments/header/Header';

function App() {
  const [darkMode, setDarkMode] = useState(false);

  const setMode = () => setDarkMode(!darkMode);

  return (
    <div className={`min-h-screen font-nuito ${darkMode && 'dark'}`}>
      <HeaderBar onClick={setMode} isDark={darkMode} />
      <h1 className="text-3xl font-bold text-blue-900">
        Rest Countries API app {darkMode ? 'dark' : 'light'}
      </h1>
      <p>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eum itaque
        sunt fuga delectus hic, alias corrupti minus suscipit quo deserunt.
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eum itaque
        sunt fuga delectus hic, alias corrupti minus suscipit quo deserunt.
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eum itaque
        sunt fuga delectus hic, alias corrupti minus suscipit quo deserunt.
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eum itaque
        sunt fuga delectus hic, alias corrupti minus suscipit quo deserunt.
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eum itaque
        sunt fuga delectus hic, alias corrupti minus suscipit quo deserunt.
      </p>
    </div>
  );
}

export default App;
