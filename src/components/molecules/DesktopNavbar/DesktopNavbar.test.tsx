import React from 'react';

import DesktopNavbar from './DesktopNavbar';

import { render } from 'test-utils';

describe('<DesktopNavBar />', () => {
  test('Render with default nav bar', () => {
    const links = ['Link1', 'Link2', 'Link3'];
    const { getAllByText } = render(<DesktopNavbar links={links} />);

    links.forEach((link) => {
      const linkElement = getAllByText(link)[0] as HTMLAnchorElement;
      expect(linkElement.href).toBe(`http://localhost/${link}`);
      expect(linkElement.className).toContain(
        `hover:border-blue-500 hover:text-blue-500`
      );
    });
  });
});
