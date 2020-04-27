module.exports = {
  stories: ['../src/**/*.stories.tsx'],
  addons: [
    '@storybook/addon-actions/register',
    '@storybook/addon-viewport/register',
    {
      name: '@storybook/preset-typescript',
      options: {
        tsLoaderOptions: {
          transpileOnly: true,
        },
      },
    },
  ],
};
