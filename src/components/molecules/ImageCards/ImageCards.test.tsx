import React from 'react';

import ImageCards from './ImageCards';

import { render } from 'test-utils';

describe('<ImageCards />', () => {
  test.each([
    [
      [
        {
          alt: 'Alt for an image',
          image:
            'https://images.unsplash.com/photo-1593642531955-b62e17bdaa9c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1650&q=80',
          link: 'github.com/',
          text: 'Github',
        },
        {
          alt: 'Another alt for an image',
          image:
            'https://images.unsplash.com/photo-1593642532973-d31b6557fa68?ixlib=rb-1.2.1&auto=format&fit=crop&w=1100&q=80',
          link: 'gitlab.com/',
          text: 'Gitlab',
        },
        {
          alt: 'Another alt for an image2',
          image:
            'https://images.unsplash.com/photo-1593642532973-d31b6557fa68?ixlib=rb-1.2.1&auto=format&fit=crop&w=1100&q=80',
          link: 'gitlab2.com/',
          text: 'Gitlab2',
        },
      ],
      [
        {
          alt: 'Another alt for an image',
          image:
            'https://images.unsplash.com/photo-1593642532973-d31b6557fa68?ixlib=rb-1.2.1&auto=format&fit=crop&w=1100&q=80',
          link: 'gitlab.com/',
          text: 'Gitlab',
        },
        {
          alt: 'Another alt for an image2',
          image:
            'https://images.unsplash.com/photo-1593642532973-d31b6557fa68?ixlib=rb-1.2.1&auto=format&fit=crop&w=1100&q=80',
          link: 'gitlab2.com/',
          text: 'Gitlab2',
        },
      ],
      [],
    ],
  ])(`check ImageCards loads`, (items) => {
    const { getAllByTestId } = render(
      <ImageCards dataId="ImageCards" items={items} />
    );
    const card = getAllByTestId('ImageCards');
    expect(card).toHaveLength(items.length);
  });
});
