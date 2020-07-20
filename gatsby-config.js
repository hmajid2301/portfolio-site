require('dotenv').config({
  path: '.env',
});

const plugins = [
  `gatsby-plugin-react-helmet`,
  `gatsby-transformer-sharp`,
  `gatsby-plugin-sharp`,
  `gatsby-remark-copy-linked-files`,
  {
    resolve: `gatsby-remark-images`,
    options: {
      maxWidth: 1080,
    },
  },
  `gatsby-plugin-typescript`,
  `gatsby-plugin-emotion`,
  `gatsby-plugin-remove-serviceworker`,
  `gatsby-plugin-svgr`,
  {
    resolve: `gatsby-source-filesystem`,
    options: {
      name: `blog`,
      path: `${__dirname}/src/content/blog`,
    },
  },
  {
    resolve: 'gatsby-plugin-google-fonts',
    options: {
      fonts: [`Lora:400,700`],
      display: 'swap',
    },
  },
  `gatsby-plugin-postcss`,
  {
    resolve: `gatsby-transformer-remark`,
    options: {
      plugins: [
        {
          resolve: `gatsby-remark-prismjs`,
          options: {
            classPrefix: 'language-',
            inlineCodeMarker: null,
            aliases: {},
            showLineNumbers: false,
            noInlineHighlight: false,
          },
        },
      ],
    },
  },
];

// Bundle analyzer, dev only
if (process.env.ENABLE_BUNDLE_ANALYZER === '1') {
  plugins.push('gatsby-plugin-webpack-bundle-analyser-v2');
}

module.exports = {
  plugins,
};
