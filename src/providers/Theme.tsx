import React, { Context, useState, useEffect } from 'react';

interface ThemeContext {
  theme: string;
  setTheme: (theme: string) => void;
}

function getInitialColorMode() {
  const persistedColorPreference = window.localStorage.getItem('@Theme');
  const hasPersistedPreference = typeof persistedColorPreference === 'string';
  if (hasPersistedPreference) {
    return persistedColorPreference;
  }

  const mql = window.matchMedia('(prefers-color-scheme: dark)');
  const hasMediaQueryPreference = typeof mql.matches === 'boolean';
  if (hasMediaQueryPreference) {
    return mql.matches ? 'dark' : 'light';
  }

  return 'dark';
}

export const ThemeContext: Context<ThemeContext> = React.createContext(
  {} as ThemeContext
);

const ThemeProvider = ({ children }: { children: React.ReactNode }) => {
  const [theme, setTheme] = useState('dark');

  useEffect(() => {
    function loadTheme() {
      const currentTheme = getInitialColorMode();
      return currentTheme || 'dark';
    }
    setTheme(loadTheme());
  }, []);

  useEffect(() => {
    localStorage.setItem('@Theme', theme);
  }, [theme]);

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export default ThemeProvider;
