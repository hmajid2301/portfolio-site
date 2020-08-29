import React from 'react';

import Links from './Links';

import { render } from 'test-utils';

describe('<Links />', () => {
  test.each([
    [
      [
        { name: '🏠️ Home', link: '/' },
        { name: '✍️ Blog', link: '/blog/' },
        { name: '🧮️ Stats', link: '/stats/' },
        { name: '📋 Uses', link: '/uses/' },
      ],
      'text-primary',
      'My label',
      'text-2xl',
    ],
    [
      [
        { name: '🏠️ Home', link: '/' },
        { name: '✍️ Blog', link: '/blog/' },
      ],
      'px-4 py-4',
      'My other label',
      'bg-primary',
    ],
  ])(`check Links loads`, (links, className, label, linkClassName) => {
    const { getByText, getByLabelText } = render(
      <Links
        className={className}
        label={label}
        linkClassName={linkClassName}
        links={links}
      />
    );
    const ariaLabel = getByLabelText(label);
    expect(ariaLabel.className).toContain(className);

    links.forEach((link) => {
      const linkText = getByText(link.name);
      expect(linkText.className).toContain(linkClassName);
    });
  });
});
