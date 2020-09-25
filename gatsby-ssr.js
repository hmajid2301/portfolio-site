import React from 'react';

import config from '~/config/config.json';
import ThemeProvider from '~/providers/Theme';
import '~/styles/global.css';

// Duplicated in gatsby-browser.js for client side rendering
export const wrapRootElement = ({ element }) => (
  <ThemeProvider>
    <div className="root overflow-hidden" id="root">
      {element}
    </div>
  </ThemeProvider>
);

export const onRenderBody = ({ setPostBodyComponents }) => {
  setPostBodyComponents([
    <script
      data-color="#FF813F"
      data-description="Support me on Buy me a coffee!"
      data-id={config.misc.buy_me_coffee_id}
      data-message="Thank you for visiting. You can now buy me a pizza!"
      data-name="BMC-Widget"
      data-position="left"
      data-x_margin="18"
      data-y_margin="18"
      src="https://cdnjs.buymeacoffee.com/1.0.0/widget.prod.min.js"
    />,
  ]);
};
