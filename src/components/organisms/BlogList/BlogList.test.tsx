import React from 'react';

import BlogList from './BlogList';

import { render } from 'test-utils';

const data = [
  {
    tags: ['react', 'gatsby'],
    date: '10 May 2020',
    image:
      'https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=640&q=80',
    title: 'Tips on how to travel safely in foreign countries',
    url: 'https://timerse.com',
  },
  {
    date: '10 January 2020',
    tags: ['python', 'javascript'],
    image:
      'https://images.unsplash.com/photo-1592848386144-04df6ee54ff8?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=640&q=80',
    title: 'Enjoying the beach life while on a vacation',
    url: 'https://reddit.com',
  },
  {
    date: '10 January 2020',
    tags: ['python', 'javascript'],
    image:
      'https://images.unsplash.com/photo-1592848386144-04df6ee54ff8?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=640&q=80',
    title: 'Enjoying the beach life while on a vacation',
    url: 'https://reddit.com',
  },
];

describe('<BlogList />', () => {
  test('Render with default styles', () => {
    const { getByText } = render(<BlogList data={data} />);

    const codeBlock = getByText(
      'Tips on how to travel safely in foreign countries'
    );
    expect(codeBlock).toBeTruthy();
  });
});
