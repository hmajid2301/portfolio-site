import React from 'react';
import { render } from 'test-utils';

import { Logo } from '~/components/Logo';
import Header from '../Header';

describe('<Header />', () => {
  describe('Default Header', () => {
    test('Render with default nav bar', () => {
      const links = ['Link1', 'Link2', 'Link3'];
      const { getAllByText } = render(
        <Header logo={<div>Logo</div>} links={links} />
      );

      links.forEach(link => {
        const linkElement = getAllByText(link)[0];
        expect(linkElement.href).toBe(`http://localhost/${link}`);
        expect(linkElement.className).toBe(
          `text-lg my-2 lg:text-sm lg:mx-6 lg:my-0 font-semibold tracking-wide transition duration-300
      pb-1 border-b-2 border-transparent hover:border-blue-500 hocus:text-blue-500 hover:text-blue-500`
        );
      });
    });
  });

  describe('Props: Hover Color', () => {
    test('Render with gray hover color', () => {
      const links = ['Link1', 'Link2', 'Link3'];
      const { getAllByText } = render(
        <Header logo={<div>Logo</div>} links={links} hoverColor="gray-500" />
      );

      links.forEach(link => {
        const linkElement = getAllByText(link)[0];
        expect(linkElement.className).toContain(
          'hover:border-gray-500 hocus:text-gray-500 hover:text-gray-500'
        );
      });
    });

    test('Render with purple hover color', () => {
      const links = ['Link1', 'Link2', 'Link3'];
      const { getAllByText } = render(
        <Header logo={<div>Logo</div>} links={links} hoverColor="purple-500" />
      );

      links.forEach(link => {
        const linkElement = getAllByText(link)[0];
        expect(linkElement.className).toContain(
          'hover:border-purple-500 hocus:text-purple-500 hover:text-purple-500'
        );
      });
    });
  });

  describe('Props: Logo', () => {
    test('Render with simple Logo', () => {
      const links = ['Link1', 'Link2', 'Link3'];
      const { getAllByText } = render(
        <Header logo={<div>Haseeb</div>} links={links} />
      );

      const logos = getAllByText('Haseeb');
      logos.forEach(logo => {
        expect(logo).toBeTruthy();
        expect(logo.parentElement.href).toBe('http://localhost/');
      });
    });

    test('Render with <Logo />', () => {
      const links = ['Link1', 'Link2', 'Link3'];
      const { getAllByText } = render(
        <Header
          logo={
            <Logo
              accent="gray-500"
              color="black"
              hoverColor="purple-500"
              text="xyz.io"
            />
          }
          links={links}
        />
      );

      const logos = getAllByText('xyz.io');
      logos.forEach(logo => {
        expect(logo).toBeTruthy();
        expect(logo.parentElement.href).toBe('http://localhost/');
      });
    });
  });

  describe('Props: Links', () => {
    test('Render with basic links', () => {
      const links = ['Link1', 'Link2', 'Link3'];
      const { getAllByText } = render(
        <Header logo={<div>Haseeb</div>} links={links} />
      );

      links.forEach(link => {
        const linkElement = getAllByText(link)[0];
        expect(linkElement.href).toBe(`http://localhost/${link}`);
      });
    });
  });
});
