import React from 'react';

import Logo, { Props } from './Logo';

import { render } from 'test-utils';

const props = {
  accent: 'gray-500',
  color: 'black',
  hoverColor: 'blue-500',
};

describe('<Logo />', () => {
  describe('Default Logo', () => {
    test('Render with default styles', () => {
      const { getByText } = render(<Logo {...props} text="Haseeb" />);
      const logoText = getByText('Haseeb');
      expect(logoText.className).toContain(
        'hover:text-blue-500 text-black lg:text-2xl'
      );
    });
  });

  describe('Props: Text', () => {
    test('Render with text Haseeb', () => {
      const { getByText } = render(<Logo {...props} text="Haseeb" />);
      const logoText = getByText('Haseeb');
      expect(logoText).toBeTruthy();
    });

    test('Render with text Random', () => {
      const { getByText } = render(
        <Logo
          accent="gray-500"
          color="black"
          hoverColor="gray-500"
          text="Random"
        />
      );
      const logoText = getByText('Random');
      expect(logoText.className).toBeTruthy();
      expect(() => {
        getByText('Random123');
      }).toThrowError();
    });
  });

  describe('Props: Hover Color', () => {
    test.each([
      ['purple-500', 'hover:text-purple-500'],
      ['gray-500', 'hover:text-gray-500'],
      ['black', 'hover:text-black'],
    ])(
      'Render with %i hover color',
      (hoverColor: string, expectedClass: string) => {
        const { getByText } = render(
          <Logo
            accent="gray-500"
            color="black"
            hoverColor={hoverColor}
            text="Haseeb"
          />
        );
        const logoText = getByText('Haseeb');
        expect(logoText.className).toContain(expectedClass);
      }
    );
  });

  describe('Props: Accent and Color', () => {
    test.each([
      ['blue-500', 'text-blue-500'],
      ['gray-500', 'text-gray-500'],
    ])(
      'Render with %i accent color',
      (accentColor: string, expectedClass: string) => {
        const { getByTestId } = render(
          <Logo {...props} accent={accentColor} text="Haseeb" />
        );
        const openingTags = getByTestId('OpeningTag');
        const closingTags = getByTestId('ClosingTag');

        expect(closingTags.className).toContain(expectedClass);
        expect(openingTags.className).toContain(expectedClass);
      }
    );
  });

  describe('Props: size', () => {
    test.each([
      ['xs' as Props['size'], 'text-xs'],
      ['sm' as Props['size'], 'text-sm'],
    ])('Render with %i text', (size: Props['size'], expectedClass: string) => {
      const { getByText } = render(
        <Logo {...props} size={size} text="Haseeb" />
      );
      const logoText = getByText('Haseeb');
      expect(logoText.className).toContain(expectedClass);
    });
  });
});
