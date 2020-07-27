import React from 'react';

import { SearchItem } from '~/components/atoms/SearchItem';

export interface Props {
  /** The results from the search. */
  results: Page[];
  /** The query made, used for highlighting. */
  query: string;
}

export interface Page {
  /** The query made, used for highlighting. */
  id: string;
  title: string;
  path: string;
  tags: string;
  html: string;
}

const SearchItems = ({ results, query }: Props) => (
  <ul>
    {results.map((page: Page) => (
      <li key={page.title}>
        <SearchItem
          content={page.html}
          path={page.path}
          query={query}
          title={page.title}
        />
      </li>
    ))}
  </ul>
);

export default SearchItems;
