import styled from '@emotion/styled';
import { motion } from 'framer-motion';
import { graphql, StaticQuery } from 'gatsby';

import React, { useState } from 'react';
import { FaSearch as Search } from 'react-icons/fa';
import tw from 'twin.macro';

import { Icon } from '~/components/atoms/Icon';
import { SearchInput } from '~/components/molecules/SearchInput';

const SearchBar = () => {
  const [showSearch, setShowSearch] = useState(false);

  return (
    <Container>
      <Icon
        icon={<Search size="1.3em" />}
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
              <SearchInput searchIndex={data.siteSearchIndex.index} />
            )}
          />
        </SearchOverlay>
      )}
    </Container>
  );
};

const Container = tw.div`flex-grow flex`;

const SearchOverlay = motion.custom(styled.div`
  ${tw`absolute bg-black inset-0 flex items-center justify-center p-5 bg-opacity-75`}
`);

export default SearchBar;
