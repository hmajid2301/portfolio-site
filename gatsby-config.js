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
  {
    resolve: `gatsby-remark-images`,
    options: {
      maxWidth: 1080,
    },
  },
  {
    resolve: `gatsby-source-filesystem`,
    options: {
      name: `blog`,
      path: `${__dirname}/src/content/blog`,
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

// Bundle analyzer, dev only
if (process.env.ENABLE_BUNDLE_ANALYZER === '1') {
  plugins.push('gatsby-plugin-webpack-bundle-analyser-v2');
}

const siteUrl =
  process.env.URL || process.env.DEPLOY_URL || `https://haseebmaji.dev`;

module.exports = {
  siteMetadata: {
    title: `Haseeb Majid Dev`,
    author: `Haseeb Majid`,
    description: `Haseeb Majid's personal portfolio website and blog.`,
    siteUrl,
    social: {},
  },
  plugins,
};
