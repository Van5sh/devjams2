// components/DarkModeToggle.tsx
import { useEffect, useState } from 'react';

const DarkModeToggle = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
      setIsDarkMode(true);
      document.documentElement.classList.add('dark');
    }
  }, []);

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
    if (!isDarkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  };

  return (
    <button
      className="bg-gray-200 dark:bg-gray-700 p-2 rounded-full transition duration-300"
      onClick={toggleDarkMode}
    >
      {isDarkMode ? '🌙' : '☀️'}
    </button>
  );
};

export default DarkModeToggle;
