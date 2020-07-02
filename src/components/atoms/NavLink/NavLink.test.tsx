import React from 'react';

import NavLink from './NavLink';

import { render } from 'test-utils';

describe('<NavLink />', () => {
  test('Render with default style', () => {
    const { getByText } = render(
      <NavLink color="blue-500" hoverColor="black" link="Home" />
    );
    const link = getByText('Home');
    expect(link.className).toContain(
      'hover:border-black hover:text-black text-blue-500'
    );
  });
});
