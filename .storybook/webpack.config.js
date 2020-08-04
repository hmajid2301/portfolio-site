const path = require('path');
const createCompiler = require('@storybook/addon-docs/mdx-compiler-plugin');

module.exports = ({ config }) => {
  // Transpile Gatsby module because Gatsby includes un-transpiled ES6 code.
  // ========================================================
  config.module.rules[0].exclude = [/node_modules\/(?!(gatsby)\/)/];

  // Add Babel rules
  // ========================================================
  // use installed babel-loader which is v8.0-beta (which is meant to work with @babel/core@7)
  config.module.rules[0].use[0].loader = require.resolve('babel-loader');

  // use @babel/preset-react for JSX and env (instead of staged presets)
  config.module.rules[0].use[0].options.presets = [
    require.resolve('@babel/preset-react'),
    require.resolve('@babel/preset-env'),
    // Emotion preset must run BEFORE reacts preset to properly convert css-prop.
    // Babel preset-ordering runs reversed (from last to first). Emotion has to be after React preset.
    require.resolve('@emotion/babel-preset-css-prop'),
  ];

  config.module.rules[0].use[0].options.plugins = [
    // use @babel/plugin-proposal-class-properties for class arrow functions
    require.resolve('@babel/plugin-proposal-class-properties'),
    // use babel-plugin-remove-graphql-queries to remove static queries from components when rendering in storybook
    require.resolve('babel-plugin-remove-graphql-queries'),
  ];

  // Prefer Gatsby ES6 entrypoint (module) over commonjs (main) entrypoint
  // ========================================================
  config.resolve.mainFields = ['browser', 'module', 'main'];

  // Add Webpack rules for TypeScript
  // ========================================================
  config.module.rules.push({
    test: /\.(ts|tsx)$/,
    loader: require.resolve('babel-loader'),
    options: {
      presets: [
        ['react-app', { flow: false, typescript: true }],
        // Emotion preset must run BEFORE reacts preset to properly convert css-prop.
        // Babel preset-ordering runs reversed (from last to first). Emotion has to be after React preset.
        require.resolve('@emotion/babel-preset-css-prop'),
      ],
      plugins: [
        require.resolve('@babel/plugin-proposal-class-properties'),
        // use babel-plugin-remove-graphql-queries to remove static queries from components when rendering in storybook
        require.resolve('babel-plugin-remove-graphql-queries'),
      ],
    },
  });

  config.module.rules.push({
    test: /\.css$/,
    use: [
      // Loader for webpack to process CSS with PostCSS
      {
        loader: 'postcss-loader',
        options: {
          sourceMap: true,
          config: {
            path: './.storybook/',
          },
        },
      },
    ],

    include: path.resolve(__dirname, '../storybook/'),
  });

  config.resolve.extensions.push('.ts', '.tsx');

  const assetLoader = {
    loader: assetRule.loader,
    options: assetRule.options || assetRule.query,
  };

  // Mirror project aliases for some reason (should be picked up by .babelrc)
  // ========================================================
  config.resolve.alias['~/utils'] = path.resolve(__dirname, '../src/utils');
  config.resolve.alias['~/components'] = path.resolve(
    __dirname,
    '../src/components'
  );

  return config;
};
