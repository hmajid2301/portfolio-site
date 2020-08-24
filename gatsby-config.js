require('dotenv').config({
  path: '.env',
});

const config = require('./src/config/config.json');

const { siteData, article } = config;

const isProduction = process.env.NODE_ENV === 'production';

const plugins = [
  `gatsby-plugin-react-helmet`,
  `gatsby-transformer-sharp`,
  `gatsby-plugin-sharp`,
  `gatsby-plugin-typescript`,
  `gatsby-plugin-emotion`,
  `gatsby-plugin-sitemap`,
  `gatsby-plugin-postcss`,
  `gatsby-plugin-smoothscroll`,
  `gatsby-plugin-catch-links`,
  `gatsby-plugin-robots-txt`,
  // `gatsby-goatcounter-analytics-reporter`,
  {
    resolve: `gatsby-plugin-goatcounter`,
    options: {
      code: isProduction ? process.env.GOATCOUNTER_CODE : '',
      allowLocal: !isProduction,
    },
  },
  {
    resolve: `gatsby-source-filesystem`,
    options: {
      name: `content`,
      path: `${__dirname}/src/content`,
    },
  },
  {
    resolve: `@gatsby-contrib/gatsby-plugin-elasticlunr-search`,
    options: {
      fields: [`title`, `tags`, `content`],
      resolvers: {
        MarkdownRemark: {
          title: (node) => node.frontmatter.title,
          tags: (node) => node.frontmatter.tags,
          path: (node) => node.frontmatter.slug,
          content: (node) => node.internal.content,
        },
      },
    },
  },
  {
    resolve: 'gatsby-plugin-page-progress',
    options: {
      includePaths: ['/', { regex: '^/blog' }],
      height: 3,
      prependToBody: false,
      color: `#367ee9`,
      footerHeight: 400,
    },
  },
  {
    resolve: 'gatsby-plugin-web-font-loader',
    options: {
      google: {
        families: ['Fira Sans:600,700,900', 'Fira Code', 'Poppins:300,400,600'],
      },
    },
  },
  {
    resolve: `gatsby-source-git`,
    options: {
      name: `Articles`,
      remote: article.git_url,
      branch: `feature/testing-code-import`,
      patterns: article.file_patterns,
    },
  },
  {
    resolve: `gatsby-plugin-canonical-urls`,
    options: {
      siteUrl: siteData.siteUrl,
    },
  },
  {
    resolve: `gatsby-transformer-remark`,
    options: {
      plugins: [
        `gatsby-remark-reading-time`,
        `gatsby-remark-copy-linked-files`,
        `gatsby-remark-images`,
        `gatsby-plugin-social-sharing-cards`,
        `gatsby-remark-code-import`,
        `gatsby-remark-code-titles`,
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
  {
    resolve: `gatsby-plugin-manifest`,
    options: {
      name: siteData.title,
      short_name: siteData.author,
      start_url: `/`,
      background_color: `#222`,
      theme_color: `#367ee9`,
      display: `standalone`,
      icon: `src/assets/images/icon.png`,
      icons: [
        {
          src: `/favicons/android-chrome-192x192.png`,
          sizes: `192x192`,
          type: `image/png`,
        },
        {
          src: `/favicons/android-chrome-512x512.png`,
          sizes: `512x512`,
          type: `image/png`,
        },
      ],
    },
  },
  {
    resolve: `gatsby-plugin-offline`,
    options: {
      precachePages: [`/blog/*`],
    },
  },
];

if (process.env.USE_PERCY) plugins.push(`gatsby-plugin-percy`);

module.exports = {
  siteMetadata: {
    title: siteData.title,
    author: siteData.author,
    description: siteData.description,
    keywords: siteData.keywords,
    siteUrl: siteData.siteUrl,
    social: {},
  },
  plugins,
};
