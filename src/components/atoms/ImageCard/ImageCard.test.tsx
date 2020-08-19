import React from 'react';

import ImageCard from './ImageCard';

import { render } from 'test-utils';

describe('<ImageCard />', () => {
  test.each([
    [
      'Alt for an image',
      'https://images.unsplash.com/photo-1593642531955-b62e17bdaa9c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1650&q=80',
      'github.com/',
      'Github',
    ],
    [
      'Another alt for an image',
      'https://images.unsplash.com/photo-1593642532973-d31b6557fa68?ixlib=rb-1.2.1&auto=format&fit=crop&w=1100&q=80',
      'gitlab.com/',
      'Gitlab',
    ],
  ])(`check image card loads`, (alt, image, link, text) => {
    const { getByText, getByTestId } = render(
      <ImageCard alt={alt} image={image} link={link} text={text} />
    );

    const imageCardText = getByText(text);
    const imageCard = getByTestId('ImageCard');
    const imageCardImage = getByTestId('ImageCardImage');
    expect(imageCardText.innerHTML).toBe(text);
    expect(imageCardImage).toHaveAttribute('alt', alt);
    expect(imageCardImage).toHaveAttribute('src', image);
    expect(imageCard).toHaveAttribute('href', link);
  });
});
