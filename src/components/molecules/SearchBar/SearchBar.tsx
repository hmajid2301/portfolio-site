import styled from '@emotion/styled';
import React, { useState } from 'react';
import tw from 'twin.macro';

import { SearchIcon } from '~/components/atoms/SearchIcon';

export interface Props {
  /** The background of bar. */
  background: string;
  /** The color of text/icon in the bar. */
  color: string;
}

const SearchBar = ({ background, color }: Props) => {
  const [showSearch, setShowSearch] = useState(false);

  return (
    <SearchBarContainer
      className={`bg-${background} text-${color}`}
      data-testid="SearchBar"
      type="button"
    >
      <SearchIcon
        background={background}
        color={color}
        onClick={() => setShowSearch(!showSearch)}
      />
      <TextInput
        active={showSearch}
        className={`placeholder-${color} ${showSearch ? 'ml-3' : 'ml-0'}`}
        placeholder="Search"
      />
    </SearchBarContainer>
  );
};

const SearchBarContainer = tw.button`font-body rounded-full`;

const TextInput = styled.input<{ active: boolean }>`
  width: ${(props) => (props.active ? '15rem' : '0')};
  background: transparent;
  transition: all 0.3s ease-in-out;
  ${tw`bg-transparent text-lg`};
`;

export default SearchBar;
