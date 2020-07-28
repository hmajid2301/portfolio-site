import React from 'react';

import ThemeContextProvider from '~/providers/Theme';
import '~/styles/global.css';

// Duplicated in gatsby-ssr.js for server side rendering during the build
export const wrapRootElement = ({ element }) => (
  <ThemeContextProvider>
    <div className="root overflow-hidden">{element}</div>
  </ThemeContextProvider>
);
