import React from 'react';

import SearchBar from './SearchBar';

import { render } from 'test-utils';

describe('<SearchBar />', () => {
  describe('Props: Background', () => {
    test('Render with default style', () => {
      const { getByTestId } = render(
        <SearchBar background="black" color="white" />
      );
      const container = getByTestId('SearchBar');
      expect(container.className).toContain('bg-black text-white');
    });
  });
});
