import React from 'react';

import '~/styles/globals.css';
import { App } from '~/components/App';

// Duplicated in gatsby-ssr.js for server side rendering during the build
export const wrapRootElement = props => <App {...props} />;
