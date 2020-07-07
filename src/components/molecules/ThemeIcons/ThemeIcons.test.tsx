import React from 'react';

import Icon from './ThemeIcons';

import { render } from 'test-utils';

describe('<ThemeIcons />', () => {
  describe('Props: Background', () => {
    test('Render with default style', () => {
      const { getByTestId } = render(<Icon color="white" hover="blue-500" />);
      const container = getByTestId('Icon');
      expect(container.className).toContain('text-white hover:text-blue-500');
    });
  });
});
