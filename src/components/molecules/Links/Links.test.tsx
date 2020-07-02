import React from 'react';

import Links from './Links';

import { render } from 'test-utils';

describe('<Link />', () => {
  describe('Default Footer', () => {
    test('Render with default styles', () => {
      const links = ['Link1', 'Link2', 'Link3'];
      const { getAllByText } = render(<Links links={links} />);

      links.forEach((link) => {
        const linkElement = getAllByText(link)[0] as HTMLAnchorElement;
        expect(linkElement.href).toBe(`http://localhost/${link}`);
        expect(linkElement.className).toContain(
          'hover:border-blue-500 hover:text-blue-500'
        );
      });
    });
  });

  describe('Props: Hover Color', () => {
    test.each([
      ['gray-500', 'hover:border-gray-500 hover:text-gray-500 '],
      ['purple-500', 'hover:border-purple-500 hover:text-purple-500'],
      ['black', 'hover:border-black hover:text-black'],
    ])(
      'Render with %i hover color',
      (hoverColor: string, expectedClass: string) => {
        const links = ['Link1', 'Link2', 'Link3'];
        const { getAllByText } = render(
          <Links hoverColor={hoverColor} links={links} />
        );

        links.forEach((link) => {
          const linkElement = getAllByText(link)[0];
          expect(linkElement.className).toContain(expectedClass);
        });
      }
    );
  });

  describe('Props: Links', () => {
    test.each([[['Link1', 'Link2']], [['Blog', 'Pricing', 'Product']]])(
      'Render with %i links',
      (links: string[]) => {
        const { getAllByText } = render(<Links links={links} />);

        links.forEach((link) => {
          const linkElement = getAllByText(link)[0] as HTMLAnchorElement;
          expect(linkElement.href).toBe(`http://localhost/${link}`);
        });
      }
    );
  });
});
