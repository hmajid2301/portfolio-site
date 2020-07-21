import React from 'react';

import RepositoryList from './RepositoryList';

import { render } from 'test-utils';

const data = [
  {
    name: 'stegappasaurus',
    description:
      'An mobile app, created using React Native. Uses steganography to hide messages in images.',
    link: '/project/stegappasaurus',
    stars: 4,
    url: 'https://gitlab.com/hmajid2301/stegappasaurus',
  },
  {
    name: 'composerisation',
    description: 'Converts commands between docker run and docker compose.',
    link: '/project/composerisation',
    stars: 1,
    url: 'https://gitlab.com/hmajid2301/composerisation',
  },
  {
    name: 'another_one',
    description: 'Converts commands between docker run and docker compose.',
    link: '/project/composerisation',
    stars: 10,
    url: 'https://gitlab.com/hmajid2301/composerisation',
  },
];

describe('<RepositoryList />', () => {
  test('Render with default styles', () => {
    const { getByText } = render(<RepositoryList repositoryItems={data} />);

    const codeBlock = getByText('another_one');
    expect(codeBlock).toBeTruthy();
  });
});
