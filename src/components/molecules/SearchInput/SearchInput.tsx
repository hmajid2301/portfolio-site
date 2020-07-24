import { Index, SerialisedIndexData } from 'elasticlunr';
import { Link } from 'gatsby';

import React, { useState } from 'react';
import { FaSearch as Search } from 'react-icons/fa';
import tw from 'twin.macro';

import { Icon } from '~/components/atoms/Icon';
import { Input } from '~/components/atoms/Input';

interface Page {
  id: string;
  field: string;
  title: string;
  path: string;
  tags: string;
}

const SearchInput = ({
  searchIndex,
}: {
  searchIndex: SerialisedIndexData<Page>;
}) => {
  const index = Index.load(searchIndex);
  const [query, setQuery] = useState('');
  const [results, setResults] = useState<Page[]>([]);

  function search(evt: React.ChangeEvent<HTMLInputElement>) {
    setQuery(evt.target.value);
    const res = index
      .search(query, { fields: { field: { expand: true } } })
      .map(({ ref }) => {
        return index.documentStore.getDoc(ref);
      });
    setResults(res);
  }

  return (
    <SearchContainer>
      <Icon className="px-2" icon={<Search size="1em" />} label="Search Icon" />
      <Input
        className="px-2"
        label="Search"
        onChange={search}
        placeholder="Search"
        value={query}
      />
      {results.map((page: Page) => (
        <li key={page.title}>
          <Link to={`/blog/${page.path}`}>{page.title}</Link>
          {`: ${page.tags}`}
        </li>
      ))}
    </SearchContainer>
  );
};

const SearchContainer = tw.div`flex w-full text-left h-12 text-lg focus-within:shadow-outline`;

export default SearchInput;
