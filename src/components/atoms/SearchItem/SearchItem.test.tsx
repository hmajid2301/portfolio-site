import React from 'react';

import SearchItem from './SearchItem';

import { render } from 'test-utils';

describe('<SearchItem />', () => {
  test.each([
    ['The contents of this post', '/blog/my-first-post', 'A title', 'title'],
  ])(`check SearchItem loads`, (content, path, title, query) => {
    const { getByTestId, getByText } = render(
      <SearchItem content={content} path={path} query={query} title={title} />
    );
    const searchItemLink = getByTestId('SearchItemLink');
    const searchItemText = getByText(`${content}...`);
    const readMore = getByText(`Read More`);

    expect(searchItemText).toBeTruthy();
    expect(searchItemLink).toHaveAttribute('href', path);
    expect(readMore).toHaveAttribute('href', path);

    query.split(' ').forEach((text) => {
      const queryItem = getByText(text);
      expect(queryItem).toBeTruthy();
    });
  });
});
