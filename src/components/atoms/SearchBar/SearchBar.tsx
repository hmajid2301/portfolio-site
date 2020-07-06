import React from 'react';
import { FaSearch as Search } from 'react-icons/fa';
import tw from 'twin.macro';

export interface Props {
  /** The background of bar. */
  background: string;
  /** The color of text/icon in the bar. */
  color: string;
}

const SearchBar = ({ background, color }: Props) => (
  <SearchBarContainer
    className={`bg-${background} text-${color}`}
    data-testid="SearchBar"
    type="button"
  >
    <Search className="inline mr-3" size="1.2em" />
    <TextInput className={`placeholder-${color}`} placeholder="Search" />
  </SearchBarContainer>
);

const SearchBarContainer = tw.button`rounded-full py-3 px-5 font-body`;

const TextInput = tw.input`bg-transparent text-lg`;

export default SearchBar;
