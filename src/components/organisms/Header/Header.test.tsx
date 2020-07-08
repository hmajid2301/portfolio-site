import React from 'react';

import Header from './Header';

import { render } from 'test-utils';

const links = ['Home', 'Blog', 'Projects', 'Open Source'];

describe('<Header />', () => {
  describe('Default Header', () => {
    test('Render with default nav bar', () => {
      const { getAllByText } = render(<Header />);

      links.forEach((link) => {
        const linkElement = getAllByText(link)[0] as HTMLAnchorElement;
        const linkUrl = link.replace(' ', '%20');
        expect(linkElement.href).toBe(`http://localhost/${linkUrl}`);
        expect(linkElement.className).toContain(
          `hover:border-blue-500 hover:text-blue-500`
        );
      });
    });
  });

  describe('Props: Background Color', () => {
    test.each([
      ['gray-500', 'text-black bg-gray-500'],
      ['purple-500', 'text-black bg-purple-500'],
      ['black', 'text-black bg-black'],
    ])(
      'Render with %i background color',
      (background: string, expectedClass: string) => {
        const { getByTestId } = render(<Header background={background} />);

        const header = getByTestId('Header');
        expect(header.className).toContain(expectedClass);
      }
    );
  });

  describe('Props: Hover Color', () => {
    test.each([
      ['gray-500', 'hover:border-gray-500 hover:text-gray-500'],
      ['purple-500', 'hover:border-purple-500 hover:text-purple-500'],
      ['black', 'hover:border-black hover:text-black'],
    ])(
      'Render with %i hover color',
      (hoverColor: string, expectedClass: string) => {
        const { getAllByText } = render(<Header hoverColor={hoverColor} />);

        links.forEach((link) => {
          const linkElement = getAllByText(link)[0];
          expect(linkElement.className).toContain(expectedClass);
        });
      }
    );
  });

  describe('Props: Links Color', () => {
    test.each([
      ['black', ''],
      ['gray-700', ''],
    ])('Render with %i links color', (color: string, expectedClass: string) => {
      const { getByTestId } = render(<Header color={color} />);

      const header = getByTestId('Header');
      expect(header.className).toContain(expectedClass);
    });
  });
});
