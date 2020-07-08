import React from 'react';

import SearchIcon from './SearchIcon';

import { render } from 'test-utils';

describe('<SearchIcon />', () => {
  describe('Props: Background', () => {
    test('Render with default style', () => {
      const { getByTestId } = render(
        <SearchIcon color="white" hoverColor="blue-500" />
      );
      const container = getByTestId('Icon');
      expect(container.className).toContain('text-white hover:text-blue-500');
    });
  });
});
