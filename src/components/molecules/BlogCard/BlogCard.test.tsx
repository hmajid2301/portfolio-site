import React from 'react';

import BlogCard from './BlogCard';

import { render } from 'test-utils';

describe('<BlogCard />', () => {
  test.each([
    [
      {
        date: '2020-08-10',
        description: 'This is an article about random stuff ...',
        link: 'my-first-post',
        tags: ['test', 'python', 'css'],
        title: 'A random title',
      },
    ],
    [
      {
        date: '2020-08-01',
        description:
          'This is another article about some stuff such as python or js ...',
        link: 'my-second-post',
        tags: ['css'],
        title: 'A Title',
      },
    ],
  ])(`check BlogCard loads`, (blogItem) => {
    const { getByTestId, getByText } = render(<BlogCard item={blogItem} />);
    const card = getByTestId('BlogCard');

    const checks = [blogItem.title, blogItem.date, blogItem.description];
    checks.forEach((checkItem) => {
      const item = getByText(checkItem);
      expect(item).toBeTruthy();
    });
    blogItem.tags.forEach((tag) => {
      const item = getByText(`#${tag}`);
      expect(item).toBeTruthy();
    });
    expect(card).toHaveAttribute('href', `/blog/${blogItem.link}/`);
  });
});
