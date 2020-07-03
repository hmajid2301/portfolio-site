import React from 'react';
import {
  AiFillGithub as Github,
  AiFillGitlab as Gitlab,
  AiFillMediumCircle as Medium,
} from 'react-icons/ai';
import { FaDev as Dev } from 'react-icons/fa';

import SocialLinks, { SocialButton } from './SocialLinks';

import { render } from 'test-utils';

describe('<SocialLinks />', () => {
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
      const { getByTestId } = render(<SocialLinks links={socials} />);

      socials.forEach((socialButton) => {
        const button = getByTestId(
          `Button-${socialButton.url}`
        ) as HTMLAnchorElement;
        expect(button.href).toBe(socialButton.url);
      });
    });
  });
});
