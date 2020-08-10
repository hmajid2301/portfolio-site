import styled from '@emotion/styled';
import { graphql, StaticQuery } from 'gatsby';
import React, { useState, useContext } from 'react';
import tw from 'twin.macro';

import { Icon } from '~/components/atoms/Icon';
import { Search } from '~/components/molecules/Search';
import { ThemeContext } from '~/providers/Theme';

const SearchBar = () => {
  const [showSearch, setShowSearch] = useState(false);
  const { theme } = useContext(ThemeContext);

  function toggleSearch(
    event:
      | React.KeyboardEvent<HTMLDivElement>
      | React.MouseEvent<HTMLDivElement>
  ) {
    if ((event.target as HTMLInputElement).placeholder !== 'Search') {
      setShowSearch(!showSearch);
    }
  }

  return (
    <SearchComponent>
      <Icon
        dataId="SearchIcon"
        icon="search"
        label="Search Icon"
        onClick={() => setShowSearch(!showSearch)}
        size="1.3em"
      />

      <SearchOverlay
        currentTheme={theme}
        onClick={(e) => toggleSearch(e)}
        onKeyPress={(e) => toggleSearch(e)}
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
            <SearchContainer>
              {showSearch && (
                <Search searchIndex={data.siteSearchIndex.index} />
              )}
            </SearchContainer>
          )}
        />
      </SearchOverlay>
    </SearchComponent>
  );
};

const SearchComponent = tw.div`flex-grow flex`;

const SearchContainer = tw.div`overflow-y-scroll h-screen w-full`;

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
