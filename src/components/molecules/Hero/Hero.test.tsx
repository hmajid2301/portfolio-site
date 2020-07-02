import React from 'react';

import Hero from './Hero';

import { render } from 'test-utils';

describe('<Hero />', () => {
  describe('Default Intro', () => {
    test('Render with default styles', () => {
      const { getByTestId } = render(<Hero text="Haseeb" />);
      const heroContainer = getByTestId('HeroContainer');
      expect(heroContainer.className).toContain('bg-white');
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
          <Hero background={background} text="Haseeb" />
        );
        const heroContainer = getByTestId('HeroContainer');
        expect(heroContainer.className).toContain(expectedClass);
      }
    );
  });
});
