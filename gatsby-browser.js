import React from 'react';
import 'prismjs/themes/prism-okaidia.css';

import '~/styles/globals.css';
import { App } from '~/components/App';

// Duplicated in gatsby-ssr.js for server side rendering during the build
export const wrapRootElement = (props) => <App {...props} />;
