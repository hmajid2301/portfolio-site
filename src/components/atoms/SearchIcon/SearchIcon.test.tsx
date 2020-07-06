import React from 'react';

import SearchIcon from './SearchIcon';

import { render } from 'test-utils';

describe('<SearchIcon />', () => {
  describe('Props: Background', () => {
    test('Render with default style', () => {
      const { getByTestId } = render(
        <SearchIcon background="black" color="white" />
      );
      const container = getByTestId('Icon');
      expect(container.className).toContain(
        'bg-black hover:bg-white text-white hover:text-black'
      );
    });
  });
});
