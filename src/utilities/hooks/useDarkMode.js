import { useEffect, useState } from 'react';
import { APP_THEME } from "../../types/theme";

const useDarkMode = () => {
  const [theme, setTheme] = useState(APP_THEME.LIGHT);

  const toggleTheme = () => {
    if (theme === APP_THEME.LIGHT) {
      window.localStorage.setItem('theme', APP_THEME.DARK)
      setTheme(APP_THEME.DARK)
    } else {
      window.localStorage.setItem('theme', APP_THEME.LIGHT)
      setTheme(APP_THEME.LIGHT)
    }
  };

  useEffect(() => {
    const localTheme = window.localStorage.getItem('theme');
    localTheme && setTheme(localTheme);
  }, []);

  return [theme, toggleTheme]
}

export default useDarkMode;
