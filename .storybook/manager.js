import { addons } from '@storybook/addons';

addons.setConfig({
  previewTabs: {
    'storybook/docs/panel': null,
    canvas: null,
    'storybookjs/notes/panel': { title: 'Annotations', hidden: true },
    graphiql: {
      hidden: true,
    },
  },
});
