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
  {
    resolve: `gatsby-goatcounter-analytics-reporter`,
    options: {
      code: process.env.GOATCOUNTER_CODE,
      personalToken: process.env.GOATCOUNTER_PERSONAL_TOKEN,
    },
  },
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
      includePaths: [{ regex: '^/blog/.+' }],
      height: 3,
      prependToBody: false,
      color: siteData.primary,
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
      branch: `master`,
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
    resolve: `gatsby-plugin-nprogress`,
    options: {
      color: siteData.primary,
    },
  },
  {
    resolve: `gatsby-transformer-remark`,
    options: {
      plugins: [
        {
          resolve: 'gatsby-remark-embed-video',
          options: {
            width: 600,
            related: false,
            noIframeBorder: true,
          },
        },
        `gatsby-remark-mermaid`,
        `gatsby-remark-reading-time`,
        `gatsby-remark-copy-linked-files`,
        `gatsby-remark-images`,
        `gatsby-plugin-social-sharing-cards`,
        `gatsby-remark-code-import`,
        `gatsby-remark-code-titles`,
        `gatsby-remark-numbered-footnotes`,
        `gatsby-remark-admonitions`,
        {
          resolve: `gatsby-remark-autolink-headers`,
          options: {
            offsetY: `0`,
            icon: `#`,
            className: `header-anchor`,
            elements: [`h1`, `h2`, `h3`],
          },
        },
        {
          resolve: 'gatsby-remark-series',
          options: {
            render: {
              placeholder: 'top',
            },
            resolvers: {
              toSlug: (markdownNode) =>
                `/blog/${markdownNode.frontmatter.slug}/`,
            },
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
    resolve: `gatsby-plugin-feed`,
    options: {
      query: `
          {
            site {
              siteMetadata {
                title
                description
                siteUrl
                site_url: siteUrl
              }
            }
          }
        `,
      feeds: [
        {
          serialize: ({ query: { site, allMarkdownRemark } }) => {
            return allMarkdownRemark.edges.map((edge) => {
              return {
                ...edge.node.frontmatter,
                description: edge.node.excerpt,
                date: edge.node.frontmatter.date,
                url: `${site.siteMetadata.siteUrl}/blog/${edge.node.frontmatter.slug}/`,
                guid: `${site.siteMetadata.siteUrl}/blog/${edge.node.frontmatter.slug}/`,
                custom_elements: [{ 'content:encoded': edge.node.html }],
              };
            });
          },
          query: `
              {
                allMarkdownRemark(
                  sort: { order: DESC, fields: [frontmatter___date] },
                ) {
                  edges {
                    node {
                      excerpt
                      html
                      frontmatter {
                        title
                        date
                        slug
                      }
                    }
                  }
                }
              }
            `,
          output: '/rss.xml',
          title: `${siteData.siteUrl}'s RSS Feed`,
          match: '^/blog/.+',
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
      theme_color: config.siteData.primary,
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
