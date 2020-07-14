import styled from '@emotion/styled';
import { motion } from 'framer-motion';
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

const SearchBar = ({ background, color, hoverColor }: Props) => {
  const [showSearch, setShowSearch] = useState(false);

  const SearchInput = (
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
        placeholder="Search"
      />
    </SearchContainer>
  );

  return (
    <Container>
      <DesktopSearch>{SearchInput}</DesktopSearch>
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
            {SearchInput}
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
