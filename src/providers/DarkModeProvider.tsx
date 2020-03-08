import React, { Context, createContext, useReducer, useEffect } from "react";

export const LIGHT_THEME: Theme = {
  background: "#fafafa" as BackgroundColors,
  color: "#000000" as ForegroundColors,
  isDark: false,
  shade: "#ffffff" as SecondaryColors,
  tertiary: "#c1c1c1" as TertiaryColors
};

export const DARK_THEME: Theme = {
  background: "#333333" as BackgroundColors,
  color: "#fafafa" as ForegroundColors,
  isDark: true,
  shade: "#222222" as SecondaryColors,
  tertiary: "#010101" as TertiaryColors
};

export type BackgroundColors = "#333333" | "#fafafa";
export type ForegroundColors = "#000000" | "#fafafa";
export type SecondaryColors = "#222222" | "#ffffff";
export type TertiaryColors = "#010101" | "#c1c1c1";

export interface Theme {
  background: BackgroundColors;
  color: ForegroundColors;
  isDark: boolean;
  shade: SecondaryColors;
  tertiary: TertiaryColors;
}

interface DarkModeContext {
  mode: Theme;
  dispatch: React.Dispatch<any>;
}

const darkModeReducer = (_: any, isDark: boolean) =>
  isDark ? DARK_THEME : LIGHT_THEME;

const DarkModeContext: Context<DarkModeContext> = createContext(
  {} as DarkModeContext
);

const initialState =
  JSON.parse(localStorage.getItem("DarkMode") as string) || LIGHT_THEME;

const DarkModeProvider: React.FC = ({ children }) => {
  const [mode, dispatch] = useReducer(darkModeReducer, initialState);

  useEffect(() => {
    localStorage.setItem("DarkMode", JSON.stringify(mode));
  }, [mode]);

  return (
    <DarkModeContext.Provider
      value={{
        mode,
        dispatch
      }}
    >
      {children}
    </DarkModeContext.Provider>
  );
};

export { DarkModeProvider, DarkModeContext };
