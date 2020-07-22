import React from 'react';

import { App } from '~/components/App';
import ThemeContextProvider from '~/providers/Theme';
import '~/styles/global.css';

// Duplicated in gatsby-ssr.js for server side rendering during the build
export const wrapRootElement = (props) => (
  <ThemeContextProvider>
    <App {...props} />
  </ThemeContextProvider>
);
