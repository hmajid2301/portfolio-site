import React from 'react';
import {
  AiFillGithub as Github,
  AiFillGitlab as Gitlab,
  AiFillMediumCircle as Medium,
} from 'react-icons/ai';
import { FaDev as Dev } from 'react-icons/fa';

import Footer, { SocialButton } from './Footer';

import { render } from 'test-utils';

const social = [
  {
    icon: <Github />,
    url: 'https://github.com/hmajid2301',
  },
  {
    icon: <Gitlab />,
    url: 'https://gitlab.com/hmajid2301',
  },
  {
    icon: <Medium />,
    url: 'https://medium.com/@hmajid2301',
  },
  {
    icon: <Dev />,
    url: 'https://dev.to/hmajid2301',
  },
];

describe('<Footer />', () => {
  describe('Default Footer', () => {
    test('Render with default styles', () => {
      const links = ['Link1', 'Link2', 'Link3'];
      const { getAllByText } = render(
        <Footer links={links} socialButtons={social} />
      );

      links.forEach((link) => {
        const linkElement = getAllByText(link)[0] as HTMLAnchorElement;
        expect(linkElement.href).toBe(`http://localhost/${link}`);
        expect(linkElement.className).toContain(
          'hover:text-blue-500 hover:border-blue-500'
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
        const links = ['Link1', 'Link2', 'Link3'];
        const { getByTestId } = render(
          <Footer
            background={background}
            links={links}
            socialButtons={social}
          />
        );

        const footer = getByTestId('Container');
        expect(footer.className).toContain(expectedClass);
      }
    );
  });

  describe('Props: Hover Color', () => {
    test.each([
      ['gray-500', 'hover:text-gray-500 hover:border-gray-500'],
      ['purple-500', 'hover:text-purple-500 hover:border-purple-500'],
      ['black', 'hover:text-black hover:border-black'],
    ])(
      'Render with %i hover color',
      (hoverColor: string, expectedClass: string) => {
        const links = ['Link1', 'Link2', 'Link3'];
        const { getAllByText } = render(
          <Footer
            hoverColor={hoverColor}
            links={links}
            socialButtons={social}
          />
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
        const { getAllByText } = render(
          <Footer links={links} socialButtons={social} />
        );

        links.forEach((link) => {
          const linkElement = getAllByText(link)[0] as HTMLAnchorElement;
          expect(linkElement.href).toBe(`http://localhost/${link}`);
        });
      }
    );
  });

  describe('Props: Social Buttons', () => {
    test.each([
      [
        [
          {
            icon: <Github />,
            url: 'https://github.com/hmajid2301',
          },
          {
            icon: <Gitlab />,
            url: 'https://gitlab.com/hmajid2301',
          },
          {
            icon: <Medium />,
            url: 'https://medium.com/@hmajid2301',
          },
          {
            icon: <Dev />,
            url: 'https://dev.to/hmajid2301',
          },
        ],
      ],
      [
        [
          {
            icon: <Github />,
            url: 'https://github.com/hmajid2301',
          },
          {
            icon: <Gitlab />,
            url: 'https://gitlab.com/hmajid2301',
          },
        ],
      ],
    ])('Render with %i links', (socials: SocialButton[]) => {
      const links = ['Link1', 'Link2', 'Link3'];
      const { getByTestId } = render(
        <Footer links={links} socialButtons={socials} />
      );

      socials.forEach((socialButton) => {
        const button = getByTestId(
          `Button-${socialButton.url}`
        ) as HTMLAnchorElement;
        expect(button.href).toBe(socialButton.url);
      });
    });
  });
});
