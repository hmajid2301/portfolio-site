const path = require('path');

require('dotenv').config({
  path: '.env',
});

exports.onCreateWebpackConfig = function addPathMapping({
  stage,
  actions,
  getConfig,
}) {
  actions.setWebpackConfig({
    resolve: {
      alias: {
        '~': path.resolve(__dirname, 'src'),
      },
    },
  });

  // Attempt to improve webpack vender code splitting
  if (stage === 'build-javascript') {
    const config = getConfig();

    config.optimization.splitChunks.cacheGroups = {
      ...config.optimization.splitChunks.cacheGroups,
      vendors: {
        test: /[\\/]node_modules[\\/]/,
        enforce: true,
        chunks: 'all',
        priority: 1,
      },
    };

    // Ensure Gatsby does not do any css code splitting
    config.optimization.splitChunks.cacheGroups.styles.priority = 10;

    actions.replaceWebpackConfig(config);
  }
};

exports.createPages = async ({ actions, graphql, reporter }) => {
  const { createPage } = actions;
  const blogPostTemplate = path.resolve('src/templates/Blog.tsx');
  const result = await graphql(`
    {
      postsRemark: allMarkdownRemark(
        sort: { order: DESC, fields: [frontmatter___date] }
        limit: 2000
      ) {
        edges {
          node {
            excerpt(pruneLength: 100)
            frontmatter {
              slug
              tags
              title
            }
          }
          previous {
            frontmatter {
              title
              slug
            }
          }
          next {
            frontmatter {
              title
              slug
            }
          }
        }
      }
    }
  `);

  if (result.errors) {
    reporter.panicOnBuild(`Error while running GraphQL query.`);
    return;
  }
  const posts = result.data.postsRemark.edges;
  posts.forEach(({ node, previous, next }) => {
    createPage({
      path:
        node.frontmatter.slug === 'uses'
          ? `${node.frontmatter.slug}`
          : `/blog/${node.frontmatter.slug}`,
      component: blogPostTemplate,
      context: {
        slug: node.frontmatter.slug,
        previous: previous || null,
        next: next || null,
      },
    });
  });
};
