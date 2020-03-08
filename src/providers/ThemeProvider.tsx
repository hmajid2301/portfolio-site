import React, { Context, createContext, useReducer, useEffect } from "react";

interface ThemeContext {
  theme: string;
  dispatch: React.Dispatch<any>;
}

const ThemeContext: Context<ThemeContext> = createContext({} as ThemeContext);

const themeReducer = (_: any, theme: string) => theme;

const initialState =
  JSON.parse(localStorage.getItem("Theme") as string) || "#007cff";

const ThemeProvider: React.FC = ({ children }) => {
  const [theme, dispatch] = useReducer(themeReducer, initialState);

  useEffect(() => {
    localStorage.setItem("Theme", JSON.stringify(theme));
  }, [theme]);

  return (
    <ThemeContext.Provider
      value={{
        theme,
        dispatch
      }}
    >
      {children}
    </ThemeContext.Provider>
  );
};

export { ThemeProvider, ThemeContext };
