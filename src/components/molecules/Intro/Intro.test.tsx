import React from 'react';

import Intro from './Intro';

import { render } from 'test-utils';

describe('<Intro />', () => {
  describe('Default Intro', () => {
    test('Render with default styles', () => {
      const { getByTestId } = render(<Intro text="Haseeb" />);
      const introContainer = getByTestId('IntroContainer');
      expect(introContainer.className).toContain('bg-white');
    });
  });

  describe('Props: Background', () => {
    test.each([
      ['purple-500', 'bg-purple-500'],
      ['gray-500', 'bg-gray-500'],
      ['black', 'bg-black'],
    ])(
      'Render with %i background color',
      (background: string, expectedClass: string) => {
        const { getByTestId } = render(
          <Intro background={background} text="Haseeb" />
        );
        const introContainer = getByTestId('IntroContainer');
        expect(introContainer.className).toContain(expectedClass);
      }
    );
  });
});
