import React from 'react';

import ThemeProvider from '~/providers/Theme';
import '~/styles/global.css';

require('dotenv').config({
  path: '.env',
});

// Duplicated in gatsby-browser.js for client side rendering
export const wrapRootElement = ({ element }) => (
  <ThemeProvider>
    <div className="root overflow-hidden">{element}</div>
  </ThemeProvider>
);
