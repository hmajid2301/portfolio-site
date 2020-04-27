import React from 'react';

import { configure, addDecorator, addParameters } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { INITIAL_VIEWPORTS } from '@storybook/addon-viewport';

import { EmotionThemeProvider } from './decorators';

// We will address this later.
import '../src/styles/globals.css';

// automatically import all files ending in *.stories.js
configure(require.context('../src', true, /\.stories\.js$/), module);

// Gatsby Setup
// ============================================
// Gatsby's Link overrides:
// Gatsby defines a global called ___loader to prevent its method calls from creating console errors you override it here
global.___loader = {
  enqueue: () => {},
  hovering: () => {},
};
// Gatsby internal mocking to prevent unnecessary errors in storybook testing environment
global.__PATH_PREFIX__ = '';
// This is to utilized to override the window.___navigate method Gatsby defines and uses to report what path a Link would be taking us to if it wasn't inside a storybook
window.___navigate = pathname => {
  action('NavigateTo:')(pathname);
};

// Storybook Addons
// ============================================
// TODO: Add our breakpoints to the list of viewport options
addParameters({
  viewport: {
    viewports: INITIAL_VIEWPORTS,
    defaultViewport: 'responsive',
  },
  options: {
    panelPosition: 'right',
  },
});

// Storybook Decorators
// ============================================
// Global Styles ==============================
addDecorator(story => (
  <>
    <div style={{ padding: '3rem' }}>{story()}</div>
  </>
));

// Emotion Theme Provider =====================
addDecorator(EmotionThemeProvider);
