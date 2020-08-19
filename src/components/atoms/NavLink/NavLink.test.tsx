import React from 'react';

import NavLink from './NavLink';

import { render } from 'test-utils';

describe('<NavLink />', () => {
  test.each([['text-primary', { name: 'Home', link: '/' }]])(
    `check NavLink loads`,
    (className, link) => {
      const { getByText } = render(
        <NavLink className={className} link={link} />
      );

      const linkElement = getByText(link.name);
      expect(linkElement.className).toContain(className);
      expect(linkElement).toHaveAttribute('href', link.link);
    }
  );
});
