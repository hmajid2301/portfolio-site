import React from 'react';

import { SearchItem } from '~/components/atoms/SearchItem';

export interface Props {
  /** The results from the search. */
  results: Page[];
  /** The query made, used for highlighting. */
  query: string;
}

export interface Page {
  /** The id of the page. */
  id: string;
  /** The title of the page. */
  title: string;
  /** The path to the page. */
  path: string;
  /** The tags of that page. */
  tags: string;
  /** The contents of the page . */
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
