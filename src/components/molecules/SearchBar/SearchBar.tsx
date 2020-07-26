import styled from '@emotion/styled';
import { graphql, StaticQuery } from 'gatsby';

import React, { useState, useContext } from 'react';
import { FaSearch as Search } from 'react-icons/fa';
import tw from 'twin.macro';

import { Icon } from '~/components/atoms/Icon';
import { SearchInput } from '~/components/molecules/SearchInput';
import { ThemeContext } from '~/providers/Theme';

const SearchBar = () => {
  const [showSearch, setShowSearch] = useState(false);
  const { theme } = useContext(ThemeContext);

  return (
    <Container>
      <Icon
        icon={<Search size="1.3em" />}
        label="Search Icon"
        onClick={() => setShowSearch(!showSearch)}
      />

      <SearchOverlay
        currentTheme={theme}
        onClick={(e) => {
          if ((e.target as HTMLInputElement).placeholder !== 'Search') {
            setShowSearch(!showSearch);
          }
        }}
        onKeyPress={(e) => {
          if ((e.target as HTMLInputElement).placeholder !== 'Search') {
            setShowSearch(!showSearch);
          }
        }}
        role="presentation"
        showSearch={showSearch}
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
            <SearchInputContainer>
              <SearchInput searchIndex={data.siteSearchIndex.index} />
            </SearchInputContainer>
          )}
        />
      </SearchOverlay>
    </Container>
  );
};

const Container = tw.div`flex-grow flex`;

const SearchInputContainer = tw.div`overflow-y-scroll h-screen w-full`;

const SearchOverlay = styled.div<{
  showSearch: boolean;
  currentTheme: string;
}>`
  opacity: ${(props) => (props.showSearch ? 1 : 0)};
  display: ${(props) => (props.showSearch ? 'flex' : 'none')};
  transition: opacity 150ms linear 0s;
  background: ${(props) =>
    props.currentTheme === 'dark'
      ? 'rgba(0, 0, 0, 0.9)'
      : 'rgba(255, 255, 255, 0.9)'};
  ${tw`fixed inset-0 bg-opacity-50 z-50 m-0 items-center justify-center h-screen w-screen`};
`;

export default SearchBar;
