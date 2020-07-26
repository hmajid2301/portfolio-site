import React from 'react';

import { SearchItem } from '~/components/atoms/SearchItem';

export interface Props {
  results: Page[];
}

export interface Page {
  id: string;
  title: string;
  path: string;
  tags: string;
  html: string;
}

const SearchItems = ({ results }: Props) => (
  <ul>
    {results.map((page: Page) => (
      <li key={page.title}>
        <SearchItem content={page.html} path={page.path} title={page.title} />
      </li>
    ))}
  </ul>
);

export default SearchItems;
