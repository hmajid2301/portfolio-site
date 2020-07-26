import { Index, SerialisedIndexData } from 'elasticlunr';
import React, { useState, useEffect } from 'react';
import { FaSearch as Search } from 'react-icons/fa';
import tw from 'twin.macro';

import SearchItems from '../SearchItems/SearchItems';

import { Icon } from '~/components/atoms/Icon';
import { Input } from '~/components/atoms/Input';

interface Page {
  id: string;
  field: string;
  title: string;
  path: string;
  tags: string;
  html: string;
}

const SearchInput = ({
  searchIndex,
}: {
  searchIndex: SerialisedIndexData<Page>;
}) => {
  const index = Index.load(searchIndex);
  const [query, setQuery] = useState('');
  const [results, setResults] = useState<Page[]>([]);

  useEffect(() => {
    searchResults('react');
  }, []);

  function searchResults(searchQuery: string) {
    // @ts-ignore
    const res = index.search(searchQuery, { expand: true }).map(({ ref }) => {
      return index.documentStore.getDoc(ref);
    });
    setResults(res);
  }

  return (
    <SearchContainer>
      <SearchInputContainer>
        <Icon
          className="px-2"
          icon={<Search size="1em" />}
          label="Search Icon"
        />
        <Input
          className="px-2"
          label="Search"
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
            const searchQuery = e.target.value;
            setQuery(searchQuery);
            searchResults(searchQuery);
          }}
          placeholder="Search"
          value={query}
        />
      </SearchInputContainer>
      <ul>
        <SearchItems results={results} />
      </ul>
    </SearchContainer>
  );
};

const SearchContainer = tw.div`max-w-screen-md mx-auto pt-8`;

const SearchInputContainer = tw.div`flex w-full text-left h-12 text-lg focus-within:shadow-outline my-8`;
export default SearchInput;
