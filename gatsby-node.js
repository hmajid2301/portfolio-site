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

exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions;

  return new Promise((resolve, reject) => {
    const postTemplate = path.resolve('./src/templates/Post.js');
    const pageTemplate = path.resolve('./src/templates/Page.js');
    const categoryTemplate = path.resolve(
      './src/templates/CategoryTemplate.js'
    );

    // Do not create draft post files in production.
    const activeEnv =
      process.env.ACTIVE_ENV || process.env.NODE_ENV || 'development';
    console.log(`Using environment config: '${activeEnv}'`);
    let filters = `filter: { fields: { slug: { ne: null } } }`;
    if (activeEnv === 'production')
      filters = `filter: { fields: { slug: { ne: null } , prefix: { ne: null } } }`;

    resolve(
      graphql(
        `
          {
            allMarkdownRemark(
              ${filters}
              sort: { fields: [fields___prefix], order: DESC }
              limit: 1000
            ) {
              edges {
                node {
                  id
                  fields {
                    slug
                    prefix
                    source
                  }
                  frontmatter {
                    title
                    category
                  }
                }
              }
            }
          }
        `
      ).then((result) => {
        if (result.errors) {
          console.log(result.errors);
          reject(result.errors);
        }

        const items = result.data.allMarkdownRemark.edges;

        // Create category list
        const categorySet = new Set();
        items.forEach((edge) => {
          const {
            node: {
              frontmatter: { category },
            },
          } = edge;

          if (category && category !== null) {
            categorySet.add(category);
          }
        });

        // Create category pages
        const categoryList = Array.from(categorySet);
        categoryList.forEach((category) => {
          createPage({
            path: `/category/${category.kebabCase(category)}/`,
            component: categoryTemplate,
            context: {
              category,
            },
          });
        });

        // Create posts
        const posts = items.filter(
          (item) => item.node.fields.source === 'posts'
        );
        posts.forEach(({ node }, index) => {
          const { slug } = node.fields;
          const next = index === 0 ? undefined : posts[index - 1].node;
          const prev =
            index === posts.length - 1 ? undefined : posts[index + 1].node;
          const { source } = node.fields;

          createPage({
            path: slug,
            component: postTemplate,
            context: {
              slug,
              prev,
              next,
              source,
            },
          });
        });

        // and pages.
        const pages = items.filter(
          (item) => item.node.fields.source === 'pages'
        );
        pages.forEach(({ node }) => {
          const { slug } = node.fields;
          const { source } = node.fields;

          createPage({
            path: slug,
            component: pageTemplate,
            context: {
              slug,
              source,
            },
          });
        });
      })
    );
  });
};
