module.exports = {
  stories: ['../src/**/*.stories.@(tsx|mdx)'],
  addons: [
    '@storybook/addon-controls',
    '@storybook/addon-essentials',
    '@storybook/preset-typescript',
    '@storybook/addon-viewport/register',
    '@storybook/addon-a11y/register'
  ],
};
