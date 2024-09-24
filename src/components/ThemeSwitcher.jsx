import React, { useEffect, useState } from 'react';
import lightIcon from '../../src/assets/light-mode-icon.svg';
import darkIcon from '../../src/assets/dark-mode-icon.svg';

import './ThemeSwitcher.css';

const ThemeSwitcher = () => {
  const [theme, setTheme] = useState('light'); // Set default theme to 'light'
  const toggleTheme = () => {
    setTheme(prevTheme => (prevTheme === 'light' ? 'dark' : 'light'));
  };


  useEffect(() => {
    const themeLink = document.getElementById('theme-link');
    if (theme === 'dark') {
      themeLink.href = '../../src/utils/darkTheme.css';
      document.body.classList.remove('light-mode');
    } else {
      themeLink.href = '../../src/utils/lightTheme.css';
      document.body.classList.add('light-mode');
    }
  }, [theme]);


  return (
    <button className="theme-switcher" onClick={toggleTheme}>
      <img
        src={theme === 'light' ? darkIcon : lightIcon}
        alt={theme === 'light' ? 'Switch to Dark Mode' : 'Switch to Light Mode'}
        className="theme-icon"
      />
    </button>
  );
};

export default ThemeSwitcher;
