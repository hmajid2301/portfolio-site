import React from 'react';
import tw from 'twin.macro';

import { SearchIcon } from '~/components/atoms/SearchIcon';

export interface Props {
  /** The background of bar. */
  background: string;
  /** The color of text/icon in the bar. */
  color: string;
  /** The color when you hover/focus in the text input. */
  hoverColor?: string;
}

const SearchBar = ({ background, color, hoverColor }: Props) => {
  return (
    <SearchBarContainer
      className={`bg-${background} text-${color} focus-within:bg-${hoverColor}`}
      data-testid="SearchBar"
    >
      <SearchIcon color={color} hoverColor={hoverColor} />
      <TextInput className={`placeholder-${color}`} placeholder="Search" />
    </SearchBarContainer>
  );
};

const SearchBarContainer = tw.div`font-body w-full text-left`;

const TextInput = tw.input`bg-transparent text-lg ml-3 w-9/12`;

export default SearchBar;
