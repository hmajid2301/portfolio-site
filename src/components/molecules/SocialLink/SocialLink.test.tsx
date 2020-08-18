import React from 'react';

import SocialLink from './SocialLink';

import { render } from 'test-utils';

describe('<SocialLink />', () => {
  test.each([
    ['github', 'https://github.com/'],
    ['gitlab', 'https://gitlab.com/'],
  ])(`check SocialLink loads`, (icon, url) => {
    const { getByTestId } = render(<SocialLink icon={icon} url={url} />);
    const social = getByTestId('SocialLink');
    expect(social).toHaveAttribute('href', url);
    expect(social).toHaveAttribute('aria-label', `Opens link to ${icon} page`);
    expect(social).toHaveAttribute('target', '_blank');
  });
});
