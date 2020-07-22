import styled from '@emotion/styled';
import { Index, SerialisedIndexData } from 'elasticlunr';
import { motion } from 'framer-motion';
import { Link, graphql, StaticQuery } from 'gatsby';

import React, { useState } from 'react';
import { FaSearch as Search } from 'react-icons/fa';
import tw from 'twin.macro';

import { Icon } from '~/components/atoms/Icon';
import { Input } from '~/components/atoms/Input';

export interface Props {
  /** The background of bar. */
  background: string;
  /** The color of text/icon in the bar. */
  color: string;
  /** The color when you hover/focus in the text input. */
  hoverColor?: string;
}

interface Page {
  id: string;
  field: string;
  title: string;
  path: string;
  tags: string;
}

const SearchInput = ({
  background,
  color,
  hoverColor,
  searchIndex,
}: {
  background: string;
  color: string;
  hoverColor?: string;
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
    <SearchContainer data-testid="SearchBar">
      <Icon
        background={background}
        className="px-2"
        color={color}
        hoverColor={hoverColor}
        icon={<Search size="1em" />}
        label="Search Icon"
      />
      <Input
        background={background}
        className="px-2"
        color={color}
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

const SearchBar = ({ background, color, hoverColor }: Props) => {
  const [showSearch, setShowSearch] = useState(false);

  return (
    <Container>
      <DesktopSearch>
        <StaticQuery
          query={graphql`
            query SearchIndexQuery {
              siteSearchIndex {
                index
              }
            }
          `}
          render={(data) => (
            <SearchInput
              background={background}
              color={color}
              hoverColor={hoverColor}
              searchIndex={data.siteSearchIndex.index}
            />
          )}
        />
      </DesktopSearch>
      <MobileSearch>
        <Icon
          color={color}
          hoverColor={hoverColor}
          icon={<Search size="1em" />}
          label="Search Icon"
          onClick={() => setShowSearch(!showSearch)}
        />

        {showSearch && (
          <SearchOverlay
            onClick={(e) => {
              if (e.target === e.currentTarget) {
                setShowSearch(!showSearch);
              }
            }}
            onKeyPress={(e) => {
              if (e.target === e.currentTarget) {
                setShowSearch(!showSearch);
              }
            }}
            role="presentation"
          >
            <StaticQuery
              query={graphql`
                query SearchIndexQuery {
                  siteSearchIndex {
                    index
                  }
                }
              `}
              render={(data) => (
                <SearchInput
                  background={background}
                  color={color}
                  hoverColor={hoverColor}
                  searchIndex={data.siteSearchIndex.index}
                />
              )}
            />
          </SearchOverlay>
        )}
      </MobileSearch>
    </Container>
  );
};

const Container = tw.div`flex-grow`;

const SearchContainer = tw.div`flex w-full text-left h-12 text-lg focus-within:shadow-outline`;

const DesktopSearch = tw.div`hidden lg:flex`;

const MobileSearch = tw.div`flex lg:hidden`;

const SearchOverlay = motion.custom(styled.div`
  ${tw`absolute bg-black inset-0 flex items-center justify-center p-5 bg-opacity-75`}
`);

export default SearchBar;
