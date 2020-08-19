import React from 'react';

import SocialLinks from './SocialLinks';

import { render } from 'test-utils';

describe('<SocialLinks />', () => {
  test.each([
    [
      [],
      [
        { icon: 'github', url: 'https://github.com/' },
        { icon: 'gitlab', url: 'https://gitlab.com/' },
      ],
      [
        { icon: 'github', url: 'https://github.com/' },
        { icon: 'gitlab', url: 'https://gitlab.com/' },
        { icon: 'star', url: 'https://star.com/' },
        { icon: 'compass', url: 'https://github.com/hmajid2301' },
      ],
    ],
  ])(`check SocialLinks loads`, (buttons) => {
    const { queryAllByTestId } = render(<SocialLinks buttons={buttons} />);
    const social = queryAllByTestId('SocialLinks');
    expect(social.length).toBe(buttons.length);
  });
});
