require('dotenv').config({
  path: '.env',
});

const plugins = [
  `gatsby-plugin-react-helmet`,
  `gatsby-transformer-sharp`,
  `gatsby-plugin-sharp`,
  `gatsby-plugin-typescript`,
  `gatsby-plugin-emotion`,
  `gatsby-plugin-svgr`,
  `gatsby-remark-copy-linked-files`,
  `gatsby-plugin-sitemap`,
  `gatsby-plugin-postcss`,
  {
    resolve: `gatsby-remark-images`,
    options: {
      maxWidth: 1080,
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
      fields: [`title`, `tags`, `html`],
      resolvers: {
        MarkdownRemark: {
          title: (node) => node.frontmatter.title,
          tags: (node) => node.frontmatter.tags,
          path: (node) => node.frontmatter.slug,
          html: (node) => node.internal.content,
        },
      },
    },
  },
  {
    resolve: `gatsby-source-git`,
    options: {
      name: `Articles`,
      remote: `https://gitlab.com/hmajid2301/articles.git`,
      branch: `feature/develop`,
    },
  },
  {
    resolve: 'gatsby-plugin-web-font-loader',
    options: {
      google: {
        families: ['Fira Sans:600,700,900', 'Muli:300,600', 'Fira Code'],
      },
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
    resolve: `gatsby-transformer-remark`,
    options: {
      plugins: [
        `gatsby-remark-reading-time`,
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
      name: `haseebmajid.dev`,
      short_name: `Haseeb Majid`,
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
  `gatsby-plugin-offline`,
];

const siteUrl =
  process.env.URL || process.env.DEPLOY_URL || `https://haseebmajid.dev`;

module.exports = {
  siteMetadata: {
    title: `Haseeb Majid Dev`,
    author: `Haseeb Majid`,
    description: `Haseeb Majid's personal portfolio website and blog.`,
    keywords: ['portfolio', 'blog', 'haseeb majid'],
    siteUrl,
    social: {},
  },
  plugins,
};
