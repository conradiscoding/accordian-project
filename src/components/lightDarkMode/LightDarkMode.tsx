import React, { useEffect } from 'react';
import styles from './LightDarkMode.module.css';
import useLocalStorage from './useLocalStorage';

const LightDarkMode = () => {
  const [theme, setTheme] = useLocalStorage('theme', 'dark');

  const handleToggleTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light');
  };

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('theme', theme);
  }, [theme]);

  return (
    <div className={styles.LightDarkMode} data-theme={theme}>
      <div className={styles.container}>
        <p>Hello World</p>
        <button onClick={handleToggleTheme}>Change Theme</button>
      </div>
      LightDarkMode
    </div>
  );
};

export default LightDarkMode;
