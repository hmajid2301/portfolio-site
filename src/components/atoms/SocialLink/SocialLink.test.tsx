import React from 'react';
import { AiFillMediumCircle as Medium } from 'react-icons/ai';

import SocialLink from './SocialLink';

import { render } from 'test-utils';

describe('<SocialLink />', () => {
  test('Render with default style', () => {
    const url = 'https://medium.com/@hmajid2301';
    const { getByTestId } = render(
      <SocialLink
        color="purple-500"
        hoverColor="blue-500"
        icon={<Medium />}
        url={url}
      />
    );

    const button = getByTestId(`Button-${url}`) as HTMLAnchorElement;
    expect(button.href).toBe(url);
  });
});
