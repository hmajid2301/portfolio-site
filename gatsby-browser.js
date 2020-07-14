import React from 'react';

import { App } from '~/components/App';
import '~/styles/globals.css';

// Duplicated in gatsby-ssr.js for server side rendering during the build
export const wrapRootElement = (props) => <App {...props} />;
