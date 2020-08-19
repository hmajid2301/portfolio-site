import React from 'react';

import SearchItems from './SearchItems';

import { render } from 'test-utils';

describe('<SearchItem />', () => {
  test.each([
    [[], 'My random query', '/blog'],
    [
      [
        {
          content: 'The contents of this post',
          path: 'my-first-post',
          title: 'A title',
          id: 'title',
        },
        {
          content: 'The contents of this post  and other contents',
          path: 'my-second-post',
          title: 'Another title',
          id: 'title2',
        },
      ],
      'My random query',
      '/blog',
    ],
  ])(`check SearchItem loads`, (results, query, urlPrepend) => {
    const { getByText } = render(
      <SearchItems query={query} results={results} urlPrepend={urlPrepend} />
    );

    results.forEach((result) => {
      const title = getByText(result.title);
      expect(title.closest('a')).toHaveAttribute(
        'href',
        `${urlPrepend}/${result.path}/`
      );
    });
  });
});
