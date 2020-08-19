import React from 'react';

import { SearchItem } from '~/components/atoms/SearchItem';

export interface Props {
  /** The results from the search. */
  results: Page[];
  /** The query made, used for highlighting. */
  query: string;
  /** The contents to prepend to the path url i.e. /blog/ . */
  urlPrepend: string;
}

export interface Page {
  /** The id of the page. */
  id: string;
  /** The title of the page. */
  title: string;
  /** The path to the page. */
  path: string;
  /** The contents of the page . */
  content: string;
}

const SearchItems = ({ results, query, urlPrepend }: Props) => (
  <ul>
    {results.map((page: Page) => (
      <li key={page.id}>
        <SearchItem
          content={page.content}
          path={`${urlPrepend}/${page.path}/`}
          query={query}
          title={page.title}
        />
      </li>
    ))}
  </ul>
);

export default SearchItems;
