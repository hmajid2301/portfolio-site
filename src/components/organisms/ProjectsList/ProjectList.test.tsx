import React from 'react';

import ProjectList from './ProjectsList';

import { render } from 'test-utils';

const data = [
  {
    name: 'stegappasaurus',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi sollicitudin lectus et est malesuada, quis sodales est rutrum. Fusce a arcu iaculis, faucibus enim eget, imperdiet massa. Cras vestibulum mauris sapien, ac pretium elit posuere a. Nulla venenatis justo at erat ornare dapibus. Maecenas nec facilisis metus, non ornare felis.',
    image:
      'https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=700&h=400',
    url: '/project/stegappasaurus',
  },
  {
    name: 'composerisation',
    description: 'Converts commands between docker run and docker compose.',
    image:
      'https://images.unsplash.com/photo-1593338717285-fc56ada95667?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=700&h=400',
    url: '/project/composerisation',
  },
];

describe('<ProjectList />', () => {
  test('Render with default styles', () => {
    const { getByText } = render(<ProjectList projectItems={data} />);

    const codeBlock = getByText(
      'Converts commands between docker run and docker compose'
    );
    expect(codeBlock).toBeTruthy();
  });
});
