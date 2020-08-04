import React from 'react';

import ThemeProvider from '~/providers/Theme';
import '~/styles/global.css';

require('typeface-poppins');
require('typeface-fira-sans');
require('typeface-fira-code');

// Duplicated in gatsby-ssr.js for server side rendering during the build
export const wrapRootElement = ({ element }) => (
  <ThemeProvider>
    <div className="root overflow-hidden">{element}</div>
  </ThemeProvider>
);
