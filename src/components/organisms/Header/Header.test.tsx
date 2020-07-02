import React from 'react';

import Header from './Header';

import { render } from 'test-utils';

import { Logo } from '~/components/atoms/Logo';

describe('<Header />', () => {
  describe('Default Header', () => {
    test('Render with default nav bar', () => {
      const links = ['Link1', 'Link2', 'Link3'];
      const { getAllByText } = render(
        <Header links={links} logo={<div>Logo</div>} />
      );

      links.forEach((link) => {
        const linkElement = getAllByText(link)[0] as HTMLAnchorElement;
        expect(linkElement.href).toBe(`http://localhost/${link}`);
        expect(linkElement.className).toBe(
          `text-lg my-2 lg:text-sm lg:mx-6 lg:my-0 font-semibold tracking-wide transition duration-300
      pb-1 border-b-2 border-transparent hover:border-blue-500 hocus:text-blue-500 hover:text-blue-500`
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
        const links = ['Link1', 'Link2', 'Link3'];
        const { getByTestId } = render(
          <Header
            background={background}
            links={links}
            logo={<div>Logo</div>}
          />
        );

        const header = getByTestId('Header');
        expect(header.className).toContain(expectedClass);
      }
    );
  });

  describe('Props: Hover Color', () => {
    test.each([
      [
        'gray-500',
        'hover:border-gray-500 hocus:text-gray-500 hover:text-gray-500',
      ],
      [
        'purple-500',
        'hover:border-purple-500 hocus:text-purple-500 hover:text-purple-500',
      ],
      ['black', 'hover:border-black hocus:text-black hover:text-black'],
    ])(
      'Render with %i hover color',
      (hoverColor: string, expectedClass: string) => {
        const links = ['Link1', 'Link2', 'Link3'];
        const { getAllByText } = render(
          <Header
            hoverColor={hoverColor}
            links={links}
            logo={<div>Logo</div>}
          />
        );

        links.forEach((link) => {
          const linkElement = getAllByText(link)[0];
          expect(linkElement.className).toContain(expectedClass);
        });
      }
    );
  });

  describe('Props: Logo', () => {
    test.each([
      [<div>Haseeb</div>, 'Haseeb'],
      [
        <Logo
          accent="gray-500"
          color="black"
          hoverColor="purple-500"
          text="xyz.io"
        />,
        'xyz.io',
      ],
    ])(
      'Render with %i logo',
      (logoComp: React.ReactNode, searchString: string) => {
        const links = ['Link1', 'Link2', 'Link3'];
        const { getAllByText } = render(
          <Header links={links} logo={logoComp} />
        );

        const logos = getAllByText(searchString);
        logos.forEach((logo) => {
          expect(logo).toBeTruthy();
          const logoParent = logo.parentElement as HTMLAnchorElement;
          expect(logoParent.href).toBe('http://localhost/');
        });
      }
    );
  });

  describe('Props: Links', () => {
    test.each([[['Link1', 'Link2']], [['Blog', 'Pricing', 'Product']]])(
      'Render with %i links',
      (links: string[]) => {
        const { getAllByText } = render(
          <Header links={links} logo={<div>Haseeb</div>} />
        );

        links.forEach((link) => {
          const linkElement = getAllByText(link)[0] as HTMLAnchorElement;
          expect(linkElement.href).toBe(`http://localhost/${link}`);
        });
      }
    );
  });

  describe('Props: Links Color', () => {
    test.each([
      ['black', ''],
      ['gray-700', ''],
    ])(
      'Render with %i links color',
      (linkColor: string, expectedClass: string) => {
        const links = ['Link1', 'Link2', 'Link3'];

        const { getByTestId } = render(
          <Header linkColor={linkColor} links={links} logo={<div>Logo</div>} />
        );

        const header = getByTestId('Header');
        expect(header.className).toContain(expectedClass);
      }
    );
  });
});
