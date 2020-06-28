import { ThemeProvider } from 'emotion-theming';
import React, { ReactNode } from 'react';

import { theme } from '~/styles';

const App = ({ element }: { element: ReactNode }) => {
  return <ThemeProvider theme={theme}>{element}</ThemeProvider>;
};

export default App;
