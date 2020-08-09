require('dotenv').config({
  path: '.env',
});

const config = require('./src/config/config.json');

const { siteData, misc } = config;

const isProduction = process.env.NODE_ENV === 'production';

const plugins = [
  `gatsby-plugin-react-helmet`,
  `gatsby-transformer-sharp`,
  `gatsby-plugin-sharp`,
  `gatsby-plugin-typescript`,
  `gatsby-plugin-emotion`,
  `gatsby-plugin-sitemap`,
  `gatsby-plugin-postcss`,
  `gatsby-plugin-robots-txt`,
  `gatsby-plugin-percy`,
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
      fields: [`title`, `tags`, `html`, `excerpt`],
      resolvers: {
        MarkdownRemark: {
          title: (node) => node.frontmatter.title,
          tags: (node) => node.frontmatter.tags,
          path: (node) => node.frontmatter.slug,
          html: (node) => node.internal.content,
          excerpt: (node) => node.excerpt,
        },
      },
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
      remote: misc.article_git_url,
      branch: `master`,
    },
  },
  {
    resolve: 'gatsby-plugin-webpack-bundle-analyser-v2',
    options: {
      options: {
        analyzerMode: `server`,
        analyzerPort: `8888`,
        defaultSizes: 'gzip',
        devMode: true,
      },
    },
  },
  {
    resolve: `gatsby-plugin-canonical-urls`,
    options: {
      siteUrl: misc.canonical_url,
    },
  },
  {
    resolve: `gatsby-transformer-remark`,
    options: {
      plugins: [
        `gatsby-remark-reading-time`,
        `gatsby-remark-copy-linked-files`,
        `gatsby-remark-images`,
        {
          resolve: `gatsby-remark-autolink-headers`,
          options: {
            icon: `<svg aria-hidden="true" height="20" version="1.1" viewBox="0 0 16 16" width="20" class="fill-current"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg>`,
            className: `text-main`,
          },
        },
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

module.exports = {
  siteMetadata: {
    title: `Haseeb Majid Dev`,
    author: `Haseeb Majid`,
    description: `Haseeb Majid's personal portfolio website and blog.`,
    keywords: siteData.keywords,
    siteUrl: siteData.siteUrl,
    social: {},
  },
  plugins,
};
