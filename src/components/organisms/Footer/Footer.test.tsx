import React from 'react';

import Footer from './Footer';

import { render } from 'test-utils';

describe('<Footer />', () => {
  describe('Default Footer', () => {
    test('Render with default styles', () => {
      const { getAllByText } = render(<Footer />);
      const links = ['Home', 'Blog', 'Projects', 'Open Source'];

      links.forEach((link) => {
        const linkElement = getAllByText(link)[0] as HTMLAnchorElement;
        expect(linkElement.href).toBe(`http://localhost/${link}`);
        expect(linkElement.className).toContain(
          'hover:border-blue-500 hover:text-blue-500'
        );
      });
    });
  });

  describe('Props: Background Color', () => {
    test.each([
      ['gray-500', 'bg-gray-500'],
      ['purple-500', 'bg-purple-500'],
      ['black', 'bg-black'],
    ])(
      'Render with %i background color',
      (background: string, expectedClass: string) => {
        const { getByTestId } = render(<Footer background={background} />);

        const footer = getByTestId('Container');
        expect(footer.className).toContain(expectedClass);
      }
    );
  });

  describe('Props: Hover Color', () => {
    test.each([
      ['gray-500', 'hover:border-gray-500 hover:text-gray-500 '],
      ['purple-500', 'hover:border-purple-500 hover:text-purple-500'],
      ['black', 'hover:border-black hover:text-black'],
    ])(
      'Render with %i hover color',
      (hoverColor: string, expectedClass: string) => {
        const { getAllByText } = render(<Footer hoverColor={hoverColor} />);
        const links = ['Home', 'Blog', 'Projects', 'Open Source'];

        links.forEach((link) => {
          const linkElement = getAllByText(link)[0];
          expect(linkElement.className).toContain(expectedClass);
        });
      }
    );
  });
});
