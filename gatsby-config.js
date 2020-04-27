require('dotenv').config({
  path: '.env',
});

const plugins = [
  'gatsby-plugin-react-helmet',
  'gatsby-transformer-sharp',
  'gatsby-plugin-sharp',
  'gatsby-plugin-typescript',
  'gatsby-plugin-emotion',
  'gatsby-plugin-remove-serviceworker',
  'gatsby-plugin-svgr',

  {
    resolve: 'gatsby-plugin-google-fonts',
    options: {
      fonts: [`Lora:400,700`],
      display: 'swap',
    },
  },
  'gatsby-plugin-postcss',
];

// Bundle analyzer, dev only
if (process.env.ENABLE_BUNDLE_ANALYZER === '1') {
  plugins.push('gatsby-plugin-webpack-bundle-analyser-v2');
}

module.exports = {
  plugins,
};
