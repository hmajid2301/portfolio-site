import {
  createMuiTheme,
  responsiveFontSizes,
  StylesProvider,
  ThemeProvider as MaterialThemeProvider
} from "@material-ui/core/styles";
import React from "react";

import { DarkModeProvider } from "~/providers/DarkModeProvider";
import { ThemeProvider } from "~/providers/ThemeProvider";
import MainApp from "~/views/MainApp";

const App = () => {
  let theme = createMuiTheme();
  theme = responsiveFontSizes(theme);

  return (
    <StylesProvider injectFirst>
      <MaterialThemeProvider theme={theme}>
        <DarkModeProvider>
          <ThemeProvider>
            <MainApp />
          </ThemeProvider>
        </DarkModeProvider>
      </MaterialThemeProvider>
    </StylesProvider>
  );
};

export default App;
